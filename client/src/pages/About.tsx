import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div>
      <Navigation />
      <main>
        {/* Header */}
        <section className="section-padding bg-white border-b-4 border-red">
          <div className="container">
            <div className="mb-8">
              <span className="badge">ABOUT US</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">
              Building the Next Generation of Leaders
            </h1>
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed max-w-3xl font-light">
              Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-stone">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-8">Our Mission</h2>
            <div className="max-w-3xl">
              <p className="text-xl text-charcoal leading-relaxed mb-8 font-light">
                To empower students to develop leadership, strategic thinking, and execution skills through real-world project work with startups and internally scoped ventures.
              </p>
              <p className="text-xl text-charcoal leading-relaxed font-light">
                We believe the best learning happens when students tackle complex, ambiguous problems alongside peers from different disciplines, guided by experienced mentors and industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-navy">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-16">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
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
                <div key={idx} className="card-dark">
                  <h3 className="text-2xl font-black text-black mb-4">{value.title}</h3>
                  <p className="text-charcoal text-lg leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-16">Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={idx} className="bg-stone p-8 rounded-lg border-l-8 border-l-red hover:shadow-lg transition-all duration-300">
                  <div className="icon-box mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">{item.title}</h3>
                  <p className="text-charcoal text-lg leading-relaxed mb-6">{item.desc}</p>
                  <Link href={item.link} className="text-red font-black hover:gap-2 inline-flex items-center gap-1 transition-all uppercase tracking-wider">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-red">
          <div className="container text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Ready to Join?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Whether you're interested in joining a team, leading an initiative, or partnering with us, we'd love to hear from you.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-white text-red font-black px-8 py-3 hover:bg-stone transition-all inline-flex items-center gap-3 uppercase tracking-wider">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-red py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="text-2xl font-black text-black mb-6">Launch Labs</h4>
              <p className="text-lg text-charcoal font-light leading-relaxed">
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
