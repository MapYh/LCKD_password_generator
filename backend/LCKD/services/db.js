import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

//Create db and init.
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
});
const db = DynamoDBDocumentClient.from(client);

module.exports = db;
