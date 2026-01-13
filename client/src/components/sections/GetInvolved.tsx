import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { 
      title: "Become a Member", 
      desc: "Join either a Launch Team or Innovation Team. 3–5 hours/week.",
      href: "#contact",
      buttonText: "Apply to Join",
      bg: "from-blue-300 to-purple-400",
      border: "border-blue-500",
      emoji: "👥"
    },
    { 
      title: "Propose a Project", 
      desc: "Have an idea? Submit a project proposal for an Innovation Team.",
      href: "#contact",
      buttonText: "Propose a Project",
      bg: "from-yellow-300 to-orange-400",
      border: "border-yellow-500",
      emoji: "✨"
    },
    { 
      title: "Startup Partnership", 
      desc: "Are you a founder? Partner with talented student teams.",
      href: "#contact",
      buttonText: "Partner With Us",
      bg: "from-pink-300 to-red-400",
      border: "border-pink-500",
      emoji: "🤝"
    },
    { 
      title: "Leadership", 
      desc: "Shape the direction of Launch Labs. 5–8 hours/week.",
      href: "#contact",
      buttonText: "Apply for Leadership",
      bg: "from-green-300 to-teal-400",
      border: "border-green-500",
      emoji: "🎯"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t-4 border-purple-200">
      <div className="container">
        <h2 className="font-sans font-black text-5xl lg:text-6xl text-foreground mb-16 leading-tight">
          Join Launch Labs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href}>
              <div className={`bg-gradient-to-br ${item.bg} border-4 ${item.border} rounded-2xl p-8 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 cursor-pointer group`}>
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.emoji}</div>
                <h3 className="font-sans font-black text-xl text-white mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6 font-bold flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-white font-black text-sm">
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
