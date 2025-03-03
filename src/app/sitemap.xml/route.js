import { siteInfo } from "../../../administration/siteInfo";

// Basic site info
const siteUrl = siteInfo.domainName;

/**
 * Pages array.
 * If lastModified is omitted or null, we'll use today's date.
 */
const pages = [
  { url: "/" },
  { url: "/residences" },
  { url: "/inquire" },
  { url: "/terms-and-conditions" },
  { url: "/fair-housing" },
  { url: "/standardized-procedure" },
];

export async function GET() {
  // Generate the XML string
  const sitemapXml = generateSitemapXml(siteUrl, pages);

  // Return the XML
  return new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

/**
 * Helper function to generate a valid sitemap XML
 */
function generateSitemapXml(baseUrl, pages) {
  const today = new Date().toISOString().slice(0, 10); // e.g. "2025-03-03"

  let urls = "";
  for (const page of pages) {
    // If page.lastModified is missing or falsy, use today's date
    const lastMod = page.lastModified || today;

    urls += `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${lastMod}</lastmod>
      </url>
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
    ${urls}
  </urlset>`;
}
