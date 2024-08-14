"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import "./BasicInfo.css";
import { useRouter } from "next/navigation";
import Services from "@/app/Exports/Services";

const BasicInfo: React.FC = () => {
  // State for form fields
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birthMonth, setBirthMonth] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent page reload
    const formData = {
      firstName,
      middleName,
      lastName,
      gender,
      birthMonth,
      birthDate,
      birthYear,
    };

    const response = await Services.updateAdminData(formData);
    if (response == 1) {
      console.log("User created sucessfully!");
      router.push("/pages/BrandInfo");
    }
  };

  // Handle input changes
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value);
    };

  return (
    <div>
      <div className="BasicInfo__header">
        <div className="BasicInfo__headerRight"></div>
      </div>

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

      <div className="basicinfo__title">
        <div className="circle largeCircle">1</div>
        <h1>Basic Info</h1>
      </div>

      <p className="info__para">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi.
      </p>

      <p className="info__mandatory">*All fields required unless noted</p>

      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__group">
          <label>*First name</label>
          <input
            type="text"
            className="form__input"
            value={firstName}
            onChange={handleChange(setFirstName)}
          />
        </div>
        <div className="form__group">
          <label>Middle name (as applicable)</label>
          <input
            type="text"
            className="form__input"
            value={middleName}
            onChange={handleChange(setMiddleName)}
          />
        </div>
        <div className="form__group">
          <label>*Last name</label>
          <input
            type="text"
            className="form__input"
            value={lastName}
            onChange={handleChange(setLastName)}
          />
        </div>
        <div className="form__group">
          <label>What's your gender? (optional)</label>
          <div className="gender__options">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleChange(setGender)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleChange(setGender)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="non-binary"
                checked={gender === "non-binary"}
                onChange={handleChange(setGender)}
              />
              Non-binary
            </label>
          </div>
        </div>
        <div className="form__group">
          <label>What's your date of birth?</label>
          <div className="date__group">
            <div className="date__item">
              <label>Month</label>
              <select value={birthMonth} onChange={handleChange(setBirthMonth)}>
                <option value="">Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="date__item">
              <label>Date</label>
              <select value={birthDate} onChange={handleChange(setBirthDate)}>
                <option value="">Select Date</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="date__item">
              <label>Year</label>
              <select value={birthYear} onChange={handleChange(setBirthYear)}>
                <option value="">Select Year</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={2024 - i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form__group">
          <button
            className="submit__button"
            type="submit"
            onClick={() => {
            //   router.push("/pages/BrandInfo");
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
