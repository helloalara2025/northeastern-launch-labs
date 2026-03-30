export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-24 bg-white border-t border-gray-100">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-semibold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Innovation Teams<br />
            <span className="text-gray-100">Own the Full Journey</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-medium">
            Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, resulting in portfolio-ready work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Problem Definition", 
              desc: "Research and identify problems worth solving."
            },
            { 
              title: "Full Execution", 
              desc: "Plan, implement, iterate, and present solutions."
            },
            { 
              title: "Portfolio Ready", 
              desc: "Build work that demonstrates real-world skills."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 border border-gray-100  p-6 hover:border-gray-100 hover:shadow-sm transition-all duration-300">
              <h3 className="font-sans font-semibold text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
