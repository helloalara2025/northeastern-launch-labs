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
    <div className="bg-[#F5F0EB] min-h-screen text-[#1a1a1a] font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[#1a1a1a]/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,26,19,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <svg
            className="absolute top-[-80px] right-[-180px] w-[600px] h-[600px] pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="600" cy="0" r="400" stroke="#8B1A13" strokeWidth="1.5" opacity="0.12" />
            <circle cx="600" cy="0" r="500" stroke="#8B1A13" strokeWidth="0.8" opacity="0.06" />
          </svg>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#8B1A13]/20 bg-[#8B1A13]/5 text-xs font-mono text-[#8B1A13] uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#8B1A13]" />
                Events
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">
              EVENTS.
            </h1>
            <p className="text-lg md:text-xl text-[#1a1a1a]/55 leading-relaxed max-w-3xl">
              Where our community comes together.
            </p>
          </div>
        </section>

        {/* Photos from Our Events */}
        <section className="py-24 md:py-32 border-b border-[#1a1a1a]/8 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="mb-6">
              <h2 className="text-xs font-mono text-[#8B1A13] uppercase tracking-[0.2em] mb-4">
                Moments
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-4">
                PHOTOS FROM OUR EVENTS
              </h3>
              <p className="text-[#1a1a1a]/50 leading-relaxed max-w-2xl">
                A few snapshots from our gatherings this year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {eventPhotos.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-white border border-[#1a1a1a]/5 overflow-hidden group hover:border-[#8B1A13] transition-colors duration-300 relative"
                >
                  <img
                    src={src}
                    alt={`Event photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B1A13]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Events Coming — Red accent section */}
        <section className="py-24 md:py-32 bg-[#8B1A13] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] block mb-4">
                Stay Tuned
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-white">
                MORE EVENTS COMING SOON
              </h3>
              <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
                Follow us on Instagram and LinkedIn to stay in the loop.
              </p>
              <div className="flex items-center justify-center gap-6 mt-8">
                <a
                  href="https://www.instagram.com/nulaunchlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-white/70 uppercase tracking-[0.15em] hover:text-[#f5c518] transition-colors border-b border-white/30 hover:border-[#f5c518] pb-0.5"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/nulaunchlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-white/70 uppercase tracking-[0.15em] hover:text-[#f5c518] transition-colors border-b border-white/30 hover:border-[#f5c518] pb-0.5"
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
