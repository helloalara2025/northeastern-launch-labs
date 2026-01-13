import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-white border-t border-gray-200">
      <div className="container">
        <h2 className="font-sans font-semibold text-5xl lg:text-6xl text-foreground mb-16 leading-tight">
          Two Ways to Get Involved
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-white border-2 border-red-600 rounded-lg p-10 hover:shadow-lg transition-all duration-300">
            <h3 className="font-sans font-semibold text-3xl text-red-700 mb-4">Launch Teams</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-foreground/70 font-medium text-lg flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">–</span>
                <span>Work with real startups.</span>
              </li>
              <li className="text-foreground/70 font-medium text-lg flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">–</span>
                <span>Build real solutions.</span>
              </li>
              <li className="text-foreground/70 font-medium text-lg flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">–</span>
                <span>Develop real skills.</span>
              </li>
            </ul>
            <a href="#launch-detail">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-white border-2 border-red-600 rounded-lg p-10 hover:shadow-lg transition-all duration-300">
            <h3 className="font-sans font-semibold text-3xl text-red-700 mb-4">Innovation Teams</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-foreground/70 font-medium text-lg flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">–</span>
                <span>Define the problem.</span>
              </li>
              <li className="text-foreground/70 font-medium text-lg flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">–</span>
                <span>Build the solution.</span>
              </li>
              <li className="text-foreground/70 font-medium text-lg flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">–</span>
                <span>Own the outcome.</span>
              </li>
            </ul>
            <a href="#innovation-detail">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2">
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
