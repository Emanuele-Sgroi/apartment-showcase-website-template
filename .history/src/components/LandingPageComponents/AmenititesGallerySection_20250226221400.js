"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

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

const AmenititesGallerySection = () => {
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

      // Track real index (works with looping)
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });

      // Stop autoplay when clicking dots, then resume after 5s
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
    <section className="w-full bg-background-dark pt-0 pb-[56px] md:pb-[80px] 2xl:pb-[120px] min-[2048px]:pb-[280px]">
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
          {/* Custom Navigation Arrows */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-[90%] min-[2048px]:w-[80%] h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[913px] inset-0 flex justify-between items-center px-6 sm:px-12 z-20 pointer-events-none">
            <button className="custom-swiper-prev w-8 sm:w-12 lg:w-20 h-8 sm:h-12 lg:h-20 bg-background-accent/50 hover:bg-background-accent p-1 sm:p-3 rounded-full text-foreground-primary flex items-center justify-center z-20 pointer-events-auto transition-all ease-in-out duration-300">
              <ChevronLeft size={44} className="text-foreground-light" />
            </button>
            <button className="custom-swiper-next  w-8 sm:w-12 lg:w-20 h-8 sm:h-12 lg:h-20 bg-background-accent/50 hover:bg-background-accent p-1 sm:p-3 rounded-full text-foreground-primary flex items-center justify-center z-20 pointer-events-auto transition-all ease-in-out duration-300">
              <ChevronRight size={44} className="text-foreground-light" />
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
                  className={`relative w-full lg:w-[90%] min-[2048px]:w-[80%] h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[913px] min-[2048px]:h-[1050px]`}
                >
                  {/* Background Image */}
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="relative w-full lg:w-[90%]  min-[2048px]:w-[80%] flex items-center justify-between py-2 px-6 md:px-0">
                  {/* Amenity Name */}
                  <p
                    className={`text-left text-xs sm:text-base md:text-md text-foreground-light ${
                      activeIndex === index ? "visible" : "invisible"
                    }`}
                  >
                    {amenity.name}
                  </p>
                  {/* ✅ Custom Dots Pagination */}
                  <div
                    className={` flex gap-2 md:gap-4 z-20 ${
                      activeIndex === index ? "visible" : "invisible"
                    }`}
                  >
                    {amenities.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 border border-background-tertiary rounded-full transition-all duration-300 ${
                          activeIndex === index ? "" : ""
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
    </section>
  );
};

export default AmenititesGallerySection;

const AmenitiesGallery = () => {
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
