"use client";

import React, { useState } from "react";
import "./BrandInfo.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import qs from "qs"; // Import qs for URL encoding
import Images from "@/app/Exports/Images";
import LeftContainer from "../../components/LeftContainer/LeftContainer";
import BrandInformation from "../../components/BrandInformation/BrandInformation";
import AccountInformation from '../../components/AccountInformation/AccountInformation' ;
import AddressPage from '../../components/AddressPage/AddressPage'
const BrandInfo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  // Conditionally render different components based on the active step
  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return <AccountInformation handleNextClick={handleNextClick} /> ;
      // Add more cases for additional steps if needed
      case 2:
        return  <BrandInformation handleNextClick={handleNextClick} />;
      case 3:
        return <AddressPage handleNextClick={handleNextClick} />;
      default:
        return null;
    }
  };

  return (
    <div className="BrandInfo__mainContainer">
      <div className="BrandInfo__firstContainer">
        <LeftContainer activeStep={activeStep} />
      </div>
      <div className="BrandInfo__secondContainer">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default BrandInfo;
