"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavbarInquire = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsAtTop(true);
        setIsVisible(true);
        setHasScrolledPastThreshold(false);
      } else if (currentScrollY > 0 && currentScrollY <= 5) {
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

  // Close the menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = (e) => {
        if (!e.target.closest(".mobile-menu")) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-[64px] flex items-center justify-center z-[999] 
        ${isVisible ? "md:translate-y-0" : "md:-translate-y-full"} 
        ${
          isAtTop
            ? "bg-transparent md:pt-16"
            : hasScrolledPastThreshold
            ? "bg-background-dark-nav shadow-md "
            : "bg-background-dark-nav shadow-md "
        }
        transition-all duration-700 ease-in-out`}
      >
        <div className="w-full flex items-center justify-between py-4 max-[320px]:px-4 px-6 lg:px-8 xl:px-12 box-border">
          {/* Desktop Links */}
          <ul className="flex items-center max-[320px]:gap-4 gap-6 xl:gap-8">
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarInquire;
