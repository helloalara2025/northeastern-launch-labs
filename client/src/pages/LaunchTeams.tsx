import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, TrendingUp, Zap } from "lucide-react";

export default function LaunchTeams() {
  const currentPartners = [
    {
      id: 1,
      title: "FinTech Market Dynamics",
      theme: "Finance",
      status: "Active",
      focus: "Competitor mapping & API research",
      desc: "Mapping competitive landscape in payment processing, researching third-party API integrations, and analyzing market trends and opportunities."
    },
    {
      id: 2,
      title: "Healthcare Systems",
      theme: "Healthcare",
      status: "Coming Soon",
      focus: "Patient data management",
      desc: "Building secure data infrastructure, designing user-centric interfaces, and implementing compliance frameworks for healthcare solutions."
    },
    {
      id: 3,
      title: "E-commerce Optimization",
      theme: "Retail",
      status: "Coming Soon",
      focus: "Conversion rate optimization",
      desc: "Analyzing user behavior patterns, A/B testing checkout flows, and implementing personalization engines to boost conversions."
    }
  ];

  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">LAUNCH TEAMS</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Real Startup Projects
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-4xl font-light">
              Work directly with early-stage startups on real-world product development. Partner with founders, solve real problems, and ship features that matter.
            </p>
          </div>
        </section>

        {/* Current Partners */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">CURRENT PARTNERS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Active Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {currentPartners.map((partner) => (
                <div key={partner.id} className="card-accent group hover:border-yellow transition-colors duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="label text-yellow mb-2">{partner.theme}</div>
                      <h3 className="text-2xl font-black text-white">{partner.title}</h3>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <p className="text-sm label text-muted mb-2">FOCUS AREA</p>
                    <p className="text-white font-medium">{partner.focus}</p>
                  </div>
                  <p className="text-muted text-lg leading-relaxed mb-8">{partner.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={`label text-sm ${partner.status === 'Active' ? 'text-red' : 'text-muted'}`}>
                      {partner.status}
                    </span>
                    {partner.status === 'Active' && (
                      <Link href="/forms" className="text-red font-black hover:text-yellow inline-flex items-center gap-2 transition-all duration-300 label">
                        Apply
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Do */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="label text-yellow mb-12">WHAT YOU'LL DO</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Your Role</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Briefcase,
                  title: "Understand the Problem",
                  desc: "Work with founders to deeply understand their challenges, constraints, and vision. Ask the right questions."
                },
                {
                  icon: TrendingUp,
                  title: "Design & Build",
                  desc: "Collaborate across disciplines to design solutions and build real features. Ship code that matters."
                },
                {
                  icon: Zap,
                  title: "Iterate & Learn",
                  desc: "Get feedback from users and stakeholders. Iterate rapidly and learn what works. Adapt and improve."
                }
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

        {/* Application Process */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">APPLICATION PROCESS</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">How to Apply</h2>
            <div className="max-w-3xl space-y-12">
              {[
                {
                  step: "01",
                  title: "Submit Your Application",
                  desc: "Tell us about your background, interests, and why you want to join a Launch Team. Be genuine and specific."
                },
                {
                  step: "02",
                  title: "Meet the Founders",
                  desc: "If selected, you'll meet the startup founders and learn more about their project. Ask questions and get a feel for the team."
                },
                {
                  step: "03",
                  title: "Join the Team",
                  desc: "Start working with the team. You'll have regular check-ins with founders and mentors to guide your work."
                },
                {
                  step: "04",
                  title: "Ship & Celebrate",
                  desc: "Deliver your work and see the impact. Celebrate wins with the team and reflect on what you learned."
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

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Ship?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
              Join a Launch Team and work on real projects with real impact. Apply today.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm">
                Apply Now
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
