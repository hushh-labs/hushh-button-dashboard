"use client";
import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Images from "@/app/Exports/Images";
import { useRouter } from "next/navigation";
import Services from "@/app/Exports/Services";

function NavigationBar() {
  const router = useRouter();
  const [userImage, setUserImage] = useState<string | null>(null);
  const [adminName, setAdminName] = useState<string | null>(null);
  const [brandName, setBrandName] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Dashboard"); // Default active tab

  useEffect(() => {
    const fetchUserImage = async () => {
      const imageUrl = await Services.getAdminPicture();
      console.log("This is the admin image:", imageUrl);
      setUserImage(imageUrl); // Update the state with the retrieved image URL
    };

    fetchUserImage();
    const email = localStorage.getItem("email");
    const brandName = localStorage.getItem("brand_name");
    setAdminName(email);
    setBrandName(brandName);

    // Set active tab based on URL or default
    const path = window.location.pathname.split("/").pop();
    setActiveTab(path || "Dashboard");
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/pages/${tab}`);
  };

  return (
    <div className="NavigationBar__mainContainer">
      <div className="NavigationBar__spacingContainer">
        <div>
          <img src={userImage || ""} alt="Admin Profile" />
        </div>
        <div className="NavigationBar__spacingContainer__details">
          <h4>Test Admin</h4>
          <p>{brandName}</p>
        </div>
      </div>
      <span
        className={activeTab === "Dashboard" ? "activeTab" : ""}
        onClick={() => handleTabClick("Dashboard")}
      >
        <img src={Images.dashboardIcon.src} /> <p> Dashboard</p>
      </span>
      <span
        className={activeTab === "CatalogPage" ? "activeTab" : ""}
        onClick={() => handleTabClick("CatalogPage")}
      >
        <img src={Images.catalogIcon.src} /> <p> Catalog</p>
      </span>
      <span
        className={activeTab === "CardsPage" ? "activeTab" : ""}
        onClick={() => handleTabClick("CardsPage")}
      >
        <img src={Images.notesIcon.src} /> <p> Cards</p>
      </span>
      <span
        className={activeTab === "DataPoints" ? "activeTab" : ""}
        onClick={() => handleTabClick("DataPoints")}
      >
        <img src={Images.dataPointIcon.src} /> <p> Data Points</p>
      </span>
      <span
        className={activeTab === "BrandCards" ? "activeTab" : ""}
        onClick={() => handleTabClick("BrandCards")}
      >
        <img
          src={Images.cardsIcon.src}
          className="NavigationBar__mainContainer__cardsIcon"
        />{" "}
        <p> Data Cards</p>
      </span>
      <span
        className={activeTab === "RewardsPage" ? "activeTab" : ""}
        onClick={() => handleTabClick("RewardsPage")}
      >
        <img src={Images.calenderIcon.src} /> <p> Rewards</p>
      </span>
    </div>
  );
}

export default NavigationBar;
