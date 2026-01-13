import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Member",
      description: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level.",
      commitment: "3–5 hours/week",
      buttonText: "Apply to Join",
      href: "/forms"
    },
    {
      title: "Propose a Project",
      description: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      commitment: null,
      buttonText: "Propose a Project",
      href: "/forms"
    },
    {
      title: "Startup Partnership",
      description: "Are you a founder? Partner with talented student teams to build your product.",
      commitment: null,
      buttonText: "Partner With Us",
      href: "/forms"
    },
    {
      title: "Leadership Opportunities",
      description: "Shape the direction of Launch Labs and mentor peers through leadership roles.",
      commitment: "5–8 hours/week",
      buttonText: "Apply for Leadership",
      href: "/forms"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-semibold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Join Launch Labs
          </h2>
          <p className="text-xl text-foreground/60 font-regular">
            Whether you're a student, founder, or aspiring leader, there's a place for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div key={index} className="bg-white border border-foreground/8 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col group">
              {/* Refined accent line with animation - yellow */}
              <div className="w-7 h-1 bg-primary rounded-full mb-5 group-hover:w-10 transition-all duration-300"></div>
              
              <h3 className="font-sans font-semibold text-base mb-3 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-5 font-regular flex-grow">
                {item.description}
              </p>
              
              {item.commitment && (
                <div className="text-xs text-foreground/50 font-semibold mb-5 uppercase tracking-wider">
                  {item.commitment}
                </div>
              )}
              
              <a href={item.href} className="block">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold h-10 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  {item.buttonText}
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
