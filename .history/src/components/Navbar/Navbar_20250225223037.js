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
        <ul className={`max-[900px]:hidden flex items-center gap-8`}>
          <li className="relative w-fit">
            <Link href="/" className="cursor-pointer menu-link">
              HOME
            </Link>
          </li>
          <li className="relative w-fit">
            <Link href="/residences" className="cursor-pointer menu-link">
              RESIDENCES
            </Link>
          </li>
          <li className="relative w-fit menu-item">
            <ScrollLink
              to="amenities-section"
              smooth={true}
              duration={800}
              className="cursor-pointer menu-link"
            >
              AMENITIES
            </ScrollLink>
          </li>
          <li className="relative w-fit ">
            <ScrollLink
              to="location-section"
              smooth={true}
              duration={800}
              className="cursor-pointer  menu-link"
            >
              LOCATION
            </ScrollLink>
          </li>
          <li className="relative w-fit ">
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={800}
              className="cursor-pointer  menu-link"
            >
              CONTACT
            </ScrollLink>
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
