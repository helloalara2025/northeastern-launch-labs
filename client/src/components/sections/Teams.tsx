import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-16 bg-background border-t border-border/30">
      <div className="container">
        <h2 className="font-sans font-bold text-3xl lg:text-4xl text-foreground mb-10 leading-tight">
          Two Paths
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Launch Teams */}
          <div className="bg-card border border-border/50 rounded-lg p-6">
            <h3 className="font-sans font-bold text-lg text-foreground mb-3">Launch Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-regular text-sm mb-4">
              Partner with startups. Build real products. Ship to real users.
            </p>
            <ul className="space-y-2 mb-6">
              {["Work alongside founders", "Real product development", "Professional experience"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                  <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#launch-detail">
              <Button className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-10 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2">
                Explore
                <ArrowRight size={14} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-card border border-border/50 rounded-lg p-6">
            <h3 className="font-sans font-bold text-lg text-foreground mb-3">Innovation Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-regular text-sm mb-4">
              Own the full journey. From problem to solution. Build your portfolio.
            </p>
            <ul className="space-y-2 mb-6">
              {["End-to-end ownership", "Cross-functional teams", "Portfolio-ready work"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                  <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#innovation-detail">
              <Button className="w-full bg-accent hover:bg-accent/90 text-background font-bold h-10 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2">
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
