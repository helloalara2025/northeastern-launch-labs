import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-20 bg-gray-50 border-t border-foreground/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Two Ways to Get Involved
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the path that fits your interests and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-white border border-foreground/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden bg-foreground/5">
              <img 
                src="/images/student-org.jpg" 
                alt="Launch Teams" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h3 className="font-sans font-bold text-2xl mb-3 text-foreground">
                Launch Teams
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-foreground/10">
                <div className="flex items-start gap-3">
                  <div className="text-primary font-bold mt-0.5">•</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Startup Operations</div>
                    <div className="text-xs text-foreground/60">Experience how early-stage companies work</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary font-bold mt-0.5">•</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Professional Development</div>
                    <div className="text-xs text-foreground/60">Build communication and project management skills</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary font-bold mt-0.5">•</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Technical Growth</div>
                    <div className="text-xs text-foreground/60">Apply skills in real production environments</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded">
                Learn More
              </Button>
            </div>
          </div>

          {/* Innovation Teams */}
          <div className="bg-white border border-foreground/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden bg-foreground/5">
              <img 
                src="/images/teamwork.webp" 
                alt="Innovation Teams" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h3 className="font-sans font-bold text-2xl mb-3 text-foreground">
                Innovation Teams
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-foreground/10">
                <div className="flex items-start gap-3">
                  <div className="text-primary font-bold mt-0.5">•</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Product Thinking</div>
                    <div className="text-xs text-foreground/60">Learn to identify problems worth solving</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary font-bold mt-0.5">•</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Collaboration</div>
                    <div className="text-xs text-foreground/60">Work across engineering, design, and business</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary font-bold mt-0.5">•</div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Ownership</div>
                    <div className="text-xs text-foreground/60">Take full responsibility from start to finish</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
