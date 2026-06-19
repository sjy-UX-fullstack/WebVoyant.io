export type LandingPage = {
  slug: string;
  /** Primary keyword for <title> and H1 */
  keyword: string;
  /** Meta title — 55-60 chars, includes primary keyword */
  metaTitle: string;
  /** Meta description — 150-160 chars, includes CTA */
  metaDescription: string;
  /** H1 headline */
  headline: string;
  /** Hero subheading — 2-3 sentences */
  subheading: string;
  /** Region targeting */
  region: "india" | "gcc" | "usa" | "global";
  /** Primary CTA label */
  cta: string;
  /** Link to the parent service page */
  serviceSlug: string;
  /** Starting price shown */
  priceFrom: string;
  /** Delivery timeline */
  timeline: string;
  /** Trust stats shown below hero */
  stats: { label: string; value: string }[];
  /** What's included — bullet points */
  includes: string[];
  /** Why us — differentiators */
  whyUs: string[];
  /** FAQ for AEO/GEO — these become FAQ schema */
  faq: { q: string; a: string }[];
  /** Long-tail keywords for internal linking and content */
  relatedKeywords: string[];
  /** Industries this page targets (for content blocks) */
  industries?: string[];
};

export const landingPages: LandingPage[] = [
  // ══════════════════════════════════════════════════════════
  // 1. WEBSITE DESIGN — INDIA
  // ══════════════════════════════════════════════════════════
  {
    slug: "website-design-company-india",
    keyword: "website design company India",
    metaTitle: "Website Design Company in India | Custom Sites from ₹25,000",
    metaDescription:
      "Custom-designed business websites from ₹25,000. No WordPress, no templates. SEO-ready, mobile-first, delivered in 7-14 days. Get a free quote today.",
    headline: "India's fastest website design studio.",
    subheading:
      "Custom-coded, mobile-first websites that rank on Google and convert visitors into customers. No WordPress. No templates. No monthly fees. Fixed price from ₹25,000, delivered in 7-14 days.",
    region: "india",
    cta: "Get a free quote",
    serviceSlug: "websites",
    priceFrom: "₹25,000",
    timeline: "7-14 days",
    stats: [
      { label: "Websites delivered", value: "15+" },
      { label: "Starting price", value: "₹25K" },
      { label: "Avg. delivery", value: "10 days" },
      { label: "Google PageSpeed", value: "95+" },
    ],
    includes: [
      "Custom design in Figma — no cookie-cutter templates",
      "Built in Next.js — loads in under 1 second",
      "SEO-ready: sitemap, meta tags, structured data, fast Core Web Vitals",
      "Mobile-first responsive design across all devices",
      "WhatsApp & call buttons wired for lead capture",
      "Google Analytics + Meta Pixel installed and tested",
      "Domain + SSL setup included",
      "Full source code on GitHub — you own everything",
    ],
    whyUs: [
      "No WordPress — our sites score 95+ on Google PageSpeed, zero plugin headaches",
      "Fixed price, not hourly billing — you know the cost before we start",
      "9+ years of UI/UX design experience across 6 live products",
      "We use AI to compress build cycles — not to cut quality",
      "30 days of post-launch support included free",
    ],
    faq: [
      {
        q: "How much does a website cost in India in 2026?",
        a: "A custom-designed, SEO-ready business website at WebVoyant starts at ₹25,000. This includes custom Figma design, Next.js development, mobile-first responsive layout, SEO setup, Google Analytics, domain + SSL configuration, and full source code ownership. Landing pages start at ₹15,000. E-commerce stores with payment integration start at ₹50,000.",
      },
      {
        q: "Why not use WordPress for my business website?",
        a: "WordPress sites are slow (average 3-5 second load), get hacked frequently (43% of all hacked sites run WordPress), and require constant plugin updates. Our Next.js sites load in under 1 second, score 95+ on Google PageSpeed, need zero plugins, and have zero maintenance headaches. Better SEO, better conversions, lower total cost of ownership.",
      },
      {
        q: "How long does it take to build a website in India?",
        a: "At WebVoyant, a standard business website is delivered in 7-14 days. This includes discovery (Day 1), design in Figma (Days 2-4), development (Days 5-10), and launch with domain + analytics (Days 11-14). Landing pages can be delivered in 3-5 days.",
      },
      {
        q: "Do you provide SEO with the website?",
        a: "Yes. Every website includes foundational SEO: XML sitemap, robots.txt, meta titles and descriptions, Open Graph tags, JSON-LD structured data, clean semantic HTML, fast Core Web Vitals scores, and mobile-first design. We don't do ongoing SEO campaigns, but the site is built to rank from day one.",
      },
      {
        q: "Can I see my website before it goes live?",
        a: "Yes. You get a staging link from Day 5. You can review live progress daily, request changes, and approve the final version before we connect your domain and go live.",
      },
      {
        q: "Do I own the website code?",
        a: "Yes. Full source code is delivered on GitHub, domain is registered in your name, analytics are in your account. You own everything and can walk away anytime with everything you paid for.",
      },
    ],
    relatedKeywords: [
      "best website design company India",
      "affordable website development India",
      "custom website design India",
      "business website developer India",
      "hire website designer India",
      "Next.js website development India",
      "SEO-friendly website design India",
      "website design cost India 2026",
    ],
    industries: [
      "Restaurants & cafes",
      "Real estate agencies",
      "Healthcare clinics",
      "Law firms",
      "Education & coaching",
      "Retail & D2C brands",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 2. E-COMMERCE DEVELOPMENT
  // ══════════════════════════════════════════════════════════
  {
    slug: "ecommerce-website-development",
    keyword: "ecommerce website development India",
    metaTitle: "E-Commerce Website Development India | Online Store from ₹50K",
    metaDescription:
      "Custom e-commerce stores with Razorpay, UPI & Stripe. Product catalogue, cart, checkout — live in 2 weeks. No Shopify fees. Get a free quote.",
    headline: "Your online store, live in 2 weeks.",
    subheading:
      "Custom-built e-commerce websites with product catalogue, cart, checkout, and payment integration — Razorpay, Stripe, or UPI. No Shopify monthly fees. No WooCommerce headaches. You own the code.",
    region: "india",
    cta: "Get a free quote",
    serviceSlug: "websites",
    priceFrom: "₹50,000",
    timeline: "10-14 days",
    stats: [
      { label: "E-commerce sites built", value: "5+" },
      { label: "Starting price", value: "₹50K" },
      { label: "Avg. delivery", value: "12 days" },
      { label: "Payment gateways", value: "3+" },
    ],
    includes: [
      "Product catalogue with categories, filters, and search",
      "Shopping cart and checkout flow",
      "Payment integration — Razorpay, Stripe, UPI, or COD",
      "Order notifications on WhatsApp and email",
      "Basic inventory management",
      "Mobile-first design that works on every device",
      "SEO-ready: product schema, sitemap, fast load times",
      "Admin panel to manage products and orders",
    ],
    whyUs: [
      "No monthly platform fees — unlike Shopify (₹2,000+/mo) or WooCommerce hosting costs",
      "Custom design, not a template — your store looks unique",
      "Indian payment gateways built in — Razorpay, UPI, COD",
      "Blazing fast — our stores score 95+ on PageSpeed, meaning better Google rankings",
      "You own the code — no vendor lock-in ever",
    ],
    faq: [
      {
        q: "How much does an e-commerce website cost in India?",
        a: "A custom e-commerce store at WebVoyant starts at ₹50,000 for up to 50 products with Razorpay/UPI integration, cart, checkout, and WhatsApp notifications. Stores with 100-500 products, advanced filters, and multiple payment gateways start at ₹80,000-₹1,50,000.",
      },
      {
        q: "Is it better than Shopify for Indian businesses?",
        a: "For businesses with 10-500 products, yes. Shopify charges ₹2,000+/month plus 2% transaction fees on non-Shopify Payments. Our custom stores have zero monthly platform fees, zero transaction fees beyond the payment gateway's cut, and you own the code. For 10,000+ SKU operations, Shopify may be better suited.",
      },
      {
        q: "Which payment gateways do you integrate?",
        a: "We integrate Razorpay (most popular in India), Stripe (for international payments), UPI direct payments, and Cash on Delivery (COD). We can also add PhonePe, Paytm, or any gateway with an API.",
      },
      {
        q: "Can customers get WhatsApp order updates?",
        a: "Yes. We build WhatsApp Business API integration so your customers get order confirmation, shipping updates, and delivery notifications on WhatsApp automatically.",
      },
    ],
    relatedKeywords: [
      "ecommerce website development cost India",
      "online store development India",
      "custom ecommerce store India",
      "Razorpay integration website",
      "Shopify alternative India",
      "ecommerce website design India",
      "D2C brand website development",
      "product catalogue website India",
    ],
    industries: [
      "Fashion & apparel",
      "Food & beverages",
      "Electronics & gadgets",
      "Beauty & wellness",
      "Home decor",
      "D2C brands",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 3. AI PRODUCT DEVELOPMENT (Sutra AI keyword overlap)
  // ══════════════════════════════════════════════════════════
  {
    slug: "ai-development-company",
    keyword: "AI development company",
    metaTitle: "AI Development Company | Ship AI Products in 3-5 Weeks",
    metaDescription:
      "Production-grade AI products — RAG, generation, vision, agents. Not chatbot decoration. Fixed price from $3,500. Ship in 3-5 weeks. Get a free quote.",
    headline: "Ship a real AI product. Not a chatbot demo.",
    subheading:
      "We build production-grade products with real AI in the stack — RAG pipelines, LLM generation, classification, computer vision, and AI agents. Fixed scope, fixed price, and code your next engineer can actually read. Serving India, GCC, and the US.",
    region: "global",
    cta: "Get a free quote",
    serviceSlug: "ai-mvp",
    priceFrom: "₹3,00,000 / $3,500",
    timeline: "3-5 weeks",
    stats: [
      { label: "AI products shipped", value: "4+" },
      { label: "Starting price", value: "$3,500" },
      { label: "Avg. delivery", value: "4 weeks" },
      { label: "Models supported", value: "6+" },
    ],
    includes: [
      "Production-grade web app with real AI features — not a demo",
      "LLM integration — GPT-4o, Claude, Gemini, or open-source models",
      "RAG pipeline for knowledge retrieval from your own documents",
      "AI-powered classification, summarisation, or generation",
      "Auth, payments (Razorpay / Stripe), and core business workflow",
      "LLM cost controls — rate limiting, caching, model routing",
      "AI observability dashboard — cost per call, latency, accuracy tracking",
      "Handover documentation your next engineer can read in an afternoon",
    ],
    whyUs: [
      "We've shipped 4 AI products in production — ComplianceOS, DirectorsCut.ai, and more",
      "Model-agnostic — GPT-4o, Claude, Gemini, Llama, Mistral — we pick the right model for your use case",
      "Eval-driven development — we measure AI accuracy, not vibes",
      "Fixed price — not time-and-material billing that spirals",
      "AI-accelerated build — we use AI tools across our own process to ship 3x faster",
    ],
    faq: [
      {
        q: "What is AI product development?",
        a: "AI product development is the process of building software products that use artificial intelligence — such as large language models (LLMs), computer vision, or machine learning — to solve real business problems. Unlike adding a chatbot to a landing page, real AI product development involves data pipelines, model selection, prompt engineering, evaluation frameworks, cost controls, and production deployment.",
      },
      {
        q: "How much does it cost to build an AI product?",
        a: "At WebVoyant, AI-powered MVPs start at ₹3,00,000 ($3,500 USD). This includes a production-grade web app with real AI features, auth, payments, LLM cost controls, and 30 days of post-launch support. Enterprise AI platforms with custom training or multi-model architectures are priced separately after a scoping call.",
      },
      {
        q: "Which AI models do you use?",
        a: "We're model-agnostic. We use GPT-4o, Claude (Anthropic), Gemini (Google), and open-source models like Llama and Mistral. We pick the right model based on your use case — optimising for cost, speed, accuracy, and data privacy requirements. We never lock you into one provider.",
      },
      {
        q: "What is the difference between an AI chatbot and an AI product?",
        a: "An AI chatbot is a conversational interface bolted onto a website. An AI product uses AI as a core part of its value proposition — document analysis, automated compliance checking, intelligent content generation, predictive analytics, or computer vision. We build AI products, not chatbot decorations.",
      },
      {
        q: "How do you handle AI hallucinations in production?",
        a: "We use eval-driven development: a set of 100-300 test cases scored against reference outputs, run before every deployment. We add guardrails — output validation, confidence thresholds, human-in-the-loop for high-stakes decisions — and monitor accuracy in production with an observability dashboard.",
      },
      {
        q: "Can you build AI features for my existing product?",
        a: "Yes. We can add AI features — summarisation, classification, search, generation — to your existing web or mobile application. We integrate via API, so we don't need to rebuild your product. Pricing depends on scope; reach out for a free assessment.",
      },
    ],
    relatedKeywords: [
      "AI product development company",
      "AI MVP development",
      "AI software development company India",
      "build AI product",
      "LLM application development",
      "RAG pipeline development",
      "AI-powered SaaS development",
      "hire AI developers India",
      "AI transformation company",
      "generative AI development services",
      "AI for business",
      "custom AI solutions",
    ],
    industries: [
      "Healthcare & medtech",
      "Financial services & fintech",
      "Legal & compliance",
      "Education & edtech",
      "E-commerce & retail",
      "Manufacturing",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 4. MVP DEVELOPMENT
  // ══════════════════════════════════════════════════════════
  {
    slug: "mvp-development-company",
    keyword: "MVP development company",
    metaTitle: "MVP Development Company | Build & Ship Your MVP in 3-5 Weeks",
    metaDescription:
      "Turn your idea into a live product in 3-5 weeks. Fixed price from ₹1L. Auth, payments, admin dashboard included. No equity, no hourly billing.",
    headline: "Your MVP, live in 3-5 weeks. Not 6 months.",
    subheading:
      "We build minimum viable products that real users can pay for — with authentication, payments, admin dashboard, and a deployment pipeline. Fixed scope, fixed price. We use AI to build 3x faster, so you launch before your runway runs out.",
    region: "global",
    cta: "Get a free quote",
    serviceSlug: "product-development",
    priceFrom: "₹1,00,000 / $1,200",
    timeline: "3-5 weeks",
    stats: [
      { label: "MVPs shipped", value: "8+" },
      { label: "Starting price", value: "₹1L" },
      { label: "Avg. delivery", value: "4 weeks" },
      { label: "Success rate", value: "100%" },
    ],
    includes: [
      "UI/UX design in Figma — approved before development starts",
      "Production-grade web or mobile app (Next.js + React Native)",
      "User authentication — email, phone OTP, or Google sign-in",
      "Payment integration — Razorpay, Stripe, UPI",
      "Admin dashboard to manage users, content, and orders",
      "Push notifications and analytics built in",
      "Play Store submission (for Android apps)",
      "30 days of post-launch bug fixes included",
    ],
    whyUs: [
      "We scope ruthlessly — every idea has a ₹1L version. We find it and ship it first",
      "AI-accelerated development — we use AI tools to build 3x faster than traditional agencies",
      "6 products in production ourselves — we know what it takes to go from zero to live",
      "Fixed price — you know the cost before we write a single line of code",
      "No equity deals — you pay us, you own everything, we move on to the next project",
    ],
    faq: [
      {
        q: "How much does it cost to build an MVP in India?",
        a: "At WebVoyant, MVPs start at ₹1,00,000 ($1,200 USD) for a web application with auth, payments, and an admin dashboard. Mobile apps (Android + Play Store) start at ₹1,50,000. AI-powered MVPs start at ₹3,00,000. We scope ruthlessly to find the smallest version that proves your market.",
      },
      {
        q: "How long does it take to build an MVP?",
        a: "3-5 weeks from kickoff to launch. Week 1 is scoping and design. Weeks 2-4 are development with a staging link live from day one. Week 4-5 is testing and launch. We use AI tools across our build to compress timelines.",
      },
      {
        q: "What tech stack do you use for MVPs?",
        a: "Next.js + Postgres + Tailwind for web apps. React Native + Expo for mobile. Supabase for auth and database. Vercel for hosting. This stack is battle-tested, scalable, and your next developer can read the code without a 3-day onboarding.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. Mutual NDA signed before the scoping call. Your idea stays confidential.",
      },
      {
        q: "Do you build for equity?",
        a: "No. We're a service business — you pay us a fixed price, we deliver a working product, you own 100% of the code and IP. This keeps both sides honest and aligned.",
      },
    ],
    relatedKeywords: [
      "MVP development company India",
      "build MVP fast",
      "startup MVP development",
      "minimum viable product development",
      "hire MVP developer",
      "MVP development cost India",
      "SaaS MVP development",
      "rapid MVP development",
      "MVP app development",
      "product development company India",
    ],
    industries: [
      "SaaS startups",
      "Fintech",
      "Healthtech",
      "Edtech",
      "Marketplace platforms",
      "B2B tools",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 5. MOBILE APP DEVELOPMENT
  // ══════════════════════════════════════════════════════════
  {
    slug: "mobile-app-development-india",
    keyword: "mobile app development India",
    metaTitle: "Mobile App Development India | Android & iOS Apps from ₹1L",
    metaDescription:
      "Android & iOS app development from ₹1,00,000. React Native, Play Store submission, push notifications, payments. Delivered in 3-5 weeks.",
    headline: "Your app, live on Play Store in 3-5 weeks.",
    subheading:
      "We build Android and iOS apps using React Native — one codebase, both platforms. Auth, payments, push notifications, analytics, and Play Store submission included. Fixed price. No surprises.",
    region: "india",
    cta: "Get a free quote",
    serviceSlug: "product-development",
    priceFrom: "₹1,00,000",
    timeline: "3-5 weeks",
    stats: [
      { label: "Apps shipped", value: "4+" },
      { label: "Starting price", value: "₹1L" },
      { label: "Delivery time", value: "3-5 weeks" },
      { label: "Platforms", value: "Android + iOS" },
    ],
    includes: [
      "Cross-platform app — Android + iOS from one React Native codebase",
      "UI/UX design in Figma before development starts",
      "User auth — email, phone OTP, Google sign-in",
      "Payment integration — Razorpay, Stripe, in-app purchases",
      "Push notifications (Firebase Cloud Messaging)",
      "Admin dashboard to manage app content and users",
      "Play Store submission handled by us",
      "30 days of post-launch bug fixes included",
    ],
    whyUs: [
      "React Native — one codebase for both Android and iOS, saving 40% development cost",
      "Play Store submission handled end-to-end by us",
      "We've shipped 4 apps to production including Vybe and BiteSwipe",
      "AI-accelerated build — 3x faster than traditional agencies",
      "Post-launch support included — 30 days of bug fixes, free",
    ],
    faq: [
      {
        q: "How much does app development cost in India in 2026?",
        a: "At WebVoyant, mobile app development starts at ₹1,00,000 for an Android app with auth, payments, and Play Store submission. Cross-platform (Android + iOS) starts at ₹1,30,000. AI-powered apps start at ₹3,00,000. Cost depends on complexity — a simple utility app costs less than a marketplace with real-time features.",
      },
      {
        q: "Do you build native or cross-platform apps?",
        a: "We build cross-platform apps using React Native + Expo. This means one codebase runs on both Android and iOS, saving 40% development cost. Performance is near-native — React Native powers Instagram, Facebook, and Discord.",
      },
      {
        q: "Do you handle Play Store submission?",
        a: "Yes. We handle the entire Play Store submission process — app listing, screenshots, privacy policy, content rating, review response. You get a live app on the Play Store. iOS App Store submission is an add-on (₹30,000 extra) due to Apple's paid developer account requirement.",
      },
      {
        q: "Can you add AI features to my app?",
        a: "Yes. We build AI-powered apps with features like smart search, content generation, image recognition, and chatbots. AI-powered apps start at ₹3,00,000 and include LLM integration, cost controls, and accuracy monitoring.",
      },
    ],
    relatedKeywords: [
      "app development company India",
      "Android app development India",
      "React Native app development India",
      "hire app developer India",
      "app development cost India 2026",
      "Play Store app development",
      "iOS app development India",
      "cross-platform app development",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 6. WEBSITE DESIGN — DUBAI / GCC
  // ══════════════════════════════════════════════════════════
  {
    slug: "website-design-company-dubai",
    keyword: "website design company Dubai",
    metaTitle: "Website Design Company Dubai | Custom Websites from $300",
    metaDescription:
      "Custom website design in Dubai & UAE from $300. No WordPress templates. SEO-ready, mobile-first, delivered in 7-14 days. Free quote in 24 hours.",
    headline: "Dubai's smartest website design partner.",
    subheading:
      "Custom-coded, mobile-first websites for businesses across Dubai, Abu Dhabi, and the GCC. No WordPress. No Wix. No monthly platform fees. SEO-ready, blazing fast, and delivered in 7-14 days. USD or AED pricing.",
    region: "gcc",
    cta: "Get a free quote",
    serviceSlug: "websites",
    priceFrom: "$300",
    timeline: "7-14 days",
    stats: [
      { label: "GCC clients served", value: "3+" },
      { label: "Starting price", value: "$300" },
      { label: "Avg. delivery", value: "10 days" },
      { label: "PageSpeed score", value: "95+" },
    ],
    includes: [
      "Custom design in Figma — no templates, no themes",
      "Built in Next.js — loads in under 1 second globally",
      "SEO-ready: sitemap, structured data, fast Core Web Vitals",
      "Mobile-first design — perfect on every device",
      "WhatsApp Business integration for lead capture",
      "Google Analytics + conversion tracking installed",
      "Domain + SSL configuration included",
      "Full source code delivered — you own everything",
    ],
    whyUs: [
      "40-60% lower cost than Dubai-based agencies — same quality, remote delivery",
      "Async-first — GMT+4 aligned for sync calls when you need them",
      "No WordPress — our sites are 5x faster and rank higher on Google",
      "USD or AED pricing — proper invoicing for GCC businesses",
      "9+ years of design experience with 6 live products in production",
    ],
    faq: [
      {
        q: "How much does a website cost in Dubai?",
        a: "Dubai-based agencies typically charge AED 10,000-50,000+ for a business website. WebVoyant delivers the same quality starting at $300 (AED 1,100) — custom designed, SEO-ready, and delivered in 7-14 days. We're a remote studio based in India with GCC clients, which means lower overhead without sacrificing quality.",
      },
      {
        q: "Can you work with businesses in the UAE remotely?",
        a: "Yes. We work async-first with GCC clients. We're GMT+5:30, which overlaps well with UAE's GMT+4. We offer sync calls during UAE business hours and deliver daily staging link updates. Many GCC businesses prefer our remote model for the cost advantage.",
      },
      {
        q: "Do you support Arabic language websites?",
        a: "Yes. We build bilingual (English + Arabic) websites with proper RTL (right-to-left) layout support. Arabic typography, cultural design sensibilities, and proper text direction are handled natively.",
      },
      {
        q: "What about hosting for GCC audiences?",
        a: "We deploy on Vercel's edge network, which has CDN nodes in the Middle East. Your website loads fast for visitors in Dubai, Abu Dhabi, Riyadh, and across the GCC — typically under 1 second.",
      },
    ],
    relatedKeywords: [
      "web design Dubai",
      "website development company UAE",
      "web development Dubai",
      "website design Abu Dhabi",
      "best website designer Dubai",
      "affordable website design UAE",
      "business website Dubai",
      "ecommerce website Dubai",
    ],
    industries: [
      "Real estate & property",
      "Hospitality & tourism",
      "Retail & fashion",
      "Healthcare clinics",
      "Professional services",
      "F&B restaurants",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 7. WEB DEVELOPMENT — USA
  // ══════════════════════════════════════════════════════════
  {
    slug: "web-development-company-usa",
    keyword: "web development company USA",
    metaTitle: "Web Development Company for US Startups | From $300",
    metaDescription:
      "Custom web development for US startups and SMBs. Next.js, React, full-stack. Websites from $300, apps from $1,200, AI products from $3,500.",
    headline: "US-quality web development. India-smart pricing.",
    subheading:
      "Custom websites, web applications, and AI-powered products for US startups and SMBs. Built by a design-led studio with 6 products in production. Stripe-native billing. Written-first delivery. Time-zone respectful.",
    region: "usa",
    cta: "Get a free quote",
    serviceSlug: "websites",
    priceFrom: "$300",
    timeline: "7-14 days",
    stats: [
      { label: "Products shipped", value: "15+" },
      { label: "Websites from", value: "$300" },
      { label: "Apps from", value: "$1,200" },
      { label: "AI products from", value: "$3,500" },
    ],
    includes: [
      "Custom-designed websites, web apps, or AI products",
      "Full-stack development: Next.js, React, Postgres, Tailwind",
      "Stripe payment integration (US-native)",
      "SEO-ready: structured data, sitemap, Core Web Vitals optimised",
      "Vercel deployment — edge-cached, fast across the US",
      "Mobile-first responsive design",
      "Source code on GitHub — you own everything",
      "Written-first delivery — Loom walkthroughs, Linear tracking",
    ],
    whyUs: [
      "60-70% lower cost than US agencies — same quality, 9+ years experience",
      "Written-first: Loom video updates, Linear ticket tracking, zero-ambiguity",
      "Stripe-native billing — proper USD invoicing for US entities",
      "6 products in production ourselves — we know what ships vs. what demos",
      "AI-accelerated build — we ship in weeks what US agencies quote in months",
    ],
    faq: [
      {
        q: "Why hire a web development company from India for US projects?",
        a: "Cost advantage without quality compromise. US agencies charge $10,000-50,000 for a business website. WebVoyant delivers the same — custom designed, Next.js built, SEO-ready — starting at $300. We've shipped 15+ projects across India, GCC, and the US with a written-first delivery process that eliminates timezone friction.",
      },
      {
        q: "How do you handle the timezone difference?",
        a: "Written-first delivery. You get daily staging link updates, weekly Loom video walkthroughs, and Linear ticket tracking. Sync calls are scheduled during US business hours (we overlap with EST mornings and PST afternoons). Most of our communication is async — which means you wake up to progress, not meetings.",
      },
      {
        q: "What payment methods do you accept from US clients?",
        a: "Stripe for credit card and ACH payments. Proper USD invoicing. No wire transfer hassles. We also accept payment via Wise for lower fees on larger projects.",
      },
      {
        q: "Can you build SaaS products for the US market?",
        a: "Yes. We've built SaaS products including ComplianceOS and DirectorsCut.ai. We handle multi-tenant architecture, subscription billing via Stripe, team management, role-based access, and US data residency requirements.",
      },
    ],
    relatedKeywords: [
      "hire web developer USA",
      "web development company for startups",
      "affordable web development USA",
      "outsource web development India to USA",
      "Next.js development company",
      "React development company USA",
      "SaaS development company",
      "startup web development",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 8. STARTUP WEBSITE
  // ══════════════════════════════════════════════════════════
  {
    slug: "startup-website-design",
    keyword: "startup website design",
    metaTitle: "Startup Website Design | Launch Your Startup Site in 7 Days",
    metaDescription:
      "Custom startup websites from ₹25,000 / $300. Landing pages, product sites, SaaS marketing sites. SEO-ready, conversion-optimised, shipped in 7 days.",
    headline: "Launch your startup website in 7 days.",
    subheading:
      "A fast, conversion-optimised website for your startup — designed to capture leads, explain your product, and rank on Google. No templates. No WordPress. Fixed price from ₹25,000. One-week turnaround.",
    region: "global",
    cta: "Get a free quote",
    serviceSlug: "websites",
    priceFrom: "₹25,000 / $300",
    timeline: "5-7 days",
    stats: [
      { label: "Startup sites shipped", value: "6+" },
      { label: "Starting price", value: "₹25K" },
      { label: "Fastest delivery", value: "5 days" },
      { label: "Conversion rate avg.", value: "4.2%" },
    ],
    includes: [
      "Custom landing page or multi-page website",
      "Conversion-optimised design — clear CTAs, trust signals, social proof",
      "SEO foundations — meta tags, structured data, fast load times",
      "Lead capture form + WhatsApp integration",
      "Google Analytics + Meta Pixel for tracking",
      "Mobile-first responsive design",
      "Domain + SSL setup included",
      "Deployed on Vercel — fast globally, zero downtime",
    ],
    whyUs: [
      "We're startup founders ourselves — 6 products shipped with our own money",
      "We understand what a startup website needs to DO, not just look like",
      "5-7 day turnaround — fastest in the market",
      "Fixed price — no scope creep, no surprise invoices",
      "Built on Next.js — your site is faster than 95% of startup websites",
    ],
    faq: [
      {
        q: "What makes a good startup website?",
        a: "A good startup website does three things: explains your product in 5 seconds (clear headline + subheading), captures leads (contact form, WhatsApp, or demo booking), and ranks on Google (SEO foundations). Everything else is decoration. We focus on these three outcomes.",
      },
      {
        q: "Should my startup use WordPress or a custom website?",
        a: "Custom. WordPress is fine for blogs but terrible for startup marketing sites — it's slow, requires constant updates, and you'll spend more on plugins and maintenance than a custom build costs. Our Next.js sites load in under 1 second, need zero maintenance, and score 95+ on Google PageSpeed.",
      },
      {
        q: "Can you build a SaaS marketing website?",
        a: "Yes. We build marketing sites for SaaS products — pricing pages, feature comparisons, documentation sections, changelog, blog. All SEO-ready with proper schema markup.",
      },
    ],
    relatedKeywords: [
      "startup landing page design",
      "SaaS website design",
      "startup website cost",
      "best startup website builder",
      "startup web design agency",
      "product landing page design",
      "tech startup website",
      "startup branding and website",
    ],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((lp) => lp.slug === slug);
}
