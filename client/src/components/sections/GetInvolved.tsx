import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { 
      title: "Become a Member", 
      desc: "Join either a Launch Team or Innovation Team. Open to all Northeastern students regardless of major or experience level. 3–5 hours/week.",
      href: "#contact",
      buttonText: "Apply to Join",
      color: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      accent: "bg-orange-500"
    },
    { 
      title: "Propose a Project", 
      desc: "Have an idea? Submit a project proposal for an Innovation Team to bring it to life.",
      href: "#contact",
      buttonText: "Propose a Project",
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      accent: "bg-blue-600"
    },
    { 
      title: "Startup Partnership", 
      desc: "Are you a founder? Partner with talented student teams to build your product.",
      href: "#contact",
      buttonText: "Partner With Us",
      color: "from-teal-50 to-teal-100",
      border: "border-teal-200",
      accent: "bg-teal-600"
    },
    { 
      title: "Leadership Opportunities", 
      desc: "Shape the direction of Launch Labs and mentor peers through leadership roles. 5–8 hours/week.",
      href: "#contact",
      buttonText: "Apply for Leadership",
      color: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      accent: "bg-purple-600"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-border">
      <div className="container">
        <h2 className="font-sans font-black text-5xl lg:text-6xl text-foreground mb-16 leading-tight">
          Join Launch Labs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href}>
              <div className={`bg-gradient-to-br ${item.color} border-2 ${item.border} rounded-2xl p-8 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:-translate-y-1`}>
                <div className={`w-3 h-3 ${item.accent} rounded-full mb-4`}></div>
                <h3 className="font-sans font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-medium flex-grow">{item.desc}</p>
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
