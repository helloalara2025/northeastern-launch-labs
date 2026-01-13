export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-200">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-semibold text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-medium">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Real-World Projects", 
              desc: "Work that ships and makes impact."
            },
            { 
              title: "Cross-Disciplinary", 
              desc: "Engineers, designers, business students working together."
            },
            { 
              title: "3–5 Hours/Week", 
              desc: "Meaningful commitment, manageable workload."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-red-100 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="font-sans font-semibold text-lg text-red-800 mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
