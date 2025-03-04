"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ResidencesLastSection = ({
  smallTitle,
  title,
  description,
  showButton = false,
  buttonText = "INQUIRE",
  buttonLink = "/",
}) => {
  return (
    <section className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] max-[403px]:px-6 px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]">
      <div className="flex flex-col justify-center items-center gap-10 md:gap-12 ">
        {/* Small Title */}
        {smallTitle && (
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-foreground-accent text-sm md:text-base lg:text-lg tracking-wide text-center"
          >
            {smallTitle}
          </motion.h5>
        )}

        {/* Title */}
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="display-font text-foreground-dark max-[342px]:text-[24px] max-[387px]:text-[26px] max-[460px]:text-[30px] max-[516px]:text-[35px] max-[629px]:text-[40px] max-[685px]:text-[50px] max-[906px]:text-[55px] max-[919px]:text-[60px] max-[1032px]:text-[70px] max-[1257px]:text-[80px] max-[1370px]:text-[100px] max-[1595px]:text-[110px] max-[2094px]:text-[120px] min-[2095px]:text-[150px] leading-snug text-center "
            // text-[44px] md:text-[55px] lg:text-[65px] xl:text-[78px] 2xl:text-[100px]
          >
            {title}
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-foreground-dark max-w-3xl mx-auto text-center sm:mt-4 text-base sm:text-[19px] min-[2048px]:text-[24px]"
        >
          {description}
        </motion.p>

        {/* Button (if enabled) */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="mt-2 sm:mt-6"
          >
            <Link
              href={buttonLink}
              target={buttonLink.startsWith("http") ? "_blank" : "_self"}
              rel={
                buttonLink.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="--btn-primary-mbl min-[2048px]:text-[21px] !bg-background-accent hover:!bg-transparent !border !border-background-accent !text-foreground-light md:!text-foreground-light hover:!text-foreground-dark"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResidencesLastSection;
