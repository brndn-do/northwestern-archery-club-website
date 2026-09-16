/**
 * A link target that is either configured or explicitly not yet configured.
 *
 * Content authors build these with {@link url} and {@link placeholder} so that
 * an unconfigured link is a distinct shape rather than a plausible-looking
 * string.
 */
export type SiteUrl =
  | { readonly kind: "url"; readonly href: string }
  | { readonly kind: "placeholder"; readonly replaceWith: string };

/**
 * A {@link SiteUrl} classified for rendering.
 *
 * `external` targets need `rel`/`target` handling; `placeholder` targets must
 * not render as navigable links.
 */
export type LinkTarget =
  | { readonly kind: "internal"; readonly href: string }
  | { readonly kind: "external"; readonly href: string }
  | { readonly kind: "placeholder"; readonly replaceWith: string };

/**
 * Builds a configured link.
 *
 * @param href - A site-relative path, a fragment, or an absolute URL.
 * @throws If `href` is blank.
 */
export function url(href: string): SiteUrl {
  if (href.trim() === "") {
    throw new Error("url() requires a non-blank href");
  }
  return { kind: "url", href };
}

/**
 * Builds an unconfigured link that records what should replace it.
 *
 * @param replaceWith - What a maintainer must substitute, e.g. "the signup
 * form URL".
 * @throws If `replaceWith` is blank.
 */
export function placeholder(replaceWith: string): SiteUrl {
  if (replaceWith.trim() === "") {
    throw new Error("placeholder() requires non-blank replacement instructions");
  }
  return { kind: "placeholder", replaceWith };
}

/** Classifies a {@link SiteUrl} for rendering. */
export function resolveLinkTarget(link: SiteUrl): LinkTarget {
  if (link.kind === "placeholder") {
    return link;
  }
  const isInternal = link.href.startsWith("/") || link.href.startsWith("#");
  return { kind: isInternal ? "internal" : "external", href: link.href };
}
