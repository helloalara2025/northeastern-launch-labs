import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Lightbulb, Users, Award, Zap, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-white py-32 md:py-40 relative overflow-hidden">
          <div className="absolute top-10 right-10 text-red-900/10 text-6xl">✦</div>
          <div className="absolute bottom-20 left-5 text-red-900/10 text-5xl">◆</div>
          <div className="container relative z-10">
            <div className="mb-6 inline-block">
              <span className="inline-block bg-red-900 text-white text-xs font-bold px-3 py-1 rounded-full">Student club at Northeastern University</span>
            </div>
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              From Idea to Impact.
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed mb-12 max-w-2xl">
              Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-red-900 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                Join
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-10">Our Mission</h2>
            <p className="text-base text-foreground/70 leading-relaxed mb-0">
              We bring together students from all backgrounds to work on real-world projects that matter. Through Launch Teams partnering with startups and Innovation Teams developing internal initiatives, members gain practical experience, develop professional skills, and explore pathways to entrepreneurship and innovation.
            </p>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <div className="flex items-center gap-3 mb-16">
              <span className="text-red-900/20 text-4xl">✦</span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground">How We Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Launch Teams Card */}
              <Card className="border border-border hover:border-border transition-all duration-300 group cursor-pointer h-full bg-white rounded-xl">
                <Link href="/launch-teams" className="block h-full">
                  <CardContent className="p-12">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-8 group-hover:scale-110 transition-transform duration-300 font-bold text-xl">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-4">Launch Teams</h3>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-sm">
                      Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work on product development, software implementation, prototyping, and iterative testing.
                    </p>
                    <div className="text-red-900 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200 text-sm">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Link>
              </Card>

              {/* Innovation Teams Card */}
              <Card className="border border-border hover:border-border transition-all duration-300 group cursor-pointer h-full bg-white rounded-xl">
                <Link href="/innovation-teams" className="block h-full">
                  <CardContent className="p-12">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-8 group-hover:scale-110 transition-transform duration-300 font-bold text-xl">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-4">Innovation Teams</h3>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-sm">
                      Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through delivery with full ownership.
                    </p>
                    <div className="text-red-900 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200 text-sm">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Gain Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <div className="flex items-center gap-3 mb-16">
              <span className="text-red-900/20 text-4xl">✦</span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground">What You'll Gain</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6 font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Real-World Experience</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Work on projects that matter, from startup collaborations to internal initiatives that produce tangible outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6 font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Disciplinary Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Work alongside engineers, designers, business students, and more to solve complex problems from multiple angles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6 font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Skills</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Build communication, project management, leadership, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-6 font-bold">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Build a portfolio of real projects that demonstrate your capabilities to employers and future collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Get Involved Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-16">How to Get Involved</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-900 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Apply to Join</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Complete an application form to become a member. Students interested in leadership opportunities should indicate this in their application.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-900 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Attend an Info Session</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Join an information meeting to learn more about the club structure, teams, and expectations.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-900 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Propose a Project</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration. Choose between Launch Teams or Innovation Teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-16">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="text-sm font-bold text-red-900 mb-2">Info Session</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Launch Labs Overview</h3>
                  <p className="text-xs text-foreground/50">Date and time coming soon</p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-border transition-all duration-300 bg-white rounded-xl">
                <CardContent className="p-10">
                  <div className="text-sm font-bold text-red-900 mb-2">Application Deadline</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Spring 2026 Cohort</h3>
                  <p className="text-foreground/70 text-sm mb-4">Submit your application to join our next cohort of Launch Teams and Innovation Teams.</p>
                  <p className="text-xs text-foreground/50">Date coming soon</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <div className="p-12 bg-white border border-border rounded-xl text-center">
              <p className="text-foreground font-semibold mb-6 text-lg">Ready to get started?</p>
              <Button asChild>
                <Link href="/forms" className="bg-red-900 hover:bg-red-900 text-white font-bold px-10 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                  Join
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Launch Labs</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Connecting students across disciplines to work on real-world projects.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Teams</h4>
              <ul className="space-y-3">
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Launch Teams</Link></li>
                <li><Link href="/innovation-teams" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Innovation Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Organization</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">About</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="mailto:NU-launchlabs@northeastern.edu" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Email</a></li>
                <li><a href="https://www.linkedin.com/company/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nulaunchlabs/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Instagram</a></li>
                <li><a href="https://discord.gg/EVSEDPDv" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-red-900 text-sm transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-foreground/50 text-xs text-center">
              © 2026 Northeastern Launch Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
