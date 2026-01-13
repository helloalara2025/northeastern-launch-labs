import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We work with innovative startups and organizations to create real-world learning opportunities for our members.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Current Startup Partners</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-foreground/10 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded bg-gray-200 mb-4"></div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Coming Soon</h3>
                    <p className="text-foreground/70 text-sm">Partner information will be added as we launch collaborations.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="border-t border-foreground/10 pt-12">
              <h2 className="font-sans font-bold text-3xl text-foreground mb-6">Why Partner With Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Talented Students</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Access to motivated, diverse students across engineering, design, business, and more.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Real Impact</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Get meaningful work done on your product development, strategy, and implementation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Flexible Engagement</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Work with teams on a timeline and scope that fits your needs and budget.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-foreground/10 shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">Community Connection</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Build relationships with Northeastern's entrepreneurship and innovation community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-gray-50 border border-foreground/10 rounded-lg p-8">
              <h2 className="font-sans font-bold text-2xl text-foreground mb-4">Interested in Partnering?</h2>
              <p className="text-foreground/70 mb-6">
                If you're a startup or organization interested in collaborating with Launch Labs, we'd love to hear from you.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded">
                Get in Touch
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
