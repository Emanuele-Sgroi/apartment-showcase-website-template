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
  };

  return (
    <section
      id="contact-section"
      className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8  min-[2048px]:px-[200px]"
    >
      <div className="flex flex-col justify-center items-center gap-12 ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="display-font text-foreground-light text-3xl min-[2048px]:text-[150px] font-bold leading-[1] text-center"
        >
          {parts[0]}
          <span className="text-foreground-accent">Williamsburg</span>
          {parts[1]}
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-row gap-6 justify-center items-center "
        >
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-auto px-4 py-3 text-base text-foreground-light text-center border border-background-light focus:outline-none focus:ring-1 focus:ring-background-accent focus:border-background-accent bg-transparent"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full md:w-auto px-4 py-3 text-sm md:text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full md:w-auto px-4 py-3 text-sm md:text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full md:w-auto px-4 py-3 text-sm md:text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg text-sm md:text-md font-semibold hover:bg-opacity-80 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
