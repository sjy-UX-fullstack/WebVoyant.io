import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CaseCard } from "@/components/case-card";
import { GridBg } from "@/components/grid-bg";
import { CtaButton } from "@/components/cta-button";
import { cases } from "@/content/cases";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Case studies of products WebVoyant has shipped end-to-end — architecture, code, infra.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              Work
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Real products. Real outcomes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Each case study below was built end-to-end by our pods. We name
              the stack, the metrics, and the trade-offs.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.slug} study={c} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-line bg-bg-raised p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Your product could be the next case study.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            30 minutes. We tell you whether we&rsquo;re a fit.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a discovery call</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
