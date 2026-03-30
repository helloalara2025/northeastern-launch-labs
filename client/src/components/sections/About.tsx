export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-white border-t border-gray-100">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-semibold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            What is<br />
            <span className="text-red-900">Launch Labs?</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-medium">
            Northeastern Launch Labs brings together students across disciplines to work on real-world, end-to-end projects. Through Launch Teams and Innovation Teams, members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills.
          </p>
        </div>

        {/* Three pillars */}
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
            <div key={idx} className="bg-white border border-gray-100  p-6 hover:border-gray-100 hover:shadow-sm transition-all duration-300">
              <h3 className="font-sans font-semibold text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
