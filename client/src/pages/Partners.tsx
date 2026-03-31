import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, TrendingUp, Zap, Clock, ArrowRight, Lightbulb } from "lucide-react";

export default function Partners() {
  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">PARTNERS</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Partner With Us
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-4xl font-light">
              Launch Labs works with forward-thinking startups and companies committed to providing meaningful learning experiences while advancing your product.
            </p>
          </div>
        </section>

        {/* Why Partner */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">WHY PARTNER</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Why Work With Launch Labs?</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {[
                {
                  icon: Users,
                  title: "Skilled Student Teams",
                  desc: "Access talented students from all programs—engineering, design, business, and more. Diverse perspectives drive innovation."
                },
                {
                  icon: TrendingUp,
                  title: "Cost-Effective Development",
                  desc: "High-quality work for early-stage ventures at a fraction of traditional agency costs. Scale your team affordably."
                },
                {
                  icon: Lightbulb,
                  title: "Fresh Perspectives",
                  desc: "Student teams bring creativity and unconventional thinking to your challenges. New ideas fuel growth."
                },
                {
                  icon: Clock,
                  title: "Rapid Execution",
                  desc: "Motivated teams working on real problems deliver results quickly. From concept to launch in weeks, not months."
                }
              ].map((item, idx) => (
                <div key={idx} className="card-accent group hover:border-yellow transition-colors duration-300">
                  <div className="icon-box mb-8 group-hover:bg-yellow group-hover:text-black transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{item.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="label text-yellow mb-12">PROCESS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">How It Works</h2>
            <div className="max-w-3xl space-y-12">
              {[
                {
                  step: "01",
                  title: "Define Your Challenge",
                  desc: "We work with you to scope a project that's meaningful for students while advancing your product. Clear goals, realistic timelines."
                },
                {
                  step: "02",
                  title: "Assemble Your Team",
                  desc: "We match your project with the right student team based on skills, interests, and availability. You meet the team and set expectations."
                },
                {
                  step: "03",
                  title: "Execute & Iterate",
                  desc: "Teams work on your project with regular check-ins and feedback loops. You're involved throughout the process."
                },
                {
                  step: "04",
                  title: "Deliver & Learn",
                  desc: "Students deliver a finished product or validated prototype. Both sides gain real experience and learnings."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-red pl-8">
                  <div className="text-6xl font-black text-red/20 mb-2">{item.step}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">CURRENT PARTNERS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Who We Work With</h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-16 max-w-3xl">
              We partner with early-stage startups and growth-stage companies across industries. Our current partners include ventures in fintech, healthcare, edtech, and consumer applications.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Series A fintech platform",
                "B2B SaaS marketplace",
                "Healthcare tech startup",
                "EdTech learning platform",
                "Consumer mobile app",
                "AI/ML research venture"
              ].map((partner, idx) => (
                <div key={idx} className="border-l-4 border-yellow pl-8 py-4">
                  <p className="text-white font-medium text-lg">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Partner?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
              Let's talk about how Launch Labs can help accelerate your product and provide meaningful experience to our students.
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
