import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, FileText, Heart, Lightbulb } from "lucide-react";

export default function Forms() {
  return (
    <div className="bg-primary min-h-screen text-foreground font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          <div className="container relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              GET <br />
              <span className="text-yellow">INVOLVED.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/55 leading-relaxed max-w-3xl font-medium">
              Join Northeastern Launch Labs and start working on real-world projects.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 border-b border-foreground/8 bg-secondary">
          <div className="container">
            <h3 className="text-sm font-mono text-foreground/55 uppercase tracking-widest mb-6">Quick Links</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUOVlLR1RJSllIQUFSWFBLSDdBNjg2Wk5IOS4u" target="_blank" rel="noopener noreferrer" className="bg-primary border border-foreground/8 hover:border-yellow text-foreground px-6 py-4 flex items-center justify-between group transition-colors">
                <span className="font-bold tracking-wider uppercase text-sm">Interest Form</span>
                <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" target="_blank" rel="noopener noreferrer" className="bg-primary border border-foreground/8 hover:border-yellow text-foreground px-6 py-4 flex items-center justify-between group transition-colors">
                <span className="font-bold tracking-wider uppercase text-sm">Launch Team App</span>
                <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" target="_blank" rel="noopener noreferrer" className="bg-primary border border-foreground/8 hover:border-yellow text-foreground px-6 py-4 flex items-center justify-between group transition-colors">
                <span className="font-bold tracking-wider uppercase text-sm">Innovation App</span>
                <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" target="_blank" rel="noopener noreferrer" className="bg-primary border border-foreground/8 hover:border-yellow text-foreground px-6 py-4 flex items-center justify-between group transition-colors">
                <span className="font-bold tracking-wider uppercase text-sm">Leadership App</span>
                <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-24 md:py-32 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-red opacity-5 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Applications</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">JOIN A TEAM</h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Launch Teams */}
              <div className="bg-secondary border border-foreground/5 p-10 md:p-12 hover:border-red transition-colors duration-300 group">
                <div className="w-12 h-12 bg-primary border border-foreground/8 flex items-center justify-center mb-8">
                  <FileText className="w-6 h-6 text-red" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Launch Team Application</h4>
                <p className="text-foreground/55 text-lg leading-relaxed mb-8">
                  Apply to work directly with startups on real-world product development, implementation, and iterative testing.
                </p>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUNVU1NFZPWkNMSlU3NFlQRlpGNVhWR1lQVS4u" target="_blank" rel="noopener noreferrer" className="text-red hover:text-foreground transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider w-fit">
                  Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Innovation Teams */}
              <div className="bg-secondary border border-foreground/5 p-10 md:p-12 hover:border-yellow transition-colors duration-300 group">
                <div className="w-12 h-12 bg-primary border border-foreground/8 flex items-center justify-center mb-8">
                  <Lightbulb className="w-6 h-6 text-yellow" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Innovation Team Application</h4>
                <p className="text-foreground/55 text-lg leading-relaxed mb-8">
                  Pick a hard problem. Research it. Build something that didn't exist before.
                </p>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5-Bq-_-Nf69MkfguH-cGnHlUMldMQk9PVVU4Q0xFSlhYUzVGQU1LRTJQNS4u" target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-foreground transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider w-fit">
                  Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 md:py-32 border-b border-foreground/8">
          <div className="container">
            <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">LEADERSHIP OPPORTUNITIES</h3>
            
            <div className="bg-secondary border border-foreground/5 p-10 md:p-16 hover:border-yellow transition-colors duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
                <div className="w-16 h-16 bg-primary border border-foreground/8 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-yellow" />
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl md:text-4xl font-bold mb-6">Leadership Application</h4>
                  <p className="text-foreground/55 text-xl leading-relaxed mb-8 max-w-3xl">
                    Are you passionate about building community and driving innovation? Apply to join our leadership team. We're looking for students who want to help shape the future of Northeastern Launch Labs.
                  </p>
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV58t6J076SB1BnXzyi1fYH2VUQVA4SFlMRTBXUVVKRk9aSFJKUjdGNVhKWS4u" target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-foreground transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider w-fit">
                    Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 border-b border-foreground/8">
          <div className="container">
            <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Questions</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">FAQ</h3>
            
            <div className="space-y-4 max-w-4xl">
              <div className="bg-secondary border border-foreground/5 p-8 hover:border-red transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">What's the difference between Launch Teams and Innovation Teams?</h4>
                <p className="text-foreground/55 leading-relaxed">
                  Launch Teams work directly with external startups on real product development. Innovation Teams focus on internally scoped projects. Both provide hands-on experience and skill development.
                </p>
              </div>

              <div className="bg-secondary border border-foreground/5 p-8 hover:border-yellow transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">Do I need prior experience to apply?</h4>
                <p className="text-foreground/55 leading-relaxed">
                  No! We welcome students from all disciplines and experience levels. Whether you're an engineer, designer, business student, or something else entirely, we have opportunities for you.
                </p>
              </div>

              <div className="bg-secondary border border-foreground/5 p-8 hover:border-red transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">How much time does this require?</h4>
                <p className="text-foreground/55 leading-relaxed">
                  Time commitment varies by project and team, typically 3-5 hours per week. We'll discuss expectations during the application process and matching phase to ensure it works with your schedule.
                </p>
              </div>

              <div className="bg-secondary border border-foreground/5 p-8 hover:border-yellow transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">Can I apply for both Launch and Innovation Teams?</h4>
                <p className="text-foreground/55 leading-relaxed">
                  Yes! You can express interest in both. During the matching process, we'll help you find the best fit based on your interests and availability.
                </p>
              </div>

              <div className="bg-secondary border border-foreground/5 p-8 hover:border-red transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">When are applications open?</h4>
                <p className="text-foreground/55 leading-relaxed">
                  We accept applications on a rolling basis throughout the year. Check back regularly for updates on application windows and deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-red"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="container relative z-10 text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Apply to join a team or propose your own project. We're excited to work with you!
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-none text-lg px-10 py-8 font-bold tracking-widest uppercase border border-white">
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
