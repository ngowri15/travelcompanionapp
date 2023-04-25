import React from "react";
import "./Footer.css";
import {
    Link 
  } from "react-router-dom";


export default function Header(props) {
  return (
    <div className="footer">
     <Link to=""><label className="about-us">About Us</label></Link>
     <Link to=""><label className="contact">Contact</label></Link>
    </div>
  );
}
