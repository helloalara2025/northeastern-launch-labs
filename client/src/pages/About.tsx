import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              About Launch Labs
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Through Launch Teams partnering with startups and Innovation Teams developing internal, end-to-end initiatives, members gain practical experience tackling real-world problems. The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation within and beyond the Northeastern community.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-white border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Real-World Experience</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Work on projects that matter, from startup collaborations to internal initiatives that produce tangible outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Disciplinary Collaboration</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Work alongside engineers, designers, business students, and more to solve complex problems from multiple angles.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Skills</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Develop communication, project management, and technical skills in real collaborative environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Build a portfolio of real projects that demonstrate your capabilities to employers and future collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Time Commitment */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">Time Commitment</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Members are expected to actively contribute to their team's work, with an average time commitment of <strong>3–5 hours per week</strong>. This is designed to fit into your busy student schedule while providing meaningful, hands-on experience.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-50 border-t border-red-200 py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <h3 className="font-bold text-3xl text-foreground mb-4">Ready to Get Involved?</h3>
            <p className="text-foreground/70 mb-8">Join us in building real products and making real impact.</p>
            <Link href="/forms">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-12">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-foreground/70 hover:text-red-800 transition-colors">Home</a></li>
                <li><a href="/launch-teams" className="text-foreground/70 hover:text-red-800 transition-colors">Launch Teams</a></li>
                <li><a href="/innovation-teams" className="text-foreground/70 hover:text-red-800 transition-colors">Innovation Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/forms" className="text-foreground/70 hover:text-red-800 transition-colors">Apply</a></li>
                <li><a href="/leadership" className="text-foreground/70 hover:text-red-800 transition-colors">Leadership</a></li>
                <li><a href="/partners" className="text-foreground/70 hover:text-red-800 transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="text-foreground/70 hover:text-red-800 transition-colors">Contact</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-800 transition-colors">Instagram</a></li>
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
