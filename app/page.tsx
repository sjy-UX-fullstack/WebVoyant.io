import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Sparkles,
  Users,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { GridBg } from "@/components/grid-bg";
import { OfferCard } from "@/components/offer-card";
import { CaseCard } from "@/components/case-card";
import { ProductCard } from "@/components/product-card";
import { JsonLd } from "@/components/jsonld";
import { services } from "@/content/services";
import { cases } from "@/content/cases";
import { posts } from "@/content/posts";
import { featuredProducts, alsoShippedProducts } from "@/content/products";
import { site } from "@/content/site";

const serviceHighlights = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Corporate sites, portfolios, landing pages — designed to convert, SEO-ready, delivered in 7–14 days.",
    price: "From ₹25,000",
    href: "/services/websites",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Product catalogue, cart, checkout with Razorpay/UPI, order notifications. Your online store, live in 2 weeks.",
    price: "From ₹50,000",
    href: "/services/websites",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    desc: "Full-stack web apps and Play Store Android apps — with auth, payments, admin dashboard, and push notifications.",
    price: "From ₹1,00,000",
    href: "/services/product-development",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Products",
    desc: "Real AI inside your product — RAG, generation, vision, agents. Not chatbot decoration. Production-grade.",
    price: "From ₹3,00,000",
    href: "/services/ai-mvp",
  },
];

const trustPoints = [
  "9+ years in UI/UX design",
  "6 live products shipped",
  "Websites delivered in 7 days",
  "Fixed price — no surprises",
];

const principles = [
  {
    title: "Design-first, always",
    body: "Every project starts with design. You see and approve the look before we write a single line of code. No surprises.",
  },
  {
    title: "Fixed scope, fixed price",
    body: "You know what you're getting and what you're paying — before we start. New scope = change-order, never a surprise on the invoice.",
  },
  {
    title: "Fast delivery, real deadlines",
    body: "Websites in 7–14 days. Apps in 3–5 weeks. We use AI to compress build cycles, not to cut corners.",
  },
  {
    title: "You own everything",
    body: "Source code on GitHub, domain in your name, analytics in your account. Walk away anytime with everything you paid for.",
  },
];

const numbers = [
  { k: "Projects shipped", v: "15+" },
  { k: "Websites from", v: "₹25K" },
  { k: "Avg. delivery", v: "10 days" },
  { k: "Regions served", v: "3" },
];

export default function HomePage() {
  const featuredPosts = posts.slice(0, 3);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    url: site.url,
    description: site.description,
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.oneLiner,
      url: `${site.url}/services/${s.slug}`,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        price: s.priceFromInr.replace(/[^0-9]/g, ""),
      },
    })),
  };

  return (
    <>
      <JsonLd data={homeSchema} />

      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative pb-20 pt-16 sm:pt-24 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              Now booking for July 2026
            </div>

            <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Websites, apps &amp;{" "}
              <span className="bg-gradient-to-r from-accent via-accent-soft to-teal bg-clip-text text-transparent">
                AI products
              </span>{" "}
              that grow your business.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted sm:text-lg">
              From a ₹25,000 business website to a full AI-powered SaaS
              product — we design, build, and ship it. Fixed price. Fast
              delivery. No lock-in. Serving India, GCC &amp; the US.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CtaButton href="/contact">Get a free quote</CtaButton>
              <CtaButton href="#services" variant="secondary">
                See pricing
              </CtaButton>
            </div>

            <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {numbers.map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    {s.k}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-ink">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ════════ WHAT WE BUILD — Service Highlights ════════ */}
      <Section
        id="what-we-build"
        eyebrow="What we build"
        title="Everything your business needs online."
        lead="Whether you need a simple website or a complex AI product — we've got a tier that fits your budget and timeline."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {serviceHighlights.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col rounded-2xl border border-line bg-white/[0.02] p-7 transition hover:border-accent/40 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03]">
                  <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {s.price}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ════════ PRICING / OFFERS ════════ */}
      <Section
        id="services"
        eyebrow="Transparent pricing"
        title="Pick the tier that fits. No hidden fees."
        lead="INR pricing for India, USD for international. Every engagement is fixed scope, fixed price, fixed timeline."
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <OfferCard key={s.slug} service={s} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-subtle">
          Need something custom?{" "}
          <Link
            href="/contact"
            className="text-accent underline-offset-4 hover:underline"
          >
            Tell us what you need →
          </Link>
        </p>
      </Section>

      {/* ════════ TRUST — Why WebVoyant ════════ */}
      <Section
        eyebrow="Why WebVoyant"
        title="Not just another freelancer."
        lead="A studio with real products in production, not a solo freelancer who'll ghost you mid-project."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-bg-raised p-7"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {trustPoints.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm text-ink-muted"
            >
              <CheckCircle2
                className="h-4 w-4 text-teal"
                strokeWidth={2}
              />
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* ════════ OUR PRODUCTS — trust signal ════════ */}
      <Section
        id="products"
        eyebrow="Our own products"
        title="We don't just build for clients. We ship our own."
        lead="6 products in production. Each one proves we can take an idea from zero to live — because we've done it with our own money on the line."
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4 border-t border-line pt-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                Also shipped
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                More from the studio.
              </h3>
            </div>
            <p className="hidden text-xs text-ink-subtle sm:block">
              {alsoShippedProducts.length} additional products live
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {alsoShippedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* ════════ CLIENT WORK ════════ */}
      <Section
        id="work"
        eyebrow="Client work"
        title="Recent shipped projects."
        lead="Real URLs you can open right now."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.slug} study={c} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/work" variant="secondary">
            All case studies
          </CtaButton>
        </div>
      </Section>

      {/* ════════ NOTES ════════ */}
      <Section
        eyebrow="Notes"
        title="Engineering write-ups"
        lead="Opinionated, in production, written by the people building it."
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-bg-raised p-7 transition hover:border-white/20"
            >
              <div className="flex items-center gap-2">
                {p.tags.slice(0, 1).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent"
                  >
                    {t}
                  </span>
                ))}
                <span className="text-[10px] text-ink-subtle">&middot;</span>
                <span className="text-[10px] text-ink-subtle">
                  {p.readingTime}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm text-ink-muted">
                {p.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent">
                Read <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ════════ CLOSER CTA ════════ */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 sm:p-16">
          <div className="glow-ring" />
          <GridBg />
          <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Let&rsquo;s talk
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
                Get a free quote in 24 hours.
              </h2>
              <p className="mt-4 max-w-xl text-ink-muted">
                Tell us what you need — a website, an app, an AI product, or
                all three. We&rsquo;ll send you a fixed-price quote with a
                delivery date within one business day. No pitch deck, no
                pressure.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-line bg-bg p-6">
                <ul className="space-y-3 text-sm text-ink-muted">
                  {[
                    "Free quote in 24 hours",
                    "Fixed price — no hourly billing",
                    "INR or USD pricing",
                    "Websites from ₹25,000",
                    "Apps from ₹1,00,000",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal"
                        strokeWidth={2}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <CtaButton href="/contact" className="w-full justify-center">
                    Get a free quote
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
