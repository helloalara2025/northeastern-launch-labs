import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function InnovationTeams() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Innovation Teams
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Focus on internally scoped, end-to-end projects designed to mirror real-world professional work.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">
              What We Do
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
            </p>
          </div>
        </section>

        {/* Key Experiences */}
        <section className="bg-white border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-12">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">End-to-End Ownership</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Lead a project from conception through delivery, making key decisions and seeing your work through to completion.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Skill Development</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Build expertise in research, planning, implementation, and presentation in a supportive team environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Functional Collaboration</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Work with students from different disciplines to bring diverse perspectives and expertise to your project.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Create tangible deliverables and case studies that showcase your capabilities to employers and collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">
              Who Should Apply?
            </h2>
            <div className="bg-white border border-foreground/10 rounded-lg p-8">
              <ul className="space-y-4 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Students interested in leading projects and taking ownership of outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Those looking to build a portfolio of professional-quality work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Anyone eager to develop consulting, product, or problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Students from any discipline—engineers, designers, business students, and more</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="bg-white border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">
              Current Innovation Teams
            </h2>
            <p className="text-foreground/70 mb-8">
              Coming soon. Check back for information about our current Innovation Team projects and team members.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-50 border-t border-amber-200 py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Ready to Lead a Project?</h2>
            <p className="text-foreground/70 mb-8">
              Join an Innovation Team and create portfolio-ready work that demonstrates your capabilities.
            </p>
            <Link href="/forms">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 h-12 rounded-lg">
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
                <li><a href="/about" className="text-foreground/70 hover:text-red-800 transition-colors">About</a></li>
                <li><a href="/launch-teams" className="text-foreground/70 hover:text-red-800 transition-colors">Launch Teams</a></li>
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
