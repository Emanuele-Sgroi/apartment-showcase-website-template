"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

// Reusable Carousel + Text Section
const CarouselTextSection = ({ text, slidesRef, isTextOnTheLeft = true }) => {
  // If no images, nothing to render
  if (!slidesRef || !text) return null;

  return (
    <section className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[200px] px-8 md:px-10 xl:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]">
      <div
        className={`w-full flex ${
          isTextOnTheLeft ? "flex-row" : "flex-row-reverse"
        } items-start justify-center gap-12 md:gap-8 lg:gap-16 xl:gap-32`}
      >
        {/* Text */}
        <motion.div
          className="w-full md:w-[30%] flex justify-end"
          initial={{ opacity: 0, x: isTextOnTheLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className={`w-full md:max-w-[375px]  text-foreground-dark text-base sm:text-md min-[2048px]:text-[24px] text-left font-medium ${
              isTextOnTheLeft ? "md:text-right" : "md:text-left"
            }`}
          >
            {text}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className={`w-full md:w-[70%] flex items-start ${
            isTextOnTheLeft ? "justify-end" : "justify-start"
          }`}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {/* Swiper Carousel */}
          <div className="relative w-full flex items-center justify-center ">
            {/* Swiper */}
            <Swiper
              modules={[EffectFade, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              effect="fade"
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
            >
              {slidesRef.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full flex items-center justify-center flex-col"
                >
                  <div
                    className={` relative w-full lg:w-[90%] min-[2048px]:w-[80%] h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[913px] min-[2048px]:h-[1050px]`}
                  >
                    {/* Background Image */}
                    <img
                      src={getAssetUrl(slide.sliderImage)}
                      alt={slide.sliderImageAlt}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselTextSection;
