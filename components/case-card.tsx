import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/cases";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition hover:border-teal/40"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
          {study.vertical}
        </p>
        <span className="font-mono text-[10px] text-ink-subtle">
          {study.year}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold text-ink">
        {study.headline}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm text-ink-muted">
        {study.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {study.stack.slice(0, 4).map((s) => (
          <span
            key={s}
            className="rounded-full border border-line bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-ink-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="text-sm text-ink">{study.client}</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-muted transition group-hover:border-teal/50 group-hover:text-teal">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
