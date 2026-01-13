export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Innovation Teams: Own the Full Product Journey
          </h2>
          <p className="text-lg text-foreground/65 leading-relaxed font-regular">
            Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation. These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Product Thinking", desc: "Learn to identify problems worth solving" },
            { title: "Collaboration", desc: "Work across engineering, design, and business" },
            { title: "Ownership", desc: "Take full responsibility from start to finish" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-3xl">🚀</div>
              <h3 className="font-sans font-bold text-xl text-foreground">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
