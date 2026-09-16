/** Lets keyboard users jump past the navigation. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="bg-accent text-accent-contrast sr-only rounded-md px-4 py-2 focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
    >
      Skip to content
    </a>
  );
}
