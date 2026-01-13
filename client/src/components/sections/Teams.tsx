import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-20 bg-white border-t border-border">
      <div className="container">
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-foreground mb-12 leading-tight">
          Two Ways to Get Involved
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 hover:shadow-md transition-all duration-300">
            <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Launch Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-regular text-base mb-6">
              Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
            </p>
            <a href="#launch-detail">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold h-11 rounded-lg text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                Learn More
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 hover:shadow-md transition-all duration-300">
            <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Innovation Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-regular text-base mb-6">
              Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
            </p>
            <a href="#innovation-detail">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-11 rounded-lg text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                Learn More
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
