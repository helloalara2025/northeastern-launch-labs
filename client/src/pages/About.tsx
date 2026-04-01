import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Target, Zap } from "lucide-react";

export default function About() {
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
                <span className="w-2 h-2 rounded-full bg-yellow"></span>
                About Us
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              BUILDING <br />
              <span className="text-yellow">BUILDERS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Northeastern Launch Labs brings together students across disciplines to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">The Mission</h2>
                <h3 className="text-4xl font-bold tracking-tight">WHY WE EXIST</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-medium">
                  To empower students to develop leadership, strategic thinking, and execution skills through real-world project work with startups and internally scoped ventures.
                </p>
                <p className="text-xl text-muted leading-relaxed">
                  We believe the best learning happens when students tackle complex, ambiguous problems alongside peers from different disciplines, guided by experienced mentors and industry leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-red opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">The Principles</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">HOW WE OPERATE</h3>
            
            <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]">
              {[
                {
                  title: "Real-World Impact",
                  desc: "We work on projects that matter—with real clients, real constraints, and real outcomes. Students learn by doing, not by studying."
                },
                {
                  title: "Cross-Disciplinary Collaboration",
                  desc: "The best solutions come from diverse perspectives. We bring together engineers, designers, business students, and domain experts."
                },
                {
                  title: "Leadership Development",
                  desc: "We believe every student can lead. We create environments where students take ownership, make decisions, and grow as leaders."
                },
                {
                  title: "Continuous Learning",
                  desc: "We embrace ambiguity and iteration. Failure is a learning opportunity, and feedback drives growth."
                }
              ].map((value, idx) => (
                <div key={idx} className="bg-primary p-10 group hover:bg-secondary transition-colors duration-300">
                  <div className="text-red font-mono text-sm mb-4">0{idx + 1}</div>
                  <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                  <p className="text-muted leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)]">
          <div className="container">
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Take Action</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">GET INVOLVED</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Join a Team",
                  desc: "Apply to Launch Teams or Innovation Teams and start working on real projects.",
                  link: "/forms",
                  color: "red"
                },
                {
                  icon: Target,
                  title: "Lead an Initiative",
                  desc: "Interested in leadership? Join our operations team and help shape the future of Launch Labs.",
                  link: "/leadership",
                  color: "yellow"
                },
                {
                  icon: Zap,
                  title: "Partner With Us",
                  desc: "Are you a startup? Let's talk about how Launch Labs can support your growth.",
                  link: "/partners",
                  color: "red"
                }
              ].map((item, idx) => (
                <div key={idx} className={`group bg-secondary border border-[rgba(255,255,255,0.05)] p-10 hover:border-${item.color} transition-colors duration-300 relative overflow-hidden flex flex-col`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`}></div>
                  <item.icon className={`w-8 h-8 text-${item.color} mb-8`} />
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-muted leading-relaxed mb-12 flex-grow">{item.desc}</p>
                  <Link href={item.link}>
                    <a className={`text-${item.color} hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider mt-auto`}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
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
              READY TO JOIN?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Whether you're interested in joining a team, leading an initiative, or partnering with us, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase border border-black">
              <Link href="/forms">Get Started</Link>
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
                <li><Link href="/" className="text-charcoal hover:text-red transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-charcoal hover:text-red transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-charcoal hover:text-red transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/forms" className="text-charcoal hover:text-red transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-charcoal hover:text-red transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/innovation-teams" className="text-charcoal hover:text-red transition-colors font-medium">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-black mb-6 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/contact" className="text-charcoal hover:text-red transition-colors font-medium">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-red transition-colors font-medium">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-red transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-gray-light pt-8 text-center text-lg text-charcoal font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
