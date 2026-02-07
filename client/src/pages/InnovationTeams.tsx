import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Lightbulb, Zap, Target, Users, CheckCircle } from "lucide-react";

export default function InnovationTeams() {
  const teams = [
    {
      id: 1,
      name: "Team Kubernetes",
      description: "Explore emerging technologies and build innovative solutions from scratch",
      members: 4,
      status: "Active",
      focus: "Technology Innovation",
      details: "Lead a team exploring cutting-edge technologies and building prototypes for new solutions"
    }
  ];

  return (
    <div>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-32 md:py-40">
          <div className="container">
            <h1 className="font-serif font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
              Innovation Teams
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Lead end-to-end projects designed to mirror real-world professional work and develop your leadership skills.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-white border-t border-border py-12 md:py-16">
          <div className="container">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/60 mb-6">On This Page</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#what-we-do" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">What We Do</a>
              <a href="#our-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">Our Teams</a>
              <a href="#key-experiences" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">Key Experiences</a>
              <a href="#who-should-apply" className="text-foreground/70 hover:text-red-900 transition-colors font-medium text-sm">Who Should Apply</a>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-10">
              What We Do
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                Innovation Teams tackle internally scoped projects designed to mirror real-world professional work. From problem definition through delivery, team members lead projects end-to-end, developing leadership, strategic thinking, and execution skills.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                These projects span product development, organizational initiatives, research, and strategic exploration. Teams operate with autonomy and accountability, making decisions and driving results in a supportive learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Our Teams */}
        <section id="our-teams" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-16">
              Our Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teams.map((team) => (
                <Card key={team.id} className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
                  <CardContent className="p-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-2xl text-foreground">{team.name}</h3>
                      <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-red-900 rounded-full">{team.status}</span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-6">{team.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-red-900" />
                        <span className="text-sm text-foreground/70">{team.members} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lightbulb size={16} className="text-red-900" />
                        <span className="text-sm text-foreground/70">{team.focus}</span>
                      </div>
                    </div>
                     <p className="text-sm text-foreground/70 mb-6">{team.details}</p>
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" target="_blank" className="inline-flex items-center gap-2 text-red-900 font-bold hover:gap-3 transition-all duration-200">
                      Apply Now
                      <ArrowRight size={18} />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section id="key-experiences" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-16">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">End-to-End Leadership</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Lead projects from conception through delivery, making strategic decisions and driving results with team support.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Strategic Thinking</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Develop the ability to think strategically, identify opportunities, and execute on complex initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Team Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build and lead high-performing teams, developing communication and collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border border-border hover:border-border transition-all duration-300 bg-white">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-red-900 mb-4 font-bold">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Innovation & Creativity</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Explore new ideas, experiment with approaches, and develop innovative solutions to real challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-16">
              Application Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-red-900 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Submit Your Application</h3>
                  <p className="text-foreground/70">Complete the Innovation Team application form with your background, leadership experience, and project interests.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-red-900 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Leadership Interview</h3>
                  <p className="text-foreground/70">Meet with our leadership team to discuss your vision, leadership style, and project ideas.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-red-900 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Project Assignment & Launch</h3>
                  <p className="text-foreground/70">Get assigned your project scope and begin leading your team to deliver real impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section id="who-should-apply" className="bg-white border-t border-border py-32 md:py-40">
          <div className="container">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-10">
              Who Should Apply
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-900 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Students interested in leadership and project ownership</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-900 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Those seeking to develop strategic thinking and execution skills</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-900 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Individuals passionate about innovation and problem-solving</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-red-900 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/70">Anyone from any background ready to lead and make an impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-100 border-t border-border py-32 md:py-40">
          <div className="container text-center">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6">Ready to Lead an Innovation Team?</h2>
            <p className="text-lg text-foreground/70 mb-10">
              Apply today and take ownership of a project that matters.
            </p>
            <Button asChild>
              <Link href="/forms" className="bg-red-900 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                Join
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">Launch Labs</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Northeastern University's hub for real-world project work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">About</Link></li>
                <li><Link href="/launch-teams" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Launch Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/forms" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Apply</Link></li>
                <li><Link href="/leadership" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Leadership</Link></li>
                <li><Link href="/partners" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Contact</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-red-900 transition-colors font-medium">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2025 Northeastern Launch Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
