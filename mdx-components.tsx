import type { MDXComponents } from "mdx/types";

/** Applies site typography to MDX prose. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="font-display mt-10 mb-3 text-3xl" {...props} />,
    h3: (props) => <h3 className="mt-6 mb-2 font-medium" {...props} />,
    p: (props) => <p className="text-muted mb-4 leading-relaxed" {...props} />,
    ul: (props) => <ul className="text-muted mb-4 list-disc pl-5" {...props} />,
    li: (props) => <li className="mb-1" {...props} />,
    a: (props) => <a className="link" {...props} />,
    strong: (props) => <strong className="text-text font-medium" {...props} />,
    ...components,
  };
}
