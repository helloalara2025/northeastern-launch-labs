import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

// Domain Color Map
const domainColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Security": { bg: "#FEE2E2", text: "#991B1B", dot: "#8B1A13" },
  "Navigation": { bg: "#DBEAFE", text: "#1E3A5F", dot: "#2563EB" },
  "FinTech / AI": { bg: "#FEF3C7", text: "#78350F", dot: "#D97706" },
  "Student Life": { bg: "#D1FAE5", text: "#064E3B", dot: "#059669" },
  "Climate / Civic Tech": { bg: "#E0E7FF", text: "#312E81", dot: "#4F46E5" },
  "Health / Mobility": { bg: "#FCE7F3", text: "#831843", dot: "#DB2777" },
  "Security / GRC": { bg: "#FEE2E2", text: "#991B1B", dot: "#8B1A13" },
  "Navigation / Campus": { bg: "#DBEAFE", text: "#1E3A5F", dot: "#2563EB" },
};

export { domainColors };

interface ProjectData {
  id: number;
  projectId: string;
  name: string;
  subtitle: string;
  domain: string;
  timeline: string;
  tech: string[] | unknown;
  description: string;
  mvpScope: string;
  endGoal: string;
  teamType: string;
}

interface ProjectCardProps {
  project: ProjectData;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const colors = domainColors[project.domain] || { bg: "#333", text: "#fff", dot: "#fff" };
  const tech = project.tech as string[];

  return (
    <div
      className={`bg-secondary border transition-all duration-300 overflow-hidden ${
        isExpanded ? "border-red rounded-xl" : "border-[rgba(255,255,255,0.05)] rounded-lg hover:border-[rgba(255,255,255,0.2)]"
      }`}
    >
      {/* Card Header (Always Visible) */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
      >
        <div className="flex items-start gap-6">
          <div className="font-mono text-xl md:text-2xl font-bold text-white/30 group-hover:text-red transition-colors pt-1">
            {project.projectId}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{project.name}</h3>
            <p className="text-muted text-sm md:text-base font-medium">{project.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 self-start md:self-center ml-14 md:ml-0">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.dot }}></span>
            {project.domain}
          </span>
          <div className="text-white/40 group-hover:text-white transition-colors">
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 md:p-8 pt-0 border-t border-[rgba(255,255,255,0.05)] mt-2">
          <div className="grid md:grid-cols-3 gap-12 pt-8">
            {/* Left Column: Narrative */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <p className="text-lg text-white/80 leading-relaxed">{project.description}</p>
              </div>

              <div className="pl-6 border-l-2 border-red relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-red"></div>
                <h4 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-3">MVP Scope</h4>
                <p className="text-muted leading-relaxed">{project.mvpScope}</p>
              </div>

              <div className="pl-6 border-l-2 border-yellow relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-yellow"></div>
                <h4 className="text-xs font-mono text-yellow uppercase tracking-[0.2em] mb-3">End Goal</h4>
                <p className="text-muted leading-relaxed">{project.endGoal}</p>
              </div>
            </div>

            {/* Right Column: Metadata */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Timeline</h4>
                <div className="font-mono text-sm text-white bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-3 py-2 rounded inline-block">
                  {project.timeline}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Team Type</h4>
                <div className="font-mono text-sm text-white bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-3 py-2 rounded inline-block capitalize">
                  {project.teamType} Team
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-white/70 bg-[rgba(255,255,255,0.05)] px-2.5 py-1.5 rounded border border-[rgba(255,255,255,0.1)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-red hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.15em]"
                >
                  View Full Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
