export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <h2 className="font-sans font-semibold text-4xl lg:text-5xl text-foreground mb-16 leading-tight">
          How to<br />
          <span className="text-red-800">Get Involved</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Apply to Join",
              desc: "Complete the application form to become a member. Indicate if interested in leadership roles."
            },
            {
              title: "Propose a Project",
              desc: "Have an idea for a startup collaboration or internal initiative? Submit a project proposal."
            },
            {
              title: "Attend an Info Session",
              desc: "Join an information meeting to learn about club structure, teams, and expectations."
            },
            {
              title: "Stay Engaged",
              desc: "Members contribute actively to their team's work with a 3–5 hours per week commitment."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-sans font-semibold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
