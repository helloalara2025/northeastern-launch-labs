export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            What We Do
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Northeastern Launch Labs connects students across all majors to work on real-world projects. Gain hands-on experience, develop professional skills, and create portfolio-ready work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Real Projects", 
              desc: "Work that ships. Make impact.",
              color: "bg-blue-50 border-blue-200"
            },
            { 
              title: "Collaboration", 
              desc: "Different perspectives. Better solutions.",
              color: "bg-purple-50 border-purple-200"
            },
            { 
              title: "Manageable", 
              desc: "3–5 hours/week. Fits your schedule.",
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
