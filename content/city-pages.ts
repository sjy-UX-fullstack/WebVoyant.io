// ════════════════════════════════════════════════════════════
// PROGRAMMATIC CITY LANDING PAGES
// Each city gets a keyword-targeted page with local context,
// FAQ schema, and structured data for local SEO + AEO/GEO.
// ════════════════════════════════════════════════════════════

export type CityPage = {
  slug: string;
  city: string;
  state?: string;
  country: string;
  countryCode: string;
  currency: string;
  priceFrom: string;
  priceFromUsd?: string;
  /** Primary keyword for title + H1 */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheading: string;
  /** Local business context — why this city needs websites */
  localContext: string;
  /** Industries thriving in this city */
  industries: string[];
  /** City-specific FAQ */
  faq: { q: string; a: string }[];
  /** Long-tail keywords */
  relatedKeywords: string[];
  /** Timezone overlap note */
  timezoneNote?: string;
};

// ── INDIA CITIES ──────────────────────────────────────────

const indiaBase = {
  country: "India",
  countryCode: "IN",
  currency: "INR",
  priceFrom: "₹25,000",
};

// ── US REGIONS ────────────────────────────────────────────

const usBase = {
  country: "United States",
  countryCode: "US",
  currency: "USD",
  priceFrom: "$300",
};

// ── GCC ───────────────────────────────────────────────────

const gccBase = {
  country: "UAE",
  countryCode: "AE",
  currency: "USD",
  priceFrom: "$300",
};

