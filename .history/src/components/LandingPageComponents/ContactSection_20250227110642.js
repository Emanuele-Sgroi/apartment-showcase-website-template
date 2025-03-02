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

  const title = "Ready to Make Williamsburg Your Home?";
  const highlightWord = "Williamsburg";
  const parts = title.split(highlightWord);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check the console for details.");

    // Reset the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section
      id="contact-section"
      className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px]  px-8  lg:p-16"
    >
      <div className="flex flex-col justify-center items-center gap-12 ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="display-font text-foreground-light text-3xl min-[2048px]:text-[100px] font-bold leading-[1] text-center"
        >
          {parts[0]}
          <span className="text-foreground-accent">Williamsburg</span>
          {parts[1]}
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-row gap-6 justify-center items-center"
        >
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="input-contact w-[180px] md:w-[200px] h-[48px] px-4 py-3 text-base !text-foreground-light placeholder:text-foreground-light text-center border border-background-light bg-transparent focus:outline-none focus:ring-1 focus:ring-background-accent focus:border-background-accent focus:placeholder:text-transparent"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="input-contact w-[180px] md:w-[200px] h-[48px] px-4 py-3 text-base !text-foreground-light placeholder:text-foreground-light text-center border border-background-light bg-transparent focus:outline-none focus:ring-1 focus:ring-background-accent focus:border-background-accent focus:placeholder:text-transparent"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="input-contact w-[200px] md:w-[250px] h-[48px] px-4 py-3 text-base !text-foreground-light placeholder:text-foreground-light text-center border border-background-light bg-transparent focus:outline-none focus:ring-1 focus:ring-background-accent focus:border-background-accent focus:placeholder:text-transparent"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="input-contact w-[200px] md:w-[250px] h-[48px] px-4 py-3 text-base !text-foreground-light placeholder:text-foreground-light text-center border border-background-light bg-transparent focus:outline-none focus:ring-1 focus:ring-background-accent focus:border-background-accent focus:placeholder:text-transparent"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="--btn-tertiary !w-[200px] md:!w-[250px] !h-[48px] !px-4 !py-3 text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
