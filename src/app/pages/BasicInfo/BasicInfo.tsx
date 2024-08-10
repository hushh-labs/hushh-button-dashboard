import React, { useState, ChangeEvent, FormEvent } from "react";
import "./BasicInfo.css";

const BasicInfo: React.FC = () => {
    // State for form fields
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [birthMonth, setBirthMonth] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [birthYear, setBirthYear] = useState<string>("");

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
        console.log("Form Data Submitted:", formData);
        // Here, you can handle further actions like sending data to a server
    };

    // Handle input changes
    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis et quasi.
            </p>

            <p className="info__mandatory">
                *All fields required unless noted
            </p>

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
                            <select
                                value={birthMonth}
                                onChange={handleChange(setBirthMonth)}
                            >
                                <option value=""></option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div className="date__item">
                            <label>Date</label>
                            <select
                                value={birthDate}
                                onChange={handleChange(setBirthDate)}
                            >
                                <option value=""></option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div className="date__item">
                            <label>Year</label>
                            <select
                                value={birthYear}
                                onChange={handleChange(setBirthYear)}
                            >
                                <option value=""></option>
                                {/* Add more options here */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form__group">
                    <button className="submit__button" type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default BasicInfo;
