export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
            Innovation Teams
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed font-regular mb-8">
            Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through execution with emphasis on skill-building and ownership.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Product Thinking", desc: "Learn to identify problems worth solving" },
              { title: "Collaboration", desc: "Work across engineering, design, and business" },
              { title: "Ownership", desc: "Take full responsibility from start to finish" }
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
