"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ globalsContent }) => {
  const pathname = usePathname(); // Get current route
  const isHomepage = pathname === "/"; // Check if on homepage
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
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-fit md:w-full h-[64px] flex items-center justify-center z-[999] 
        ${isVisible ? "md:translate-y-0" : "md:-translate-y-full"} 
        ${
          isAtTop
            ? "bg-transparent md:pt-16"
            : hasScrolledPastThreshold
            ? "md:bg-background-dark-nav md:shadow-md "
            : "md:bg-background-dark-nav md:shadow-md "
        }
        transition-all duration-700 ease-in-out`}
      >
        <div className="w-full flex items-center justify-start md:justify-center lg:justify-between max-md:pl-[9px] max-md:pt-4 md:py-4 md:px-6 lg:px-8 xl:px-12 box-border">
          {/* 🍔 Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`md:hidden w-[64px] h-[64px] flex items-center justify-center text-foreground-light rounded-full  z-[1001]  ${
              isAtTop
                ? "bg-transparent"
                : hasScrolledPastThreshold
                ? "bg-background-dark-nav shadow-md"
                : "bg-background-dark-nav shadow-md"
            }`}
          >
            <Menu size={28} />
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 xl:gap-8">
            {!isHomepage && (
              <li>
                <Link href="/" className="cursor-pointer menu-link">
                  HOME
                </Link>
              </li>
            )}

            <li>
              <Link href="/residences" className="cursor-pointer menu-link">
                RESIDENCES
              </Link>
            </li>
            <li>
              <ScrollLink
                to="amenities-section"
                smooth={true}
                duration={1000}
                className="cursor-pointer menu-link"
              >
                AMENITIES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="location-section"
                smooth={true}
                duration={1000}
                className="cursor-pointer menu-link"
              >
                LOCATION
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="availability-section"
                smooth={true}
                duration={1200}
                className="cursor-pointer menu-link"
              >
                AVAILABILITY
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-section"
                smooth={true}
                duration={1600}
                className="cursor-pointer menu-link"
              >
                CONTACT US
              </ScrollLink>
            </li>
          </ul>

          {/* Right Links (Phone) - Visible only on Desktop */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href={`tel:+${globalsContent.phoneNumber}`}
                  className="cursor-pointer menu-link"
                >
                  {formatPhoneNumber(globalsContent.phoneNumber)}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background-dark z-[999]"
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mobile-menu fixed top-0 left-0 w-full max-w-[280px] h-full bg-background-dark-nav shadow-lg z-[999] flex flex-col items-start px-6 pt-24"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-foreground-light"
              >
                <X size={28} />
              </button>

              {/*  Mobile Links (NO PHONE NUMBER) */}
              <ul className="flex flex-col gap-12 text-md text-foreground-light">
                {[
                  isHomepage ? null : { href: "/", label: "HOME" },
                  { href: "/residences", label: "RESIDENCES" },
                  {
                    href: "amenities-section",
                    label: "AMENITIES",
                    scroll: true,
                  },
                  { href: "location-section", label: "LOCATION", scroll: true },
                  {
                    href: "availability-section",
                    label: "AVAILABILITY",
                    scroll: true,
                  },
                  {
                    href: "contact-section",
                    label: "CONTACT US",
                    scroll: true,
                  },
                ]
                  .filter(Boolean)
                  .map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -80, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.25 * index,
                      }}
                    >
                      {item.scroll ? (
                        <ScrollLink
                          to={item.href}
                          smooth={true}
                          duration={1300}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </ScrollLink>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
