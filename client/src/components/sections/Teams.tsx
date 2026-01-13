import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-16 bg-white border-t border-foreground/5">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight tracking-tight">
          Two Paths
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Launch Teams */}
          <div className="bg-gradient-to-br from-primary/8 to-transparent border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                <div className="text-2xl">🚀</div>
                <h3 className="font-sans font-bold text-xl text-foreground">Launch Teams</h3>
              </div>
            </div>
            
            <p className="text-foreground/65 leading-relaxed font-regular text-sm mb-4">
              Partner with startups. Build real products. Ship to real users.
            </p>
            
            <ul className="space-y-2 mb-6">
              {["Work alongside founders", "Real product development", "Professional experience"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#launch-detail">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2">
                Explore
                <ArrowRight size={14} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/15 rounded-xl p-6 hover:border-primary/35 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                <div className="text-2xl">💡</div>
                <h3 className="font-sans font-bold text-xl text-foreground">Innovation Teams</h3>
              </div>
            </div>
            
            <p className="text-foreground/65 leading-relaxed font-regular text-sm mb-4">
              Own the full journey. From problem to solution. Build your portfolio.
            </p>
            
            <ul className="space-y-2 mb-6">
              {["End-to-end ownership", "Cross-functional teams", "Portfolio-ready work"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#innovation-detail">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2">
                Explore
                <ArrowRight size={14} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
