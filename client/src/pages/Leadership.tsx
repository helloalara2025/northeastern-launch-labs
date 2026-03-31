import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Leadership() {
  return (
    <div className="bg-primary">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">LEADERSHIP</div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              Lead the Future
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-light">
              Join our operations team and help shape the future of NU Launch Labs. We're looking for ambitious builders to lead initiatives, manage partnerships, and grow our community.
            </p>
          </div>
        </section>

        {/* Opportunities */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">OPPORTUNITIES</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-16">Leadership Roles</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Operations Lead",
                  desc: "Oversee club logistics, events, and member management. Own the day-to-day operations that keep Launch Labs running."
                },
                {
                  title: "Partnerships Lead",
                  desc: "Build relationships with startups and companies. Identify opportunities and manage Launch Teams partnerships."
                },
                {
                  title: "Projects Lead",
                  desc: "Guide Innovation Teams through project cycles. Ensure teams have resources, mentorship, and clear outcomes."
                },
                {
                  title: "Community Lead",
                  desc: "Build culture and engagement. Host events, celebrate wins, and foster the builder community at Northeastern."
                }
              ].map((role, idx) => (
                <div key={idx} className="border-l-4 border-red pl-8">
                  <h3 className="text-2xl font-black text-white mb-4">{role.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Ready to Lead?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              If you're passionate about building and want to help shape NU Launch Labs, we want to hear from you.
            </p>
            <Button asChild>
              <Link href="/contact" className="bg-white text-red font-black px-8 py-3 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </Button>
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
