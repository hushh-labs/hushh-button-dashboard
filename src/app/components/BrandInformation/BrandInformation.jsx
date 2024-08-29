import React, { useState } from "react";
import "./BrandInformation.css";
import Images from "@/app/Exports/Images";
import supabase from "@/app/Config/supabaeConfig";
import { saveBrandInformation } from '../../Services/saveBRandInformation';
import { useRouter } from "next/navigation";

function BrandInformation({ handleNextClick }) {
  const router = useRouter();
  const [logo, setLogo] = useState(Images.imageIcon.src);
  const [brandName, setBrandName] = useState("");
  const [brandCategory, setBrandCategory] = useState(""); // Default empty value
  const [websiteURL, setWebsiteURL] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [logoFile, setLogoFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setLogoFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadLogoToSupabase = async (file, userID) => {
    try {
      const { data, error } = await supabase.storage
        .from("brandAdminImages")
        .upload(`${userID}`, file);
  
      if (error) {
        console.error("Error uploading logo:", error.message);
        return null;
      }
  
      console.log("Logo uploaded successfully:", data);
      return data;
    } catch (error) {
      console.error("Error during file upload:", error);
      return null;
    }
  };

  const handleButton = async () => {
    console.log("Button clicked");

    console.log("Brand Name:", brandName);
    console.log("Brand Category:", brandCategory);
    console.log("Website URL:", websiteURL);
    console.log("Brand Description:", brandDescription);
    console.log("Uploaded Logo:", logo);

    let user = JSON.parse(localStorage.getItem('user'));
    let userId = user.id;
    const uploadedFilePath = await uploadLogoToSupabase(logoFile, userId);

    if (uploadedFilePath) {
      console.log("Logo uploaded successfully:", uploadedFilePath);
      console.log("This is the brand category: ", brandCategory);
      
      const result = await saveBrandInformation(
        brandName,
        brandCategory,
        websiteURL,
        brandDescription,
        userId
      );

      if (result.success) {
        console.log("Brand information saved successfully:", result.data);
        router.push("/pages/Dashboard");
      } else {
        console.error("Failed to save brand information:", result.error);
      }
    } else {
      console.log("Failed to upload logo");
    }
  };

  return (
    <div className="BrandInformation__mainContainer">
      <div className="BrandInformation__innerContainer">
        <div className="BrandInformation__header">
          <h4>Brand Information</h4>
          <p>Lorem Ipsum is simply dummy text of the</p>
        </div>

        <div className="BrandInformation__form">
          <div className="BrandInformation__uploadLogo">
            <div className="BrandInformation__logoPlaceholder">
              <img src={logo} alt="Brand logo" />
            </div>
            <input
              type="file"
              className="BrandInformation__uploadInput"
              id="uploadLogo"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="uploadLogo"
              className="BrandInformation__uploadButton"
            >
              Upload brand logo
            </label>
          </div>

          <div className="BrandInformation__inputGroup__main">
            <div className="BrandInformation__inputGroup">
              <label>Brand Name*</label>
              <input
                type="text"
                placeholder="GreenLeaf Organics"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>

            <div className="BrandInformation__inputGroup">
              <label>Brand Category</label>
              <select
                value={brandCategory}
                onChange={(e) => setBrandCategory(e.target.value)}
              >
                <option value="">Select a category</option> {/* Default option */}
                <option value="1">Fashion and Apparel</option>
                <option value="2">Jewelry and Watches</option>
                <option value="3">Beauty and Personal Care</option>
                <option value="4">Automobiles</option>
              </select>
            </div>
          </div>

          <div className="BrandInformation__inputGroup">
            <label>Website URL</label>
            <input
              type="text"
              placeholder="www.greenleaforganics.com"
              value={websiteURL}
              onChange={(e) => setWebsiteURL(e.target.value)}
            />
          </div>

          <div className="BrandInformation__inputGroup">
            <label>Brand Description</label>
            <textarea
              placeholder="GreenLeaf Organics is a pioneering brand in the organic food industry..."
              rows="5"
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            className="BrandInformation__nextButton"
            onClick={handleButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrandInformation;
