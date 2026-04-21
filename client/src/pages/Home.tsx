import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

/* ── tiny star field component ── */
function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${3 + s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      setScrollProgress(windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: projects, isLoading } = trpc.projects.list.useQuery();

  // Pick first 3 projects as featured
  const featured = useMemo(() => (projects ?? []).slice(0, 3), [projects]);

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-red z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navigation />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <StarField />

          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Orbital arcs — top-right */}
          <svg
            className="absolute top-[-120px] right-[-220px] w-[700px] h-[700px] pointer-events-none"
            viewBox="0 0 700 700"
            fill="none"
          >
            <circle cx="700" cy="0" r="350" stroke="#dc2626" strokeWidth="1" opacity="0.25" />
            <circle cx="700" cy="0" r="450" stroke="#dc2626" strokeWidth="0.6" opacity="0.15" />
            <circle cx="700" cy="0" r="550" stroke="#dc2626" strokeWidth="0.3" opacity="0.08" />
          </svg>

          {/* Orbital arcs — bottom-left */}
          <svg
            className="absolute bottom-[-120px] left-[-220px] w-[700px] h-[700px] pointer-events-none"
            viewBox="0 0 700 700"
            fill="none"
          >
            <circle cx="0" cy="700" r="350" stroke="#dc2626" strokeWidth="1" opacity="0.25" />
            <circle cx="0" cy="700" r="450" stroke="#dc2626" strokeWidth="0.6" opacity="0.15" />
          </svg>

          {/* Rocket trajectory — a subtle dashed diagonal line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            fill="none"
          >
            <line
              x1="200"
              y1="800"
              x2="1200"
              y2="100"
              stroke="#dc2626"
              strokeWidth="0.5"
              strokeDasharray="8 12"
              opacity="0.2"
            />
            {/* Small "exhaust" dots along the trajectory */}
            <circle cx="400" cy="600" r="1.5" fill="#dc2626" opacity="0.3" />
            <circle cx="600" cy="450" r="1" fill="#dc2626" opacity="0.25" />
            <circle cx="800" cy="300" r="1.5" fill="#dc2626" opacity="0.2" />
            <circle cx="1000" cy="200" r="1" fill="#dc2626" opacity="0.15" />
          </svg>

          {/* Dot grid cluster — bottom-left */}
          <div className="absolute bottom-20 left-20 hidden md:grid grid-cols-5 gap-2 opacity-60">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className={`w-[3px] h-[3px] rounded-full ${
                  i % 7 === 0
                    ? "bg-red"
                    : i % 11 === 0
                    ? "bg-yellow"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>

          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] text-red uppercase tracking-[0.25em] mb-8 border border-red/30 bg-red/10 px-4 py-2 rounded-full inline-block">
              NORTHEASTERN STUDENT ORGANIZATION
            </span>

            <h1 className="font-sans font-extrabold text-[40px] md:text-[72px] lg:text-[84px] text-white leading-[0.9] tracking-[-0.03em] mb-8 max-w-5xl uppercase">
              We Build What <br />
              <span className="text-red">Others Study.</span>
            </h1>

            <p className="font-sans font-normal text-[17px] md:text-[19px] text-white/50 leading-[1.7] max-w-[620px] mb-12">
              Students from every major building real projects together. We bridge
              the gap between classroom theory and shipping actual products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red/90 transition-all duration-200 hover:-translate-y-[1px]"
              >
                VIEW PROJECTS <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border border-[rgba(255,255,255,0.15)] text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:border-white/40 transition-all duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </section>

        {/* ═══════════════ MISSION TEASER ═══════════════ */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.08)] relative overflow-hidden">
          {/* Subtle constellation lines */}
          <svg
            className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.06]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <line x1="50" y1="50" x2="200" y2="120" stroke="white" strokeWidth="1" />
            <line x1="200" y1="120" x2="350" y2="80" stroke="white" strokeWidth="1" />
            <line x1="200" y1="120" x2="180" y2="300" stroke="white" strokeWidth="1" />
            <circle cx="50" cy="50" r="3" fill="white" />
            <circle cx="200" cy="120" r="3" fill="white" />
            <circle cx="350" cy="80" r="3" fill="white" />
            <circle cx="180" cy="300" r="3" fill="white" />
          </svg>

          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">
                  The Mission
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                  WHY WE EXIST
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl text-white leading-relaxed mb-10 font-medium">
                  We bring together students across disciplines and experience
                  levels to work on real-world, end-to-end projects that bridge
                  classroom learning with practical impact.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Launch Teams",
                      desc: "Partner with real startups to build products that matter.",
                      color: "red",
                    },
                    {
                      label: "Innovation Teams",
                      desc: "Develop internal projects from idea to shipped product.",
                      color: "yellow",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`pl-6 border-l-2 border-${item.color}`}
                    >
                      <h4 className={`text-${item.color} font-mono text-xs uppercase tracking-[0.2em] mb-2`}>
                        {item.label}
                      </h4>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ STATS BAR ═══════════════ */}
        <section className="py-16 border-b border-[rgba(255,255,255,0.08)] bg-secondary/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "8+", label: "Active Projects" },
                { value: "50+", label: "Team Members" },
                { value: "6", label: "Disciplines" },
                { value: "1", label: "Shared Mission" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-sans font-extrabold text-4xl md:text-5xl text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-white/40 uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FEATURED PROJECTS ═══════════════ */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.08)] relative overflow-hidden">
          {/* Faint orbital ring */}
          <svg
            className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="300" cy="300" r="280" stroke="#dc2626" strokeWidth="0.4" opacity="0.1" />
          </svg>

          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">
                  Mission Log
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                  FEATURED PROJECTS
                </h3>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.15em]"
              >
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-red" />
                <span className="ml-4 text-white/40 font-mono">Loading...</span>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {featured.map((project, idx) => {
                  const tech = project.tech as string[];
                  return (
                    <Link
                      key={project.id}
                      href={`/projects/${project.id}`}
                      className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 md:p-10 hover:border-red/40 transition-all duration-300 relative overflow-hidden flex flex-col"
                    >
                      {/* Hover glow */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500" />

                      {/* Index */}
                      <span className="font-mono text-red text-sm font-bold mb-6">
                        0{idx + 1}
                      </span>

                      {/* Project ID badge */}
                      <span className="inline-block font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-3">
                        {project.projectId}
                      </span>

                      <h4 className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-tight group-hover:text-red transition-colors">
                        {project.name}
                      </h4>

                      <p className="text-white/50 leading-relaxed mb-8 flex-grow text-sm">
                        {project.subtitle}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-white/40 bg-[rgba(255,255,255,0.04)] px-2 py-1 border border-[rgba(255,255,255,0.06)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-red transition-colors font-mono text-xs uppercase tracking-wider">
                        View Project <ArrowRight size={12} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════ CTA ═══════════════ */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <StarField />

          <div className="container relative z-10">
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-12 md:p-20 text-center relative group hover:border-red/30 transition-colors duration-500">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red opacity-0 group-hover:opacity-[0.04] rounded-full blur-3xl transition-opacity duration-700" />

              {/* Orbital ring decoration */}
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.06]"
                viewBox="0 0 500 500"
                fill="none"
              >
                <circle cx="250" cy="250" r="200" stroke="#dc2626" strokeWidth="0.5" strokeDasharray="4 8" />
                <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="0.3" />
              </svg>

              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em] mb-6 relative z-10">
                MISSION CONTROL
              </h2>
              <h3 className="font-sans font-extrabold text-[28px] md:text-[44px] uppercase text-white leading-[1.05] tracking-[-0.02em] mb-8 max-w-3xl mx-auto relative z-10">
                READY FOR LAUNCH?
              </h3>
              <p className="font-sans font-normal text-[17px] text-white/50 leading-[1.7] max-w-2xl mx-auto mb-12 relative z-10">
                Join a team, build something real, and launch your career before
                you graduate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link
                  href="/forms"
                  className="inline-flex items-center gap-3 bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red/90 transition-all duration-200 hover:-translate-y-[1px]"
                >
                  APPLY NOW <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 border border-[rgba(255,255,255,0.15)] text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:border-white/40 transition-all duration-200"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
