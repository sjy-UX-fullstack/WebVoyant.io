import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-accent text-bg shadow-glow hover:bg-accent-soft focus-visible:ring-accent",
  secondary:
    "border border-line bg-white/[0.02] text-ink hover:border-white/20 hover:bg-white/[0.04] focus-visible:ring-white/30",
  ghost:
    "text-ink-muted hover:text-ink focus-visible:ring-white/30",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const content = (
    <>
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
