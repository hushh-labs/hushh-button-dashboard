"use client";
import React, { useEffect, useState } from "react";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import "./DataPoints.css";
import Images from "@/app/Exports/Images";
import { useRouter } from "next/navigation";
import axios from "axios";
import qs from "qs";

function DataPoints() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataPoints, setDataPoints] = useState(null);
  
  // Get adminID from localStorage
  const brandData = JSON.parse(localStorage.getItem("brand"));
  const brand_id = brandData ? brandData.brand_id : null;

  useEffect(() => {
    axios
      .post("http://localhost:3001/button-Admin/v1/admin/get-all-data-points")
      .then((response) => {
        setDataPoints(response.data.dataPoints);
      })
      .catch((error) => {
        console.log("Error getting the data points: ", error);
      });
  }, []);

  useEffect(() => {
    console.log("These are the fetched data points: ", dataPoints);
  }, [dataPoints]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonSubmit = (dataPointID) => {
    if (!brand_id) {
      console.log("Admin ID not found");
      return;
    }

    axios
      .post(
        "http://localhost:3001/button-Admin/v1/admin/save-data-points",
        qs.stringify({
          dataPointID,
          brandID: brand_id, // Use the retrieved admin ID
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log("Data point saved successfully:", response.data);
        // Handle success, maybe display a message or update the UI
      })
      .catch((error) => {
        console.log("Error saving the data point: ", error);
        // Handle error, maybe display an error message
      });
  };

  return (
    <div className="datapoints">
      <div className="datapoints__nav">
        <NavigationBar />
      </div>
      <div className="datapoints__header">
        <HeaderBar />
      </div>

      <main className="datapoints__content">
        <div className="datapoints__title">
          <h1>Dashboard</h1>
          <div className="search__bar">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <section className="upload__section">
          <h2>Upload Document</h2>
          <p className="description">
            Monthly Product Discussion by Design and Marketing Teams with CEO to
            plan our future product sales and reports.
          </p>
          <div className="DataPoints__upload">
            <label className="upload__button">
              + Upload your file
              <input type="file" accept=".csv" onChange={handleFileUpload} />
            </label>
            {file && <p>Uploaded file: {file.name}</p>}
            <label
              className="upload__button"
              onClick={() => {
                router.push("/pages/SavedDataPoints");
              }}
            >
              Saved Data Points
            </label>
          </div>
        </section>

        <section className="suggested__dataPoints">
          <h2>Suggested Data Points</h2>
          <div className="dataPoints__grid">
            {dataPoints ? (
              dataPoints.map((dataPoint) => (
                <div key={dataPoint.id} className="dataPoint__card">
                  <img
                    src={Images.contactIcon}
                    alt={`${dataPoint.data_point_title} icon`}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h4>{dataPoint.data_point_title}</h4>
                  <p className="dataPoint__description">
                    {dataPoint.data_point_desc}
                  </p>
                  <button onClick={() => handleButtonSubmit(dataPoint.id)}>
                    Add
                  </button>
                </div>
              ))
            ) : (
              <p>Loading data points...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DataPoints;
