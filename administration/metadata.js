/**
 * metadata.js
 *
 * This file contains SEO-related data for each page.
 * We keep it here for quick editing and consistency.
 *
 * INSTRUCTIONS:
 * ----------------------------------------------------------------------------
 * 1) SOCIAL SHARING IMAGES
 *    - Place all social-sharing (Open Graph) images in /public/images.
 *    - The filenames MUST be as follows (all in .jpg format):
 *        - og-default.jpg
 *        - og-homepage.jpg
 *        - og-residences.jpg
 *        - og-inquire.jpg
 *        - og-legals.jpg
 *    - Any legal-related page (e.g., Terms & Conditions, Fair Housing) must
 *      use og-legals.jpg for social sharing.
 *    - Recommended resolution for the og images: 1200 × 630 pixels
 *
 * 2) FAVICON
 *    - To change the favicon, you have to substitute the old favicon with a new one
 *    - Create a file named favicon.ico
 *    - Place favicon.ico in /src/app.
 *
 * 3) TITLES & DESCRIPTIONS
 *    - Each page (including the default fallback) requires a title and
 *      description.
 *    - Update them here as shown below to keep the site’s SEO and branding
 *      consistent.
 *
 */

export const siteMetadata = {
  baseUrl: "http://localhost:3000/",
  siteName: "My Luxury Website",
  defaultTitle: "Luxury Living at Its Finest",
  defaultDescription:
    "Experience the ultimate in luxury living with our upscale properties and world-class amenities.",
  defaultOGImage: "/images/og-default.jpg", // a fallback image for social sharing
  defaultKeywords: "website, services, technology, solutions",

  // Each page in your site:

  // ---------------------- HOMEPAGE ---------------------------
  homepage: {
    title: "Home - Luxury Website",
    description:
      "Welcome to our exclusive luxury website. Indulge in modern amenities, refined style, and prime locations.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
    keywords: "website, best website, XYZ, online services, technology",
  },

  // ---------------------- RESIDENCES ---------------------------
  residences: {
    title: "Residences - Luxury Website",
    description:
      "Explore our upscale residences, complete with top-tier finishes and breathtaking views.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
    keywords: "website, best website, XYZ, online services, technology",
  },

  // ---------------------- INQUIRE ---------------------------
  inquire: {
    title: "Inquire - Luxury Website",
    description:
      "Review the terms and conditions that govern the use of our website and services.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
    keywords: "website, best website, XYZ, online services, technology",
  },

  // ---------------------- 404 - NOT FOUND ---------------------------
  NotFound: {
    title: "404 NOT FOUND - Luxury Website",
    description:
      "Review the terms and conditions that govern the use of our website and services.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
  },

  // ---------------------- LEGALS ---------------------------

  // --- TERMS & CONDITIONS ---
  termsAndConditions: {
    title: "Terms & Conditions - Luxury Website",
    description:
      "Review the terms and conditions that govern the use of our website and services.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
    keywords: "website, best website, XYZ, online services, technology",
  },

  // --- STANDARDIZED PROCEDURE ---
  standardizedProcedure: {
    title: "Standardized Procedure - Luxury Website",
    description:
      "Review the terms and conditions that govern the use of our website and services.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
    keywords: "website, best website, XYZ, online services, technology",
  },

  // --- FAIR HOUSING ---
  fairHousing: {
    title: "Fair Housing - Luxury Website",
    description:
      "Review the terms and conditions that govern the use of our website and services.",
    ogImage: "/images/og-default.jpg", // recommended: 1200 × 630 pixels
    keywords: "website, best website, XYZ, online services, technology",
  },
};
