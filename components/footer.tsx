import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "./container";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { featuredProducts } from "@/content/products";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-line bg-bg">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {site.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {site.regions.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
                  {r}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.x}
                aria-label="Twitter / X"
                className="text-ink-muted hover:text-ink"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={site.social.github}
                aria-label="GitHub"
                className="text-ink-muted hover:text-ink"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                className="text-ink-muted hover:text-ink"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Flagship products"
            items={featuredProducts.map((p) => ({
              label: p.name,
              href: p.href ?? "/#products",
            }))}
          />
          <FooterCol
            title="Services"
            items={services.map((s) => ({
              label: s.name,
              href: `/services/${s.slug}`,
            }))}
          />
          <FooterCol
            title="Company"
            items={[
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Notes", href: "/blog" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-xs text-ink-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono">
            Built in Next.js · Hosted on Vercel · Status: shipping
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
        {title}
      </p>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-ink-muted transition hover:text-ink"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
