import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Urbanist } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/jsonld";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(),
  verification: {
    google: "RyZ3SZJiWXbVSfRqQkIiH3aGHL_gbau-q9sT5RW16JU",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  email: site.email,
  telephone: "+918109745019",
  serviceType: [
    "Website Design",
    "Website Development",
    "E-Commerce Development",
    "Web Application Development",
    "Mobile App Development",
    "AI Product Development",
    "MVP Development",
    "UI/UX Design",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Postgres",
    "Supabase",
    "AI/ML Integration",
    "LLM Applications",
    "RAG Pipelines",
    "Vercel Deployment",
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
  ],
  priceRange: "$$",
  sameAs: [site.social.x, site.social.github, site.social.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable} dark`}>
      <body className="min-h-screen antialiased">
        <JsonLd data={organizationSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
