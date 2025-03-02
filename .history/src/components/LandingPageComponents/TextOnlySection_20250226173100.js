"use client";

import React from "react";
import Image from "next/image";
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
  const words = title.replace(/\\n/g, "\n").split("\n");
  return (
    <section id={id} className="w-full bg-background-dark py-[120px] px-20">
      <div className="flex flex-col justify-center items-center gap-12 ">
        {/* Small Title */}
        {smallTitle && (
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-foreground-accent text-lg  tracking-wide text-center"
          >
            {smallTitle}
          </motion.h5>
        )}

        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-1">
          {words.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="display-font text-foreground-light text-3xl font-bold mt-2"
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
          className="text-foreground-dark text-md md:text-lg mt-4 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Button (if enabled) */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="mt-6"
          >
            <Link
              href={buttonLink}
              className="--btn-primary inline-block px-6 py-3 text-sm font-medium"
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
