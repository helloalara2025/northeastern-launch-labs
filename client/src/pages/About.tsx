import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Target, Zap, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="bg-primary pt-20">
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-8">ABOUT</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
              Built for Builders
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed max-w-4xl font-light">
              NU Launch Labs connects students across CS, design, business, and engineering to work on real-world projects. Founded Spring 2026, housed under Khoury College of Computer Sciences, open to all students.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-bottom-left"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">OUR MISSION</div>
            <div className="max-w-4xl">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-12">Empower Builders</h2>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 font-light">
                To empower students to develop leadership, strategic thinking, and execution skills through real-world project work with startups and internally scoped ventures.
              </p>
              <p className="text-lg md:text-xl text-muted leading-relaxed font-light">
                We believe the best learning happens when students tackle complex, ambiguous problems alongside peers from different disciplines, guided by experienced mentors and industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="label text-yellow mb-12">CORE VALUES</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">What We Stand For</h2>
            <div className="grid md:grid-cols-2 gap-16">
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
                <div key={idx} className="card-accent group hover:border-yellow transition-colors duration-300">
                  <h3 className="text-3xl font-black text-white mb-6">{value.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="arc-top-right"></div>
          <div className="container relative z-10">
            <div className="label text-yellow mb-12">GET INVOLVED</div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-20">Three Ways to Join</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Users,
                  title: "Join a Team",
                  desc: "Apply to Launch Teams or Innovation Teams and start working on real projects.",
                  link: "/forms"
                },
                {
                  icon: Target,
                  title: "Lead an Initiative",
                  desc: "Interested in leadership? Join our operations team and help shape the future of Launch Labs.",
                  link: "/leadership"
                },
                {
                  icon: Zap,
                  title: "Partner With Us",
                  desc: "Are you a startup? Let's talk about how Launch Labs can support your growth.",
                  link: "/partners"
                }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="border-t-4 border-yellow pt-8 mb-8 group-hover:border-red transition-colors duration-300"></div>
                  <div className="icon-box bg-yellow text-black mb-8 group-hover:bg-red group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-muted text-lg leading-relaxed mb-8">{item.desc}</p>
                  <Link href={item.link} className="text-red font-black hover:text-yellow inline-flex items-center gap-2 transition-all duration-300 label">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Ready to Build?</h2>
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-light">
              Whether you're interested in joining a team, leading an initiative, or partnering with us, we'd love to hear from you.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-red font-black px-8 py-4 hover:bg-yellow transition-all inline-flex items-center gap-3 uppercase tracking-wider text-sm">
                Get Started
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
