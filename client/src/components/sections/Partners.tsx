export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-background border-t border-border/50">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight tracking-tight">
          Our Startup Partners
        </h2>
        <p className="text-base text-foreground/65 leading-relaxed font-regular mb-10 max-w-2xl">
          Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { title: "Skilled Teams", desc: "Access talented students" },
            { title: "Cost-Effective", desc: "High-quality work" },
            { title: "Fresh Perspectives", desc: "New approaches" },
            { title: "Flexible", desc: "Defined scope" }
          ].map((item, idx) => (
            <div key={idx} className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-md hover:shadow-primary/20 transition-all">
              <h3 className="font-sans font-bold text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm font-regular">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-lg p-8 text-center">
          <p className="text-foreground/60 font-regular text-sm">Partner profiles coming soon</p>
        </div>
      </div>
    </section>
  );
}
