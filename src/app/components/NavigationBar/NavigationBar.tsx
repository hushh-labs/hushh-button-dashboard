import React from "react";
import "./NavigationBar.css";
import Images from "@/app/Exports/Images";
import { useRouter } from "next/navigation";
function NavigationBar() {
  const router = useRouter();
  return (
    <div className="NavigationBar__mainContainer">
      <div className="NavigationBar__spacingContainer"></div>
      <span onClick={() =>{
        router.push("/pages/Dashboard")
      }}>
        <img src={Images.dashboardIcon.src} /> <p> Dashboard</p>{" "}
      </span>
      <span>
        <img src={Images.notificationIcon.src} /> <p> Notification</p>{" "}
      </span>
      <span>
        <img src={Images.notesIcon.src} /> <p> Notes</p>{" "}
      </span>
      <span onClick={() =>{
        router.push("/pages/DataPoints")
      }}>
        <img src={Images.dataPointIcon.src} /> <p> Data Points</p>{" "}
      </span>
      <span>
        <img src={Images.emailIcon.src} /> <p> Emails</p>{" "}
      </span>
      <span onClick={() => {
        console.log("Button Clicked");
        
router.push("/pages/RewardsPage")
      }}>
        <img src={Images.calenderIcon.src} /> <p> Rewards</p>{" "}
      </span>
      <div className="NavigationBar__lineContainer"></div>

      <div className="NavigationBar__secondContainer">
        <p className="NavigationBar__title">Database</p>
        <span>
        <img src={Images.analyticsIcon.src} /> <p> Calenders</p>{" "}
      </span>
      <span>
        <img src={Images.contactIcon.src} /> <p> Contact</p>{" "}
      </span>
      <span>
        <img src={Images.companyIcon.src} /> <p> Companies</p>{" "}
      </span>
      </div>
      <div className="NavigationBar__lineContainer"></div>
      <span>
        <img src={Images.integrationIcon.src} /> <p> Integration</p>{" "}
      </span>
      <span>
        <img src={Images.settingIcon.src} /> <p> Integration</p>{" "}
      </span>

      <div className="NavigationBar__bottomCaontainer">
      <span>
        <img src={Images.profileIcon.src} /> <p> Marketing Team</p>{" "}
      </span>

      </div>
    </div>
  );
}

export default NavigationBar;
