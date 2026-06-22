import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { GridBg } from "@/components/grid-bg";
import { PrintButton } from "@/components/print-button";
import { JsonLd } from "@/components/jsonld";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Resume — Sanjay Thakur",
  description:
    "Sanjay Thakur — AI-First Product Engineer · Design Engineer. Shipped 8 production products in 12 months. Founder of WebVoyant.",
  path: "/resume",
});

type ShippedProduct = {
  name: string;
  category: string;
  oneLiner: string;
  status: "Live" | "Early access";
  url?: string;
};

const shippedProducts: ShippedProduct[] = [
  {
    name: "ComplianceOS",
    category: "B2B SaaS · India DPDP",
    oneLiner:
      "DPDP Act 2023 compliance OS — consent mgmt, DSR portal, breach wizard, vendor risk, AI policy generator (22 Indian languages).",
    status: "Early access",
    url: "https://compliance-os-web-ten.vercel.app/",
  },
  {
    name: "DirectorsCut.ai",
    category: "AI Studio · Agencies",
    oneLiner:
      "AI creative director. Brief → full ad campaign with WhatsApp approval gates. Built end-to-end for Indian agencies.",
    status: "Live",
    url: "https://directorscut-ai.vercel.app/",
  },
  {
    name: "VIC Pro",
    category: "Investor Platform",
    oneLiner:
      "Subscription platform for accredited investors. Auth, database, admin dashboard, bid workflow, due-diligence vault.",
    status: "Live",
    url: "https://vic-pro-web.vercel.app/",
  },
  {
    name: "Mehfil",
    category: "Consumer + B2B",
    oneLiner:
      "Premium event management & corporate gifting. 4-step booking flow with instant cost estimator.",
    status: "Live",
    url: "https://mehfil-zeta.vercel.app/",
  },
  {
    name: "Vybe",
    category: "Consumer Social",
    oneLiner:
      "Curated social/dating platform with daily drops, social aura scores, online-to-offline venue integration.",
    status: "Live",
    url: "https://vybe-rosy-six.vercel.app/investor",
  },
  {
    name: "BiteSwipe",
    category: "Consumer AI",
    oneLiner:
      "AI vegetable scanner → personalised recipes with audio cooking steps and dietary preferences.",
    status: "Live",
    url: "https://biteswipe-five.vercel.app/",
  },
  {
    name: "Aadinath Vivah",
    category: "Community Platform",
    oneLiner:
      "White-label matrimony platform for closed cultural communities. Verified profiles, family workflows, AI moderation.",
    status: "Live",
    url: "https://aadinath-jain-matrimony.vercel.app/",
  },
  {
    name: "Enterprise AI Platform (client)",
    category: "Enterprise SaaS",
    oneLiner:
      "Pixel-perfect enterprise SaaS site shipped from complex Figma in 7 days. Live customer surface.",
    status: "Live",
  },
];

