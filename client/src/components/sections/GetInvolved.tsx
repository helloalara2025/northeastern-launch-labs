import { Button } from "@/components/ui/button";
import { UserPlus, Lightbulb, Handshake, Users } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Member",
      icon: <UserPlus className="w-8 h-8" />,
      description: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level.",
      commitment: "3-5 hours/week",
      buttonText: "Apply Now",
      borderColor: "border-primary",
      bgColor: "bg-primary/5",
      accentColor: "text-primary"
    },
    {
      title: "Propose a Project",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      commitment: null,
      buttonText: "Propose a Project",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/5",
      accentColor: "text-yellow-600"
    },
    {
      title: "Startup Partnership",
      icon: <Handshake className="w-8 h-8" />,
      description: "Are you a founder? Partner with talented student teams to build your product.",
      commitment: null,
      buttonText: "Partner With Us",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/5",
      accentColor: "text-orange-600"
    },
    {
      title: "Leadership Opportunities",
      icon: <Users className="w-8 h-8" />,
      description: "Shape the direction of Launch Labs and mentor peers through leadership roles.",
      commitment: "5-8 hours/week",
      buttonText: "Apply for Leadership",
      borderColor: "border-blue-600",
      bgColor: "bg-blue-600/5",
      accentColor: "text-blue-600"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6 border-2 border-primary/20">
            Join Us
          </div>
          <h2 className="font-sans font-black text-5xl md:text-6xl text-foreground mb-4 leading-tight">
            Join Launch Labs
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Whether you're a student, founder, or aspiring leader, there's a place for you in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div key={index} className={`group relative bg-white border-4 ${item.borderColor} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-current" style={{backgroundImage: `linear-gradient(to right, ${item.accentColor.replace('text-', '')})`}}></div>
              
              <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center ${item.accentColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="font-sans font-black text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-foreground/70 text-sm font-medium leading-relaxed mb-6">
                {item.description}
              </p>
              
              {item.commitment && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-foreground/5 text-foreground/70 mb-6">
                  {item.commitment}
                </div>
              )}
              
              <Button 
                className={`w-full font-bold h-11 rounded-lg transition-all ${
                  item.borderColor === 'border-primary' 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/20'
                }`}
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
