"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

const ResidencesSecondSection = ({ residencesContent }) => {
  // Extract the image from CMS
  const imageUrl = residencesContent?.secondSectionImage
    ? getAssetUrl(residencesContent.secondSectionImage)
    : "";

  if (!imageUrl) {
    return null;
  }

  return (
    <section className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[200px] md:px-10 xl:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]">
      <div className="w-full flex items-start justify-center gap-20">
        {/* Text */}
        <div className="w-[35%]">
          <p className="w-full text-foreground-dark text-base sm:text-md min-[2048px]:text-[24px] text-right font-medium">
            {residencesContent.secondSectionText}
          </p>
        </div>
        {/* Image */}
        <div className="w-[65%] flex items-start justify-start">
          <Image
            src={imageUrl}
            alt={residencesContent.secondSectionImageAlt || "Luxury Residences"}
            width={300}
            height={300}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ResidencesSecondSection;
