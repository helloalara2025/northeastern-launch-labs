import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Apply to Join",
      description: "Ready to get started? Apply for Launch Teams or Innovation Teams.",
      emoji: "📝",
      href: "#contact"
    },
    {
      title: "Propose a Project",
      description: "Have an idea? Submit a project proposal for an Innovation Team.",
      emoji: "💭",
      href: "#contact"
    },
    {
      title: "Partner With Us",
      description: "Founders: connect with talented student teams to build your product.",
      emoji: "🤖",
      href: "#contact"
    },
    {
      title: "Leadership",
      description: "Shape the future of Launch Labs. Apply for leadership roles.",
      emoji: "👥",
      href: "#contact"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-bold text-5xl lg:text-6xl text-foreground mb-8 leading-tight tracking-tight">
            Get Involved
          </h2>
          <p className="text-lg text-foreground/65 leading-relaxed font-regular">
            Multiple ways to participate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <a key={index} href={item.href} className="group">
              <div className="bg-white border-2 border-primary/15 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col h-full">
                <div className="text-3xl mb-4">{item.emoji}</div>
                
                <h3 className="font-sans font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed mb-6 font-regular flex-grow">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
