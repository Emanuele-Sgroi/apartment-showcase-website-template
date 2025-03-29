# Luxury Real Estate Showcase

> **A Next.js template designed for quick, elegant real-estate websites, powered by Contentful and Follow Up Boss.**

[View Demo](https://emanuele-sgroi.github.io/showcase-gorilla-nft/)

![Gorilla NFT Screenshots](./app_screenshots.png)

## Table of Contents
- [Overview](#overview)
- [Core Features](#core-features)
- [How It Works](#how-it-works)
- [Why This Project?](#why-this-project)
- [Future Ideas](#future-ideas)
- [Conclusion](#conclusion)

---

## Overview
This Next.js template lets real estate agents spin up a polished property site for any high-end apartment or condo with minimal effort. It fetches content from **Contentful**, captures leads via **Follow Up Boss**, and accommodates multiple hero types (single image, carousel, or video). By design, it’s small in scope but visually refined, making it easy to replicate for new properties without re-hiring a developer each time.

---

## Core Features

1. **Multiple Hero Options**  
   - Select a single image, a photo carousel, or a background video for the top of the homepage.  
   - Seamlessly update these from the CMS without touching code.

2. **Luxury Aesthetics**  
   - **Tailwind CSS** and **Framer Motion** combine for a high-end look with smooth animations.  
   - Perfect for showcasing upscale condos or apartments.

3. **Contentful Integration**  
   - Each site references a dedicated entry in Contentful.  
   - Property descriptions, photos, and amenity details can be edited anytime—no developer required.

4. **Reusable for Multiple Properties**  
   - Spin up a new site by simply pointing to a different Contentful entry and domain.  
   - Saves time and budget for real estate agents managing multiple listings.

5. **Inquiry & Lead Capture**  
   - A dedicated “Inquire” page collects prospective buyer/renter info.  
   - All inquiries are routed to **Follow Up Boss**, automatically updating the agent’s CRM.

---

## How It Works

- **CMS-Filled Content**  
  Each site instance references a unique Contentful entry. Swap images, text, or hero type (video vs. carousel) from the CMS interface.

- **Next.js + Tailwind**  
  Server-side rendering (or static generation) ensures performance. Utility-first styling allows quick visual tweaks.

- **Inquiries → Follow Up Boss**  
  Submitted forms send data directly to the agent’s CRM, centralizing leads under one system.

- **Cloning the Site**  
  Need a new property site? Duplicate this repo, attach it to a new domain, and point the code to another CMS entry. Minimal developer involvement required.

---

## Why This Project?
It started as a single site for a luxury condo in New York. Then the client wanted another—and another. Instead of building each from scratch, I created a master Next.js template tied to Contentful and integrated with Follow Up Boss. Now, adding a new property page only involves setting up a domain and populating Contentful, drastically reducing costs and development overhead.

---

## Future Ideas

- **Localization**  
  Add multi-language functionality for global outreach.

- **Extended Sections**  
  Potentially highlight nearby attractions, restaurants, or integrate 3D tours to enrich the visitor experience.

- **Analytics**  
  Track user flows, inquiry conversion rates, or advanced event metrics in a dedicated dashboard.

- **Automated Deployment**  
  Use Netlify or Vercel to auto-deploy updates whenever new content or domain data is saved.

---

## Conclusion
This approach seamlessly balances a luxury aesthetic with the simplicity needed for rapid duplication. By employing Next.js, Tailwind, and Contentful, real estate agents can deploy new, polished property sites in minutes—complete with inquiry handling and CRM integration. It’s a fast, scalable solution for showcasing any high-end apartment or condo.
