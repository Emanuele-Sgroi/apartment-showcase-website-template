"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ComboBox } from "./ComboBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  // For ShadCN <Select>
  const handleSelectChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-wrap gap-8 sm:gap-12 mb-8 sm:mb-12">
        {/* First & Last Name */}
        <div className="w-full flex justify-between gap-8 sm:gap-12 max-[565px]:flex-col">
          {/* First Name */}
          <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
            <div className="flex flex-col border-b border-background-dark ">
              <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 sm:pb-2 text-foreground-input min-[2048px]:text-lg"
              />
            </div>
            {!!errors.firstName && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-full max-[565px]:max-w-full min-w-[235px] max-w-[400px] min-[2048px]:max-w-[480px]">
            <div className="flex flex-col border-b border-background-dark">
              <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 sm:pb-2 text-foreground-input min-[2048px]:text-lg"
              />
            </div>
            {!!errors.lastName && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="w-full flex justify-between gap-8 sm:gap-12 max-[565px]:flex-col">
          {/* Email */}
          <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
            <div className="flex flex-col border-b border-background-dark sm:pb-2">
              <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 text-foreground-dark min-[2048px]:text-lg"
              />
            </div>
            {!!errors.email && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
            <div className="flex flex-col border-b border-background-dark">
              <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 sm:pb-2 text-foreground-input min-[2048px]:text-lg"
              />
            </div>
            {!!errors.phoneNumber && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.phoneNumber}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-8 sm:gap-12 mb-8 sm:mb-12 ">
        {/* Q1 & Q2 using ShadCN RadioGroup */}
        <div className="w-full flex justify-between gap-8 sm:gap-12 max-[565px]:flex-col">
          {/* Q1: Are you an agent or broker? */}
          <div className="flex flex-col w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
            <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase mb-3">
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
              className="flex items-center gap-4 "
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="brokerYes" />
                <Label
                  htmlFor="brokerYes"
                  className="text-base xl:text-md min-[2048px]:text-lg"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="brokerNo" />
                <Label
                  htmlFor="brokerNo"
                  className="text-base xl:text-md min-[2048px]:text-lg"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Q2: Are you represented by an agent or broker? */}
          <div className="flex flex-col w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
            <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase mb-3">
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
                <Label
                  htmlFor="representedYes"
                  className="text-base xl:text-md min-[2048px]:text-lg"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="representedNo" />
                <Label
                  htmlFor="representedNo"
                  className="text-base xl:text-md min-[2048px]:text-lg"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {(formData.isAgentOrBroker === "Yes" ||
        formData.isRepresented === "Yes") && (
        <div className="w-full flex flex-wrap gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* If Q1 OR Q2 ARE YES */}
          <div className="w-full flex justify-between gap-8 sm:gap-12 flex-col md:flex-row">
            {/* Brokerage Name (if Q1 = Yes) */}
            {formData.isAgentOrBroker === "Yes" && (
              <div className="flex flex-col w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
                <div className="flex flex-col border-b border-background-dark ">
                  <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase ">
                    Brokerage Name *
                  </label>
                  <input
                    type="text"
                    name="brokerageName"
                    value={formData.brokerageName}
                    onChange={handleChange}
                    className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 sm:pb-2 text-foreground-input min-[2048px]:text-lg"
                  />
                </div>

                {errors.brokerageName && (
                  <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                    {errors.brokerageName}
                  </p>
                )}
              </div>
            )}

            {/* If Q2 = Yes -> Representative Brokerage Firm */}
            {formData.isRepresented === "Yes" && (
              <div className="flex flex-col w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
                <div className="flex flex-col border-b border-background-dark ">
                  <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase ">
                    Representative Brokerage Firm *
                  </label>
                  <input
                    type="text"
                    name="representativeBrokerageFirm"
                    value={formData.representativeBrokerageFirm}
                    onChange={handleChange}
                    className="bg-transparent outline-none ring-0 active:-right-0 focus:ring-0 sm:pb-2 text-foreground-input min-[2048px]:text-lg"
                  />
                </div>

                {errors.representativeBrokerageFirm && (
                  <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                    {errors.representativeBrokerageFirm}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Q3: What are you interested in? (Renting, Buying, or Selling) */}
      <div className="w-full flex flex-col items-start mb-8 sm:mb-12">
        <label className="text-base xl:text-md min-[2048px]:text-lg text-foreground-dark uppercase mb-3">
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
          className="flex items-center gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Renting" id="renting" />
            <Label
              htmlFor="renting"
              className="text-base xl:text-md min-[2048px]:text-lg"
            >
              Renting
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Buying" id="buying" />
            <Label
              htmlFor="buying"
              className="text-base xl:text-md min-[2048px]:text-lg"
            >
              Buying
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Selling" id="selling" />
            <Label
              htmlFor="selling"
              className="text-base xl:text-md min-[2048px]:text-lg"
            >
              Selling
            </Label>
          </div>
        </RadioGroup>
        {errors.interestedIn && (
          <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
            {errors.interestedIn}
          </p>
        )}
      </div>

      {/* If Renting */}
      {formData.interestedIn === "Renting" && (
        <>
          {/* Desired Layout */}
          <div className="w-full mb-8 sm:mb-12">
            <label className="block text-base xl:text-md min-[2048px]:text-lg mb-1 uppercase">
              Desired Layout *
            </label>
            <Select
              value={formData.rentLayout}
              onValueChange={(val) => handleSelectChange("rentLayout", val)}
            >
              <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent className="w-full bg-background-accent-lighter">
                <SelectItem
                  value="Studio"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Studio
                </SelectItem>
                <SelectItem
                  value="1 Bedroom"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  1 Bedroom
                </SelectItem>
                <SelectItem
                  value="2 Bedrooms"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  2 Bedrooms
                </SelectItem>
                <SelectItem
                  value="3+ Bedrooms"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold "
                >
                  3+ Bedrooms
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.rentLayout && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.rentLayout}
              </p>
            )}
          </div>

          <div className="flex justify-between gap-8 sm:gap-12 w-full mb-8 sm:mb-12 max-[565px]:flex-col">
            {/* Move-in Date */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg mb-1 uppercase">
                Move-in Date *
              </label>
              <Select
                value={formData.rentMoveInDate}
                onValueChange={(val) =>
                  handleSelectChange("rentMoveInDate", val)
                }
              >
                <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                  <SelectValue placeholder="Select move-in date" />
                </SelectTrigger>
                <SelectContent className="w-full bg-background-accent-lighter">
                  <SelectItem
                    value="Within one month"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within one month
                  </SelectItem>
                  <SelectItem
                    value="Within two months"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within two months
                  </SelectItem>
                  <SelectItem
                    value="Within three months"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within three months
                  </SelectItem>
                  <SelectItem
                    value="More than three months"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    More than three months
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.rentMoveInDate && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.rentMoveInDate}
                </p>
              )}
            </div>

            {/* Price Range */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg mb-1 uppercase">
                Price Range *
              </label>
              <Select
                value={formData.rentPriceRange}
                onValueChange={(val) =>
                  handleSelectChange("rentPriceRange", val)
                }
              >
                <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent className="w-full bg-background-accent-lighter max-h-[300px] overflow-y-auto luxury-scrollbar">
                  <SelectItem
                    value="Below $5,000"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Below $5,000
                  </SelectItem>
                  <SelectItem
                    value="$5,000 - $6,000"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $5,000 - $6,000
                  </SelectItem>
                  <SelectItem
                    value="$6,000 - $7,000"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $6,000 - $7,000
                  </SelectItem>
                  <SelectItem
                    value="$7,000 - $8,000"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $7,000 - $8,000
                  </SelectItem>
                  <SelectItem
                    value="$8,000 - $10,000"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $8,000 - $10,000
                  </SelectItem>
                  <SelectItem
                    value="$10,000+"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $10,000+
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.rentPriceRange && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.rentPriceRange}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {/* If Buying */}
      {formData.interestedIn === "Buying" && (
        <>
          {/* Desired Layout */}
          <div className="w-full mb-8 sm:mb-12">
            <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase mb-1">
              Desired Layout *
            </label>
            <Select
              value={formData.buyLayout}
              onValueChange={(val) => handleSelectChange("buyLayout", val)}
            >
              <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent className="w-full bg-background-accent-lighter max-h-[300px] overflow-y-auto luxury-scrollbar">
                <SelectItem
                  value="Studio"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Studio
                </SelectItem>
                <SelectItem
                  value="1 Bedroom"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  1 Bedroom
                </SelectItem>
                <SelectItem
                  value="2 Bedrooms"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  2 Bedrooms
                </SelectItem>
                <SelectItem
                  value="3+ Bedrooms"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  3+ Bedrooms
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.buyLayout && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.buyLayout}
              </p>
            )}
          </div>

          {/* Price Range & Estimated Timeline (side by side) */}
          <div className="w-full flex justify-between gap-8 sm:gap-12 mb-8 sm:mb-12 max-[565px]:flex-col">
            {/* Price Range */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase mb-1">
                Price Range *
              </label>
              <Select
                value={formData.buyPriceRange}
                onValueChange={(val) =>
                  handleSelectChange("buyPriceRange", val)
                }
              >
                <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent className="w-full bg-background-accent-lighter max-h-[300px] overflow-y-auto luxury-scrollbar">
                  <SelectItem
                    value="$500K - $750K"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $500K - $750K
                  </SelectItem>
                  <SelectItem
                    value="$750K - $1.0M"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $750K - $1.0M
                  </SelectItem>
                  <SelectItem
                    value="$1.0M - $1.5M"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $1.0M - $1.5M
                  </SelectItem>
                  <SelectItem
                    value="$1.5M - $2.0M"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $1.5M - $2.0M
                  </SelectItem>
                  <SelectItem
                    value="$2.0M - $3.0M"
                    className="!py-3 text-smmin-[2048px]:text-base  font-semibold"
                  >
                    $2.0M - $3.0M
                  </SelectItem>
                  <SelectItem
                    value="$3.0M - $4.0M"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $3.0M - $4.0M
                  </SelectItem>
                  <SelectItem
                    value="$4.0M - $5.0M"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $4.0M - $5.0M
                  </SelectItem>
                  <SelectItem
                    value="$5M+"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    $5M+
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.buyPriceRange && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.buyPriceRange}
                </p>
              )}
            </div>

            {/* Estimated Timeline */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase mb-1">
                Estimated Timeline *
              </label>
              <Select
                value={formData.buyTimeline}
                onValueChange={(val) => handleSelectChange("buyTimeline", val)}
              >
                <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent className="w-full bg-background-accent-lighter max-h-[300px] overflow-y-auto luxury-scrollbar">
                  <SelectItem
                    value="Within one month"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within one month
                  </SelectItem>
                  <SelectItem
                    value="Within two months"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within two months
                  </SelectItem>
                  <SelectItem
                    value="Within six months"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within six months
                  </SelectItem>
                  <SelectItem
                    value="Within a year"
                    className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                  >
                    Within a year
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.buyTimeline && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.buyTimeline}
                </p>
              )}
            </div>
          </div>

          {/* Pre-approved Input */}
          <div className="w-full mb-8 sm:mb-12">
            <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
              Have you been pre-approved for a mortgage?
            </label>
            <input
              type="text"
              name="preApproved"
              value={formData.preApproved}
              onChange={handleChange}
              className="bg-transparent border-b border-background-dark outline-none focus:ring-0 w-full sm:pb-2 text-foreground-input min-[2048px]:text-lg"
            />
          </div>
        </>
      )}

      {/* If Selling */}
      {formData.interestedIn === "Selling" && (
        <>
          {/* Header */}
          <div className="flex items-center gap-2 mb-8 sm:mb-12">
            <p className="uppercase text-base xl:text-md min-[2048px]:text-lg text-foreground-dark">
              Proprerty address:
            </p>
          </div>
          {/* Address Fields (Two rows, each with two fields side-by-side) */}
          <div className="flex justify-between gap-8 sm:gap-12 w-full mb-8 sm:mb-12 max-[565px]:flex-col">
            {/* Street */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
                Street *
              </label>
              <input
                type="text"
                name="sellingAddressStreet"
                value={formData.sellingAddressStreet}
                onChange={handleChange}
                className="bg-transparent border-b border-background-dark outline-none focus:ring-0 sm:pb-2 text-foreground-input w-full min-[2048px]:text-lg"
              />
              {errors.sellingAddressStreet && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.sellingAddressStreet}
                </p>
              )}
            </div>

            {/* City */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
                City *
              </label>
              <input
                type="text"
                name="sellingAddressCity"
                value={formData.sellingAddressCity}
                onChange={handleChange}
                className="bg-transparent border-b border-background-dark outline-none focus:ring-0 sm:pb-2 text-foreground-input w-full min-[2048px]:text-lg"
              />
              {errors.sellingAddressCity && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.sellingAddressCity}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-8 sm:gap-12 w-full mb-8 sm:mb-12 max-[565px]:flex-col">
            {/* State */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
                State *
              </label>
              <input
                type="text"
                name="sellingAddressState"
                value={formData.sellingAddressState}
                onChange={handleChange}
                className="bg-transparent border-b border-background-dark outline-none focus:ring-0 sm:pb-2 text-foreground-input w-full min-[2048px]:text-lg"
              />
              {errors.sellingAddressState && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.sellingAddressState}
                </p>
              )}
            </div>

            {/* Zip Code */}
            <div className="w-full max-[565px]:max-w-full max-w-[400px] min-[2048px]:max-w-[480px]">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
                Zip Code *
              </label>
              <input
                type="text"
                name="sellingAddressZip"
                value={formData.sellingAddressZip}
                onChange={handleChange}
                className="bg-transparent border-b border-background-dark outline-none focus:ring-0 sm:pb-2 text-foreground-input w-full min-[2048px]:text-lg"
              />
              {errors.sellingAddressZip && (
                <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                  {errors.sellingAddressZip}
                </p>
              )}
            </div>
          </div>

          {/* Layout (Full Width) */}
          <div className="w-full mb-8 sm:mb-12 ">
            <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
              Layout *
            </label>
            <Select
              value={formData.sellingLayout}
              onValueChange={(val) => handleSelectChange("sellingLayout", val)}
            >
              <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                <SelectValue
                  placeholder="Select layout"
                  className="!sm:pb-2 !text-foreground-input"
                />
              </SelectTrigger>
              <SelectContent className="w-full bg-background-accent-lighter max-h-[300px] overflow-y-auto luxury-scrollbar">
                <SelectItem
                  value="Studio"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Studio
                </SelectItem>
                <SelectItem
                  value="1 Bedroom"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  1 Bedroom
                </SelectItem>
                <SelectItem
                  value="2 Bedrooms"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  2 Bedrooms
                </SelectItem>
                <SelectItem
                  value="3+ Bedrooms"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  3+ Bedrooms
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.sellingLayout && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.sellingLayout}
              </p>
            )}
          </div>

          {/* Desired Timeline - full width */}
          <div className="w-full mb-8 sm:mb-12">
            <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase mb-1">
              Desired Timeline *
            </label>
            <Select
              value={formData.sellingTimeline}
              onValueChange={(val) =>
                handleSelectChange("sellingTimeline", val)
              }
            >
              <SelectTrigger className="w-full !border-t-0 !border-x-0 !px-0 !text-base !sm:pb-2 !text-foreground-input min-[2048px]:!text-lg">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent className="w-full bg-background-accent-lighter max-h-[300px] overflow-y-auto luxury-scrollbar">
                <SelectItem
                  value="Within one month"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Within one month
                </SelectItem>
                <SelectItem
                  value="Within two months"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Within two months
                </SelectItem>
                <SelectItem
                  value="Within six months"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Within six months
                </SelectItem>
                <SelectItem
                  value="Within a year"
                  className="!py-3 text-sm min-[2048px]:text-base font-semibold"
                >
                  Within a year
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.sellingTimeline && (
              <p className="text-red-500 text-xs min-[2048px]:text-base mt-2">
                {errors.sellingTimeline}
              </p>
            )}
          </div>

          {/* Price Goal */}
          <div className="w-full mb-8 sm:mb-12">
            <div className="w-full ">
              <label className="block text-base xl:text-md min-[2048px]:text-lg uppercase">
                What price are you hoping to achieve?
              </label>
              <input
                type="text"
                name="sellingPriceGoal"
                value={formData.sellingPriceGoal}
                onChange={handleChange}
                className="bg-transparent border-b border-background-dark outline-none focus:ring-0 w-full sm:pb-2 text-foreground-input min-[2048px]:text-lg"
              />
            </div>
          </div>
        </>
      )}

      <div className="w-full flex items-start justify-between gap-1">
        <button
          type="submit"
          className="--btn-dark !px-12 !pt-3 !sm:pb-2 min-[2048px]:!text-lg"
        >
          Submit
        </button>
        <p className="text-sm sm:text-base min-[2048px]:text-base xl:text-md text-foreground-dark">
          *Required Fields
        </p>
      </div>
    </form>
  );
};

export default InquireForm;
