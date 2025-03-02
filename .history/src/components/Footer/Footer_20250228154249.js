"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";
import { Mail, Phone } from "lucide-react";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";
import { Spinner } from "@/components";
import { getAssetUrl } from "@/utils/imageUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// Custom options to render only the elements you need
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
  },
  renderNode: {
    // Render normal paragraphs
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className=" text-sm  md:text-base min-[2048px]:text-lg text-foreground-light">
        {children}
      </p>
    ),
    // Render links. If it's an external link, open in new tab.
    [INLINES.HYPERLINK]: (node, children) => {
      const url = node.data.uri;
      const isExternal = url.startsWith("http");
      return (
        <a
          href={url}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="underline hover:text-foreground-accent"
        >
          {children}
        </a>
      );
    },
  },
};

const Footer = () => {
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();
  let phoneNumber = "+16461234567";
  const currentYear = new Date().getFullYear();

  // Access the referenced Logos
  const logosRef = globalsContent?.logosReference?.map((logo) => logo.fields);

  if (!globalsContent || isGlobalsLoading || !logosRef) {
    return (
      <div className="w-full bg-background-dark flex justify-center items-center p-24">
        <Spinner size={35} color="var(--foreground-light)" />
      </div>
    );
  }
  if (isGlobalsError) {
    return null;
  }

  return (
    <>
      {globalsContent && (
        <>
          <footer className="max-md:hidden w-full bg-background-dark">
            <div className="w-full pt-[56px] md:pt-[80px] 2xl:pt-[120px] pb-12 md:pb-16 2xl:pb-20 px-8 md:px-12 xl:px-24 min-[2048px]:px-[170px] text-foreground-light">
              <div className="w-full flex items-start justify-center gap-24 xl:gap-28 2xl:gap-36">
                {/* Left part */}
                <div className="flex flex-col items-start justify-start gap-4">
                  {logosRef.map((logo, index) => {
                    if (logo.isThisLogoALink) {
                      // Use an empty string if no URL is provided.
                      const linkUrl = logo.logoUrl || "";
                      // Consider a link external if it doesn't start with a slash ("/")
                      const isExternal = linkUrl && !linkUrl.startsWith("/");

                      return (
                        <Link
                          key={`${logo.logoIndentifier} ${index}`}
                          href={linkUrl}
                          {...(isExternal
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        >
                          <Image
                            src={getAssetUrl(logo.logoImage)}
                            alt={
                              logo.alt || logo.logoIndentifier || "Genes Team"
                            }
                            width={120}
                            height={120}
                            quality={100}
                            priority
                            className="w-[180px] h-auto"
                          />
                        </Link>
                      );
                    }

                    return (
                      <Image
                        key={`${logo.logoIndentifier} ${index}`}
                        src={getAssetUrl(logo.logoImage)}
                        alt={logo.alt || logo.logoIndentifier || "Genes Team"}
                        width={120}
                        height={120}
                        quality={100}
                        priority
                        className="w-[180px] h-auto"
                      />
                    );
                  })}
                  <div className="flex flex-col items-start justify-start gap-2 mt-6">
                    <Link
                      href="/fair-housing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-lg uppercase text-left hover:text-foreground-accent"
                    >
                      FAIR HOUSING
                    </Link>
                    <Link
                      href="/standardized-procedure"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-lg uppercase text-left hover:text-foreground-accent"
                    >
                      STANDARDIZED PROCEDURE
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-base min-[2048px]:text-lg uppercase text-left hover:text-foreground-accent"
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
                          href={`mailto:${globalsContent.emailAddress}`}
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-base min-[2048px]:text-md font-semibold tracking-wider uppercase text-left"
                        >
                          {globalsContent.emailAddress}
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
                          href={`tel:${globalsContent.phoneNumber}`}
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-base min-[2048px]:text-md font-semibold tracking-wider uppercase text-left"
                        >
                          {formatPhoneNumber(globalsContent.phoneNumber)}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    {documentToReactComponents(
                      globalsContent.disclaimerText,
                      options
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-background-light text-center py-1 px-2">
              <p className="text-foreground-dark text-xs min-[2048px]:text-base mt-1">
                ©&nbsp;{currentYear}&nbsp;{globalsContent.footerCopyright}
              </p>
            </div>
          </footer>

          {/* Mobile */}
          <footer className="md:hidden w-full bg-background-dark">
            <div className="w-full pt-[56px] pb-12  px-8 text-foreground-light">
              <div className="w-full flex flex-col items-center justify-start gap-12">
                {/* top part */}
                <div className="w-full flex items-center justify-around gap-8 flex-wrap">
                  {logosRef.map((logo, index) => {
                    if (logo.isThisLogoALink) {
                      // Use an empty string if no URL is provided.
                      const linkUrl = logo.logoUrl || "";
                      // Consider a link external if it doesn't start with a slash ("/")
                      const isExternal = linkUrl && !linkUrl.startsWith("/");

                      return (
                        <Link
                          key={`${logo.logoIndentifier} ${index}`}
                          href={linkUrl}
                          {...(isExternal
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        >
                          <Image
                            src={getAssetUrl(logo.logoImage)}
                            alt={
                              logo.alt || logo.logoIndentifier || "Genes Team"
                            }
                            width={120}
                            height={120}
                            quality={100}
                            priority
                            className="w-[120px] h-auto"
                          />
                        </Link>
                      );
                    }

                    return (
                      <Image
                        key={`${logo.logoIndentifier} ${index}`}
                        src={getAssetUrl(logo.logoImage)}
                        alt={logo.alt || logo.logoIndentifier || "Genes Team"}
                        width={120}
                        height={120}
                        quality={100}
                        priority
                        className="w-[120px] h-auto"
                      />
                    );
                  })}
                </div>
                {/* Bottom part */}
                <div className="flex-1 flex flex-col items-start justify-start gap-12 xl:gap-24 ">
                  {/* Contacts */}
                  <div className="w-full flex flex-col items-center justify-center gap-6 flex-wrap">
                    {/* Email */}
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="flex items-center justify-center rounded-full border-2 border-background-light p-2">
                        <Mail size={20} />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-0">
                        <h5 className="text-base text-foreground-accent font-semibold text-left uppercase">
                          Email
                        </h5>
                        <Link
                          href={`mailto:${globalsContent.emailAddress}`}
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-sm font-semibold tracking-wider uppercase text-left"
                        >
                          {globalsContent.emailAddress}
                        </Link>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="flex items-center justify-center rounded-full border-2 border-background-light p-2">
                        <Phone size={20} />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-0">
                        <h5 className="text-base text-foreground-accent font-semibold text-left uppercase">
                          Phone number
                        </h5>
                        <Link
                          href={`tel:${globalsContent.phoneNumber}`}
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-sm font-semibold tracking-wider uppercase text-left"
                        >
                          {formatPhoneNumber(globalsContent.phoneNumber)}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex  items-center justify-center gap-4 flex-wrap">
                    <Link
                      href="/fair-housing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-sm  uppercase text-left"
                    >
                      FAIR HOUSING
                    </Link>
                    <Link
                      href="/standardized-procedure"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-sm uppercase text-left"
                    >
                      STANDARDIZED PROCEDURE
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-sm uppercase text-left"
                    >
                      TERMS & CONDITIONS
                    </Link>
                  </div>
                  <div className="w-full">
                    {documentToReactComponents(
                      globalsContent.disclaimerText,
                      options
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-background-light text-center py-1 px-2">
              <p className="text-foreground-dark text-xxs  mt-1">
                ©&nbsp;{currentYear}&nbsp;{globalsContent.footerCopyright}
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
