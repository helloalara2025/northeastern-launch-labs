import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function LaunchTeams() {
  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Launch Teams
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Partner directly with early-stage startups to design, build, and deliver real-world solutions.
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
              Launch Teams work closely with founders and stakeholders on development-focused projects. Members contribute to product development, software or data implementation, prototyping, and iterative testing, alongside strategy and research.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Teams operate with defined scopes, timelines, and deliverables, providing hands-on experience contributing to live products and systems that directly impact real companies.
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
                  <h3 className="font-bold text-lg text-foreground mb-3">Startup Operations</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Experience firsthand how early-stage companies operate, make decisions, and iterate on their products.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Your work directly contributes to products and systems that serve real users and customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Development</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Build communication, project management, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">Technical Growth</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Apply and expand your technical skills in production environments with real constraints.
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
                  <span className="text-red-800 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Students interested in working with real startups and founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-800 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Those looking to gain practical experience in product development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-800 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Anyone eager to explore entrepreneurship and startup culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-800 font-bold mt-1 flex-shrink-0">•</span>
                  <span>Students from any discipline—engineers, designers, business students, and more</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Startups */}
        <section className="bg-white border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-8">
              Current Startup Partners
            </h2>
            <p className="text-foreground/70 mb-8">
              Coming soon. Check back for information about our current startup partners and active Launch Teams.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-50 border-t border-red-200 py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Interested in Joining a Launch Team?</h2>
            <p className="text-foreground/70 mb-8">
              Work directly with startups and make real impact on products that matter.
            </p>
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
                <li><a href="/about" className="text-foreground/70 hover:text-red-800 transition-colors">About</a></li>
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
