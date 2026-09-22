const demos = [
  { id: "ink-match-cut", name: "Ink Match Cut" },
  { id: "journal-quote", name: "Journal Quote" },
  { id: "sticky-checklist", name: "Sticky Checklist" },
  { id: "tally-poll", name: "Tally Poll" },
];

// Four of the templates, rendered by Scrawlkit itself. Muted and looping,
// the way they would sit in a feed.
export function ScrawlkitDemo() {
  return (
    <section id="demo" className="border-y bg-muted/30 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Four of the templates
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Each one is a real render from scrawlkit.com. The words come from a
          short form; the drawing is the template&apos;s job.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {demos.map((demo) => (
            <figure key={demo.id} className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl border bg-background shadow-lg">
                <video
                  className="aspect-9/16 w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={`/images/products/scrawlkit/${demo.id}.jpg`}
                  aria-label={`${demo.name} demo`}
                >
                  <source
                    src={`/video/scrawlkit/${demo.id}.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
              <figcaption className="text-sm font-medium">
                {demo.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
