import { sendResponse, sendError } from "../../utils/sendResponse.js";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import db from "../../services/db.js";
import { getAccount } from "../../services/getAccount.js";
import { uuid } from "uuidv4";
import middy from "@middy/core";
import { loginsignupvalidation } from "../../services/requestValidation/login_signupValidation.js";
import crypto from "crypto-js";

async function createAccount(username, ciphertext) {
  const userTable = process.env.USER_TABLE;
  console.log("userTable", userTable);
  const userId = uuid();
  console.log("userId", userId);
  var bytes = crypto.AES.decrypt(ciphertext, "secret key 123");
  var password = bytes.toString(Crypto.enc.Utf8);
  try {
    const newUser = {
      userId: userId,
      username,
      password,
    };

    //  saving a new user to the database.
    const result = await db.send(
      new PutCommand({
        TableName: userTable,
        Item: newUser,
      })
    );
    if (result) {
      return true;
    } else return false;
  } catch (error) {
    return sendError(500, { success: false, message: error.message });
  }
}

const handler = middy()
  .handler(async (event) => {
    try {
      //Error handling from middleware.
      if (event.error == "400")
        return sendError(400, {
          success: false,
          message:
            "Invalid request body, it should contain the username and password.",
        });
      const { username, password } = JSON.parse(event.body);
      //Checks if an account exists in the database with the user provided username.
      let foundAccount = await getAccount(username);

      if (foundAccount) {
        return sendError(400, {
          success: false,
          message: "A account with that name already exists.",
        });
      }
      const truIfCreatedAccount = await createAccount(username, password);
      if (truIfCreatedAccount) {
        return sendResponse({
          success: true,
          message: `A account was created with the username: ${username}`,
        });
      }
    } catch (error) {
      return sendError(500, { success: false, message: error.message });
    }
  })
  .use(loginsignupvalidation);
module.exports = { handler };
