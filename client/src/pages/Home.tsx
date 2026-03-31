import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Rocket, Users, Zap, Code } from "lucide-react";
import { useState, useEffect } from "react";
import InstagramFeed from "@/components/InstagramFeed";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <div className="bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="mb-8 label text-yellow">
                NU LAUNCH LABS
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Build Real Things
              </h1>
              <p className="text-xl md:text-2xl text-muted mb-12 leading-relaxed max-w-2xl font-light">
                Connect with builders across CS, design, business, and engineering. Work on real-world projects that ship.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild>
                  <Link href="/forms" className="btn-primary inline-flex items-center gap-3">
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/about" className="btn-secondary inline-flex items-center gap-3">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Navy Section */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">HOW IT WORKS</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-16">Two Paths to Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Launch Teams */}
              <div className="border-l-4 border-red pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-white">Launch Teams</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Partner directly with early-stage startups. Design, build, and deliver real solutions with founders and stakeholders on development-focused projects.
                </p>
                <div className="text-sm label text-yellow">5+ ACTIVE PARTNERS</div>
              </div>

              {/* Innovation Teams */}
              <div className="border-l-4 border-yellow pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box bg-yellow text-black">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-white">Innovation Teams</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  End-to-end internal projects designed to mirror professional work. Take projects from problem definition through execution and presentation.
                </p>
                <div className="text-sm label text-yellow">8 INTERNAL VENTURES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="section-padding bg-primary relative">
          <div className="container">
            <div className="label text-yellow mb-8">WHY JOIN</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-16">For Builders, By Builders</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Build Your Network", desc: "Connect with ambitious builders across all disciplines." },
                { icon: Code, title: "Ship Real Work", desc: "Work on projects with real clients and measurable impact." },
                { icon: Rocket, title: "Develop Leadership", desc: "Lead teams, make decisions, grow as a builder." }
              ].map((item, idx) => (
                <div key={idx} className="border-t-2 border-red pt-8">
                  <div className="icon-box mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="section-padding bg-secondary">
          <div className="container">
            <div className="label text-yellow mb-8">LATEST</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-16">From Our Community</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section - Red */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Ready to Build?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join a community of builders working on real projects that matter.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-white text-red font-black px-8 py-3 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                  Apply Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact" className="border-2 border-white text-white font-black px-8 py-3 hover:bg-white/10 transition-all uppercase tracking-wider">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/10 py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="label text-yellow mb-6">NU LAUNCH LABS</div>
              <p className="text-muted leading-relaxed">
                Connecting builders at Northeastern. Founded Spring 2026.
              </p>
            </div>
            <div>
              <div className="label text-white mb-6">EXPLORE</div>
              <ul className="space-y-3">
                <li><Link href="/" className="text-muted hover:text-red transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted hover:text-red transition-colors">About</Link></li>
                <li><Link href="/launch-teams" className="text-muted hover:text-red transition-colors">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-6">GET INVOLVED</div>
              <ul className="space-y-3">
                <li><Link href="/forms" className="text-muted hover:text-red transition-colors">Apply</Link></li>
                <li><Link href="/leadership" className="text-muted hover:text-red transition-colors">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-muted hover:text-red transition-colors">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <div className="label text-white mb-6">CONNECT</div>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-muted hover:text-red transition-colors">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-red transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-muted font-light">
            <p>&copy; 2026 NU Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
