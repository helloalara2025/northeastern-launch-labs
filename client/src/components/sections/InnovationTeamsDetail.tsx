export default function InnovationTeamsDetail() {
  return (
    <section id="innovation-detail" className="py-32 bg-white border-t border-gray-200">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-semibold text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            Innovation Teams<br />
            <span className="text-red-800">Own the Full Journey</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-medium">
            Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation. These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Product Thinking", 
              desc: "Learn to identify problems worth solving and validate solutions.",
              icon: "💡"
            },
            { 
              title: "Cross-Functional Collaboration", 
              desc: "Work across engineering, design, and business disciplines.",
              icon: "🤝"
            },
            { 
              title: "Full Ownership", 
              desc: "Take responsibility from problem definition through final presentation.",
              icon: "🎯"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-amber-200 transition-all duration-300 h-full flex flex-col">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
