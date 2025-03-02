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
      <DialogContent className="w-full max-w-[1000px] min-h-[500px] flex  bg-background-light overflow-hidden !border-none !p-0 !m-4 z-[99999]">
        {/* Left Section (Text) */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-center overflow-y-auto">
          <DialogTitle className="display-font text-foreground-dark text-2xl font-bold mb-4">
            Thank You for Your Interest
          </DialogTitle>
          <DialogDescription className="text-foreground-dark text-md md:text-lg leading-relaxed mb-6">
            Our team will get in touch with you shortly. In the meantime, feel
            free to explore more about our luxury residences.
          </DialogDescription>
          <DialogClose asChild>
            <button
              onClick={onClose}
              className="--btn-primary px-6 py-3 text-lg font-medium shadow-md"
            >
              Close
            </button>
          </DialogClose>
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

        {/* Close Icon
        <DialogClose>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-foreground-dark hover:text-foreground-accent transition"
          >
            <X size={24} />
          </button>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouModal;
