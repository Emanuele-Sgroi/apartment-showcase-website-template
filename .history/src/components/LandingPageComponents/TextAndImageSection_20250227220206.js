"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAssetUrl } from "@/utils/imageUtils";

const TextAndImageSection = ({
  id,
  smallTitle,
  title,
  description,
  showButton = false,
  buttonText = "Learn More",
  buttonLink = "/",
  image,
  isTextOnTheLeft = true,
}) => {
  const words = title.replace(/\\n/g, "\n").split("\n");

  // Compute the final image URL based on device size
  const imageSrc = getAssetUrl(image);

  // If the resulting imageSrc is an empty string or null, return nothing
  if (!imageSrc) {
    return null;
  }

  return (
    <section
      id={id}
      className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[200px] md:px-10 xl:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div
        className={`w-full flex items-center  max-[850px]:gap-16 gap-10 xl:gap-20 max-[850px]:flex-col ${
          isTextOnTheLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Text Content */}
        <div
          className={`max-[850px]:w-full w-1/2 h-full flex max-[850px]:items-center items-start max-[850px]:justify-center px-8 md:px-0  ${
            isTextOnTheLeft ? "justify-end" : "justify-start"
          } `}
        >
          <div className="w-full xl:w-min xl:min-w-[500px] 2xl:min-w-[600px] flex justify-center items-start max-[850px]:justify-center max-[850px]:items-center  flex-col max-[850px]:text-center text-left">
            {/* Small Title */}
            {smallTitle && (
              <motion.h5
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-foreground-accent text-xs md:text-md min-[2048px]:text-lg tracking-wide"
              >
                {smallTitle}
              </motion.h5>
            )}

            {/* Title */}
            <div className="flex flex-col items-center justify-start mt-10 md:mt-6 mb-10 md:mb-12">
              {words.map((word, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="display-font text-foreground-dark text-[44px] md:text-[55px] lg:text-[86px] 2xl:text-[100px] min-[2048px]:text-[150px] font-bold leading-[1] "
                >
                  {word.trim()}
                </motion.h2>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="min-[2048px]:w-[820px] text-foreground-dark text-sm sm:text-md min-[2048px]:text-[24px] mb-10 md:mb-12"
            >
              {description}
            </motion.p>

            {/* Button */}
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <Link
                  href={buttonLink}
                  target={buttonLink.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    buttonLink.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="--btn-secondary min-[2048px]:text-[21px]"
                >
                  {buttonText}
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Image */}

        <motion.div
          initial={{
            opacity: 0,
            x: isTextOnTheLeft ? 50 : -50,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`max-[850px]:hidden max-[850px]:w-full w-1/2 overflow-hidden flex max-[850px]:justify-center px-2 md:px-0 ${
            isTextOnTheLeft ? "justify-start" : "justify-end"
          }`}
        >
          <div className="relative w-full xl:max-w-[595px] min-[2048px]:max-w-full max-[450px]:h-[500px] h-[600px] sm:h-[705px] min-[2048px]:h-[1000px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={title || "Luxury Residents"}
              fill
              quality={100}
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`min-[851px]:hidden max-[850px]:w-full w-1/2 overflow-hidden flex max-[850px]:justify-center px-2 md:px-0 ${
            isTextOnTheLeft ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className="relative w-full xl:max-w-[595px] min-[2048px]:max-w-full max-[450px]:h-[500px] h-[600px] sm:h-[705px] min-[2048px]:h-[1000px] overflow-hidden"
            //md:h-[700px] xl:h-[800px] min-[2048px]:h-[1000px]
          >
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* <motion.div
          initial={{
            opacity: 0,
            x: isMobile ? 0 : isTextOnTheLeft ? 50 : -50,
            y: isMobile ? 50 : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`max-[850px]:w-full w-1/2 overflow-hidden flex max-[850px]:justify-center px-2 md:px-0 ${
            isTextOnTheLeft ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className="relative w-full xl:max-w-[595px] min-[2048px]:max-w-full max-[450px]:h-[500px] h-[600px] sm:h-[705px] min-[2048px]:h-[1000px] overflow-hidden"
            //md:h-[700px] xl:h-[800px] min-[2048px]:h-[1000px]
          >
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TextAndImageSection;
