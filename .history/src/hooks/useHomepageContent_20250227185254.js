"use client";

import useSWR from "swr";
import client from "@/utils/contentfulClient";
import { useEffect, useState } from "react";

const fetchHomepageContent = async () => {
  const response = await client.getEntries({
    content_type: "homepage",
    limit: 1,
  });

  if (response.items.length > 0) {
    return response.items[0].fields;
  }
  throw new Error("No content found for the Homepage Page");
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
  }, [data, error]); // setIsHomepageLoading

  // Handling the loading and error states directly here
  return {
    homepageContent: data || null,
    isHomepageLoading,
    isHomepageError: !!error,
  };
};
