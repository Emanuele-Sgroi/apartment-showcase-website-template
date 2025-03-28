"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TextOnlySection = ({
  id,
  smallTitle,
  title,
  description,
  showButton = false,
  buttonText = "Learn More",
  buttonLink = "/",
}) => {
  return (
    <section
      id={id}
      className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div className="flex flex-col justify-center items-center gap-10 md:gap-12 ">
        {/* Small Title */}
        {smallTitle && (
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-foreground-accent text-sm md:text-base lg:text-lg min-[2048px]:text-lg tracking-wide text-center"
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
            className="display-font text-foreground-light text-[44px] md:text-[55px] lg:text-[65px] xl:text-[78px] 2xl:text-[100px] min-[2048px]:text-[150px] leading-[1] text-center "
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
          className="text-foreground-light max-w-2xl mx-auto text-center sm:mt-4 text-sm sm:text-md min-[2048px]:text-[24px]"
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
              className="--btn-primary-mbl min-[2048px]:text-[21px]"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TextOnlySection;
