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
    <div className="w-full ">
      <motion.div
        id="amenities-gallery"
        className="relative w-full  flex items-center justify-center"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        {/* Swiper Carousel */}
        <div className="relative w-full flex items-center justify-center mx-auto">
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
  );
};

export default CarouselTextSection;
