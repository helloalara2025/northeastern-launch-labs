export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Real-World Projects", 
              desc: "Work that ships and makes impact.",
              color: "bg-blue-50 border-blue-200"
            },
            { 
              title: "Cross-Disciplinary", 
              desc: "Engineers, designers, business students working together.",
              color: "bg-purple-50 border-purple-200"
            },
            { 
              title: "3–5 Hours/Week", 
              desc: "Meaningful commitment, manageable workload.",
              color: "bg-green-50 border-green-200"
            }
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} border rounded-lg p-6`}>
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-regular">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
