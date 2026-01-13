import { Button } from "@/components/ui/button";
import { UserPlus, Lightbulb, Handshake, Users } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Member",
      icon: <UserPlus className="w-6 h-6" />,
      description: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level.",
      commitment: "3-5 hours/week",
      buttonText: "Apply Now",
    },
    {
      title: "Propose a Project",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      commitment: null,
      buttonText: "Propose a Project",
    },
    {
      title: "Startup Partnership",
      icon: <Handshake className="w-6 h-6" />,
      description: "Are you a founder? Partner with talented student teams to build your product.",
      commitment: null,
      buttonText: "Partner With Us",
    },
    {
      title: "Leadership Opportunities",
      icon: <Users className="w-6 h-6" />,
      description: "Shape the direction of Launch Labs and mentor peers through leadership roles.",
      commitment: "5-8 hours/week",
      buttonText: "Apply for Leadership",
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white border-t border-foreground/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Whether you're a student, founder, or aspiring leader, there's a place for you in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div key={index} className="bg-white border border-foreground/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              
              <h3 className="font-sans font-bold text-lg mb-2 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              
              {item.commitment && (
                <div className="text-xs text-foreground/60 font-medium mb-4">
                  {item.commitment}
                </div>
              )}
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10 rounded text-sm"
              >
                {item.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
