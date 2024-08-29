"use client";
import React, { useState } from "react";
import "./RewardsPage.css";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import qs from "qs";

function RewardsPage() {
  const [rewardAmount, setRewardAmount] = useState("");
  const [hushhCoins, setHushhCoins] = useState("");
  const [rewardDescription, setRewardDescription] = useState("");
  const [rewardOption, setRewardOption] = useState("Automated");

  const handleSave = async () => {
    console.log("Reward Amount:", rewardAmount);
    console.log("Hushh Coins:", hushhCoins);
    console.log("Reward Description:", rewardDescription);
    console.log("Reward Option:", rewardOption);
    const brand = JSON.parse(localStorage.getItem("brand"));
    const brandID = brand.brand_id
    const formData = qs.stringify({
      brand_id: brandID,
      reward_status: rewardOption,
      reward_coins: rewardAmount,
      imageURL: "",
      hushhCoins: hushhCoins,
      rewardDescription: rewardDescription
    });

    try {
      const response = await fetch("http://localhost:3001/button-Admin/v1/admin/set-brand-reward", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("API Response:", data);
        alert("Reward successfully saved!");
      } else {
        console.error("API Error:", data.error);
        alert("Failed to save reward. Please check the console for details.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="RewardsPage__container">
      <div className="RewardsPage__nav">
        <NavigationBar />
      </div>
      <div className="RewardsPage__content">
        <div className="RewardsPage__header">
          <HeaderBar />
        </div>
        <div className="RewardsPage__mainContent">
          <h1 className="RewardsPage__title">Customize Rewards</h1>
          <p>Decide how you want to reward your customers for their feedback</p>

          <div className="RewardsPage__section">
            <h3>How would you like to reward your customers?</h3>
            <div className="RewardsPage__options">
              <label className="RewardsPage__option">
                <input
                  type="radio"
                  name="rewardOption"
                  value="Automated"
                  checked={rewardOption === "Automated"}
                  onChange={() => setRewardOption("Automated")}
                />
                <div className="RewardsPage__option__div">
                  <span>Automated</span>
                  <p>
                    Reward users with credits, discounts, or cashback. Easily set up
                    rules for what triggers a reward.
                  </p>
                </div>
              </label>
              <label className="RewardsPage__option">
                <input
                  type="radio"
                  name="rewardOption"
                  value="Manual"
                  checked={rewardOption === "Manual"}
                  onChange={() => setRewardOption("Manual")}
                />
                <div className="RewardsPage__option__div">
                  <span>Manual</span>
                  <p>
                    Reward users with credits, discounts, or cashback. Manually
                    trigger rewards when you are ready.
                  </p>
                </div>
              </label>
              <label className="RewardsPage__option">
                <input
                  type="radio"
                  name="rewardOption"
                  value="Custom"
                  checked={rewardOption === "Custom"}
                  onChange={() => setRewardOption("Custom")}
                />
                <div className="RewardsPage__option__div">
                  <span>Custom</span>
                  <p>
                    Reward users with credits, discounts, or cashback. Manually
                    trigger rewards when you are ready.
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="RewardsPage__section">
            <h3>Set up your reward</h3>
            <div className="RewardsPage__RewardDiv">
              <div className="RewardsPage__formGroup">
                <label>Reward amount</label>
                <input
                  type="text"
                  placeholder="$10"
                  value={rewardAmount}
                  onChange={(e) => setRewardAmount(e.target.value)}
                />
              </div>
              <div className="RewardsPage__formGroup">
                <label>Hushh Coins</label>
                <input
                  type="text"
                  placeholder="$10"
                  value={hushhCoins}
                  onChange={(e) => setHushhCoins(e.target.value)}
                />
              </div>
              <div className="RewardsPage__formGroup">
                <label>Reward description</label>
                <input
                  type="text"
                  placeholder="$10 off any purchase"
                  value={rewardDescription}
                  onChange={(e) => setRewardDescription(e.target.value)}
                />
              </div>
              <button className="RewardsPage__uploadButton">Upload an image</button>
            </div>
          </div>
          <button
            className="RewardsPage__saveButton"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default RewardsPage;
