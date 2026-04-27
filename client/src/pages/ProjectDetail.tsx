/**
 * ProjectDetail.tsx — Individual project detail view.
 *
 * Fetches a single project by ID and displays full info:
 * overview, MVP scope, end goal, tech stack, and team type.
 */
import { Navigation, Footer } from "@/layouts";
import { domainColors } from "@/components/projects";
import { trpc } from "@/lib/trpc";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const projectId = Number(params?.id);

  const { data: project, isLoading, error } = trpc.projects.getById.useQuery(
    { id: projectId },
    { enabled: !isNaN(projectId) }
  );

  if (isLoading) {
    return (
      <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
        <Navigation />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-8 h-8 animate-spin text-[#8B1A13]" />
          <span className="ml-4 text-[#1a1a1a]/55 font-mono">Loading project...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-40">
          <p className="text-xl text-[#1a1a1a]/55 font-mono mb-6">Project not found.</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#8B1A13] hover:text-[#1a1a1a] transition-colors font-mono text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const colors = domainColors[project.domain] || { bg: "#FEE2E2", text: "#991B1B", dot: "#8B1A13" };
  const tech = project.tech as string[];

  return (
    <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-16 md:pt-56 md:pb-24 border-b border-[#1a1a1a]/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,26,19,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

          <svg
            className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1" opacity="0.12" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.5" opacity="0.06" />
          </svg>

          <div className="container relative z-10">
            {/* Back Link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#1a1a1a]/55 hover:text-[#8B1A13] transition-colors font-mono text-xs uppercase tracking-wider mb-8"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>

            {/* Project ID + Domain Badge */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="font-mono text-2xl md:text-3xl font-bold text-[#8B1A13]">
                {project.projectId}
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                <span className="w-2 h-2" style={{ backgroundColor: colors.dot }}></span>
                {project.domain}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#1a1a1a]/10 bg-white text-xs font-mono text-[#1a1a1a]/55 uppercase tracking-wider capitalize">
                {project.teamType} Team
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 leading-[0.95] uppercase">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-3xl">
              {project.subtitle}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 border-b border-[#1a1a1a]/8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl">
              {/* Left Column: Narrative */}
              <div className="md:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="text-xs font-mono text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-6">Overview</h2>
                  <p className="text-lg text-[#1a1a1a]/80 leading-relaxed">{project.description}</p>
                </div>

                {/* MVP Scope */}
                <div className="pl-6 border-l-2 border-[#8B1A13] relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#F5F0EB] border-2 border-[#8B1A13]"></div>
                  <h3 className="text-xs font-mono text-[#8B1A13] uppercase tracking-[0.2em] mb-4">MVP Scope</h3>
                  <p className="text-[#1a1a1a]/70 leading-relaxed">{project.mvpScope}</p>
                </div>

                {/* End Goal */}
                <div className="pl-6 border-l-2 border-[#f5c518] relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#F5F0EB] border-2 border-[#f5c518]"></div>
                  <h3 className="text-xs font-mono text-[#b8940f] uppercase tracking-[0.2em] mb-4">End Goal</h3>
                  <p className="text-[#1a1a1a]/70 leading-relaxed">{project.endGoal}</p>
                </div>
              </div>

              {/* Right Column: Metadata */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-mono text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-4">Timeline</h3>
                  <div className="font-mono text-sm text-[#1a1a1a] bg-[#8B1A13]/5 border border-[#8B1A13]/10 px-4 py-3 inline-block">
                    {project.timeline}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-4">Team Type</h3>
                  <div className="font-mono text-sm text-[#1a1a1a] bg-[#8B1A13]/5 border border-[#8B1A13]/10 px-4 py-3 inline-block capitalize">
                    {project.teamType} Team
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-[#8B1A13]/70 bg-[#8B1A13]/5 px-3 py-2 border border-[#8B1A13]/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section — Red background */}
        <section className="py-24 bg-[#8B1A13] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center">
              <h2 className="font-mono text-[13px] text-white/50 uppercase tracking-[0.1em] mb-6">INTERESTED?</h2>
              <h3 className="font-sans font-extrabold text-[28px] md:text-[40px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-8">
                WANT TO WORK ON THIS PROJECT?
              </h3>
              <p className="font-sans font-normal text-[18px] text-white/60 leading-[1.6] max-w-2xl mx-auto mb-10">
                Apply to join a team and contribute to projects like this one.
              </p>

              <Link
                href="/forms"
                className="inline-flex items-center gap-3 bg-white text-[#8B1A13] font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 hover:bg-[#f5c518] hover:text-[#1a1a1a] transition-all duration-200 hover:-translate-y-[1px]"
              >
                APPLY NOW →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
