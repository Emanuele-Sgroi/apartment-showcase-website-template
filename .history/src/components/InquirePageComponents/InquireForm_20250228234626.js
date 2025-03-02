"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ComboBox } from "./ComboBox";

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

  // For ComboBoxes
  const handleComboBoxChange = (fieldName, newValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: newValue }));
    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
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

  // Data for ComboBoxes

  // Renting
  const rentLayouts = [
    { value: "Studio", label: "Studio" },
    { value: "1 Bedroom", label: "1 Bedroom" },
    { value: "2 Bedrooms", label: "2 Bedrooms" },
    { value: "3+ Bedrooms", label: "3+ Bedrooms" },
  ];

  const rentPriceRanges = [
    { value: "Below $5,000", label: "Below $5,000" },
    { value: "$5,000 - $6,000", label: "$5,000 - $6,000" },
    { value: "$6,000 - $7,000", label: "$6,000 - $7,000" },
    { value: "$7,000 - $8,000", label: "$7,000 - $8,000" },
    { value: "$8,000 - $10,000", label: "$8,000 - $10,000" },
    { value: "$10,000+", label: "$10,000+" },
  ];

  const rentMoveInDates = [
    { value: "Within one month", label: "Within one month" },
    { value: "Within two months", label: "Within two months" },
    { value: "Within three months", label: "Within three months" },
    { value: "More than three months", label: "More than three months" },
  ];

  // Buying
  const buyLayouts = [
    { value: "Studio", label: "Studio" },
    { value: "1 Bedroom", label: "1 Bedroom" },
    { value: "2 Bedrooms", label: "2 Bedrooms" },
    { value: "3+ Bedrooms", label: "3+ Bedrooms" },
  ];

  const buyPriceRanges = [
    { value: "$500K - $750K", label: "$500K - $750K" },
    { value: "$750K - $1.0M", label: "$750K - $1.0M" },
    { value: "$1.0M - $1.5M", label: "$1.0M - $1.5M" },
    { value: "$1.5M - $2.0M", label: "$1.5M - $2.0M" },
    { value: "$2.0M - $3.0M", label: "$2.0M - $3.0M" },
    { value: "$3.0M - $4.0M", label: "$3.0M - $4.0M" },
    { value: "$4.0M - $5.0M", label: "$4.0M - $5.0M" },
    { value: "$5M+", label: "$5M+" },
  ];

  const buyTimelines = [
    { value: "Within one month", label: "Within one month" },
    { value: "Within two months", label: "Within two months" },
    { value: "Within six months", label: "Within six months" },
    { value: "Within a year", label: "Within a year" },
  ];

  // Selling
  const sellingLayouts = [
    { value: "Studio", label: "Studio" },
    { value: "1 Bedroom", label: "1 Bedroom" },
    { value: "2 Bedrooms", label: "2 Bedrooms" },
    { value: "3+ Bedrooms", label: "3+ Bedrooms" },
  ];

  const sellingTimelines = [
    { value: "Within one month", label: "Within one month" },
    { value: "Within two months", label: "Within two months" },
    { value: "Within six months", label: "Within six months" },
    { value: "Within a year", label: "Within a year" },
  ];

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
                <RadioGroupItem value="Yes" id="brokerYes" />
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
                <Label htmlFor="representedYes" className="text-md">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="representedNo" />
                <Label htmlFor="representedNo" className="text-md">
                  No
                </Label>
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
            <Label htmlFor="renting" className="text-md">
              Renting
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Buying" id="buying" />
            <Label htmlFor="buying" className="text-md">
              Buying
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Selling" id="selling" />
            <Label htmlFor="selling" className="text-md">
              Selling
            </Label>
          </div>
        </RadioGroup>
        {errors.interestedIn && (
          <p className="text-red-500 text-xs mt-2">{errors.interestedIn}</p>
        )}
      </div>

      {/* If Renting... */}
      {formData.interestedIn === "Renting" && (
        <>
          <div className="w-full mb-4">
            <div className="w-full ">
              <label className="block text-md uppercase mb-1">
                Desired Layout *
              </label>
              <ComboBox
                items={rentLayouts}
                value={formData.rentLayout}
                placeholder="Select Layout"
                onChange={(val) => handleComboBoxChange("rentLayout", val)}
              />
              {errors.rentLayout && (
                <p className="text-red-500 text-xs mt-2">{errors.rentLayout}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Price Range *
            </label>
            <ComboBox
              items={rentPriceRanges}
              value={formData.rentPriceRange}
              placeholder="Select Price Range"
              onChange={(val) => handleComboBoxChange("rentPriceRange", val)}
            />
            {errors.rentPriceRange && (
              <p className="text-red-500 text-xs mt-2">
                {errors.rentPriceRange}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Move-in Date *
            </label>
            <ComboBox
              items={rentMoveInDates}
              value={formData.rentMoveInDate}
              placeholder="Select Move-in Date"
              onChange={(val) => handleComboBoxChange("rentMoveInDate", val)}
            />
            {errors.rentMoveInDate && (
              <p className="text-red-500 text-xs mt-2">
                {errors.rentMoveInDate}
              </p>
            )}
          </div>
        </>
      )}

      {/* If Buying... */}
      {formData.interestedIn === "Buying" && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Desired Layout *
            </label>
            <ComboBox
              items={buyLayouts}
              value={formData.buyLayout}
              placeholder="Select Layout"
              onChange={(val) => handleComboBoxChange("buyLayout", val)}
            />
            {errors.buyLayout && (
              <p className="text-red-500 text-xs mt-2">{errors.buyLayout}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Price Range *
            </label>
            <ComboBox
              items={buyPriceRanges}
              value={formData.buyPriceRange}
              placeholder="Select Price Range"
              onChange={(val) => handleComboBoxChange("buyPriceRange", val)}
            />
            {errors.buyPriceRange && (
              <p className="text-red-500 text-xs mt-2">
                {errors.buyPriceRange}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Estimated Timeline *
            </label>
            <ComboBox
              items={buyTimelines}
              value={formData.buyTimeline}
              placeholder="Select Timeline"
              onChange={(val) => handleComboBoxChange("buyTimeline", val)}
            />
            {errors.buyTimeline && (
              <p className="text-red-500 text-xs mt-2">{errors.buyTimeline}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Have you been pre-approved for a mortgage?
            </label>
            <input
              type="text"
              name="preApproved"
              value={formData.preApproved}
              onChange={handleChange}
              className="bg-transparent border-b border-background-dark outline-none focus:ring-0 text-foreground-dark"
            />
          </div>
        </>
      )}

      {/* If Selling... */}
      {formData.interestedIn === "Selling" && (
        <>
          {/* ...the text fields for property address remain the same... */}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Layout *</label>
            <ComboBox
              items={sellingLayouts}
              value={formData.sellingLayout}
              placeholder="Select Layout"
              onChange={(val) => handleComboBoxChange("sellingLayout", val)}
            />
            {errors.sellingLayout && (
              <p className="text-red-500 text-xs mt-2">
                {errors.sellingLayout}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Desired Timeline *
            </label>
            <ComboBox
              items={sellingTimelines}
              value={formData.sellingTimeline}
              placeholder="Select Timeline"
              onChange={(val) => handleComboBoxChange("sellingTimeline", val)}
            />
            {errors.sellingTimeline && (
              <p className="text-red-500 text-xs mt-2">
                {errors.sellingTimeline}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              What price are you hoping to achieve?
            </label>
            <input
              type="text"
              name="sellingPriceGoal"
              value={formData.sellingPriceGoal}
              onChange={handleChange}
              className="bg-transparent border-b border-background-dark outline-none focus:ring-0 text-foreground-dark"
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
