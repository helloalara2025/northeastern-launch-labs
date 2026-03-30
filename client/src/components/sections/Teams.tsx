export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-white border-t border-gray-100">
      <div className="container">
        <h2 className="font-sans font-semibold text-4xl lg:text-5xl text-foreground mb-16 leading-tight">
          Two Ways to<br />
          <span className="text-red-900">Make an Impact</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="group bg-gradient-to-br from-#F5F5F5 to-white border border-gray-100  p-8 hover:border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-red-900  flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-2xl text-foreground mb-2">Launch Teams</h3>
            </div>
            <p className="text-foreground/70 text-base leading-relaxed font-medium mb-6">
              Partner with early-stage startups to design, build, and deliver real-world solutions.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-foreground/70">
                <span className="text-red-900 font-bold">•</span>
                <span>Work with real founders and stakeholders</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground/70">
                <span className="text-red-900 font-bold">•</span>
                <span>Defined scopes, timelines, deliverables</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground/70">
                <span className="text-red-900 font-bold">•</span>
                <span>Contribute to live products and systems</span>
              </li>
            </ul>
          </div>

          {/* Innovation Teams */}
          <div className="group bg-gradient-to-br from-amber-50 to-white border border-gray-100  p-8 hover:border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100  flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-2xl text-foreground mb-2">Innovation Teams</h3>
            </div>
            <p className="text-foreground/70 text-base leading-relaxed font-medium mb-6">
              Take internally scoped projects from problem definition through execution.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-foreground/70">
                <span className="text-gray-100 font-bold">•</span>
                <span>Full ownership from research to presentation</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground/70">
                <span className="text-gray-100 font-bold">•</span>
                <span>Cross-functional collaboration</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground/70">
                <span className="text-gray-100 font-bold">•</span>
                <span>Portfolio-ready outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
