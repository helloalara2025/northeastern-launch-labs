import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Users, Lightbulb, Briefcase, Award } from "lucide-react";
import { Link } from "wouter";

export default function Forms() {
  const forms = [
    {
      title: "Launch Team Application",
      description: "Apply to join a Launch Team and work directly with early-stage startups on real-world projects.",
      icon: Briefcase,
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Innovation Team Application",
      description: "Apply to join an Innovation Team and work on internally scoped, end-to-end projects.",
      icon: Lightbulb,
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Leadership Application",
      description: "Interested in leading Launch Labs? Apply for a leadership position on our team.",
      icon: Award,
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Startup Collaboration Form",
      description: "Are you a founder? Tell us about your startup and how we can collaborate.",
      icon: Users,
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Project Proposal",
      description: "Have an idea for an Innovation Team project? Submit your proposal here.",
      icon: FileText,
      status: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <div>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-24 md:py-32">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
              Applications & Forms
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Ready to join Launch Labs or collaborate with us? Find all the forms and applications you need here.
            </p>
          </div>
        </section>

        {/* Forms Grid */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Available Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {forms.map((form, index) => {
                const IconComponent = form.icon;
                return (
                  <Card key={index} className="border border-foreground/10 shadow-none hover:shadow-md transition-all group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3">{form.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                        {form.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-block text-xs font-bold text-red-800 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                          {form.status}
                        </span>
                        <a href={form.link} className="text-red-800 hover:text-red-900 transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border-t border-foreground/10 py-24 md:py-32">
          <div className="container max-w-4xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-14">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">When do applications open?</h3>
                  <p className="text-foreground/70">
                    Applications typically open at the beginning of each semester. Follow our social media and website for announcements.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Do I need prior experience to apply?</h3>
                  <p className="text-foreground/70">
                    No! We welcome students from all backgrounds and experience levels. We're looking for passion, commitment, and a willingness to learn.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">What's the time commitment?</h3>
                  <p className="text-foreground/70">
                    Members are expected to commit 3–5 hours per week to their team's work. This is designed to fit into your busy student schedule.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Can I apply for multiple teams?</h3>
                  <p className="text-foreground/70">
                    Yes! You can apply for both Launch Teams and Innovation Teams. However, we recommend focusing on one team to ensure you can fully commit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-foreground/10 shadow-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">How do I get in touch with questions?</h3>
                  <p className="text-foreground/70">
                    Have questions? Reach out to us at <a href="mailto:hello@launchlabs.neu.edu" className="text-red-800 hover:text-red-900 font-bold">hello@launchlabs.neu.edu</a> or visit our <Link href="/contact"><a className="text-red-800 hover:text-red-900 font-bold">contact page</a></Link>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-50 border-t border-red-200 py-24 md:py-32">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Ready to Join?</h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Fill out an application and become part of the Launch Labs community.
            </p>
            <Link href="/contact">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg shadow-md hover:shadow-lg">
                Have Questions? Contact Us
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
                <li><Link href="/leadership"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Leadership</a></Link></li>
                <li><Link href="/innovation-teams"><a className="text-foreground/70 hover:text-red-800 transition-colors font-medium">Innovation Teams</a></Link></li>
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
