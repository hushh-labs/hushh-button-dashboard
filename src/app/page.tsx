"use client";

import React, { useEffect, useState } from "react";
import './home.css'; // Assume you have a CSS file for styling
import Pages from "./Exports/Pages";

export default function Home() {
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserExists(true);
    }
  }, []);

  // Show the content based on user existence
  return (
    <div className='container'>
      <div className='main'>
        <div className='content'>
          {userExists ? <Pages.DataPoints /> : <Pages.Signup />}
        </div>
      </div>
    </div>
  );
}