export const cityPages: CityPage[] = [
  // ══════════════════════════════════════════════════════════
  // INDIA — Tier 1 Cities
  // ══════════════════════════════════════════════════════════
  {
    ...indiaBase,
    slug: "website-development-mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    keyword: "website development company in Mumbai",
    metaTitle: "Website Development Company in Mumbai | From ₹25,000",
    metaDescription:
      "Custom website development in Mumbai from ₹25,000. No WordPress, no templates. SEO-ready, mobile-first, delivered in 7-14 days. Get a free quote today.",
    headline: "Mumbai's fastest website development studio.",
    subheading:
      "Custom-coded, mobile-first websites for Mumbai businesses — from Andheri startups to Nariman Point enterprises. No WordPress. No templates. Fixed price from ₹25,000, delivered in 7-14 days.",
    localContext:
      "Mumbai is India's financial capital with over 30 lakh registered businesses. Yet most Mumbai businesses still run on slow WordPress sites or generic templates. In a city where every second counts, your website needs to load instantly, rank on Google for local searches, and convert visitors into paying customers. WebVoyant builds fast, custom-coded websites that give Mumbai businesses an unfair advantage.",
    industries: [
      "Financial services & fintech",
      "Bollywood & entertainment",
      "Real estate & property",
      "Restaurants & cloud kitchens",
      "Fashion & apparel brands",
      "Import-export businesses",
      "Healthcare & clinics",
      "CA & law firms",
    ],
    faq: [
      {
        q: "How much does website development cost in Mumbai?",
        a: "At WebVoyant, custom website development for Mumbai businesses starts at ₹25,000. This includes custom Figma design, Next.js development, mobile-first layout, SEO setup, Google Analytics, and domain + SSL configuration. Most Mumbai agencies charge ₹50,000-₹2,00,000 for similar quality. We're 50-70% more affordable because we use AI to compress build cycles.",
      },
      {
        q: "Why should a Mumbai business choose WebVoyant over local agencies?",
        a: "Three reasons: speed, price, and quality. We deliver in 7-14 days (most Mumbai agencies take 4-8 weeks), our starting price is ₹25,000 (vs ₹50K-₹2L locally), and our Next.js sites score 95+ on Google PageSpeed (vs 40-60 for typical WordPress sites). We work remotely but are available for calls during Mumbai business hours.",
      },
      {
        q: "Do you work with Mumbai startups?",
        a: "Yes. We've built MVPs and websites for startups across India. For Mumbai startups, we offer landing pages from ₹15,000, full websites from ₹25,000, and MVPs from ₹1,00,000. Fixed price, no equity, no hourly billing.",
      },
      {
        q: "Can you build an e-commerce website for a Mumbai business?",
        a: "Yes. E-commerce stores with Razorpay, UPI, and COD integration start at ₹50,000. We build custom stores — not Shopify templates — with product catalogue, cart, checkout, and WhatsApp order notifications. Perfect for Mumbai's D2C brands and retail businesses.",
      },
    ],
    relatedKeywords: [
      "best website developer in Mumbai",
      "web design company Mumbai",
      "affordable website design Mumbai",
      "website design cost in Mumbai",
      "ecommerce website development Mumbai",
      "SEO company Mumbai",
      "app development company Mumbai",
      "startup website Mumbai",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-indore",
    city: "Indore",
    state: "Madhya Pradesh",
    keyword: "website development company in Indore",
    metaTitle: "Website Development Company in Indore | From ₹25,000",
    metaDescription:
      "Custom website development in Indore from ₹25,000. No WordPress, no templates. SEO-ready, mobile-first, delivered in 7-14 days. Free quote today.",
    headline: "Indore's design-led website development studio.",
    subheading:
      "Custom-coded, mobile-first websites for Indore businesses — from Vijay Nagar startups to MG Road retailers. Built by a local team that understands the Indore market. Fixed price from ₹25,000.",
    localContext:
      "Indore is Madhya Pradesh's commercial capital and India's cleanest city, with a rapidly growing startup ecosystem and IT industry. From Scheme 78 IT parks to Rajwada-area retail shops, every Indore business needs a website that loads fast, ranks locally, and converts visitors into customers. WebVoyant is based in Indore — we understand the local market, local pricing, and local business needs better than any agency.",
    industries: [
      "IT companies & startups",
      "Food & restaurant businesses",
      "Real estate developers",
      "Education & coaching centres",
      "Textile & garment manufacturers",
      "Retail & local shops",
      "Healthcare & diagnostic centres",
      "CA, CS & law firms",
    ],
    faq: [
      {
        q: "How much does a website cost in Indore?",
        a: "At WebVoyant, custom websites for Indore businesses start at ₹25,000. Most Indore web agencies charge ₹15,000-₹50,000, but deliver WordPress sites that are slow and need constant maintenance. Our Next.js sites load in under 1 second, score 95+ on Google PageSpeed, and need zero maintenance. Landing pages start at ₹15,000.",
      },
      {
        q: "Are you based in Indore?",
        a: "Yes. WebVoyant is headquartered in Indore. We understand the local business landscape — from IT parks in Scheme 78 to retail markets around Rajwada. We offer in-person meetings for Indore clients and remote delivery for clients across India, GCC, and the US.",
      },
      {
        q: "Can you help my Indore business rank on Google?",
        a: "Yes. Every website we build includes foundational SEO — XML sitemap, meta tags, structured data, fast Core Web Vitals, and mobile-first design. For Indore businesses, we also set up Google Business Profile and local SEO targeting for 'near me' searches specific to Indore.",
      },
      {
        q: "Do you build apps for Indore startups?",
        a: "Yes. We build web apps from ₹1,00,000 and Android apps from ₹1,50,000 for Indore-based startups. We've shipped 6 products ourselves and understand the startup journey from idea to production.",
      },
    ],
    relatedKeywords: [
      "best website developer in Indore",
      "web design company Indore",
      "affordable website design Indore",
      "app development company Indore",
      "SEO company Indore",
      "ecommerce website Indore",
      "IT company Indore",
      "digital marketing agency Indore",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-pune",
    city: "Pune",
    state: "Maharashtra",
    keyword: "website development company in Pune",
    metaTitle: "Website Development Company in Pune | From ₹25,000",
    metaDescription:
      "Custom website development in Pune from ₹25,000. No WordPress, no templates. SEO-ready, mobile-first, 7-14 day delivery. Get a free quote.",
    headline: "Pune's fastest website development partner.",
    subheading:
      "Custom-coded websites for Pune's tech startups, IT companies, and growing businesses. No WordPress. No monthly fees. SEO-ready from day one. Fixed price from ₹25,000.",
    localContext:
      "Pune is India's second-largest IT hub after Bangalore, home to Hinjewadi IT Park, Magarpatta, and Kharadi tech corridors. With thousands of startups and SMBs, Pune businesses need websites that stand out. Yet most settle for WordPress templates that load slowly and look generic. WebVoyant builds custom, blazing-fast websites that help Pune businesses rank higher and convert better.",
    industries: [
      "IT services & SaaS startups",
      "EdTech & coaching institutes",
      "Manufacturing & auto sector",
      "Real estate developers",
      "Restaurants & cafes",
      "Healthcare & wellness",
      "E-commerce & D2C brands",
      "Professional services",
    ],
    faq: [
      {
        q: "How much does website development cost in Pune?",
        a: "Custom website development at WebVoyant starts at ₹25,000 for Pune businesses. Typical Pune agencies charge ₹40,000-₹1,50,000 for similar work. Our sites are built in Next.js (not WordPress), load in under 1 second, and include SEO setup, mobile-first design, and analytics.",
      },
      {
        q: "Do you work with Pune IT companies and startups?",
        a: "Yes. We build websites, web applications, and AI products for Pune's tech ecosystem. MVPs start at ₹1,00,000, and AI-powered products start at ₹3,00,000. We've shipped 6 of our own products, so we understand the startup build cycle.",
      },
      {
        q: "Can you build a SaaS product for a Pune startup?",
        a: "Yes. We build SaaS products with multi-tenant architecture, subscription billing via Razorpay/Stripe, admin dashboards, and API integrations. Starting at ₹1,00,000 for an MVP, delivered in 3-5 weeks.",
      },
    ],
    relatedKeywords: [
      "best website developer in Pune",
      "web design company Pune",
      "app development company Pune",
      "startup website Pune",
      "ecommerce website development Pune",
      "SEO services Pune",
      "SaaS development Pune",
      "IT services Pune",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-bangalore",
    city: "Bangalore",
    state: "Karnataka",
    keyword: "website development company in Bangalore",
    metaTitle: "Website Development Company in Bangalore | From ₹25,000",
    metaDescription:
      "Custom website development in Bangalore from ₹25,000. Next.js sites, not WordPress. SEO-ready, mobile-first, delivered in 7-14 days. Free quote.",
    headline: "Bangalore-grade websites. Startup-friendly pricing.",
    subheading:
      "Custom-coded websites and web applications for Bangalore's startup ecosystem and enterprises. Built with the same stack (Next.js, React, Postgres) that powers the city's best tech companies. Fixed price from ₹25,000.",
    localContext:
      "Bangalore is India's Silicon Valley — home to Koramangala startups, Whitefield tech parks, and Electronic City enterprises. Bangalore businesses demand the best technology, but many still run on slow WordPress sites built by agencies charging ₹1-5 lakh. WebVoyant delivers Bangalore-grade quality at startup-friendly prices, using the same tech stack that Bangalore's best engineers use.",
    industries: [
      "SaaS startups & tech companies",
      "Fintech & payments",
      "E-commerce & marketplaces",
      "Healthcare & biotech",
      "EdTech platforms",
      "Enterprise software",
      "D2C brands",
      "Consulting firms",
    ],
    faq: [
      {
        q: "How much does a website cost in Bangalore?",
        a: "Bangalore agencies typically charge ₹50,000-₹5,00,000 for website development. WebVoyant delivers the same quality starting at ₹25,000 — custom Next.js sites with SEO, analytics, and mobile-first design. We use AI to build 3x faster, passing the savings to you.",
      },
      {
        q: "What tech stack do you use?",
        a: "Next.js, React, TypeScript, Tailwind CSS, Postgres, and Supabase — the same stack used by Bangalore's best startups. Not WordPress, not Wix, not templates. Your next engineer can read our code without onboarding.",
      },
      {
        q: "Can you build AI products for Bangalore startups?",
        a: "Yes. AI-powered MVPs from ₹3,00,000 — with RAG pipelines, LLM integration, classification, and production-grade deployment. We've shipped 4 AI products ourselves including ComplianceOS and DirectorsCut.ai.",
      },
    ],
    relatedKeywords: [
      "best web developer in Bangalore",
      "web design company Bangalore",
      "startup website Bangalore",
      "app development Bangalore",
      "SaaS development company Bangalore",
      "AI development company Bangalore",
      "Next.js developer Bangalore",
      "React developer Bangalore",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-delhi",
    city: "Delhi NCR",
    state: "Delhi",
    keyword: "website development company in Delhi",
    metaTitle: "Website Development Company in Delhi NCR | From ₹25,000",
    metaDescription:
      "Custom website development in Delhi NCR from ₹25,000. No WordPress. SEO-ready, mobile-first, delivered in 7-14 days. Free quote in 24 hours.",
    headline: "Delhi NCR's most affordable website studio.",
    subheading:
      "Custom-coded websites for businesses across Delhi, Gurgaon, and Noida. From Connaught Place corporates to Gurgaon startups — no WordPress, no templates, fixed price from ₹25,000.",
    localContext:
      "Delhi NCR — including Gurgaon, Noida, and Greater Noida — is India's largest business hub with millions of registered enterprises. From Connaught Place offices to Cyber City startups, every Delhi NCR business needs a website that loads fast on India's mobile-first internet. WebVoyant delivers custom, SEO-ready websites at prices that make sense for Delhi's competitive market.",
    industries: [
      "Corporate & enterprise",
      "Government & PSU suppliers",
      "Real estate & construction",
      "Retail & e-commerce",
      "Education & universities",
      "Healthcare & hospitals",
      "Legal & consulting firms",
      "Import-export & trading",
    ],
    faq: [
      {
        q: "How much does website development cost in Delhi?",
        a: "Custom website development at WebVoyant starts at ₹25,000 for Delhi NCR businesses. Delhi agencies typically charge ₹40,000-₹2,00,000 for comparable work. Our Next.js sites are faster, better for SEO, and need zero maintenance compared to WordPress alternatives.",
      },
      {
        q: "Do you serve Gurgaon and Noida as well?",
        a: "Yes. We serve the entire Delhi NCR region — Delhi, Gurgaon, Noida, Greater Noida, and Faridabad. We work remotely with daily staging link updates and are available for calls during Delhi business hours.",
      },
      {
        q: "Can you build government or enterprise websites?",
        a: "Yes. We build professional websites for enterprises with multi-page structures, compliance-ready design, and accessibility standards. Enterprise websites start at ₹50,000 depending on scope.",
      },
    ],
    relatedKeywords: [
      "best website developer Delhi",
      "web design company Delhi NCR",
      "website development Gurgaon",
      "website development Noida",
      "app development company Delhi",
      "ecommerce website Delhi",
      "SEO company Delhi",
      "startup website Delhi NCR",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    keyword: "website development company in Hyderabad",
    metaTitle: "Website Development Company in Hyderabad | From ₹25,000",
    metaDescription:
      "Custom website development in Hyderabad from ₹25,000. Next.js, not WordPress. SEO-ready, mobile-first, 7-14 day delivery. Free quote.",
    headline: "Hyderabad's design-first website development studio.",
    subheading:
      "Custom-coded websites for Hyderabad's IT corridor, HITEC City startups, and growing businesses. No WordPress. No templates. SEO-ready from day one. Fixed price from ₹25,000.",
    localContext:
      "Hyderabad is India's fastest-growing tech hub — home to HITEC City, Gachibowli, and Financial District. With a booming startup scene and major tech companies, Hyderabad businesses need websites that match the city's ambition. WebVoyant builds custom, fast-loading websites at prices that work for Hyderabad's growing businesses.",
    industries: [
      "IT & tech companies",
      "Pharma & biotech",
      "Real estate & construction",
      "EdTech & training",
      "E-commerce & retail",
      "Healthcare & diagnostics",
      "Restaurants & hospitality",
      "Film & media production",
    ],
    faq: [
      {
        q: "How much does a website cost in Hyderabad?",
        a: "Custom website development at WebVoyant starts at ₹25,000 for Hyderabad businesses. This includes custom Figma design, Next.js development, SEO setup, and mobile-first responsive layout. Most Hyderabad agencies charge ₹40,000-₹1,50,000 for similar quality.",
      },
      {
        q: "Do you work with HITEC City startups?",
        a: "Yes. We build websites, web apps, and AI products for Hyderabad's tech ecosystem. MVPs start at ₹1,00,000. We've shipped 6 of our own products and understand what tech companies need.",
      },
    ],
    relatedKeywords: [
      "best website developer Hyderabad",
      "web design company Hyderabad",
      "app development Hyderabad",
      "startup website Hyderabad",
      "ecommerce website Hyderabad",
      "SEO company Hyderabad",
      "IT company website Hyderabad",
      "HITEC City web development",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    keyword: "website development company in Chennai",
    metaTitle: "Website Development Company in Chennai | From ₹25,000",
    metaDescription:
      "Custom website development in Chennai from ₹25,000. No WordPress. SEO-ready, mobile-first, delivered in 7-14 days. Get a free quote today.",
    headline: "Chennai's fastest website development partner.",
    subheading:
      "Custom-coded websites for Chennai's thriving business community — from OMR tech companies to T. Nagar retailers. Fixed price from ₹25,000, delivered in 7-14 days.",
    localContext:
      "Chennai is South India's industrial and tech powerhouse, home to the OMR IT corridor, auto manufacturing giants, and a thriving startup scene. From traditional businesses in T. Nagar to tech startups in Tidel Park, every Chennai business needs a website that loads fast and ranks on Google. WebVoyant delivers custom websites at prices that make sense for Chennai's practical business culture.",
    industries: [
      "IT services & BPO",
      "Automobile & manufacturing",
      "Healthcare & hospitals",
      "Education & coaching",
      "Real estate & property",
      "Retail & textiles",
      "Logistics & shipping",
      "Professional services",
    ],
    faq: [
      {
        q: "How much does website development cost in Chennai?",
        a: "At WebVoyant, custom websites for Chennai businesses start at ₹25,000. E-commerce stores with Razorpay/UPI start at ₹50,000. Web apps and MVPs start at ₹1,00,000. All include custom design, SEO, analytics, and 30 days of post-launch support.",
      },
      {
        q: "Do you build websites for Chennai manufacturing companies?",
        a: "Yes. We build professional corporate websites, product catalogues, and dealer portals for manufacturing companies. Starting at ₹35,000 for a multi-page corporate site with contact forms and product showcases.",
      },
    ],
    relatedKeywords: [
      "best website developer Chennai",
      "web design company Chennai",
      "app development Chennai",
      "ecommerce website Chennai",
      "SEO services Chennai",
      "IT company website Chennai",
      "startup website Chennai",
      "corporate website Chennai",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    keyword: "website development company in Ahmedabad",
    metaTitle: "Website Development Company in Ahmedabad | From ₹25,000",
    metaDescription:
      "Custom website development in Ahmedabad from ₹25,000. No WordPress. SEO-ready, mobile-first, delivered in 7-14 days. Free quote in 24 hours.",
    headline: "Ahmedabad's most affordable website studio.",
    subheading:
      "Custom-coded websites for Ahmedabad's business community — from SG Highway startups to textile exporters. No WordPress, no templates. Fixed price from ₹25,000.",
    localContext:
      "Ahmedabad is Gujarat's commercial capital and India's fastest-growing metro, with a booming textile industry, pharma sector, and growing IT ecosystem. From CG Road retailers to GIFT City financial firms, Ahmedabad businesses need websites that reflect the city's entrepreneurial energy. WebVoyant delivers custom, fast websites at Gujarat-friendly prices.",
    industries: [
      "Textile & garment export",
      "Pharma & chemicals",
      "Diamond & jewellery",
      "Real estate & construction",
      "FMCG & retail",
      "Education & coaching",
      "IT & fintech startups",
      "Manufacturing & engineering",
    ],
    faq: [
      {
        q: "How much does a website cost in Ahmedabad?",
        a: "Custom websites at WebVoyant start at ₹25,000 for Ahmedabad businesses. E-commerce stores for textile and jewellery businesses start at ₹50,000. Most Ahmedabad agencies charge ₹30,000-₹1,00,000 for comparable quality.",
      },
      {
        q: "Can you build an export business website?",
        a: "Yes. We build multilingual corporate websites for export businesses with product catalogues, inquiry forms, and international SEO. Perfect for Ahmedabad's textile, diamond, and chemical exporters.",
      },
    ],
    relatedKeywords: [
      "best website developer Ahmedabad",
      "web design company Ahmedabad",
      "ecommerce website Ahmedabad",
      "app development Ahmedabad",
      "SEO company Ahmedabad",
      "textile website Ahmedabad",
      "startup website Ahmedabad",
      "export business website Gujarat",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    keyword: "website development company in Jaipur",
    metaTitle: "Website Development Company in Jaipur | From ₹25,000",
    metaDescription:
      "Custom website development in Jaipur from ₹25,000. No WordPress. SEO-ready, mobile-first, delivered in 7-14 days. Free quote today.",
    headline: "Jaipur's smartest website development partner.",
    subheading:
      "Custom-coded websites for Jaipur's tourism, handicraft, and growing IT sector. No WordPress. No templates. Fixed price from ₹25,000, delivered in 7-14 days.",
    localContext:
      "Jaipur is Rajasthan's capital and India's tourism gem, home to a thriving handicraft industry, jewellery exporters, and a growing IT sector in Mahindra SEZ and Sitapura. From Johari Bazaar jewellers to Mansarovar IT firms, Jaipur businesses need beautiful, fast websites that attract both local and international customers.",
    industries: [
      "Tourism & hospitality",
      "Handicrafts & artisan exports",
      "Jewellery & gemstones",
      "Real estate & property",
      "Education & universities",
      "IT & BPO companies",
      "Textile & block printing",
      "Healthcare & wellness tourism",
    ],
    faq: [
      {
        q: "How much does website development cost in Jaipur?",
        a: "Custom websites at WebVoyant start at ₹25,000 for Jaipur businesses. Tourism and hotel websites with booking integration start at ₹50,000. E-commerce for handicraft and jewellery businesses start at ₹50,000.",
      },
      {
        q: "Can you build a tourism or hotel website?",
        a: "Yes. We build hotel and tourism websites with booking forms, photo galleries, virtual tours, WhatsApp integration, and Google Maps. Optimised for international tourists searching for Jaipur experiences.",
      },
    ],
    relatedKeywords: [
      "best website developer Jaipur",
      "web design company Jaipur",
      "tourism website Jaipur",
      "hotel website development Jaipur",
      "ecommerce website Jaipur",
      "handicraft website Jaipur",
      "SEO company Jaipur",
      "jewellery website Jaipur",
    ],
  },

  {
    ...indiaBase,
    slug: "website-development-kolkata",
    city: "Kolkata",
    state: "West Bengal",
    keyword: "website development company in Kolkata",
    metaTitle: "Website Development Company in Kolkata | From ₹25,000",
    metaDescription:
      "Custom website development in Kolkata from ₹25,000. No WordPress. SEO-ready, mobile-first, 7-14 day delivery. Get a free quote.",
    headline: "Kolkata's most affordable website development studio.",
    subheading:
      "Custom-coded websites for Kolkata businesses — from Salt Lake tech companies to Park Street retailers. No WordPress, no templates. Fixed price from ₹25,000.",
    localContext:
      "Kolkata is Eastern India's commercial hub, home to Salt Lake Sector V tech corridor, New Town IT parks, and a vibrant small business ecosystem. Kolkata businesses are value-conscious and demand quality at fair prices — exactly what WebVoyant delivers.",
    industries: [
      "IT & software companies",
      "Jute & tea export",
      "Education & universities",
      "Real estate & construction",
      "Retail & fashion",
      "Healthcare & diagnostics",
      "Media & publishing",
      "Manufacturing & engineering",
    ],
    faq: [
      {
        q: "How much does a website cost in Kolkata?",
        a: "Custom websites at WebVoyant start at ₹25,000 for Kolkata businesses. This includes custom design, Next.js development, SEO setup, and mobile-first responsive layout. Most Kolkata agencies charge ₹30,000-₹80,000 for comparable work.",
      },
    ],
    relatedKeywords: [
      "best website developer Kolkata",
      "web design company Kolkata",
      "app development Kolkata",
      "ecommerce website Kolkata",
      "SEO company Kolkata",
      "IT company Kolkata",
      "startup website Kolkata",
      "Salt Lake web development",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // USA — Key Markets
  // ══════════════════════════════════════════════════════════
  {
    ...usBase,
    slug: "web-development-new-york",
    city: "New York",
    state: "New York",
    keyword: "web development company New York",
    metaTitle: "Web Development Company for New York Businesses | From $300",
    metaDescription:
      "Custom web development for NYC startups and SMBs from $300. Next.js, React. Websites, apps, AI products. 60% less than NYC agencies. Free quote.",
    headline: "NYC-quality websites. Without NYC agency pricing.",
    subheading:
      "Custom websites, web apps, and AI products for New York businesses — built by a design-led studio with 6 products in production. Same quality as Manhattan agencies at 60-70% lower cost. Stripe billing. Written-first delivery.",
    localContext:
      "New York City is the world's business capital, but NYC web agencies charge $15,000-$100,000+ for a business website. Startups in Brooklyn, SMBs in Midtown, and e-commerce brands across the city need quality websites without the Manhattan price tag. WebVoyant delivers NYC-quality work at India-smart pricing — custom-designed, SEO-ready, and deployed in 7-14 days.",
    timezoneNote: "We overlap with EST mornings (9-11 AM) and deliver async via Loom + Linear for zero timezone friction.",
    industries: [
      "Tech startups & SaaS",
      "Finance & fintech",
      "Fashion & e-commerce",
      "Media & publishing",
      "Real estate",
      "Healthcare & wellness",
      "Legal & consulting",
      "Food & hospitality",
    ],
    faq: [
      {
        q: "How much does web development cost in New York?",
        a: "NYC agencies typically charge $15,000-$100,000+ for a business website. WebVoyant delivers the same quality — custom designed, Next.js built, SEO-ready — starting at $300. We use AI-accelerated development and India-based operations to deliver 60-70% savings without sacrificing quality.",
      },
      {
        q: "How do you handle working with NYC clients remotely?",
        a: "Written-first delivery. Daily staging link updates, weekly Loom video walkthroughs, Linear ticket tracking. We overlap with EST mornings for sync calls. Most communication is async — you wake up to progress, not meetings.",
      },
      {
        q: "Can you build a SaaS product for a NYC startup?",
        a: "Yes. We've built SaaS products including ComplianceOS and DirectorsCut.ai. MVPs from $1,200, AI products from $3,500. Stripe billing, US data residency, and proper USD invoicing included.",
      },
    ],
    relatedKeywords: [
      "best web developer New York",
      "affordable web design NYC",
      "website development company NYC",
      "startup website New York",
      "ecommerce website NYC",
      "app development New York",
      "SaaS development NYC",
      "React developer New York",
    ],
  },

  {
    ...usBase,
    slug: "web-development-san-francisco",
    city: "San Francisco",
    state: "California",
    keyword: "web development company San Francisco",
    metaTitle: "Web Development Company for SF Bay Area | From $300",
    metaDescription:
      "Custom web development for San Francisco startups from $300. Next.js, React, AI products. 60% less than Bay Area agencies. Free quote.",
    headline: "Bay Area tech. Without Bay Area burn rate.",
    subheading:
      "Custom websites, web apps, and AI-powered products for San Francisco startups and tech companies. Built with the same stack Bay Area engineers use (Next.js, React, Postgres) at 60-70% lower cost.",
    localContext:
      "San Francisco and the Bay Area are the global epicentre of technology — but local web agencies charge $20,000-$150,000+ for development projects. For bootstrapped startups in SoMa and growing companies across the Bay Area, WebVoyant offers Silicon Valley-grade engineering at dramatically lower cost. Same tech stack, same quality, AI-accelerated delivery.",
    timezoneNote: "We overlap with PST afternoons (2-5 PM) and deliver async via Loom + Linear.",
    industries: [
      "SaaS startups",
      "AI & ML companies",
      "Fintech & crypto",
      "Developer tools",
      "E-commerce & D2C",
      "Healthcare tech",
      "Climate tech",
      "B2B platforms",
    ],
    faq: [
      {
        q: "How much does web development cost in San Francisco?",
        a: "Bay Area agencies charge $20,000-$150,000+ for web development. WebVoyant delivers the same quality starting at $300 for websites and $1,200 for web apps. AI-powered products start at $3,500. We use the same stack (Next.js, React, Postgres) that SF's best startups use.",
      },
      {
        q: "Can you build AI products for SF startups?",
        a: "Yes. AI-powered MVPs from $3,500 — with RAG pipelines, LLM integration (GPT-4o, Claude, Gemini), and production-grade deployment. We've shipped 4 AI products ourselves. Model-agnostic, eval-driven development.",
      },
    ],
    relatedKeywords: [
      "web developer San Francisco",
      "affordable web development Bay Area",
      "startup website San Francisco",
      "AI development company SF",
      "SaaS development San Francisco",
      "React developer Bay Area",
      "Next.js agency San Francisco",
      "app development San Francisco",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // GCC — Additional Cities
  // ══════════════════════════════════════════════════════════
  {
    ...gccBase,
    country: "UAE",
    slug: "website-development-abu-dhabi",
    city: "Abu Dhabi",
    keyword: "website development company in Abu Dhabi",
    metaTitle: "Website Development Company in Abu Dhabi | From $300",
    metaDescription:
      "Custom website development in Abu Dhabi from $300. No WordPress. SEO-ready, mobile-first, 7-14 day delivery. Free quote in 24 hours.",
    headline: "Abu Dhabi's smartest website development partner.",
    subheading:
      "Custom-coded websites for Abu Dhabi businesses — from ADGM financial firms to Yas Island hospitality brands. No WordPress. No Wix. SEO-ready, mobile-first, delivered in 7-14 days.",
    localContext:
      "Abu Dhabi is the UAE's capital and a global hub for finance, energy, and tourism. With ADGM growing as a financial centre and Vision 2030 driving digital transformation, Abu Dhabi businesses need modern, fast websites. WebVoyant delivers custom websites at 60% lower cost than local Abu Dhabi agencies, with the same quality and faster delivery.",
    industries: [
      "Oil & gas / energy",
      "Financial services & ADGM",
      "Tourism & hospitality",
      "Government & semi-government",
      "Real estate & property",
      "Healthcare & medical",
      "Education & training",
      "Retail & F&B",
    ],
    faq: [
      {
        q: "How much does a website cost in Abu Dhabi?",
        a: "Abu Dhabi agencies typically charge AED 15,000-60,000 for a business website. WebVoyant delivers the same quality starting at $300 (AED 1,100). Custom-designed, SEO-ready, deployed in 7-14 days. We work remotely from India, which means lower overhead without sacrificing quality.",
      },
      {
        q: "Do you support Arabic language websites?",
        a: "Yes. We build bilingual English-Arabic websites with proper RTL layout support, Arabic typography, and cultural design sensibilities.",
      },
    ],
    relatedKeywords: [
      "best website developer Abu Dhabi",
      "web design company Abu Dhabi",
      "app development Abu Dhabi",
      "ecommerce website Abu Dhabi",
      "ADGM company website",
      "corporate website Abu Dhabi",
      "Arabic website design UAE",
      "affordable web development Abu Dhabi",
    ],
  },

  {
    ...gccBase,
    country: "Saudi Arabia",
    countryCode: "SA",
    slug: "website-development-riyadh",
    city: "Riyadh",
    keyword: "website development company in Riyadh",
    metaTitle: "Website Development Company in Riyadh | From $300",
    metaDescription:
      "Custom website development in Riyadh from $300. SEO-ready, mobile-first, bilingual Arabic-English. 7-14 day delivery. Free quote.",
    headline: "Riyadh's fastest website development partner.",
    subheading:
      "Custom-coded websites for Riyadh businesses — supporting Vision 2030's digital transformation. Bilingual Arabic-English, SEO-ready, mobile-first. Fixed price from $300.",
    localContext:
      "Riyadh is the capital of Saudi Arabia and the driving force behind Vision 2030's digital transformation. With millions of businesses going digital, the demand for quality websites has never been higher. WebVoyant serves Riyadh businesses remotely with custom, bilingual websites at 60% lower cost than local Saudi agencies.",
    industries: [
      "Government & Vision 2030 projects",
      "Oil & gas / energy",
      "Finance & banking",
      "Real estate & construction",
      "Healthcare & medical",
      "Retail & e-commerce",
      "Tourism & entertainment",
      "Education & training",
    ],
    faq: [
      {
        q: "How much does website development cost in Riyadh?",
        a: "Riyadh agencies typically charge SAR 10,000-50,000+ for a business website. WebVoyant delivers custom-designed, SEO-ready websites starting at $300 (SAR 1,125). Bilingual Arabic-English sites with RTL support included.",
      },
      {
        q: "Can you build Arabic-first websites?",
        a: "Yes. We build fully bilingual Arabic-English websites with proper RTL layout, Arabic typography, and SEO for both Arabic and English search queries. Perfect for Saudi businesses serving local and international audiences.",
      },
    ],
    relatedKeywords: [
      "best website developer Riyadh",
      "web design company Saudi Arabia",
      "app development Riyadh",
      "ecommerce website Saudi Arabia",
      "Arabic website design Riyadh",
      "Vision 2030 website",
      "corporate website Saudi Arabia",
      "web development company KSA",
    ],
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((cp) => cp.slug === slug);
}
