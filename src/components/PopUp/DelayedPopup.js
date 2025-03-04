"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";
import { getAssetUrl } from "@/utils/imageUtils";
import { SpinnerRound } from "@/components";
import Link from "next/link";

export default function DelayedPopup() {
  //  We call the hook at the top, always:
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  //  Define your local states and effects
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  // We define a local function to handle the "close" logic
  const handleClose = () => {
    setShowPopup(false);
    // If the user only sees the popup once
    if (globalsContent?.showThePopupJustOnce) {
      localStorage.setItem("popupShown", "true");
    }
  };

  // This effect decides if/when to open the popup
  useEffect(() => {
    if (!globalsContent || isGlobalsError || isGlobalsLoading) {
      return; // Just do nothing if we can't show the popup
    }

    // If the popup is disabled, do nothing.
    if (!globalsContent.showThePopup) {
      return;
    }

    // If "showThePopupJustOnce" is true => use localStorage
    if (globalsContent.showThePopupJustOnce) {
      const alreadyShown = localStorage.getItem("popupShown");
      if (!alreadyShown) {
        const delayMs = (globalsContent.popupDelay || 4) * 1000;
        const timerId = setTimeout(() => setShowPopup(true), delayMs);
        return () => clearTimeout(timerId);
      }
    } else {
      // If showThePopupJustOnce is false => always show after popupDelay
      const delayMs = (globalsContent.popupDelay || 4) * 1000;
      const timerId = setTimeout(() => setShowPopup(true), delayMs);
      return () => clearTimeout(timerId);
    }
  }, [globalsContent, isGlobalsError, isGlobalsLoading]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSubmitting(true);
    try {
      // Send form data to our /api/fub route
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
        setIsError(true);
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();
      console.log("FUB response data:", data);

      //  Show success to user
      setIsError(false);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // if just once
      if (globalsContent?.showThePopupJustOnce) {
        localStorage.setItem("popupShown", "true");
      }
    } catch (error) {
      console.error("Error on form submit:", error);
      setIsError(true);
      setIsSubmitting(false);
    }
  };

  // Now do the conditional returns *after* all hooks:
  // If globally loading, error, or no content => no popup
  if (isGlobalsLoading || isGlobalsError || !globalsContent) {
    return null;
  }

  // If the popup is disabled by the CMS => skip
  if (!globalsContent.showThePopup) {
    return null;
  }

  // If "showPopup" is currently false => don't render the popup overlay
  if (!showPopup) {
    return null;
  }

  //  Pre-prepare the strings for form and thankYou
  const {
    popupFormTitle = "",
    popupFormTitleHighlight = "",
    popupFormDescription = "",
    popupThankYouTitle = "",
    popupThankYouTitleHighlight = "",
    popupThankYouDescription = "",
    popUpImage,
  } = globalsContent;

  const formParts = popupFormTitle.split(popupFormTitleHighlight);
  const thankParts = popupThankYouTitle.split(popupThankYouTitleHighlight);

  return (
    <div
      className="
        fixed inset-0 z-[999999] flex items-center justify-center 
        bg-black/50 px-4
      "
    >
      <div
        className="
          relative bg-background-light max-w-[900px] w-full 
          flex flex-col-reverse md:flex-row 
          h-auto max-h-[600px]
          overflow-hidden
        "
      >
        {/* Close Button (X) - top right corner */}
        <button
          onClick={handleClose}
          className="
            absolute top-3 right-3 bg-background-light rounded-full p-[2px]
            flex justify-center items-center
            text-foreground-dark hover:text-foreground-accent 
            transition-all z-[999] 
          "
          aria-label="Close Popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* LEFT SIDE: form or thank you */}
        {!isSubmitted ? (
          <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center">
            <h2 className="display-font text-[26px] md:text-xl lg:text-2xl mb-2 md:mb-4 leading-tight">
              {formParts[0]}
              <span className="text-foreground-accent">
                {popupFormTitleHighlight}
              </span>
              {formParts[1]}
            </h2>
            <p className="text-sm md:text-base lg:text-md mb-6 md:mb-12">
              {popupFormDescription}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 md:gap-4"
            >
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="
                  border-b border-gray-400 bg-transparent px-2 py-1 md:py-2 
                  focus:outline-none focus:border-foreground-accent
                "
                required
              />

              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="
                  border-b border-gray-400 bg-transparent px-2 py-1 md:py-2 
                  focus:outline-none focus:border-foreground-accent
                "
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="
                  border-b border-gray-400 bg-transparent px-2 py-1 md:py-2 
                  focus:outline-none focus:border-foreground-accent
                "
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                className="
                  border-b border-gray-400 bg-transparent px-2 py-1 md:py-2 
                  focus:outline-none focus:border-foreground-accent
                "
                required
              />

              <div className="flex items-center justify-start gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                  mt-4 py-2 px-6 
                  bg-foreground-dark text-foreground-light font-semibold 
                  hover:bg-background-accent disabled:hover:bg-background-dark
                  disabled:cursor-not-allowed disabled:opacity-70 transition-all self-start
                "
                >
                  Submit
                </button>
                {isSubmitting && (
                  <div className="mt-4">
                    <SpinnerRound size={24} color="var(--foreground-dark)" />
                  </div>
                )}
              </div>
              {isError && (
                <p className="text-xxs sm:text-xs md:text-sm">
                  <span className="text-red-500 font-semibold">Error:</span> We
                  encountered an issue while submitting your form. Please try
                  again. Alternatively, you can complete the process on our{" "}
                  <Link
                    href="/inquire"
                    className="text-xxs sm:text-xs md:text-sm font-bold underline"
                  >
                    Inquire page
                  </Link>
                  .
                </p>
              )}
            </form>
          </div>
        ) : (
          // THANK YOU VIEW
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-start">
            <h2 className="display-font text-[26px] md:text-xl lg:text-2xl leading-tight mb-2 md:mb-6">
              {thankParts[0]}
              <span className="text-foreground-accent">
                {popupThankYouTitleHighlight}
              </span>
              {thankParts[1]}
            </h2>
            <p className="text-sm md:text-base lg:text-md mb-6 text-foreground-dark">
              {popupThankYouDescription}
            </p>
            <button
              onClick={handleClose}
              className="
                 mt-4 py-2 px-6 
                  bg-foreground-dark text-foreground-light font-semibold 
                  hover:bg-background-accent transition-all
                  self-start
              "
            >
              Close
            </button>
          </div>
        )}

        {/* RIGHT SIDE image */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-auto md:min-h-[546px]">
          <Image
            src={getAssetUrl(popUpImage)}
            alt="Popup Image"
            fill
            className="object-cover object-center"
            quality={85}
            priority
          />
        </div>
      </div>
    </div>
  );
}
