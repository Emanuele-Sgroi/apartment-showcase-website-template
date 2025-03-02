"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const ThankYouModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full flex flex-col md:flex-row rounded-lg shadow-xl bg-background-light overflow-hidden z-[99999]">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start">
          <DialogTitle className="text-foreground-dark text-2xl md:text-3xl font-bold mb-4">
            Thank You for Your Interest
          </DialogTitle>
          <DialogDescription className="text-foreground-dark text-md md:text-lg leading-relaxed mb-6">
            Our team will get in touch with you shortly. In the meantime, feel
            free to explore more about our luxury residences.
          </DialogDescription>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/images/slider1.jpg"
            alt="Luxury Living"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Close Icon */}
        <DialogClose asChild>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-foreground-dark hover:text-foreground-accent transition"
          >
            <X size={24} />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouModal;
