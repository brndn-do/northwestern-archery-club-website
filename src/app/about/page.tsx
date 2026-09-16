import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/metadata";
import About from "@content/prose/about.mdx";

export const metadata = pageMetadata(
  "About",
  "Who we are: a recreational, beginner-focused archery club at Northwestern University, founded in 2013.",
  "/about",
);

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="font-display mb-6 text-4xl sm:text-5xl">About the club</h1>
      <div className="max-w-2xl">
        <About />
      </div>
    </Container>
  );
}
