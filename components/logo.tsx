import Link from "next/link";
import { site } from "@/content/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink ${className ?? ""}`}
    >
      <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent/15 text-accent ring-1 ring-accent/40">
        <span className="block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(14,165,233,0.7)]" />
      </span>
      <span>
        {site.name}
        <span className="text-accent">.</span>
      </span>
    </Link>
  );
}
