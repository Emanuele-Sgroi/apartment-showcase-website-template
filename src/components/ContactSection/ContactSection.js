"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThankYouModal, SpinnerRound } from "@/components";

const ContactSection = ({ title, highlight, globalsContent }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState(""); // For desktop error message
  const [isModalOpen, setIsModalOpen] = useState(false); // This state controls the "Thank you" modal
  const [isSubmitting, setIsSubmitting] = useState(false);

  const parts = title?.split(highlight);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear individual field errors when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setGeneralError(""); // Reset general error message
  };

  // Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // Phone number validation (basic international format)
  const isValidPhone = (phone) =>
    /^[\d\s()+-]+$/.test(phone.trim()) && phone.trim().length >= 7;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    let generalErrorMessage = "";
    let emptyFields = [];

    // Check for empty fields & collect them
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `Please enter your ${key
          .replace(/([A-Z])/g, " $1")
          .toLowerCase()}.`;
        emptyFields.push(key);
      }
    });

    // If more than one field is empty, show a general error
    if (emptyFields.length > 1) {
      generalErrorMessage = "Please enter your details.";
    }

    // Email and phone validation (only if fields arent't empty)
    if (formData.email && !isValidEmail(formData.email) && !generalError) {
      newErrors.email = "Please enter a valid email address.";
    } else if (
      formData.number &&
      !isValidPhone(formData.number) &&
      !generalError
    ) {
      newErrors.number = "Please enter a valid phone number.";
    }

    // Set errors
    setErrors(newErrors);
    setGeneralError(
      generalErrorMessage ||
        (emptyFields.length === 1 ? newErrors[emptyFields[0]] : "")
    ); // Prioritize general or first specific error

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // 1) Send form data to our /api/fub route
        const res = await fetch("/api/fub", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.number,
          }),
        });

        if (!res.ok) {
          // handle an error from your route
          console.error("Failed to send lead to FUB", await res.json());
          setGeneralError(
            "We encountered an issue while submitting your form. Please try again."
          );

          setIsSubmitting(false);
          return;
        }

        const data = await res.json();
        console.log("FUB response data:", data);

        // 2) Show success to user
        setIsSubmitting(false);
        setIsModalOpen(true); // Open "Thank you Modal"
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
        });
        setGeneralError(""); // Clear error after successful submission
      } catch (error) {
        console.error("Error on form submit:", error);
        setGeneralError(
          "We encountered an issue while submitting your form. Please try again."
        );

        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact-section"
      className="w-full bg-background-dark pt-[56px] md:pt-[80px] 2xl:pt-[120px] pb-[18px]  px-8 md:px-12 xl:px-24 min-[2048px]:px-[170px]"
    >
      <div className="flex flex-col justify-center items-center gap-8 lg:gap-12 min-[2048px]:gap-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="display-font text-foreground-light text-xl sm:text-2xl lg:text-[53px] xl:text-3xl min-[2048px]:text-[100px] leading-[1] text-center"
        >
          {parts[0]}
          <span className="text-foreground-accent">{highlight}</span>
          {parts[1]}
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full flex flex-row gap-4 lg:gap-6 justify-center items-center max-md:flex-wrap"
        >
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className={`input-contact md:flex-1 max-[565px]:w-full sm:min-w-[230px] md:min-w-12 h-[40px] xl:h-[48px] min-[2048px]:h-[70px] px-4 py-3 text-base min-[2048px]:text-lg !text-foreground-light placeholder:text-foreground-light text-center border bg-transparent focus:outline-none focus:ring-1 focus:placeholder:text-transparent ${
              errors.firstName
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-background-light focus:ring-background-accent focus:border-background-accent"
            }`}
          />
          {errors.firstName && (
            <p className="min-[566px]:hidden text-red-500 text-xxs text-center -mt-1">
              {errors.firstName}
            </p>
          )}

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className={`input-contact md:flex-1 max-[565px]:w-full sm:min-w-[230px] md:min-w-12 h-[40px] xl:h-[48px] min-[2048px]:h-[70px] px-4 py-3 text-base min-[2048px]:text-lg !text-foreground-light placeholder:text-foreground-light text-center border bg-transparent focus:outline-none focus:ring-1 focus:placeholder:text-transparent ${
              errors.lastName
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-background-light focus:ring-background-accent focus:border-background-accent"
            }`}
          />
          {errors.lastName && (
            <p className="min-[566px]:hidden text-red-500 text-xxs text-center -mt-1">
              {errors.lastName}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className={`input-contact md:flex-1 max-[565px]:w-full sm:min-w-[230px] md:min-w-12 h-[40px] xl:h-[48px] min-[2048px]:h-[70px] px-4 py-3 text-base min-[2048px]:text-lg !text-foreground-light placeholder:text-foreground-light text-center border bg-transparent focus:outline-none focus:ring-1 focus:placeholder:text-transparent ${
              errors.email
                ? "!border-red-500 focus:!ring-red-500 focus:!border-red-500"
                : "border-background-light focus:ring-background-accent focus:border-background-accent"
            }`}
          />
          {errors.email && (
            <p className="min-[566px]:hidden text-red-500 text-xxs text-center -mt-1">
              {errors.email}
            </p>
          )}
          {/* Phone Number */}
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className={`input-contact md:flex-1 max-[565px]:w-full sm:min-w-[230px] md:min-w-12 h-[40px] xl:h-[48px] min-[2048px]:h-[70px] px-4 py-3 text-base min-[2048px]:text-lg !text-foreground-light placeholder:text-foreground-light text-center border bg-transparent focus:outline-none focus:ring-1 focus:placeholder:text-transparent ${
              errors.number
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-background-light focus:ring-background-accent focus:border-background-accent"
            }`}
          />

          {errors.number && (
            <p className="min-[566px]:hidden text-red-500 text-xxs text-center -mt-1">
              {errors.number}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="--btn-tertiary disabled:hover:!bg-background-light disabled:hover:!border-background-light disabled:hover:!text-foreground-dark disabled:!cursor-not-allowed md:!flex-1 max-[565px]:w-full sm:!min-w-[230px] md:!min-w-12 h-[40px] xl:!h-[48px] min-[2048px]:!h-[70px] !px-4 !py-3 text-base min-[2048px]:text-lg "
          >
            {isSubmitting ? (
              <span>
                <SpinnerRound size={24} color="var(--foreground-dark)" />
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      {/* Desktop General or Specific Error Message */}
      {generalError && (
        <p className="max-[565px]:hidden text-red-500 text-sm mt-4 text-center">
          {generalError}
        </p>
      )}
      {errors.email && !generalError && (
        <p className="max-[565px]:hidden text-red-500 text-sm mt-4 text-center">
          {errors.email}
        </p>
      )}
      {errors.phone && !generalError && (
        <p className="max-[565px]:hidden text-red-500 text-sm mt-4 text-center">
          {errors.phone}
        </p>
      )}

      {/* Show modal when submitted successfully */}
      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={globalsContent?.thankYouModalTitle}
        titleHighlight={globalsContent?.thankYouModalTitleHighlight}
        description={globalsContent?.thankYouModalDescription}
        image={globalsContent?.thankYouModalImage}
      />
    </section>
  );
};

export default ContactSection;
