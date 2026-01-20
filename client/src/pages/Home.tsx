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
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="inline-block bg-red-900 text-white text-xs font-bold px-3 py-1 rounded-full">Student club at Northeastern University</span>
            </div>
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              From Idea to Impact.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
              Work on real-world projects with students from every background. Bridge classroom learning with hands-on impact.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-red-900 hover:bg-red-950 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                Join
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              We bring together students from all backgrounds to work on real-world projects that matter. Through Launch Teams partnering with startups and Innovation Teams developing internal initiatives, members gain practical experience, develop professional skills, and explore pathways to entrepreneurship and innovation.
            </p>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">How We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Launch Teams Card */}
              <Card className="border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full bg-white">
                <Link href="/launch-teams" className="block h-full">
                  <CardContent className="p-10">
                    <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-6 group-hover:scale-110 transition-transform duration-300 font-bold text-xl">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-2xl text-foreground mb-3">Launch Teams</h3>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-base">
                      Partner directly with early-stage startups to design, build, and deliver real-world solutions. Work on product development, software implementation, prototyping, and iterative testing.
                    </p>
                    <div className="text-red-900 font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </Link>
              </Card>

              {/* Innovation Teams Card */}
              <Card className="border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full bg-white">
                <Link href="/innovation-teams" className="block h-full">
                  <CardContent className="p-10">
                    <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center text-gray-800 mb-6 group-hover:scale-110 transition-transform duration-300 font-bold text-xl">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-2xl text-foreground mb-3">Innovation Teams</h3>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-base">
                      Focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Take projects from problem definition through delivery with full ownership.
                    </p>
                    <div className="text-gray-800 font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Gain Section */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">What You'll Gain</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Real-World Experience</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Work on projects that matter, from startup collaborations to internal initiatives that produce tangible outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-800 mb-4 font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Disciplinary Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Work alongside engineers, designers, business students, and more to solve complex problems from multiple angles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Skills</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build communication, project management, leadership, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-800 mb-4 font-bold">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build a portfolio of real projects that demonstrate your capabilities to employers and future collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Get Involved Section */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">How to Get Involved</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-900 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Apply to Join</h3>
                  <p className="text-foreground/70">
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
                  <h3 className="font-bold text-xl text-foreground mb-2">Attend an Info Session</h3>
                  <p className="text-foreground/70">
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
                  <h3 className="font-bold text-xl text-foreground mb-2">Propose a Project</h3>
                  <p className="text-foreground/70">
                    Members with an idea for a startup collaboration or internal initiative may submit a project proposal for consideration. Choose between Launch Teams or Innovation Teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-red-50 border border-red-100 rounded-lg text-center">
              <p className="text-foreground font-semibold mb-6 text-lg">Ready to get started?</p>
              <Button asChild>
                <Link href="/forms" className="bg-red-900 hover:bg-red-950 text-white font-bold px-10 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                  Join
                  <ArrowRight size={18} />
                </Link>
              </Button>
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
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Home</a></Link></li>
                <li><Link href="/about"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">About</a></Link></li>
                <li><Link href="/launch-teams"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Launch Teams</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Apply</a></Link></li>
                <li><Link href="/leadership"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Leadership</a></Link></li>
                <li><Link href="/partners"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Partners</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact"><a className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Contact</a></Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Instagram</a></li>
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
