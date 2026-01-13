import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            What is Launch Labs?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-regular">
            Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact. Through two distinct tracks—Launch Teams and Innovation Teams—members gain hands-on experience tackling real problems, building portfolio-ready work, and developing professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Real-World Projects */}
          <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl overflow-hidden">
            <CardContent className="p-6">
              {/* Original SVG visual */}
              <div className="mb-4 h-20 flex items-center justify-center">
                <svg className="w-20 h-20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  {/* Shipping box concept */}
                  <g className="text-primary">
                    <rect x="15" y="25" width="50" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="15" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                    <path d="M 40 40 L 50 50 L 30 50 Z" fill="currentColor" opacity="0.6" />
                    <circle cx="25" cy="55" r="3" fill="currentColor" opacity="0.4" />
                    <circle cx="55" cy="55" r="3" fill="currentColor" opacity="0.4" />
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Real-World Projects</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-regular">
                Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Cross-Disciplinary */}
          <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl overflow-hidden">
            <CardContent className="p-6">
              {/* Original SVG visual */}
              <div className="mb-4 h-20 flex items-center justify-center">
                <svg className="w-20 h-20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  {/* Interconnected disciplines */}
                  <g className="text-primary">
                    {/* Central hub */}
                    <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.7" />
                    {/* Outer nodes */}
                    <circle cx="20" cy="25" r="5" fill="currentColor" opacity="0.5" />
                    <circle cx="60" cy="25" r="5" fill="currentColor" opacity="0.5" />
                    <circle cx="20" cy="55" r="5" fill="currentColor" opacity="0.5" />
                    <circle cx="60" cy="55" r="5" fill="currentColor" opacity="0.5" />
                    {/* Connecting lines */}
                    <line x1="40" y1="40" x2="20" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    <line x1="40" y1="40" x2="60" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    <line x1="40" y1="40" x2="20" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    <line x1="40" y1="40" x2="60" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Cross-Disciplinary</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-regular">
                Engineers, designers, business students, and more working together to solve complex problems.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Time Commitment */}
          <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl overflow-hidden">
            <CardContent className="p-6">
              {/* Original SVG visual */}
              <div className="mb-4 h-20 flex items-center justify-center">
                <svg className="w-20 h-20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  {/* Time blocks */}
                  <g className="text-primary">
                    <rect x="15" y="20" width="12" height="12" rx="1" fill="currentColor" opacity="0.8" />
                    <rect x="30" y="20" width="12" height="12" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="45" y="20" width="12" height="12" rx="1" fill="currentColor" opacity="0.4" />
                    <rect x="15" y="38" width="12" height="12" rx="1" fill="currentColor" opacity="0.5" />
                    <rect x="30" y="38" width="12" height="12" rx="1" fill="currentColor" opacity="0.7" />
                    <rect x="45" y="38" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
                    <rect x="15" y="56" width="12" height="12" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="30" y="56" width="12" height="12" rx="1" fill="currentColor" opacity="0.4" />
                    <rect x="45" y="56" width="12" height="12" rx="1" fill="currentColor" opacity="0.8" />
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">3–5 Hours/Week</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-regular">
                Meaningful commitment with a manageable workload, designed to fit your busy schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
