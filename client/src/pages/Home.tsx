import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold text-red-800 uppercase tracking-wider mb-6 bg-red-50 px-4 py-2 rounded-full border border-red-200">
                Northeastern Student Organization
              </span>
            </div>
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              From Idea to <span className="text-black">Impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
              Bring together students across disciplines to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/forms">
                <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg text-base transition-all duration-200 shadow-md hover:shadow-lg">
                  Apply to Join
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-bold px-8 h-12 rounded-lg text-base transition-all">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              Our Mission
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through Launch Teams partnering with startups and Innovation Teams developing internal, end-to-end initiatives, members gain practical experience tackling real-world problems.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation within and beyond the Northeastern community.
              </p>
            </div>
          </div>
        </section>

        {/* Teams Overview */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              How We Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams */}
              <div className="border-2 border-red-200 rounded-xl p-8 hover:shadow-lg transition-shadow bg-white">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-red-800 rounded"></div>
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-4">Launch Teams</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work on product development, software implementation, prototyping, and iterative testing.
                </p>
                <Link href="/launch-teams">
                  <button className="text-red-800 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Innovation Teams */}
              <div className="border-2 border-amber-200 rounded-xl p-8 hover:shadow-lg transition-shadow bg-white">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-amber-600 rounded"></div>
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-4">Innovation Teams</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through execution and final presentation.
                </p>
                <Link href="/innovation-teams">
                  <button className="text-amber-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Gain */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              What You'll Gain
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Real-World Experience</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Work on projects that matter, from startup collaborations to internal initiatives that produce tangible outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Disciplinary Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Work alongside engineers, designers, business students, and more to solve complex problems from multiple angles.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Skills</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Develop communication, project management, and technical skills in real collaborative environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build a portfolio of real projects that demonstrate your capabilities to employers and future collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              How to Get Involved
            </h2>
            <div className="space-y-6 mb-14">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-800 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Apply to Join</h3>
                  <p className="text-foreground/70">
                    Complete the general application form to become a member. Students interested in leadership opportunities should indicate this in their application.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-800 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Attend an Info Session</h3>
                  <p className="text-foreground/70">
                    Join an information meeting to learn more about the club structure, teams, and expectations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-800 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Propose a Project</h3>
                  <p className="text-foreground/70">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-800 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Stay Engaged</h3>
                  <p className="text-foreground/70">
                    Members are expected to actively contribute to their team's work, with an average time commitment of 3–5 hours per week.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-10 text-center">
              <h3 className="font-bold text-2xl text-foreground mb-3">Ready to Make an Impact?</h3>
              <p className="text-foreground/70 mb-8">
                Join Northeastern Launch Labs and start building real products with real teams.
              </p>
              <Link href="/forms">
                <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg shadow-md hover:shadow-lg">
                  Apply Now
                </Button>
              </Link>
            </div>
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
                Northeastern University's hub for real-world project work and student innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Home</a></Link></li>
                <li><Link href="/about"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">About</a></Link></li>
                <li><Link href="/launch-teams"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Launch Teams</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Apply</a></Link></li>
                <li><Link href="/leadership"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Leadership</a></Link></li>
                <li><Link href="/partners"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Partners</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Contact</a></Link></li>
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
