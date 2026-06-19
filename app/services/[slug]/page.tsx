import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CtaButton } from "@/components/cta-button";
import { GridBg } from "@/components/grid-bg";
import { JsonLd } from "@/components/jsonld";
import { services, getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getService(params.slug);
  if (!s) return buildMetadata({ title: "Service" });
  return buildMetadata({
    title: s.name,
    description: s.oneLiner,
    path: `/services/${s.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.oneLiner,
    provider: {
      "@type": "ProfessionalService",
      name: site.legalName,
      url: site.url,
      email: site.email,
    },
    areaServed: ["US", "EU", "IN", "AE"],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: service.priceFromInr.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };

  // FAQ Schema for AEO/GEO — makes FAQs appear in AI answers and featured snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // Breadcrumb Schema for rich snippets
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              {service.tag}
            </p>
            <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              {service.oneLiner}
            </p>

            <div className="mt-10 inline-flex flex-wrap items-end gap-8 rounded-2xl border border-line bg-bg-raised px-6 py-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  Starts at
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-ink">
                  {service.priceFromInr}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-ink-subtle">
                  or {service.priceFromUsd}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  Duration
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">
                  {service.duration}
                </p>
              </div>
              <CtaButton href="/contact">Book a call</CtaButton>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="What you get" title="Outcomes, not deliverables.">
        <ul className="grid gap-4 md:grid-cols-2">
          {service.outcomes.map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 rounded-2xl border border-line bg-bg-raised p-6 text-sm text-ink-muted"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                strokeWidth={2}
              />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="How it runs"
        title="The process, written down."
        className="border-t border-line bg-white/[0.015]"
      >
        <ol className="space-y-4">
          {service.process.map((step, i) => (
            <li
              key={step.step}
              className="grid gap-4 rounded-2xl border border-line bg-bg p-7 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {step.step}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted md:col-span-9">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="FAQ" title="The questions we get most.">
        <div className="grid gap-4 md:grid-cols-2">
          {service.faq.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-line bg-bg-raised p-6"
            >
              <h3 className="font-display text-base font-semibold text-ink">
                {f.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Be honest"
        title="Not a fit if…"
        className="border-t border-line bg-white/[0.015]"
      >
        <ul className="grid gap-3 md:grid-cols-3">
          {service.notAFitIf.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 rounded-2xl border border-line bg-bg p-5 text-sm text-ink-muted"
            >
              <XCircle
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-subtle"
                strokeWidth={1.5}
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-3xl border border-line bg-bg-raised p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Ready to scope a {service.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            One 30-minute call. We leave you with a written proposal in five
            business days.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a discovery call</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
