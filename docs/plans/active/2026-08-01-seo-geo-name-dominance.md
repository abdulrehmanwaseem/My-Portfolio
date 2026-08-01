# Execution Plan: SEO/GEO — Own the "Truong Nguyen Anh Khoa" Query

Date: 2026-08-01

## Status

Active

## Outcome

Two observable results:

1. **Google**: searching `Truong Nguyen Anh Khoa` (and `Trương Nguyễn Anh Khoa`)
   returns `nhkhoa.site` as the #1 organic result, ideally with a knowledge panel.
2. **AI engines**: asking ChatGPT / Perplexity / Claude / Gemini "who is Truong
   Nguyen Anh Khoa" returns an accurate answer — current job title (AI Workflow &
   Automation Engineer at VML), Van Lang University, Ho Chi Minh City — that
   cites `nhkhoa.site`, and resolves the identity across website + Facebook +
   Instagram + LinkedIn + GitHub as one person.

## Context

Derived from two audits run 2026-08-01 (SEO + GEO). Key source files:

- `src/app/robots.ts` — blocks the entire AI content layer
- `src/config/site.ts:6` — `SITE_INFO.url` is apex; Vercel serves www
- `src/app/(app)/(root)/page.tsx:81-96` — thin `Person` schema, no `sameAs`
- `src/app/(llms)/llms.txt/route.ts:6-7` — wrong profession hardcoded
- `src/app/(llms)/llms-full.txt/route.ts` — wrong profession in `<SYSTEM>` block
- `src/features/profile/data/social-links.ts` — only LinkedIn + GitHub
- `src/features/profile/data/user.ts` — current truth for title/keywords
- `src/components/mdx.tsx` — no `img` override, so raw `<img>` for 44MB of images

### Blocking discovery (2026-08-01)

`site:nhkhoa.site` returns **zero** results. So do `"Truong Nguyen Anh Khoa"`,
`"Trương Nguyễn Anh Khoa" Văn Lang`, and `nhkhoa.site portfolio`. No
`google-site-verification` or `msvalidate` meta tag is present in the live HTML;
`BingSiteAuth.xml` returns 404.

**The site appears to be unindexed.** Ranking work is meaningless until this is
resolved, so indexation becomes Phase 0. This has NOT been confirmed in Search
Console — that is the first task, because `site:` returning empty via a search
API is suggestive but not authoritative.

## Scope

In scope:

- Indexation diagnosis and repair (GSC + Bing verification, submission)
- Host canonicalization (apex vs www)
- Entity graph: `Person` schema `sameAs` across website/FB/IG/LinkedIn/GitHub
- AI crawler access + correcting the AI-facing content layer
- Content citation density, statistics, FAQ schema, answer-first rewrites
- Vietnamese locale handling (hreflang, `lang`) to claim the VI niche
- Image weight reduction (Core Web Vitals, a confirmed ranking input)
- Off-site profile consistency (the reciprocal half of `sameAs`)

Out of scope:

- Paid tools, link buying, backlink outreach campaigns
- Redesign or new features unrelated to search visibility
- Anything requiring accounts we cannot access (Brave index, third-party sites)

## Approach

Six phases, ordered by dependency. Each phase is independently shippable.
Phases 0-2 are mechanical and unblock everything else; Phase 3 needs Khoa's
real numbers; Phases 4-5 are off-site and slower to take effect.

### Phase 0 — Indexation (blocking; nothing else matters first)

Everything downstream assumes Google can see the site. Verify that first.

1. Verify domain ownership in **Google Search Console** (DNS TXT covers apex +
   www + all subdomains — do this rather than the HTML-file method).
2. Read the **Pages** report. Distinguish the actual cause:
   - Never discovered → submit sitemap, request indexing
   - "Discovered - currently not indexed" → crawl budget / quality signal
   - "Page with redirect" → the apex/www defect (Phase 1) is the cause
   - Manual action → address directly
