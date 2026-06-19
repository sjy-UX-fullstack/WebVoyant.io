import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Building2,
  Clock,
  IndianRupee,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CtaButton } from "@/components/cta-button";
import { GridBg } from "@/components/grid-bg";
import { JsonLd } from "@/components/jsonld";
import { OfferCard } from "@/components/offer-card";
import { cityPages, getCityPage } from "@/content/city-pages";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return cityPages.map((cp) => ({ slug: cp.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cp = getCityPage(params.slug);
  if (!cp) return buildMetadata({ title: "Locations" });
  return {
    ...buildMetadata({
      title: cp.metaTitle.split("|")[0].trim(),
      description: cp.metaDescription,
      path: `/locations/${cp.slug}`,
    }),
    title: cp.metaTitle,
    alternates: {
      canonical: `${site.url}/locations/${cp.slug}`,
    },
  };
}

export default function CityPage({
  params,
}: {
  params: { slug: string };
}) {
  const cp = getCityPage(params.slug);
  if (!cp) notFound();

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cp.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // Local Business Schema — critical for local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.legalName} — ${cp.city}`,
    description: cp.metaDescription,
    url: `${site.url}/locations/${cp.slug}`,
    telephone: "+918109745019",
    email: site.email,
    priceRange: "$$",
    areaServed: {
      "@type": cp.state ? "City" : "Country",
      name: cp.city,
    },
    serviceType: [
      "Website Design",
      "Website Development",
      "E-Commerce Development",
      "Mobile App Development",
      "AI Product Development",
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: cp.currency === "INR" ? "25000" : "300",
      highPrice: cp.currency === "INR" ? "300000" : "3500",
      priceCurrency: cp.currency,
    },
  };

  // Breadcrumb Schema
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
        name: "Locations",
        item: `${site.url}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Website Development in ${cp.city}`,
        item: `${site.url}/locations/${cp.slug}`,
      },
    ],
  };

  const CurrencyIcon = cp.currency === "INR" ? IndianRupee : Globe;

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

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
              <Link href="/" className="transition hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/services/websites"
                className="transition hover:text-accent"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-accent">{cp.city}</span>
            </nav>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <MapPin className="h-3 w-3 text-teal" strokeWidth={2} />
              {cp.city}
              {cp.state ? `, ${cp.state}` : ""} — {cp.country}
            </div>

            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {cp.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              {cp.subheading}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton href="/contact">Get a free quote</CtaButton>
              <CtaButton href="#pricing" variant="secondary">
                See pricing
              </CtaButton>
            </div>

            {/* Key stats */}
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  Websites from
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  {cp.priceFrom}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  Delivery
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  7-14 days
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  PageSpeed
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  95+
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  Projects shipped
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  15+
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* ════════ LOCAL CONTEXT ════════ */}
      <Section
        eyebrow={`Why ${cp.city} businesses choose us`}
        title={`Website development built for ${cp.city}.`}
      >
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted">
              {cp.localContext}
            </p>

            {cp.timezoneNote && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-bg-raised p-4">
                <Clock
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-ink-muted">{cp.timezoneNote}</p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Custom design — no templates",
                "Next.js — not WordPress",
                "SEO-ready from day one",
                "You own the source code",
                "30 days post-launch support",
              ].map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-ink-muted"
                >
                  <CheckCircle2
                    className="h-3 w-3 text-teal"
                    strokeWidth={2}
                  />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="md:col-span-5">
            <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
              Industries we serve in {cp.city}
            </h3>
            <div className="grid gap-2">
              {cp.industries.map((ind) => (
                <div
                  key={ind}
                  className="flex items-center gap-3 rounded-lg border border-line bg-bg-raised px-4 py-3"
                >
                  <Building2
                    className="h-3.5 w-3.5 flex-shrink-0 text-accent"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-ink-muted">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ════════ PRICING ════════ */}
      <Section
        id="pricing"
        eyebrow="Transparent pricing"
        title={`Website & app development pricing for ${cp.city}.`}
        lead={`Fixed scope, fixed price, fixed timeline. ${cp.currency === "INR" ? "INR pricing with GST invoices." : "USD pricing with proper invoicing."}`}
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <OfferCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* ════════ FAQ ════════ */}
      <Section
        eyebrow="FAQ"
        title={`Common questions about web development in ${cp.city}.`}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {cp.faq.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-line bg-bg-raised p-6"
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

      {/* ════════ RELATED KEYWORDS ════════ */}
      <Section className="border-t border-line bg-white/[0.015]">
        <div className="rounded-2xl border border-line bg-bg p-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
            People also search for
          </p>
          <div className="flex flex-wrap gap-2">
            {cp.relatedKeywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-line bg-bg-raised px-3 py-1.5 text-xs text-ink-muted"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════ OTHER CITIES ════════ */}
      <Section
        eyebrow="We also serve"
        title="Website development across India, GCC & the US."
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cityPages
            .filter((c) => c.slug !== cp.slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-bg-raised px-4 py-3 transition hover:border-accent/40"
              >
                <MapPin
                  className="h-3.5 w-3.5 flex-shrink-0 text-ink-subtle group-hover:text-accent"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-ink-muted group-hover:text-ink">
                  {c.city}
                </span>
                <ArrowRight className="ml-auto h-3 w-3 text-ink-subtle opacity-0 transition group-hover:opacity-100 group-hover:text-accent" />
              </Link>
            ))}
        </div>
      </Section>

      {/* ════════ CTA ════════ */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 text-center sm:p-16">
          <GridBg />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Ready to build your {cp.city} business website?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Tell us what you need. We&rsquo;ll send a fixed-price quote within
              24 hours. No meetings required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CtaButton href="/contact">Get a free quote</CtaButton>
              <CtaButton
                href="https://wa.me/918109745019?text=Hi%20WebVoyant!%20I%20need%20a%20website%20for%20my%20business%20in%20${encodeURIComponent(cp.city)}."
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
