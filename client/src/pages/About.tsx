/**
 * About.tsx — About the organization.
 *
 * Sections: Hero → Mission → Principles (How We Operate).
 */
import { Navigation, Footer } from "@/layouts";

export default function About() {
  return (
    <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
      <Navigation />
      <main>
        {/* Hero Header */}
        <section className="pt-40 pb-16 md:pt-56 md:pb-24 border-b border-[#1a1a1a]/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,26,19,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

          <svg
            className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1.5" opacity="0.15" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.8" opacity="0.08" />
          </svg>

          <div className="container relative z-10">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#8B1A13]/20 bg-[#8B1A13]/5 text-xs font-mono text-[#8B1A13] uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#f5c518]"></span>
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9] uppercase">
              BUILDING <span className="text-[#8B1A13]">BUILDERS.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#1a1a1a]/60 leading-relaxed max-w-3xl">
              Students from every major building real projects together. We bridge the gap between classroom theory and shipping actual products.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 border-b border-[#1a1a1a]/8">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              {/* Left label */}
              <div className="md:col-span-4">
                <h2 className="text-xs font-mono text-[#8B1A13] uppercase tracking-[0.2em] mb-4">The Mission</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">WHY WE EXIST</h3>
              </div>

              {/* Right content */}
              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-8 font-medium">
                  Our goal is to bring together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
                </p>

                <div className="space-y-6">
                  <div className="pl-6 border-l-3 border-[#8B1A13]">
                    <p className="text-lg text-[#1a1a1a]/70 leading-relaxed">
                      Through <strong className="text-[#8B1A13]">Launch Teams</strong> partnering with startups and <strong className="text-[#8B1A13]">Innovation Teams</strong> developing internal, end-to-end projects, members gain practical experience tackling real-world problems.
                    </p>
                  </div>
                  <div className="pl-6 border-l-3 border-[#f5c518]">
                    <p className="text-lg text-[#1a1a1a]/70 leading-relaxed">
                      The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values — Red background section */}
        <section className="py-20 md:py-28 bg-[#8B1A13] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="text-xs font-mono text-white/50 uppercase tracking-[0.2em] mb-4">The Principles</h2>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">HOW WE OPERATE</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                {
                  title: "Real-World Impact",
                  desc: "We work on projects that matter — with real clients, real constraints, and real outcomes. Students learn by doing, not by studying.",
                },
                {
                  title: "Cross-Disciplinary Collaboration",
                  desc: "The best solutions come from diverse perspectives. We bring together engineers, designers, business students, and domain experts.",
                },
                {
                  title: "Leadership Development",
                  desc: "We believe every student can lead. We create environments where students take ownership, make decisions, and grow as leaders.",
                },
                {
                  title: "Continuous Learning",
                  desc: "We embrace ambiguity and iteration. Failure is a learning opportunity, and feedback drives growth.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-[#8B1A13] p-10 md:p-12 group hover:bg-[#7a1611] transition-colors duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[#f5c518] font-mono text-sm font-bold shrink-0 mt-1">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tight text-white">
                        {value.title}
                      </h4>
                      <p className="text-white/65 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
