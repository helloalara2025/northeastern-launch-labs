import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest mb-8 border-2 border-purple-300">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Northeastern Student Org
          </div>
          
          <h1 className="font-sans font-black text-7xl lg:text-8xl text-foreground leading-none tracking-tighter mb-8">
            From Idea
            <br />
            to Impact.
          </h1>
          
          <p className="text-xl text-foreground/60 leading-relaxed mb-10 max-w-xl font-medium">
            Join ambitious students building real products with startups and launching your own ventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#get-involved">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black px-8 h-12 rounded-lg text-base flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Start Building
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" className="border-2 border-foreground/30 text-foreground font-black px-8 h-12 rounded-lg text-base hover:bg-gray-50 transition-all duration-300 hover:border-purple-600">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
