export function Videos() {
  return (
    <section id="videos" className="bg-sand-50 py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="section-eyebrow text-sun-600">Videos</span>
            <h2 className="mt-4 text-balance font-sans text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Touching Hope Founder receives award for helping families in need.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700/90">
              Watch the story behind the work and the recognition for serving
              families through practical support, care, and hope.
            </p>
          </div>

          <div className="overflow-hidden border border-leaf-900/10 bg-ink-900 shadow-lg">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/GzwOJWw1Ieo"
                title="Touching Hope Founder receives award for helping families in need"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
