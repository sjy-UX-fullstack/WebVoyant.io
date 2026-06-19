import { cn } from "@/lib/cn";
import { Container } from "./container";

export function Section({
  children,
  className,
  eyebrow,
  title,
  lead,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title || lead) && (
          <header className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(14,165,233,0.7)]" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
                {lead}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
