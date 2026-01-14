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
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              Innovation Teams
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Focus on internally scoped, end-to-end projects designed to mirror real-world professional work.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              What We Do
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">End-to-End Ownership</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Lead a project from conception through delivery, making key decisions and seeing your work through to completion.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Skill Development</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build expertise in research, planning, implementation, and presentation in a supportive team environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Functional Collaboration</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Work with students from different disciplines to bring diverse perspectives and expertise to your project.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Create tangible deliverables and case studies that showcase your capabilities to employers and collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              Who Should Apply?
            </h2>
            <div className="bg-white border border-foreground/10 rounded-xl p-10">
              <ul className="space-y-5 text-foreground/70">
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0 text-xl">•</span>
                  <span className="text-lg">Students interested in leading projects and taking ownership of outcomes</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0 text-xl">•</span>
                  <span className="text-lg">Those looking to build a portfolio of professional-quality work</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0 text-xl">•</span>
                  <span className="text-lg">Anyone eager to develop consulting, product, or problem-solving skills</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 font-bold mt-1 flex-shrink-0 text-xl">•</span>
                  <span className="text-lg">Students from any discipline—engineers, designers, business students, and more</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              Current Innovation Teams
            </h2>
            <p className="text-foreground/70 text-lg">
              Coming soon. Check back for information about our current Innovation Team projects and team members.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-50 border-t border-amber-200 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Ready to Lead a Project?</h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Join an Innovation Team and create portfolio-ready work that demonstrates your capabilities.
            </p>
            <Link href="/forms">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 h-12 rounded-lg shadow-md hover:shadow-lg">
                Apply Now
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
