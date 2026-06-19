export const site = {
  name: "WebVoyant",
  legalName: "WebVoyant Tech",
  domain: "webvoyant.io",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.webvoyant.io",
  tagline: "We build websites, apps & AI products that grow your business.",
  description:
    "WebVoyant is a design-led development studio. We build business websites, e-commerce stores, web & mobile apps, and AI-powered products — delivered fast, priced fair, and built to last.",
  calUsername:
    process.env.NEXT_PUBLIC_CAL_USERNAME ?? "webvoyant/discovery",
  email: "team@webvoyant.io",
  social: {
    x: "https://x.com/webvoyant",
    github: "https://github.com/webvoyant",
    linkedin: "https://www.linkedin.com/company/webvoyant",
  },
  regions: ["India", "GCC", "United States"],
  nav: [
    { href: "/services/websites", label: "Websites" },
    { href: "/services/product-development", label: "Apps" },
    { href: "/services/ai-mvp", label: "AI Products" },
    { href: "/work", label: "Work" },
    { href: "/#products", label: "Our Products" },
    { href: "/contact", label: "Contact" },
  ],
};

export type Site = typeof site;
