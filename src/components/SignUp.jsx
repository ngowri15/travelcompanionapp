import "./styles.css";
import Navbar from './Navbar';
import {
  Link,
} from "react-router-dom";
import React, {useState} from "react";
import UserPool from "../UserPool";
function SignUp() {

  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  const[givenname, setGivenname]=useState("");
  const[familyname, setFamilyname]=useState("");

  fileSelectedHandler=event=>{
    console.log(event.target.files[0]);
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    UserPool.signUp(username,password,givenname,familyname,[],null,(err,data)=>{
      if(err){
        console.error(err);
      
      }
      console.log(data);
    })
  }

  const signUpForm = (
    <form onSubmit={onSubmit} >
    <div className="form">
    <div className="input-container">
          <input value={username} onChange={(event)=>setUsername(event.target.value)} type="text" placeholder="Username" required/>
        </div>
        <div className="input-container">
          <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Password" required autocomplete="new-password"/>
        </div>
      <div className="input-container">
          <input value={givenname} onChange={(event)=>setGivenname(event.target.value)} type="text" placeholder="Given Name" required />
        </div>
        <div className="input-container">
          <input value={familyname} onChange={(event)=>setFamilyname(event.target.value)} type="text" placeholder="Family Name" required />
        </div>
        <div className="input-container">
          <input type="file" onChange={this.fileSelestedHandler} required />
        
        </div>
        <div className="input-container">
          <input type="text" placeholder="Email" required />
        </div>
       
        
        <div className="input-container">
        <select className="input-container">
          <option>Choose Your Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Phone Number" required />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Address" required/>
        </div>
        
        
        <div className="input-container">
        <label >Choose Your DOB</label>
        <input type="date"/>

        </div>
        <div className="input-container">
          <input type="text" placeholder="Secondary Email" required />
        </div>


        <div className="button-container">
          <input type="submit" value="Sign Up"/>
        </div>
        <div className="signup">
          <br/><br/>
          <label>Already Have An Account? </label>
          <Link to="/signin"><label className="sign-up-label">Sign In</label></Link>
        </div>
    </div>
    </form>
  );
  return (
    <form onSubmit={onSubmit}>
    <div>
    <Link to="/"><Navbar /></Link>
      <div className="app">
      <div className="sign-up-form">
        <div className="title">Sign Up</div>
        {signUpForm}
      </div>
    </div>
    </div>
    </form>
  );
}

export default SignUp;