"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const phoneNumberRaw = "+16461234567"; // This will come from the CMS

const Navbar = () => {
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
      {/* 🖥️ Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-fit md:w-full h-[64px] flex items-center justify-center z-[999] 
        ${isVisible ? "md:translate-y-0" : "md:-translate-y-full"} 
        ${
          isAtTop
            ? "bg-transparent md:pt-16"
            : hasScrolledPastThreshold
            ? "md:bg-background-dark md:shadow-md "
            : "md:bg-background-dark md:shadow-md "
        }
        transition-all duration-700 ease-in-out`}
      >
        <div className="w-full flex items-center justify-start md:justify-center lg:justify-between md:py-4 md:px-6 lg:px-8 xl:px-12 box-border">
          {/* 🍔 Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`md:hidden w-[64px] h-[64px] flex items-center justify-center text-foreground-light rounded-full  z-[1001]  ${
              isAtTop
                ? "bg-transparent"
                : hasScrolledPastThreshold
                ? "bg-background-dark shadow-md"
                : "bg-background-dark shadow-md"
            }`}
          >
            <Menu size={28} />
          </button>

          {/* 🌐 Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 xl:gap-8">
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

          {/* ☎️ Right Links (Phone) - Visible only on Desktop */}
          <div className="hidden lg:flex">
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

      {/* 📱 Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* ⚡ Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background-dark z-[999]"
            />

            {/* 📜 Side Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mobile-menu fixed top-0 left-0 w-[280px] h-full bg-background-dark shadow-lg z-[999] flex flex-col items-start px-6 pt-12"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-foreground-light"
              >
                <X size={28} />
              </button>

              {/* 📌 Mobile Links (NO PHONE NUMBER) */}
              <ul className="flex flex-col gap-6 text-lg text-foreground-light">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    HOME
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/residences" onClick={() => setIsMenuOpen(false)}>
                    RESIDENCES
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ScrollLink
                    to="amenities-section"
                    smooth={true}
                    duration={800}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AMENITIES
                  </ScrollLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <ScrollLink
                    to="location-section"
                    smooth={true}
                    duration={800}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    LOCATION
                  </ScrollLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <ScrollLink
                    to="contact-section"
                    smooth={true}
                    duration={800}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT US
                  </ScrollLink>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
