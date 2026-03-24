import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              About Launch Labs
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-14">Our Mission</h2>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Our goal is to bring together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
              </p>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                Through Launch Teams partnering with startups and Innovation Teams developing internal, end-to-end projects, members gain practical experience tackling real-world problems. The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation within and beyond the Northeastern community.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">How to Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Apply to Join</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Complete the general application form to become a member. Students interested in leadership opportunities should indicate this in their application.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Propose a Project</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Attend an Info Session</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Join an information meeting to learn more about the club structure, teams, and expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Stay Engaged</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Members are expected to actively contribute to their team's work, with an average time commitment of 3-5 hours per week.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Real Impact</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    We focus on projects that create tangible value for real users and customers. Our work matters.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    We believe the best solutions come from diverse perspectives. We bring together students from all backgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Ownership & Accountability</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Our members take ownership of their projects and drive outcomes. We hold ourselves to professional standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-bold text-lg text-foreground mb-4">Continuous Learning</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    We embrace challenges as opportunities to grow. Every project teaches us something new.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container text-center">
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-8">Ready to Join Us?</h2>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Become part of the Launch Labs community and start making real impact.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-cyan-600 hover:bg-cyan-600 text-white font-bold px-10 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                Join Us
                <span>→</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Launch Labs</h4>
              <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-cyan-600 transition-colors">Home</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-cyan-600 transition-colors">Launch Teams</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-cyan-600 transition-colors">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-cyan-600 transition-colors">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-cyan-600 transition-colors">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-cyan-600 transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-cyan-600 transition-colors">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-cyan-600 transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-cyan-600 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-base md:text-lg text-foreground/70 font-light">
            <p>&copy; 2026 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
