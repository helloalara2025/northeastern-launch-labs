import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="container relative z-10">
            <div className="mb-8 animate-slide-in-up" style={{ animationDelay: '0ms' }}>
              <span className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">ABOUT</span>
            </div>
            <h1 className="font-sans font-extrabold text-[40px] md:text-[56px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-8 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              WHAT IS NULL?
            </h1>
            <p className="font-sans font-normal text-[18px] text-white/55 leading-[1.6] max-w-[720px] animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              NU Launch Labs is a student-run org at Northeastern that exists to close the gap between how students collaborate on school projects and how teams actually operate in the real world. We build portfolio-ready projects, develop professional teamwork skills, and explore startup opportunities — all in one semester.
            </p>
          </div>
        </section>

        {/* The Gap Section */}
        <section className="py-24 md:py-32 bg-red relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="container relative z-10">
            <h2 className="font-sans font-extrabold text-[40px] md:text-[56px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-16">
              THE GAP
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">SCHOOL PROJECTS</h3>
                <p className="font-sans font-normal text-[18px] text-white/85 leading-[1.6]">
                  Random groups. Arbitrary deadlines. The goal is a grade, not a product. Nobody uses what you built. You can't put it on a resume without explaining yourself.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">NULL PROJECTS</h3>
                <p className="font-sans font-normal text-[18px] text-white/85 leading-[1.6]">
                  You pick your team. You pick the problem. The goal is to ship. If it works, people use it. If it doesn't, you learned more than any class could teach you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-24 md:py-32 bg-[#0f1629] border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em]">FOUNDED BY</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-[120px] h-[120px] rounded-full bg-[rgba(255,255,255,0.1)] flex-shrink-0"></div>
                <div>
                  <h3 className="font-sans font-bold text-[24px] text-white mb-1 uppercase">DREW HILL</h3>
                  <div className="font-mono text-[13px] text-red mb-4">Chairman</div>
                  <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6]">
                    Founder and Chairman of NU Launch Labs. Passionate about building products and empowering students to ship real code.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-[120px] h-[120px] rounded-full bg-[rgba(255,255,255,0.1)] flex-shrink-0"></div>
                <div>
                  <h3 className="font-sans font-bold text-[24px] text-white mb-1 uppercase">PRISHA SRIVASTAVA</h3>
                  <div className="font-mono text-[13px] text-red mb-4">President</div>
                  <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6]">
                    President of NU Launch Labs. Focused on scaling the organization and creating opportunities for students across all disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Org Structure Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">HOW WE'RE ORGANIZED</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Exec Board", desc: "Strategic direction and organizational leadership." },
                { name: "Communications", desc: "Brand, marketing, and internal messaging." },
                { name: "Events", desc: "Planning and executing showcases and workshops." },
                { name: "Operations", desc: "Logistics, member experience, and resources." },
                { name: "Project Leads", desc: "Managing individual Launch and Innovation teams." }
              ].map((team, idx) => (
                <div key={idx} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-6">
                  <h3 className="font-sans font-semibold text-[18px] text-white mb-2">{team.name}</h3>
                  <p className="font-sans font-normal text-[14px] text-white/70 leading-[1.6]">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">PARTNERS</h2>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="font-mono font-medium text-[24px] text-white/30 mb-6 tracking-widest">RAYTHEON</div>
              <p className="font-sans font-normal text-[16px] text-white/40 max-w-md">
                Building partnerships with industry leaders to give student teams real-world context.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">TAKE ACTION</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "JOIN A TEAM",
                  desc: "Apply to Launch Teams or Innovation Teams and start working on real projects.",
                  link: "/forms",
                  color: "red"
                },
                {
                  title: "LEAD AN INITIATIVE",
                  desc: "Interested in leadership? Join our operations team and help shape the future of Launch Labs.",
                  link: "/leadership",
                  color: "yellow"
                },
                {
                  title: "PARTNER WITH US",
                  desc: "Are you a startup? Let's talk about how Launch Labs can support your growth.",
                  link: "/partners",
                  color: "red"
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-[3px] border-red pl-6 py-2 flex flex-col">
                  <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">{item.title}</h4>
                  <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] mb-8 flex-grow">{item.desc}</p>
                  <Link href={item.link} className="font-mono text-[13px] text-red uppercase tracking-[0.1em] hover:text-white transition-colors flex items-center gap-2 mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-red">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] text-white/80 uppercase tracking-[0.25em] mb-6 block">NU LAUNCH LABS • SPRING 2026</span>
            
            <h2 className="font-sans font-extrabold text-[32px] md:text-[42px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-6 max-w-3xl">
              READY TO JOIN?
            </h2>
            
            <p className="font-sans font-normal text-[18px] text-white/85 leading-[1.6] mb-10">
              Whether you're interested in joining a team, leading an initiative, or partnering with us, we'd love to hear from you.
            </p>
            
            <Link href="/forms" className="bg-white text-red font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:-translate-y-[1px]">
              GET STARTED
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
                <li><Link href="/" className="text-charcoal hover:text-red transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-charcoal hover:text-red transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-charcoal hover:text-red transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/forms" className="text-charcoal hover:text-red transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-charcoal hover:text-red transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-charcoal hover:text-red transition-colors font-medium">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/contact" className="text-charcoal hover:text-red transition-colors font-medium">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-red transition-colors font-medium">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-red transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-gray-light pt-8 text-center text-lg text-charcoal font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
