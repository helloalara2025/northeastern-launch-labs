import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
              ✨ Northeastern Student Org
            </div>
            
            <h1 className="font-sans font-bold text-6xl lg:text-7xl text-foreground leading-tight tracking-tight">
              From Idea to Impact
            </h1>
            
            <p className="text-lg text-foreground/60 leading-relaxed max-w-md font-regular">
              Work on real products with startups. Build your own projects. Collaborate with ambitious students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#get-involved">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 h-11 rounded-lg text-base flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Apply Now
                  <ArrowRight size={16} />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="border-2 border-primary/30 text-primary font-bold px-6 h-11 rounded-lg text-base hover:bg-primary/5 transition-all duration-200">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Notion/Figma-style visual */}
          <div className="relative h-96 hidden lg:block">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" opacity="0.5"/>
              
              {/* Floating cards - in progress style */}
              <g>
                {/* Card 1 */}
                <rect x="20" y="40" width="140" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                <line x1="30" y1="60" x2="150" y2="60" stroke="#f3f4f6" strokeWidth="2"/>
                <circle cx="35" cy="55" r="3" fill="#5B21B6"/>
                <line x1="30" y1="75" x2="150" y2="75" stroke="#f3f4f6" strokeWidth="1.5"/>
                <line x1="30" y1="85" x2="150" y2="85" stroke="#f3f4f6" strokeWidth="1.5"/>
                <line x1="30" y1="95" x2="120" y2="95" stroke="#f3f4f6" strokeWidth="1.5"/>
                <rect x="30" y="110" width="50" height="8" rx="2" fill="#5B21B6" opacity="0.2"/>
              </g>

              {/* Card 2 */}
              <g>
                <rect x="240" y="80" width="140" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                <line x1="250" y1="100" x2="370" y2="100" stroke="#f3f4f6" strokeWidth="2"/>
                <circle cx="255" cy="95" r="3" fill="#5B21B6"/>
                <line x1="250" y1="115" x2="370" y2="115" stroke="#f3f4f6" strokeWidth="1.5"/>
                <line x1="250" y1="125" x2="370" y2="125" stroke="#f3f4f6" strokeWidth="1.5"/>
                <line x1="250" y1="135" x2="340" y2="135" stroke="#f3f4f6" strokeWidth="1.5"/>
                <rect x="250" y="150" width="50" height="8" rx="2" fill="#5B21B6" opacity="0.2"/>
              </g>

              {/* Card 3 */}
              <g>
                <rect x="130" y="220" width="140" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                <line x1="140" y1="240" x2="260" y2="240" stroke="#f3f4f6" strokeWidth="2"/>
                <circle cx="145" cy="235" r="3" fill="#5B21B6"/>
                <line x1="140" y1="255" x2="260" y2="255" stroke="#f3f4f6" strokeWidth="1.5"/>
                <line x1="140" y1="265" x2="260" y2="265" stroke="#f3f4f6" strokeWidth="1.5"/>
                <line x1="140" y1="275" x2="230" y2="275" stroke="#f3f4f6" strokeWidth="1.5"/>
                <rect x="140" y="290" width="50" height="8" rx="2" fill="#5B21B6" opacity="0.2"/>
              </g>

              {/* Connecting lines */}
              <line x1="160" y1="160" x2="240" y2="140" stroke="#5B21B6" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5"/>
              <line x1="200" y1="220" x2="200" y2="160" stroke="#5B21B6" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
