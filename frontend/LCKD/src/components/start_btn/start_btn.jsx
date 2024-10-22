import React from "react";
import "./start_btn.css";
import { Link } from "react-router-dom";

export default function start_btn(props) {
  return (
    <section className={`${props.stylingBtn.classnamebtnCenter}`}>
      <div className={`${props.stylingBtn.classname}`}>
        <Link
          to={`${props.stylingBtn.linkTo}`}
          className={`${props.stylingBtn.classBtnStyling}`}
          onClick={props.stylingBtn.start}
        >
          {props.stylingBtn.btn_text}
        </Link>
      </div>
    </section>
  );
}
