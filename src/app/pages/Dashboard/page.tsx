"use client"

import React, { useState } from "react";
import "./Dashboard.css";
import DashboardHeader from "@/app/components/DashboardHeader/DashboardHeader";
import SearchQuery from "@/app/components/SearchQuery/SearchQuery";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import { sampleSearchQueries, sampleUserQueries, sampleTags } from "@/app/Exports/sampleData";
import User from "@/app/components/Users/User";

function Dashboard() {
  const [showSearchQuery, setShowSearchQuery] = useState(false);

  const handleToggle = () => {
    setShowSearchQuery(!showSearchQuery);
  };

  return (
    <div className="Dashboard__container">
      <div className="Dashboard__nav">
        <NavigationBar />
      </div>
      <div className="Dashboard__content">
        <div className="Dashboard__header">
          <HeaderBar />
        </div>
        <div className="Dashboard__mainContent">
          <DashboardHeader />

          {/* User Category Navigation Bar */}
          {!showSearchQuery && (
            <div className="Dashboard__firstContainer">
            <div className="Dashboard__userCategory">
              <span className="Dashboard__userCategoryItem active">All Users</span>
              <span className="Dashboard__userCategoryItem">Anonymous</span>
              <span className="Dashboard__userCategoryItem">Logged in</span>
              <span className="Dashboard__userCategoryItem">Email only</span>
              <span className="Dashboard__userCategoryItem">Phone only</span>
            </div>
          </div>
          ) }    

          {/* Toggle Button */}
          <button onClick={handleToggle} className="Dashboard__toggleButton">
            {showSearchQuery ? "Show User Table" : "Show Search Query"}
          </button>

          {/* Conditional Rendering */}
          {!showSearchQuery && (
            <div className="Dashboard__userTable">
              <User />
            </div>
          )}
          {showSearchQuery && (
            <div className="Dashboard__SearchQuery">
              <SearchQuery
                tags={sampleTags}
                searchQueries={sampleSearchQueries}
                userQueries={sampleUserQueries}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
