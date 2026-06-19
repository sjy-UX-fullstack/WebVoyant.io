export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: string[];
};

export const posts: Post[] = [
  // ══════════════════════════════════════════════════════════
  // SEO BLOG POSTS (high search volume, human tone)
  // ══════════════════════════════════════════════════════════
  {
    slug: "website-cost-india-2026",
    title: "How much does a website cost in India in 2026? Honest pricing guide",
    description:
      "We break down what websites actually cost in India right now. From basic landing pages to full e-commerce stores, with real numbers and zero fluff.",
    date: "2026-06-18",
    readingTime: "8 min read",
    tags: ["Business", "Pricing"],
    body: [
      "Let me save you 30 minutes of Googling. Every other article on this topic gives you a range so wide it is useless. 'A website costs between 5,000 and 5,00,000.' Thanks, that really narrows it down.",
      "Here is what websites actually cost in India in 2026, based on what we charge at WebVoyant and what we have seen competitors charge across 15+ projects this year.",
      "A basic landing page, single page with a contact form and decent design, runs between 10,000 and 20,000 rupees. If someone is charging you less than that, they are using a free template and slapping your logo on it. If they are charging more than 30,000 for a single page, they are overcharging.",
      "A proper business website with 5 to 10 pages, custom design, mobile friendly layout, SEO setup, and analytics costs between 25,000 and 80,000 rupees. This is where most small businesses should be spending. You need a homepage, about page, services page, contact page, and maybe a blog. That is it. Do not let anyone convince you that you need 30 pages on day one.",
      "E-commerce stores are a different game. If you want a product catalogue, shopping cart, checkout flow, and payment integration with Razorpay or UPI, expect to pay 50,000 to 1,50,000 rupees for a custom build. Yes, Shopify exists. But Shopify charges you 2,000+ per month forever plus transaction fees. A custom store has zero monthly platform fees.",
      "Web applications and SaaS products start at 1,00,000 rupees and go up from there depending on complexity. This includes user authentication, a database, admin panel, and payment integration. If your idea has user accounts and a dashboard, you are in this category.",
      "AI powered products are the premium tier. If you want real AI inside your product like document analysis, content generation, or smart search, expect 3,00,000 rupees and up. This is not a chatbot on your homepage. This is production grade AI with cost controls and accuracy monitoring.",
      "Now the question nobody asks but should: what does NOT matter when pricing a website? The number of pages. A 5 page website that converts at 4 percent is worth ten times more than a 50 page website that converts at 0.1 percent. Stop counting pages. Start counting conversions.",
      "Here is my honest advice. If you are a small business in India and you just need to show up on Google and collect leads, spend 25,000 to 50,000 on a clean, fast, custom website. Skip WordPress. Skip Wix. Skip GoDaddy website builders. Get something built in Next.js that loads in under a second and scores 95+ on Google PageSpeed. Your Google ranking will thank you.",
      "One more thing. Always ask these three questions before hiring anyone. Do I own the source code? Do I own the domain? Can I leave and take everything with me? If the answer to any of these is no, walk away.",
    ],
  },
  {
    slug: "wordpress-vs-custom-website-2026",
    title: "WordPress vs custom website: which one should your business actually pick?",
    description:
      "The honest comparison nobody wants to write. When WordPress makes sense, when it does not, and why we stopped using it for client projects.",
    date: "2026-06-15",
    readingTime: "7 min read",
    tags: ["Business", "Engineering"],
    body: [
      "I am going to make some WordPress fans angry with this one. But someone needs to say it.",
      "WordPress powers 43 percent of the internet. That is a real stat. It is also the most hacked CMS on the planet. Also a real stat. 96 percent of all hacked CMS websites run WordPress. These two facts are connected.",
      "Here is the thing. WordPress was revolutionary in 2005. It let anyone build a website without knowing code. Twenty years later, the internet has changed but WordPress has not. It still needs plugins for everything. It still breaks when you update them. And it still loads like it is 2015.",
      "We used to build WordPress sites for clients. We stopped in 2024. Not because we hate WordPress, but because we got tired of the support calls. 'My site is slow.' 'A plugin broke my contact form.' 'I got a security warning from Google.' Every single one of these problems goes away when you build custom.",
      "Let me be specific about what 'custom' means. We build with Next.js, which is a React framework that generates static HTML pages. Your website loads in under one second because it is not running PHP on a server and querying a MySQL database on every page view. It is just serving pre-built HTML files. That is why custom sites score 90 to 100 on Google PageSpeed while most WordPress sites score 30 to 60.",
      "But here is when WordPress still wins. If you are a blogger who publishes 5 articles a week and needs a visual editor to format posts with images and embeds, WordPress is genuinely good at that. If you need 50 plugins for forms, SEO, caching, security, backups, e-commerce, and multilingual support, WordPress has an ecosystem for that. If you need to hand the site to a non-technical person who will update it daily, WordPress has a learning curve but it is manageable.",
      "When does custom win? When you care about speed. When you care about Google rankings. When you care about security. When you do NOT want to pay a developer every time a plugin update breaks your site. When you want to own your code and not be locked into a platform.",
      "Let me share some real numbers from our projects. Average WordPress site load time: 3 to 5 seconds. Average Next.js site load time: 0.5 to 1.2 seconds. Average WordPress Google PageSpeed score: 45. Average Next.js score: 96. These are not hypothetical. These are from actual projects we have shipped.",
      "Cost wise, WordPress is cheaper upfront. You can get a WordPress site for 15,000 to 30,000 rupees. But add up hosting fees (3,000 to 5,000 per month for anything decent), plugin costs (premium plugins add up), security monitoring, and the time you spend dealing with updates, and your total cost over two years is often higher than a custom build.",
      "Our take? If your website is a business tool that needs to generate leads, rank on Google, and load fast on mobile, go custom. If your website is primarily a content publishing platform where you write daily and need a visual editor, WordPress still works. For everything in between, custom is cheaper in the long run and performs better from day one.",
    ],
  },
  {
    slug: "does-your-business-need-website-2026",
    title: "Does your business really need a website in 2026? Here is the data",
    description:
      "55 to 65 percent of Indian SMBs still do not have a website. Is social media enough? We looked at the numbers.",
    date: "2026-06-12",
    readingTime: "6 min read",
    tags: ["Business", "Marketing"],
    body: [
      "I meet business owners every week who tell me the same thing. 'We have Instagram. We have WhatsApp Business. Why do we need a website?'",
      "Fair question. Let me answer it with data, not opinions.",
      "India has over 63 million small and medium businesses. Research shows 55 to 65 percent of them do not have a website. That is roughly 35 million businesses running entirely on social media and word of mouth. Some of them are doing just fine. Most of them are leaving money on the table.",
      "Here is the first number that matters. Businesses with a website earn 50 percent more revenue than businesses without one. That is not my data. That is from multiple industry reports published in 2025 and 2026. A website is not a vanity project. It is a revenue multiplier.",
      "Here is the second number. 88 percent of online shoppers say they will not return to a website after a bad experience. Now flip that. If you do not have a website at all, you are not even giving them a chance to have a good experience. They search for your type of business on Google, find your competitor who has a website, and that competitor gets the sale.",
      "But what about social media? Is Instagram not enough? Here is the data on that too. Businesses with both a website AND social media generate 2x more revenue than businesses with only social media. Social media is great for awareness. A website is where conversion happens. They work together, not as replacements for each other.",
      "'But I get all my customers from WhatsApp referrals.' I hear this a lot, especially from service businesses. And yes, referrals are powerful. But here is what happens when someone gets a referral. They Google your business name. If they find a professional website, their trust goes up immediately. If they find nothing, or worse, they find a competitor instead, that referral just walked away.",
      "Let me talk about cost for a second because I think this is the real blocker. Most business owners assume a website costs 2 to 5 lakhs. It does not. A clean, fast, mobile-friendly business website starts at 25,000 rupees. That is less than one month of Instagram ads for most businesses. And unlike ads, a website keeps working 24/7 without a daily budget.",
      "Here is my honest take. If you are a business in India in 2026 and you do not have a website, you are invisible to anyone who does not already know you. Google processes 8.5 billion searches per day. Some of those people are searching for exactly what you sell, in your city, right now. Without a website, you do not exist for them.",
      "You do not need a complex website. You need a homepage that explains what you do, a services or products page, a contact page with your WhatsApp number, and good SEO so Google can find you. That is it. You can get all of this live in under two weeks for less than the cost of a good phone.",
    ],
  },
  {
    slug: "signs-your-website-losing-customers",
    title: "7 signs your website is losing you customers right now",
    description:
      "Your website might look fine to you. But if it takes more than 3 seconds to load, you have already lost 40 percent of visitors. Here are 7 things to check.",
    date: "2026-06-08",
    readingTime: "5 min read",
    tags: ["Business", "Marketing"],
    body: [
      "Your website might look great on your laptop. Your designer might have told you it is 'modern and clean.' But none of that matters if people are leaving before they even see it.",
      "Here are 7 signs your website is actively pushing customers away. I see these on at least 3 out of every 5 business websites I review.",
      "Number one. It takes more than 3 seconds to load. Google's data shows that 53 percent of mobile users leave a page that takes longer than 3 seconds to load. Not 10 seconds. Three seconds. Go to Google PageSpeed Insights right now, paste your URL, and check your score. If it is below 50, you are losing half your visitors before they see your homepage. Most WordPress sites score between 30 and 50. Most custom Next.js sites score 90 to 100.",
      "Number two. It does not work properly on phones. Over 75 percent of web traffic in India comes from mobile devices. If your website is not mobile-first, you are building for the wrong screen. Open your website on your phone right now. Is the text readable without zooming? Can you tap the buttons easily? Does the contact form work? If no to any of these, fix it yesterday.",
      "Number three. There is no clear call to action. I visit so many business websites where I genuinely cannot figure out what I am supposed to do next. No 'Get a quote' button. No WhatsApp link. No phone number. Just a wall of text about how the company was founded in 1998. Your website has one job: turn visitors into leads or customers. Every page needs a clear next step.",
      "Number four. Your contact form is broken or nobody checks it. I have seen this more times than I can count. The contact form on the website either does not work at all, sends emails to an inbox nobody checks, or asks for 15 fields when all you need is name, phone number, and a one-line message. Test your contact form right now. Fill it out. See if you actually get the submission.",
      "Number five. You are not showing up on Google. Search your business name on Google. If your website is not the first result, something is wrong with your SEO. Now search for what you actually sell, like 'restaurant in Andheri' or 'CA firm in Indore.' If you are nowhere to be found, your website is not doing its job. Good SEO starts with fast load times, proper meta tags, a sitemap, and mobile-friendly design.",
      "Number six. The design looks outdated. People judge your business by your website in the first 0.05 seconds. If your website looks like it was built in 2015, visitors assume your business is stuck in 2015 too. Clean, minimal design with good typography and whitespace builds trust instantly. Cluttered layouts with stock photos and Comic Sans do the opposite.",
      "Number seven. You do not own it. This one is scary but common. Your website was built by a freelancer who hosts it on his own server. Or it is on a website builder that charges you monthly and does not let you export your data. If you cannot download your website's source code, move it to a different host, or transfer the domain to your name, you do not own it. You are renting it. And one day the landlord might disappear.",
      "If you checked three or more of these boxes, it might be cheaper and faster to rebuild your website from scratch than to fix the existing one. A clean, fast, modern business website takes 7 to 14 days to build and starts at 25,000 rupees. Sometimes starting fresh is the smarter move.",
    ],
  },
  {
    slug: "how-to-choose-web-development-company",
    title: "How to choose a web development company without getting scammed",
    description:
      "Red flags, green flags, and the exact questions to ask before you pay anyone to build your website or app.",
    date: "2026-06-05",
    readingTime: "7 min read",
    tags: ["Business", "Guide"],
    body: [
      "I have been on both sides of this conversation. As a client who hired developers and got burned. And as a studio owner who builds for clients. Here is everything I wish someone had told me before I hired my first web development company.",
      "Start with the red flags because these will save you the most money.",
      "Red flag number one: they cannot show you live websites. Not screenshots. Not Figma mockups. Actual live URLs that you can open in your browser right now. If a web development company cannot show you 3 to 5 websites they built that are currently live and working, they are either too new or their work did not survive contact with the real world. Both are bad signs.",
      "Red flag number two: they quote by the hour without a cap. Hourly billing is how web projects go from 50,000 to 2,00,000 without anyone noticing. Every question you ask becomes billable. Every revision costs extra. Always ask for a fixed price with a clear scope. If the scope changes, the price changes through a formal change order that you approve in advance.",
      "Red flag number three: they want equity or revenue share instead of payment. This sounds flattering. 'We believe in your idea so much that we want to be partners.' What it actually means is they cannot get paying clients and are hoping your idea will pay off. Professional studios charge money for their work. Pay them. Own everything. Move on.",
      "Red flag number four: they refuse to give you the source code. This is the biggest scam in the Indian web development market. You pay for a website but the code lives on the developer's server, the domain is in their name, and the hosting is tied to their account. If you have a disagreement or they disappear, you lose everything. Always insist on source code ownership from day one.",
      "Now the green flags.",
      "Green flag number one: they have a clear process. Discovery, design, development, testing, launch. With timelines for each phase and a staging link where you can see progress. If they can explain their process in 5 minutes and it sounds structured, they have done this before.",
      "Green flag number two: they tell you what they will NOT do. A company that says yes to everything is a company that will under-deliver on everything. Good studios will tell you 'that feature is out of scope for this budget' or 'you do not need that right now, ship without it and add it later.' That honesty is worth more than enthusiasm.",
      "Green flag number three: they build with modern technology. In 2026, if someone is building your business website on WordPress and charging you 50,000 rupees or more, ask them why. Next.js, React, and Tailwind CSS are not fancy buzzwords. They are production-grade tools that make websites faster, more secure, and easier to maintain.",
      "Here are the exact questions to ask before signing anything. Can I see 3 live websites you have built? Is the price fixed or hourly? Will I own the source code and domain? What happens after launch, do you offer support? What is your tech stack and why? How do you handle scope changes? Can I talk to a past client?",
      "If they answer all of these clearly and confidently, you have probably found a good partner. If they dodge any of them, keep looking. There are plenty of good development studios in India. You just need to know what to look for.",
    ],
  },
  {
    slug: "why-we-left-prisma-for-drizzle",
    title: "Why we left Prisma for Drizzle in 2026",
    description:
      "A pragmatic write-up of the migration: what broke, what got faster, and the cases where we'd still pick Prisma.",
    date: "2026-04-12",
    readingTime: "9 min read",
    tags: ["Engineering", "Postgres"],
    body: [
      "Every studio has a default stack. Ours has been Next.js, Postgres, and Prisma for three years. Earlier this quarter we moved a client's production app to Drizzle. Here's the honest version.",
      "Prisma is excellent until your query patterns leave its happy path. Once you need real SQL — recursive CTEs, window functions, partial indexes — you end up writing `$queryRaw` and losing type safety anyway.",
      "Drizzle inverts that trade-off. You write SQL-ish TypeScript, and what you write is what runs. There is no engine binary, no shadow database, no migration script that surprises you at 2am.",
      "We'd still pick Prisma for a CRUD-heavy admin panel where speed of authoring matters more than raw control. For everything that has to be production-grade past a year, we'd pick Drizzle now.",
    ],
  },
  {
    slug: "row-level-security-is-the-feature",
    title: "Row-level security is the feature, not the implementation detail",
    description:
      "If you're building multi-tenant SaaS in 2026 and tenant isolation lives in your application code, you have a security bug waiting to happen.",
    date: "2026-03-28",
    readingTime: "7 min read",
    tags: ["Security", "Postgres"],
    body: [
      "The most common multi-tenant bug we see during code review is the same: a query that forgets to filter by `tenant_id`. Usually in an analytics endpoint. Usually written by a senior engineer in a hurry.",
      "Application-level isolation is one missed `WHERE` away from a cross-tenant data leak. Postgres row-level security moves the check into the database, where it can't be forgotten.",
      "The cost is real — you write policies, you set session variables, you debug `permission denied` errors that look mysterious until you remember they're the system working. We think the trade is worth it for any product where a tenant leak is an existential event.",
    ],
  },
  {
    slug: "eval-driven-development",
    title: "Eval-driven development for production AI",
    description:
      "Why the eval set, not the prompt, is the artifact you should ship first when adding AI to a real product.",
    date: "2026-03-10",
    readingTime: "11 min read",
    tags: ["AI", "Engineering"],
    body: [
      "If you can't tell whether your AI feature got better or worse this week, you don't have an AI feature — you have a vibe.",
      "We start every AI engagement by writing the eval set before the prompt. 100–300 cases drawn from real user questions, scored by a reference model and spot-checked by a human.",
      "Once you have evals, everything downstream gets easier. Model swaps become a regression test. Prompt edits ship behind a flag with confidence intervals. Cost optimisation stops being a guess.",
      "The team that owns the eval set owns the AI feature. Make sure that's your team, not your vendor's.",
    ],
  },
  {
    slug: "the-async-week",
    title: "How we run a five-engineer async week",
    description:
      "Our written-first operating cadence: what we use Loom for, what we use Linear for, and why we killed standups.",
    date: "2026-02-18",
    readingTime: "6 min read",
    tags: ["Operations"],
    body: [
      "We have engineers in three time zones and exactly one synchronous meeting per week. Here is how the rest of it works.",
      "Linear is the source of truth for what is being built. Loom is the source of truth for what changed this week. Slack is for fast questions, not decisions.",
      "Every Friday, the engineer on point records a five-minute Loom for the client: what shipped, what's next, what's blocked. The Loom links every ticket. The client watches it on Monday morning in their timezone. That is the entire status meeting.",
    ],
  },
  {
    slug: "postgres-first-architecture",
    title: "Postgres-first architecture for early-stage SaaS",
    description:
      "Why your first 18 months of infrastructure should fit on one Postgres instance — and the patterns that let it.",
    date: "2026-01-22",
    readingTime: "10 min read",
    tags: ["Architecture", "Postgres"],
    body: [
      "Most early-stage SaaS teams introduce a queue, a cache, and a vector database before they have 100 paying customers. Then they hire an SRE to operate all four.",
      "Postgres can be your queue (via SKIP LOCKED), your cache (for most read patterns), your search index (via pg_trgm and tsvector), and your vector store (via pgvector). One thing to back up, one thing to monitor.",
      "We're not religious about this — when you hit real scale you'll outgrow it. But choosing to outgrow Postgres is a much better problem than choosing to operate five services with three engineers.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
