import type { Metadata } from "next";
import { Container } from "@/components/container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: `Terms governing use of ${site.url} and engagement with ${site.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="py-20 sm:py-28">
      <article className="max-w-prose">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink">
          Terms
        </h1>
        <p className="mt-6 text-sm text-ink-subtle">
          Placeholder content. Replace with the terms reviewed by your counsel
          before launch. Paid engagements are governed by a signed MSA + SOW —
          these terms cover use of the marketing site only.
        </p>

        <div className="mt-10 space-y-8 text-ink-muted">
          {[
            {
              h: "Use of this site",
              p: `${site.url} is provided as an informational marketing site. You may browse, share, and quote it with attribution. You may not scrape, mirror, or republish it in bulk.`,
            },
            {
              h: "Engagements",
              p: "Any paid engagement is governed exclusively by a Master Services Agreement and Statement of Work signed by both parties. The content of this site is not an offer or a contract.",
            },
            {
              h: "Intellectual property",
              p: "Content on this site (copy, designs, code samples) is owned by WebVoyant Tech. Open-source code samples are released under their stated licences.",
            },
            {
              h: "Liability",
              p: "We provide the site as-is. We're not liable for indirect or consequential damages arising from your reliance on its content.",
            },
            {
              h: "Contact",
              p: `Questions about these terms: ${site.email}.`,
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
