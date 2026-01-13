export default function About() {
  return (
    <section id="about" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
            What We Do
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed font-regular mb-8">
            Northeastern Launch Labs connects students across all majors to work on real-world projects. Gain hands-on experience, develop professional skills, and create portfolio-ready work.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Real Projects", desc: "Work that ships." },
              { title: "Collaboration", desc: "Better together." },
              { title: "Manageable", desc: "3–5 hours/week." }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-sans font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-regular">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
