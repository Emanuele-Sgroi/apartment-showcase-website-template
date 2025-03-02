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
  const title = "Thank You for Your Interest";
  const highlightWord = "Thank You";
  const parts = title.split(highlightWord);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[1000px] min-h-[500px] flex  bg-background-light overflow-hidden !border-none !p-0 !m-4 z-[99999]">
        {/* Left Section (Text) */}
        <div className="w-1/2 p-10 flex justify-center items-center overflow-y-auto">
          <div className="flex flex-col justify-center items-start">
            <DialogTitle className="display-font text-foreground-dark text-2xl min-[2048px]:text-3xl font-bold mb-4 leading-tight">
              {parts[0]}
              <span className="text-foreground-accent">{highlightWord}</span>
              {parts[1]}
            </DialogTitle>

            <DialogDescription className="text-foreground-dark text-md leading-relaxed mb-6">
              Our team will get in touch with you shortly. In the meantime, feel
              free to explore more about our luxury residences.
            </DialogDescription>
            <DialogClose asChild>
              <button
                onClick={onClose}
                className="--btn-secondary !pt-[8px] !pb-[6px] min-[2048px]:text-[21px]"
              >
                Close
              </button>
            </DialogClose>
          </div>
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
