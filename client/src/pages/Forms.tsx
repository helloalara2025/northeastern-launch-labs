import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Users, Lightbulb, Briefcase, Award } from "lucide-react";

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
        <section className="bg-white py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Apply to join our community, propose a project, or collaborate with us. Choose the form that fits your interest.
            </p>
          </div>
        </section>

        {/* Forms Grid */}
        <section className="bg-foreground/5 border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {forms.map((form, index) => {
                const Icon = form.icon;
                return (
                  <Card key={index} className="border border-foreground/10 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-800 mb-4">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{form.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{form.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider">{form.status}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border border-foreground/20 text-foreground hover:bg-foreground/5"
                          disabled
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Open
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Info Section */}
            <div className="bg-white border border-foreground/10 rounded-lg p-8">
              <h2 className="font-bold text-2xl text-foreground mb-4">Application Timeline</h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  <strong className="text-foreground">Fall Semester:</strong> Launch Team and Innovation Team applications open. Leadership applications accepted on a rolling basis.
                </p>
                <p>
                  <strong className="text-foreground">Spring Semester:</strong> Mid-year applications for new projects and teams. Project proposals accepted throughout the semester.
                </p>
                <p>
                  <strong className="text-foreground">Summer:</strong> Planning and onboarding for new teams. Startup collaboration proposals welcome year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border-t border-foreground/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-bold text-3xl text-foreground mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Do I need prior experience to apply?</h3>
                <p className="text-foreground/70">
                  No! Launch Labs welcomes students from all backgrounds and experience levels. We value curiosity, willingness to learn, and commitment to the team.
                </p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-lg text-foreground mb-2">What's the time commitment?</h3>
                <p className="text-foreground/70">
                  Members are expected to contribute 3–5 hours per week on average. Leadership roles may require additional time. We work to accommodate your schedule.
                </p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Can I be part of both Launch and Innovation Teams?</h3>
                <p className="text-foreground/70">
                  It depends on your schedule and capacity. We encourage you to discuss this with our leadership team during the application process.
                </p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-lg text-foreground mb-2">What if I have an idea for a project?</h3>
                <p className="text-foreground/70">
                  Great! You can submit a project proposal through our Project Proposal form. We review ideas on a rolling basis and work with you to develop them.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">How do startups get involved?</h3>
                <p className="text-foreground/70">
                  Startups can fill out our Startup Collaboration Form to tell us about their project. We'll review your needs and match you with the right team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-50 border-t border-red-200 py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Forms are coming soon. In the meantime, reach out to us with any questions about how to get involved.
            </p>
            <a href="/contact">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-bold px-8 h-12 rounded-lg">
                Contact Us
              </Button>
            </a>
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
