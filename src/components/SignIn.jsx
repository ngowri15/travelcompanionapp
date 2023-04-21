import "./styles.css";
import Navbar from './Navbar';
import {
  Link
} from "react-router-dom";

function SignIn() {

  const signInForm = (
    <div className="form">
        <div className="input-container">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" autocomplete="new-password" required />
        </div>
        <div className="button-container">
          <input type="submit" value="Sign In"/>
        </div>
        <div className="signup">
          <br/><br/>
          <label>New To Travel Companion? </label>
          <Link to="/signup"><label className="sign-in-label">Sign Up</label></Link>
        </div>

    </div>
  );
  return (
    <div>
    <Link to="/"><Navbar /></Link>
      <div className="app">
      <div className="sign-in-form">
        <div className="title">Sign In</div>
        {signInForm}
      </div>
    </div>
    </div>
  );
}

export default SignIn;