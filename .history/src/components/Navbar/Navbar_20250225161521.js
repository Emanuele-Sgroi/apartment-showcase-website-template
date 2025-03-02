"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const phoneNumberRaw = "+16461234567"; // this will come from the CMS

const Navbar = () => {
  const [userScrolled, setUserScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setUserScrolled(window.scrollY >= 90);
    };

    //  Check scroll position immediately when the page loads
    checkScroll();

    //  Listen for scroll events
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav className={`font-tertiary fixed top-0 left-0 w-full h-[64px] z-[999]`}>
      <div
        className={`relative flex items-center justify-between z-20 py-4 px-6 lg:px-12 box-border
        transform 
        ${userScrolled ? "translate-y-0" : "translate-y-4"}
         transition-all ease-in-out 
        duration-500`}
      >
        {/* Left links */}
        <ul
          className={`max-[900px]:hidden  flex items-center gap-6 transition-all ease-in-out 
        duration-500`}
        >
          <li className="relative w-fit group/item">
            <Link href="/" className="cursor-pointer text-xs ">
              HOME
            </Link>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 group-hover/item:opacity-100 opacity-0 w-[5px] h-[5px] rounded-full bg-background-primary transition-all duration-300 ease-in-out" />
          </li>
          <li className="relative w-fit group/item">
            <Link
              href="/residences"
              className="cursor-pointer text-xs hover:text-red-400"
            >
              RESIDENCES
            </Link>
            <div className="absolute bottom-1 left-0 group-hover/item:w-full w-0 h-px bg-background-primary transition-all duration-300 ease-in-out" />
          </li>
          <li className="relative w-fit group/item">
            <ScrollLink
              to="amenities-section"
              smooth={true}
              duration={800}
              className="cursor-pointer text-xs"
            >
              AMENITIES
            </ScrollLink>
            <div className="absolute bottom-1 left-0 group-hover/item:w-full w-0 h-px bg-background-primary transition-all duration-300 ease-in-out" />
          </li>
          <li className="relative w-fit group/item">
            <ScrollLink
              to="location-section"
              smooth={true}
              duration={800}
              className="cursor-pointer text-xs hover:font-bold"
            >
              LOCATION
            </ScrollLink>
            <div className="absolute bottom-1 left-0 group-hover/item:w-full w-0 h-px bg-background-primary transition-all duration-300 ease-in-out" />
          </li>
          <li className="relative w-fit group/item">
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={800}
              className="cursor-pointer text-xs"
            >
              CONTACT
            </ScrollLink>
            <div className="absolute bottom-1 left-0 group-hover/item:w-full w-0 h-px bg-background-primary transition-all duration-300 ease-in-out" />
          </li>
        </ul>
        <Sheet>
          <SheetTrigger className="min-[901px]:hidden">
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="min-[901px]:hidden z-[9999] bg-background-tertiary border-none"
          >
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* right links */}
        <div>
          <ul
            className={`saol-display flex items-center gap-6  transition-all ease-in-out 
        duration-500`}
          >
            <li className="relative w-fit flex items-center gap-2 group/item">
              <a
                href={`tel:+${phoneNumberRaw}`}
                className="font-tertiary cursor-pointer font-medium text-xs"
              >
                {formatPhoneNumber(phoneNumberRaw)}
              </a>
              <div className="absolute bottom-[2px] left-0 group-hover/item:w-full w-0 h-px bg-white transition-all duration-300 ease-in-out" />
            </li>
            <li>
              <Link href="/inquiry" className="--btn-primary font-tertiary">
                INQUIRE
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Background */}
      <div
        className={`absolute ${
          userScrolled ? "top-0" : "-top-24"
        } left-0 w-full h-full bg-background-tertiary
        shadow-md 
        transition-all ease-in-out 
        duration-500`}
      />
    </nav>
  );
};

export default Navbar;
