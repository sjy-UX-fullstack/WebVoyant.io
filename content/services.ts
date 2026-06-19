export type Service = {
  slug: string;
  name: string;
  tag: string;
  headline: string;
  oneLiner: string;
  priceFromInr: string;
  priceFromUsd: string;
  duration: string;
  popular?: boolean;
  outcomes: string[];
  process: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
  notAFitIf: string[];
};

export const services: Service[] = [
  // ===== TIER 1: VOLUME — Websites & E-commerce =====
  {
    slug: "websites",
    name: "Website & E-Commerce",
    tag: "Business websites · landing pages · online stores",
    headline: "A website that works as hard as your business.",
    oneLiner:
      "From business websites to full e-commerce stores — designed to convert, optimised for Google, and delivered in 7–14 days. No templates. No WordPress. Clean, fast, modern code you actually own.",
    priceFromInr: "₹25,000",
    priceFromUsd: "$300",
    duration: "7–14 days",
    popular: true,
    outcomes: [
      "Custom-designed, mobile-first website — no cookie-cutter templates",
      "SEO-ready from day one — sitemap, meta tags, structured data, fast load times",
      "E-commerce with Razorpay / Stripe / UPI payment integration",
      "WhatsApp & call-to-action buttons wired for lead capture",
      "Google Analytics + Meta Pixel installed and tested",
      "Hosted on Vercel — blazing fast globally, zero downtime",
      "Domain + SSL setup included",
    ],
    process: [
      {
        step: "Discovery call (Day 1)",
        detail:
          "30-minute call. We understand your business, audience, and goals. You share logos, brand colours, content, and reference sites you like.",
      },
      {
        step: "Design (Days 2–4)",
        detail:
          "We design 2–3 key pages in Figma. You review and approve. One round of revisions included.",
      },
      {
        step: "Development (Days 5–10)",
        detail:
          "We build it in Next.js — not WordPress. You get a staging link to review live progress daily.",
      },
      {
        step: "Launch (Days 11–14)",
        detail:
          "Domain connected, analytics installed, WhatsApp button live, Google indexed. Your site is live.",
      },
    ],
    faq: [
      {
        q: "Why not WordPress?",
        a: "WordPress sites are slow, get hacked constantly, and need plugins for everything. Our Next.js sites load in under 1 second, need zero plugins, and score 95+ on Google PageSpeed. Better SEO, better conversions, zero maintenance headaches.",
      },
      {
        q: "Can you add a blog?",
        a: "Yes. We build blogs with a simple content system — no CMS login needed. Just send us the post and we publish it, or we set up a headless CMS for you to manage yourself.",
      },
      {
        q: "Do you handle hosting?",
        a: "Yes. We deploy on Vercel — free tier handles most business sites. If your traffic grows, hosting scales automatically. No server management ever.",
      },
      {
        q: "What about e-commerce? Can you build an online store?",
        a: "Yes. Product catalogue, cart, checkout with Razorpay/Stripe/UPI, order notifications on WhatsApp, basic inventory. Not Shopify-scale, but perfect for 10–500 products.",
      },
      {
        q: "What if I only need a landing page?",
        a: "Landing pages start at ₹15,000. Single page, mobile-first, contact form, analytics. Delivered in 3–5 days.",
      },
      {
        q: "Do I get the source code?",
        a: "Yes. You own everything. Full source code on GitHub, domain in your name, analytics in your account.",
      },
    ],
    notAFitIf: [
      "You want a free Wix/GoDaddy template — we build custom only",
      "You need 10,000+ product SKUs — use Shopify for that scale",
      "You want to manage the site yourself on WordPress — we don't do WordPress",
    ],
  },

  // ===== TIER 2: MID — Product & App Development =====
  {
    slug: "product-development",
    name: "Product & App Development",
    tag: "Web apps · mobile apps · Play Store",
    headline: "Your product idea, live on web and Play Store.",
    oneLiner:
      "We build web applications and Android apps from your idea or Figma — with real auth, real payments, real database. Ship to Play Store or launch on the web in 3–5 weeks. Fixed price. No surprises.",
    priceFromInr: "₹1,00,000",
    priceFromUsd: "$1,200",
    duration: "3–5 weeks",
    outcomes: [
      "Production-grade web app or Android app (React Native + Expo)",
      "User authentication — email, phone OTP, or Google sign-in",
      "Payment integration — Razorpay, Stripe, UPI, or in-app purchases",
      "Admin dashboard to manage users, content, and orders",
      "Play Store submission handled (if Android app)",
      "Push notifications, analytics, and crash reporting built in",
      "Post-launch: 30 days of bug fixes included",
    ],
    process: [
      {
        step: "Scoping (Week 1)",
        detail:
          "We define the MVP together — the smallest version a customer would pay for. You get a fixed price, feature list, and delivery date.",
      },
      {
        step: "Design (Week 1–2)",
        detail:
          "UI/UX design in Figma. You approve screens before we write a single line of code.",
      },
      {
        step: "Build (Weeks 2–4)",
        detail:
          "AI-accelerated development. Staging link live from day one. Weekly video walkthroughs of progress.",
      },
      {
        step: "Testing & Launch (Week 4–5)",
        detail:
          "Real-device testing, Play Store submission, domain setup, analytics wired. You go live.",
      },
      {
        step: "Post-launch (30 days)",
        detail:
          "Bug fixes and minor tweaks included. Feature requests priced separately as add-ons.",
      },
    ],
    faq: [
      {
        q: "Do you build iOS apps?",
        a: "We build with React Native — one codebase for both Android and iOS. Android + Play Store is included. iOS + App Store submission is an add-on (₹30,000 extra) because Apple requires a paid developer account.",
      },
      {
        q: "Can you build a SaaS product?",
        a: "Yes. Multi-tenant apps, subscription billing, team management, dashboards — this is what we do. If it needs AI features, check our AI-Powered MVP tier.",
      },
      {
        q: "What tech stack do you use?",
        a: "Next.js + Postgres + Tailwind for web. React Native + Expo for mobile. Supabase for auth and database. Vercel for hosting. Battle-tested, scalable, and your next developer can read the code.",
      },
      {
        q: "What if my idea is too big for this budget?",
        a: "We scope ruthlessly. Every idea has a ₹1L version and a ₹10L version. We find the smallest version that proves your market, ship that, and expand from revenue.",
      },
    ],
    notAFitIf: [
      "You want a Swiggy/Zomato clone with 500 features on day one — start smaller",
      "You need only a static website — check our Website tier instead",
      "You want to own the code but not pay for the build — we don't do equity-only deals",
    ],
  },

  // ===== TIER 3: PREMIUM — AI-Powered MVP =====
  {
    slug: "ai-mvp",
    name: "AI-Powered MVP",
    tag: "AI inside the product · not just chatbots",
    headline: "Ship a real AI product in 3–5 weeks.",
    oneLiner:
      "We build production-grade products with real AI in the stack — RAG, generation, classification, vision, agents — not chatbot decoration. Fixed scope, fixed price, and code your next engineer can actually read.",
    priceFromInr: "₹3,00,000",
    priceFromUsd: "$3,500",
    duration: "3–5 weeks",
    outcomes: [
      "A production-grade web app with real AI features — not a demo",
      "LLM integration — generation, summarisation, classification, or vision",
      "RAG pipeline if your product needs knowledge from your own documents",
      "Auth, payments (Razorpay / Stripe), and the core workflow",
      "LLM cost controls — rate limiting, caching, model routing",
      "Analytics + AI observability (cost per call, latency, accuracy tracking)",
      "A handover doc your next engineer can read in an afternoon",
    ],
    process: [
      {
        step: "Scoping week",
        detail:
          "We narrow the build to one wedge — the smallest AI-powered thing a customer would pay for. You leave the week with a fixed price and delivery date.",
      },
      {
        step: "Architecture",
        detail:
          "Stack decisions, data model, AI integration points, prompt design, and the deploy path. Written, not improvised.",
      },
      {
        step: "Build sprints",
        detail:
          "AI-accelerated build, two-week sprints. Video walkthrough every Friday. Staging link live from day one.",
      },
      {
        step: "Beta hardening",
        detail:
          "Real users, real bugs. AI cost ceilings set, observability turned on, hallucination safeguards tested.",
      },
      {
        step: "Launch + 30 days",
        detail:
          "Marketing surface, payment flow, monitoring dashboard. We stay on for one month of bug fixes, on us.",
      },
    ],
    faq: [
      {
        q: "What does 'AI-first' actually mean in your build?",
        a: "Two things. First, we use AI tools across the build to compress timelines. Second, we add real AI features inside the product — generation, classification, retrieval, vision — where they move a real metric. Not chatbot decoration.",
      },
      {
        q: "Which AI models do you use?",
        a: "We're model-agnostic. GPT-4o, Claude, Gemini, or open-source (Llama, Mistral) — we pick the right model for your use case based on cost, speed, and accuracy. We never lock you into one provider.",
      },
      {
        q: "What if scope changes mid-build?",
        a: "We hold the scope. If new scope appears, we price it as a change-order — never as a surprise on the invoice.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. Mutual NDA signed before the scoping call.",
      },
    ],
    notAFitIf: [
      "You want a chatbot bolted onto a landing page and call that 'AI'",
      "You don't have a clear problem AI should solve — let's figure that out in a scoping call first",
      "You need only a website or a simple app — check our other tiers instead",
    ],
  },

  // ===== TIER 4: RECURRING — Community Platform =====
  {
    slug: "community-platform",
    name: "Community Platform",
    tag: "Matrimony · social · community",
    headline: "White-label community platform for your group.",
    oneLiner:
      "A verified, private matchmaking and social platform for any cultural, religious, or alumni community. We deploy a branded instance in 3–4 weeks, then run it for you on a monthly plan.",
    priceFromInr: "₹2,00,000 setup + ₹25,000/mo",
    priceFromUsd: "$2,500 setup + $300/mo",
    duration: "3–4 weeks to deploy",
    outcomes: [
      "A branded, custom-domain platform for your community",
      "Verified profiles, family controls, private matching workflows",
      "Admin dashboard for community moderators",
      "AI-assisted moderation for safety and impersonation",
      "WhatsApp Business onboarding flow built in",
      "Ongoing hosting, support, security patching, and feature updates",
    ],
    process: [
      {
        step: "Discovery (Week 1)",
        detail:
          "We sit with your community leadership to lock branding, profile fields, verification policy, and moderation rules.",
      },
      {
        step: "Deployment (Weeks 2–3)",
        detail:
          "Custom-domain build, branding applied, content seeded, admin team trained.",
      },
      {
        step: "Soft launch (Week 4)",
        detail:
          "100 verified seed members onboarded. We watch the first interactions alongside you.",
      },
      {
        step: "Ongoing",
        detail:
          "Monthly hosting + support. Quarterly feature drops. New features added across the fleet without you paying for development.",
      },
    ],
    faq: [
      {
        q: "Who owns the data?",
        a: "Your community organisation does. Always. We are a processor; you are the controller. Written into the agreement.",
      },
      {
        q: "Can we white-label fully?",
        a: "Yes — custom domain, branding, app name, app store listing. No 'powered by WebVoyant' on the user-facing surface.",
      },
      {
        q: "What about community partners?",
        a: "If you bring a community to us, we share 20–30% of the recurring revenue for the life of the deployment.",
      },
    ],
    notAFitIf: [
      "You want to build a Tinder competitor — this is for closed, verified communities",
      "You can't commit to community moderators — the platform needs human eyes",
      "You expect free hosting forever after a one-time fee — we run a recurring model",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
