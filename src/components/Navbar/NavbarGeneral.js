"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarGeneral = ({ globalsContent }) => {
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
        className={`fixed top-0 left-0 w-full h-[64px] flex items-center justify-center z-[999] 
        ${isVisible ? "md:translate-y-0" : "md:-translate-y-full"} 
        ${
          isAtTop
            ? "bg-transparent "
            : hasScrolledPastThreshold
            ? "bg-background-dark-nav shadow-md "
            : "bg-background-dark-nav shadow-md "
        }
        transition-all duration-700 ease-in-out`}
      >
        <div className="w-full flex items-center justify-between py-4 max-[320px]:px-4 px-6 lg:px-8 xl:px-12 box-border">
          {/*  Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`min-[265px]:hidden w-[64px] h-[64px] flex items-center justify-center text-foreground-light rounded-full  z-[1001]  ${
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
          <ul className="max-[264px]:hidden flex items-center max-[320px]:gap-4 gap-6 xl:gap-8">
            <li>
              <Link href="/" className="cursor-pointer menu-link">
                HOME
              </Link>
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

          {/* Right Links - Visible only on Desktop */}
          <div className="flex">
            <ul className="flex items-center gap-6">
              <li className="max-[450px]:hidden">
                <a
                  href={`tel:+${globalsContent.phoneNumber}`}
                  className="cursor-pointer menu-link"
                >
                  {formatPhoneNumber(globalsContent.phoneNumber)}
                </a>
              </li>
              <li className="max-[550px]:hidden">
                <Link
                  href={`/inquire`}
                  className="--btn-tertiary !text-xs !pt-2 !pb-1 !px-2"
                >
                  CHECK AVAILABILITY
                </Link>
              </li>
              <li className="min-[551px]:hidden">
                <Link
                  href={`/inquire`}
                  className="--btn-tertiary max-[320px]:!text-xxs !text-xs !pt-2 !pb-1 !px-2"
                >
                  INQUIRE
                </Link>
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
                  { href: "/", label: "HOME" },
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
                          duration={800}
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

export default NavbarGeneral;
