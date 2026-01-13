import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Lightbulb, Handshake, Users } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Member",
      icon: <UserPlus className="w-6 h-6" />,
      description: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level.",
      commitment: "3-5 hours/week",
      buttonText: "Apply to Join",
      primary: true
    },
    {
      title: "Propose a Project",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      commitment: null,
      buttonText: "Propose a Project",
      primary: false
    },
    {
      title: "Startup Partnership",
      icon: <Handshake className="w-6 h-6" />,
      description: "Are you a founder? Partner with talented student teams to build your product.",
      commitment: null,
      buttonText: "Partner With Us",
      primary: false
    },
    {
      title: "Leadership Opportunities",
      icon: <Users className="w-6 h-6" />,
      description: "Shape the direction of Launch Labs and mentor peers through leadership roles.",
      commitment: "5-8 hours/week",
      buttonText: "Apply for Leadership",
      primary: false
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            Join Launch Labs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student, founder, or aspiring leader, there's a place for you in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <Card key={index} className={`flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${item.primary ? 'border-primary/20 bg-primary/5' : 'bg-card'}`}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.primary ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}>
                  {item.icon}
                </div>
                <CardTitle className="font-sans font-bold text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.commitment && (
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {item.commitment}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  variant={item.primary ? "default" : "outline"} 
                  className={`w-full ${item.primary ? 'bg-primary hover:bg-primary/90' : ''}`}
                >
                  {item.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
