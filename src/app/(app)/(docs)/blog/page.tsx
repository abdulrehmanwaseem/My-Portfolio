import dayjs from "dayjs";
import type { Metadata } from "next";
import Link from "next/link";
import type { Blog as BlogSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/data/posts";
import { USER } from "@/features/profile/data/user";

const title = "Blog";
const description =
  "A collection of articles on development, design, and ideas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: "/blog",
    type: "website",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [SITE_INFO.ogImage],
  },
};

function getBlogJsonLd(): WithContext<BlogSchema> {
  const allPosts = getAllPosts();

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${title} – ${SITE_INFO.name}`,
    description,
    url: `${SITE_INFO.url}/blog`,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: USER.displayName,
      url: SITE_INFO.url,
    },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.metadata.title,
      description: post.metadata.description,
      url: `${SITE_INFO.url}/blog/${post.slug}`,
      datePublished: dayjs(post.metadata.createdAt).toISOString(),
      dateModified: dayjs(post.metadata.updatedAt).toISOString(),
    })),
  };
}

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts.map((post, index) => (
            <PostItem
              key={post.slug}
              post={post}
              shouldPreloadImage={index <= 4}
            />
          ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center py-4">
        <Link
          href="/#blog"
          className="text-sm text-muted-foreground underline hover:text-foreground"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </>
  );
}