3. Verify **Bing Webmaster Tools** (gates Copilot citations; can import from GSC).
4. Submit `sitemap.xml` to both. Request indexing for `/` explicitly.
5. Record what the reports actually said in `## Decisions` below.

### Phase 1 — Host canonicalization + deploy current truth

Fixes the site-wide canonical defect and ships 3 months of stale metadata.

1. In Vercel → Domains, set **`nhkhoa.site` (apex) as primary**, redirect
   `www` → apex. This matches all existing code, so no code change is needed.
   Confirm `APP_URL` is unset in Vercel env, or set to the apex.
2. Merge and deploy `feat/graduation-update`. This ships the VML job title, the
   corrected keywords, and `/invitation` (currently 404 live, needed before
   the 6 Aug event).
3. Verify: `curl -sSI https://nhkhoa.site` returns 200 (not 307), and the live
   canonical matches the served host.

### Phase 2 — Entity graph + AI access (the core of both goals)

This is the single highest-leverage phase for both Google (knowledge panel) and
AI engines (entity resolution). Do it as one commit.

1. **Unblock the AI layer** in `src/app/robots.ts`: remove `Disallow` for
   `/llms.txt`, `/llms-full.txt`, `/*.md`, `/*.mdx`, `/og/`. Add explicit
   `Google-Extended: Allow` (separate opt-in from Googlebot; gates Gemini and
   AI Overview grounding). Rely on canonical tags for HTML/markdown dedup.
2. **Add Facebook + Instagram** to `src/features/profile/data/social-links.ts`.
   These URLs do not currently exist anywhere in the repo — Khoa must supply
   them. Without them the cross-platform half of the goal cannot be built.
3. **Expand `Person` schema** in `src/app/(app)/(root)/page.tsx`, deriving from
   `USER` and `SOCIAL_LINKS` rather than hardcoding:
   - `sameAs`: LinkedIn, GitHub, Facebook, Instagram (the identity claim that
     lets AI engines resolve all profiles to one person)
   - `jobTitle`, `worksFor` (VML), `alumniOf` (Van Lang University)
   - `address` (Ho Chi Minh City, VN), `knowsAbout`, `email`, `nationality`
   - `alternateName`: include the Vietnamese spelling `Trương Nguyễn Anh Khoa`
     so both orthographies resolve to the same entity
4. **Fix the AI-facing copy** in `src/app/(llms)/llms.txt/route.ts` and
   `llms-full.txt/route.ts`. Both currently say "Design Engineer" and advertise
   a "component registry" that does not exist. Derive the title from
   `USER.jobTitle` so it cannot drift again. Name VML, Van Lang University, and
   Ho Chi Minh City explicitly as entity anchors.
5. **Add `FAQPage` schema** to the homepage, answering the questions people
   actually ask an AI: "Who is Truong Nguyen Anh Khoa?", "What does he do?",
   "Where did he study?", "What is Agentic RAG?" Answer-first, 2-3 sentences.
6. Add `Blog` + `ItemList` schema to `/blog` (currently only inherits `WebSite`).
7. Create a real HTML `/about` page (currently 404; only the robots-blocked
   `/about.md` exists). This is the conventional entity-resolution target and
   gives a dedicated URL for richer `Person` + FAQ markup.
8. Add RSS autodiscovery (`alternates.types`) in the root layout.

### Phase 3 — Content citation-worthiness

Requires Khoa's real numbers. GEO audit measured **zero** external citations
across all three posts; "Cite Sources" is the strongest documented GEO lever.

1. Add 5-10 authoritative outbound citations per post (RAG papers, Open edX
   docs, primary sources). Consider dropping `nofollow` for genuine citations —
   `src/components/mdx.tsx:157` currently applies it to all external links.
2. Add **real statistics**: thesis results, accuracy/latency figures, Etsy
   volume and revenue. The current "numbers" in these posts are mostly section
   numbers, not data.
