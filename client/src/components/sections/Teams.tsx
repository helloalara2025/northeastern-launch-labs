export default function Teams() {
  return (
    <section id="teams" className="py-32 bg-white border-t border-gray-200">
      <div className="container">
        <div className="mb-20">
          <h2 className="font-sans font-semibold text-6xl lg:text-7xl text-foreground leading-tight">
            Two Ways to<br />
            <span className="text-red-800">Get Involved</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Launch Teams */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
            <div className="relative bg-white border-2 border-red-800 rounded-3xl p-12 hover:shadow-2xl transition-all duration-300">
              <h3 className="font-sans font-semibold text-3xl text-red-800 mb-6">Launch Teams</h3>
              
              <div className="space-y-3 mb-8">
                {[
                  "Work with real startups",
                  "Build real solutions",
                  "Develop real skills"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/70 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              
              <a href="#launch-detail" className="inline-flex items-center gap-2 text-red-800 font-semibold hover:gap-3 transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Innovation Teams */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-12 hover:shadow-2xl transition-all duration-300">
              <h3 className="font-sans font-semibold text-3xl text-foreground mb-6">Innovation Teams</h3>
              
              <div className="space-y-3 mb-8">
                {[
                  "Define the problem",
                  "Build the solution",
                  "Own the outcome"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/70 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              
              <a href="#innovation-detail" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:gap-3 transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
