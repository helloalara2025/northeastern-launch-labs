import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wide mb-6">
            Northeastern Student Org
          </div>
          
          <h1 className="font-sans font-bold text-6xl lg:text-7xl text-foreground leading-tight tracking-tight mb-6">
            Build Real Products. Make Real Impact.
          </h1>
          
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-xl font-regular">
            Northeastern Launch Labs connects students across all majors to work on end-to-end projects with startups and internal teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#get-involved">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 h-11 rounded-lg text-base flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
                Apply to Join
                <ArrowRight size={16} />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" className="border-2 border-primary text-primary font-bold px-6 h-11 rounded-lg text-base hover:bg-blue-50 transition-all duration-200">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
