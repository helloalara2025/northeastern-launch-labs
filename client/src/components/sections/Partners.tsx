export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Our Startup Partners
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Skilled Teams", desc: "Access talented students" },
            { title: "Cost-Effective", desc: "High-quality work" },
            { title: "Fresh Perspectives", desc: "New approaches" },
            { title: "Flexible", desc: "Defined scope" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-base font-regular">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground/50 text-base font-regular">Partner profiles coming soon</p>
      </div>
    </section>
  );
}
