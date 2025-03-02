"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const title = "Ready to Make Williamsburg Your Home?";
  const highlightWord = "Williamsburg";
  const parts = title.split(highlightWord);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    //Clear error messages when the user types again
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Email validation function
  const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email); // Basic email regex validation
  };

  // Functio for checking if fields are empty
  const isEmpty = (input) => input.length === 0;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });

    // Check if email is valid
    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // If all fields are empty, highlight everything
    if (Object.keys(newErrors).length === Object.keys(formData).length) {
      newErrors = {
        firstName: "This field is required.",
        lastName: "This field is required.",
        email: "This field is required.",
        phone: "This field is required.",
        general: "Please, enter your details.",
      };
    }

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <section
      id="contact-section"
      className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px]  px-8 md:px-12 xl:px-24 min-[2048px]:px-[170px]"
    >
      <div className="flex flex-col justify-center items-center gap-8 lg:gap-12 min-[2048px]:gap-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="display-font text-foreground-light text-xl sm:text-2xl lg:text-[53px] xl:text-3xl min-[2048px]:text-[100px] font-bold leading-[1] text-center"
        >
          {parts[0]}
          <span className="text-foreground-accent">Williamsburg</span>
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

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className={`input-contact md:flex-1 max-[565px]:w-full sm:min-w-[230px] md:min-w-12 h-[40px] xl:h-[48px] min-[2048px]:h-[70px] px-4 py-3 text-base min-[2048px]:text-lg !text-foreground-light placeholder:text-foreground-light text-center border bg-transparent focus:outline-none focus:ring-1 focus:ring-background-accent focus:placeholder:text-transparent${
              errors.email
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-background-light focus:ring-background-accent focus:border-background-accent"
            }`}
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className={`input-contact md:flex-1 max-[565px]:w-full sm:min-w-[230px] md:min-w-12 h-[40px] xl:h-[48px] min-[2048px]:h-[70px] px-4 py-3 text-base min-[2048px]:text-lg !text-foreground-light placeholder:text-foreground-light text-center border bg-transparent focus:outline-none focus:ring-1 focus:placeholder:text-transparent ${
              errors.phone
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-background-light focus:ring-background-accent focus:border-background-accent"
            }`}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="--btn-tertiary md:!flex-1 max-[565px]:w-full sm:!min-w-[230px] md:!min-w-12 h-[40px] xl:!h-[48px] min-[2048px]:!h-[70px] !px-4 !py-3 text-base min-[2048px]:text-lg "
          >
            Submit
          </button>
        </form>
      </div>
      {/* {emailError && (
        <p className="text-red-500 text-sm mt-6 text-center">{emailError}</p>
      )} */}
    </section>
  );
};

export default ContactSection;
