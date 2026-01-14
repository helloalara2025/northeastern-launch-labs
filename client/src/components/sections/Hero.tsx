export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(164, 30, 52, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(164, 30, 52, 0.05) 0%, transparent 50%)'
      }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-800 text-xs font-semibold uppercase tracking-widest mb-8 border border-red-100">
            <span className="w-1.5 h-1.5 bg-red-800 rounded-full animate-pulse"></span>
            Northeastern Student Org
          </div>
          
          {/* Main headline with visual hierarchy */}
          <div className="mb-8">
            <h1 className="font-sans font-semibold text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
              From Idea to<br />
              <span className="text-black">Impact.</span>
            </h1>
          </div>
          
          {/* Subheadline with better spacing */}
          <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed mb-8 max-w-2xl font-medium">
            Work on real-world projects with startups and peers. Gain hands-on experience, build portfolio-ready work, and explore entrepreneurship.
          </p>
          
          {/* CTA buttons with better spacing */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#get-involved" className="inline-flex items-center justify-center px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Apply to Join
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#teams" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 border-2 border-gray-300 text-foreground font-semibold rounded-lg hover:bg-gray-200 hover:border-red-800 transition-all duration-300">
              Explore Teams
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
