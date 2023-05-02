import "./styles.css";
import Navbar from './Navbar';
import {
  Link,
} from "react-router-dom";
import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

Auth.configure({
  userPoolId: 'us-east-1_sJPPomxJg',
  userPoolWebClientId: '7tjnu35qacojp41f9chld5m96c',
});

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const eye = <FontAwesomeIcon icon={faEye} />;

  const handleSignUp = async (event) => {
    console.log()
    event.preventDefault();
    try {
      await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log('User signed up successfully!');
    } catch (error) {
      console.log('Error signing up:', error);
    }
  };

  return (
    <div>
      <Link to="/"><Navbar /></Link>
      <div className="app">
        <div className="sign-up-form">
          <div className="title">Sign Up</div>
          <form method="POST" onSubmit={handleSignUp} >
            <div className="form">

              <div className="input-container">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required autoComplete="username" />
              </div>

              <div className="input-container">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required autoComplete="new-password" />
                <i>{eye}</i>
              </div>

              <div className="input-container">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              </div>

              <div className="button-container">
                <button type="submit">Sign Up</button>
              </div>

              <div className="signup">
                <br /><br />
                <label>Already Have An Account? </label>
                <Link to="/signin"><label className="sign-up-label">Sign In</label></Link>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;