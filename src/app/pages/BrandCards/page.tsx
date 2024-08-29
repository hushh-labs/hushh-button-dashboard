"use client";
import React, { useState } from "react";
import "./BrandCards.css"; // Ensure the correct path to your CSS file
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import Input from "../../components/CardsCreationInput/Input";
import Questions from "../../components/QuestionsComponenet/Questions";
import axios from "axios";
import qs from "qs";
import supabase from "../../Config/supabaeConfig";

function BrandCardsPage() {
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [files, setFiles] = useState({
    bodyImage: null,
    logoImage: null,
    nameImage: null,
  });

  const handleQuestionsSubmit = (questions) => {
    setQuestionsData(questions);
    setIsSaveButtonActive(true);
  };

  const handleFileChange = (inputType, file) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [inputType]: file,
    }));
    console.log(`File changed: ${inputType}`, file);
  };

  const uploadImage = async (file, path) => {
    console.log(`Uploading file: ${file.name} to path: ${path}`);
    const { error } = await supabase.storage
      .from("brandimages")
      .upload(path, file);

    if (error) {
      console.error("Error uploading image:", error);
      throw error;
    }

    console.log(`File uploaded successfully: ${file.name}`);
    // Generate the public URL
    const { data, error: urlError } = supabase.storage
      .from("brandimages")
      .getPublicUrl(path);

    if (urlError) {
      console.error("Error getting image URL:", urlError);
      throw urlError;
    }

    console.log(`Public URL for ${file.name}: ${data.publicUrl}`);
    return data.publicUrl;
  };

  const handleSave = async () => {
    
    const brand = JSON.parse(localStorage.getItem("brand"));
    const brandCategory = brand?.category;
    const domain = brand?.brand_website;
    const brandId = brand?.brand_id;
    const brandName = brand?.brand_name;
    console.log("Saving brand card...");
    console.log("Brand Name:", brandName);
    console.log("Brand Category:", brandCategory);
    console.log("Domain:", domain);
  
    try {
      // Upload images to Supabase and get their URLs
      const uploadedFiles = {};
  
      for (const [key, file] of Object.entries(files)) {
        if (file) {
          const path = `${brandName}/${key}-${file.name}`;
          const url = await uploadImage(file, path);
          uploadedFiles[key] = url;
        } else {
          console.log(`No file provided for ${key}`);
        }
      }
  
      console.log("Uploaded files URLs:", uploadedFiles);
  
      const brandData = {
        brandName,
        brandCategory,
        domain,
        files: uploadedFiles,
        questionsData,
        brandId,
        category: "Test,Test,Test",
      };
  
      console.log("Final brand data:", brandData);
  
      const response = await axios.post(
        "http://localhost:3001/button-Admin/v1/admin/create-brand-card",
        qs.stringify(brandData),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
  
      // Check the response and condition
      console.log("Response from server:", response.data);
      if (response.data.status === 1) {
        alert("Card Created Successfully!");
      } else {
        console.log("Unexpected status code:", response.data.status);
      }
    } catch (error) {
      console.error("Error saving brand card:", error);
    }
  };
  

  return (
    <div className="BrandCardsPage__container">
      <div className="BrandCardsPage__nav">
        <NavigationBar />
      </div>
      <div className="BrandCardsPage__content">
        <div className="BrandCardsPage__header">
          <HeaderBar />
        </div>
        <div className="BrandCardsPage__mainContent">
          <h4 className="BrandCardsPage__mainContent__title">
            Create your brand card.
          </h4>
          <div className="spanContainer">
            <span className="BrandCardsPage__mainContent__span">
              Brand Name:{" "}
              <input defaultValue={JSON.parse(localStorage.getItem("brand"))?.brand_name} />
            </span>
            <span className="BrandCardsPage__mainContent__span">
              Brand Category:{" "}
              <input
                defaultValue={
                  JSON.parse(localStorage.getItem("brand"))?.category
                }
              />
            </span>
            <span className="BrandCardsPage__mainContent__span">
              Domain:{" "}
              <input
                defaultValue={
                  JSON.parse(localStorage.getItem("brand"))?.brand_website
                }
              />
            </span>
          </div>

          <Input onFileChange={handleFileChange} />
          <div className="BrandCardsPage__mainContent__questionContainer">
            <h4 className="BrandCardsPage__mainContent__title2">
              Add the Question and Answers
            </h4>
            <Questions onSubmit={handleQuestionsSubmit} />
          </div>
          <button
            onClick={handleSave}
            className="BrandCardsPage__saveButton"
            disabled={!isSaveButtonActive}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrandCardsPage;
