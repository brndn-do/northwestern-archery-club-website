import type { Metadata } from "next";
import { site } from "@content/data/site";

/**
 * Builds page metadata with the site name appended and a canonical URL.
 *
 * @param path - Site-relative path, e.g. "/join".
 */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: new URL(path, site.origin).toString() },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url: new URL(path, site.origin).toString(),
      siteName: site.name,
      type: "website",
    },
  };
}
