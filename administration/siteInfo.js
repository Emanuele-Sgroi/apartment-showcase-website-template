// Insert below your domain

export const siteInfo = {
  domainName:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com", // <-------------------- INSERT YOUR DOMAIN HERE

  nameWebsite: "1 Northside Piers", // <----------------- The name of the website
};