const experience = [
  {
    role: "Founder & Principal Engineer",
    company: "WebVoyant — AI-First Product Studio",
    period: "2025 – Present",
    location: "Remote",
    bullets: [
      "Founded an AI-first product studio. Shipped 8 production products in 12 months — solo, end-to-end.",
      "Built ComplianceOS (B2B SaaS), DirectorsCut.ai, VIC Pro, and Mehfil from scratch — architecture, code, deploy.",
      "Delivered a pixel-perfect enterprise SaaS site for an AI client in 7 days from complex Figma.",
      "Stack: Next.js 14 · TypeScript · Postgres · Supabase · Stripe / Razorpay · Vercel · Claude / GPT APIs.",
    ],
  },
  {
    role: "Visual Experience Lead (Websites, UI/UX, Videos)",
    company: "MOURI Tech Pvt. Ltd.",
    period: "Jan 2024 – Present",
    location: "Hyderabad · Hybrid",
    bullets: [
      "Leading website design & development, UI/UX for internal + external products.",
      "Heading audio-visual content creation — explainer videos, learning videos, corporate films.",
    ],
  },
  {
    role: "Sr. Creative Specialist (Web Videos & UI/UX)",
    company: "MOURI Tech Pvt. Ltd.",
    period: "Jul 2021 – Dec 2023",
    location: "Hyderabad",
    bullets: [
      "Owned UI/UX design and web video production across product surfaces and marketing.",
    ],
  },
  {
    role: "Founder & Filmmaker",
    company: "SJY Productions",
    period: "Apr 2016 – 2021",
    location: "India",
    bullets: [
      "Directed, edited, produced 150+ ad films, explainer videos, and documentaries.",
      "Corporate films for 35+ clients including MPIDC, Smart City Indore, and brands across MP + Mumbai.",
    ],
  },
];

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI-First Development",
    items: [
      "Claude / GPT / Cursor",
      "v0 · Lovable · Bolt",
      "Prompt eng. & evals",
      "RAG / pgvector",
      "Agent orchestration",
    ],
  },
  {
    title: "Product Engineering",
    items: [
      "Next.js 14 (App Router)",
      "TypeScript · React",
      "Tailwind · shadcn/ui",
      "Postgres + RLS",
      "Supabase · Drizzle",
      "Stripe · Razorpay",
      "Vercel · Edge",
    ],
  },
  {
    title: "Design + Visual",
    items: [
      "Figma (advanced)",
      "Design systems & variants",
      "Photoshop",
      "Premiere Pro / After Effects",
      "WordPress Elementor Pro",
      "Pixel-perfect Figma → code",
    ],
  },
  {
    title: "Filmmaking & Storytelling",
    items: [
      "150+ ad films directed",
      "Explainer / corporate / docs",
      "35+ commercial clients",
      "Edge for DevRel / DA roles",
    ],
  },
];

