"use client";
import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import "../Signup/Signup.css";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      localStorage.setItem("user", JSON.stringify(response.data.user))
      localStorage.setItem("brand", JSON.stringify(response.data.brand))
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="LoginPage__mainContainer">
      <div className="Signup__header">
        <div className="Signup__headerRight"></div>
        <div className="Signup__headerLeft">
          <p>English (United States)</p>
          <button>Signup</button>
        </div>
      </div>

      <div className="LoginPage__contentContainer">
        <div className="LoginPage__contentContainer__left">
          <h4>Login</h4>
          <form onSubmit={handleLogin} className="LoginPage__contentContainer__left__input">
            <span>
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="LoginPage__error">{error}</p>}
          </form>
        </div>
        <div className="LoginPage__contentContainer__right"></div>
      </div>
    </div>
  );
}

export default LoginPage;
