"use client"

import React, { useState } from "react";
import "./BrandInfo.css";
import { useRouter } from "next/navigation";
const BrandInfo: React.FC = () => {
    // State for form fields
    const [brandName, setBrandName] = useState<string>("");
    const [brandWebsite, setBrandWebsite] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [members, setMembers] = useState<string>("");
const router = useRouter();
    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); // Prevent page reload
        const formData = {
            brandName,
            brandWebsite,
            category,
            members,
        };
        console.log("Form Data Submitted:", formData);
        // Further actions like sending data to a server can be handled here
    };

    return (
        <div>
            

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

            <p className="info__mandatory">
                *All fields required unless noted
            </p>

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
                        type="url"
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
                        <option value=""></option>
                        {/* Add more options here */}
                    </select>
                </div>
                <div className="form__group">
                    <label>Total members in organization</label>
                    <select
                        className="form__input"
                        value={members}
                        onChange={(e) => setMembers(e.target.value)}
                    >
                        <option value=""></option>
                        {/* Add more options here */}
                    </select>
                </div>
                <div className="form__group">
                    <button className="submit__button" type="submit" onClick={()=>{
                        router.push("/pages/DataPoints")
                    }}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default BrandInfo;
