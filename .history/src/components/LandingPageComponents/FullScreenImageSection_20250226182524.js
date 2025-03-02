"use client";
import React from "react";
import Image from "next/image";

const FullScreenImageSection = ({ imageDesktop, imageMobile, alt }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={imageDesktop}
          alt={alt}
          width={500}
          height={500}
          quality={100}
          priority
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default FullScreenImageSection;
