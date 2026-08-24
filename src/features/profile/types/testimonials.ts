export type Testimonial = {
  /** URL to the person's profile picture or avatar image */
  authorAvatar: string;
  /** Full display name of the person giving the testimonial */
  authorName: string;
  /** Short biography or professional title of the person */
  authorBio: string;
  /** Link to the person's profile, website, or social media page */
  url: string;
  /** The testimonial text content or recommendation message */
  quote: string;

  theme?: boolean;
};

/** Same card as a Testimonial, with the quote replaced by a video clip. */
export type VideoTestimonial = Omit<Testimonial, "quote"> & {
  /** Path to the mp4 under /public. */
  src: string;
  /** Poster frame shown before playback; the clip itself is not preloaded. */
  poster: string;
};
