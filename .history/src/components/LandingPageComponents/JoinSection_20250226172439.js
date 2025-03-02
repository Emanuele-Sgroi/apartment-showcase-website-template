"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import styles from "@/styles/homeJoin.module.scss";

const JoinSection = () => {
  let title = "Ready to Call\n 1 Northside Piers\n Home?";

  const words = title.split(" ");

  return (
    <div className="w-full flex flex-col gap-12 bg-background-primary py-12 sm:py-20 lg:py-36 px-6 sm:px-12 lg:px-24">
      <div className="w-full">
        <h2
          style={{
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "geometricPrecision",
            transform: "translateZ(0)",
          }}
          className={`${styles.responsive_title_join_section} flex flex-col text-right font-display text-[38px] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] 2xl:text-[9.5rem] 3xl:text-[11rem] font-bold leading-[35px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px] xl:leading-[100px] 2xl:leading-[140px] 3xl:leading-[180px] text-shadow-md z-30`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              style={{
                WebkitTextStroke:
                  i % 2 === 0
                    ? "2px var(--background-secondary)"
                    : "2px var(--background-tertiary)",
              }}
              className={`${
                i % 2 === 0
                  ? "text-foreground-tertiary"
                  : "text-foreground-secondary"
              }`}
            >
              {word.trim()}
            </motion.span>
          ))}
        </h2>
      </div>
      <div className="w-full flex justify-between md:items-end flex-col md:flex-row gap-12 md:gap-2">
        <p className="w-full md:w-1/2 text-foreground-secondary text-xs sm:text-md lg:text-lg md:pl-10 lg:pl-16 xl:pl-20">
          Explore coming soon and off-market listings at 1 Northside Piers.
          Don&apos;t miss your chance to secure a premier waterfront residence
          in <b>Williamsburg.</b>
        </p>
        <div className="w-full md:w-1/2 flex justify-start md:justify-center items-end">
          <Link
            href="/inquiry"
            className="--btn-secondary w-fit !text-lg hover:!bg-background-secondary hover:!border-background-secondary hover:!text-foreground-primary !text-xs sm:!text-sm md:!text-[21px] !py-[12px] md:!py-[14px]"
          >
            JOIN THE WAITLIST
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
