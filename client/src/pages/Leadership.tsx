import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Leadership() {
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
                Leadership
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              LEADERSHIP.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Meet the students driving Launch Labs forward.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Drew Hill */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Drew Hill</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Co-Founder / President</p>
                <a href="mailto:hill.dr@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">hill.dr@northeastern.edu</a>
              </div>

              {/* Prisha Srivastava */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Prisha Srivastava</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Co-Founder / President</p>
                <a href="mailto:srivastava.prish@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">srivastava.prish@northeastern.edu</a>
              </div>

              {/* Alara Hakki */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Alara Hakki</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Communication & Outreach Chair</p>
                <a href="mailto:hakki.a@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">hakki.a@northeastern.edu</a>
              </div>

              {/* Grace Ou */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-yellow transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Grace Ou</h4>
                <p className="text-yellow font-mono text-sm uppercase tracking-wider mb-6">Events Coordinator</p>
                <a href="mailto:ou.lin@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">ou.lin@northeastern.edu</a>
              </div>

              {/* Neha Bhende */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Neha Bhende</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Cybersecurity</p>
                <a href="mailto:bhende.n@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">bhende.n@northeastern.edu</a>
              </div>

              {/* Vansh Samaiya */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Vansh Samaiya</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Secretary</p>
                <a href="mailto:samaiya.v@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">samaiya.v@northeastern.edu</a>
              </div>

              {/* Sanay Kumar */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Sanay Kumar</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Treasurer</p>
                <a href="mailto:appisetty.s@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">appisetty.s@northeastern.edu</a>
              </div>

              {/* Shaunak Soni */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Shaunak Soni</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Operations</p>
                <a href="mailto:soni.sha@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">soni.sha@northeastern.edu</a>
              </div>

              {/* Ihika Reddy */}
              <div className="group bg-secondary border border-[rgba(255,255,255,0.05)] p-8 hover:border-red transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2">Ihika Reddy</h4>
                <p className="text-red font-mono text-sm uppercase tracking-wider mb-6">Operations</p>
                <a href="mailto:narayanareddygari.i@northeastern.edu" className="text-muted hover:text-white transition-colors text-sm">narayanareddygari.i@northeastern.edu</a>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership CTA */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-yellow opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-12 md:p-20 text-center relative overflow-hidden group hover:border-yellow transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">JOIN THE OPERATIONS TEAM</h2>
              <p className="text-xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
                Interested in leading Launch Labs? We are always looking for passionate students to help drive our mission forward.
              </p>
              <Button asChild size="lg" className="bg-yellow text-black hover:bg-yellow/90 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase">
                <Link href="/forms">Apply for Leadership</Link>
              </Button>
            </div>
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
                <li><Link href="/innovation-teams" className="text-black/70 hover:text-[#C8102E] transition-colors font-medium">Innovation Teams</Link></li>
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
