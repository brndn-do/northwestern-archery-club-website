import { photos } from "@content/data/photos";
import { site } from "@content/data/site";
import { socials } from "@content/data/socials";

type Found = { location: string; replaceWith: string };

function isPlaceholder(value: unknown): value is { kind: "placeholder"; replaceWith: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as { kind?: unknown }).kind === "placeholder"
  );
}

/** Collects every placeholder link reachable from `value`, depth-first. */
function collect(value: unknown, location: string, found: Found[]): void {
  if (isPlaceholder(value)) {
    found.push({ location, replaceWith: value.replaceWith });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collect(item, `${location}[${index}]`, found));
    return;
  }
  if (typeof value === "object" && value !== null) {
    for (const [key, item] of Object.entries(value)) {
      collect(item, `${location}.${key}`, found);
    }
  }
}

const found: Found[] = [];
collect(site, "site", found);
collect(socials, "socials", found);

console.log(`${found.length} placeholder link(s):`);
for (const item of found) {
  console.log(`  ${item.location} — replace with ${item.replaceWith}`);
}
console.log(`\n${photos.length} photo slot(s) awaiting images.`);
