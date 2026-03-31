import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Rocket, Users, Zap, Code } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="label text-yellow mb-8 animate-fade-up">
                NU LAUNCH LABS
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Build Real Things
              </h1>
              <p className="text-lg md:text-2xl text-muted mb-12 leading-relaxed max-w-3xl font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Connect with builders across CS, design, business, and engineering. Work on real-world projects that ship.
              </p>
              <div className="flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "0.3s" }}>
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
            <div className="label text-yellow mb-12">HOW IT WORKS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Two Paths to Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Launch Teams */}
              <div className="card-accent">
                <div className="flex items-start gap-6 mb-8">
                  <div className="icon-box mt-1">
                    <Rocket size={28} />
                  </div>
                  <h3 className="text-4xl font-black text-white">Launch Teams</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  Partner directly with early-stage startups. Design, build, and deliver real solutions with founders and stakeholders on development-focused projects.
                </p>
                <div className="text-xs label text-yellow">5+ ACTIVE PARTNERS</div>
              </div>

              {/* Innovation Teams */}
              <div className="card-accent-yellow">
                <div className="flex items-start gap-6 mb-8">
                  <div className="icon-box bg-yellow text-black mt-1">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-4xl font-black text-white">Innovation Teams</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  End-to-end internal projects designed to mirror professional work. Take projects from problem definition through execution and presentation.
                </p>
                <div className="text-xs label text-yellow">8 INTERNAL VENTURES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="section-padding bg-primary relative">
          <div className="container">
            <div className="label text-yellow mb-12">WHY JOIN</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">For Builders, By Builders</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Users, title: "Build Your Network", desc: "Connect with ambitious builders across all disciplines." },
                { icon: Code, title: "Ship Real Work", desc: "Work on projects with real clients and measurable impact." },
                { icon: Rocket, title: "Develop Leadership", desc: "Lead teams, make decisions, grow as a builder." }
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

        {/* Project Carousel */}
        <ProjectCarousel />

        {/* Instagram Feed */}
        <section className="section-padding bg-secondary">
          <div className="container">
            <div className="label text-yellow mb-12">LATEST</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">From Our Community</h2>
            <InstagramFeed />
          </div>
        </section>

        {/* CTA Section - Red */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Build?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Join a community of builders working on real projects that matter.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/forms" className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm">
                  Apply Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact" className="border-2 border-white text-white font-black px-8 py-4 hover:bg-white/10 transition-all uppercase tracking-wider text-sm">
                  Get in Touch
                </Link>
              </Button>
            </div>
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
