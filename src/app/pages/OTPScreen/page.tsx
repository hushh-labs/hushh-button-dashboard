
"use client"
import React from "react";
import "./OTPScreen.css";
import { useRouter } from "next/navigation";
import '../Signup/Signup.css'
import { log } from "console";
function OTPScreen() {
  const router = useRouter();
  return (
    <>
     
      <div className="Signup__header">
        <div className="Signup__headerRight"></div>
        <div className="Signup__headerLeft">
          <p>English (United States)</p>
          <button>Login</button>
        </div>
      </div>
      <div className="otp-screen">
        <div className="otp-container">
          <h1>Enter OTP</h1>
          <div className="otp-inputs">
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
          </div>
          <button className="otp-button" onClick={() =>{
            console.log("Button clicked");
            
            router.push("/pages/BasicInfo")
          }}>Proceed</button>
          <div className="otp-footer">
            <p>Resend OTP in 30 sec</p>
            <p>
              Already have an account? <a href="#!">Log in</a>
            </p>
          </div>
        </div>
        <div className="otp-right-pane"></div>
      </div>
    </>
  );
}

export default OTPScreen;
