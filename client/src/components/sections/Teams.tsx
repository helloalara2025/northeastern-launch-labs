import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-white border-t border-border">
      <div className="container">
        <h2 className="font-sans font-black text-5xl lg:text-6xl text-foreground mb-16 leading-tight">
          Two Ways to Get Involved
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-10 border-2 border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-4 h-4 bg-primary rounded-full mb-6"></div>
            <h3 className="font-sans font-black text-3xl text-foreground mb-4">Launch Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-medium text-lg mb-8">
              Partner directly with early-stage startups to design, build, and deliver real solutions. Work alongside founders on product development, prototyping, and strategy.
            </p>
            <a href="#launch-detail">
              <Button className="w-full bg-primary hover:bg-orange-600 text-white font-bold h-12 rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Learn More
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-10 border-2 border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-4 h-4 bg-teal-600 rounded-full mb-6"></div>
            <h3 className="font-sans font-black text-3xl text-foreground mb-4">Innovation Teams</h3>
            <p className="text-foreground/70 leading-relaxed font-medium text-lg mb-8">
              Take internally scoped projects from concept to completion. Own the full product lifecycle from research through execution and presentation.
            </p>
            <a href="#innovation-detail">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Learn More
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
