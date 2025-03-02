"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

// Reusable Carousel + Text Section
const CarouselTextSection = ({ residencesContent, isTextOnTheLeft = true }) => {
  // If the CMS field is named imagesCarousel1, we extract it here:
  const imageSlides = residencesContent?.imagesCarousel1 ?? [];

  // If no images, nothing to render
  if (!imageSlides.length) return null;

  return (
    <section className="relative w-full">
      {/* We use flex-col-reverse on mobile so the text is below the carousel.
          For larger screens, we check isTextOnTheLeft to swap order. */}
      <div
        className={`flex flex-col-reverse md:${
          isTextOnTheLeft ? "flex-row" : "flex-row-reverse"
        } items-start justify-center gap-8 md:gap-16`}
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
            {residencesContent?.secondSectionText}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: isTextOnTheLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            loop
            autoplay={{
              delay: 4000, // 4s
              disableOnInteraction: false,
            }}
          >
            {imageSlides.map((slide, index) => {
              // Each slide is a Contentful reference.
              // Adjust field names if they're different in your content model.
              const imgUrl = slide.fields?.sliderImage
                ? getAssetUrl(slide.fields.sliderImage)
                : "";
              const altText = slide.fields?.sliderImageAlt || "Carousel Image";

              if (!imgUrl) return null;

              return (
                <SwiperSlide key={index} className="relative w-full h-full">
                  <div className="w-full h-full">
                    <Image
                      src={imgUrl}
                      alt={altText}
                      fill
                      quality={90}
                      priority
                      className="object-cover object-center"
                    />
                  </div>
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
