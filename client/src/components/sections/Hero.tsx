import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Subtle line pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #A41E34, #A41E34 2px, transparent 2px, transparent 20px)'
      }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-800 text-xs font-semibold uppercase tracking-widest mb-8 border border-red-100">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            Northeastern Student Org
          </div>
          
          <h1 className="font-sans font-semibold text-7xl lg:text-8xl text-red-800 leading-none tracking-tight mb-8">
            From Idea
            <br />
            to Impact.
          </h1>
          
          <p className="text-xl text-foreground/60 leading-relaxed font-medium mb-10 max-w-xl">
            Join ambitious students building real products with startups and launching your own ventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#get-involved">
              <Button className="bg-red-800 hover:bg-red-900 text-white font-semibold px-8 h-12 rounded-lg text-base flex items-center gap-2 transition-all duration-300">
                Start Building
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" className="border border-foreground/30 text-foreground font-semibold px-8 h-12 rounded-lg text-base hover:bg-gray-50 transition-all duration-300">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
