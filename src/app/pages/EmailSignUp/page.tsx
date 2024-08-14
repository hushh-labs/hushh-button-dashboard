"use client"
import React, { useState } from "react";
import "./EmailSignUp.css";
import '../Signup/Signup.css'
import { useRouter } from "next/navigation";
import Services from "@/app/Exports/Services";
function EmailSignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleEmailClick = async () => {
    localStorage.setItem("email", email);
    const response = await Services.sendOTP(email);
    if (response == 1) {
      router.push('/pages/OTPScreen');
    }
  };
  
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
            <input type="text" onChange={(e) =>{
              setEmail(e.target.value)
            }} />
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
