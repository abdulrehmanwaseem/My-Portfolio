import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
  VIDEO_TESTIMONIALS,
} from "../../data/testimonials";
import { Panel } from "../panel";
import { TestimonialItem } from "./testimonial-item";
import { VideoTestimonialItem } from "./video-testimonial-item";
import { VideoTestimonialPlaceholder } from "./video-testimonial-placeholder";

/** Video row width. Short of this, the gap is filled with placeholder cards. */
const VIDEO_SLOTS = 3;

export function TestimonialsMarquee() {
  return (
    <Panel
      id="testimonials"
      className="before:z-11 after:z-10 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
    >
      <h2 className="sr-only">Testimonials</h2>

      {/* Video row. Same card box as the marquee rows below, but static: a
          Marquee autoFills by cloning its children, which would repeat the
          same clip across the row and slide it away mid-playback. Worth
          revisiting as a Marquee once there are enough clips to fill it. */}
      {/* grow+basis rather than a fixed width: the row is a couple of px
          narrower than 3x16rem, and a fixed width overflows into a scrollbar.
          min-w stops the cards collapsing on a phone, where the row scrolls
          instead. */}
      <div className="flex overflow-x-auto">
        {VIDEO_TESTIMONIALS.slice(0, VIDEO_SLOTS).map((item) => (
          <div
            key={item.authorName}
            className="min-w-52 grow basis-64 border-r border-edge"
          >
            <VideoTestimonialItem {...item} />
          </div>
        ))}

        {Array.from({
          length: Math.max(0, VIDEO_SLOTS - VIDEO_TESTIMONIALS.length),
        }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="min-w-52 grow basis-64 border-r border-edge"
          >
            <VideoTestimonialPlaceholder />
          </div>
        ))}
      </div>

      <div className="screen-line-before screen-line-after relative flex h-4 w-full" />

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent>
          {TESTIMONIALS_1.slice()
            .sort((a, b) => a.authorName.localeCompare(b.authorName))
            .map((item) => (
              <MarqueeItem
                key={item.authorName}
                className="mx-0 h-full w-xs border-r border-edge"
              >
                <TestimonialItem {...item} />
              </MarqueeItem>
            ))}
        </MarqueeContent>
      </Marquee>

      <div className="screen-line-before screen-line-after relative flex h-4 w-full" />

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent direction="right">
          {TESTIMONIALS_2.slice()
            .sort((a, b) => a.authorName.localeCompare(b.authorName))
            .map((item) => (
              <MarqueeItem
                key={item.authorName}
                className="mx-0 h-full w-xs border-r border-edge"
              >
                <TestimonialItem {...item} />
              </MarqueeItem>
            ))}
        </MarqueeContent>
      </Marquee>
    </Panel>
  );
}
