export default function LaunchTeamsDetail() {
  return (
    <section id="launch-detail" className="py-32 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-semibold text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            Launch Teams<br />
            <span className="text-red-800">Build Products That Ship</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-medium">
            Launch Teams partner directly with early-stage startups to design, build, and deliver real-world solutions. Members work closely with founders and stakeholders on development-focused projects, including product development, software or data implementation, prototyping, and iterative testing, alongside strategy and research. Teams operate with defined scopes, timelines, and deliverables, providing hands-on experience contributing to live products and systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Startup Operations", 
              desc: "Experience how early-stage companies work and make decisions.",
              icon: "🏢"
            },
            { 
              title: "Professional Development", 
              desc: "Build communication, project management, and collaboration skills.",
              icon: "📈"
            },
            { 
              title: "Technical Growth", 
              desc: "Apply your skills in real production environments with real impact.",
              icon: "⚙️"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
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
