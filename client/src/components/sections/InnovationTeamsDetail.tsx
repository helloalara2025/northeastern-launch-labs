export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-20 bg-white border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Innovation Teams: Own the Full Product Journey
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation. These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Product Thinking", desc: "Learn to identify problems worth solving" },
            { title: "Collaboration", desc: "Work across engineering, design, and business" },
            { title: "Ownership", desc: "Take full responsibility from start to finish" }
          ].map((item, idx) => (
            <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
