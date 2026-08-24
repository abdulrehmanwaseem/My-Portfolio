/**
 * Fills a leftover slot in the video row so a single clip does not sit next to
 * dead space. The source SVG is solid black, hence the invert in dark mode.
 */
export function VideoTestimonialPlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <img
        src="/images/winking-face.svg"
        alt=""
        aria-hidden="true"
        className="size-14 opacity-35 dark:invert"
      />

      <p className="font-handwriting text-2xl/tight text-muted-foreground">
        You could be
        <br />
        next here!
      </p>
    </div>
  );
}
