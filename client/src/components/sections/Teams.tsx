import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-32 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-6 leading-tight">
            Two Paths
          </h2>
          <p className="text-xl text-foreground/60 font-regular">
            Pick what excites you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="group bg-gradient-to-br from-primary/8 to-transparent border-2 border-primary/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 p-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 text-primary text-xs font-bold uppercase">
                🚀 Startup Track
              </div>
              
              <h3 className="font-sans font-bold text-3xl text-foreground">
                Launch Teams
              </h3>
              
              <p className="text-foreground/65 leading-relaxed font-regular text-lg">
                Partner with early-stage startups. Build real products. Ship to real users.
              </p>
              
              <div className="space-y-3 pt-4">
                {[
                  "Work alongside founders",
                  "Real product development",
                  "Professional experience"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-foreground/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="/launch-teams" className="block pt-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Explore
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>

          {/* Innovation Teams */}
          <div className="group bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/15 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/35 transition-all duration-300 p-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 text-primary text-xs font-bold uppercase">
                💡 Internal Track
              </div>
              
              <h3 className="font-sans font-bold text-3xl text-foreground">
                Innovation Teams
              </h3>
              
              <p className="text-foreground/65 leading-relaxed font-regular text-lg">
                Own the full journey. From problem to solution. Build your portfolio.
              </p>
              
              <div className="space-y-3 pt-4">
                {[
                  "End-to-end ownership",
                  "Cross-functional teams",
                  "Portfolio-ready work"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-foreground/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="/innovation-teams" className="block pt-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Explore
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
