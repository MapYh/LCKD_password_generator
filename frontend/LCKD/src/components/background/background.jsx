import React from "react";
import "./background.css";

export default function Background(props) {
  return (
    <>
      <div className={`${props.settings.classname}`}>
        {props.node_nav}
        {props.landing_node}
        {props.menu_item_node}
        {props.form_node}
        {props.button_node}
      </div>
    </>
  );
}
