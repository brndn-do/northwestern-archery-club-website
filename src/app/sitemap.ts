import type { MetadataRoute } from "next";
import { site } from "@content/data/site";

const paths = ["/", "/about", "/join", "/faq", "/contact"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: new URL(path, site.origin).toString() }));
}
