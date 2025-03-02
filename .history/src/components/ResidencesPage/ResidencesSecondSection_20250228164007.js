"use client";

import React from "react";
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
      <div className="w-full flex items-start justify-center gap-40">
        {/* Text */}
        <div className="w-[45%] flex justify-end">
          <p className="w-full max-w-[375px] text-foreground-dark text-base sm:text-md min-[2048px]:text-[24px] text-right font-medium">
            {residencesContent.secondSectionText}
          </p>
        </div>

        {/* Image */}
        <div className="w-[55%] flex items-start justify-start">
          <Image
            src={imageUrl}
            alt={residencesContent.secondSectionImageAlt || "Luxury Residences"}
            // Use a larger size to avoid low-res scaling.
            width={1600}
            height={900}
            quality={90}
            priority
            className="w-full max-w-[820px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ResidencesSecondSection;
