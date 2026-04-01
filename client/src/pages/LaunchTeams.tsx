import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, TrendingUp, CheckCircle } from "lucide-react";

export default function LaunchTeams() {
  const currentPartners = [
    {
      id: 1,
      title: "FinTech Market Dynamics",
      theme: "Finance",
      status: "Discovery",
      focus: "Competitor mapping & API research",
      bullets: [
        "Mapping competitive landscape in payment processing",
        "Researching third-party API integrations",
        "Analyzing market trends and opportunities"
      ]
    },
    {
      id: 2,
      title: "Healthcare Systems",
      theme: "Healthcare",
      status: "Coming Soon",
      focus: "Patient data management",
      bullets: [
        "Building secure data infrastructure",
        "Designing user-centric interfaces",
        "Implementing compliance frameworks"
      ],
      isPlaceholder: true
    },
    {
      id: 3,
      title: "E-commerce Optimization",
      theme: "Retail",
      status: "Coming Soon",
      focus: "Conversion rate optimization",
      bullets: [
        "Analyzing user behavior patterns",
        "A/B testing checkout flows",
        "Implementing personalization engines"
      ],
      isPlaceholder: true
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
              <span className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">LAUNCH TEAMS</span>
            </div>
            <h1 className="font-sans font-extrabold text-[40px] md:text-[56px] uppercase text-white leading-[1.1] tracking-[-0.02em] mb-8 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              BUILD WITH STARTUPS.
            </h1>
            <p className="font-sans font-normal text-[18px] text-white/55 leading-[1.6] max-w-[720px] animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work closely with founders on development-focused projects.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-yellow opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-yellow uppercase tracking-[0.1em]">THE WORK</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-[3px] border-yellow pl-6 py-2 flex flex-col">
                <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">PRODUCT DEVELOPMENT</h4>
                <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] flex-grow">
                  Build and iterate on startup products with hands-on development work alongside founders.
                </p>
              </div>
              
              <div className="border-l-[3px] border-yellow pl-6 py-2 flex flex-col">
                <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">MARKET RESEARCH</h4>
                <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] flex-grow">
                  Analyze competitive landscapes, market trends, and opportunities for growth.
                </p>
              </div>
              
              <div className="border-l-[3px] border-yellow pl-6 py-2 flex flex-col">
                <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">REAL IMPACT</h4>
                <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] flex-grow">
                  Deliver actionable insights and tangible features that drive startup success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">THE PORTFOLIO</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {currentPartners.map((partner) => (
                <div 
                  key={partner.id}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="font-sans font-bold text-[24px] text-white flex-1 uppercase">{partner.title}</h4>
                    <span className={`font-mono text-[11px] uppercase px-3 py-1 border border-[rgba(255,255,255,0.1)] rounded-full ${partner.isPlaceholder ? 'text-yellow' : 'text-red'}`}>
                      {partner.status}
                    </span>
                  </div>
                  
                  <p className={`font-mono text-[13px] text-${partner.isPlaceholder ? 'yellow' : 'red'} uppercase tracking-[0.1em] mb-4`}>{partner.theme}</p>
                  <p className="font-sans font-semibold text-[16px] text-white mb-6">{partner.focus}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {partner.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 font-sans font-normal text-[14px] text-white/70 leading-[1.6]">
                        <span className={`text-${partner.isPlaceholder ? 'yellow' : 'red'}`}>▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-red opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="mb-16">
              <h2 className="font-mono text-[13px] text-red uppercase tracking-[0.1em]">THE PROCESS</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { step: "01", title: "EXPRESS INTEREST", desc: "Fill out the interest form to learn more about Launch Teams" },
                { step: "02", title: "APPLICATION", desc: "Complete the Launch Team application with your background and interests" },
                { step: "03", title: "MATCHING", desc: "Get matched with a team that aligns with your skills and goals" }
              ].map((item, idx) => (
                <div key={idx} className="border-l-[3px] border-red pl-6 py-2 flex flex-col">
                  <div className="font-mono text-[13px] text-red uppercase tracking-[0.1em] mb-4">{item.step}</div>
                  <h4 className="font-sans font-bold text-[24px] text-white mb-4 uppercase">{item.title}</h4>
                  <p className="font-sans font-normal text-[16px] text-white/70 leading-[1.6] flex-grow">{item.desc}</p>
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
              READY TO PARTNER?
            </h2>
            
            <p className="font-sans font-normal text-[18px] text-white/85 leading-[1.6] mb-10">
              Join a Launch Team and work directly with startups on real-world challenges.
            </p>
            
            <Link href="/forms" className="bg-white text-red font-sans font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:-translate-y-[1px]">
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
                <li><Link href="/innovation-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
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
