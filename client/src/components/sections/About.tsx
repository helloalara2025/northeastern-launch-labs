export default function About() {
  return (
    <section id="about" className="py-16 bg-background border-t border-border/50">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight tracking-tight">
            What We Do
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed font-regular mb-12">
            Northeastern Launch Labs connects students across all majors to work on real-world projects. Gain hands-on experience, develop professional skills, and create portfolio-ready work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Real Projects", desc: "Work that ships. Make impact." },
              { title: "Collaboration", desc: "Different perspectives. Better solutions." },
              { title: "Manageable", desc: "3–5 hours/week. Fits your schedule." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-primary"></div>
                </div>
                <h3 className="font-sans font-bold text-base text-foreground">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-regular">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
