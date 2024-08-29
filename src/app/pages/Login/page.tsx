"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import qs from "qs";
import "./LoginPage.css";
import Images from "@/app/Exports/Images";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinueWithEmail = () => {
    router.push("/pages/EmailSignUp");
  };

  const handleLoginClick = () => {
    router.push("/pages/Login");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = qs.stringify({
        email: email.trim(),
        password: password.trim(),
      });

      const response = await axios.post(
        "http://localhost:3001/button-Admin/v1/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Login successful:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("brand", JSON.stringify(response.data.brand));
      router.push('/pages/Dashboard');
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Signup__content">
      <div className="Signup__leftContainer">
        <div className="Signup__innerContainer">
          <img src={Images.hushhLogo.src} alt="" />
          <h4>Get your Brand Card with hushh</h4>

          <form onSubmit={handleLogin}>
            <div className="Signup__inputContainer">
              <label>E-mail or phone number</label>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Signup__inputContainer">
              <label>Password</label>
              <input
                type="password"
                placeholder="Type Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Forgot Password</p>
            </div>
            <button type="submit" className="Signup__submitButton" disabled={loading}>
              {loading ? "Logging in..." : "Sign In"}
            </button>
            {error && <p className="LoginPage__error">{error}</p>}
          </form>

          <div className="Signup__dividerContainer">
            <div className="Signup__dividerContainer1"></div>
            <p>or continue with other accounts</p>
            <div className="Signup__dividerContainer1"></div>
          </div>
          <div className="Signup__socialAccounts">
            <div className="Signup__socialAccountsIcon">
              <img src={Images.googleIcon.src} alt="Google Icon" />
            </div>
            <div className="Signup__socialAccountsIcon">
              <img src={Images.facebookIcon.src} alt="Facebook Icon" />
            </div>
            <div className="Signup__socialAccountsIcon">
              <img src={Images.appleIcon.src} alt="Apple Icon" />
            </div>
          </div>
          <p className="Signup__footerText">Don not  have an account? Sign up</p>
        </div>
      </div>

      <div className="Signup__rightContainer">
        <img src={Images.loginPageImage.src} alt="" />
      </div>
    </div>
  );
}

export default Login;
