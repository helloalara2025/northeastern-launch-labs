import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-white border-t-4 border-purple-200">
      <div className="container">
        <h2 className="font-sans font-black text-5xl lg:text-6xl text-foreground mb-16 leading-tight">
          Two Ways to Get Involved
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Launch Teams */}
          <div className="bg-gradient-to-br from-orange-300 to-red-400 rounded-2xl p-10 border-4 border-orange-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl font-black text-orange-600">🚀</div>
              <div className="w-8 h-8 bg-yellow-300 rounded-full transform -rotate-12 group-hover:rotate-12 transition-transform"></div>
            </div>
            <h3 className="font-sans font-black text-3xl text-white mb-4">Launch Teams</h3>
            <p className="text-white/90 leading-relaxed font-bold text-lg mb-8">
              Partner directly with early-stage startups to design, build, and deliver real solutions.
            </p>
            <a href="#launch-detail">
              <Button className="w-full bg-white hover:bg-gray-100 text-orange-600 font-black h-12 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                Learn More
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>

          {/* Innovation Teams */}
          <div className="bg-gradient-to-br from-green-300 to-teal-400 rounded-2xl p-10 border-4 border-green-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl font-black text-green-600">💡</div>
              <div className="w-8 h-8 bg-blue-300 rounded-full transform rotate-12 group-hover:-rotate-12 transition-transform"></div>
            </div>
            <h3 className="font-sans font-black text-3xl text-white mb-4">Innovation Teams</h3>
            <p className="text-white/90 leading-relaxed font-bold text-lg mb-8">
              Take internally scoped projects from concept to completion. Own the full product lifecycle.
            </p>
            <a href="#innovation-detail">
              <Button className="w-full bg-white hover:bg-gray-100 text-green-600 font-black h-12 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
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
