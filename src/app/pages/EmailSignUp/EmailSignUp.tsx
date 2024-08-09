import React from "react";
import "./EmailSignUp.css";

function EmailSignUp() {
  return (
    <div className="EmailSignUp__mainContainer">
      <div className="Signup__header">
        <div className="Signup__headerRight"></div>
        <div className="Signup__headerLeft">
          <p>English (United States)</p>
          <button>Login</button>
        </div>
      </div>
      <div className="EmailSignUp__contentContainer">
        <div className="EmailSignUp__leftContainer">
          <h4>Sign up</h4>
          <span>
            <label>Email</label>
            <input type="text" />
          </span>
        </div>
        <div className="EmailSignUp__rightContainer"></div>
      </div>
    </div>
  );
}

export default EmailSignUp;
