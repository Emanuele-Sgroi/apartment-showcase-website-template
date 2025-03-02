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
      <DialogContent className="w-full max-w-[90%] xl:max-w-[1000px] min-[2048px]:max-w-[1200px] h-[500px] flex flex-col-reverse md:flex-row bg-background-light overflow-hidden !border-none !p-0 z-[99999]">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 p-10 flex justify-center items-center overflow-y-auto">
          <div className="flex flex-col justify-center items-start">
            <DialogTitle className="display-font text-foreground-dark text-2xl min-[2048px]:text-3xl font-bold mb-4 min-[2048px]:mb-8 leading-tight">
              {parts[0]}
              <span className="text-foreground-accent">{highlightWord}</span>
              {parts[1]}
            </DialogTitle>

            <DialogDescription className="text-foreground-dark text-md min-[2048px]:text-lg leading-relaxed mb-6 min-[2048px]:mb-12">
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
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative ">
          <Image
            src="/images/slider1.jpg"
            alt="Luxury Living"
            width={500}
            height={500}
            className="w-full h-full object-cover object-center"
            quality={100}
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouModal;
