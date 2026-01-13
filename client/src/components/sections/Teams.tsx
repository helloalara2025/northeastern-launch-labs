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
            {/* Enhanced Visual with yellow accents */}
            <div className="h-56 overflow-hidden bg-gradient-to-br from-primary/8 to-transparent flex items-center justify-center relative p-8">
              <svg className="w-full h-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <g className="text-primary">
                  {/* Stacked cards with yellow accents */}
                  <rect x="20" y="120" width="260" height="60" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
                  <circle cx="45" cy="145" r="3.5" fill="currentColor" fillOpacity="0.7" />
                  <line x1="55" y1="145" x2="140" y2="145" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
                  <line x1="55" y1="160" x2="200" y2="160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" />
                  
                  <rect x="30" y="70" width="240" height="55" rx="8" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.42" />
                  <circle cx="55" cy="92" r="3.5" fill="currentColor" fillOpacity="0.8" />
                  <line x1="65" y1="92" x2="150" y2="92" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
                  <line x1="65" y1="105" x2="210" y2="105" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  
                  <rect x="40" y="20" width="220" height="55" rx="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
                  <circle cx="65" cy="42" r="3.5" fill="currentColor" fillOpacity="0.9" />
                  <line x1="75" y1="42" x2="160" y2="42" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
                  <line x1="75" y1="55" x2="220" y2="55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
                </g>
              </svg>
            </div>
            
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
            {/* Enhanced Visual with yellow accents */}
            <div className="h-56 overflow-hidden bg-gradient-to-br from-primary/8 to-transparent flex items-center justify-center relative p-8">
              <svg className="w-full h-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <g className="text-primary">
                  {/* Grid-based design */}
                  <rect x="20" y="20" width="70" height="50" rx="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.42" />
                  <rect x="115" y="20" width="70" height="50" rx="6" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.38" />
                  <rect x="210" y="20" width="70" height="50" rx="6" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.32" />
                  
                  <rect x="20" y="85" width="70" height="50" rx="6" fill="currentColor" fillOpacity="0.11" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
                  <rect x="115" y="85" width="70" height="50" rx="6" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.42" />
                  <rect x="210" y="85" width="70" height="50" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.34" />
                  
                  {/* Accent dots */}
                  <circle cx="35" cy="35" r="2.5" fill="currentColor" fillOpacity="0.75" />
                  <circle cx="130" cy="35" r="2.5" fill="currentColor" fillOpacity="0.65" />
                  <circle cx="225" cy="35" r="2.5" fill="currentColor" fillOpacity="0.55" />
                  <circle cx="35" cy="100" r="2.5" fill="currentColor" fillOpacity="0.55" />
                  <circle cx="130" cy="100" r="2.5" fill="currentColor" fillOpacity="0.75" />
                  <circle cx="225" cy="100" r="2.5" fill="currentColor" fillOpacity="0.6" />
                </g>
              </svg>
            </div>
            
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
