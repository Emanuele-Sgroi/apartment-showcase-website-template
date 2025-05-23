"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { getAssetUrl } from "@/utils/imageUtils";

// Reusable Carousel + Text Section
const CarouselTextSection = ({ text, slidesRef, isTextOnTheLeft = true }) => {
  // If no images, nothing to render
  if (!slidesRef || !text) return null;

  return (
    <section className="w-full bg-background-light pb-[56px] md:pb-[80px] 2xl:pb-[120px] min-[2048px]:pb-[200px]">
      <div
        className={`w-full flex flex-col-reverse justify-center ${
          isTextOnTheLeft ? "md:flex-row " : "md:flex-row-reverse"
        } items-end  gap-12 md:gap-8 lg:gap-16 xl:gap-16`}
      >
        {/* Text */}
        <motion.div
          className={`w-full md:w-[45%] xl:w-[30%] flex items-center md:items-end justify-center px-8 md:px-0 ${
            isTextOnTheLeft
              ? "md:justify-end md:pl-10 xl:pl-[64px] 2xl:pl-[120px] min-[2048px]:pl-[200px]"
              : "md:justify-start md:pb-20 md:pr-10 xl:pr-[64px] 2xl:pr-[120px] min-[2048px]:pr-[200px]"
          }`}
          initial={{ opacity: 0, x: isTextOnTheLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className={`w-full max-w-[375px]  text-foreground-dark text-base sm:text-md min-[2048px]:text-[24px] text-center font-medium ${
              isTextOnTheLeft ? "md:text-right" : "md:text-left"
            }`}
          >
            {text}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className={`w-full md:w-[55%] xl:w-[70%] max-w-[1020px] xl:max-w-full   flex items-start ${
            isTextOnTheLeft ? "justify-end" : "justify-start"
          }`}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {/* Swiper */}
          <Swiper
            modules={[EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slidesRef.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="w-full flex items-center justify-center flex-col"
              >
                <div
                  className={`relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[913px] min-[2048px]:h-[1050px]`}
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
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselTextSection;
