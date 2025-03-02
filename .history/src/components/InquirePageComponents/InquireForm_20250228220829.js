"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const InquireForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",

    // Default selections
    isAgentOrBroker: "No", // Q1
    brokerageName: "",
    isRepresented: "No", // Q2
    representativeBrokerageFirm: "",
    interestedInAgent: "",

    interestedIn: "Renting", // Q3

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

  // Generic change handler for text/select fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Basic required-field check
  const validateRequired = (label, value) => {
    if (!value.trim()) {
      return `${label} is required.`;
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    // Q3 is required (Rent/Buy/Sell)
    newErrors.interestedIn = validateRequired(
      "Interest (Rent/Buy/Sell)",
      formData.interestedIn
    );

    // If Renting...
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

    // If Buying...
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
    }

    // If Selling...
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
    }

    // Remove fields without errors
    for (const key in newErrors) {
      if (!newErrors[key]) delete newErrors[key];
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted!", formData);
      alert("Form submitted successfully!");
      // Could clear form data here if desired
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-wrap gap-12 mb-12">
        {/* First & Last Name */}
        <div className="w-full flex justify-between gap-12">
          {/* First Name */}
          <div className="w-full max-w-[400px]">
            <div className="flex flex-col border-b border-background-dark pb-2">
              <label className="text-md text-foreground-dark uppercase">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark"
              />
            </div>
            {!!errors.firstName && (
              <p className="text-red-500 text-xs mt-2">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-full max-w-[400px]">
            <div className="flex flex-col border-b border-background-dark pb-2">
              <label className="text-md text-foreground-dark uppercase">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark"
              />
            </div>
            {!!errors.lastName && (
              <p className="text-red-500 text-xs mt-2">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="w-full flex justify-between gap-12">
          {/* Email */}
          <div className="w-full max-w-[400px]">
            <div className="flex flex-col border-b border-background-dark pb-2">
              <label className="text-md text-foreground-dark uppercase">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark"
              />
            </div>
            {!!errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="w-full max-w-[400px]">
            <div className="flex flex-col border-b border-background-dark pb-2">
              <label className="text-md text-foreground-dark uppercase">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark"
              />
            </div>
            {!!errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-2">{errors.phoneNumber}</p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-12 mb-12">
        {/* Q1 & Q2 using ShadCN RadioGroup */}
        <div className="w-full flex justify-between gap-12">
          {/* Q1: Are you an agent or broker? */}
          <div className="flex flex-col w-full max-w-[400px]">
            <label className="text-md text-foreground-dark uppercase mb-2">
              Are you an agent or a broker?
            </label>
            <RadioGroup
              name="isAgentOrBroker"
              defaultValue={formData.isAgentOrBroker}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  isAgentOrBroker: value,
                }))
              }
              className="flex items-center gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="brokerYes" className="p-1" />
                <Label htmlFor="brokerYes" className="text-md">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="brokerNo" />
                <Label htmlFor="brokerNo" className="text-md">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Q2: Are you represented by an agent or broker? */}
          <div className="flex flex-col w-full max-w-[400px]">
            <label className="text-md text-foreground-dark uppercase mb-2">
              Are you represented by an agent or broker?
            </label>
            <RadioGroup
              name="isRepresented"
              defaultValue={formData.isRepresented}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  isRepresented: value,
                }))
              }
              className="flex items-center gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="representedYes" />
                <Label htmlFor="representedYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="representedNo" />
                <Label htmlFor="representedNo">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {(formData.isAgentOrBroker === "Yes" ||
        formData.isRepresented === "Yes") && (
        <div className="w-full flex flex-wrap gap-12 mb-12">
          {/* If Q1 OR Q2 ARE YES */}
          <div className="w-full flex justify-between gap-12">
            {/* Brokerage Name (if Q1 = Yes) */}
            {formData.isAgentOrBroker === "Yes" && (
              <div className="flex flex-col w-full max-w-[400px]">
                <div className="flex flex-col border-b border-background-dark pb-2">
                  <label className="text-md text-foreground-dark uppercase mb-2">
                    Brokerage Name *
                  </label>
                  <input
                    type="text"
                    name="brokerageName"
                    value={formData.brokerageName}
                    onChange={handleChange}
                    className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark"
                  />
                </div>

                {errors.brokerageName && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.brokerageName}
                  </p>
                )}
              </div>
            )}

            {/* If Q2 = Yes -> Representative Brokerage Firm */}
            {formData.isRepresented === "Yes" && (
              <div className="flex flex-col w-full max-w-[400px]">
                <div className="flex flex-col border-b border-background-dark pb-2">
                  <label className="text-md text-foreground-dark uppercase mb-2">
                    Representative Brokerage Firm *
                  </label>
                  <input
                    type="text"
                    name="representativeBrokerageFirm"
                    value={formData.representativeBrokerageFirm}
                    onChange={handleChange}
                    className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark"
                  />
                </div>

                {errors.representativeBrokerageFirm && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.representativeBrokerageFirm}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Q3: What are you interested in? (Renting, Buying, or Selling) */}
      <div className="w-full flex flex-col items-start mb-12">
        <label className="text-md text-foreground-dark uppercase mb-2">
          What are you interested in? *
        </label>
        <RadioGroup
          name="interestedIn"
          defaultValue={formData.interestedIn}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              interestedIn: value,
            }))
          }
          className="flex items-center gap-4 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Renting" id="renting" />
            <Label htmlFor="renting">Renting</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Buying" id="buying" />
            <Label htmlFor="buying">Buying</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Selling" id="selling" />
            <Label htmlFor="selling">Selling</Label>
          </div>
        </RadioGroup>
        {errors.interestedIn && <p className="error">{errors.interestedIn}</p>}
      </div>

      {/* If Renting... */}
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

      {/* If Buying... */}
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

      {/* If Selling... */}
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

      <button type="submit" className="mt-4">
        Submit
      </button>
    </form>
  );
};

export default InquireForm;
