import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { 
      title: "Become a Member", 
      desc: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level. 3–5 hours/week.",
      href: "#contact",
      buttonText: "Apply to Join",
      color: "bg-blue-50 border-blue-200" 
    },
    { 
      title: "Propose a Project", 
      desc: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      href: "#contact",
      buttonText: "Propose a Project",
      color: "bg-purple-50 border-purple-200" 
    },
    { 
      title: "Startup Partnership", 
      desc: "Are you a founder? Partner with talented student teams to build your product.",
      href: "#contact",
      buttonText: "Partner With Us",
      color: "bg-green-50 border-green-200" 
    },
    { 
      title: "Leadership Opportunities", 
      desc: "Shape the direction of Launch Labs and mentor peers through leadership roles. 5–8 hours/week.",
      href: "#contact",
      buttonText: "Apply for Leadership",
      color: "bg-orange-50 border-orange-200" 
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50 border-t border-border">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight">
          Join Launch Labs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href}>
              <div className={`${item.color} border-2 rounded-lg p-6 transition-all duration-300 h-full flex flex-col`}>
                <h3 className="font-sans font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-regular flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-primary font-bold text-sm">
                  {item.buttonText}
                  <ArrowRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
