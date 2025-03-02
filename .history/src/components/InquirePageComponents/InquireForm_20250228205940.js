"use client";

import React, { useState } from "react";

/**
 * ContactForm - a dynamic form with conditional fields based on user selections.
 */
const InquireForm = () => {
  // ----------------
  // State Management
  // ----------------
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",

    // Questions
    isAgentOrBroker: "", // Q1
    brokerageName: "", // appears if Q1 = "Yes"

    isRepresented: "", // Q2
    representativeBrokerageFirm: "", // if Q2 = "Yes"
    interestedInAgent: "", // if Q2 = "No"
    //  question => "Are you interested in working with an agent?"

    // Q3
    interestedIn: "", // "Renting", "Buying", or "Selling"

    // Renting Fields
    rentLayout: "",
    rentPriceRange: "",
    rentMoveInDate: "",

    // Buying Fields
    buyLayout: "",
    buyPriceRange: "",
    buyTimeline: "",
    preApproved: "",

    // Selling Fields
    sellingAddressStreet: "",
    sellingAddressCity: "",
    sellingAddressState: "",
    sellingAddressZip: "",
    sellingLayout: "",
    sellingTimeline: "",
    sellingPriceGoal: "",
  });

  const [errors, setErrors] = useState({});

  // ----------------
  // Handlers
  // ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateRequired = (name, value) => {
    if (!value.trim()) {
      return `${name} is required.`;
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    const newErrors = {};

    // Required fields
    newErrors.firstName = validateRequired("First Name", formData.firstName);
    newErrors.lastName = validateRequired("Last Name", formData.lastName);
    newErrors.email = validateRequired("Email Address", formData.email);
    newErrors.phoneNumber = validateRequired(
      "Phone Number",
      formData.phoneNumber
    );

    // If user answered Q1 = "Yes", Brokerage Name is required
    if (formData.isAgentOrBroker === "Yes") {
      newErrors.brokerageName = validateRequired(
        "Brokerage Name",
        formData.brokerageName
      );
    }

    // If Q2 = "Yes", rep firm is required
    if (formData.isRepresented === "Yes") {
      newErrors.representativeBrokerageFirm = validateRequired(
        "Representative Brokerage Firm",
        formData.representativeBrokerageFirm
      );
    }

    // Q3 is required
    newErrors.interestedIn = validateRequired(
      "Interest (Rent/Buy/Sell)",
      formData.interestedIn
    );

    // If the user selected renting...
    if (formData.interestedIn === "Renting") {
      newErrors.rentLayout = validateRequired(
        "Desired Layout",
        formData.rentLayout
      );
      newErrors.rentPriceRange = validateRequired(
        "Price Range",
        formData.rentPriceRange
      );
      newErrors.rentMoveInDate = validateRequired(
        "Move-in Date",
        formData.rentMoveInDate
      );
    }

    // If the user selected buying...
    if (formData.interestedIn === "Buying") {
      newErrors.buyLayout = validateRequired(
        "Desired Layout",
        formData.buyLayout
      );
      newErrors.buyPriceRange = validateRequired(
        "Price Range",
        formData.buyPriceRange
      );
      newErrors.buyTimeline = validateRequired(
        "Estimated Timeline",
        formData.buyTimeline
      );
      // preApproved is a text field, not strictly required by your specs, but you can make it required if you want
    }

    // If the user selected selling...
    if (formData.interestedIn === "Selling") {
      newErrors.sellingAddressStreet = validateRequired(
        "Street Address",
        formData.sellingAddressStreet
      );
      newErrors.sellingAddressCity = validateRequired(
        "City",
        formData.sellingAddressCity
      );
      newErrors.sellingAddressState = validateRequired(
        "State",
        formData.sellingAddressState
      );
      newErrors.sellingAddressZip = validateRequired(
        "Zip Code",
        formData.sellingAddressZip
      );
      newErrors.sellingLayout = validateRequired(
        "Layout",
        formData.sellingLayout
      );
      newErrors.sellingTimeline = validateRequired(
        "Desired Timeline",
        formData.sellingTimeline
      );
      // sellingPriceGoal is a text field; not explicitly required, so skip
    }

    // Filter out empty errors
    for (const key in newErrors) {
      if (!newErrors[key]) {
        delete newErrors[key];
      }
    }

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted!", formData);
      alert("Form submitted successfully!");
      // Optionally clear the form or handle the data as needed
    }
  };

  // ----------------
  // Rendering
  // ----------------
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-wrap gap-8">
        {/* First Name */}
        <div>
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>
      </div>

      <hr />

      {/* Q1: Are you an agent or broker? */}
      <div>
        <label>Are you an agent or a broker?</label>
        <select
          name="isAgentOrBroker"
          value={formData.isAgentOrBroker}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Brokerage Name (if Q1 = Yes) */}
      {formData.isAgentOrBroker === "Yes" && (
        <div>
          <label>Brokerage Name *</label>
          <input
            type="text"
            name="brokerageName"
            value={formData.brokerageName}
            onChange={handleChange}
          />
          {errors.brokerageName && (
            <p className="error">{errors.brokerageName}</p>
          )}
        </div>
      )}

      <hr />

      {/* Q2: Are you represented by an agent or broker? */}
      <div>
        <label>Are you represented by an agent or broker?</label>
        <select
          name="isRepresented"
          value={formData.isRepresented}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* If Q2 = Yes -> Representative Brokerage Firm */}
      {formData.isRepresented === "Yes" && (
        <div>
          <label>Representative Brokerage Firm *</label>
          <input
            type="text"
            name="representativeBrokerageFirm"
            value={formData.representativeBrokerageFirm}
            onChange={handleChange}
          />
          {errors.representativeBrokerageFirm && (
            <p className="error">{errors.representativeBrokerageFirm}</p>
          )}
        </div>
      )}

      {/* If Q2 = No -> Are you interested in working with an agent? */}
      {formData.isRepresented === "No" && (
        <div>
          <label>Are you interested in working with an agent?</label>
          <select
            name="interestedInAgent"
            value={formData.interestedInAgent}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      )}

      <hr />

      {/* Q3: What are you interested in? (Renting, Buying, or Selling) */}
      <div>
        <label>What are you interested in? *</label>
        <select
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="Renting">Renting</option>
          <option value="Buying">Buying</option>
          <option value="Selling">Selling</option>
        </select>
        {errors.interestedIn && <p className="error">{errors.interestedIn}</p>}
      </div>

      {/* If Renting is chosen */}
      {formData.interestedIn === "Renting" && (
        <>
          <div>
            <label>Desired Layout *</label>
            <select
              name="rentLayout"
              value={formData.rentLayout}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
              <option value="3+ Bedrooms">3+ Bedrooms</option>
            </select>
            {errors.rentLayout && <p className="error">{errors.rentLayout}</p>}
          </div>

          <div>
            <label>Price Range *</label>
            <select
              name="rentPriceRange"
              value={formData.rentPriceRange}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Below $5,000">Below $5,000</option>
              <option value="$5,000 - $6,000">$5,000 - $6,000</option>
              <option value="$6,000 - $7,000">$6,000 - $7,000</option>
              <option value="$7,000 - $8,000">$7,000 - $8,000</option>
              <option value="$8,000 - $10,000">$8,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
            {errors.rentPriceRange && (
              <p className="error">{errors.rentPriceRange}</p>
            )}
          </div>

          <div>
            <label>Move-in Date *</label>
            <select
              name="rentMoveInDate"
              value={formData.rentMoveInDate}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Within one month">Within one month</option>
              <option value="Within two months">Within two months</option>
              <option value="Within three months">Within three months</option>
              <option value="More than three months">
                More than three months
              </option>
            </select>
            {errors.rentMoveInDate && (
              <p className="error">{errors.rentMoveInDate}</p>
            )}
          </div>
        </>
      )}

      {/* If Buying is chosen */}
      {formData.interestedIn === "Buying" && (
        <>
          <div>
            <label>Desired Layout *</label>
            <select
              name="buyLayout"
              value={formData.buyLayout}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
              <option value="3+ Bedrooms">3+ Bedrooms</option>
            </select>
            {errors.buyLayout && <p className="error">{errors.buyLayout}</p>}
          </div>

          <div>
            <label>Price Range *</label>
            <select
              name="buyPriceRange"
              value={formData.buyPriceRange}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="$500K - $750K">$500K - $750K</option>
              <option value="$750K - $1.0M">$750K - $1.0M</option>
              <option value="$1.0M - $1.5M">$1.0M - $1.5M</option>
              <option value="$1.5M - $2.0M">$1.5M - $2.0M</option>
              <option value="$2.0M - $3.0M">$2.0M - $3.0M</option>
              <option value="$3.0M - $4.0M">$3.0M - $4.0M</option>
              <option value="$4.0M - $5.0M">$4.0M - $5.0M</option>
              <option value="$5M+">$5M+</option>
            </select>
            {errors.buyPriceRange && (
              <p className="error">{errors.buyPriceRange}</p>
            )}
          </div>

          <div>
            <label>Estimated Timeline *</label>
            <select
              name="buyTimeline"
              value={formData.buyTimeline}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Within one month">Within one month</option>
              <option value="Within two months">Within two months</option>
              <option value="Within six months">Within six months</option>
              <option value="Within a year">Within a year</option>
            </select>
            {errors.buyTimeline && (
              <p className="error">{errors.buyTimeline}</p>
            )}
          </div>

          <div>
            <label>Have you been pre-approved for a mortgage?</label>
            <input
              type="text"
              name="preApproved"
              value={formData.preApproved}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* If Selling is chosen */}
      {formData.interestedIn === "Selling" && (
        <>
          <div>
            <label>Property Address - Street *</label>
            <input
              type="text"
              name="sellingAddressStreet"
              value={formData.sellingAddressStreet}
              onChange={handleChange}
            />
            {errors.sellingAddressStreet && (
              <p className="error">{errors.sellingAddressStreet}</p>
            )}
          </div>
          <div>
            <label>Property Address - City *</label>
            <input
              type="text"
              name="sellingAddressCity"
              value={formData.sellingAddressCity}
              onChange={handleChange}
            />
            {errors.sellingAddressCity && (
              <p className="error">{errors.sellingAddressCity}</p>
            )}
          </div>
          <div>
            <label>Property Address - State *</label>
            <input
              type="text"
              name="sellingAddressState"
              value={formData.sellingAddressState}
              onChange={handleChange}
            />
            {errors.sellingAddressState && (
              <p className="error">{errors.sellingAddressState}</p>
            )}
          </div>
          <div>
            <label>Property Address - Zip Code *</label>
            <input
              type="text"
              name="sellingAddressZip"
              value={formData.sellingAddressZip}
              onChange={handleChange}
            />
            {errors.sellingAddressZip && (
              <p className="error">{errors.sellingAddressZip}</p>
            )}
          </div>

          <div>
            <label>Layout *</label>
            <select
              name="sellingLayout"
              value={formData.sellingLayout}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
              <option value="3+ Bedrooms">3+ Bedrooms</option>
            </select>
            {errors.sellingLayout && (
              <p className="error">{errors.sellingLayout}</p>
            )}
          </div>

          <div>
            <label>Desired Timeline *</label>
            <select
              name="sellingTimeline"
              value={formData.sellingTimeline}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Within one month">Within one month</option>
              <option value="Within two months">Within two months</option>
              <option value="Within six months">Within six months</option>
              <option value="Within a year">Within a year</option>
            </select>
            {errors.sellingTimeline && (
              <p className="error">{errors.sellingTimeline}</p>
            )}
          </div>

          <div>
            <label>
              What price are you hoping to achieve for your property?
            </label>
            <input
              type="text"
              name="sellingPriceGoal"
              value={formData.sellingPriceGoal}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default InquireForm;
