export default function LaunchTeamsDetail() {
  return (
    <section id="launch-detail" className="py-16 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight tracking-tight">
            Launch Teams
          </h2>
          <p className="text-base text-foreground/65 leading-relaxed font-regular">
            Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work closely with founders on product development, prototyping, and strategy with defined scopes and timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Startup Operations", desc: "Experience how early-stage companies work" },
            { title: "Professional Development", desc: "Build communication and project management skills" },
            { title: "Technical Growth", desc: "Apply skills in real production environments" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-primary/30"></div>
              </div>
              <h3 className="font-sans font-bold text-base text-foreground">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
