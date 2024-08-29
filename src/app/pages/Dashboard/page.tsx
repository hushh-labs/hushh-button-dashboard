"use client";

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashboardHeader from "@/app/components/DashboardHeader/DashboardHeader";
import SearchQuery from "@/app/components/SearchQuery/SearchQuery";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import { sampleSearchQueries, sampleUserQueries, sampleTags } from "@/app/Exports/sampleData";
import User from "@/app/components/Users/User";
import supabase from "@/app/Config/supabaeConfig";

function Dashboard() {
  const [showSearchQuery, setShowSearchQuery] = useState(false);

  useEffect(() => {
    // Define an async function within useEffect
    const fetchData = async () => {
      const admin = JSON.parse(localStorage.getItem('user'));
      if (admin) {
        const adminID = admin.id;
        const { data: brandData, error: brandDataError } = await supabase
          .from("button_brand_details")
          .select()
          .eq('admin_id', adminID).single();

        if (brandDataError) {
          console.error("Error fetching brand data:", brandDataError.message);
        } else {
          console.log("Brand data fetched:", brandData); // Log the brand data
          localStorage.setItem('brand', JSON.stringify(brandData)); // Store as JSON string
        }
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once on component mount

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
