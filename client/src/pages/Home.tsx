import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { ArrowRight, Loader2 } from "lucide-react";
import { useMemo } from "react";

export default function Home() {
  const { data: projects, isLoading } = trpc.projects.list.useQuery();
  const featured = useMemo(() => (projects ?? []).slice(0, 3), [projects]);

  return (
    <div className="bg-[#F5F0EB] text-[#1a1a1a] min-h-screen">
      <Navigation />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,26,19,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Red arcs — top-right */}
          <svg
            className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1.5" opacity="0.15" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.8" opacity="0.08" />
          </svg>

          {/* Red arcs — bottom-left */}
          <svg
            className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] pointer-events-none"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="0" cy="500" r="350" stroke="#8B1A13" strokeWidth="1" opacity="0.08" />
          </svg>

          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] text-[#8B1A13] uppercase tracking-[0.25em] mb-8 border border-[#8B1A13]/30 bg-[#8B1A13]/8 px-4 py-2 inline-block">
              NORTHEASTERN STUDENT-LED ORGANIZATION
            </span>

            <h1 className="font-sans font-extrabold text-[32px] md:text-[48px] lg:text-[56px] text-[#1a1a1a] leading-[0.95] tracking-[-0.03em] mb-6 max-w-3xl uppercase">
              Real Projects. <br />
              <span className="text-[#8B1A13]">Real Experience.</span>
            </h1>

            <p className="font-sans font-normal text-[15px] md:text-[16px] text-[#1a1a1a]/50 leading-[1.7] max-w-[520px] mb-10">
              A student-led club where teams build end-to-end products — partnering with startups and developing original projects across disciplines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 bg-[#8B1A13] text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 hover:bg-[#8B1A13]/90 transition-all duration-200 hover:-translate-y-[1px]"
              >
                VIEW PROJECTS <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border-2 border-[#1a1a1a]/15 text-[#1a1a1a] font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 hover:border-[#8B1A13]/40 hover:text-[#8B1A13] transition-all duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO — Red accent section ── */}
        <section className="py-20 md:py-28 bg-[#8B1A13] text-white relative overflow-hidden">
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="container relative z-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="text-xs font-mono text-white/60 uppercase tracking-[0.2em] mb-4">
                  What We Do
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                  TWO TRACKS
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                  We bring together students across disciplines to work on projects that go beyond the classroom.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="pl-6 border-l-2 border-white/40">
                    <h4 className="text-white/90 font-mono text-xs uppercase tracking-[0.2em] mb-2">
                      Launch Teams
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      Partner with startups to build and ship real products.
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-[#f5c518]">
                    <h4 className="text-[#f5c518] font-mono text-xs uppercase tracking-[0.2em] mb-2">
                      Innovation Teams
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      Develop original projects from concept to completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="py-20 md:py-28 border-b border-[#1a1a1a]/8">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
              <div>
                <h2 className="text-xs font-mono text-[#8B1A13] uppercase tracking-[0.2em] mb-4">
                  Current Work
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                  FEATURED PROJECTS
                </h3>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[#8B1A13] hover:text-[#1a1a1a] transition-colors font-mono text-xs uppercase tracking-[0.15em]"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-[#8B1A13]" />
                <span className="ml-3 text-[#1a1a1a]/40 font-mono text-sm">Loading...</span>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {featured.map((project, idx) => {
                  const tech = project.tech as string[];
                  return (
                    <Link
                      key={project.id}
                      href={`/projects/${project.id}`}
                      className="group bg-white border border-[#1a1a1a]/8 p-8 hover:border-[#8B1A13]/40 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-[#8B1A13]/5"
                    >
                      <span className="font-mono text-[#8B1A13] text-sm font-bold mb-5">
                        0{idx + 1}
                      </span>

                      <span className="font-mono text-[10px] text-[#1a1a1a]/25 uppercase tracking-[0.15em] mb-2">
                        {project.projectId}
                      </span>

                      <h4 className="text-lg font-bold mb-3 uppercase tracking-tight group-hover:text-[#8B1A13] transition-colors">
                        {project.name}
                      </h4>

                      <p className="text-[#1a1a1a]/45 leading-relaxed mb-6 flex-grow text-sm">
                        {project.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-[#8B1A13]/60 bg-[#8B1A13]/5 px-2 py-1 border border-[#8B1A13]/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ── ANNOUNCEMENTS ── */}
        <section className="py-20 md:py-28 border-b border-[#1a1a1a]/8">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-xs font-mono text-[#8B1A13] uppercase tracking-[0.2em] mb-4">
                Announcements
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                WHAT'S HAPPENING
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* E-Board Applications */}
              <div className="bg-white border-2 border-[#8B1A13]/20 p-8 md:p-10 relative overflow-hidden group hover:border-[#8B1A13]/50 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#8B1A13]" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B1A13] opacity-5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#8B1A13]/30 bg-[#8B1A13]/8">
                      <span className="w-1.5 h-1.5 bg-[#8B1A13] animate-pulse" />
                      <span className="font-mono text-[10px] text-[#8B1A13] uppercase tracking-[0.15em] font-bold">
                        Now Open
                      </span>
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-3">
                    E-Board Applications
                  </h4>
                  <p className="text-[#1a1a1a]/50 leading-relaxed mb-6">
                    We're recruiting leadership for Fall 2026. Positions include Secretary, Treasurer, Events Chair, Operations Chair, and Graphic Designer. Help shape the future of Launch Labs.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeRnvxsGPbkl7Nuo4WX77wV6sB8twjy5v5W1SP7oqjrjZ6CAw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8B1A13] text-white font-mono text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#8B1A13]/90 transition-colors duration-200"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Project Applications */}
              <div className="bg-white border border-[#1a1a1a]/8 p-8 md:p-10 relative overflow-hidden group hover:border-[#f5c518]/50 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#f5c518]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#f5c518]/40 bg-[#f5c518]/10">
                      <span className="w-1.5 h-1.5 bg-[#f5c518]" />
                      <span className="font-mono text-[10px] text-[#b8940f] uppercase tracking-[0.15em] font-bold">
                        Coming Soon
                      </span>
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-3">
                    Project Team Applications
                  </h4>
                  <p className="text-[#1a1a1a]/50 leading-relaxed mb-6">
                    Applications for Launch Teams and Innovation Teams will open at the start of Fall 2026. Follow us on Instagram and LinkedIn to get notified when applications go live.
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/nulaunchlabs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#1a1a1a]/15 text-[#1a1a1a] font-mono text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:border-[#8B1A13]/40 hover:text-[#8B1A13] transition-colors duration-200"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/nulaunchlabs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#1a1a1a]/15 text-[#1a1a1a] font-mono text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:border-[#8B1A13]/40 hover:text-[#8B1A13] transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
