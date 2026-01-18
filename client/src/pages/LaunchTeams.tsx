import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Briefcase, TrendingUp, Users, Code, CheckCircle } from "lucide-react";

export default function LaunchTeams() {
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

        {/* What We Do */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
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

        {/* Key Experiences */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Key Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Startup Operations</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Experience firsthand how early-stage companies operate, make decisions, and iterate on their products.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Your work directly contributes to products and systems that serve real users and customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Professional Development</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Build communication, project management, and stakeholder collaboration skills in real contexts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">Technical Growth</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Apply and expand your technical skills in production environments with real constraints.
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
            <Card className="border border-foreground/10 shadow-none">
              <CardContent className="p-10">
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Students interested in working with real startups and founders</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Those looking to gain practical experience in product development</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Anyone eager to explore entrepreneurship and startup culture</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-red-800 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-lg">Students from any discipline—engineers, designers, business students, and more</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Startup Partners */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Current Startup Partners
            </h2>
            <p className="text-foreground/70 text-lg mb-10">
              We work with innovative startups across various industries. Partner logos and details coming soon.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <Card key={idx} className="border border-foreground/10 shadow-none h-32 flex items-center justify-center">
                  <CardContent className="text-center">
                    <p className="text-foreground/40 font-medium">Partner Logo</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-50 border-t border-red-200 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Interested in Joining a Launch Team?</h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Work directly with startups and make real impact on products that matter.
            </p>
            <Link href="/forms">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto">
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
