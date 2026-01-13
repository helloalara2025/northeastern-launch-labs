import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-foreground/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6">
            What is Launch Labs?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Northeastern Launch Labs brings together students across disciplines to work on real-world, end-to-end projects. Through Launch Teams (partnering with startups) and Innovation Teams (internal projects), you'll gain hands-on experience, build portfolio-ready work, and develop professional skills in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3 text-foreground">Real-World Projects</h3>
              <p className="text-foreground/70 leading-relaxed">
                Work that ships and makes impact. Move beyond theoretical assignments to deliver tangible value to real clients.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3 text-foreground">Cross-Disciplinary</h3>
              <p className="text-foreground/70 leading-relaxed">
                Engineers, designers, business students, and more working together to solve complex problems from multiple angles.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3 text-foreground">3-5 Hours/Week</h3>
              <p className="text-foreground/70 leading-relaxed">
                Meaningful commitment with a manageable workload, designed to fit into your busy student schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
