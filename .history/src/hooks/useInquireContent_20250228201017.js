"use client";

import useSWR from "swr";
import client from "@/utils/contentfulClient";
import { useEffect, useState } from "react";

const fetchInquirePageContent = async () => {
  const response = await client.getEntries({
    content_type: "inquirePage",
  });

  if (!response.items.length) {
    throw new Error("No inquirePage content found.");
  }

  // Get current domain
  const currentDomain =
    typeof window !== "undefined" ? window.location.hostname : "";

  // Find the entry that matches the current domain
  const matchedEntry = response.items.find(
    (entry) => entry.fields.websiteIdentifier === currentDomain
  );

  if (matchedEntry) {
    return matchedEntry.fields;
  }

  throw new Error(`No content found for this domain: ${currentDomain}`);
};

export const useInquirePageContent = () => {
  const [isInquirePageLoading, setIsInquirePageLoading] = useState(true);

  const { data, error } = useSWR("inquirePage", fetchInquirePageContent, {
    onLoadingSlow: () => setIsInquirePageLoading(true),
    onSuccess: () => setIsInquirePageLoading(false),
    onError: () => setIsInquirePageLoading(false),
  });

  useEffect(() => {
    setIsInquirePageLoading(!data && !error);
  }, [data, error]);

  return {
    inquireContent: data || null,
    isInquirePageLoading,
    isInquirePageError: !!error,
  };
};
