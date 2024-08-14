import React from "react";
import "./DashboardHeader.css";
import Images from "@/app/Exports/Images";

interface DashboardHeaderProps {
  onHeaderClick: (view: string) => void;
}

function DashboardHeader({ onHeaderClick }: DashboardHeaderProps) {
  return (
    <div className="DashboardHeader__mainContainer">
      {/* First Section - Dashboard Text */}
      <div className="DashboardHeader__firstContainer">
        <p>Dashboard</p>
      </div>

      {/* Second Section - Navigation Links */}
      <div className="DashboardHeader__secondContainer">
        <div className="DashboardHeader__links">
          <span onClick={() => onHeaderClick("DataMapping")}>
            <img src={Images.dataMappingIcon.src} /> Data mapping
          </span>
          <span onClick={() => onHeaderClick("UserData")}>
            <img src={Images.userDataIcon.src} /> User Data
          </span>
          <span onClick={() => onHeaderClick("SearchData")}>
            <img src={Images.searchUserData.src} /> Search Data
          </span>
        </div>
      </div>

      {/* Third Section - Buttons */}
      <div className="DashboardHeader__thirdContainer">
        <button className="DashboardHeader__sortButton">Sort By</button>
        <button className="DashboardHeader__filterButton">Filter</button>
        <button className="DashboardHeader__addButton">+ Add Data Point</button>
      </div>
    </div>
  );
}

export default DashboardHeader;
