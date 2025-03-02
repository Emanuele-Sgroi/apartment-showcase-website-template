import React from "react";

const InquireContact = ({ globalsContent }) => {
  const words = (text) => {
    return text.split("\n");
  };

  return (
    <div className="flex-1 flex flex-col items-start justify-start">
      {/* Address */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md text-foreground-accent ">Address</h5>
        <p className="flex flex-col items-start justify-start text-foreground-dark uppercase">
          {words(globalsContent.address).map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 items-start justify-start">
        <h5 className="uppercase text-md text-foreground-accent ">Email</h5>
        <p className="flex flex-col items-start justify-start text-foreground-dark uppercase">
          {globalsContent.emailAddress}
        </p>
      </div>
    </div>
  );
};

export default InquireContact;
