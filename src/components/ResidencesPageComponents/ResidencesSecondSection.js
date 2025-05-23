"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <section
      id="residences-second-section"
      className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[200px] px-8 md:px-10 xl:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-start justify-center gap-12 md:gap-8 lg:gap-16 xl:gap-16">
        {/* Text */}
        <motion.div
          className="w-full md:w-[45%] xl:w-[30%] flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="max-w-[375px]  text-foreground-dark text-base sm:text-md min-[2048px]:text-[24px] text-center md:text-right font-medium">
            {residencesContent.secondSectionText}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-[55%] xl:w-[70%] flex items-start justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={imageUrl}
            alt={residencesContent.secondSectionImageAlt || "Luxury Residences"}
            width={1600}
            height={900}
            quality={90}
            priority
            className="w-full max-w-[1020px] min-[2048px]:max-w-[1200px] h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ResidencesSecondSection;
