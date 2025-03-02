"use client";

import useSWR from "swr";
import client from "@/utils/contentfulClient";
import { useEffect, useState } from "react";

const fetchResidencesContent = async () => {
  const response = await client.getEntries({
    content_type: "residencesPage",
  });

  if (!response.items.length) {
    throw new Error("No residencesPage content found.");
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

export const useResidencesContent = () => {
  const [isResidencesLoading, setIsResidencesLoading] = useState(true);

  const { data, error } = useSWR("residencesPage", fetchResidencesContent, {
    onLoadingSlow: () => setIsResidencesLoading(true),
    onSuccess: () => setIsResidencesLoading(false),
    onError: () => setIsResidencesLoading(false),
  });

  useEffect(() => {
    setIsResidencesLoading(!data && !error);
  }, [data, error]);

  return {
    residencesContent: data || null,
    isResidencesLoading,
    isResidencesError: !!error,
  };
};
