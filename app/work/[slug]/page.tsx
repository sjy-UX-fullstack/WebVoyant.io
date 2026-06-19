import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Quote } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CtaButton } from "@/components/cta-button";
import { GridBg } from "@/components/grid-bg";
import { JsonLd } from "@/components/jsonld";
import { cases, getCase } from "@/content/cases";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCase(params.slug);
  if (!c) return buildMetadata({ title: "Case study" });
  return buildMetadata({
    title: c.headline,
    description: c.summary,
    path: `/work/${c.slug}`,
  });
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = getCase(params.slug);
  if (!study) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: study.headline,
    abstract: study.summary,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    about: study.vertical,
    datePublished: `${study.year}-01-01`,
    keywords: study.stack.join(", "),
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
              {study.vertical} · {study.year}
            </div>
            <p className="mt-4 font-mono text-sm text-ink-muted">
              {study.client}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              {study.headline}
            </h1>
            <p className="mt-6 text-lg text-ink-muted">{study.summary}</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          {study.highlights.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-line bg-bg-raised p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                {m.label}
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-ink">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {study.liveUrl && (
          <div className="mt-10 flex justify-start">
            <CtaButton href={study.liveUrl} variant="secondary" external>
              View live site
            </CtaButton>
          </div>
        )}
      </Section>

      <Section
        eyebrow="The problem"
        title="What the team was trying to solve."
        className="border-t border-line bg-white/[0.015]"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
          {study.problem}
        </p>
      </Section>

      <Section eyebrow="The approach" title="What we actually did.">
        <ol className="space-y-4">
          {study.approach.map((a, i) => (
            <li
              key={a}
              className="grid gap-4 rounded-2xl border border-line bg-bg-raised p-7 md:grid-cols-12"
            >
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted md:col-span-10">
                {a}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="The outcome"
        title="Where the product is today."
        className="border-t border-line bg-white/[0.015]"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
          {study.outcome}
        </p>

        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
            Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {study.testimonial && (
        <Section>
          <figure className="rounded-3xl border border-line bg-bg-raised p-10 sm:p-14">
            <Quote
              className="h-8 w-8 text-accent"
              strokeWidth={1.5}
              aria-hidden
            />
            <blockquote className="mt-5 max-w-3xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink-muted">
              {study.testimonial.author} · {study.testimonial.role}
            </figcaption>
          </figure>
        </Section>
      )}

      <Section>
        <div className="rounded-3xl border border-line bg-bg-raised p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Got a similar problem? Let&rsquo;s talk.
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a discovery call</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
