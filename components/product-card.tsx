import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Product } from "@/content/products";
import { productStatusLabel } from "@/content/products";

const statusDotClass: Record<Product["status"], string> = {
  live: "bg-teal shadow-[0_0_10px_rgba(45,212,191,0.7)]",
  "early-access": "bg-accent shadow-[0_0_10px_rgba(14,165,233,0.7)]",
  "in-development": "bg-ink-subtle",
};

const statusTextClass: Record<Product["status"], string> = {
  live: "text-teal",
  "early-access": "text-accent",
  "in-development": "text-ink-subtle",
};

export function ProductCard({ product }: { product: Product }) {
  const isExternal = product.href?.startsWith("http");
  const Wrapper: React.ElementType = product.href ? (isExternal ? "a" : Link) : "div";
  const wrapperProps = product.href
    ? isExternal
      ? { href: product.href, target: "_blank", rel: "noreferrer" }
      : { href: product.href }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition ${
        product.href ? "hover:border-accent/40" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-bg text-accent">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">
              {product.name}
            </h3>
            {product.domain && (
              <p className="font-mono text-[10px] text-ink-subtle">
                {product.domain}
              </p>
            )}
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-raised px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${statusDotClass[product.status]}`}
          />
          <span className={statusTextClass[product.status]}>
            {productStatusLabel[product.status]}
          </span>
        </span>
      </div>

      <p className="mt-4 font-display text-sm font-medium text-ink">
        {product.tagline}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {product.description}
      </p>

      {product.highlights && (
        <ul className="mt-5 space-y-1.5">
          {product.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs text-ink-muted"
            >
              <span className="mt-1 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent/70" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
          {product.category}
        </span>
        {product.href && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-muted transition group-hover:border-accent/50 group-hover:text-accent">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        )}
      </div>
    </Wrapper>
  );
}
