
"use client"
import React, { useState } from "react";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import "../Signup/Signup.css";
import "./PasswordScreen.css";
import Services from "@/app/Exports/Services";
import { useRouter } from "next/navigation";
function PasswordScreen() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handlePasswordSubmit = async () => {
    console.log("This is the password being sent: ", password);
    
    const response = await Services.createPassword(password);
    if (response == 1) {
      router.push("/pages/BasicInfo");
    } else {
      console.log("Error Creating User");
    }
  };
  return (
    <div className="PasswordScreen__mainContainer">
      <div className="Signup__header">
        <div className="Signup__headerRight"></div>
        <div className="Signup__headerLeft">
          <p>English (United States)</p>
          <button>Login</button>
        </div>
      </div>
      <div className="PasswordScreen__contentContainer">
        <div className="PasswordScreen__contentContainer__left">
          <h4> Create Password</h4>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={handlePasswordSubmit}> Save</button>
        </div>
        <div className="PasswordScreen__contentContainer__right"></div>
      </div>
    </div>
  );
}

export default PasswordScreen;
