export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
            Our Startup Partners
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed font-regular mb-8">
            Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Skilled Teams", desc: "Access talented students" },
              { title: "Cost-Effective", desc: "High-quality work" },
              { title: "Fresh Perspectives", desc: "New approaches" },
              { title: "Flexible", desc: "Defined scope" }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-sans font-bold text-base text-foreground mb-1">{item.title}</h3>
                <p className="text-foreground/60 text-sm font-regular">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground/50 text-sm font-regular mt-8">Partner profiles coming soon</p>
        </div>
      </div>
    </section>
  );
}
