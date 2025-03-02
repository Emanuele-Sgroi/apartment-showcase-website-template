"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/homeAbout.module.scss";

const AboutSection = () => {
  let title = "Elevated\n Williamsburg\n Living";

  const words = title.split("\n"); // Split the CMS title into words

  return (
    <section
      id="about-section"
      className={`${styles.about_section_container} relative w-full bg-background-secondary pb-16 sm:pb-24 md:pb-28 lg:pb-32`}
    >
      {/* Display text animation */}
      {/* <div
        className={`${styles.responsive_title_about_section_container} absolute right-0 top-[170px] sm:top-[188px] md:top-[195px] lg:top-[190px] xl:top-[210px] 3xl:top-[250px] w-full flex justify-end pr-6 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24`}
      >
        <h2
          style={{
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "geometricPrecision",
            transform: "translateZ(0)",
          }}
          className={`flex flex-col text-right font-display
          ${styles.responsive_title_about_section}
          text-[77px]  sm:text-[105px] md:text-9xl 
          lg:text-[155px] xl:text-[11rem] 2xl:text-[13rem] 3xl:text-[14rem] font-bold 
          !leading-[37px] sm:!leading-[52px] md:!leading-[63px] lg:!leading-[76px] xl:!leading-[86px] 2xl:!leading-[100px] 3xl:!leading-[108px] 
          tracking-wider text-shadow-md z-30`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              style={{
                WebkitTextStroke:
                  i % 2 === 0 ? "2px rgb(0, 0, 0)" : "2px rgb(255, 255, 255)",
              }}
              className={`${
                i % 2 === 0
                  ? "text-foreground-secondary"
                  : "text-foreground-primary"
              }`}
            >
              {word.trim()}
            </motion.span>
          ))}
        </h2>
      </div> */}

      {/* Display text animation */}
      {/* <div
        className={`${styles.responsive_title_about_section_container} absolute right-0 top-1/4 w-full flex justify-end pr-4 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24`}
      >
        <h2
          style={{
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "geometricPrecision",
            transform: "translateZ(0)",
          }}
          className={`flex flex-col text-right font-display
    ${styles.responsive_title_about_section}
    font-bold tracking-tight text-shadow-md z-30
    text-balance break-words leading-none`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              style={{
                WebkitTextStroke:
                  i % 2 === 0
                    ? "1.5px rgb(0, 0, 0)"
                    : "1.5px rgb(255, 255, 255)",
              }}
              className={`${
                i % 2 === 0
                  ? "text-foreground-secondary"
                  : "text-foreground-primary"
              }`}
            >
              {word.trim()}
            </motion.span>
          ))}
        </h2>
      </div> */}
      <div
        className={`${styles.responsive_title_about_section_container} w-full flex justify-end items-end pt-24 sm:pt-32 md:pt-40 3xl:pt-[250px] pr-6 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-36 pl-4 `}
      >
        <h2
          style={{
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "geometricPrecision",
            transform: "translateZ(0)",
          }}
          className={`flex flex-col text-right font-display
    ${styles.responsive_title_about_section}
    font-bold tracking-tight text-shadow-md z-30
    text-balance break-words leading-none`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              style={{
                WebkitTextStroke:
                  i % 2 === 0
                    ? "1.5px rgb(0, 0, 0)"
                    : "1.5px rgb(255, 255, 255)",
              }}
              className={`${
                i % 2 === 0
                  ? "text-foreground-secondary"
                  : "text-foreground-primary"
              } `}
            >
              {word.trim()}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Content container */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 z-10 ">
        {/* Image animation */}
        <motion.div
          className="relative w-[80%] sm:w-[80%] md:w-1/2 2xl:w-[60%] h-[600px] md:h-[900px] lg:h-[1100px] flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/slider1.jpg"
            alt="about_section"
            fill
            quality={75}
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Text and button animation */}
        <motion.div
          className="w-full md:w-1/2 2xl:w-[40%] flex flex-col justify-end gap-8 md:gap-20 pr-4 lg:pr-24 pl-6 md:pl-12 lg:pl-16 xl:pl-24 md:pb-44"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-bold text-md md:text-xl lg:text-[33px] 2xl:text-[40px] max-w-[80%] md:max-w-max xl:max-w-[460px]">
            Experience luxury living in one of the top Williamsburg&apos;s
            premier condominiums.
          </h3>
          <Link
            href="/inquiry"
            className="--btn-secondary max-w-fit md:max-w-[calc(460px-50px)] !text-xs sm:!text-sm md:!text-[21px] !py-[12px] md:!py-[14px]"
          >
            CHECK AVAILABILITY
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
