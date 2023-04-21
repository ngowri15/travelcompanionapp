import "./styles.css";
import Navbar from './Navbar';
import {
  Link
} from "react-router-dom";

function SignUp() {

  const signUpForm = (
    <div className="form">
        <div className="input-container">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" autocomplete="new-password" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Confirm Password" autocomplete="new-password" required />
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
  );
  return (
    <div>
    <Link to="/"><Navbar /></Link>
      <div className="app">
      <div className="sign-up-form">
        <div className="title">Sign Up</div>
        {signUpForm}
      </div>
    </div>
    </div>
  );
}

export default SignUp;