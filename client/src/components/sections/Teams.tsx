import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-20 bg-white border-t border-border">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight">
          Two Paths
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 hover:shadow-md transition-all duration-300">
            <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Launch Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-regular text-base mb-6">
              Partner with startups. Build real products. Ship to real users.
            </p>
            <ul className="space-y-3 mb-8">
              {["Work alongside founders", "Real product development", "Professional experience"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span className="font-regular">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#launch-detail">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold h-11 rounded-lg text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                Explore
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 hover:shadow-md transition-all duration-300">
            <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Innovation Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-regular text-base mb-6">
              Own the full journey. From problem to solution. Build your portfolio.
            </p>
            <ul className="space-y-3 mb-8">
              {["End-to-end ownership", "Cross-functional teams", "Portfolio-ready work"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span className="font-regular">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#innovation-detail">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-11 rounded-lg text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                Explore
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
