import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { url } from "@/lib/content/url";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="font-display mb-4 text-4xl">Page not found</h1>
      <p className="text-muted mb-8">That page does not exist.</p>
      <ButtonLink href={url("/")}>Back to the home page</ButtonLink>
    </Container>
  );
}
