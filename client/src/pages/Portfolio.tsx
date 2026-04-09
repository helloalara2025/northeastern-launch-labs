import Navigation from "@/components/sections/Navigation";
import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

// Domain Color Map
const domainColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Security": { bg: "#FEE2E2", text: "#991B1B", dot: "#DC2626" },
  "Navigation": { bg: "#DBEAFE", text: "#1E3A5F", dot: "#2563EB" },
  "FinTech / AI": { bg: "#FEF3C7", text: "#78350F", dot: "#D97706" },
  "Student Life": { bg: "#D1FAE5", text: "#064E3B", dot: "#059669" },
  "Climate / Civic Tech": { bg: "#E0E7FF", text: "#312E81", dot: "#4F46E5" },
  "Health / Mobility": { bg: "#FCE7F3", text: "#831843", dot: "#DB2777" },
  "Security / GRC": { bg: "#FEE2E2", text: "#991B1B", dot: "#DC2626" },
  "Navigation / Campus": { bg: "#DBEAFE", text: "#1E3A5F", dot: "#2563EB" },
};

const projects = [
  {
    id: "T-06",
    name: "AI/ML Pipeline Security",
    subtitle: "End-to-End Protection for the Modern AI Lifecycle",
    domain: "Security",
    timeline: "10 months (scoped to MVP)",
    tech: ["TensorFlow", "PyTorch", "scikit-learn", "NIST AI RMF", "Cryptographic Verification"],
    description: "Comprehensive security framework protecting AI/ML systems across their entire lifecycle — from training data validation to real-time inference monitoring and post-deployment threat detection.",
    mvpScope: "Working adversarial defense and inference monitoring prototype targeting a single ML framework, with compliance reporting against one regulatory standard and a lightweight security dashboard with real-time anomaly detection.",
    endGoal: "Making AI security accessible to ML engineers without deep security expertise, via adversarial robustness testing, role-based access control, audit logging, and compliance integration."
  },
  {
    id: "T-07",
    name: "Indoor Navigation",
    subtitle: "Visual Intelligence Without Infrastructure",
    domain: "Navigation",
    timeline: "8 weeks",
    tech: ["OpenCV", "A* Pathfinding", "Image Matching", "Mobile"],
    description: "Mobile indoor navigation using only the phone's camera — no WiFi, Bluetooth beacons, or installed infrastructure required. Landmark-based visual localization with digitized floor plan pathfinding.",
    mvpScope: "Single-building prototype using OpenCV-based image matching against pre-captured landmark checkpoints, paired with A* pathfinding on a manually digitized floor plan graph.",
    endGoal: "Users select a room, confirm location via landmark recognition, and receive step-by-step visual directions to their destination."
  },
  {
    id: "T-11",
    name: "Document Intelligence",
    subtitle: "Visual Reasoning Beyond OCR",
    domain: "FinTech / AI",
    timeline: "8 weeks",
    tech: ["VLMs", "OCR", "Anomaly Detection", "Document Processing"],
    description: "Autonomous document extraction using Vision-Language Models to transform loan document processing — moving beyond brittle OCR that fails on non-standard layouts.",
    mvpScope: "Single document type (synthetic pay stubs) with targeted extraction of 6-8 key fields, basic consistency validation, and accuracy benchmarking against traditional OCR baselines.",
    endGoal: "Upload a pay stub, receive structured field extractions with confidence scores, and see flagged anomalies — validating VLMs outperform rule-based OCR on unstructured financial documents."
  },
  {
    id: "T-12",
    name: "Roommate Matching",
    subtitle: "Data-Driven Compatibility for Student Housing",
    domain: "Student Life",
    timeline: "8 weeks",
    tech: ["Web Platform", "Database", "Scoring Algorithm", "Privacy-Aware Design"],
    description: "Intelligent roommate matching platform helping students find compatible living partners based on preferences, habits, lifestyle, and values.",
    mvpScope: "Centralized database for user profiles and match criteria, compatibility scoring via weighted preference comparison, and a browsing interface for viewing and filtering potential matches.",
    endGoal: "Students create profiles, input living preferences, and discover compatible roommates ranked by data-driven compatibility scores."
  },
  {
    id: "T-16",
    name: "Community Geospatial Analysis",
    subtitle: "Community-Driven Climate Resilience",
    domain: "Climate / Civic Tech",
    timeline: "1 semester",
    tech: ["Google Earth Engine", "Geospatial Analysis", "Open Data Portals", "Statistical Analysis"],
    description: "Open-source platform empowering citizen scientists to conduct geospatial analyses for sustainable urban development. Initial pilot replicates a 2023 study on cooling effects of urban parks.",
    mvpScope: "Single-pilot deployment on urban heat mitigation, one publishable analysis package, and a functional platform interface for community data exploration.",
    endGoal: "Community uploads local environmental data, runs guided geospatial analyses on park cooling effects, and produces contextualized insights for municipal ecology and development."
  },
  {
    id: "T-17",
    name: "Environment-Aware Fitness Routing",
    subtitle: "Safe Running Through Real-Time Hazard Intelligence",
    domain: "Health / Mobility",
    timeline: "8 weeks",
    tech: ["OpenWeatherMap", "OpenStreetMap", "EPA AirNow", "MBTA GTFS", "OpenRouteService API", "Crowdsourcing"],
    description: "Mobile fitness routing app generating safe running/walking routes by incorporating real-time environmental awareness — ice/snow hazards, air quality zones, and transit proximity.",
    mvpScope: "Single-city (Boston) MVP using lightweight scoring per road segment, crowdsource photo storage for future classification, and core route generation with hazard avoidance.",
    endGoal: "Set a start point and desired distance, receive a route avoiding high ice-risk segments and poor air quality near transit, and contribute real-time sidewalk condition reports."
  },
  {
    id: "T-18",
    name: "Cybersecurity Risk & Governance",
    subtitle: "AI-Driven Risk Assessment Platform",
    domain: "Security / GRC",
    timeline: "8 weeks (240 person-hours)",
    tech: ["NIST CSF", "OpenAI API", "Risk Scoring", "Dashboard", "Compliance Automation"],
    description: "AI-powered cybersecurity risk and governance platform helping organizations identify, assess, and manage cyber risks through NIST CSF compliance frameworks and intelligent dashboards.",
    mvpScope: "Single-framework (NIST) implementation targeting top 20-25 subcategories for SMEs, rule-based risk scoring foundation before AI layering, and 2-3 incident response plan templates.",
    endGoal: "Complete a risk assessment, view compliance posture on an executive dashboard with heatmaps and gap analysis, receive AI-generated security recommendations, and generate incident response plans."
  },
  {
    id: "T-19",
    name: "Campus Navigation",
    subtitle: "Interactive Wayfinding for Northeastern",
    domain: "Navigation / Campus",
    timeline: "8 weeks (6-person team, 5 hrs/wk each)",
    tech: ["React Native", "SVG", "Firebase", "Cross-Platform Mobile"],
    description: "Mobile campus map for students and staff to locate and navigate places within campus buildings. Cross-platform React Native app with interactive SVG floor plans.",
    mvpScope: "Single-building MVP with interactive floor plan rendering, floor switching, searchable Firebase-backed room directory, and static \"You Are Here\" entry-point selector.",
    endGoal: "Open the app, search for any room by name/number/category, locate it on the correct floor plan, and view relevant details — all within seconds."
  }
];

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const domains = ["All Domains", ...Array.from(new Set(projects.map(p => p.domain)))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesDomain = selectedDomain === "All Domains" || project.domain === selectedDomain;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        project.name.toLowerCase().includes(searchLower) ||
        project.subtitle.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.id.toLowerCase().includes(searchLower) ||
        project.tech.some(t => t.toLowerCase().includes(searchLower));
      
      return matchesDomain && matchesSearch;
    });
  }, [searchQuery, selectedDomain]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="pt-40 pb-16 md:pt-56 md:pb-24 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          
          {/* Red Arc SVG Strokes */}
          <svg className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none" viewBox="0 0 600 600" fill="none">
            <circle cx="600" cy="0" r="400" stroke="#dc2626" strokeWidth="1" opacity="0.3"/>
            <circle cx="600" cy="0" r="500" stroke="#dc2626" strokeWidth="0.5" opacity="0.15"/>
          </svg>

          <div className="container relative z-10">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                {filteredProjects.length} Projects • Spring 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9] uppercase">
              PROJECT <br />
              <span className="text-red">DATABASE.</span>
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
                  {domains.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
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
            <div className="flex flex-col gap-6">
              {filteredProjects.map((project) => {
                const isExpanded = expandedId === project.id;
                const colors = domainColors[project.domain] || { bg: "#333", text: "#fff", dot: "#fff" };
                
                return (
                  <div 
                    key={project.id} 
                    className={`bg-secondary border transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'border-red rounded-xl' : 'border-[rgba(255,255,255,0.05)] rounded-lg hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    {/* Card Header (Always Visible) */}
                    <button 
                      onClick={() => toggleExpand(project.id)}
                      className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="font-mono text-xl md:text-2xl font-bold text-white/30 group-hover:text-red transition-colors pt-1">
                          {project.id}
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
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-[rgba(255,255,255,0.05)] mt-2">
                        <div className="grid md:grid-cols-3 gap-12 pt-8">
                          
                          {/* Left Column: Narrative */}
                          <div className="md:col-span-2 space-y-10">
                            <div>
                              <p className="text-lg text-white/80 leading-relaxed">
                                {project.description}
                              </p>
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
                              <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                  <span key={i} className="text-xs font-mono text-white/70 bg-[rgba(255,255,255,0.05)] px-2.5 py-1.5 rounded border border-[rgba(255,255,255,0.1)]">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-20 border border-[rgba(255,255,255,0.05)] rounded-xl bg-secondary">
                  <p className="text-xl text-muted font-mono">No projects found matching your criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedDomain("All Domains"); }}
                    className="mt-6 text-red hover:text-white transition-colors font-mono text-sm uppercase tracking-wider"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
