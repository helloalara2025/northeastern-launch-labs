import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Zap, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          <div className="container relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              STARTUP <br />
              <span className="text-yellow">PARTNERS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
            </p>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-yellow opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">WHY PARTNER WITH US?</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-red transition-colors duration-300 group">
                <div className="w-12 h-12 bg-primary border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-8">
                  <Users className="w-6 h-6 text-red" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Skilled Student Teams</h4>
                <p className="text-muted leading-relaxed">
                  Access talented students from all programs—engineering, design, business, and more.
                </p>
              </div>

              <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-yellow transition-colors duration-300 group">
                <div className="w-12 h-12 bg-primary border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-8">
                  <TrendingUp className="w-6 h-6 text-yellow" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Cost-Effective Development</h4>
                <p className="text-muted leading-relaxed">
                  High-quality work for early-stage ventures at a fraction of traditional agency costs.
                </p>
              </div>

              <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-red transition-colors duration-300 group">
                <div className="w-12 h-12 bg-primary border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-8">
                  <Zap className="w-6 h-6 text-red" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Fresh Perspectives</h4>
                <p className="text-muted leading-relaxed">
                  Students bring emerging technologies and new approaches to your challenges.
                </p>
              </div>

              <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-yellow transition-colors duration-300 group">
                <div className="w-12 h-12 bg-primary border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-8">
                  <Clock className="w-6 h-6 text-yellow" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Flexible Commitment</h4>
                <p className="text-muted leading-relaxed">
                  Semester-long engagements with defined scope that fits your timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Network</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">CURRENT PARTNERS</h3>
            
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-12 text-center">
              <p className="text-muted text-xl font-medium leading-relaxed">
                Partner profiles and logos coming soon. Check back for information about our current startup collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">HOW IT WORKS</h3>
            
            <div className="space-y-6 max-w-4xl">
              {[
                { step: "01", title: "Initial Consultation", desc: "We discuss your project scope, timeline, and team needs to ensure the right fit." },
                { step: "02", title: "Team Formation", desc: "We assemble a cross-functional team of students with the skills and interests for your project." },
                { step: "03", title: "Execution", desc: "Your team works on the project with regular check-ins and support from Launch Labs leadership." },
                { step: "04", title: "Delivery & Feedback", desc: "Project completion with final presentation and feedback session with your team." }
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary border border-[rgba(255,255,255,0.05)] p-8 flex flex-col md:flex-row gap-8 hover:border-red transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="text-4xl font-bold text-red opacity-50 font-mono">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
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
              INTERESTED IN PARTNERING?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Let's talk about how Launch Labs can support your startup's growth.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase border border-white">
              <Link href="/contact">Get in Touch</Link>
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
                <li><Link href="/innovation-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
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