3. Add at least one comparison **table** per post (currently zero; tables are
   the most reliably extracted structure for AI answers).
4. Rewrite openings **answer-first**. All three currently open with narrative
   preamble ("This article documents the research journey..."), which contains
   no citeable claim.
5. Add `FAQPage` schema per post.
6. Fix the duplicate `<h1>` in `ai-ecommerce-case-study.mdx` (demote the body
   `#` to `##`; the other two posts already start at `##`).
7. Bump `updatedAt` honestly as part of this work — freshness is a documented
   citation factor and all three posts have never been revised.

### Phase 4 — Vietnamese locale (cheapest path to actual citations)

English-language Agentic RAG content is saturated; Vietnamese is close to empty,
and the VI post is the longest original content on the site (1767 words) —
currently mislabeled as English.

1. Add `locale` (`en`/`vi`) and `translationOf` to post frontmatter.
2. Emit reciprocal hreflang via `alternates.languages` in `generateMetadata`,
   including a **self-referencing** entry plus `x-default`. Without
   self-reference Google discards the entire cluster.
3. Fix `<html lang>` per locale. Currently hardcoded `lang="en"` in
   `src/app/layout.tsx:131`, so the Vietnamese post declares itself English.
   Requires either a `[locale]` segment or setting `lang` on the article wrapper
   as a partial signal.
4. Ensure the Vietnamese name `Trương Nguyễn Anh Khoa` appears in indexable
   body copy, not only in the `keywords` meta (which Google ignores).

### Phase 5 — Off-site entity reinforcement

`sameAs` is a one-way claim. Search and AI engines weight it far more when the
target profile links back. This phase is Khoa's to execute, not code.

1. On **Facebook** and **Instagram**: put `nhkhoa.site` in the bio/website
   field, and set the display name to match `USER.displayName` exactly.
2. Same on **LinkedIn** (featured/website) and **GitHub** (profile website
   field). GitHub and LinkedIn carry extra weight for Copilot/Bing.
3. Keep the job title identical across all five surfaces — "AI Workflow &
   Automation Engineer at VML". Conflicting titles are the main reason AI
   engines hedge or state something outdated.
4. Consider a Google Knowledge Panel claim once the entity graph is live and
   the site is indexed.

## Risks And Recovery

- **Risk**: The site is unindexed for a reason we have not identified (manual
  action, or a prior deployment serving `noindex`). Mitigation: Phase 0 reads
  GSC directly rather than inferring. No live `noindex` meta tag or
  `X-Robots-Tag` was observed, so this is unlikely but unconfirmed.
- **Risk**: Switching the primary host in Vercel causes a temporary ranking or
  crawl dip. Mitigation: near-zero exposure here precisely because the site
  isn't ranking yet — this is the cheapest possible moment to make the change.
  Recovery: revert the primary-domain toggle in Vercel; it is not a code change.
- **Risk**: Unblocking `/*.mdx` creates duplicate content against HTML posts.
  Mitigation: canonical tags already point at the HTML URLs. Recovery: re-add
  the single `Disallow` line.
- **Risk**: Ranking #1 for a personal name is not fully in our control — if
  another person shares the name or a high-authority profile (LinkedIn,
  Facebook) outranks the site, #1 may take months. Mitigation: the realistic
  near-term target is "site is on page 1 and owns the entity"; the knowledge
  panel and `sameAs` graph matter more for the AI half of the goal than the
  literal #1 position. Note the SERP is currently empty of competitors, which
  is favorable.
- **Risk**: Phase 3 stalls waiting on Khoa's statistics. Mitigation: Phases
  0-2 and 4 are fully independent; do not block on it.
- **Rollback**: Every code change here is additive metadata or schema. Revert
  the commit; no data migration, no destructive operations.

## Progress

Phase 0 — Indexation

- [ ] Verify domain in Google Search Console via DNS TXT
- [ ] Read Pages report; record the actual reason for non-indexation
- [ ] Verify Bing Webmaster Tools
- [ ] Submit sitemap to both; request indexing for `/`

