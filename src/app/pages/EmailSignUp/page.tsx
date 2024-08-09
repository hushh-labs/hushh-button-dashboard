"use client"
import React from "react";
import "./EmailSignUp.css";
import '../Signup/Signup.css'
import { useRouter } from "next/navigation";
function EmailSignUp() {
  const router = useRouter();
  const handleEmailClick =()=>{
router.push('/pages/OTPScreen')
  }
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
            <label>
              {" "}
              <p>Email</p>{" "}
            </label>
            <input type="text" />
          </span>

          <div className="EmailSignUp__contentContainer__button" onClick={handleEmailClick}>
            <p >Sign Up With Email</p>
          </div>
          <p className="EmailSignUp__TnC">
            By signing up, you agree to the Terms of use and Privacy Policy.{" "}
          </p>
          <p className="EmailSignUp__Login">Already have an account? Log in </p>
        </div>
        <div className="EmailSignUp__rightContainer"></div>
      </div>
    </div>
  );
}

export default EmailSignUp;
