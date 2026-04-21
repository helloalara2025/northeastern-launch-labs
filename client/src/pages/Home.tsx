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
    <div className="bg-primary text-white min-h-screen">
      <Navigation />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Single subtle arc — top-right */}
          <svg
            className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1" opacity="0.15" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.5" opacity="0.08" />
          </svg>

          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] text-red uppercase tracking-[0.25em] mb-8 border border-red/30 bg-red/10 px-4 py-2 rounded-full inline-block">
              NORTHEASTERN STUDENT ORGANIZATION
            </span>

            <h1 className="font-sans font-extrabold text-[40px] md:text-[64px] lg:text-[76px] text-white leading-[0.95] tracking-[-0.03em] mb-8 max-w-4xl uppercase">
              Real Projects. <br />
              <span className="text-red">Real Experience.</span>
            </h1>

            <p className="font-sans font-normal text-[17px] md:text-[18px] text-white/50 leading-[1.7] max-w-[580px] mb-12">
              A student-run club where teams build end-to-end products — partnering with startups and developing original projects across disciplines.
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
        </section>

        {/* ── WHAT WE DO ── */}
        <section className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.08)]">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">
                  What We Do
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                  TWO TRACKS
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
                  We bring together students across disciplines to work on projects that go beyond the classroom.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="pl-6 border-l-2 border-red">
                    <h4 className="text-red font-mono text-xs uppercase tracking-[0.2em] mb-2">
                      Launch Teams
                    </h4>
                    <p className="text-white/50 leading-relaxed">
                      Partner with startups to build and ship real products.
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-yellow">
                    <h4 className="text-yellow font-mono text-xs uppercase tracking-[0.2em] mb-2">
                      Innovation Teams
                    </h4>
                    <p className="text-white/50 leading-relaxed">
                      Develop original projects from concept to completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.08)]">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
              <div>
                <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">
                  Current Work
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                  FEATURED PROJECTS
                </h3>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.15em]"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-red" />
                <span className="ml-3 text-white/40 font-mono text-sm">Loading...</span>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {featured.map((project, idx) => {
                  const tech = project.tech as string[];
                  return (
                    <Link
                      key={project.id}
                      href={`/projects/${project.id}`}
                      className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red/30 transition-all duration-300 flex flex-col"
                    >
                      <span className="font-mono text-red text-sm font-bold mb-5">
                        0{idx + 1}
                      </span>

                      <span className="font-mono text-[10px] text-white/25 uppercase tracking-[0.15em] mb-2">
                        {project.projectId}
                      </span>

                      <h4 className="text-lg font-bold mb-3 uppercase tracking-tight group-hover:text-red transition-colors">
                        {project.name}
                      </h4>

                      <p className="text-white/45 leading-relaxed mb-6 flex-grow text-sm">
                        {project.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-white/35 bg-[rgba(255,255,255,0.04)] px-2 py-1 border border-[rgba(255,255,255,0.06)]"
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

      </main>

      <Footer />
    </div>
  );
}
