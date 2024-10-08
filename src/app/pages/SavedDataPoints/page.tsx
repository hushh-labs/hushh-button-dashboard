"use client";
import React, { useEffect, useState } from "react";
import "./SavedDataPoints.css";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import axios from "axios";
import qs from "qs";

interface DataPoint {
  id: number;
  data_point_title: string;
  data_point_desc: string;
}

function SavedDataPoints() {
  const [selectedDataPoints, setSelectedDataPoints] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null); // Updated to handle messages
  const [brandID, setBrandID] = useState<string | null>(null);

  useEffect(() => {
    const brandData = JSON.parse(localStorage.getItem("brand") || "{}");
    if (brandData?.brand_id) {
      setBrandID(brandData.brand_id);
    }
  }, []);

  useEffect(() => {
    if (!brandID) return;

    axios
      .post(
        "http://localhost:3001/button-Admin/v1/admin/get-selected-data-points",
        qs.stringify({ brandID }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      )
      .then((response) => {
        if (response.data.status === -1) {
          setMessage("No data point selected.");
        } else {
          setSelectedDataPoints(response.data.selected_data_Points);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching selected data points:", error);
        setMessage("Error fetching data points.");
        setLoading(false);
      });
  }, [brandID]);

  return (
    <div className="SavedDataPoints">
      <div className="SavedDataPoints__nav">
        <NavigationBar />
      </div>
      <div className="SavedDataPoints__header">
        <HeaderBar />
      </div>
      <div className="SavedDataPoints__contentContainer">
        <div className="SavedDataPoints__title">
          <h4>Saved Data Points</h4>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : message ? (
          <p>{message}</p>
        ) : (
          <div className="dataPoints__grid">
            {selectedDataPoints.length > 0 ? (
              selectedDataPoints.map((dataPoint) => (
                <div key={dataPoint.id} className="dataPoint__card">
                  <img
                    src={"default-icon.png"} // Use default or remove if not applicable
                    alt={`${dataPoint.data_point_title} icon`}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h4>{dataPoint.data_point_title}</h4>
                  <p className="dataPoint__description">
                    {dataPoint.data_point_desc}
                  </p>
                </div>
              ))
            ) : (
              <p>No data points found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedDataPoints;
