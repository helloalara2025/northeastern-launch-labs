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
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                Launch Teams
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              BUILD WITH <br />
              <span className="text-red">STARTUPS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work closely with founders on development-focused projects.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-yellow opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">The Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">WHAT WE DO</h3>
            
            <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]">
              <div className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-white mb-8 group-hover:text-red transition-colors" />
                <h4 className="text-xl font-bold mb-4">Product Development</h4>
                <p className="text-muted leading-relaxed">
                  Build and iterate on startup products with hands-on development work alongside founders.
                </p>
              </div>
              
              <div className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-white mb-8 group-hover:text-yellow transition-colors" />
                <h4 className="text-xl font-bold mb-4">Market Research</h4>
                <p className="text-muted leading-relaxed">
                  Analyze competitive landscapes, market trends, and opportunities for growth.
                </p>
              </div>
              
              <div className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-white mb-8 group-hover:text-red transition-colors" />
                <h4 className="text-xl font-bold mb-4">Real Impact</h4>
                <p className="text-muted leading-relaxed">
                  Deliver actionable insights and tangible features that drive startup success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">The Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">CURRENT PARTNERS</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {currentPartners.map((partner) => (
                <div 
                  key={partner.id}
                  className={`group bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-${partner.isPlaceholder ? 'yellow' : 'red'} transition-colors duration-300 relative overflow-hidden flex flex-col`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${partner.isPlaceholder ? 'yellow' : 'red'} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-2xl font-bold flex-1">{partner.title}</h4>
                    <span className={`text-xs font-mono uppercase px-2 py-1 border border-[rgba(255,255,255,0.1)] rounded-full ${partner.isPlaceholder ? 'text-yellow' : 'text-red'}`}>
                      {partner.status}
                    </span>
                  </div>
                  
                  <p className={`text-sm font-mono text-${partner.isPlaceholder ? 'yellow' : 'red'} uppercase tracking-wider mb-4`}>{partner.theme}</p>
                  <p className="text-white font-medium mb-6">{partner.focus}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {partner.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 text-muted text-sm">
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
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">HOW TO APPLY</h3>
            
            <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] mb-16">
              {[
                { step: "01", title: "Express Interest", desc: "Fill out the interest form to learn more about Launch Teams" },
                { step: "02", title: "Application", desc: "Complete the Launch Team application with your background and interests" },
                { step: "03", title: "Matching", desc: "Get matched with a team that aligns with your skills and goals" }
              ].map((item, idx) => (
                <div key={idx} className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                  <div className="text-red font-mono text-sm mb-4">{item.step}</div>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-red"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              READY TO PARTNER?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Join a Launch Team and work directly with startups on real-world challenges.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase border border-black">
              <Link href="/forms">Apply Now</Link>
            </Button>
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
