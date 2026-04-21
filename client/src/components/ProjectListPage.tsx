import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useState, useMemo } from "react";
import { Search, ChevronDown, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface ProjectListPageProps {
  /** Page title, e.g. "PROJECT DATABASE." */
  title: string;
  /** Highlighted word in the title (rendered in red) */
  titleHighlight: string;
  /** Optional team type filter */
  teamType?: "innovation" | "launch";
  /** Badge text shown above the title */
  badgeLabel?: string;
}

export default function ProjectListPage({
  title,
  titleHighlight,
  teamType,
  badgeLabel,
}: ProjectListPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: projects, isLoading } = trpc.projects.list.useQuery(
    teamType ? { teamType } : undefined
  );

  const domains = useMemo(() => {
    if (!projects) return ["All Domains"];
    return ["All Domains", ...Array.from(new Set(projects.map((p) => p.domain)))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    return projects.filter((project) => {
      const matchesDomain = selectedDomain === "All Domains" || project.domain === selectedDomain;
      const searchLower = searchQuery.toLowerCase();
      const tech = project.tech as string[];
      const matchesSearch =
        project.name.toLowerCase().includes(searchLower) ||
        project.subtitle.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.projectId.toLowerCase().includes(searchLower) ||
        tech.some((t) => t.toLowerCase().includes(searchLower));

      return matchesDomain && matchesSearch;
    });
  }, [projects, searchQuery, selectedDomain]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Split title into parts around the highlight word
  const titleParts = title.split(titleHighlight);

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="pt-40 pb-16 md:pt-56 md:pb-24 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

          {/* Red Arc SVG Strokes */}
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
                <span className="w-2 h-2 rounded-full bg-red"></span>
                {filteredProjects.length} Projects{badgeLabel ? ` • ${badgeLabel}` : ""}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9] uppercase">
              {titleParts[0]}
              <span className="text-red">{titleHighlight}</span>
              {titleParts[1] || ""}
            </h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mt-12 max-w-3xl">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, tech, or teams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary border border-[rgba(255,255,255,0.1)] rounded-lg py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-red transition-colors font-mono text-sm"
                />
              </div>
              <div className="relative min-w-[200px]">
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full bg-secondary border border-[rgba(255,255,255,0.1)] rounded-lg py-4 px-4 text-white appearance-none focus:outline-none focus:border-red transition-colors font-mono text-sm cursor-pointer"
                >
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="py-12 md:py-24 relative">
          <div className="container max-w-5xl">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-red" />
                <span className="ml-4 text-muted font-mono">Loading projects...</span>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.projectId}
                    project={project}
                    isExpanded={expandedId === project.projectId}
                    onToggle={() => toggleExpand(project.projectId)}
                  />
                ))}

                {filteredProjects.length === 0 && (
                  <div className="text-center py-20 border border-[rgba(255,255,255,0.05)] rounded-xl bg-secondary">
                    <p className="text-xl text-muted font-mono">No projects found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedDomain("All Domains");
                      }}
                      className="mt-6 text-red hover:text-white transition-colors font-mono text-sm uppercase tracking-wider"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
