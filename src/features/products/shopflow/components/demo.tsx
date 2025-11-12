export function ShopFlowDemo() {
  return (
    <section id="demo" className="border-y bg-muted/30 py-20">
      <div className="">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            See ShopFlow in Action
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Watch how ShopFlow streamlines your shop operations with intuitive
            interfaces and powerful features.
          </p>

          <div className="relative overflow-hidden rounded-xl border bg-background shadow-2xl">
            <video
              className="aspect-auto w-full"
              controls
              autoPlay
              // muted
              playsInline
              preload="metadata"
              poster="/images/products/shopflow.png"
            >
              <source src="/video/shopflow-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-2 text-2xl font-bold">⚡</div>
              <h3 className="mb-2 font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Built with performance in mind. Instant updates and real-time
                data synchronization.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-2 text-2xl font-bold">🎯</div>
              <h3 className="mb-2 font-semibold">Intuitive Design</h3>
              <p className="text-sm text-muted-foreground">
                User-friendly interface designed for efficiency. Minimal
                training required.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-2 text-2xl font-bold">📊</div>
              <h3 className="mb-2 font-semibold">Data-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Make informed decisions with comprehensive analytics and
                reporting tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
