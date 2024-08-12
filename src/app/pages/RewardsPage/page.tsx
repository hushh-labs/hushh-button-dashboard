"use client"
import React from "react";
import "./RewardsPage.css";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";

function RewardsPage() {
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
                <input type="radio" name="rewardOption" defaultChecked />
                <div className="RewardsPage__option__div">
                  <span>Automated</span>
                  <p>
                    Reward users with credits, discounts, or cashback. Easily set up
                    rules for what triggers a reward.
                  </p>
                </div>
              </label>
              <label className="RewardsPage__option">
                <input type="radio" name="rewardOption" />
                <div className="RewardsPage__option__div">
                  <span>Manual</span>
                  <p>
                    Reward users with credits, discounts, or cashback. Manually
                    trigger rewards when you're ready.
                  </p>
                </div>
              </label>
              <label className="RewardsPage__option">
                <input type="radio" name="rewardOption" />
                <div className="RewardsPage__option__div">
                  <span>Custom</span>
                  <p>
                    Reward users with credits, discounts, or cashback. Manually
                    trigger rewards when you're ready.
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
                <input type="text" placeholder="$10" />
              </div>
              <div className="RewardsPage__formGroup">
                <label>Hushh Coins</label>
                <input type="text" placeholder="$10" />
              </div>
              <div className="RewardsPage__formGroup">
                <label>Reward description</label>
                <input type="text" placeholder="$10 off any purchase" />
              </div>
              <button className="RewardsPage__uploadButton">Upload an image</button>
            </div>
          </div>
          <button className="RewardsPage__saveButton">Save</button>
        </div>
      </div>
    </div>
  );
}

export default RewardsPage;
