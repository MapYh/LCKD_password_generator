import React, { useState } from "react";
import Background from "../components/background/background";
import Template from "../components/text-template/template";
/* import { createSlice, configureStore } from "@reduxjs/toolkit"; */
import Button from "../components/start_btn/start_btn";
import Nav from "../components/nav/nav";
import Signup from "../components/signup/Signup";

import "../loading/loading.css";

const objectBackground = {
  classname: "background-styling background",
  classnamebtnCenter: "btn_center",
  linkTo: "/login",
  classBtnStyling: "button_settings ",
  btn_text: "LET ME IN",
  classnameBtn: "button_settings-styling",
  nav_text: "Sign up",
};

const navLanding = {
  linkTo: "/signup",
};

const Loading = () => {
  const [username, setUsername] = useState();
  const [password, setpassword] = useState();

  return (
    <div>
      <Background
        settings={{
          classname: `${objectBackground.classname}`,
        }}
        node_nav={
          <Nav
            navSettings={{
              nav_text: `${objectBackground.nav_text}`,
              linkTo: `${navLanding.linkTo}`,
            }}
          />
        }
        landing_node={<Template />}
        signup_node={
          <Signup setUsername={setUsername} setpassword={setpassword} />
        }
        button_node={
          <Button
            stylingBtn={{
              linkTo: `${objectBackground.linkTo}`,
              classBtnStyling: `${objectBackground.classBtnStyling}`,
              btn_text: `${objectBackground.btn_text}`,
              classnamebtnCenter: `${objectBackground.classnamebtnCenter}`,
              classname: `${objectBackground.classnameBtn}`,
            }}
          />
        }
      />
    </div>
  );
};
export default Loading;
