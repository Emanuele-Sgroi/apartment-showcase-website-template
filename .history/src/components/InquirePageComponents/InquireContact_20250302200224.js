import React from "react";
import Link from "next/link";
import { formatPhoneNumber } from "@/utils/fromatPhoneNumber";

const InquireContact = ({ globalsContent }) => {
  const words = (text) => {
    return text.split("\n");
  };

  return (
    <div className="flex flex-col items-start justify-start gap-8 sm:gap-12 max-[825px]:flex-row max-[825px]:justify-between max-[825px]:flex-wrap">
      {/* Address */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md min-[2048px]:text-lg text-foreground-accent ">
          Address
        </h5>
        <Link
          href={globalsContent.linkAddress}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-start justify-start text-foreground-dark uppercase text-md min-[2048px]:text-lg"
        >
          {words(globalsContent.address).map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </Link>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md min-[2048px]:text-lg text-foreground-accent ">
          Email
        </h5>
        <Link
          href={`mailto:${globalsContent.emailAddress}`}
          className=" text-foreground-dark uppercase text-md min-[2048px]:text-lg"
        >
          {globalsContent.emailAddress}
        </Link>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md min-[2048px]:text-lg text-foreground-accent ">
          Phone Number{" "}
        </h5>
        <Link
          href={`tel:${globalsContent.phoneNumber}`}
          className=" text-foreground-dark uppercase text-md min-[2048px]:text-lg"
        >
          {formatPhoneNumber(globalsContent.phoneNumber)}
        </Link>
      </div>
    </div>
  );
};

export default InquireContact;
