import React from "react";
import "./AddressPage.css";

function AddressPage({ handleNextClick }) {
  return (
    <div className="address-page-container">
      <div className="address-page-content">
        <h2>Address and Location Information</h2>
        <p>Lorem Ipsum is simply dummy text of the</p>
        <form className="address-form">
          <div className="address-form1">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter your country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="postal-code">Postal Code</label>
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              placeholder="Enter your postal code"
              className="postal-code-input"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="button" className="skip-button">
              Skip this step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressPage;
