export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-16 bg-background border-t border-border/50">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight tracking-tight">
            Innovation Teams
          </h2>
          <p className="text-base text-foreground/65 leading-relaxed font-regular">
            Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through execution with emphasis on skill-building and ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Product Thinking", desc: "Learn to identify problems worth solving" },
            { title: "Collaboration", desc: "Work across engineering, design, and business" },
            { title: "Ownership", desc: "Take full responsibility from start to finish" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent/30"></div>
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
