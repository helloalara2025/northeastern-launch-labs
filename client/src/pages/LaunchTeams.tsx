import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, TrendingUp, Users, Code, CheckCircle } from "lucide-react";

export default function LaunchTeams() {
  const teams = [
    {
      id: 1,
      name: "Team Alpha",
      description: "Building innovative solutions for early-stage startups",
      members: 4,
      status: "Active",
      focus: "Product Development"
    },
    {
      id: 2,
      name: "Team Beta",
      description: "Scaling startup operations and infrastructure",
      members: 5,
      status: "Active",
      focus: "Implementation"
    },
    {
      id: 3,
      name: "Team Gamma",
      description: "Data-driven insights and analytics for startups",
      members: 3,
      status: "Active",
      focus: "Data & Analytics"
    }
  ];

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              Launch Teams
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Partner directly with early-stage startups to design, build, and deliver real-world solutions.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-12 md:py-16">
          <div className="container max-w-4xl">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/60 mb-6">On This Page</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#what-we-do" className="text-foreground/70 hover:text-red-800 transition-colors font-medium text-sm">What We Do</a>
              <a href="#our-teams" className="text-foreground/70 hover:text-red-800 transition-colors font-medium text-sm">Our Teams</a>
              <a href="#key-experiences" className="text-foreground/70 hover:text-red-800 transition-colors font-medium text-sm">Key Experiences</a>
              <a href="#who-should-apply" className="text-foreground/70 hover:text-red-800 transition-colors font-medium text-sm">Who Should Apply</a>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              What We Do
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                Launch Teams work closely with founders and stakeholders on development-focused projects. Members contribute to product development, software or data implementation, prototyping, and iterative testing, alongside strategy and research.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Teams operate with defined scopes, timelines, and deliverables, providing hands-on experience contributing to live products and systems that directly impact real companies.
              </p>
            </div>
          </div>
        </section>

        {/* Our Teams */}
        <section id="our-teams" className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Our Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teams.map((team) => (
                <Card key={team.id} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-2xl text-foreground">{team.name}</h3>
                      <span className="text-xs font-bold px-3 py-1 bg-red-50 text-red-900 rounded-full">{team.status}</span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-6">{team.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-red-900" />
                        <span className="text-sm text-foreground/70">{team.members} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-red-900" />
                        <span className="text-sm text-foreground/70">{team.focus}</span>
                      </div>
                    </div>
                    <Link href="/forms" className="inline-flex items-center gap-2 text-red-900 font-bold hover:gap-3 transition-all duration-200">
                      Join
                      <ArrowRight size={18} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section id="key-experiences" className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Startup Operations</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Experience firsthand how early-stage companies operate, make decisions, and iterate on their products.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-4 font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Your work directly contributes to products and systems that serve real users and customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Development</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build communication, project management, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Technical Growth</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Develop technical skills across design, engineering, data, and product management disciplines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section id="who-should-apply" className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              Who Should Apply
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Students from any discipline or background interested in startup environments</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Those seeking hands-on experience with real-world product development</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Individuals who want to develop professional skills in a collaborative environment</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Anyone passionate about contributing to innovative solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-100 border-t border-gray-300 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Ready to Join a Launch Team?</h2>
            <p className="text-lg text-foreground/70 mb-10">
              Apply today and start working on real-world projects with early-stage startups.
            </p>
            <Link href="/forms">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
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
                <li><Link href="/about" className="text-foreground/70 hover:text-red-800 transition-colors font-medium">About</Link></li>
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