export default function ResumePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanjay Thakur",
    jobTitle: "AI-First Product Engineer",
    url: `${site.url}/resume`,
    email: "sanjay005.sanju@gmail.com",
    telephone: "+91-81097-45019",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhar",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/sanjay-thakur-b42652101/",
      site.url,
    ],
    worksFor: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
  };

  return (
    <>
      <JsonLd data={personSchema} />

      {/* HERO */}
      <section className="resume-hero relative overflow-hidden border-b border-line">
        <div className="no-print">
          <GridBg />
        </div>
        <Container className="relative pb-12 pt-16 sm:pb-16 sm:pt-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                Resume · Updated 2026
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Sanjay Thakur
              </h1>
              <p className="mt-4 font-display text-lg font-medium text-ink sm:text-xl">
                AI-First Product Engineer · Design Engineer · Solo Studio
                Operator
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
                Designer + filmmaker turned AI-first product builder. Shipped
                8 production products in 12 months — solo, AI-accelerated,
                end-to-end. Founder of{" "}
                <Link
                  href="/"
                  className="text-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  WebVoyant
                </Link>
                .
              </p>

              <div className="no-print mt-7">
                <PrintButton />
              </div>
            </div>

            {/* Contact card */}
            <aside className="contact-strip w-full max-w-sm shrink-0 rounded-2xl border border-line bg-white/[0.025] p-6 md:w-auto">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                Contact
              </p>
              <ul className="space-y-3 text-sm">
                <ContactRow
                  Icon={Mail}
                  label="sanjay005.sanju@gmail.com"
                  href="mailto:sanjay005.sanju@gmail.com"
                />
                <ContactRow
                  Icon={Phone}
                  label="+91 81097 45019"
                  href="tel:+918109745019"
                />
                <ContactRow
                  Icon={Globe}
                  label="webvoyant.vercel.app"
                  href="https://webvoyant.vercel.app"
                />
                <ContactRow
                  Icon={Linkedin}
                  label="linkedin.com/in/sanjay-thakur-b42652101"
                  href="https://www.linkedin.com/in/sanjay-thakur-b42652101/"
                />
                <ContactRow
                  Icon={MapPin}
                  label="Dhar, MP, India · Remote-first"
                />
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* SHIPPED PRODUCTS — the hero of the resume */}
      <section className="border-b border-line">
        <Container className="py-14 sm:py-16">
          <SectionHeader
            eyebrow="Shipped in 2025–2026"
            title="Eight production products. Solo. AI-accelerated."
            note="Each link below is a working product — not a screenshot."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {shippedProducts.map((p) => (
              <ProductRow key={p.name} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* EXPERIENCE */}
      <section className="border-b border-line">
        <Container className="py-14 sm:py-16">
          <SectionHeader eyebrow="Experience" title="Where I've worked." />

          <ol className="mt-10 space-y-8">
            {experience.map((e) => (
              <li
                key={`${e.role}-${e.period}`}
                className="grid gap-4 md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    {e.period}
                  </p>
                  <p className="mt-1 text-xs text-ink-subtle">{e.location}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {e.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{e.company}</p>
                  <ul className="mt-3 space-y-2">
                    {e.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                      >
                        <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SKILLS */}
      <section className="border-b border-line">
        <Container className="py-14 sm:py-16">
          <SectionHeader eyebrow="Capabilities" title="What I work with." />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-line bg-white/[0.02] p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {g.title}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {g.items.map((i) => (
                    <li key={i} className="text-sm text-ink-muted">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EDUCATION */}
      <section className="border-b border-line">
        <Container className="py-14 sm:py-16">
          <SectionHeader eyebrow="Education" title="" />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                period: "2015 – 2017",
                degree: "M.Sc — TV Production & Management",
                org: "EMRC, DAVV Indore",
              },
              {
                period: "2012 – 2015",
                degree: "B.Sc — Electronic Media",
                org: "EMRC, DAVV Indore",
              },
              {
                period: "2001 – 2012",
                degree: "I–XII Standard",
                org: "Kendriya Vidyalaya, Dhar",
              },
            ].map((ed) => (
              <div
                key={ed.degree}
                className="rounded-2xl border border-line bg-white/[0.02] p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {ed.period}
                </p>
                <p className="mt-3 font-display text-base font-semibold text-ink">
                  {ed.degree}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{ed.org}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSER */}
      <section className="no-print">
        <Container className="py-14 text-center">
          <p className="text-sm text-ink-muted">
            Open to{" "}
            <span className="text-ink">
              Design Engineer · AI Engineer · Forward Deployed Engineer ·
              Founding Engineer
            </span>{" "}
            roles, remote.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:sanjay005.sanju@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg shadow-glow transition hover:bg-accent-soft"
            >
              <Mail className="h-4 w-4" /> Reach out
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-5 py-3 text-sm font-medium text-ink transition hover:border-white/20"
            >
              See the studio
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ---------- Small subcomponents below ---------- */

function ContactRow({
  Icon,
  label,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  href?: string;
}) {
  const content = (
    <span className="inline-flex items-center gap-2.5 text-sm text-ink-muted">
      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
      <span className="text-ink">{label}</span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="block hover:text-ink"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function SectionHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <header>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      {title && (
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
      )}
      {note && (
        <p className="mt-2 text-sm text-ink-subtle">{note}</p>
      )}
    </header>
  );
}

function ProductRow({ product }: { product: ShippedProduct }) {
  const Wrapper: React.ElementType = product.url ? "a" : "div";
  const wrapperProps = product.url
    ? { href: product.url, target: "_blank", rel: "noreferrer" }
    : {};

  const isLive = product.status === "Live";

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col rounded-2xl border border-line bg-white/[0.02] p-5 transition ${
        product.url ? "hover:border-accent/40" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-semibold text-ink">
            {product.name}
          </h3>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
            {product.category}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-raised px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              isLive
                ? "bg-teal shadow-[0_0_10px_rgba(45,212,191,0.7)]"
                : "bg-accent shadow-[0_0_10px_rgba(14,165,233,0.7)]"
            }`}
          />
          <span className={isLive ? "text-teal" : "text-accent"}>
            {product.status}
          </span>
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {product.oneLiner}
      </p>
      {product.url && (
        <span className="mt-4 inline-flex items-center gap-1 text-xs text-accent">
          {new URL(product.url).hostname.replace("www.", "")}{" "}
          <ArrowUpRight
            className="h-3 w-3 transition group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </span>
      )}
    </Wrapper>
  );
}
