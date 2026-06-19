export type CaseStudy = {
  slug: string;
  client: string;
  vertical: string;
  headline: string;
  summary: string;
  stack: string[];
  highlights: { label: string; value: string }[];
  problem: string;
  approach: string[];
  outcome: string;
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
  year: number;
};

export const cases: CaseStudy[] = [
  {
    slug: "mouriqualai",
    client: "MouriqualAI",
    vertical: "Enterprise SaaS",
    headline: "Complex Figma → enterprise SaaS site, shipped in 7 days.",
    summary:
      "An AI-powered QA platform with a dense, visual-heavy Figma file and a hard launch deadline. We delivered the production site — animations, dashboards, integration logos, the full storytelling arc — pixel-perfect, in one week.",
    stack: ["Next.js 14", "Tailwind", "Framer Motion", "Vercel"],
    highlights: [
      { label: "Time to launch", value: "7 days" },
      { label: "Figma fidelity", value: "Pixel-perfect" },
      { label: "Lighthouse (Performance)", value: "97" },
    ],
    problem:
      "MouriqualAI had a polished Figma and a launch window measured in days, not months. They needed a partner who could read complex visual design — animated dashboards, integration grids, metric ribbons — and translate it into a production-grade site without compromise.",
    approach: [
      "Set up a Next.js + Tailwind base on Day 1 with the design tokens extracted directly from Figma — colors, spacing, type scale, motion curves.",
      "Built section by section against a live staging URL the team could review every morning.",
      "Reproduced the motion language — page-load reveals, animated dashboards, scroll-triggered metric ribbons — using Framer Motion with restraint, no jank.",
      "Hardened the build: Lighthouse pass, OG cards, SEO meta, structured data.",
    ],
    outcome:
      "Live at mouriqualai.com in 7 days. The site became the company's primary surface for enterprise pilot conversations, and the build cost a fraction of what a comparable agency had quoted with a 10-week timeline.",
    liveUrl: "https://mouriqualai.com",
    year: 2026,
  },
  {
    slug: "vaidik-ecosystems",
    client: "Vaidik Ecosystems",
    vertical: "Education / Accelerator",
    headline: "Dated accelerator site, completely redesigned in 48 hours.",
    summary:
      "India's first virtual accelerator had outgrown its old site. We redesigned and reshipped the entire web presence — programs, founder profiles, testimonials, contact flows — in two days. Live, indexed, replacing the old site in the same week.",
    stack: ["Next.js", "Tailwind", "Headless CMS"],
    highlights: [
      { label: "Redesign to live", value: "48 hours" },
      { label: "Sections rebuilt", value: "9" },
      { label: "Mobile parity", value: "100%" },
    ],
    problem:
      "Vaidik Ecosystems is a credible accelerator with 200+ coached founders, but the public site looked five years older than the brand. They needed a credibility-grade redesign — fast, with no downtime.",
    approach: [
      "Information architecture rewrite first — programs, founder profiles, testimonials, the program-pathway logic — before any pixels.",
      "Built modular section components so future content edits don't need an engineer.",
      "Mobile parity from the start, not a retrofit.",
      "Migrated DNS without downtime; old links 301'd to new structure.",
    ],
    outcome:
      "Live at vaidikecosystems.com within 48 hours of kickoff. The team can now publish new programs and founder stories themselves without a dev queue.",
    liveUrl: "https://vaidikecosystems.com",
    year: 2026,
  },
  {
    slug: "adinath-matrimony",
    client: "Adinath Vivah (template)",
    vertical: "Community Platform",
    headline: "White-label matrimony platform for the Jain community.",
    summary:
      "A verified-profile matrimony platform built specifically for the Digambar and Shwetambar Jain communities — with family-involvement workflows, gotra matching, and community-trusted moderation. This is the template we now deploy for any cultural or religious community.",
    stack: ["Next.js", "Postgres", "Tailwind", "WhatsApp Business"],
    highlights: [
      { label: "Deployment time", value: "3 weeks" },
      { label: "White-label", value: "Per community" },
      { label: "Pricing model", value: "Setup + monthly" },
    ],
    problem:
      "Closed cultural and religious communities have a real matchmaking problem: mainstream apps don't understand family involvement, verification, or community-specific values. Most communities want a platform of their own, but commissioning custom software is out of reach.",
    approach: [
      "Built one configurable platform — verified profiles, family contact flows, private match approval, admin moderation tools — that can be re-skinned per community in days.",
      "Designed for community moderators, not just end-users. The admin dashboard is the actual product for community leadership.",
      "Built WhatsApp Business onboarding because that's where these communities actually live.",
      "Now offered as a deployment: ₹2L setup + ₹25k / month hosting and support. Each community gets their own branded instance on their own domain.",
    ],
    outcome:
      "Live as a demonstration deployment for the Jain community at aadinath-jain-matrimony.vercel.app. Now available as a productised offering for any community looking for a private, verified matchmaking platform.",
    liveUrl: "https://aadinath-jain-matrimony.vercel.app",
    year: 2026,
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
