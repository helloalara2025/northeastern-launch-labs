export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-bold text-5xl lg:text-6xl text-foreground mb-8 leading-tight tracking-tight">
            Our Startup Partners
          </h2>
          <p className="text-lg text-foreground/65 leading-relaxed font-regular">
            Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Skilled Student Teams", desc: "Access talented students from all programs" },
            { title: "Cost-Effective Development", desc: "High-quality work for early-stage ventures" },
            { title: "Fresh Perspectives", desc: "Students bring emerging technologies and new approaches" },
            { title: "Flexible Commitment", desc: "Semester-long engagements with defined scope" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-foreground/8 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-sans font-bold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-foreground/5 rounded-xl p-12 text-center">
          <p className="text-foreground/60 font-regular text-base">Partner profiles coming soon</p>
        </div>
      </div>
    </section>
  );
}
