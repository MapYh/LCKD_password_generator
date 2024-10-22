import React from "react";
import "./template.css";
import logo from "../../assets/logo.svg";

function Template() {
  return (
    <div className="template template-styling ">
      <div>
        <img className="styling logo" src={logo} alt="Logo to the frontpage" />
      </div>
      <section className="styling title">LCKD</section>
      <section className="styling text">KEEPING YOUR PASSWORDS SAFE</section>
    </div>
  );
}

export default Template;
