import "./styles.css";
import Navbar from './Navbar';
import {
  Link
} from "react-router-dom";
import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const onSubmit = (event) => {
    console.log("Submitting form...");
    event.preventDefault();

    const user =new CognitoUser({
      Username: username,
      Pool: UserPool
    })

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password : password,
    })
    user.authenticateUser(authDetails, {
      
      onSuccess: (data) => {
        console.log("Successful");

        console.log("onSuccess:", data);
        
        navigate('/');

        
    },
    onFailure: (err)=>{
      console.error("onFailure:",err);
    },
  newPasswordRequired: (data)=>{
    console.log("newPasswordRequired:", data);
  },
  });
  }
  
  return (
    <div>
      <Link to="/"><Navbar /></Link>
      <div className="app">
        <div className="sign-in-form">
          <div className="sign-in-text">Sign In</div>
          <form onSubmit={onSubmit} >
            <div className="form">
              <div className="input-container">
                <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username" required autoComplete="username" />
              </div>
              <div className="input-container">
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" autoComplete="new-password" required />
              </div>
              <div className="">
                <input className="sign-in-button" type="submit" value="Sign In" />
              </div>
              <div className="signup">
                <br /><br />
                <label>New To Travel Companion? </label>
                <Link to="/signup"><label className="sign-in-label">Sign Up</label></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;