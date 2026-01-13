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
    <section id="get-involved" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-10 leading-tight">
          Get Involved
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href}>
              <div className="bg-card border border-border/50 rounded-lg p-5 hover:border-primary/60 transition-all duration-300 h-full">
                <h3 className="font-sans font-bold text-base mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-3 font-regular">{item.desc}</p>
                <div className="flex items-center gap-1 text-primary font-bold text-xs">
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
