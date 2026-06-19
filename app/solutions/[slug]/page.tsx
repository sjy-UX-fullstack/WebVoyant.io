import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Building2,
  Globe,
  IndianRupee,
} from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CtaButton } from "@/components/cta-button";
import { GridBg } from "@/components/grid-bg";
import { JsonLd } from "@/components/jsonld";
import { landingPages, getLandingPage } from "@/content/landing-pages";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return landingPages.map((lp) => ({ slug: lp.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const lp = getLandingPage(params.slug);
  if (!lp) return buildMetadata({ title: "Solutions" });
  return {
    ...buildMetadata({
      title: lp.metaTitle.split("|")[0].trim(),
      description: lp.metaDescription,
      path: `/solutions/${lp.slug}`,
    }),
    title: lp.metaTitle,
    alternates: {
      canonical: `${site.url}/solutions/${lp.slug}`,
    },
  };
}

const regionIcon = {
  india: IndianRupee,
  gcc: Building2,
  usa: Globe,
  global: Globe,
};

const regionLabel = {
  india: "India",
  gcc: "Dubai & GCC",
  usa: "United States",
  global: "India, GCC & US",
};

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const lp = getLandingPage(params.slug);
  if (!lp) notFound();

  const parentService = getService(lp.serviceSlug);

  // ── JSON-LD: FAQ Schema (AEO/GEO critical) ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lp.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // ── JSON-LD: Breadcrumb Schema ──
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
        name: parentService?.name ?? "Services",
        item: `${site.url}/services/${lp.serviceSlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: lp.keyword,
        item: `${site.url}/solutions/${lp.slug}`,
      },
    ],
  };

  // ── JSON-LD: Service Schema ──
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lp.keyword,
    description: lp.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: site.legalName,
      url: site.url,
      email: site.email,
      areaServed: ["US", "IN", "AE", "SA", "QA"],
    },
    areaServed: lp.region === "india"
      ? ["IN"]
      : lp.region === "gcc"
        ? ["AE", "SA", "QA", "BH", "KW", "OM"]
        : lp.region === "usa"
          ? ["US"]
          : ["IN", "US", "AE"],
    serviceType: lp.keyword,
    offers: {
      "@type": "Offer",
      priceCurrency: lp.region === "india" ? "INR" : "USD",
      price: lp.priceFrom.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };

  const RegionIcon = regionIcon[lp.region];

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle"
            >
              <Link
                href="/"
                className="transition hover:text-accent"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href={`/services/${lp.serviceSlug}`}
                className="transition hover:text-accent"
              >
                {parentService?.name ?? "Services"}
              </Link>
              <span>/</span>
              <span className="text-accent">{lp.keyword}</span>
            </nav>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <RegionIcon className="h-3 w-3 text-teal" strokeWidth={2} />
              {regionLabel[lp.region]}
            </div>

            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {lp.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              {lp.subheading}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton href="/contact">{lp.cta}</CtaButton>
              <CtaButton
                href={`/services/${lp.serviceSlug}`}
                variant="secondary"
              >
                See full pricing
              </CtaButton>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {lp.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ════════ WHAT'S INCLUDED ════════ */}
      <Section
        eyebrow="What's included"
        title="Everything you get. No hidden extras."
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {lp.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-line bg-bg-raised p-6 text-sm text-ink-muted"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                strokeWidth={2}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm text-ink-muted">
            <span className="font-semibold text-accent">
              {lp.priceFrom}
            </span>
            starting price
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm text-ink-muted">
            <span className="font-semibold text-teal">{lp.timeline}</span>
            delivery
          </span>
        </div>
      </Section>

      {/* ════════ WHY US ════════ */}
      <Section
        eyebrow="Why WebVoyant"
        title="What makes us different."
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lp.whyUs.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-bg p-6"
            >
              <p className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {point}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ════════ INDUSTRIES (if applicable) ════════ */}
      {lp.industries && lp.industries.length > 0 && (
        <Section
          eyebrow="Industries we serve"
          title={`${lp.keyword} for every industry.`}
        >
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {lp.industries.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-3 rounded-xl border border-line bg-bg-raised px-5 py-4"
              >
                <Building2
                  className="h-4 w-4 flex-shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-ink-muted">{ind}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ════════ FAQ — Critical for AEO/GEO ════════ */}
      <Section
        eyebrow="Frequently asked questions"
        title={`Common questions about ${lp.keyword.toLowerCase()}.`}
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {lp.faq.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-line bg-bg p-6"
            >
              <h3 className="font-display text-base font-semibold text-ink">
                {f.q}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ════════ RELATED KEYWORDS (internal linking for SEO) ════════ */}
      <Section>
        <div className="rounded-2xl border border-line bg-bg-raised p-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
            Related searches
          </p>
          <div className="flex flex-wrap gap-2">
            {lp.relatedKeywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-line bg-bg px-3 py-1.5 text-xs text-ink-muted"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════ CTA ════════ */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 text-center sm:p-16">
          <GridBg />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Tell us what you need. We&rsquo;ll send a fixed-price quote with a
              delivery date within 24 hours. No meetings required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CtaButton href="/contact">{lp.cta}</CtaButton>
              <CtaButton
                href="https://wa.me/918109745019?text=Hi%20WebVoyant!%20I%20need%20a%20quote%20for%20my%20project."
                variant="secondary"
                external
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
