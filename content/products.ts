export type ProductStatus = "live" | "early-access" | "in-development";

export type Product = {
  slug: string;
  name: string;
  domain?: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  href?: string;
  highlights?: string[];
  featured?: boolean;
};

export const products: Product[] = [
  // ===== FEATURED FLAGSHIP TIER =====
  {
    slug: "complianceos",
    name: "ComplianceOS",
    domain: "compliance-os-web-ten.vercel.app",
    tagline: "The operating system for DPDP Act 2023 compliance.",
    description:
      "Consent management, DSR portal, breach wizard, vendor risk, RoPA with auto-discovery, and an AI policy generator in 22 Indian languages. Built for Indian businesses preparing for DPDP enforcement.",
    category: "B2B SaaS · India DPDP",
    status: "early-access",
    href: "https://compliance-os-web-ten.vercel.app/",
    featured: true,
    highlights: [
      "DPDP Act 2023 + IAB TCF 2.3",
      "Data residency: AWS Mumbai",
      "INR pricing · UPI Autopay · GST invoices",
    ],
  },
  {
    slug: "directorscut",
    name: "DirectorsCut.ai",
    domain: "directorscut-ai.vercel.app",
    tagline: "The AI creative director that gets approved.",
    description:
      "Drop a brief, get a full ad campaign back — concepts, script, characters, shots, final cut — with your client approving each stage from their phone over WhatsApp. Built for Indian creative agencies.",
    category: "AI Studio · Agencies",
    status: "live",
    href: "https://directorscut-ai.vercel.app/",
    featured: true,
    highlights: [
      "WhatsApp approval gates",
      "3-day average campaign turnaround",
      "Pay-per-credit pricing",
    ],
  },
  {
    slug: "vic-pro",
    name: "VIC Pro",
    domain: "vic-pro-web.vercel.app",
    tagline: "Pro-only access to top real estate deals.",
    description:
      "A subscription platform giving accredited investors early access to vetted real estate deals, bidding workflows, and a due-diligence vault — under one workspace. Live with auth, database, and admin dashboard.",
    category: "Investor Platform",
    status: "live",
    href: "https://vic-pro-web.vercel.app/",
    featured: true,
    highlights: [
      "Sign-up + auth (live)",
      "Admin dashboard",
      "Bid workflow + DD vault",
    ],
  },
  {
    slug: "mehfil",
    name: "Mehfil",
    domain: "mehfil-zeta.vercel.app",
    tagline: "Premium event management & corporate gifting.",
    description:
      "Plan a social event (birthday, baby shower, kitty party) or a corporate engagement (training, seminars, branded gifting) in four steps — category, scale, package, instant estimate. 20% token to lock the date.",
    category: "Consumer + B2B",
    status: "live",
    href: "https://mehfil-zeta.vercel.app/",
    featured: true,
    highlights: [
      "4-step booking flow",
      "Instant cost estimator",
      "Social + corporate verticals",
    ],
  },

  // ===== ALSO SHIPPED =====
  {
    slug: "vybe",
    name: "Vybe",
    tagline: "Not just dating — a curated social platform.",
    description:
      "Exclusivity-driven matching with daily drops, social aura scores, and online-to-offline meetups at partner venues. Live as a pitch-ready prototype with investor deck.",
    category: "Consumer Social",
    status: "live",
    href: "https://vybe-rosy-six.vercel.app/investor",
    highlights: ["Daily curated matches", "O2O venue integration", "Investor deck live"],
  },
  {
    slug: "biteswipe",
    name: "BiteSwipe",
    tagline: "Snap vegetables → AI recipes with audio steps.",
    description:
      "Scan what's in your fridge, get personalised recipe options with dietary preferences and audio cooking guidance.",
    category: "Consumer AI",
    status: "live",
    href: "https://biteswipe-five.vercel.app",
    highlights: ["Visual ingredient recognition", "Audio cooking steps", "Dietary personalisation"],
  },
  {
    slug: "community-platform",
    name: "Community Platform",
    tagline: "White-label matrimony / social for any community.",
    description:
      "The productised version of the Jain matrimony build (Aadinath Vivah). Deploy a branded, verified platform for any cultural, religious, or alumni community in 3–4 weeks.",
    category: "Productised Service",
    status: "live",
    href: "/services/community-platform",
    highlights: ["Verified profiles", "Family workflows", "₹2L setup + ₹25k / mo"],
  },
];

export const productStatusLabel: Record<ProductStatus, string> = {
  live: "Live",
  "early-access": "Early access",
  "in-development": "In development",
};

export const featuredProducts = products.filter((p) => p.featured);
export const alsoShippedProducts = products.filter((p) => !p.featured);
