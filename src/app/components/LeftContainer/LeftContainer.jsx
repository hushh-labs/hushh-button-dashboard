import React from "react";
import "./LeftContainer.css";
import Images from "@/app/Exports/Images";

function LeftContainer({ activeStep }) {
  // Step data array with number, title, and description
  const steps = [
    {
      number: 1,
      title: "Account Information",
      description: "Lorem Ipsum is simply dummy text of the",
    } ,  {
      number: 2,
      title: "Brand Information",
      description: "Lorem Ipsum is simply dummy text of the",
    },
  ,
    {
      number: 3,
      title: "Address and Location Information",
      description: "Lorem Ipsum is simply dummy text of the",
    },
  ];

  return (
    <div className="LeftContainer__mainContainer">
      <div className="LeftContainer__mainContainer__innerContainer">
        <img
          src={Images.leftContainerLogo.src}
          alt="Logo"
          className="LeftContainer__Logo"
        />
        <div className="LeftContainer__text">
          <h4>Welcome to hushh</h4>
          <p>Lorem Ipsum is simply dummy text of the</p>
        </div>

        <div className="LeftContainer__mainContainer__steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className="LeftContainer__mainContainer__step"
              style={{
                color: activeStep === step.number ? "#FFA320" : "rgba(227, 228, 255, 0.5)"
              }}
            >
              <span>
                <div
                  className="LeftContainer__mainContainer__step__count"
                  style={{
                    backgroundColor: activeStep === step.number ? "#FFA320" : "rgba(227, 228, 255, 0.5)",
                    color: activeStep === step.number ? "#FFFFFF" : "rgba(227, 228, 255, 0.5)"
                  }}
                >
                  {step.number}
                </div>
                <h4
                  style={{
                   
                    color: activeStep === step.number ? "#FFA320" : "rgba(227, 228, 255, 0.5)"
                  }}
                >
                  {step.title}
                </h4>
               
              </span>
              <p
                style={{
                  color: activeStep === step.number ? "#E3E4FF" : "rgba(227, 228, 255, 0.5)"
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
