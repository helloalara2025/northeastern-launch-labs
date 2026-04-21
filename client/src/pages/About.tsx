import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Hero Header */}
        <section className="pt-40 pb-16 md:pt-56 md:pb-24 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

          <svg
            className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#dc2626" strokeWidth="1" opacity="0.3" />
            <circle cx="600" cy="0" r="500" stroke="#dc2626" strokeWidth="0.5" opacity="0.15" />
          </svg>

          <div className="container relative z-10">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-yellow"></span>
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9] uppercase">
              BUILDING <span className="text-red">BUILDERS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-medium">
              Students from every major building real projects together. We bridge the gap between classroom theory and shipping actual products.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              {/* Left label */}
              <div className="md:col-span-4">
                <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">The Mission</h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">WHY WE EXIST</h3>
              </div>

              {/* Right content */}
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-medium">
                  Our goal is to bring together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
                </p>

                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-red">
                    <p className="text-lg text-white/70 leading-relaxed">
                      Through <strong className="text-white">Launch Teams</strong> partnering with startups and <strong className="text-white">Innovation Teams</strong> developing internal, end-to-end projects, members gain practical experience tackling real-world problems.
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-yellow">
                    <p className="text-lg text-white/70 leading-relaxed">
                      The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border border-red opacity-10 pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="text-xs font-mono text-yellow uppercase tracking-[0.2em] mb-4">The Principles</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">HOW WE OPERATE</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)]">
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
                  className="bg-primary p-10 md:p-12 group hover:bg-secondary transition-colors duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-red font-mono text-sm font-bold shrink-0 mt-1">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-tight">
                        {value.title}
                      </h4>
                      <p className="text-white/60 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container">
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-12 md:p-16 rounded-xl text-center relative group hover:border-red transition-colors duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>

              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em] mb-6">
                TAKE ACTION
              </h2>
              <h3 className="font-sans font-extrabold text-[28px] md:text-[40px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-8">
                READY TO JOIN?
              </h3>
              <p className="font-sans font-normal text-[18px] text-white/60 leading-[1.6] max-w-2xl mx-auto mb-10">
                Whether you're interested in joining a team or leading an initiative, we'd love to hear from you.
              </p>

              <Link
                href="/forms"
                className="inline-flex items-center gap-3 bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red/90 transition-all duration-200 hover:-translate-y-[1px]"
              >
                GET STARTED →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
