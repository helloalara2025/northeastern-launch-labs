export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-foreground/10">
      <div className="container max-w-2xl">
        <div className="text-center">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Questions?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Reach out to us. We'd love to hear from you.
          </p>

          <div className="bg-white border border-foreground/10 rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <a href="mailto:hello@launchlabs.neu.edu" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  hello@launchlabs.neu.edu
                </a>
              </div>

              <div className="border-t border-foreground/10 pt-6">
                <h3 className="font-bold text-foreground mb-2">Location</h3>
                <p className="text-foreground/70 text-sm">Northeastern University, Boston, MA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
