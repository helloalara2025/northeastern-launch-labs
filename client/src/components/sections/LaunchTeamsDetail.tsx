export default function LaunchTeamsDetail() {
  return (
    <section id="launch-detail" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Launch Teams: Build Products That Ship
          </h2>
          <p className="text-lg text-foreground/65 leading-relaxed font-regular">
            Launch Teams partner directly with early-stage startups to design, build, and deliver real-world solutions. Members work closely with founders and stakeholders on development-focused projects, including product development, software or data implementation, prototyping, and iterative testing, alongside strategy and research. Teams operate with defined scopes, timelines, and deliverables, providing hands-on experience contributing to live products and systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Startup Operations", desc: "Experience how early-stage companies work" },
            { title: "Professional Development", desc: "Build communication and project management skills" },
            { title: "Technical Growth", desc: "Apply skills in real production environments" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-3xl">📊</div>
              <h3 className="font-sans font-bold text-xl text-foreground">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
