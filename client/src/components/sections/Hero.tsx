export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(164, 30, 52, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(164, 30, 52, 0.05) 0%, transparent 50%)'
      }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-red-900 text-xs font-semibold uppercase tracking-widest mb-8 border border-gray-100">
            <span className="w-1.5 h-1.5 bg-red-900 rounded-full animate-pulse"></span>
            Northeastern Student Org
          </div>
          
          {/* Main headline */}
          <h1 className="font-sans font-semibold text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            From Idea to<br />
            <span className="text-red-900">Impact.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-2xl font-medium">
            Work on real-world projects with startups and peers. Gain hands-on experience, build portfolio-ready work, and explore entrepreneurship.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#get-involved" className="inline-flex items-center justify-center px-6 py-3 bg-red-900 hover:bg-red-900 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Apply to Join
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#teams" className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-100 text-foreground font-semibold rounded-lg hover:bg-white hover:border-red-900 transition-all duration-300">
              Explore Teams
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
