"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  let phoneNumber = "+16461234567";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="max-md:hidden w-full bg-background-dark">
        <div className="w-full pt-[56px] md:pt-[80px] 2xl:pt-[120px] pb-12 md:pb-16 2xl:pb-20 px-8 md:px-12 xl:px-24 min-[2048px]:px-[170px] text-foreground-light">
          <div className="w-full flex items-start justify-center gap-24 xl:gap-28 2xl:gap-36">
            {/* Left part */}
            <div className="flex flex-col items-start justify-start gap-4">
              <Link
                href="https://maps.app.goo.gl/JmFPfdqXxEwH7GZc9"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={120}
                  height={120}
                  quality={100}
                  priority
                  className="w-[180px] h-auto"
                />
              </Link>
              <Link
                href="https://maps.app.goo.gl/JmFPfdqXxEwH7GZc9"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logo2.png"
                  alt="logo"
                  width={120}
                  height={120}
                  quality={100}
                  priority
                  className="w-[180px] h-auto"
                />
              </Link>
              <div className="flex flex-col items-start justify-start gap-2 mt-6">
                <Link
                  href="/fair-housing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-base min-[2048px]:text-lg uppercase text-left"
                >
                  FAIR HOUSING
                </Link>
                <Link
                  href="/standardized-procedure"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-base min-[2048px]:text-lg uppercase text-left"
                >
                  STANDARDIZED PROCEDURE
                </Link>
                <Link
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-base min-[2048px]:text-lg uppercase text-left"
                >
                  TERMS & CONDITIONS
                </Link>
              </div>
            </div>
            {/* Right part */}
            <div className="flex-1 flex flex-col items-start justify-start gap-12 xl:gap-24 ">
              {/* Contacts */}
              <div className="w-[90%] xl:w-[80%] 2xl:w-[60%] flex items-center justify-between gap-6 flex-wrap">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-full border-2 border-background-light p-2">
                    <Mail size={30} />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-0">
                    <h5 className="text-md min-[2048px]:text-lg text-foreground-accent font-semibold text-left uppercase">
                      Email
                    </h5>
                    <Link
                      href="mailto:example@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-md font-semibold tracking-wider uppercase text-left"
                    >
                      example@gmail.com
                    </Link>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-full border-2 border-background-light p-2">
                    <Phone size={30} />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-0">
                    <h5 className="text-md min-[2048px]:text-lg text-foreground-accent font-semibold text-left uppercase">
                      Phone number
                    </h5>
                    <Link
                      href={`tel:${phoneNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-md font-semibold tracking-wider uppercase text-left"
                    >
                      {formatPhoneNumber(phoneNumber)}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base min-[2048px]:text-lg text-foreground-light">
                  <b>Disclaimer:</b> This website is independently owned and
                  operated by Gene Maltsev, a Licensed Real Estate Agent in New
                  York City. This website is for informational purposes only and
                  does not constitute an offer to sell or a solicitation of an
                  offer to buy any property. This website is not affiliated with
                  the condominium or any other exclusive listings by other
                  brokers at the property. While every effort is made to ensure
                  the accuracy of the information on this website, it is subject
                  to change without notice, and no warranty, express or implied,
                  is made as to its completeness or accuracy. Verify all
                  information independently. Images on this website are used for
                  illustrative purposes only and are obtained from publicly
                  available real estate listings. All images are the copyright
                  of their respective owners. Gene Maltsev makes no claim of
                  ownership to these images and uses them solely to provide
                  visual context for the building information. Any use of these
                  images without the express permission of the copyright holder
                  is strictly prohibited. If you are a copyright holder and
                  object to the use of an image, please contact us for removal.
                  For more information on Gene Maltsev, visit genesteam.com.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-background-light text-center py-1 px-2">
          <p className="text-foreground-dark text-xs min-[2048px]:text-base mt-1">
            © {currentYear} One Northside Piers. All Rights Reserved.
          </p>
        </div>
      </footer>
      <footer className="min-md:hidden w-full bg-background-dark">
        <div className="w-full pt-[56px] pb-12  px-8 text-foreground-light">
          <div className="w-full flex flex-col items-center justify-start gap-12">
            {/* top part */}
            <div className="w-full flex items-center justify-around gap-8 flex-wrap">
              <Link
                href="https://maps.app.goo.gl/JmFPfdqXxEwH7GZc9"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={120}
                  height={120}
                  quality={100}
                  priority
                  className="w-[180px] h-auto"
                />
              </Link>
              <Link
                href="https://maps.app.goo.gl/JmFPfdqXxEwH7GZc9"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logo2.png"
                  alt="logo"
                  width={120}
                  height={120}
                  quality={100}
                  priority
                  className="w-[180px] h-auto"
                />
              </Link>
              {/* <div className="flex flex-col items-start justify-start gap-2 mt-6">
                <Link
                  href="/fair-housing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-base min-[2048px]:text-lg uppercase text-left"
                >
                  FAIR HOUSING
                </Link>
                <Link
                  href="/standardized-procedure"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-base min-[2048px]:text-lg uppercase text-left"
                >
                  STANDARDIZED PROCEDURE
                </Link>
                <Link
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-base min-[2048px]:text-lg uppercase text-left"
                >
                  TERMS & CONDITIONS
                </Link>
              </div> */}
            </div>
            {/* Right part */}
            <div className="flex-1 flex flex-col items-start justify-start gap-12 xl:gap-24 ">
              {/* Contacts */}
              <div className="w-full flex flex-col items-center justify-center gap-6 flex-wrap">
                {/* Email */}
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center justify-center rounded-full border-2 border-background-light p-2">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0">
                    <h5 className="text-md min-[2048px]:text-lg text-foreground-accent font-semibold text-left uppercase">
                      Email
                    </h5>
                    <Link
                      href="mailto:example@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-md font-semibold tracking-wider uppercase text-left"
                    >
                      example@gmail.com
                    </Link>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-full border-2 border-background-light p-2">
                    <Phone size={30} />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-0">
                    <h5 className="text-md min-[2048px]:text-lg text-foreground-accent font-semibold text-left uppercase">
                      Phone number
                    </h5>
                    <Link
                      href={`tel:${phoneNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-md font-semibold tracking-wider uppercase text-left"
                    >
                      {formatPhoneNumber(phoneNumber)}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base min-[2048px]:text-lg text-foreground-light">
                  <b>Disclaimer:</b> This website is independently owned and
                  operated by Gene Maltsev, a Licensed Real Estate Agent in New
                  York City. This website is for informational purposes only and
                  does not constitute an offer to sell or a solicitation of an
                  offer to buy any property. This website is not affiliated with
                  the condominium or any other exclusive listings by other
                  brokers at the property. While every effort is made to ensure
                  the accuracy of the information on this website, it is subject
                  to change without notice, and no warranty, express or implied,
                  is made as to its completeness or accuracy. Verify all
                  information independently. Images on this website are used for
                  illustrative purposes only and are obtained from publicly
                  available real estate listings. All images are the copyright
                  of their respective owners. Gene Maltsev makes no claim of
                  ownership to these images and uses them solely to provide
                  visual context for the building information. Any use of these
                  images without the express permission of the copyright holder
                  is strictly prohibited. If you are a copyright holder and
                  object to the use of an image, please contact us for removal.
                  For more information on Gene Maltsev, visit genesteam.com.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-background-light text-center py-1 px-2">
          <p className="text-foreground-dark text-xs min-[2048px]:text-base mt-1">
            © {currentYear} One Northside Piers. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// {/* <div className="w-full bg-background-tertiary flex flex-col">
// {/* Top part */}
// <div className="relative w-full flex flex-col items-center gap-12 lg:gap-1 px-12 lg:px-28 py-12 lg:py-16">
//   <div className="lg:absolute lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2">
// <Link
//   href="https://maps.app.goo.gl/JmFPfdqXxEwH7GZc9"
//   target="_blank"
//   rel="noreferrer"
// >
//   <Image
//     src="/images/logo.png"
//     alt="logo"
//     width={120}
//     height={120}
//     quality={100}
//     priority
//     className="w-auto h-[64px] md:h-[86px]"
//   />
// </Link>
//   </div>
//   <div className="w-full h-fit flex items-center justify-center md:justify-between flex-col md:flex-row gap-6 md:gap-1">
//     <Link
//       href="https://maps.app.goo.gl/JmFPfdqXxEwH7GZc9"
//       target="_blank"
//       rel="noreferrer"
//       className="group/item flex flex-col text-xs md:text-base text-center md:text-left z-20"
//     >
//       {addressDisplay.map((address, index) => (
//         <span
//           key={index}
//           className={`${
//             index % 2 === 0 ? "font-bold" : "font-normal"
//           } group-hover/item:underline`}
//         >
//           {address.trim()}
//         </span>
//       ))}
//     </Link>

//     <div className="flex flex-col items-center md:items-end">
//       <Link
//         href={`tel:${phoneNumber}`}
//         className="flex flex-col text-xs md:text-base font-bold hover:underline text-center md:text-right z-20"
//       >
//         {formatPhoneNumber(phoneNumber)}
//       </Link>
//       <Link
//         href={`tel:${mail}`}
//         target="_blank"
//         rel="noreferrer"
//         className="flex flex-col text-xs md:text-base hover:underline text-center md:text-right z-20"
//       >
//         {mail}
//       </Link>
//     </div>
//   </div>
// </div>

// {/* Bottom part */}
// <div className="w-full bg-background-secondary flex flex-col items-center justify-center gap-12 lg:gap-24 pt-6 sm:pt-8 md:pt-16 lg:pt-20 xl:pt-24 px-6 sm:px-8 md:px-16 lg:px-20 xl:px-24 pb-12 md:pb-16 lg:pb-20 xl:pb-24">
// <p className="text-xs md:text-base">
//   <b>Disclaimer:</b> This website is independently owned and operated by
//   Gene Maltsev, a Licensed Real Estate Agent in New York City. This
//   website is for informational purposes only and does not constitute an
//   offer to sell or a solicitation of an offer to buy any property. This
//   website is not affiliated with the condominium or any other exclusive
//   listings by other brokers at the property. While every effort is made
//   to ensure the accuracy of the information on this website, it is
//   subject to change without notice, and no warranty, express or implied,
//   is made as to its completeness or accuracy. Verify all information
//   independently. Images on this website are used for illustrative
//   purposes only and are obtained from publicly available real estate
//   listings. All images are the copyright of their respective owners.
//   Gene Maltsev makes no claim of ownership to these images and uses them
//   solely to provide visual context for the building information. Any use
//   of these images without the express permission of the copyright holder
//   is strictly prohibited. If you are a copyright holder and object to
//   the use of an image, please contact us for removal. For more
//   information on Gene Maltsev, visit genesteam.com.
// </p>
//   <div className="h-fit flex items-center justify-center flex-wrap gap-8 sm:gap-10 md:gap-4">
//     <Link
//       href={`/fair-housing`}
//       className="text-xs lg:text-base font-bold hover:underline z-20"
//     >
//       FAIR HOUSING
//     </Link>
//     <div className="w-1 h-[18px] bg-background-primary hidden md:flex" />
//     <Link
//       href={`/standardized-procedure`}
//       className="text-xs lg:text-base font-bold hover:underline z-20"
//     >
//       STANDARDIZED PROCEDURE
//     </Link>
//     <div className="w-1 h-[18px] bg-background-primary hidden md:flex" />
//     <Link
//       href={`/terms-and-conditions`}
//       className="text-xs lg:text-base font-bold hover:underline z-20"
//     >
//       TERMS & CONDITIONS
//     </Link>
//   </div>
// </div>
// </div> */}
