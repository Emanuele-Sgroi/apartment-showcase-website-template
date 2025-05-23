"use client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const Legals = ({ heroTitle, content = {} }) => {
  //  Define custom rendering options for rich text
  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4 text-sm sm:text-base md:text-md  min-[2048px]:text-lg leading-relaxed">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="my-4 text-[26px] md:text-2xl font-bold leading-tight">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="my-2 text-lg md:text-xl font-semibold leading-tight">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="my-2 text-md md:text-lg font-semibold leading-tight">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="my-1 text-base md:text-base font-semibold leading-tight">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="my-1 text-base md:text-base font-semibold leading-tight">
          {children}
        </h6>
      ),

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-8 my-4">{children}</ul>
      ),

      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal ml-8 my-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="mb-1">{children}</li>
      ),

      [INLINES.HYPERLINK]: (node, children) => {
        const url = node.data.uri;
        const isExternal = url.startsWith("http");
        return (
          <a
            href={url}
            className="text-foreground-dark underline hover:no-underline"
            {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="w-full min-h-[70vh]">
      {/* Hero / Top Section */}
      <div className="w-full bg-background-dark py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[280px] px-8 md:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px] ">
        <div className="flex flex-col justify-center items-center gap-10 md:gap-12 max-md:pt-6">
          {/* Title */}
          <h1 className="display-font text-foreground-light text-[30px] md:text-[36px] lg:text-[41px] min-[2048px]:text-[70px] leading-[1] text-center uppercase">
            {heroTitle}
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1260px] min-[2048px]:max-w-[1450px] py-[30px] md:py-[60px]  min-[2048px]:py-[120px] px-8 max-[500px]:px-6 max-[340px]:px-4">
          <div className="w-full">
            {content && documentToReactComponents(content, richTextOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legals;
