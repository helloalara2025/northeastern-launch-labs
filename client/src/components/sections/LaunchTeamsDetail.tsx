export default function LaunchTeamsDetail() {
  return (
    <section id="launch-detail" className="py-20 bg-gray-50 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Launch Teams
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work closely with founders on product development, prototyping, and strategy with defined scopes and timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Startup Operations", desc: "Experience how early-stage companies work" },
            { title: "Professional Development", desc: "Build communication and project management skills" },
            { title: "Technical Growth", desc: "Apply skills in real production environments" }
          ].map((item, idx) => (
            <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
