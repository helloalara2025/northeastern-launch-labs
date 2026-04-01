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
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="container relative z-10">
            <div className="mb-8 animate-slide-in-up" style={{ animationDelay: '0ms' }}>
              <span className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em]">INNOVATION TEAMS</span>
            </div>
            <h1 className="font-sans font-extrabold text-[40px] md:text-[56px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-8 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              BUILD FROM SCRATCH.
            </h1>
            <p className="font-sans font-normal text-[18px] text-white/55 leading-[1.6] max-w-[720px] animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              Lead end-to-end projects designed to mirror real-world professional work and develop your leadership skills across diverse domains.
            </p>
          </div>
        </section>

        {/* Our 8 Teams */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em]">THE PORTFOLIO</h2>
            </div>
            
            <div className="space-y-6">
              {ventureLab.map((project) => (
                <div 
                  key={project.id}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-8 md:p-12 flex flex-col"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em]">{project.theme}</span>
                    </div>
                    <span className="font-mono text-[11px] uppercase px-3 py-1 border border-[rgba(255,255,255,0.1)] rounded-full text-white md:ml-auto w-fit">
                      {project.status}
                    </span>
                  </div>
                  
                  <h4 className="font-sans font-bold text-[32px] md:text-[40px] text-white mb-2 uppercase">{project.title}</h4>
                  <p className="font-sans font-semibold text-[20px] text-white/80 mb-8">{project.subtitle}</p>
                  
                  <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] mb-8 max-w-4xl">
                    {project.description}
                  </p>

                  <Link href="/forms" className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em] hover:text-white transition-colors flex items-center gap-2 w-fit">
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-red opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">THE APPROACH</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              <div className="border-l-[3px] border-red pl-6 py-2 flex flex-col">
                <p className="font-sans font-normal text-[18px] text-white/70 leading-[1.6]">
                  Innovation Teams tackle internally scoped projects designed to mirror real-world professional work. From problem definition through delivery, team members lead projects end-to-end, developing leadership, strategic thinking, and execution skills.
                </p>
              </div>
              <div className="border-l-[3px] border-red pl-6 py-2 flex flex-col">
                <p className="font-sans font-normal text-[18px] text-white/70 leading-[1.6]">
                  These projects span product development, organizational initiatives, research, and strategic exploration. Teams operate with autonomy and accountability, making decisions and driving results in a supportive learning environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em]">THE VALUE</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "END-TO-END LEADERSHIP", desc: "Own projects from conception through execution, making strategic decisions and driving results with full accountability." },
                { title: "CROSS-FUNCTIONAL TEAMS", desc: "Work with diverse teams across engineering, design, and business to deliver integrated solutions." },
                { title: "RAPID PROTOTYPING", desc: "Build MVPs quickly, validate assumptions with real users, and iterate based on feedback." },
                { title: "STRATEGIC PROBLEM-SOLVING", desc: "Tackle complex, ambiguous problems by breaking them down, researching solutions, and implementing scalable approaches." }
              ].map((item, idx) => (
                <div key={idx} className="border-l-[3px] border-yellow pl-6 py-2 flex flex-col">
                  <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">{item.title}</h4>
                  <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-red opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">THE PROFILE</h2>
            </div>
            
            <div className="max-w-4xl">
              <p className="font-sans font-normal text-[18px] text-white/70 leading-[1.6] mb-12">
                Innovation Teams are for students who want to lead, build, and learn. You should apply if you:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Are passionate about solving real problems with real impact",
                  "Want to develop leadership and strategic thinking skills",
                  "Enjoy working in cross-functional, collaborative teams",
                  "Are comfortable with ambiguity and learning on the job",
                  "Can commit 3-5 hours per week to your project",
                  "Are excited about building something from scratch"
                ].map((criterion, idx) => (
                  <div key={idx} className="flex gap-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-6">
                    <span className="text-red">▸</span>
                    <p className="font-sans font-normal text-[16px] text-white/90">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-yellow">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] text-black/80 uppercase tracking-[0.25em] mb-6 block">NU LAUNCH LABS • SPRING 2026</span>
            
            <h2 className="font-sans font-extrabold text-[32px] md:text-[42px] uppercase text-black leading-[1.1] tracking-[-0.02em] mb-6 max-w-3xl">
              READY TO BUILD?
            </h2>
            
            <p className="font-sans font-normal text-[18px] text-black/85 leading-[1.6] mb-10">
              Join an Innovation Team and turn ideas into reality.
            </p>
            
            <Link href="/forms" className="bg-black text-yellow font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-200 hover:-translate-y-[1px]">
              APPLY NOW
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-[rgba(255,255,255,0.1)] py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">Launch Labs</span>
              </div>
              <p className="text-muted leading-relaxed">
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
