export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-black text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed font-medium">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Real-World Projects", 
              desc: "Work that ships and makes impact.",
              color: "from-orange-50 to-orange-100",
              accent: "bg-orange-500"
            },
            { 
              title: "Cross-Disciplinary", 
              desc: "Engineers, designers, business students working together.",
              color: "from-blue-50 to-blue-100",
              accent: "bg-blue-600"
            },
            { 
              title: "3–5 Hours/Week", 
              desc: "Meaningful commitment, manageable workload.",
              color: "from-teal-50 to-teal-100",
              accent: "bg-teal-600"
            }
          ].map((item, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border border-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
              <div className={`w-3 h-3 ${item.accent} rounded-full mb-4`}></div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
