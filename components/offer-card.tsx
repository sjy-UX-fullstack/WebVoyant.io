import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";

export function OfferCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-7 transition hover:border-accent/40 hover:bg-white/[0.04]"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition group-hover:opacity-100" />

      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
        {service.tag}
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink">
        {service.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {service.oneLiner}
      </p>

      <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-subtle">
            Starts at
          </p>
          <p className="font-display text-2xl font-bold text-ink">
            {service.priceFromInr}
          </p>
          <p className="mt-0.5 font-mono text-[10px] text-ink-subtle">
            or {service.priceFromUsd} · {service.duration}
          </p>
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition group-hover:border-accent/40 group-hover:text-accent">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
