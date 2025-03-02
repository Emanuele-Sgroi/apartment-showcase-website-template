import React from "react";
import Link from "next/link";

const InquireContact = ({ globalsContent }) => {
  const words = (text) => {
    return text.split("\n");
  };

  return (
    <div className="flex-1 flex flex-col items-start justify-start">
      {/* Address */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md text-foreground-accent ">Address</h5>
        <Link
          href={globalsContent.linkAddress}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-start justify-start text-foreground-dark uppercase"
        >
          {words(globalsContent.address).map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </Link>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md text-foreground-accent ">Email</h5>
        <Link
          href={`mailto:${globalsContent.emailAddress}`}
          className=" text-foreground-dark uppercase text-md"
        >
          {globalsContent.emailAddress}
        </Link>
      </div>
    </div>
  );
};

export default InquireContact;
