"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  const title = "Ready to Make Williamsburg Your Home?";
  const highlightWord = "Williamsburg";
  const parts = title.split(highlightWord);

  return (
    <section
      id="contact-section"
      className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div className="flex flex-col justify-center items-center gap-10 md:gap-12 ">
        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="display-font text-foreground-light text-3xl min-[2048px]:text-[150px] font-bold leading-[1] text-center"
        >
          {parts[0]}
          <span className="text-foreground-accent">Williamsburg</span>
          {parts[1]}
        </motion.h2>
      </div>
    </section>
  );
};

export default ContactSection;
