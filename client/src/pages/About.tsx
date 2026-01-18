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

        {/* Our Foundation */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">Our Foundation</h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                Northeastern Launch Labs was founded on a simple belief: students learn best by doing. We created a space where Northeastern students can work on real-world projects that matter—whether that's building products for early-stage startups or leading end-to-end initiatives that solve meaningful problems.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We bring together students across disciplines—engineers, designers, business students, and more—to collaborate on projects that bridge the gap between classroom learning and professional practice. Our members gain hands-on experience, develop leadership skills, and build portfolios that demonstrate their capabilities to employers and future collaborators.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-10">Our Story</h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                What started as a vision to create meaningful opportunities for Northeastern students has grown into a thriving community of innovators, builders, and leaders. We've worked with dozens of startups, launched internal projects that have made real impact, and helped hundreds of students develop the skills they need to succeed in their careers.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Every project, every team, and every member contributes to our mission: to empower Northeastern students to take ownership of their learning and make real impact on the world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                  <p className="text-foreground/70">
                    We focus on projects that create tangible value for real users and customers. Our work matters.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Cross-Disciplinary Collaboration</h3>
                  <p className="text-foreground/70">
                    We believe the best solutions come from diverse perspectives. We bring together students from all backgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Ownership & Accountability</h3>
                  <p className="text-foreground/70">
                    Our members take ownership of their projects and drive outcomes. We hold ourselves to professional standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Continuous Learning</h3>
                  <p className="text-foreground/70">
                    We embrace challenges as opportunities to grow. Every project teaches us something new.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-50 border-t border-red-200 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Ready to Join Us?</h2>
            <p className="text-lg text-foreground/70 mb-10">
              Become part of the Launch Labs community and start making real impact.
            </p>
            <Link href="/forms">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto">
                Express Interest
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
                <li><Link href="/launch-teams"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Launch Teams</a></Link></li>
                <li><Link href="/innovation-teams"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Innovation Teams</a></Link></li>
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
