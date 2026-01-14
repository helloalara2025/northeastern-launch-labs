export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-semibold text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            What is<br />
            <span className="text-red-800">Launch Labs?</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-medium">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through Launch Teams partnering with startups and Innovation Teams developing internal initiatives, members gain practical experience tackling real-world problems. The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation.
          </p>
        </div>

        {/* Three pillars with better visual design */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Real-World Projects", 
              desc: "Work that ships and makes impact with startups and peers.",
              icon: "🚀"
            },
            { 
              title: "Cross-Disciplinary", 
              desc: "Engineers, designers, business students working together.",
              icon: "🤝"
            },
            { 
              title: "3–5 Hours/Week", 
              desc: "Meaningful commitment, manageable workload.",
              icon: "⏱️"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 transition-all duration-300 h-full flex flex-col">
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
