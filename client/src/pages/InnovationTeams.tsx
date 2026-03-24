import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Zap, Target, Users, CheckCircle, Star } from "lucide-react";

export default function InnovationTeams() {
  const ventureLab = [
    {
      id: 6,
      title: "AI/ML Pipeline Security",
      subtitle: "End-to-End Protection for the Modern AI Lifecycle",
      theme: "Security",
      status: "Active",
      focus: "Adversarial robustness testing & compliance frameworks",
      bullets: [
        "Building adversarial defense and inference monitoring prototype",
        "Developing compliance reporting against NIST AI RMF standards",
        "Creating lightweight security dashboard for real-time anomaly detection"
      ]
    },
    {
      id: 19,
      title: "Campus Navigation",
      subtitle: "Interactive Wayfinding for Northeastern",
      theme: "EdTech",
      status: "Active",
      focus: "Mobile wayfinding with interactive floor plans",
      bullets: [
        "Building cross-platform React Native application with SVG floor plans",
        "Implementing searchable room directory with Firebase backend",
        "Developing single-building MVP with pinch-to-zoom navigation"
      ]
    },
    {
      id: 7,
      title: "Indoor Navigation",
      subtitle: "Visual Intelligence Without Infrastructure",
      theme: "Computer Vision",
      status: "Active",
      focus: "Landmark-based visual localization & pathfinding",
      bullets: [
        "Developing OpenCV-based image matching for landmark recognition",
        "Implementing A* pathfinding on digitized floor plan graphs",
        "Creating single-building prototype with turn-by-turn visual directions"
      ]
    },
    {
      id: 11,
      title: "Document Intelligence",
      subtitle: "Visual Reasoning Beyond OCR",
      theme: "FinTech",
      status: "Active",
      focus: "Vision-Language Models for document extraction",
      bullets: [
        "Building VLM-based field extraction for synthetic pay stubs",
        "Implementing basic anomaly detection and consistency validation",
        "Benchmarking accuracy against traditional OCR baselines"
      ]
    },
    {
      id: 12,
      title: "Roommate Matching",
      subtitle: "Data-Driven Compatibility for Student Housing",
      theme: "Social",
      status: "Active",
      focus: "Intelligent matching algorithm & compatibility scoring",
      bullets: [
        "Creating centralized database for user profiles and match criteria",
        "Developing weighted preference comparison scoring system",
        "Building browsing interface for viewing and filtering potential matches"
      ]
    },
    {
      id: 16,
      title: "Geospatial Analysis for Climate",
      subtitle: "Community-Driven Climate Resilience Platform",
      theme: "Impact",
      status: "Active",
      focus: "Open-source platform for citizen science geospatial analysis",
      bullets: [
        "Building pedagogical research environment for community data exploration",
        "Implementing urban heat mitigation analysis package",
        "Creating reusable tools for park cooling effects evaluation"
      ]
    },
    {
      id: 17,
      title: "Environment-Aware Fitness Routing",
      subtitle: "Safe Running Through Real-Time Hazard Intelligence",
      theme: "HealthTech",
      status: "Active",
      focus: "Mobile routing with ice risk & air quality awareness",
      bullets: [
        "Developing heuristic ice risk model using weather and building shadow data",
        "Integrating EPA AirNow air quality overlays and MBTA transit constraints",
        "Building crowdsourced validation layer for real-time sidewalk condition reports"
      ]
    },
    {
      id: 18,
      title: "AI-Driven Cybersecurity Platform",
      subtitle: "Risk & Governance for Organizations",
      theme: "Security",
      status: "Active",
      focus: "NIST CSF compliance and AI-powered risk assessment",
      bullets: [
        "Building guided questionnaire-based risk assessment engine",
        "Implementing weighted scoring algorithm across NIST core functions",
        "Generating AI-driven remediation recommendations and incident response plans"
      ]
    }
  ];

  const themeColors: { [key: string]: { bg: string; text: string; border: string } } = {
    Security: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
    EdTech: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
    "Computer Vision": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
    FinTech: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
    Social: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
    Impact: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
    HealthTech: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" }
  };

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="relative py-32 md:py-48">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-transparent pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="mb-8 inline-block">
              <span className="inline-block bg-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full">Venture Lab</span>
            </div>
            <h1 className="font-serif font-black text-8xl md:text-9xl text-foreground mb-8 leading-tight">
              Innovation Teams
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              Lead end-to-end projects designed to mirror real-world professional work and develop your leadership skills across diverse domains.
            </p>
          </div>
        </section>

        {/* Venture Lab Grid - 8 Teams */}
        <section className="relative py-32 md:py-48 bg-gradient-to-b from-transparent via-cyan-50/10 to-transparent">
          <div className="container">
            <h2 className="font-serif font-black text-6xl md:text-7xl text-foreground mb-16">Our 8 Active Teams</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {ventureLab.map((project, idx) => {
                const colors = themeColors[project.theme] || themeColors.Impact;
                return (
                  <div key={project.id} className={`group relative p-8 bg-white border-2 border-foreground/10 rounded-2xl hover:border-cyan-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colors.bg}`}>
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Star className="w-5 h-5 text-cyan-600" />
                            <span className={`text-xs font-bold uppercase tracking-widest ${colors.text}`}>{project.theme}</span>
                          </div>
                          <h3 className="font-serif font-bold text-3xl text-foreground mb-2">{project.title}</h3>
                          <p className="text-sm md:text-base text-foreground/60 font-light italic">{project.subtitle}</p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="mb-6">
                        <span className="inline-block text-xs font-bold px-4 py-2 bg-cyan-600 text-white rounded-full">{project.status}</span>
                      </div>

                      {/* Focus */}
                      <p className="text-base md:text-lg text-foreground/70 font-light font-medium mb-6 pb-6 border-b border-foreground/10">{project.focus}</p>

                      {/* Bullets */}
                      <ul className="space-y-4 mb-8">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-base md:text-lg text-foreground/70 font-light flex gap-3">
                            <span className="text-cyan-600 font-bold flex-shrink-0">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link href="/forms" className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:gap-3 transition-all duration-200 text-sm group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="relative py-32 md:py-48">
          <div className="container">
            <h2 className="font-serif font-black text-6xl md:text-7xl text-foreground mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8 font-light">
                  Innovation Teams tackle internally scoped projects designed to mirror real-world professional work. From problem definition through delivery, team members lead projects end-to-end, developing leadership, strategic thinking, and execution skills.
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light">
                  These projects span product development, organizational initiatives, research, and strategic exploration. Teams operate with autonomy and accountability, making decisions and driving results in a supportive learning environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section className="relative py-32 md:py-48 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-white mb-16">Key Experiences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: "End-to-End Leadership", desc: "Own projects from conception through execution, making strategic decisions and driving results with full accountability." },
                { icon: Users, title: "Cross-Functional Teams", desc: "Work with diverse teams across engineering, design, and business to deliver integrated solutions." },
                { icon: Zap, title: "Rapid Prototyping", desc: "Build MVPs quickly, validate assumptions with real users, and iterate based on feedback." },
                { icon: Code, title: "Strategic Problem-Solving", desc: "Tackle complex, ambiguous problems by breaking them down, researching solutions, and implementing scalable approaches." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white/20 text-white">
                      <item.icon size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-3">{item.title}</h3>
                    <p className="text-white/90 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="relative py-32 md:py-48">
          <div className="container">
            <h2 className="font-serif font-black text-6xl md:text-7xl text-foreground mb-12">Who Should Apply</h2>
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 font-light">
                Innovation Teams are ideal for students who want to take on significant leadership roles and drive meaningful impact. You should be:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: CheckCircle, title: "Self-directed", desc: "Comfortable owning projects with minimal supervision and driving your own learning." },
                  { icon: CheckCircle, title: "Collaborative", desc: "Excited to work across disciplines and leverage diverse perspectives to solve problems." },
                  { icon: CheckCircle, title: "Ambitious", desc: "Ready to tackle complex, real-world challenges and deliver tangible results." },
                  { icon: CheckCircle, title: "Growth-minded", desc: "Committed to developing leadership skills and learning from both successes and failures." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <item.icon className="text-cyan-600 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/70 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 md:py-48 bg-gradient-to-br from-foreground to-slate-800">
          <div className="container text-center">
            <h2 className="font-serif font-black text-5xl md:text-6xl text-white mb-8">Ready to Lead?</h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Join one of our 8 active Innovation Teams and drive real impact.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-10 h-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
