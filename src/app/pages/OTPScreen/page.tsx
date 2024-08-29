"use client";
import React, { useState } from "react";
import "./OTPScreen.css";
import { useRouter } from "next/navigation";
import "../Signup/Signup.css";
import Services from "@/app/Exports/Services";

function OTPScreen() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "" , ""]); // Array to store each OTP digit

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleProceedClick = async () => {
    let email = localStorage.getItem("email");
    const otpString = otp.join("").trim(); // Trim any whitespace
  
    console.log("Entered OTP:", otpString);
  
    const response = await Services.verifyOTP(email, otpString);
    if (response == 1) {
      router.push("/pages/BrandInfo");
    } else if (response == -1) {
      console.log("Incorrect OTP");
    } else {
      console.log("Something went wrong!!");
    }
  };
  

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
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
              />
            ))}
          </div>
          <button className="otp-button" onClick={handleProceedClick}>
            Proceed
          </button>
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
