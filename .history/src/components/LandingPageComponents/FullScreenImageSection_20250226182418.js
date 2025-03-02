"use client";
import React from "react";
import Image from "next/image";

const FullScreenImageSection = ({ image, alt }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={image}
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
