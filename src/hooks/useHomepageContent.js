"use client";

import useSWR from "swr";
import client from "@/utils/contentfulClient";
import { useEffect, useState } from "react";

const fetchHomepageContent = async () => {
  const response = await client.getEntries({
    content_type: "homepage",
  });

  if (!response.items.length) {
    throw new Error("No homepage content found.");
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

export const useHomepageContent = () => {
  const [isHomepageLoading, setIsHomepageLoading] = useState(true);

  const { data, error } = useSWR("homepage", fetchHomepageContent, {
    onLoadingSlow: () => setIsHomepageLoading(true),
    onSuccess: () => setIsHomepageLoading(false),
    onError: () => setIsHomepageLoading(false),
  });

  useEffect(() => {
    setIsHomepageLoading(!data && !error);
  }, [data, error]);

  return {
    homepageContent: data || null,
    isHomepageLoading,
    isHomepageError: !!error,
  };
};
