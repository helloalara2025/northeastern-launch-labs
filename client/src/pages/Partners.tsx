import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Zap, Clock } from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-16">
            <h1 className="font-sans font-semibold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Our Startup Partners
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-regular">
              Launch Labs works with forward-thinking startups committed to providing meaningful learning experiences.
            </p>
          </div>

          <div className="space-y-16">
            {/* Benefits Section */}
            <section>
              <h2 className="font-sans font-semibold text-3xl text-foreground mb-8 leading-tight">Why Partner With Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Skilled Student Teams</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed font-regular">
                      Access talented students from all programs—engineering, design, business, and more.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Cost-Effective Development</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed font-regular">
                      High-quality work for early-stage ventures at a fraction of traditional agency costs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Fresh Perspectives</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed font-regular">
                      Students bring emerging technologies and new approaches to your challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-white rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-semibold text-base mb-2 text-foreground">Flexible Commitment</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed font-regular">
                      Semester-long engagements with defined scope that fits your timeline.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Current Partners */}
            <section className="border-t border-foreground/5 pt-12">
              <h2 className="font-sans font-semibold text-3xl text-foreground mb-8 leading-tight">Current Startup Partners</h2>
              <div className="bg-foreground/5 border border-foreground/5 rounded-xl p-8 text-center">
                <p className="text-foreground/70 font-regular">
                  Partner profiles and logos coming soon. Check back for information about our current startup collaborations.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="font-sans font-semibold text-2xl text-foreground mb-4">Interested in Partnering?</h3>
              <p className="text-foreground/70 mb-6 font-regular">
                Let's talk about how Launch Labs can support your startup's growth.
              </p>
              <a href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 h-11 rounded-lg">
                  Get in Touch
                </Button>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
