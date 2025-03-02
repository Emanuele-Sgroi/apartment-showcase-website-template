"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/utils/imageUtils";

const ImageSlider = ({ desktopImages = [], mobileImages = [], heroTitle }) => {
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

  // Convert the arrays of assets to URLs using getAssetUrl
  const images = isMobile
    ? mobileImages?.map((asset) => getAssetUrl(asset))
    : desktopImages?.map((asset) => getAssetUrl(asset));

  // Image switching logic
  useEffect(() => {
    if (!images.length) return; // do nothing if no images
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsFirstRender(false);
    }, 7500); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [images]);

  // If there are no images, render nothing
  if (!images.length) {
    return null;
  }

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Container must be relative so child images can be absolute */}
      <div className="relative w-full h-full">
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
            className="absolute inset-0 w-full h-full"
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
                alt={`${heroTitle} Slide ${index + 1}`}
                fill
                priority
                className="object-center object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
