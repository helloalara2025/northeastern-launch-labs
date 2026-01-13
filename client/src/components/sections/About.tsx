import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-sans font-semibold text-5xl md:text-6xl text-foreground mb-8 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed font-regular">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Real-World Projects */}
          <Card className="border border-foreground/8 shadow-sm hover:shadow-md hover:border-primary/25 transition-all bg-white rounded-2xl overflow-hidden group">
            <CardContent className="p-8">
              {/* Refined SVG visual */}
              <div className="mb-6 h-24 flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g className="text-primary">
                    <rect x="15" y="30" width="50" height="35" rx="4" fill="currentColor" fillOpacity="0.13" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                    <rect x="18" y="27" width="50" height="35" rx="4" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.32" />
                    <rect x="21" y="24" width="50" height="35" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.22" />
                    <circle cx="30" cy="40" r="2.5" fill="currentColor" fillOpacity="0.65" />
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-lg mb-3 text-foreground">Real-World Projects</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-regular">
                Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Cross-Disciplinary */}
          <Card className="border border-foreground/8 shadow-sm hover:shadow-md hover:border-primary/25 transition-all bg-white rounded-2xl overflow-hidden group">
            <CardContent className="p-8">
              {/* Refined SVG visual */}
              <div className="mb-6 h-24 flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g className="text-primary">
                    <circle cx="40" cy="40" r="6.5" fill="currentColor" fillOpacity="0.75" />
                    <circle cx="25" cy="28" r="4.5" fill="currentColor" fillOpacity="0.55" />
                    <circle cx="55" cy="28" r="4.5" fill="currentColor" fillOpacity="0.55" />
                    <circle cx="25" cy="52" r="4.5" fill="currentColor" fillOpacity="0.55" />
                    <circle cx="55" cy="52" r="4.5" fill="currentColor" fillOpacity="0.55" />
                    <line x1="40" y1="40" x2="25" y2="28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.22" />
                    <line x1="40" y1="40" x2="55" y2="28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.22" />
                    <line x1="40" y1="40" x2="25" y2="52" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.22" />
                    <line x1="40" y1="40" x2="55" y2="52" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.22" />
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-lg mb-3 text-foreground">Cross-Disciplinary</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-regular">
                Engineers, designers, business students, and more working together to solve complex problems.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Time Commitment */}
          <Card className="border border-foreground/8 shadow-sm hover:shadow-md hover:border-primary/25 transition-all bg-white rounded-2xl overflow-hidden group">
            <CardContent className="p-8">
              {/* Refined SVG visual */}
              <div className="mb-6 h-24 flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g className="text-primary">
                    <rect x="15" y="20" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.13" />
                    <rect x="15" y="20" width="35" height="4" rx="2" fill="currentColor" fillOpacity="0.65" />
                    
                    <rect x="15" y="35" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.13" />
                    <rect x="15" y="35" width="25" height="4" rx="2" fill="currentColor" fillOpacity="0.55" />
                    
                    <rect x="15" y="50" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.13" />
                    <rect x="15" y="50" width="40" height="4" rx="2" fill="currentColor" fillOpacity="0.72" />
                    
                    <rect x="15" y="65" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.13" />
                    <rect x="15" y="65" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.6" />
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-lg mb-3 text-foreground">3–5 Hours/Week</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-regular">
                Meaningful commitment with a manageable workload, designed to fit your busy schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
