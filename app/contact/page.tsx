import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, ShieldCheck, FileText, Clock } from "lucide-react";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { GridBg } from "@/components/grid-bg";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Get a free quote",
  description:
    "Tell us what you need — website, app, or AI product. We'll send a fixed-price quote within 24 hours. No pitch deck, no pressure.",
  path: "/contact",
});

export default function ContactPage() {
  const steps = [
    {
      icon: FileText,
      title: "Fill the form",
      body: "Tell us what you need, your budget range, and timeline. Takes 2 minutes.",
    },
    {
      icon: Clock,
      title: "We quote in 24 hours",
      body: "You get a fixed-price quote with scope, timeline, and deliverables. No vague estimates.",
    },
    {
      icon: ShieldCheck,
      title: "We build, you review",
      body: "You see progress daily on a staging link. Pay only after you approve.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Get a free quote in 24 hours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Tell us what you need — a website, an app, or an AI product.
              We&rsquo;ll review your requirements and send a fixed-price quote
              with a clear delivery date. No meetings required.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <ContactForm />
            <p className="mt-4 text-center text-xs text-ink-subtle">
              Your details are sent directly to our WhatsApp. No spam, no
              mailing list, no third parties.
            </p>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-ink">
              How it works
            </h2>
            <ol className="mt-6 space-y-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-line bg-bg-raised text-accent">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] text-ink-subtle">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-display text-base font-semibold text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">{s.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Direct contact options */}
            <div className="mt-10 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                Or reach us directly
              </p>

              <a
                href="https://wa.me/918109745019?text=Hi%20WebVoyant!%20I%20need%20a%20quote%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-bg p-4 text-ink transition hover:border-[#25D366]/40 hover:bg-white/[0.03]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </span>
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-xs text-ink-muted">+91 8109745019</p>
                </div>
              </a>

              <a
                href="tel:+918109745019"
                className="flex items-center gap-3 rounded-xl border border-line bg-bg p-4 text-ink transition hover:border-accent/40 hover:bg-white/[0.03]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-sm font-medium">Call us</p>
                  <p className="text-xs text-ink-muted">+91 8109745019</p>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-xl border border-line bg-bg p-4 text-ink transition hover:border-accent/40 hover:bg-white/[0.03]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-ink-muted">{site.email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
