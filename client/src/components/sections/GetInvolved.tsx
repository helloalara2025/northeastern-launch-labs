export default function GetInvolved() {
  const opportunities = [
    { 
      title: "Become a Member", 
      desc: "Join a Launch Team or Innovation Team. Open to all Northeastern students.",
      href: "#"
    },
    { 
      title: "Propose a Project", 
      desc: "Submit a project proposal for an Innovation Team to bring to life.",
      href: "#"
    },
    { 
      title: "Startup Partnership", 
      desc: "Are you a founder? Partner with talented student teams.",
      href: "#"
    },
    { 
      title: "Leadership", 
      desc: "Shape Launch Labs and mentor peers. 5–8 hours/week.",
      href: "#"
    }
  ];

  return (
    <section id="get-involved" className="py-32 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container">
        <div className="mb-20">
          <h2 className="font-sans font-semibold text-6xl lg:text-7xl text-foreground leading-tight">
            <span className="text-red-800">Join</span> Launch Labs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href} className="group">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:border-red-200 hover:-translate-y-1">
                <h3 className="font-sans font-semibold text-lg text-foreground mb-3 group-hover:text-red-800 transition-colors">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-medium flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-red-800 font-semibold text-sm group-hover:gap-2 transition-all">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
