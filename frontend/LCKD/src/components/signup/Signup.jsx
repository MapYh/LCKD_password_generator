import React from "react";
import "./signup.css";

export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.todo.value;
    console.log(todo);
    console.log(event.target.elements.todo.value);
    console.log(event.target.todo.value);
  }
  return (
    <div className="form-footer">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          <input
            className="form-label-input"
            type="text"
            name="username"
            placeholder="Type username"
          />
        </label>
        <label className="form-label">
          <input
            className="form-label-input"
            type="text"
            name="password"
            placeholder="Type password"
          />
        </label>
        <input className="form-label-btn" type="submit" value="+" />
      </form>
    </div>
  );
}
