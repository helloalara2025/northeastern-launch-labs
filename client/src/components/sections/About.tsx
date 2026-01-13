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
          <Card className="border border-foreground/8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4"></div>
              <h3 className="font-sans font-semibold text-lg mb-3 text-foreground">Real-World Projects</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-regular">
                Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Cross-Disciplinary */}
          <Card className="border border-foreground/8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4"></div>
              <h3 className="font-sans font-semibold text-lg mb-3 text-foreground">Cross-Disciplinary</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-regular">
                Engineers, designers, business students, and more working together to solve complex problems.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Time Commitment */}
          <Card className="border border-foreground/8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4"></div>
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
