import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6 border-2 border-primary/20">
            Two Tracks
          </div>
          <h2 className="font-sans font-black text-5xl md:text-6xl text-foreground mb-4 leading-tight">
            Choose Your Path
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Whether you want to work with real startups or lead internal projects, we have the perfect opportunity for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Launch Teams Card - Red */}
          <div className="group relative bg-white border-4 border-primary rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-3 bg-primary"></div>
            
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden bg-primary/5">
              <img 
                src="/images/student-org.jpg" 
                alt="Launch Teams" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-primary text-white text-xs font-black uppercase tracking-wider">
                Startup Partner
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <h3 className="font-sans font-black text-4xl mb-4 text-foreground group-hover:text-primary transition-colors">
                Launch Teams
              </h3>
              <p className="text-lg text-foreground/70 mb-8 font-medium leading-relaxed">
                Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
              </p>
              
              <div className="space-y-4 mb-8 pb-8 border-b-2 border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-foreground">Startup Operations</div>
                    <div className="text-sm text-foreground/60">Experience how early-stage companies work</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-foreground">Professional Development</div>
                    <div className="text-sm text-foreground/60">Build communication and project management skills</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-foreground">Technical Growth</div>
                    <div className="text-sm text-foreground/60">Apply skills in real production environments</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-12 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Innovation Teams Card - Blue */}
          <div className="group relative bg-white border-4 border-blue-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-3 bg-blue-600"></div>
            
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden bg-blue-600/5">
              <img 
                src="/images/teamwork.webp" 
                alt="Innovation Teams" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider">
                Internal Project
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <h3 className="font-sans font-black text-4xl mb-4 text-foreground group-hover:text-blue-600 transition-colors">
                Innovation Teams
              </h3>
              <p className="text-lg text-foreground/70 mb-8 font-medium leading-relaxed">
                Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
              </p>
              
              <div className="space-y-4 mb-8 pb-8 border-b-2 border-blue-600/10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-600 font-bold text-sm mt-0.5 shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-foreground">Product Thinking</div>
                    <div className="text-sm text-foreground/60">Learn to identify problems worth solving</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-600 font-bold text-sm mt-0.5 shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-foreground">Collaboration</div>
                    <div className="text-sm text-foreground/60">Work across engineering, design, and business</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-600 font-bold text-sm mt-0.5 shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-foreground">Ownership</div>
                    <div className="text-sm text-foreground/60">Take full responsibility from start to finish</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg h-12 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
