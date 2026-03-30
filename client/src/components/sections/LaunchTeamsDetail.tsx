export default function LaunchTeamsDetail() {
  return (
    <section id="launch-detail" className="py-24 bg-white border-t border-gray-100">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-semibold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Launch Teams<br />
            <span className="text-red-900">Build with Startups</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-medium">
            Launch Teams partner directly with early-stage startups to design, build, and deliver real-world solutions. Members work closely with founders on product development, software implementation, prototyping, and iterative testing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Product Development", 
              desc: "Design and build features that ship to real users."
            },
            { 
              title: "Real Stakeholders", 
              desc: "Work directly with founders and product teams."
            },
            { 
              title: "Defined Outcomes", 
              desc: "Clear scopes, timelines, and deliverables."
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
