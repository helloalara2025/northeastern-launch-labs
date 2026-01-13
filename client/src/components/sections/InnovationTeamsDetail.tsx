export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-20 bg-white border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Innovation Teams
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through execution with emphasis on skill-building and ownership.
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
