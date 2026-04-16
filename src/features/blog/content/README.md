# Blog Content

This directory contains MDX blog posts.

## Publishing Checklist

Each MDX file must include frontmatter with required fields:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and preview (120-160 chars)"
createdAt: "2026-04-15"
updatedAt: "2026-04-15"
# Optional fields
image: "/images/blogs/your-image.png" # 1200x630 recommended
category: "nextjs" # for filtering
tags: ["nextjs", "react"] # for SEO keywords
pinned: false
draft: false # set true to hide from production
---
```

### SEO Best Practices

- **Slug**: Use kebab-case in filename (e.g., `my-post-title.mdx`)
- **Title**: 50-60 characters, include primary keyword
- **Description**: 120-160 characters, action-oriented (verbs like "Learn", "Build", "Create")
- **H1**: Use only one `<h1>` matching the title
- **Headings**: Use H2/H3 for semantic structure
- **Internal links**: Link to 2-3 related posts or portfolio sections
- **Images**: Use absolute URLs or paths under `/public`
- **Avoid**: thin content (<300 words), duplicate titles, missing createdAt

See `src/features/blog/` for the blog system implementation.

## Commands

```bash
# Preview blog locally
pnpm dev

# Build to verify no errors
pnpm build
```
