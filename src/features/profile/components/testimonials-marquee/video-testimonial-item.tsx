import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorBio,
  TestimonialAuthorName,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialVerifiedBadge,
} from "@/registry/testimonials-marquee";

import type { VideoTestimonial as VideoTestimonialType } from "../../types/testimonials";
import { VideoPlayer } from "./video-player";

export function VideoTestimonialItem({
  src,
  poster,
  authorAvatar,
  authorName,
  authorBio,
  url,
  theme,
}: VideoTestimonialType) {
  return (
    <div className="block h-full transition-colors hover:bg-accent2">
      <Testimonial>
        {/*
          Stands in for TestimonialQuote. The card is sized 9:16 to match the
          phone-shot clips, so the video fills it edge to edge with no
          letterboxing.
        */}
        <div className="grow">
          <VideoPlayer src={src} poster={poster} label={authorName} />
        </div>

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
