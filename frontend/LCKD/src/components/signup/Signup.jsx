import React from "react";
import "./signup.css";

export default function Signup({ setUsername, setpassword }) {
  function handleSubmitUsername(event) {
    const username = event.target.value;
    setUsername(username);
    console.log("Username", username);
  }

  function handleSubmitPassword(event) {
    const password = event.target.value;
    setpassword(password);

    console.log("Password", password);
  }

  return (
    <div className="form-footer">
      <form className="form">
        <label className="form-label" onChange={handleSubmitUsername}>
          <input
            className="form-label-input"
            type="text"
            name="username"
            placeholder="Username"
          />
        </label>
        <section className="spacer"></section>
        <label className="form-label" onChange={handleSubmitPassword}>
          <input
            className="form-label-input"
            type="text"
            name="password"
            placeholder="Password"
          />
        </label>
        {/* <input className="form-label-btn" type="submit" value="+" /> */}
      </form>
    </div>
  );
}
