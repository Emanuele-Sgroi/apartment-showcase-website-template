"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import styles from "@/styles/homeAmenities.module.scss";

const amenities = [
  {
    name: "Skyline Lounge",
    image: "/images/slider1.jpg",
  },
  {
    name: "Infinity Pool",
    image: "/images/slider2.jpg",
  },
  {
    name: "Luxury Spa",
    image: "/images/slider3.jpg",
  },
  {
    name: "Private Gym",
    image: "/images/slider2.jpg",
  },
];

const AmenitiesSection = () => {
  let title = "Unmatched\nBuilding\nAmenities";

  const words = title.split("\n"); // Split the CMS title into words

  return (
    <section id="amenities-section">
      {/* Top part - Text Section */}
      <div
        className={`${styles.responsive_amenities_section_container} relative w-full bg-background-secondary pt-20 sm:pt-32 lg:pt-40 xl:pt-52 2xl:pt-56 pb-16`}
      >
        {/* Display text animation */}
        <div
          className={`${styles.responsive_title_amenities_section_container} w-full flex justify-end pr-6 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24 2xl:pr-28 3xl:pr-32 4xl:pr-36 relative z-30`}
        >
          <h2
            style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "geometricPrecision",
              transform: "translateZ(0)",
            }}
            className={`flex flex-col text-right font-display
            ${styles.responsive_title_amenities_section}
            font-bold tracking-tight text-shadow-md z-30
            text-balance break-words leading-none`}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: i * 0.2,
                }}
                style={{
                  WebkitTextStroke:
                    i % 2 === 0
                      ? "2px var(--background-primary)"
                      : "2px var(--background-tertiary)",
                }}
                className={`${
                  i % 2 === 0
                    ? "text-foreground-primary"
                    : "text-foreground-secondary"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>

      {/* Carousel gallery behind the text */}

      <AmenitiesGallery />

      {/* Bottom part */}
      <BottomPart />
    </section>
  );
};

export default AmenitiesSection;

const AmenitiesGallery = () => {
  const swiperRef = useRef(null); // Reference to Swiper instance
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      // Custom navigation event listeners
      const prevBtn = document.querySelector(".custom-swiper-prev");
      const nextBtn = document.querySelector(".custom-swiper-next");

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
          swiper.slidePrev();
          swiper.autoplay.stop(); // Stop autoplay on interaction
          setTimeout(() => swiper.autoplay.start(), 5000); // Resume autoplay after 5s
        });

        nextBtn.addEventListener("click", () => {
          swiper.slideNext();
          swiper.autoplay.stop(); // Stop autoplay on interaction
          setTimeout(() => swiper.autoplay.start(), 5000); // Resume autoplay after 5s
        });
      }

      // ✅ Track real index (works with looping)
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });

      // ✅ Stop autoplay when clicking dots, then resume after 5s
      document
        .querySelectorAll(".custom-pagination-dot")
        .forEach((dot, index) => {
          dot.addEventListener("click", () => {
            swiper.slideToLoop(index);
            swiper.autoplay.stop();
            setTimeout(() => swiper.autoplay.start(), 5000);
          });
        });
    }
  }, []);

  return (
    <motion.div
      id="amenities-gallery"
      className="relative z-10 w-full  flex items-center justify-center px-0 md:px-4 lg:px-8 xl:px-12 pb-12"
      style={{ marginTop: "clamp(-80px, -20vw, -40px)" }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    >
      {/* Swiper Carousel */}
      <div className="relative w-full flex items-center justify-center mx-auto">
        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1758px] h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[913px] inset-0 flex justify-between items-center px-6 sm:px-12 z-20 pointer-events-none">
          <button className="custom-swiper-prev w-8 sm:w-12 lg:w-20 h-8 sm:h-12 lg:h-20 bg-background-secondary-70 hover:bg-background-secondary p-1 sm:p-3 rounded-full text-foreground-primary flex items-center justify-center z-20 pointer-events-auto transition-all ease-in-out duration-300">
            <ChevronLeft size={44} />
          </button>
          <button className="custom-swiper-next  w-8 sm:w-12 lg:w-20 h-8 sm:h-12 lg:h-20 bg-background-secondary-70 hover:bg-background-secondary p-1 sm:p-3 rounded-full text-foreground-primary flex items-center justify-center z-20 pointer-events-auto transition-all ease-in-out duration-300">
            <ChevronRight size={44} />
          </button>
        </div>
        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectFade, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {amenities.map((amenity, index) => (
            <SwiperSlide
              key={index}
              className="w-full flex items-center justify-center flex-col"
            >
              <div
                className={`${styles.responsive_carousel_container} relative w-full max-w-[1758px] h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[913px]`}
              >
                {/* Background Image */}
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="relative w-full max-w-[1758px] flex items-center justify-between py-2 px-6 md:px-0">
                {/* Amenity Name */}
                <p
                  className={`text-center text-xs sm:text-sm md:text-md xl:text-lg text-foreground-secondary ${
                    activeIndex === index ? "visible" : "invisible"
                  }`}
                >
                  {amenity.name}
                </p>
                {/* ✅ Custom Dots Pagination */}
                <div
                  className={`${
                    styles.carousel_dots_container
                  } flex gap-2 md:gap-4 z-20 ${
                    activeIndex === index ? "visible" : "invisible"
                  }`}
                >
                  {amenities.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 border border-background-tertiary rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? styles.carousel_dots_active
                          : styles.carousel_dots_not_active
                      }`}
                      onClick={() =>
                        swiperRef.current.swiper.slideToLoop(index)
                      }
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

const BottomPart = () => {
  let title = "Enhance\nYour\nLife";
  const words = title.split("\n"); // Split the CMS title into words

  return (
    <div className="w-full bg-background-primary flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:items-end pt-6 md:pt-12 lg:pt-20 xl:pt-28 pb-12 sm:pb-20 lg:pb-32 px-6 sm:px-12 2xl:px-44 3xl:px-64">
      {/* Left Text Animation */}
      <div className="relative w-[40%]">
        <div className="w-full ">
          <h2
            style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "geometricPrecision",
              transform: "translateZ(0)",
            }}
            className="flex flex-col text-left font-display text-6xl sm:text-8xl md:text-[7rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[35px] sm:leading-[120px] lg:leading-[198px] text-shadow-md z-30"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: i * 0.2,
                }}
                style={{
                  WebkitTextStroke:
                    i % 2 === 0
                      ? "2px var(--background-tertiary)"
                      : "2px var(--background-secondary)",
                }}
                className={`${
                  i % 2 === 0
                    ? "text-foreground-secondary"
                    : "text-foreground-tertiary"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>

      {/* Right Paragraph Animation */}
      <motion.div
        className="w-full lg:w-[60%] pb-10 flex justify-end lg:justify-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-foreground-secondary text-xs sm:text-md lg:text-lg leading-relaxed max-w-[675px] lg:max-w-full">
          Relax in the heated indoor pool or hot tub, stay active in the fitness
          center with a yoga room, or unwind in the private lounge. Enjoy the
          sauna, massage rooms, screening room, and children’s playroom. With
          full-time concierge, on-site valet parking, and resident storage,
          every detail is crafted for your comfort and convenience.
        </p>
      </motion.div>
    </div>
  );
};
