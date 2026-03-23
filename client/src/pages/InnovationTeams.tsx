import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Lightbulb, Zap, Target, Users, CheckCircle } from "lucide-react";

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

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              Innovation Teams
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              Lead end-to-end projects designed to mirror real-world professional work and develop your leadership skills across diverse domains.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-white border-t border-border py-16 md:py-20">
          <div className="container">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/60 mb-8">On This Page</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="#venture-lab" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">Venture Lab</a>
              <a href="#what-we-do" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">What We Do</a>
              <a href="#key-experiences" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">Key Experiences</a>
              <a href="#who-should-apply" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">Who Should Apply</a>
            </div>
          </div>
        </section>

        {/* Venture Lab - 8 Active Teams */}
        <section id="venture-lab" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Venture Lab
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ventureLab.map((project) => (
                <div key={project.id} className="project-card glass-card rounded-xl p-8 border border-border hover:border-red-900/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-2">{project.title}</h3>
                      <p className="text-sm md:text-base text-foreground/60 font-light mb-3 italic">{project.subtitle}</p>
                      <span className="text-xs font-semibold uppercase tracking-widest text-red-900">{project.theme}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className="inline-block text-xs font-bold px-3 py-1 bg-red-900 text-white rounded-full">{project.status}</span>
                  </div>
                  <p className="text-base md:text-lg text-foreground/70 font-light font-medium mb-6">{project.focus}</p>
                  <ul className="space-y-3 mb-8">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-base md:text-lg text-foreground/70 font-light flex gap-3">
                        <span className="text-red-900 font-bold flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/forms" className="inline-flex items-center gap-2 text-red-900 font-semibold hover:gap-3 transition-all duration-200 text-sm">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-12">
              What We Do
            </h2>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Innovation Teams tackle internally scoped projects designed to mirror real-world professional work. From problem definition through delivery, team members lead projects end-to-end, developing leadership, strategic thinking, and execution skills.
              </p>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                These projects span product development, organizational initiatives, research, and strategic exploration. Teams operate with autonomy and accountability, making decisions and driving results in a supportive learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section id="key-experiences" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-3">End-to-End Project Leadership</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Own projects from conception through execution, making strategic decisions and driving results with full accountability.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    <Users size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-3">Cross-Functional Collaboration</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Work with diverse teams across engineering, design, and business to deliver integrated solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    <Zap size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-3">Rapid Prototyping & Iteration</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Build MVPs quickly, validate assumptions with real users, and iterate based on feedback.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-900 text-white font-bold text-xl">
                    <Lightbulb size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-3">Strategic Problem-Solving</h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                    Tackle complex, ambiguous problems by breaking them down, researching solutions, and implementing scalable approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section id="who-should-apply" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-12">
              Who Should Apply
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Innovation Teams are ideal for students who want to take on significant leadership roles and drive meaningful impact. You should be:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 text-base md:text-lg text-foreground/70 font-light">
                  <CheckCircle className="text-red-900 flex-shrink-0" size={24} />
                  <span><strong>Self-directed:</strong> Comfortable owning projects with minimal supervision and driving your own learning.</span>
                </li>
                <li className="flex gap-4 text-base md:text-lg text-foreground/70 font-light">
                  <CheckCircle className="text-red-900 flex-shrink-0" size={24} />
                  <span><strong>Collaborative:</strong> Excited to work across disciplines and leverage diverse perspectives to solve problems.</span>
                </li>
                <li className="flex gap-4 text-base md:text-lg text-foreground/70 font-light">
                  <CheckCircle className="text-red-900 flex-shrink-0" size={24} />
                  <span><strong>Ambitious:</strong> Ready to tackle complex, real-world challenges and deliver tangible results.</span>
                </li>
                <li className="flex gap-4 text-base md:text-lg text-foreground/70 font-light">
                  <CheckCircle className="text-red-900 flex-shrink-0" size={24} />
                  <span><strong>Growth-minded:</strong> Committed to developing leadership skills and learning from both successes and failures.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <div className="p-12 bg-gradient-to-br from-red-50 to-white border border-red-900/10 rounded-xl text-center">
              <p className="text-foreground font-semibold mb-6 text-lg">Ready to lead an Innovation Team?</p>
              <Button asChild>
                <Link href="/forms" className="bg-red-900 hover:bg-red-900 text-white font-bold px-10 h-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
