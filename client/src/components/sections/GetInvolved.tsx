import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { 
      title: "Become a Member", 
      desc: "Join either a Launch Team or Innovation Team. 3–5 hours/week.",
      href: "#contact",
      buttonText: "Apply to Join"
    },
    { 
      title: "Propose a Project", 
      desc: "Have an idea? Submit a project proposal for an Innovation Team.",
      href: "#contact",
      buttonText: "Propose a Project"
    },
    { 
      title: "Startup Partnership", 
      desc: "Are you a founder? Partner with talented student teams.",
      href: "#contact",
      buttonText: "Partner With Us"
    },
    { 
      title: "Leadership", 
      desc: "Shape the direction of Launch Labs. 5–8 hours/week.",
      href: "#contact",
      buttonText: "Apply for Leadership"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <h2 className="font-sans font-semibold text-5xl lg:text-6xl text-foreground mb-16 leading-tight">
          Join Launch Labs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href}>
              <div className="bg-white border-2 border-red-200 rounded-lg p-8 transition-all duration-300 h-full flex flex-col hover:shadow-lg cursor-pointer hover:border-red-600">
                <h3 className="font-sans font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-medium flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-red-600 font-semibold text-sm">
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
