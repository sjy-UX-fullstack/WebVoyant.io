import type { Metadata } from "next";
import { Container } from "@/components/container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy",
  description: `How ${site.legalName} handles personal data on the marketing site and during engagements.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="py-20 sm:py-28">
      <article className="prose-invert max-w-prose">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink">
          Privacy
        </h1>
        <p className="mt-6 text-sm text-ink-subtle">
          Placeholder content. Replace with the privacy policy reviewed by your
          counsel before launch.
        </p>

        <div className="mt-10 space-y-8 text-ink-muted">
          {[
            {
              h: "What we collect",
              p: `On webvoyant.io we collect aggregate analytics (page views, country) and the personal data you submit via the contact form or Cal.com (name, email, company, and the context of your enquiry).`,
            },
            {
              h: "What we don't collect",
              p: "We don't run third-party advertising trackers. We don't sell, rent, or share your data with brokers or marketing networks.",
            },
            {
              h: "Where it lives",
              p: "Marketing analytics: Plausible (EU-hosted). Product analytics: PostHog. Calendar bookings: Cal.com. Email: Google Workspace + Resend. Each provider's own DPA applies.",
            },
            {
              h: "Engagement data",
              p: "During paid engagements we may process client and end-user data inside repositories and infrastructure you own. We act as a processor; you remain the controller. DPAs are signed alongside the MSA.",
            },
            {
              h: "Your rights",
              p: `Email ${site.email} to access, correct, or delete the personal data we hold about you. We respond within 30 days.`,
            },
          ].map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-semibold text-ink">
                {s.h}
              </h2>
              <p className="mt-2 text-sm leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </article>
    </Container>
  );
}
