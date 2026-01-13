import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-semibold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Two Ways to Get Involved
          </h2>
          <p className="text-xl text-foreground/60 font-regular">
            Choose the path that fits your interests and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="group bg-white border border-foreground/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            {/* Minimal visual - just gradient background */}
            <div className="h-40 bg-gradient-to-br from-primary/15 to-primary/5"></div>
            
            <div className="p-8">
              <h3 className="font-sans font-semibold text-2xl mb-4 text-foreground">
                Launch Teams
              </h3>
              <p className="text-foreground/65 mb-8 leading-relaxed font-regular text-base">
                Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
              </p>
              
              <div className="space-y-3.5 mb-8 pb-8 border-b border-foreground/5">
                {[
                  { title: "Startup Operations", desc: "Experience how early-stage companies work" },
                  { title: "Professional Development", desc: "Build communication and project management skills" },
                  { title: "Technical Growth", desc: "Apply skills in real production environments" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-foreground/55 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/launch-teams">
                <Button className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold h-11 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          </div>

          {/* Innovation Teams */}
          <div className="group bg-white border border-foreground/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            {/* Minimal visual - just gradient background */}
            <div className="h-40 bg-gradient-to-br from-primary/12 to-primary/4"></div>
            
            <div className="p-8">
              <h3 className="font-sans font-semibold text-2xl mb-4 text-foreground">
                Innovation Teams
              </h3>
              <p className="text-foreground/65 mb-8 leading-relaxed font-regular text-base">
                Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
              </p>
              
              <div className="space-y-3.5 mb-8 pb-8 border-b border-foreground/5">
                {[
                  { title: "Product Thinking", desc: "Learn to identify problems worth solving" },
                  { title: "Collaboration", desc: "Work across engineering, design, and business" },
                  { title: "Ownership", desc: "Take full responsibility from start to finish" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-foreground/55 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/innovation-teams">
                <Button className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold h-11 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
