"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imagesDesktop = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];
const imagesMobile = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const images = isMobile ? imagesMobile : imagesDesktop;

  // Image switching logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsFirstRender(false);
    }, 7500); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: isFirstRender && index === 0 ? 1 : 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={
            isFirstRender && index === 0
              ? {}
              : { duration: 0.5, ease: "easeInOut" }
          }
          className="relative w-full h-full"
          style={{ zIndex: index === currentImage ? 1 : 0 }}
        >
          <motion.div
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className="object-center object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageSlider;
