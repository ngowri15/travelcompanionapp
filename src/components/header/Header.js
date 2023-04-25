import React from "react";
import "./Header.css";
import Logo from "./Logo.png"
import {
  Link,
} from "react-router-dom";
import { View } from "react-native";


export default function Header() {
  return (
    <>
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <div className="header">
      <img alt=""
					src={Logo}
					width="425"
					height="200"
				/>
      <Link to="/SignIn" className="link"><input type="submit" className="button-container" value="Sign In"/></Link>
      <div className="button-container">
      <Link to="/signup"><input type="submit" value="Sign Up"></input></Link>
        </div>
    </div>
    </View>
</>
  );
}
