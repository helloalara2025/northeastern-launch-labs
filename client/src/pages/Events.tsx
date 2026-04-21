import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

interface PastEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  photos: string[];
}

const pastEvents: PastEvent[] = [
  {
    title: "Spring Kickoff",
    date: "March 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Khoury College",
    description:
      "Our first major gathering of the semester. We introduced the new Launch Teams, met the Innovation Teams, and kicked off the building season with pizza and networking.",
    photos: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1137_3fb9dc3d.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1140_1c9eddfa.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1143_93a0e972.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1146_e0c7a414.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1147_62e39e69.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1148_fdd7d459.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1149_9f2ef59a.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1150_9c0d98e7.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1162_0f913b73.jpg",
    ],
  },
];

export default function Events() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          {/* Subtle arc */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04] pointer-events-none"
            viewBox="0 0 800 800"
            fill="none"
          >
            <circle cx="400" cy="400" r="350" stroke="white" strokeWidth="1" />
            <circle cx="400" cy="400" r="250" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 bg-red" />
                Events
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              EVENTS.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Workshops, networking nights, and community events where Northeastern builders connect and create.
            </p>
          </div>
        </section>

        {/* Upcoming Events — placeholder */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative">
          <div className="container">
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                Upcoming
              </span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
            </div>

            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-12 md:p-16 text-center">
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em] block mb-4">
                Stay Tuned
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                MORE EVENTS COMING SOON
              </h3>
              <p className="text-muted max-w-xl mx-auto leading-relaxed">
                Follow us on Instagram and LinkedIn to be the first to know about upcoming workshops, networking nights, and demo days.
              </p>
              <div className="flex items-center justify-center gap-6 mt-8">
                <a
                  href="https://www.instagram.com/nulaunchlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-white/50 uppercase tracking-[0.15em] hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/nulaunchlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-white/50 uppercase tracking-[0.15em] hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] border border-red/10 pointer-events-none" />

          <div className="container relative z-10">
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                Past Events
              </span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
            </div>

            {pastEvents.map((event, eventIdx) => (
              <div key={eventIdx} className="mb-20 last:mb-0">
                {/* Event Info */}
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center gap-2 text-muted">
                      <CalendarIcon size={16} className="text-red" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                      <Clock size={16} className="text-red" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                      <MapPin size={16} className="text-red" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {event.photos.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] bg-secondary border border-[rgba(255,255,255,0.05)] overflow-hidden group hover:border-red/40 transition-colors duration-300 relative"
                    >
                      <img
                        src={src}
                        alt={`${event.title} photo ${i + 1}`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
