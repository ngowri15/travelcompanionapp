import React from "react";
import "./Header.css";
import Logo from "./Logo.png"
import {
  Link,
} from "react-router-dom";


export default function Header() {
  return (
    <>
        <div className="header">
          <img alt=""
            src={Logo}
            width="375"
            height="160"
          /><br/>
          <Link to="/signin"><input type="submit" className="signinbutton" value="Sign In" /></Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/signup"><input type="submit" className="signupbutton" value="Sign Up" /></Link>
        </div>
    </>
  );
}
