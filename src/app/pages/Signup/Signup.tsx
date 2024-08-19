import React from "react";
import { useRouter } from "next/navigation"; // Ensure this import is at the top
import "./Signup.css";
import Images from "@/app/Exports/Images";

function Signup() {
  const router = useRouter();

  const handleContinueWithEmail = () => {
    router.push("/pages/EmailSignUp"); // Navigate to the EmailSignUp page
  };

  const handleLoginClick =() =>{
    router.push("/pages/Login");
  }

  return (
    <div className="SignUp__mainContainer">
      <div className="Signup__header">
        <div className="Signup__headerRight"></div>
        <div className="Signup__headerLeft">
          <p>English (United States)</p>
          <button onClick={handleLoginClick}>Login</button>
        </div>
      </div>
      <div className="Signup__content">
        <div className="Signup__leftContainer">
          <h4>Explore the world to experience the beauty of nature</h4>
          <p className="Signup__leftContainer__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus
          </p>

          <div className="Signup__leftContainer__buttons">
            <div className="Signup__leftContainer__button">
              <span>
                <img src={Images.googleIcon.src} alt="" />
                <p>Signup with Google</p>
              </span>
            </div>
            <div className="Signup__leftContainer__button">
              <span>
                <img src={Images.facebookIcon.src} alt="" />
                <p>Signup with Facebook</p>
              </span>
            </div>
            <div className="Signup__leftContainer__button">
              <span>
                <img src={Images.appleIcon.src} alt="" />
                <p>Signup with Apple</p>
              </span>
            </div>
          </div>
          <div className="Signup__leftContainer__splitDiv">
            <div className="Signup__leftContainer__splitDiv__inner"></div>
            OR
            <div className="Signup__leftContainer__splitDiv__inner"></div>
          </div>
          <div
            className="Signup__leftContainer__bottom"
            onClick={handleContinueWithEmail}
          >
            <span>
              <p>Continue With Email</p>
            </span>
          </div>
          <p>Already Have an account? <span className="Signup__leftContainer__bottom__LoginButton" onClick={handleLoginClick}>Login</span> </p>
          <p className="Signup__leftContainer__bottom_P">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including cookie use.
          </p>
        </div>
        <div className="Signup__rightContainer"></div>
      </div>
    </div>
  );
}

export default Signup;
