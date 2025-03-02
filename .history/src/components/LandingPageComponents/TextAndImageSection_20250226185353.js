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
  return (
    <section
      id={id}
      className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]"
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
          isTextOnTheLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* 📜 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: isTextOnTheLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          {/* Small Title */}
          {smallTitle && (
            <h5 className="text-foreground-accent text-sm font-semibold tracking-wide uppercase mb-2">
              {smallTitle}
            </h5>
          )}

          {/* Title */}
          <h2 className="text-foreground-light text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-foreground-light text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Button */}
          {showButton && (
            <Link href={buttonLink} className="--btn-primary">
              {buttonText}
            </Link>
          )}
        </motion.div>

        {/* 🖼️ Image */}
        <motion.div
          initial={{ opacity: 0, x: isTextOnTheLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 overflow-hidden"
        >
          <div className="w-full h-[300px] md:h-[450px] xl:h-[550px] relative rounded-lg shadow-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextAndImageSection;
