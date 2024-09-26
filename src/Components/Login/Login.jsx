import React from 'react';
import './Login.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Sign Up");

  //password checking
  const [password, setPassword] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [validationMessages, setValidationMessages] = useState({length: false,uppercase: false,lowercase: false,digit: false,specialChar: false,});

  const validatePassword = (password) => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const digit = /[0-9]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    setValidationMessages({length, uppercase, lowercase, digit, specialChar,});
  };


  return (
    <div className='sign-in'>
      <form className="content">
        <div className="title">
          <h2>{currState}</h2>
          < FontAwesomeIcon icon={faXmark} id="cross-icon" onClick={() => setShowLogin(false)} />
        </div>

        <div className="popup">
          {
            currState === "Login" ? <></> : <input type='text' placeholder='Full Name' required />
          }
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            onFocus={() => setShowValidation(true)}
            onBlur={() => setShowValidation(false)} />

          {showValidation && currState === "Sign Up" && (
            <div className="validation-messages">
              <p style={{ color: validationMessages.length ? 'green' : '' }}>* Minimum 8 characters</p>
              <p style={{ color: validationMessages.uppercase ? 'green' : '' }}>* An uppercase letter</p>
              <p style={{ color: validationMessages.lowercase ? 'green' : '' }}>* A lowercase letter</p>
              <p style={{ color: validationMessages.digit ? 'green' : '' }}>* A digit (0-9)</p>
              <p style={{ color: validationMessages.specialChar ? 'green' : '' }}>* A special character</p>
            </div>
          )}
        </div>

        {
          currState === "Sign Up" ?
            <div className="condition">
              <input type="checkbox" required />
              <p>I agree to the Terms of Service, Privacy Policy and Content Policies</p>
            </div>
            : <></>
        }

        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        {
          currState === 'Login' ?
            <>
              <h1>or</h1>
              <button className="google"><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</button>
            </>
            : <></>
        }

        {currState === "Sign Up" ?
          <p id='bottom-line'>Already have an account?<span onClick={() => setCurrState("Login")}>Login</span></p>
          : <p id='bottom-line'>New to Eatzio?<span onClick={() => setCurrState("Sign Up")}>SignUp</span></p>
        }
      </form>
    </div>
  );
}

export default Login;