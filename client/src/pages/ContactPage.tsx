import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="font-sans font-bold text-5xl md:text-6xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Have questions about Launch Labs? Want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border border-foreground/10 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
                <a href="mailto:hello@launchlabs.neu.edu" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  hello@launchlabs.neu.edu
                </a>
              </CardContent>
            </Card>

            <Card className="border border-foreground/10 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Location</h3>
                <p className="text-foreground/70">
                  Northeastern University<br />
                  Boston, MA
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 border border-foreground/10 rounded-lg p-8 mb-12">
            <h2 className="font-bold text-2xl text-foreground mb-6">Connect With Us</h2>
            <div className="flex gap-6">
              <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="font-bold text-2xl text-foreground mb-4">Interested in Getting Involved?</h3>
            <p className="text-foreground/70 mb-6">
              Check out our application forms and learn more about Launch Teams and Innovation Teams.
            </p>
            <a href="/forms" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded transition-colors">
              View Forms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
