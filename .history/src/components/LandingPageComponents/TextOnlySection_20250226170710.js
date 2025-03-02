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
  return (
    <section id={id} className="w-full py-16 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small Title */}
        {smallTitle && (
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-foreground-accent text-sm font-semibold tracking-wide uppercase"
          >
            {smallTitle}
          </motion.h5>
        )}

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-foreground-dark text-4xl md:text-5xl font-bold mt-2"
        >
          {title}
        </motion.h2>

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
