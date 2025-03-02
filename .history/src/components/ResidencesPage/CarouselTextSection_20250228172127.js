"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

/* 1) Import Swiper CSS so it has the necessary height/width styles */
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const CarouselTextSection = ({ text, slidesRef, isTextOnTheLeft = true }) => {
  // If no images or text, return nothing
  if (!slidesRef || !slidesRef.length || !text) return null;

  return (
    <section className="relative w-full">
      <div
        className={`
          flex flex-col-reverse md:${
            isTextOnTheLeft ? "flex-row" : "flex-row-reverse"
          }
          items-start justify-center gap-8 md:gap-16
        `}
      >
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 flex justify-end p-4 md:p-0"
          initial={{ opacity: 0, x: isTextOnTheLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="w-full text-foreground-dark text-base sm:text-md md:text-lg xl:text-xl min-[2048px]:text-[24px] text-left md:text-right font-medium">
            {text}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full md:w-1/2 relative"
          /* 2) Give the container a height or aspect ratio. Below we set a fixed height for demo. */
          style={{ height: "400px" }}
          initial={{ opacity: 0, x: isTextOnTheLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            effect="fade"
            loop
            spaceBetween={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {slidesRef.map((slide, index) => {
              const imgUrl = slide.sliderImage
                ? getAssetUrl(slide.sliderImage)
                : "";
              const altText = slide.sliderImageAlt || "Carousel Slide";

              if (!imgUrl) return null;

              return (
                <SwiperSlide key={index} className="relative w-full h-full">
                  {/* The parent has a fixed height (400px). 
                      <Image fill> can now fill that area correctly. */}
                  <Image
                    src={imgUrl}
                    alt={altText}
                    fill
                    quality={90}
                    priority
                    className="object-cover object-center"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselTextSection;
