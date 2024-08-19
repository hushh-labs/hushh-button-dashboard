"use client";

import React, { useState } from "react";
import "./BrandInfo.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import qs from "qs"; // Import qs for URL encoding

const BrandInfo: React.FC = () => {
  // State for form fields
  const [brandName, setBrandName] = useState<string>("");
  const [brandWebsite, setBrandWebsite] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [members, setMembers] = useState<string>("");

  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault(); // Prevent page reload

    // Define the API endpoint
    const apiEndpoint =
      "http://localhost:3001/button-Admin/v1/admin/add-Brand-Data";
    
    // Get admin data from localStorage
    const admin = JSON.parse(localStorage.getItem("user") || "{}");
    const adminID = admin.hushh_id;
    console.log("This is the adminID passed in the API call: ", adminID);

    // Define the data to be sent in the request
    const requestData = {
      brand_name: brandName,          // Match the Supabase field names
      brand_category: category,       // Match the Supabase field names
      brand_website: brandWebsite,    // Match the Supabase field names
      number_of_members: members,     // Match the Supabase field names
      admin_id: adminID,              // Include the admin_id
    };

    try {
      // Make the POST request using Axios with URL-encoded data
      const response = await axios.post(
        apiEndpoint,
        qs.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Set content type
          },
        }
      );

      // Handle the response
      console.log("Response:", response.data);
      
      if (response.status === 200) {
        // Store brand data in localStorage as a JSON string
        localStorage.setItem("brand", JSON.stringify(response.data.brand));
        
        // Navigate to the DataPoints page on success
        router.push("/pages/DataPoints");
      }
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {/* Existing JSX for rendering the form */}
      <div className="Info__carousel">
        <div className="info__circle">
          <div className="circle">1</div>
          <p> Basic Info </p>
        </div>
        <div className="info__line">{"______________________"}</div>
        <div className="info__circle">
          <div className="circle">2</div>
          <p> Brand Info </p>
        </div>
        <div className="info__line">{"______________________"}</div>
        <div className="info__circle">
          <div className="circle">3</div>
          <p> Dashboard </p>
        </div>
      </div>

      <div className="brandinfo__title">
        <div className="circle largeCircle">2</div>
        <h1>Brand Info</h1>
      </div>

      <p className="info__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>

      <p className="info__mandatory">*All fields required unless noted</p>

      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__group">
          <label>*Brand Name</label>
          <input
            type="text"
            className="form__input"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label>Brand Website</label>
          <input
            className="form__input"
            value={brandWebsite}
            onChange={(e) => setBrandWebsite(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label>*Category</label>
          <select
            className="form__input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form__group">
          <label>Total members in organization</label>
          <select
            className="form__input"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          >
            <option value="">Select members</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form__group">
          <button className="submit__button" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandInfo;
