export default function About() {
  return (
    <section id="about" className="py-32 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-bold text-6xl md:text-7xl text-foreground mb-8 leading-tight">
            What We Do
          </h2>
          <p className="text-2xl text-foreground/70 leading-relaxed mb-16 font-regular max-w-3xl">
            Northeastern Launch Labs connects students across all majors to work on real-world projects. Whether you're building with a startup or leading an internal initiative, you'll gain hands-on experience, develop professional skills, and create portfolio-ready work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="text-4xl">🎯</div>
              <h3 className="font-sans font-bold text-xl text-foreground">Real Projects</h3>
              <p className="text-foreground/60 leading-relaxed font-regular">
                Work that matters. Build products that ship. Make tangible impact.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="text-4xl">🤝</div>
              <h3 className="font-sans font-bold text-xl text-foreground">Collaboration</h3>
              <p className="text-foreground/60 leading-relaxed font-regular">
                Engineers, designers, business students. Different perspectives. Better solutions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="text-4xl">⏱️</div>
              <h3 className="font-sans font-bold text-xl text-foreground">Manageable</h3>
              <p className="text-foreground/60 leading-relaxed font-regular">
                3–5 hours per week. Meaningful commitment. Fits your schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
