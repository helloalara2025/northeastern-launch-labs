import { Button } from "@/components/ui/button";
import { UserPlus, Lightbulb, Handshake, Users } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Member",
      icon: <UserPlus className="w-5 h-5" />,
      description: "Join either a Launch Team or Innovation Team. Open to all Northeastern students.",
      commitment: "3–5 hours/week",
    },
    {
      title: "Propose a Project",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Have an idea? Submit a project proposal for an Innovation Team.",
      commitment: null,
    },
    {
      title: "Startup Partnership",
      icon: <Handshake className="w-5 h-5" />,
      description: "Are you a founder? Partner with talented student teams.",
      commitment: null,
    },
    {
      title: "Leadership",
      icon: <Users className="w-5 h-5" />,
      description: "Shape the direction of Launch Labs and mentor peers.",
      commitment: "5–8 hours/week",
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Get Involved
          </h2>
          <p className="text-lg text-foreground/70 font-regular">
            Whether you're a student, founder, or aspiring leader, there's a place for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((item, index) => (
            <div key={index} className="bg-white border border-foreground/5 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-foreground/10 transition-all">
              <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 font-regular">
                {item.description}
              </p>
              
              {item.commitment && (
                <div className="text-xs text-foreground/60 font-medium mb-4">
                  {item.commitment}
                </div>
              )}
              
              <a href="/forms" className="block">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-9 rounded text-sm"
                >
                  Apply
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
