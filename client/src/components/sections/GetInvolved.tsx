import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { title: "Apply to Join", desc: "Ready to get started?", emoji: "📝", href: "#contact" },
    { title: "Propose a Project", desc: "Have an idea?", emoji: "💭", href: "#contact" },
    { title: "Partner With Us", desc: "Founders: let's collaborate.", emoji: "🤖", href: "#contact" },
    { title: "Leadership", desc: "Shape the future.", emoji: "👥", href: "#contact" }
  ];

  return (
    <section id="get-involved" className="py-16 bg-white border-t border-foreground/5">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight tracking-tight">
          Get Involved
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href} className="group">
              <div className="bg-white border-2 border-primary/15 rounded-lg p-5 hover:border-primary/40 transition-all duration-300 flex flex-col h-full">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="font-sans font-bold text-base mb-1 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 font-regular flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-primary font-bold text-xs group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
