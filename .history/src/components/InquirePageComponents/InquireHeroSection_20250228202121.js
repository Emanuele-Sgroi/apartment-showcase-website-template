"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const InquireHeroSection = ({ title, subTitle }) => {
  return (
    <section className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]">
      <div className="flex flex-col justify-center items-center gap-10 md:gap-12 ">
        {/* Title */}
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="display-font text-foreground-light text-[30px] md:text-[36px] lg:text-[41px] min-[2048px]:text-[70px] font-bold leading-[1] text-center "
          >
            {title}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="text-foreground-accent text-center text-md md:text-lg min-[2048px]:text-[23px]"
        >
          {subTitle}
        </motion.h2>
      </div>
    </section>
  );
};

export default InquireHeroSection;
