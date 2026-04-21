import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const eventPhotos = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1137_3fb9dc3d.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1140_1c9eddfa.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1143_93a0e972.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1146_e0c7a414.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1147_62e39e69.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1148_fdd7d459.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1149_9f2ef59a.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1150_9c0d98e7.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1162_0f913b73.jpg",
];

export default function Events() {
  return (
    <div className="bg-primary min-h-screen text-foreground font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
            viewBox="0 0 800 800"
            fill="none"
          >
            <circle cx="400" cy="400" r="350" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-foreground/10 bg-secondary text-xs font-mono text-foreground/55 uppercase tracking-wider">
                <span className="w-2 h-2 bg-red" />
                Events
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              EVENTS.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/55 leading-relaxed max-w-3xl font-medium">
              Where our community comes together.
            </p>
          </div>
        </section>

        {/* Photos from Our Events */}
        <section className="py-24 md:py-32 border-b border-foreground/8 relative overflow-hidden">
          <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] border border-red/10 pointer-events-none" />

          <div className="container relative z-10">
            <div className="mb-6">
              <h2 className="text-xs font-mono text-red uppercase tracking-[0.2em] mb-4">
                Moments
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
                PHOTOS FROM OUR EVENTS
              </h3>
              <p className="text-foreground/50 leading-relaxed max-w-2xl">
                A few snapshots from our gatherings this year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {eventPhotos.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-secondary border border-foreground/5 overflow-hidden group hover:border-red/40 transition-colors duration-300 relative"
                >
                  <img
                    src={src}
                    alt={`Event photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Events Coming */}
        <section className="py-24 md:py-32 border-b border-foreground/8">
          <div className="container">
            <div className="bg-secondary border border-foreground/5 p-12 md:p-16 text-center">
              <span className="font-mono text-[10px] text-foreground/20 uppercase tracking-[0.2em] block mb-4">
                Stay Tuned
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                MORE EVENTS COMING SOON
              </h3>
              <p className="text-foreground/55 max-w-xl mx-auto leading-relaxed">
                Follow us on Instagram and LinkedIn to stay in the loop.
              </p>
              <div className="flex items-center justify-center gap-6 mt-8">
                <a
                  href="https://www.instagram.com/nulaunchlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-foreground/50 uppercase tracking-[0.15em] hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground/60 pb-0.5"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/nulaunchlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-foreground/50 uppercase tracking-[0.15em] hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground/60 pb-0.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
