import { Button } from "@/components/ui/button";

export default function Teams() {
  return (
    <section id="teams" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Two Ways to Get Involved
          </h2>
          <p className="text-lg text-foreground/70 font-regular">
            Choose the path that fits your interests and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-white border border-foreground/5 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            {/* Visual Header */}
            <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center relative">
              {/* Rocket visual with motion */}
              <svg className="w-32 h-32" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
                <g className="text-primary">
                  {/* Rocket body */}
                  <rect x="45" y="20" width="30" height="80" rx="4" fill="currentColor" opacity="0.8" />
                  {/* Rocket nose */}
                  <path d="M 45 20 L 60 0 L 75 20 Z" fill="currentColor" opacity="0.9" />
                  {/* Window */}
                  <circle cx="60" cy="35" r="6" fill="white" opacity="0.6" />
                  {/* Left fin */}
                  <path d="M 45 80 L 30 100 L 45 95 Z" fill="currentColor" opacity="0.7" />
                  {/* Right fin */}
                  <path d="M 75 80 L 90 100 L 75 95 Z" fill="currentColor" opacity="0.7" />
                  {/* Flame */}
                  <path d="M 50 100 Q 45 120 50 140 Q 60 125 60 140 Q 70 125 70 140 Q 75 120 70 100" fill="currentColor" opacity="0.5" />
                </g>
                {/* Motion lines */}
                <g stroke="currentColor" strokeWidth="1.5" opacity="0.3" className="text-primary">
                  <line x1="20" y1="50" x2="35" y2="50" />
                  <line x1="15" y1="70" x2="30" y2="70" />
                  <line x1="20" y1="90" x2="35" y2="90" />
                </g>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-11 rounded-lg text-sm transition-all duration-200">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Innovation Teams */}
          <div className="bg-white border border-foreground/5 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            {/* Visual Header */}
            <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center relative">
              {/* Lightbulb visual with idea concept */}
              <svg className="w-32 h-32" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
                <g className="text-primary">
                  {/* Bulb */}
                  <circle cx="60" cy="50" r="28" fill="currentColor" opacity="0.8" />
                  {/* Filament */}
                  <path d="M 50 40 Q 55 35 60 40 Q 65 35 70 40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                  {/* Base */}
                  <rect x="50" y="78" width="20" height="12" rx="2" fill="currentColor" opacity="0.7" />
                  {/* Socket lines */}
                  <line x1="45" y1="90" x2="75" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  <line x1="45" y1="100" x2="75" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  {/* Glow effect */}
                  <circle cx="60" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                </g>
                {/* Spark elements */}
                <g className="text-primary" opacity="0.4">
                  <circle cx="95" cy="35" r="3" fill="currentColor" />
                  <circle cx="25" cy="35" r="3" fill="currentColor" />
                  <circle cx="80" cy="20" r="2" fill="currentColor" />
                  <circle cx="40" cy="20" r="2" fill="currentColor" />
                </g>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-11 rounded-lg text-sm transition-all duration-200">
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
