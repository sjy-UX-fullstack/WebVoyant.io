import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { GridBg } from "@/components/grid-bg";
import { posts } from "@/content/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Notes",
  description:
    "Engineering write-ups from the WebVoyant team. Opinionated, in production, by the people who built it.",
  path: "/blog",
});

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              Notes
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Engineering, in writing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              The decisions, trade-offs, and migrations we actually ship — not
              the demos.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <ul className="divide-y divide-line border-y border-line">
          {sorted.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-ink-subtle">
                    {new Date(p.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-2xl font-semibold text-ink transition group-hover:text-accent">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">
                    {p.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent">
                    Read · {p.readingTime}{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
