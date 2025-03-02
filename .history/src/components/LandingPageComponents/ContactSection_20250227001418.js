"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  const title = "Ready to Make\n Williamsburg\n Your Home?";
  const words = title.replace(/\\n/g, "\n").split("\n");
  return (
    <section
      id="contact-section"
      className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div className="flex flex-col justify-center items-center gap-10 md:gap-12 ">
        {/* Title */}
        <div className="flex items-center justify-center">
          {words.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="display-font text-foreground-light text-[44px] md:text-[55px] lg:text-[65px] xl:text-[78px] 2xl:text-[100px] min-[2048px]:text-[150px] font-bold leading-[1] text-center "
            >
              {word.trim()}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
