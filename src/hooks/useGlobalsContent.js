"use client";

import useSWR from "swr";
import client from "@/utils/contentfulClient";
import { useEffect, useState } from "react";

const fetchGlobalsContent = async () => {
  const response = await client.getEntries({
    content_type: "globals",
  });

  if (!response.items.length) {
    throw new Error("No globals content found.");
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

export const useGlobalsContent = () => {
  const [isGlobalsLoading, setIsGlobalsLoading] = useState(true);

  const { data, error } = useSWR("globals", fetchGlobalsContent, {
    onLoadingSlow: () => setIsGlobalsLoading(true),
    onSuccess: () => setIsGlobalsLoading(false),
    onError: () => setIsGlobalsLoading(false),
  });

  useEffect(() => {
    setIsGlobalsLoading(!data && !error);
  }, [data, error]);

  return {
    globalsContent: data || null,
    isGlobalsLoading,
    isGlobalsError: !!error,
  };
};
