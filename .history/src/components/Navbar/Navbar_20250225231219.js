"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";

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
          ? "bg-transparent pt-16"
          : hasScrolledPastThreshold
          ? "bg-background-dark shadow-md "
          : "bg-background-dark shadow-md "
      }
      transition-all duration-700 ease-in-out`}
    >
      <div className="w-full flex items-center justify-between py-4 px-6 lg:px-12 box-border">
        {/* Left links */}
        <ul className="flex items-center gap-6 xl:gap-8">
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

        {/* Right links */}
        <div>
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
