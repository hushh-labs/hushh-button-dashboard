"use client"
import React, { useState } from "react";
import HeaderBar from "@/app/components/HeaderBar/HeaderBar";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import "./DataPoints.css";
import Images from "@/app/Exports/Images";
import { useRouter } from "next/navigation";

function DataPoints() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0];
        if (uploadedFile) {
            setFile(uploadedFile);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="datapoints">
            {/* Header and Navigation */}
            <div className="datapoints__nav">
                <NavigationBar />
            </div>
            <div className="datapoints__header">
                <HeaderBar />
            </div>
            
            {/* Main Content */}
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
                        Monthly Product Discussion by Design and Marketing Teams with CEO to plan our future product sales and reports.
                    </p>
                    <div className="DataPoints__upload">
                    <label className="upload__button">
                        + Upload your file
                        <input
                            type="file"
                            accept=".csv"
                            onChange={handleFileUpload}
                        />
                    </label>
                    {file && <p>Uploaded file: {file.name}</p>}
                    <label className="upload__button" onClick={() =>{
router.push("/pages/SavedDataPoints")
                    }}>
                      Saved Data Points
                       
                    </label>
                    </div>
                  
                </section>

                <section className="suggested__dataPoints">
                    <h2>Suggested Data Points</h2>
                    <div className="dataPoints__grid">
                        {[
                            "Company size",
                            "Number of employees",
                            "Annual revenue",
                            "Industry",
                            "Location",
                            "Funding",
                            "Technology used",
                            "Job title",
                            "Seniority",
                            "Years of experience",
                            "Product usage",
                            "Marketing spend",
                            "Customer NPS",
                            "Customer churn",
                            "Customer satisfaction",
                        ].map((dataPoint, index) => (
                            <div key={index} className="dataPoint__card">
                                <img 
                                    src={Images.contactIcon}
                                    alt={`${dataPoint} icon`} 
                                    style={{ width: "20px", height: "20px" }}
                                />
                                <h4>{dataPoint}</h4>
                                <p className="dataPoint__description">
                                    {"sample data here needed"}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DataPoints;
