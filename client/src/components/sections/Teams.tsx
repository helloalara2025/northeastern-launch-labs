import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Two Ways to Get Involved
          </h2>
          <p className="text-lg text-foreground/70 font-regular">
            Choose the path that fits your interests and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-white border border-foreground/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-foreground/10 transition-all">
            {/* Digital Visual */}
            <div className="h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Rocket icon visual */}
                <g className="text-primary/40">
                  <path d="M50 10 L60 40 L50 35 L40 40 Z" fill="currentColor" />
                  <rect x="45" y="40" width="10" height="35" fill="currentColor" />
                  <circle cx="50" cy="80" r="8" fill="currentColor" />
                  <path d="M40 60 L30 70 L35 65 Z" fill="currentColor" opacity="0.6" />
                  <path d="M60 60 L70 70 L65 65 Z" fill="currentColor" opacity="0.6" />
                </g>
                {/* Accent circles */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
              </svg>
            </div>
            
            <div className="p-8">
              <h3 className="font-sans font-semibold text-2xl mb-3 text-foreground">
                Launch Teams
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed font-regular text-base">
                Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-foreground/5">
                {[
                  { title: "Startup Operations", desc: "Experience how early-stage companies work" },
                  { title: "Professional Development", desc: "Build communication and project management skills" },
                  { title: "Technical Growth", desc: "Apply skills in real production environments" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-primary font-semibold mt-0.5">•</div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-foreground/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/launch-teams">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-10 rounded text-sm">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Innovation Teams */}
          <div className="bg-white border border-foreground/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-foreground/10 transition-all">
            {/* Digital Visual */}
            <div className="h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Lightbulb visual */}
                <g className="text-primary/40">
                  <circle cx="50" cy="35" r="15" fill="currentColor" />
                  <path d="M40 50 Q40 55 45 55 L55 55 Q60 55 60 50" fill="currentColor" />
                  <rect x="47" y="55" width="6" height="8" fill="currentColor" />
                  <line x1="45" y1="63" x2="55" y2="63" stroke="currentColor" strokeWidth="2" />
                  <line x1="45" y1="68" x2="55" y2="68" stroke="currentColor" strokeWidth="2" />
                </g>
                {/* Accent elements */}
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" />
                <path d="M35 35 Q50 20 65 35" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
              </svg>
            </div>
            
            <div className="p-8">
              <h3 className="font-sans font-semibold text-2xl mb-3 text-foreground">
                Innovation Teams
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed font-regular text-base">
                Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-foreground/5">
                {[
                  { title: "Product Thinking", desc: "Learn to identify problems worth solving" },
                  { title: "Collaboration", desc: "Work across engineering, design, and business" },
                  { title: "Ownership", desc: "Take full responsibility from start to finish" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-primary font-semibold mt-0.5">•</div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-foreground/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/innovation-teams">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-10 rounded text-sm">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
