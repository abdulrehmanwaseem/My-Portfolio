import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { Post, PostMetadata } from "@/features/blog/types/post";

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent);

  return {
    metadata: file.data as PostMetadata,
    content: file.content,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function isValidDate(value: string) {
  return !Number.isNaN(new Date(value).getTime());
}

function normalizeMetadata(metadata: PostMetadata, slug: string): PostMetadata {
  if (!metadata.title?.trim()) {
    throw new Error(`Missing required frontmatter "title" in ${slug}.mdx`);
  }

  if (!metadata.description?.trim()) {
    throw new Error(
      `Missing required frontmatter "description" in ${slug}.mdx`
    );
  }

  if (!metadata.createdAt || !isValidDate(metadata.createdAt)) {
    throw new Error(
      `Missing or invalid required frontmatter "createdAt" in ${slug}.mdx`
    );
  }

  const updatedAt =
    metadata.updatedAt && isValidDate(metadata.updatedAt)
      ? metadata.updatedAt
      : metadata.createdAt;

  return {
    ...metadata,
    updatedAt,
  };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map<Post>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: normalizeMetadata(metadata, slug),
      slug,
      content,
    };
  });
}

export function getAllPosts() {
  return getMDXData(path.join(process.cwd(), "src/features/blog/content"))
    .filter((post) => !post.metadata.draft)
    .sort((a, b) => {
      if (a.metadata.pinned && !b.metadata.pinned) return -1;
      if (!a.metadata.pinned && b.metadata.pinned) return 1;

      return (
        new Date(b.metadata.createdAt).getTime() -
        new Date(a.metadata.createdAt).getTime()
      );
    });
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.metadata?.category === category);
}

export function findNeighbour(posts: Post[], slug: string) {
  const len = posts.length;

  for (let i = 0; i < len; ++i) {
    if (posts[i].slug === slug) {
      return {
        previous: i > 0 ? posts[i - 1] : null,
        next: i < len - 1 ? posts[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}
