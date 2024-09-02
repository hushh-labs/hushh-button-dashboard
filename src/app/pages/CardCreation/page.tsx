"use client";

import React, { useEffect, useState } from "react";
import Images from "@/app/Exports/Images"; // Ensure correct import path
import "./CreateCard.css"; // Link to your CSS file
import CardInformation from "../../components/CardCreation/CardInformation/CardInformation"; // Import your CardInformation component
import CardQuestions from "../../components/CardCreation/CardQuestions/CardQuestions";
function Page() {
  const [backgroundImage1, setBackgroundImage1] = useState(null);
  const [backgroundImage2, setBackgroundImage2] = useState(null);
  const [step, setStep] = useState(1); // Initialize the counter at step 1
  const [cardName, setCardName] = useState("Mathew Wade");
  const [cardType, setCardType] = useState(""); // State for card type
  const [cardDescription, setCardDescription] = useState(""); // State for card description

  useEffect(() => {
    // Retrieve saved data from localStorage
    const savedCardName = localStorage.getItem("cardName");
    const savedCardType = localStorage.getItem("cardType");
    const savedBackgroundImage1 = localStorage.getItem("backgroundImage1");
    const savedBackgroundImage2 = localStorage.getItem("backgroundImage2");
    const savedCardDescription = localStorage.getItem("description"); // Retrieve saved description

    if (savedCardName) setCardName(savedCardName);
    if (savedCardType) setCardType(savedCardType);
    if (savedBackgroundImage1) setBackgroundImage1(savedBackgroundImage1);
    if (savedBackgroundImage2) setBackgroundImage2(savedBackgroundImage2);
    if (savedCardDescription) setCardDescription(savedCardDescription); // Update state with saved description
  }, []);

  const handleImageUpload1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem("backgroundImage1", base64Image);
        setBackgroundImage1(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem("backgroundImage2", base64Image);
        setBackgroundImage2(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="CardCreation__mainContainer">
      <div className="CardCreation__header">
        <span>
          <img src={Images.cardCreationLogo.src} alt="Card Creation Logo" />
          <h4>Add Card</h4>
        </span>
        <img src={Images.closingIcon.src} alt="Close" />
      </div>
      <div className="CardCreation__contentContainer">
        <div className="CardCreation__contentContainer__left">
          {/* Conditional Rendering Based on Step */}
          {step === 1 && (
            <>
              <h4>Choose a Design</h4>
              <div className="CardCreation__contentContainer__left__inputContainer">
                <div className="Upload__Container">
                  {/* Background Image 1 */}
                  <div className="CardCreation__contentContainer__imgInput">
                    <h4>Background Image</h4>
                    <div className="image-upload-container">
                      <label
                        htmlFor="background-upload-1"
                        className="image-upload-label"
                      >
                        <img src={Images.uploadIcon.src} alt="Upload Icon" />
                        <p>Add Image</p>
                        <p>Format: jpg, png</p>
                        <p>Max Dimension: 1000 x 1000</p>
                      </label>
                      <input
                        type="file"
                        id="background-upload-1"
                        accept="image/png, image/jpeg"
                        onChange={handleImageUpload1}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>

                  {/* Background Image 2 */}
                  <div className="CardCreation__contentContainer__imgInput">
                    <h4>Logo Image</h4>
                    <div className="image-upload-container">
                      <label
                        htmlFor="background-upload-2"
                        className="image-upload-label"
                      >
                        <img src={Images.uploadIcon.src} alt="Upload Icon" />
                        <p>Add Image</p>
                        <p>Format: jpg, png</p>
                        <p>Max Dimension: 1000 x 1000</p>
                      </label>
                      <input
                        type="file"
                        id="background-upload-2"
                        accept="image/png, image/jpeg"
                        onChange={handleImageUpload2}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <CardInformation
              cardName={cardName}
              setCardName={setCardName}
              cardType={cardType}
              setCardType={setCardType}
              description={cardDescription} // Pass description state
              setDescription={setCardDescription} // Pass setDescription function
            />
          )}

          {step === 3 && <CardQuestions />}
        </div>
        <div className="CardCreation__contentContainer__right">
          <div className="CardCreation__contentContainer__right__phoneContainer">
            <div
              className="CardCreation__contentContainer__right__phoneContainer__cardContiner"
              style={{
                backgroundImage: backgroundImage1
                  ? `url(${backgroundImage1})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "286px",
                height: "174px",
                borderRadius: "10px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Text on top of the background image */}
              {backgroundImage1 && (
                <h4
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "10px",
                    left: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "600",
                    fontSize: "18px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {cardType || "GIFT"}{" "}
                  {/* Display cardType or default to "GIFT" */}
                </h4>
              )}
              <h4
                style={{
                  color: "white",
                  position: "absolute",
                  top: "50px",
                  left: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                }}
              >
                {cardName}
              </h4>

              {/* Logo image container */}
              {backgroundImage2 && (
                <div
                  className="logo-container"
                  style={{
                    backgroundImage: `url(${backgroundImage2})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom left",
                    width: "40px",
                    height: "40px",
                    position: "absolute",
                    bottom: "10px",
                    left: "15px",
                  }}
                ></div>
              )}
            </div>
            {cardDescription && (
              <div className="CardCreation__contentContainer__right__phoneContainer__DescriptionContainer">
                <p>{cardDescription}</p>{" "}
                {/* Ensure the correct state is used here */}
              </div>
            )}
          </div>
          <div className="CardCreation__nextButton__container">
            <button
              className="CardCreation__nextButton"
              onClick={previousStep}
              disabled={step === 1} // Disable back button on the first step
            >
              Back
            </button>
            {step < 3 && (
              <button
                className="CardCreation__nextButton"
                onClick={nextStep} // Disable next button on the last step
              >
                Next
              </button>
            )}
            {step == 3 && (
              <button
                className="CardCreation__nextButton"
                onClick={() => {
                  console.log("This card would be published!");
                }}
              >
                Publish Card
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
