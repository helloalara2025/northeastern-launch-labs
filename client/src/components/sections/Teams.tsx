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
            {/* Original Visual - Startup Growth Arc */}
            <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center relative">
              <svg className="w-40 h-32" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                {/* Growth curve representing startup trajectory */}
                <path
                  d="M 20 100 Q 40 80 60 60 T 100 20 T 140 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary/60"
                />
                
                {/* Milestone dots on curve */}
                <circle cx="20" cy="100" r="4" fill="currentColor" className="text-primary/40" />
                <circle cx="60" cy="60" r="5" fill="currentColor" className="text-primary/70" />
                <circle cx="100" cy="20" r="4" fill="currentColor" className="text-primary/50" />
                <circle cx="140" cy="10" r="6" fill="currentColor" className="text-primary" />
                
                {/* Supporting grid lines */}
                <g stroke="currentColor" strokeWidth="0.5" className="text-primary/15">
                  <line x1="10" y1="110" x2="150" y2="110" />
                  <line x1="10" y1="10" x2="10" y2="110" />
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
            {/* Original Visual - Idea to Execution Cycle */}
            <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center relative">
              <svg className="w-40 h-32" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                {/* Circular process flow */}
                <circle cx="80" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
                
                {/* Process stages around circle */}
                <g className="text-primary">
                  {/* Stage 1 - Idea (top) */}
                  <circle cx="80" cy="20" r="6" fill="currentColor" />
                  <text x="75" y="38" fontSize="9" fontWeight="600" className="text-primary/70" fill="currentColor">Idea</text>
                  
                  {/* Stage 2 - Build (right) */}
                  <circle cx="125" cy="60" r="6" fill="currentColor" opacity="0.7" />
                  <text x="118" y="78" fontSize="9" fontWeight="600" className="text-primary/70" fill="currentColor">Build</text>
                  
                  {/* Stage 3 - Test (bottom) */}
                  <circle cx="80" cy="100" r="6" fill="currentColor" opacity="0.5" />
                  <text x="70" y="115" fontSize="9" fontWeight="600" className="text-primary/70" fill="currentColor">Test</text>
                  
                  {/* Stage 4 - Launch (left) */}
                  <circle cx="35" cy="60" r="6" fill="currentColor" opacity="0.6" />
                  <text x="20" y="78" fontSize="9" fontWeight="600" className="text-primary/70" fill="currentColor">Launch</text>
                </g>
                
                {/* Flow arrows */}
                <g stroke="currentColor" strokeWidth="1.5" className="text-primary/30" fill="none">
                  <path d="M 80 26 L 115 50" />
                  <path d="M 119 66 L 90 94" />
                  <path d="M 74 94 L 41 66" />
                  <path d="M 41 54 L 74 26" />
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
