"use client";

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/app/components/DashboardHeader/DashboardHeader";
import SearchQuery from "@/app/components/SearchQuery/SearchQuery";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import {
  sampleSearchQueries,
  sampleUserQueries,
  sampleTags,
} from "@/app/Exports/sampleData";
import User from "@/app/components/Users/User";
import supabase from "@/app/Config/supabaeConfig";
import Cards from "@/app/components/Dashboard/TotalCards/TotalCards";
import { PieChart } from "@/app/components/Dashboard/Piechart/Piechart";
import DataCardUpdates from "@/app/components/Dashboard/CardUpdates/CardUpdates";
function Dashboard() {
  const [showSearchQuery, setShowSearchQuery] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const admin = JSON.parse(localStorage.getItem("user"));
      if (admin) {
        const adminID = admin.id;
        const { data: brandData, error: brandDataError } = await supabase
          .from("button_brand_details")
          .select()
          .eq("admin_id", adminID)
          .single();

        if (brandDataError) {
          console.error("Error fetching brand data:", brandDataError.message);
        } else {
          console.log("Brand data fetched:", brandData); // Log the brand data
          localStorage.setItem("brand", JSON.stringify(brandData)); // Store as JSON string
        }
      }
    };

    fetchData();
  }, []);

  const handleToggle = () => {
    setShowSearchQuery(!showSearchQuery);
  };

  const handleHeaderClick = (view: string) => {
    setShowSearchQuery(view === "SearchData");
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="Dashboard__container">
      <div className="Dashboard__nav">
        <NavigationBar />
      </div>
      <div className="Dashboard__content">
        <div className="Dashboard__HeaderContainer">
          <div className="Dashboard__HeaderContainer_firstContainer">
            <div>
              <h4>Dashboard</h4>
            </div>
            <div className="Dropdown">
              {/* Dropdown header */}
              <button className="Dropdown__button" onClick={toggleDropdown}>
                Select Options
              </button>
              {/* Dropdown options */}
              {dropdownOpen && (
                <div className="Dropdown__menu">
                  <label>
                    <input
                      type="checkbox"
                      value="option1"
                      checked={selectedOptions.includes("option1")}
                      onChange={handleSelectChange}
                    />
                    Option 1
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="option2"
                      checked={selectedOptions.includes("option2")}
                      onChange={handleSelectChange}
                    />
                    Option 2
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="option3"
                      checked={selectedOptions.includes("option3")}
                      onChange={handleSelectChange}
                    />
                    Option 3
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="option4"
                      checked={selectedOptions.includes("option4")}
                      onChange={handleSelectChange}
                    />
                    Option 4
                  </label>
                </div>
              )}
            </div>
          </div>
          <button className="createCardButton" onClick={() =>{
router.push('/pages/CardCreation')
          }}>Create Card</button>
        </div>
        <div className="Dashboard__mainContent">
          <div className="Dashboard__mainContent__uppercards">
            <Cards
              title={"Total Cards"}
              value={20}
              greenText={"Active Users"}
              greenValue={80}
              redText={"Inactive User"}
              redValue={20}
            />
            <Cards
              title={"Product Catalog"}
              value={"34,657"}
              greenText={""}
              greenValue={""}
              redText={""}
              redValue={""}
            />
            <Cards
              title={"Installed Users"}
              value={"24,435"}
              greenText={"Active Users"}
              greenValue={"10,256"}
              redText={"Inactive User"}
              redValue={"13,958"}
            />
            <Cards
              title={"Total Views"}
              value={"1,85,435"}
              greenText={"Conversion"}
              greenValue={"10,256"}
              redText={"Conversion Rate"}
              redValue={"20%"}
            />
          </div>
          <div className="Dashboard__mainContent__graphs">
            <PieChart />
            <DataCardUpdates/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
