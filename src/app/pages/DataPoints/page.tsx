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
  const [brandID, setBrandID] = useState<string | null>(null);

  useEffect(() => {
    const brandData = JSON.parse(localStorage.getItem("brand") || "{}");
    if (brandData?.brand_id) {
      setBrandID(brandData.brand_id);
    }
  }, []);

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonSubmit = (dataPointID: number) => {
    if (!brandID) {
      console.log("Admin ID not found");
      return;
    }

    axios
      .post(
        "http://localhost:3001/button-Admin/v1/admin/save-data-points",
        qs.stringify({
          dataPointID,
          brandID, // Use the retrieved admin ID
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log("Data point saved successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error saving the data point: ", error);
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
        
      </main>
    </div>
  );
}

export default DataPoints;
