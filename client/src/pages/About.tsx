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
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              About Launch Labs
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our goal is to bring together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through Launch Teams partnering with startups and Innovation Teams developing internal, end-to-end projects, members gain practical experience tackling real-world problems. The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation within and beyond the Northeastern community.
            </p>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">How to Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Apply to Join</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Complete the general application form to become a member. Students interested in leadership opportunities should indicate this in their application.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Propose a Project</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Attend an Info Session</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Join an information meeting to learn more about the club structure, teams, and expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Stay Engaged</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Members are expected to actively contribute to their team's work, with an average time commitment of 3-5 hours per week.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We focus on projects that create tangible value for real users and customers. Our work matters.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We believe the best solutions come from diverse perspectives. We bring together students from all backgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Ownership & Accountability</h3>
                  <p className="text-foreground/70">
                    Our members take ownership of their projects and drive outcomes. We hold ourselves to professional standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Continuous Learning</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We embrace challenges as opportunities to grow. Every project teaches us something new.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-50 border-t border-red-100 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Ready to Join Us?</h2>
            <p className="text-lg text-foreground/70 mb-10">
              Become part of the Launch Labs community and start making real impact.
            </p>
            <Link href="/forms">
              <Button className="bg-red-900 hover:bg-red-950 text-white font-bold px-10 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto">
                Join
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-16">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Home</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Launch Teams</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Contact</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-foreground/10 pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
