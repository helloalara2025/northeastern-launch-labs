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
      description: "Building a comprehensive security framework that protects AI and machine learning systems across their entire lifecycle—from training data validation to real-time inference monitoring and post-deployment threat detection. The team is developing an adversarial robustness testing suite compatible with TensorFlow, PyTorch, and scikit-learn, paired with cryptographic data integrity verification, role-based model access control with full audit logging, and a real-time monitoring layer capable of detecting model extraction, membership inference, and adversarial input attacks with under 10ms latency overhead. The MVP focuses on a working adversarial defense and inference monitoring prototype targeting a single ML framework, with compliance reporting against one regulatory standard and a lightweight security dashboard demonstrating real-time anomaly detection."
    },
    {
      id: 7,
      title: "Indoor Navigation",
      subtitle: "Visual Intelligence Without Infrastructure",
      theme: "Computer Vision",
      status: "Active",
      description: "Developing a mobile indoor navigation solution that guides users to their destination using only their phone's camera—eliminating the need for WiFi, Bluetooth beacons, or any installed infrastructure. The team is building a prototype that combines landmark-based visual localization with digitized floor plan pathfinding to deliver turn-by-turn directions inside buildings. The MVP is a single-building prototype using OpenCV-based image matching against pre-captured landmark checkpoints, paired with A* pathfinding on a manually digitized floor plan graph. The end goal is a working demo where users can select a room, confirm their location via landmark recognition, and receive step-by-step visual directions to their destination."
    },
    {
      id: 11,
      title: "Document Intelligence",
      subtitle: "Visual Reasoning Beyond OCR",
      theme: "FinTech",
      status: "Active",
      description: "Developing an autonomous document extraction system using Vision-Language Models to transform how loan documents are processed—moving beyond brittle OCR that fails on non-standard layouts. The team is building a prototype that combines VLM-based field extraction with basic anomaly detection to automate the pre-underwriting verification layer. The MVP focuses on a single document type (synthetic pay stubs) with targeted extraction of 6-8 key fields, basic consistency validation, and accuracy benchmarking against traditional OCR baselines. The end goal is a working demo where users can upload a pay stub, receive structured field extractions with confidence scores, and see flagged anomalies—validating that VLMs can outperform rule-based OCR on unstructured financial documents."
    },
    {
      id: 12,
      title: "Roommate Matching",
      subtitle: "Data-Driven Compatibility for Student Housing",
      theme: "Social",
      status: "Active",
      description: "Developing an intelligent roommate matching platform that helps students find compatible living partners based on preferences, habits, lifestyle, and values—transforming a traditionally fragmented and stressful process into a structured, data-driven experience. The team is building a web-based system featuring user profile creation, preference input, and a matching workflow that compares users across compatibility factors including cleanliness, schedule, budget, and lifestyle. The MVP includes a centralized database for storing user profiles and match criteria, a compatibility scoring system using weighted preference comparison, and a browsing interface for viewing and filtering potential matches. The end goal is a working platform where students can create profiles, input their living preferences, and discover compatible roommates ranked by data-driven compatibility scores."
    },
    {
      id: 16,
      title: "Geospatial Analysis for Climate",
      subtitle: "Community-Driven Climate Resilience Platform",
      theme: "Impact",
      status: "Active",
      description: "Building an open-source platform that empowers localized communities of citizen scientists to conduct rigorous geospatial analyses exploring sustainable urban development in response to interconnected social and environmental crises. The team is developing a pedagogical research environment where neighborhoods, schools, and local organizations can load curated datasets from public portals, Google Earth Engine exports, and community-collected sources, maintain transparent public manifests, and run contextualized spatial and statistical analyses—without requiring technical expertise. The initial pilot focuses on replicating a 2023 study evaluating the cooling effects of urban parks on rising urban temperatures, modularizing the methodology into reusable open-source tools. The end goal is a working platform where a participating community can upload local environmental data, run guided geospatial analyses on park cooling effects, and produce honest, contextualized insights to inform priorities for municipal ecology and development."
    },
    {
      id: 17,
      title: "Environment-Aware Fitness Routing",
      subtitle: "Safe Running Through Real-Time Hazard Intelligence",
      theme: "HealthTech",
      status: "Active",
      description: "Developing a mobile fitness routing app that generates safe running and walking routes by incorporating real-time environmental awareness—predicting ice and snow hazards, routing around poor air quality zones, and ensuring users stay within reach of transit stops and emergency bailout points. The team is building a Boston-focused prototype that combines a heuristic ice risk model using OpenWeatherMap freeze-thaw cycle data, building shadow approximation from OpenStreetMap footprints and solar geometry, and road-type plowing priority factors, with EPA AirNow air quality overlays and MBTA GTFS transit proximity constraints. A crowdsourced validation layer allows users to drop pins tagging sidewalk conditions as icy, clear, or unplowed, with optional photo uploads. The end goal is a working demo where users can set a start point and desired distance, receive a route that actively avoids high ice-risk segments and poor air quality while staying near transit, and contribute real-time sidewalk condition reports."
    },
    {
      id: 18,
      title: "AI-Driven Cybersecurity Platform",
      subtitle: "Risk & Governance for Organizations",
      theme: "Security",
      status: "Active",
      description: "Building an AI-powered cybersecurity risk and governance platform that helps organizations identify, assess, and manage cyber risks through structured compliance frameworks and intelligent dashboards. The team is developing a system centered on the NIST Cybersecurity Framework, featuring a guided questionnaire-based risk assessment engine mapped to NIST's five core functions—Identify, Protect, Detect, Respond, and Recover—paired with a weighted scoring algorithm that classifies organizational risk across maturity levels and generates AI-driven remediation recommendations. The MVP targets the top 20–25 NIST subcategories most relevant to SMEs, with rule-based risk scoring as the foundation and a focused set of 2–3 incident response plan templates. The end goal is a working platform where users can complete a risk assessment, view their compliance posture on an executive-ready dashboard with heatmaps and gap analysis, receive tailored AI-generated security recommendations, and generate customized incident response plans."
    },
    {
      id: 19,
      title: "Campus Navigation",
      subtitle: "Interactive Wayfinding for Northeastern",
      theme: "EdTech",
      status: "Active",
      description: "Developing a mobile campus map designed to help students and staff easily locate and navigate places within campus buildings. The team is building a cross-platform React Native application featuring interactive SVG-based floor plans with pinch-to-zoom navigation, a searchable room directory with category filtering, and tap-to-view room detail cards—all focused on a single building as a proof of concept. The MVP includes interactive floor plan rendering with floor switching, a searchable directory powered by a Firebase-backed room metadata database, and a static 'You Are Here' entry-point selector that orients users without requiring any installed infrastructure. The end goal is a working demo where a user can open the app, search for any room by name, number, or category, locate it on the correct floor plan, and view relevant details—all within seconds."
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
            <div className="space-y-8">
              {ventureLab.map((project) => (
                <Card 
                  key={project.id}
                  className="border-l-8 border-l-[#C8102E] hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-5 h-5 text-[#CCFF00]" />
                      <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">{project.theme}</span>
                      <span className="badge-accent ml-auto">{project.status}</span>
                    </div>
                    <h3 className="text-4xl font-black text-black mb-2">{project.title}</h3>
                    <p className="text-black/60 text-xl font-light italic mb-8">{project.subtitle}</p>
                    
                    <p className="text-black/70 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

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
