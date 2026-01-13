export default function LaunchTeamsDetail() {
  return (
    <section id="launch-detail" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
            Launch Teams
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed font-regular mb-8">
            Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work closely with founders on product development, prototyping, and strategy with defined scopes and timelines.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Startup Operations", desc: "Experience how early-stage companies work" },
              { title: "Professional Development", desc: "Build communication and project management skills" },
              { title: "Technical Growth", desc: "Apply skills in real production environments" }
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
