"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { getAssetUrl } from "@/utils/imageUtils";

const ThankYouModal = ({
  isOpen,
  onClose,
  title,
  titleHighlight,
  description,
  image,
}) => {
  const parts = title.split(titleHighlight);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[90%] xl:max-w-[1000px] min-[2048px]:max-w-[1200px] h-auto md:h-[500px] flex flex-col-reverse md:flex-row bg-background-light overflow-hidden !border-none !p-0 z-[99999]">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 md:p-10 max-md:px-6 max-md:pb-6 max-md:pt-1 flex justify-center items-center overflow-y-auto">
          <div className="flex flex-col justify-center items-start">
            <DialogTitle className="display-font text-foreground-dark text-xl md:text-2xl min-[2048px]:text-3xl  mb-4 min-[2048px]:mb-8 leading-tight z-[999]">
              {parts[0]}
              <span className="text-foreground-accent">{titleHighlight}</span>
              {parts[1]}
            </DialogTitle>

            <DialogDescription className="text-foreground-dark text-base md:text-md min-[2048px]:text-lg leading-relaxed mb-6 min-[2048px]:mb-12">
              {description}
            </DialogDescription>
            <DialogClose asChild>
              <button
                onClick={onClose}
                className="--btn-secondary !pt-[8px] !pb-[6px] max-md:text-xs min-[2048px]:text-[21px] "
              >
                Close
              </button>
            </DialogClose>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 h-[250px] md:h-full relative">
          <Image
            src={getAssetUrl(image)}
            alt="Luxury Living"
            width={500}
            height={500}
            className={`w-full h-full object-cover object-center`}
            quality={90}
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouModal;
