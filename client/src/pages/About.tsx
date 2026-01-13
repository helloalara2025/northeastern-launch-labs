import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              About Launch Labs
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Northeastern Launch Labs brings together students across disciplines and experience levels to work on real-world, end-to-end projects that bridge classroom learning with practical impact.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Through Launch Teams partnering with startups and Innovation Teams developing internal, end-to-end initiatives, members gain practical experience tackling real-world problems. The club emphasizes collaboration, professional skill development, and ownership, enabling students to produce portfolio-ready work, strengthen cross-functional teamwork, and explore pathways to entrepreneurship and innovation within and beyond the Northeastern community.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Real-World Experience</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Work on projects that matter, from startup collaborations to internal initiatives that produce tangible outcomes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Cross-Disciplinary Collaboration</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Work alongside engineers, designers, business students, and more to solve complex problems from multiple angles.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Professional Skills</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Develop communication, project management, and technical skills in real collaborative environments.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Portfolio-Ready Work</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Build a portfolio of real projects that demonstrate your capabilities to employers and future collaborators.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="border-t border-foreground/10 pt-12">
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Time Commitment</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Members are expected to actively contribute to their team's work, with an average time commitment of <strong>3–5 hours per week</strong>. This is designed to fit into your busy student schedule while providing meaningful, hands-on experience.
              </p>
            </section>

            <section className="bg-gray-50 border border-foreground/10 rounded-lg p-8 text-center">
              <h3 className="font-bold text-2xl text-foreground mb-4">Ready to Get Involved?</h3>
              <p className="text-foreground/70 mb-6">Join us in building real products and making real impact.</p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded">
                Apply Now
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
