"use client";

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

  const handleHeaderClick = (view: string) => {
    setShowSearchQuery(view === "SearchData");
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
          <DashboardHeader onHeaderClick={handleHeaderClick} />

        
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
