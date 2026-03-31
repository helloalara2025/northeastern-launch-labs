import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Zap, Target, Users, Lightbulb } from "lucide-react";

export default function InnovationTeams() {
  const teams = [
    {
      id: 6,
      title: "AI/ML Pipeline Security",
      subtitle: "End-to-End Protection for the Modern AI Lifecycle",
      theme: "Security",
      description: "Building a comprehensive security framework that protects AI and machine learning systems across their entire lifecycle—from training data validation to real-time inference monitoring and post-deployment threat detection."
    },
    {
      id: 7,
      title: "Indoor Navigation",
      subtitle: "Visual Intelligence Without Infrastructure",
      theme: "Computer Vision",
      description: "Developing a mobile indoor navigation solution that guides users to their destination using only their phone's camera—eliminating the need for WiFi, Bluetooth beacons, or any installed infrastructure."
    },
    {
      id: 11,
      title: "Document Intelligence",
      subtitle: "Visual Reasoning Beyond OCR",
      theme: "FinTech",
      description: "Developing an autonomous document extraction system using Vision-Language Models to transform how loan documents are processed—moving beyond brittle OCR that fails on non-standard layouts."
    },
    {
      id: 12,
      title: "Roommate Matching",
      subtitle: "Data-Driven Compatibility for Student Housing",
      theme: "Social",
      description: "Developing an intelligent roommate matching platform that helps students find compatible living partners based on preferences, habits, lifestyle, and values."
    },
    {
      id: 16,
      title: "Geospatial Analysis for Climate",
      subtitle: "Community-Driven Climate Resilience Platform",
      theme: "Impact",
      description: "Building an open-source platform that empowers localized communities of citizen scientists to conduct rigorous geospatial analyses exploring sustainable urban development."
    },
    {
      id: 17,
      title: "Environment-Aware Fitness Routing",
      subtitle: "Safe Running Through Real-Time Hazard Intelligence",
      theme: "HealthTech",
      description: "Developing a mobile fitness routing app that generates safe running and walking routes by incorporating real-time environmental awareness—predicting ice and snow hazards."
    },
    {
      id: 18,
      title: "AI-Driven Cybersecurity Platform",
      subtitle: "Risk & Governance for Organizations",
      theme: "Security",
      description: "Building an AI-powered cybersecurity risk and governance platform that helps organizations identify, assess, and manage cyber risks through structured compliance frameworks."
    },
    {
      id: 19,
      title: "Campus Navigation",
      subtitle: "Interactive Wayfinding for Northeastern",
      theme: "EdTech",
      description: "Developing a mobile campus map designed to help students and staff easily locate and navigate places within campus buildings."
    }
  ];

  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">INNOVATION TEAMS</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Internal Ventures
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-4xl font-light">
              Eight end-to-end projects designed to mirror professional work. Lead teams, make decisions, and deliver real impact.
            </p>
          </div>
        </section>

        {/* Teams Grid */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">ALL TEAMS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Eight Ventures</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {teams.map((team) => (
                <div key={team.id} className="card-accent group hover:border-yellow transition-colors duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="label text-yellow mb-2">{team.theme}</div>
                      <h3 className="text-2xl font-black text-white">{team.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted mb-6 italic">{team.subtitle}</p>
                  <p className="text-muted text-lg leading-relaxed mb-8">{team.description}</p>
                  <Link href="/forms" className="text-red font-black hover:text-yellow inline-flex items-center gap-2 transition-all duration-300 label">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="label text-yellow mb-12">WHY JOIN</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">What You'll Gain</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Target,
                  title: "End-to-End Ownership",
                  desc: "Lead a project from problem definition through execution. Make decisions, own outcomes, and learn what real leadership feels like."
                },
                {
                  icon: Users,
                  title: "Cross-Disciplinary Teams",
                  desc: "Work with engineers, designers, and business-minded builders. Learn how different disciplines approach problems and collaborate."
                },
                {
                  icon: Lightbulb,
                  title: "Real-World Complexity",
                  desc: "Tackle ambiguous, complex problems without a clear solution path. Develop strategic thinking and execution skills that matter."
                }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="border-t-4 border-red pt-8 mb-6 group-hover:border-yellow transition-colors duration-300"></div>
                  <div className="icon-box mb-6 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Lifecycle */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">PROCESS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Project Lifecycle</h2>
            <div className="max-w-3xl space-y-12">
              {[
                {
                  step: "01",
                  title: "Problem Definition",
                  desc: "Deep dive into the problem space. Understand user needs, market dynamics, and constraints. Define success metrics."
                },
                {
                  step: "02",
                  title: "Strategy & Scoping",
                  desc: "Develop a strategy and scope an MVP. Make trade-offs. Decide what to build and what to defer."
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Build your MVP. Ship features. Get feedback from users and stakeholders. Iterate rapidly."
                },
                {
                  step: "04",
                  title: "Validation & Launch",
                  desc: "Validate your solution. Prepare for launch. Present your work and celebrate the outcome."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-red pl-8">
                  <div className="text-6xl font-black text-red/20 mb-2">{item.step}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Lead?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
              Join an Innovation Team and lead a real project from start to finish. Apply today.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm">
                Apply Now
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/10 py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="label text-yellow mb-8">NU LAUNCH LABS</div>
              <p className="text-muted leading-relaxed text-lg">
                Connecting builders at Northeastern. Founded Spring 2026.
              </p>
            </div>
            <div>
              <div className="label text-white mb-8">EXPLORE</div>
              <ul className="space-y-4">
                <li><Link href="/" className="text-muted hover:text-red transition-colors duration-300 text-lg">Home</Link></li>
                <li><Link href="/about" className="text-muted hover:text-red transition-colors duration-300 text-lg">About</Link></li>
                <li><Link href="/launch-teams" className="text-muted hover:text-red transition-colors duration-300 text-lg">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-8">GET INVOLVED</div>
              <ul className="space-y-4">
                <li><Link href="/forms" className="text-muted hover:text-red transition-colors duration-300 text-lg">Apply</Link></li>
                <li><Link href="/leadership" className="text-muted hover:text-red transition-colors duration-300 text-lg">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-muted hover:text-red transition-colors duration-300 text-lg">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-8">CONNECT</div>
              <ul className="space-y-4">
                <li><Link href="/contact" className="text-muted hover:text-red transition-colors duration-300 text-lg">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors duration-300 text-lg">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors duration-300 text-lg">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-12 text-center text-muted font-light text-lg">
            <p>&copy; 2026 NU Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
