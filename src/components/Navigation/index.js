import React from "react";
import "./style.css";
import logo from "./logo.png";

function navigation(props) {
  return (
    <div className="ui top fixed menu">
      <div className="item">
        <img src={logo} alt={"Logo"} className={"logo-img"} />
      </div>

      <a className="item active" href="#support">
        Support
      </a>
      <a className="item" href="#faq">
        FAQ
      </a>
      <a className="item" href="#login">
        Sign-in
      </a>
    </div>
  );
}

export default navigation;
