import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { domainColors } from "@/components/ProjectCard";
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
      <div className="bg-primary min-h-screen text-foreground font-sans">
        <Navigation />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-8 h-8 animate-spin text-red" />
          <span className="ml-4 text-foreground/55 font-mono">Loading project...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="bg-primary min-h-screen text-foreground font-sans">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-40">
          <p className="text-xl text-foreground/55 font-mono mb-6">Project not found.</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-red hover:text-foreground transition-colors font-mono text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const colors = domainColors[project.domain] || { bg: "#e5e5e5", text: "#333", dot: "#666" };
  const tech = project.tech as string[];

  return (
    <div className="bg-primary min-h-screen text-foreground font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
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
            {/* Back Link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-foreground/55 hover:text-foreground transition-colors font-mono text-xs uppercase tracking-wider mb-8"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>

            {/* Project ID + Domain Badge */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="font-mono text-2xl md:text-3xl font-bold text-red">
                {project.projectId}
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.dot }}></span>
                {project.domain}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-secondary text-xs font-mono text-foreground/55 uppercase tracking-wider capitalize">
                {project.teamType} Team
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.95] uppercase">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 font-medium max-w-3xl">
              {project.subtitle}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 border-b border-foreground/8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl">
              {/* Left Column: Narrative */}
              <div className="md:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] mb-6">Overview</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">{project.description}</p>
                </div>

                {/* MVP Scope */}
                <div className="pl-6 border-l-2 border-red relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-red"></div>
                  <h3 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">MVP Scope</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.mvpScope}</p>
                </div>

                {/* End Goal */}
                <div className="pl-6 border-l-2 border-yellow relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-yellow"></div>
                  <h3 className="text-xs font-mono text-yellow uppercase tracking-[0.2em] mb-4">End Goal</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.endGoal}</p>
                </div>
              </div>

              {/* Right Column: Metadata */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] mb-4">Timeline</h3>
                  <div className="font-mono text-sm text-foreground bg-foreground/3 border border-foreground/5 px-4 py-3 rounded inline-block">
                    {project.timeline}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] mb-4">Team Type</h3>
                  <div className="font-mono text-sm text-foreground bg-foreground/3 border border-foreground/5 px-4 py-3 rounded inline-block capitalize">
                    {project.teamType} Team
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-foreground/70 bg-foreground/5 px-3 py-2 rounded border border-foreground/10"
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

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container">
            <div className="bg-secondary border border-foreground/5 p-12 md:p-16 rounded-xl text-center relative group hover:border-red transition-colors duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>

              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em] mb-6">INTERESTED?</h2>
              <h3 className="font-sans font-extrabold text-[28px] md:text-[40px] uppercase text-foreground leading-[1.1] tracking-[-0.02em] mb-8">
                WANT TO WORK ON THIS PROJECT?
              </h3>
              <p className="font-sans font-normal text-[18px] text-foreground/70 leading-[1.6] max-w-2xl mx-auto mb-10">
                Apply to join a team and contribute to projects like this one.
              </p>

              <Link
                href="/forms"
                className="inline-flex items-center gap-3 bg-red text-white font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-red/90 transition-all duration-200 hover:-translate-y-[1px]"
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
