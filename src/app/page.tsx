"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HeaderBar from "./components/HeaderBar/HeaderBar";
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

  return (
    <div className={`container ${userExists ? '' : 'center-content'}`}>
      {userExists && (
        <>
          <div className='nav'>
            <NavigationBar />
          </div>
          <div className='main'>
            <div className='header'>
              <HeaderBar />
            </div>
            <div className='content'>
              <Pages.Dashboard />
            </div>
          </div>
        </>
      )}
      {!userExists && (
        <div className='content'>
          <Pages.Signup />
        </div>
      )}
    </div>
  );
}
