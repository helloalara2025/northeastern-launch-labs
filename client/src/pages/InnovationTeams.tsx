import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Target, Lightbulb, Users, Zap, CheckCircle } from "lucide-react";

export default function InnovationTeams() {
  return (
    <div>
      <Navigation />
      <main className="pt-24">
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

        {/* Table of Contents */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-12 md:py-16">
          <div className="container max-w-4xl">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/60 mb-6">On This Page</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#what-we-do" className="text-foreground/70 hover:text-amber-700 transition-colors font-medium text-sm">What We Do</a>
              <a href="#key-experiences" className="text-foreground/70 hover:text-amber-700 transition-colors font-medium text-sm">Key Experiences</a>
              <a href="#who-should-apply" className="text-foreground/70 hover:text-amber-700 transition-colors font-medium text-sm">Who Should Apply</a>
              <a href="#current-partners" className="text-foreground/70 hover:text-amber-700 transition-colors font-medium text-sm">Current Partners</a>
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
                Innovation Teams focus on internally scoped, end-to-end projects designed to mirror real-world professional work. Members take projects from problem definition through execution, including research, planning, implementation, iteration, and final presentation.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                These projects emphasize skill-building, cross-functional collaboration, and ownership, resulting in portfolio-ready work that reflects practical experience in product development, consulting, and applied problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Key Experiences */}
        <section id="key-experiences" className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Problem Definition</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Learn to scope projects, define problems, and establish clear objectives from the ground up.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">End-to-End Ownership</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Own your project from conception through delivery, making decisions and driving outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Team Leadership</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Lead cross-functional teams and develop leadership skills in a supportive environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Execution</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Execute projects with real timelines, deliverables, and professional standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section id="who-should-apply" className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">
              Who Should Apply?
            </h2>
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-10">
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Students eager to lead end-to-end projects from conception to delivery</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Those interested in developing leadership and project management skills</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Anyone with an idea for an internal initiative or innovation project</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Students from any discipline—engineers, designers, business students, and more</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Projects */}
        <section id="current-partners" className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Current Innovation Projects
            </h2>
            <p className="text-foreground/70 text-lg mb-10">
              We're working on innovative projects that push boundaries and create real impact. Project details and team information coming soon.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <Card key={idx} className="border border-foreground/10 shadow-none h-32 flex items-center justify-center">
                  <CardContent className="text-center">
                    <p className="text-foreground/40 font-medium">Project Details</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-50 border-t border-amber-200 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Interested in Joining an Innovation Team?</h2>
            <p className="text-lg text-foreground/70 mb-10">
              Lead an end-to-end project and develop your leadership skills.
            </p>
            <Link href="/forms">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto">
                Apply Now
                <ArrowRight size={18} />
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
