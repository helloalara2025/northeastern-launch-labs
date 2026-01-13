import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Forms() {
  const forms = [
    {
      title: "Launch Team Application",
      description: "Apply to join a Launch Team and work directly with early-stage startups on real-world projects.",
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Innovation Team Application",
      description: "Apply to join an Innovation Team or propose your own end-to-end project idea.",
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Leadership Application",
      description: "Interested in leading Launch Labs? Apply for a leadership position on our team.",
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Startup Collaboration Form",
      description: "Are you a founder? Tell us about your startup and how we can collaborate.",
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "Project Proposal",
      description: "Have an idea for an Innovation Team project? Submit your proposal here.",
      status: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Apply to join our community or propose a project. Forms are coming soon—check back for updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {forms.map((form, index) => (
              <Card key={index} className="border border-foreground/10 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
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
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="font-bold text-2xl text-foreground mb-4">Forms Coming Soon</h2>
            <p className="text-foreground/70 mb-6">
              We're preparing our application forms and project submission system. In the meantime, reach out to us with any questions about how to get involved.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
