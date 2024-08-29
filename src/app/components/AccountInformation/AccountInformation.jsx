import React, { useState } from "react";
import "./AccountInformation.css";  // Assuming you have a CSS file for styling
import Services from "@/app/Exports/Services"; // Import your service functions

function AccountInformation({ handleNextClick }) {
  // State variables for each input field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages

  // Function to handle data submission
  const handleDataSubmit = async () => {
    // Basic validation
    if (!fullName || !email || !password || !reenterPassword || !phoneNumber) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== reenterPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Reset error message
    setErrorMessage("");

    // Log the user details for debugging
    console.log({
      fullName,
      email,
      password,
      reenterPassword,
      phoneNumber,
      countryCode,
    });

    // Call the service to create a password and save user details
    try {
      const response = await Services.createPassword(
        email,
        password,
        phoneNumber,
        fullName
      );

      console.log("Response from creating user service: ", response);

      if (response === 1) {
        console.log("User details successfully created and updated.");
        // Call handleNextClick to proceed to the next step
        handleNextClick();
      } else {
        setErrorMessage("Failed to create user or update details.");
      }
    } catch (error) {
      console.error("Error in handleDataSubmit: ", error);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <div className="AccountInformation__mainContainer">
      <div className="AccountInformation__header">
        <h4>Account Information</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="AccountInformation__form">
        {errorMessage && <p className="AccountInformation__error">{errorMessage}</p>} {/* Error message display */}
        
        <div className="AccountInformation__inputGroup">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Jessica Harper"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="AccountInformation__inputGroup">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="jessica.harper@greenleaforganics.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="AccountInformation__inputGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder="•••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="AccountInformation__inputGroup">
          <label>Re-enter Password</label>
          <input
            type="password"
            placeholder="•••••••"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        </div>

        <div className="AccountInformation__inputGroup">
          <label>Phone Number</label>
          <div className="AccountInformation__phoneContainer">
            <select
              className="AccountInformation__countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">US +1</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              placeholder="+91 987 654 3210"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <button
          className="AccountInformation__nextButton"
          onClick={handleDataSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AccountInformation;
