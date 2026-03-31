import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Users, Target, Zap } from "lucide-react";

export default function Leadership() {
  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">LEADERSHIP</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Lead the Future
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-4xl font-light">
              Join our operations team and help shape the future of NU Launch Labs. We're looking for ambitious builders to lead initiatives, manage partnerships, and grow our community.
            </p>
          </div>
        </section>

        {/* Opportunities */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">OPPORTUNITIES</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Leadership Roles</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {[
                {
                  icon: Briefcase,
                  title: "Operations Lead",
                  desc: "Oversee club logistics, events, and member management. Own the day-to-day operations that keep Launch Labs running."
                },
                {
                  icon: Users,
                  title: "Partnerships Lead",
                  desc: "Build relationships with startups and companies. Identify opportunities and manage Launch Teams partnerships."
                },
                {
                  icon: Target,
                  title: "Projects Lead",
                  desc: "Guide Innovation Teams through project cycles. Ensure teams have resources, mentorship, and clear outcomes."
                },
                {
                  icon: Zap,
                  title: "Community Lead",
                  desc: "Build culture and engagement. Host events, celebrate wins, and foster the builder community at Northeastern."
                }
              ].map((role, idx) => (
                <div key={idx} className="card-accent group hover:border-yellow transition-colors duration-300">
                  <div className="icon-box mb-8 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                    <role.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{role.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{role.desc}</p>
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
              If you're passionate about building and want to help shape NU Launch Labs, we want to hear from you.
            </p>
            <Button asChild>
              <Link href="/contact" className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm">
                Get in Touch
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
