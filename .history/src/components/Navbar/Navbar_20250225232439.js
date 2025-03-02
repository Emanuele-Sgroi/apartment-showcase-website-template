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

const phoneNumberRaw = "+16461234567"; // This will come from the CMS

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setIsAtTop(true);
        setIsVisible(true);
        setHasScrolledPastThreshold(false);
      } else if (currentScrollY > 100 && currentScrollY <= 550) {
        setIsAtTop(false);
        setIsVisible(true);
        setHasScrolledPastThreshold(false);
      } else {
        setIsAtTop(false);
        setHasScrolledPastThreshold(true);
        setIsVisible(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[64px] flex items-center justify-center z-[999]
      ${isVisible ? "translate-y-0" : "-translate-y-full"} 
      ${
        isAtTop
          ? "bg-transparent md:pt-16"
          : hasScrolledPastThreshold
          ? "bg-background-dark shadow-md "
          : "bg-background-dark shadow-md "
      }
      transition-all duration-700 ease-in-out`}
    >
      <div className="w-full flex items-center justify-start md:justify-center lg:justify-between py-4 px-6 lg:px-8 xl:px-12 box-border">
        {/* Left links */}
        <ul className="max-md:hidden flex items-center gap-6 xl:gap-8">
          <li>
            <Link href="/" className="cursor-pointer menu-link">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/residences" className="cursor-pointer menu-link">
              RESIDENCES
            </Link>
          </li>
          <li>
            <ScrollLink
              to="amenities-section"
              smooth={true}
              duration={800}
              className="cursor-pointer menu-link"
            >
              AMENITIES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="location-section"
              smooth={true}
              duration={800}
              className="cursor-pointer menu-link"
            >
              LOCATION
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="availability-section"
              smooth={true}
              duration={800}
              className="cursor-pointer menu-link"
            >
              AVAILABILITY
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={800}
              className="cursor-pointer menu-link"
            >
              CONTACT US
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger className="min-md:hidden">
            <Menu size={28} className="text-foreground-light" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="min-md:hidden z-[9999] bg-background-tertiary border-none"
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

        {/* Right links */}
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={`tel:+${phoneNumberRaw}`}
                className="cursor-pointer menu-link"
              >
                {formatPhoneNumber(phoneNumberRaw)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
