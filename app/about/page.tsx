import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { GridBg } from "@/components/grid-bg";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About WebVoyant — Design-Led Development Studio",
  description:
    "WebVoyant is a design-led development studio. We build websites, apps, and AI products for businesses across India, GCC, and the US. 9+ years of experience, 15+ projects shipped, 6 own products in production.",
  path: "/about",
});

const beliefs = [
  {
    n: "01",
    title: "Design first, always",
    body: "Every project starts with design in Figma. You see and approve the look before we write a single line of code. No surprises, no wasted build time, no 'it looked different in my head' moments.",
  },
  {
    n: "02",
    title: "AI is our build tool, not just a buzzword",
    body: "We use AI across our entire process — design exploration, code generation, copywriting, QA — to compress what used to be a 12-week build into 2-4 weeks. When we build AI into your product, it moves a real metric.",
  },
  {
    n: "03",
    title: "Fixed price, not hourly billing",
    body: "You know what you're paying before we start. New scope = change-order, never a surprise invoice. This keeps both sides honest and ships product faster.",
  },
  {
    n: "04",
    title: "You own everything",
    body: "Source code on GitHub. Domain in your name. Analytics in your account. Walk away anytime with everything you paid for. No vendor lock-in, no hostage negotiations.",
  },
  {
    n: "05",
    title: "Boring stack, interesting product",
    body: "Next.js, React Native, Postgres, Tailwind. The interesting problem is your product, not our infrastructure. Your next developer can read our code without a 3-day onboarding.",
  },
  {
    n: "06",
    title: "We ship our own products too",
    body: "ComplianceOS, DirectorsCut.ai, Mehfil, Vybe — 6 products in production, built with our own money. We know what it takes to go from zero to live, not just from spec to staging.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              About
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Design-led. AI-accelerated. Built to ship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              WebVoyant is a design-led development studio. We build websites,
              apps, and AI products for businesses across India, GCC, and the US.
              We also ship our own products — ComplianceOS, DirectorsCut.ai,
              Mehfil — so we know what it takes to go from idea to production,
              not just spec to staging.
            </p>
          </div>
        </Container>
      </section>

      <Section eyebrow="Why we exist" title="The four things we believe.">
        <div className="grid gap-5 sm:grid-cols-2">
          {beliefs.map((b) => (
            <div
              key={b.n}
              className="rounded-2xl border border-line bg-bg-raised p-7"
            >
              <p className="font-mono text-xs text-ink-subtle">{b.n}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Where we operate"
        title="Three regions, three pricing currencies."
        className="border-t border-line bg-white/[0.015]"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              label: "India",
              body: "Our home. INR pricing, GST invoices, UPI Autopay, Razorpay-native. ComplianceOS is built India-first for the DPDP Act.",
            },
            {
              label: "GCC",
              body: "Dubai, Abu Dhabi, Riyadh. USD or AED pricing. Async-friendly, GMT+4-aligned for sync calls when you want them.",
            },
            {
              label: "United States",
              body: "USD pricing, written-first delivery, time-zone-respectful. Stripe-native billing for US entities.",
            },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-line bg-bg p-6"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
                {r.label}
              </div>
              <p className="mt-3 text-sm text-ink-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-line bg-bg-raised p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Talk to us before you write the spec.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            The cheapest way to find out we&rsquo;re not a fit is a 30-minute call.
            No pitch deck.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a discovery call</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