Phase 1 — Host + deploy

- [ ] Set apex as primary in Vercel; redirect www → apex
- [ ] Confirm `APP_URL` env is unset or apex
- [ ] Merge + deploy `feat/graduation-update`
- [ ] Verify apex returns 200 and canonical matches served host

Phase 2 — Entity graph + AI access

- [ ] Unblock AI layer in `robots.ts`; add `Google-Extended: Allow`
- [ ] Obtain Facebook + Instagram URLs from Khoa
- [ ] Add FB + IG to `social-links.ts`
- [ ] Expand `Person` schema (`sameAs`, `worksFor`, `alumniOf`, `alternateName`)
- [ ] Fix profession/registry copy in both llms routes; derive from `USER`
- [ ] Add `FAQPage` schema to homepage
- [ ] Add `Blog` + `ItemList` schema to `/blog`
- [ ] Create HTML `/about` page
- [ ] Add RSS autodiscovery
- [ ] Validate all schema in Rich Results Test

Phase 3 — Content

- [ ] Collect real statistics from Khoa (thesis + Etsy)
- [ ] Add citations, statistics, tables to 3 posts
- [ ] Rewrite openings answer-first
- [ ] Add per-post `FAQPage`
- [ ] Fix duplicate `<h1>` in case study
- [ ] Compress images >400KB; add `next/image` override in `mdx.tsx`

Phase 4 — Vietnamese locale

- [ ] Add `locale` + `translationOf` frontmatter
- [ ] Emit reciprocal hreflang with self-reference + `x-default`
- [ ] Fix per-locale `<html lang>`
- [ ] Ensure VI name appears in body copy

Phase 5 — Off-site (Khoa)

- [ ] Add `nhkhoa.site` to FB, IG, LinkedIn, GitHub profiles
- [ ] Align display name + job title across all five surfaces

## Decisions

- 2026-08-01: Indexation promoted to Phase 0 ahead of all audit findings.
  `site:nhkhoa.site` returns zero results, so ranking work has no foundation
  until this is resolved.
- 2026-08-01: Chose apex as canonical host rather than www, because
  `SITE_INFO.url`, `sitemap.xml`, and every canonical tag already use apex —
  changing Vercel is a one-setting fix, changing the code is a wider diff.
- 2026-08-01: `sameAs` treated as the central mechanism for the AI half of the
  goal. Cross-platform identity resolution is what lets an AI engine connect
  website + Facebook + Instagram to one person.

## Validation

- Focused proof:
  - `curl -sSI https://nhkhoa.site` → 200, no redirect
  - `curl -sSL https://nhkhoa.site/robots.txt` → no `Disallow` for llms/md/og
  - Rich Results Test on `/` → `Person` with `sameAs` (4 profiles), `FAQPage`
  - `curl -sSL https://nhkhoa.site/llms-full.txt | grep -i "design engineer"`
    → no matches
- Integration or end-to-end proof:
  - GSC Pages report shows `/` as **Indexed**
  - `site:nhkhoa.site` returns results
  - Google `Truong Nguyen Anh Khoa` → nhkhoa.site on page 1, trending to #1
  - Ask ChatGPT / Perplexity / Claude / Gemini "who is Truong Nguyen Anh Khoa"
    → correct title + VML + Van Lang, citing nhkhoa.site. Non-deterministic;
    re-test over several weeks rather than treating one run as proof.
- Repository-required checks:
  - `pnpm lint`, `pnpm build`, plus whatever `.husky` enforces on commit

## Result

Complete after implementation.

Timeline expectation: Phases 0-2 land within days. Indexation typically follows
within 1-2 weeks of a successful GSC submission. Name-query ranking and AI
citation both lag indexing by weeks to months — AI engines only reflect changes
after re-crawling and, for some, retraining. Do not treat week-one AI answers
as a verdict on the work.
