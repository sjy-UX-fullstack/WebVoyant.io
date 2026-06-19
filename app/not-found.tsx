import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
        That route doesn&rsquo;t exist.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        It may have moved, or it was never there. Head back home or book a call.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <CtaButton href="/">Go home</CtaButton>
        <CtaButton href="/contact" variant="secondary">
          Book a call
        </CtaButton>
      </div>
    </Container>
  );
}
