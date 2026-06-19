import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CtaButton } from "@/components/cta-button";
import { GridBg } from "@/components/grid-bg";
import { JsonLd } from "@/components/jsonld";
import { posts, getPost } from "@/content/posts";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getPost(params.slug);
  if (!p) return buildMetadata({ title: "Note" });
  return buildMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    type: "article",
    publishedTime: p.date,
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="relative overflow-hidden border-b border-line">
        <GridBg />
        <Container className="relative py-16 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All notes
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent"
                >
                  {t}
                </span>
              ))}
              <span className="text-[10px] text-ink-subtle">·</span>
              <span className="font-mono text-[10px] text-ink-subtle">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="text-[10px] text-ink-subtle">·</span>
              <span className="font-mono text-[10px] text-ink-subtle">
                {post.readingTime}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-ink-muted">{post.description}</p>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <article className="mx-auto max-w-prose space-y-6 text-lg leading-relaxed text-ink-muted">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </Container>

      <Section>
        <div className="rounded-3xl border border-line bg-bg-raised p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Building something this touches?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            We&rsquo;d love to hear about it. 30 minutes, no pitch deck.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact">Book a discovery call</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
