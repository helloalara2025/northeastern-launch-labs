import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { title: "Apply to Join", desc: "Ready to get started?", href: "#contact" },
    { title: "Propose a Project", desc: "Have an idea?", href: "#contact" },
    { title: "Partner With Us", desc: "Founders: let's collaborate.", href: "#contact" },
    { title: "Leadership", desc: "Shape the future.", href: "#contact" }
  ];

  return (
    <section id="get-involved" className="py-16 bg-background border-t border-border/50">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight tracking-tight">
          Get Involved
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href} className="group">
              <div className="bg-card border-2 border-border/50 rounded-lg p-5 hover:border-primary/60 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-primary/20">
                <div className="w-8 h-8 rounded-lg bg-primary/20 mb-3"></div>
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
