"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <section
      id={id}
      className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[200px] px-8 md:px-10 xl:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div
        className={`w-full flex items-center gap-8 md:gap-10 xl:gap-20 max-[850px]:flex-col ${
          isTextOnTheLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: isTextOnTheLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`w-1/2 h-full flex items-start ${
            isTextOnTheLeft ? "justify-end" : "justify-start"
          } `}
        >
          <div className="w-full xl:w-min xl:min-w-[500px] 2xl:min-w-[600px] flex justify-center items-start flex-col text-left">
            {/* Small Title */}
            {smallTitle && (
              <h5 className="text-foreground-accent text-xs md:text-md min-[2048px]:text-lg tracking-wide">
                {smallTitle}
              </h5>
            )}

            {/* Title */}
            <div className="flex flex-col items-center justify-start mt-6 mb-12">
              {words.map((word, i) => (
                <h2
                  key={i}
                  className="display-font text-foreground-dark text-[44px] md:text-[55px] lg:text-[86px] 2xl:text-[100px] min-[2048px]:text-[150px] font-bold leading-[1] "
                >
                  {word.trim()}
                </h2>
              ))}
            </div>

            {/* Description */}
            <p className="min-[2048px]:w-[820px] text-foreground-dark text-sm sm:text-md min-[2048px]:text-[24px] mb-12">
              {description}
            </p>

            {/* Button */}
            {showButton && (
              <Link href={buttonLink} className="--btn-secondary">
                {buttonText}
              </Link>
            )}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isTextOnTheLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`w-1/2 overflow-hidden flex ${
            isTextOnTheLeft ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className="relative w-full xl:max-w-[595px] min-[2048px]:max-w-full h-[705px] min-[2048px]:h-[1000px] overflow-hidden"
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
      </div>
    </section>
  );
};

export default TextAndImageSection;
