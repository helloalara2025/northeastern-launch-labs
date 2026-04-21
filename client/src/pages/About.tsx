import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function About() {
  return (
    <div className="bg-primary min-h-screen text-foreground font-sans">
      <Navigation />
      <main>
        {/* Hero Header */}
        <section className="pt-40 pb-16 md:pt-56 md:pb-24 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

          <svg
            className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1" opacity="0.12" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.5" opacity="0.06" />
          </svg>

          <div className="container relative z-10">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-secondary text-xs font-mono text-foreground/55 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-yellow"></span>
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9] uppercase">
              BUILDING <span className="text-red">BUILDERS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-3xl font-medium">
              Students from every major building real projects together. We bridge the gap between classroom theory and shipping actual products.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 border-b border-foreground/8">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              {/* Left label */}
              <div className="md:col-span-4">
                <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">The Mission</h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">WHY WE EXIST</h3>
              </div>

              {/* Right content */}
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-8 font-medium">
                  Our goal is to bring together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
                </p>

                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-red">
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Through <strong className="text-foreground">Launch Teams</strong> partnering with startups and <strong className="text-foreground">Innovation Teams</strong> developing internal, end-to-end projects, members gain practical experience tackling real-world problems.
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-yellow">
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border border-red opacity-5 pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="text-xs font-mono text-yellow uppercase tracking-[0.2em] mb-4">The Principles</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">HOW WE OPERATE</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-foreground/8 border border-foreground/8">
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
                      <p className="text-foreground/60 leading-relaxed">{value.desc}</p>
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
