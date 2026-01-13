import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-orange-200">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Northeastern Student Org
          </div>
          
          <h1 className="font-sans font-black text-7xl lg:text-8xl text-foreground leading-none tracking-tighter mb-8">
            Ship Ideas.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-teal-600">
              Create Impact.
            </span>
          </h1>
          
          <p className="text-xl text-foreground/60 leading-relaxed mb-10 max-w-xl font-medium">
            Join ambitious students building real products with startups and launching your own ventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#get-involved">
              <Button className="bg-primary hover:bg-orange-600 text-white font-bold px-8 h-12 rounded-xl text-base flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Start Building
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" className="border-2 border-foreground/20 text-foreground font-bold px-8 h-12 rounded-xl text-base hover:bg-gray-50 transition-all duration-300 hover:border-primary">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
