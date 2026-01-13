export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t-4 border-purple-200">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-black text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-bold">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Real-World Projects", 
              desc: "Work that ships and makes impact.",
              bg: "from-blue-200 to-blue-300",
              border: "border-blue-400",
              emoji: "🚀"
            },
            { 
              title: "Cross-Disciplinary", 
              desc: "Engineers, designers, business students working together.",
              bg: "from-purple-200 to-purple-300",
              border: "border-purple-400",
              emoji: "🎨"
            },
            { 
              title: "3–5 Hours/Week", 
              desc: "Meaningful commitment, manageable workload.",
              bg: "from-green-200 to-green-300",
              border: "border-green-400",
              emoji: "⏰"
            }
          ].map((item, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${item.bg} border-4 ${item.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-sans font-black text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/80 text-base leading-relaxed font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
