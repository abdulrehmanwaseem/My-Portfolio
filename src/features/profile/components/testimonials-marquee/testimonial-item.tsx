import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorBio,
  TestimonialAuthorName,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
  TestimonialVerifiedBadge,
} from "@/registry/testimonials-marquee";

import type { Testimonial as TestimonialType } from "../../types/testimonials";

export function TestimonialItem({
  authorAvatar,
  authorName,
  authorBio,
  url,
  quote,
  theme,
}: TestimonialType) {
  return (
    <div className="block h-full transition-colors hover:bg-accent2">
      <Testimonial>
        <TestimonialQuote>
          <p>{quote}</p>
        </TestimonialQuote>

        <TestimonialAuthor className="border-edge">
          <TestimonialAvatar>
            <TestimonialAvatarImg
              theme={theme}
              src={authorAvatar}
              alt={authorName}
            />
            <TestimonialAvatarRing />
          </TestimonialAvatar>

          <TestimonialAuthorName href={url}>
            {authorName}
            <TestimonialVerifiedBadge />
          </TestimonialAuthorName>

          <TestimonialAuthorBio>{authorBio}</TestimonialAuthorBio>
        </TestimonialAuthor>
      </Testimonial>
    </div>
  );
}
