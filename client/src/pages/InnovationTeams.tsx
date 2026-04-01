import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Code, Zap, Target, Users, CheckCircle, Star } from "lucide-react";

export default function InnovationTeams() {
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
              INNOVATION TEAMS.
            </h1>
            <p className="font-sans font-normal text-[18px] text-white/55 leading-[1.6] max-w-[720px] animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              Pick a hard problem. Research it. Build something that didn't exist before.
            </p>
          </div>
        </section>

        {/* Portfolio Link Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="container relative z-10">
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-12 md:p-16 rounded-xl text-center relative group hover:border-yellow transition-colors duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
              
              <h2 className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em] mb-6">OUR WORK</h2>
              <h3 className="font-sans font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-8">
                SEE WHAT WE'VE BUILT
              </h3>
              <p className="font-sans font-normal text-[18px] text-white/70 leading-[1.6] max-w-2xl mx-auto mb-10">
                Explore the projects our teams have developed from scratch.
              </p>
              
              <Link href="/portfolio" className="inline-flex items-center gap-3 bg-yellow text-black font-sans font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-yellow/90 transition-all duration-200 hover:-translate-y-[1px]">
                VIEW PORTFOLIO <ArrowRight size={18} />
              </Link>
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
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
              <div className="border-l-[3px] border-red pl-6 py-2 flex flex-col">
                <p className="font-sans font-normal text-[18px] text-white/70 leading-[1.6]">
                  Innovation Teams tackle internally scoped projects. From problem definition through delivery, team members lead projects, developing strategic thinking and execution skills.
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
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
