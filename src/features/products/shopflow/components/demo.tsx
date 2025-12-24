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
              muted
              playsInline
              preload="metadata"
              poster="/images/products/shopflow.png"
            >
              <source src="/video/software-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
