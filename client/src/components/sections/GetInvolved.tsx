import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    { title: "Apply to Join", desc: "Ready to get started?", href: "#contact", color: "bg-blue-50 border-blue-200 hover:shadow-md" },
    { title: "Propose a Project", desc: "Have an idea?", href: "#contact", color: "bg-purple-50 border-purple-200 hover:shadow-md" },
    { title: "Partner With Us", desc: "Founders: let's collaborate.", href: "#contact", color: "bg-green-50 border-green-200 hover:shadow-md" },
    { title: "Leadership", desc: "Shape the future.", href: "#contact", color: "bg-orange-50 border-orange-200 hover:shadow-md" }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50 border-t border-border">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight">
          Get Involved
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {opportunities.map((item, idx) => (
            <a key={idx} href={item.href}>
              <div className={`${item.color} border-2 rounded-lg p-6 transition-all duration-300 h-full flex flex-col`}>
                <h3 className="font-sans font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4 font-regular flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-primary font-bold text-sm">
                  Learn More
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
