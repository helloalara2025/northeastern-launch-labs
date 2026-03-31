import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-[#C8102E]">
          <div className="container">
            <div className="mb-8">
              <span className="badge">Venture Lab</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
              Innovation Teams
            </h1>
            <p className="text-2xl text-black/70 leading-relaxed max-w-3xl font-light">
              Lead end-to-end projects designed to mirror real-world professional work and develop your leadership skills across diverse domains.
            </p>
          </div>
        </section>

        {/* Our 8 Teams */}
        <section className="section-padding bg-[#0F172A]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-16">Our 8 Active Teams</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ventureLab.map((project) => (
                <Card 
                  key={project.id}
                  className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-5 h-5 text-[#CCFF00]" />
                      <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">{project.theme}</span>
                    </div>
                    <h3 className="text-3xl font-black text-black mb-2">{project.title}</h3>
                    <p className="text-black/60 text-lg font-light italic mb-6">{project.subtitle}</p>
                    
                    <div className="mb-6 pb-6 border-b-2 border-[#D0D0D0]">
                      <span className="badge-accent">{project.status}</span>
                      <p className="text-black/70 text-lg font-semibold mt-4">{project.focus}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-black/70 text-lg">
                          <span className="text-[#CCFF00] font-black flex-shrink-0">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/forms" className="inline-flex items-center gap-3 text-[#C8102E] font-black hover:gap-4 transition-all duration-200 uppercase tracking-wider">
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <div>
                <p className="text-2xl text-black/70 leading-relaxed font-light">
                  Innovation Teams tackle internally scoped projects designed to mirror real-world professional work. From problem definition through delivery, team members lead projects end-to-end, developing leadership, strategic thinking, and execution skills.
                </p>
              </div>
              <div>
                <p className="text-2xl text-black/70 leading-relaxed font-light">
                  These projects span product development, organizational initiatives, research, and strategic exploration. Teams operate with autonomy and accountability, making decisions and driving results in a supportive learning environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Key Experiences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: "End-to-End Leadership", desc: "Own projects from conception through execution, making strategic decisions and driving results with full accountability." },
                { icon: Users, title: "Cross-Functional Teams", desc: "Work with diverse teams across engineering, design, and business to deliver integrated solutions." },
                { icon: Zap, title: "Rapid Prototyping", desc: "Build MVPs quickly, validate assumptions with real users, and iterate based on feedback." },
                { icon: Code, title: "Strategic Problem-Solving", desc: "Tackle complex, ambiguous problems by breaking them down, researching solutions, and implementing scalable approaches." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#C8102E] flex items-center justify-center text-white">
                      <item.icon size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black mb-3">{item.title}</h3>
                    <p className="text-black/70 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16">Who Should Apply</h2>
            <div className="max-w-4xl">
              <p className="text-2xl text-black/70 leading-relaxed font-light mb-12">
                Innovation Teams are for students who want to lead, build, and learn. You should apply if you:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Are passionate about solving real problems with real impact",
                  "Want to develop leadership and strategic thinking skills",
                  "Enjoy working in cross-functional, collaborative teams",
                  "Are comfortable with ambiguity and learning on the job",
                  "Can commit 3-5 hours per week to your project",
                  "Are excited about building something from scratch"
                ].map((criterion, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-[#C8102E] flex-shrink-0 mt-1" />
                    <p className="text-black/70 text-lg">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#C8102E]">
          <div className="container text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">Ready to Lead?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Join an Innovation Team and take ownership of a project that matters.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-[#C8102E] font-black px-10 py-4 hover:bg-[#F5F5F5] transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Apply Now
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#C8102E] py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="text-2xl font-black text-black mb-6">Launch Labs</h4>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/forms" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/partners" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/contact" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#D0D0D0] pt-8 text-center text-lg text-black/70 font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
