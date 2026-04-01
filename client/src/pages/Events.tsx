import Navigation from "@/components/sections/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = {
    8: {
      title: "Spring Kickoff",
      date: "March 8, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Khoury College",
      description: "Our first major gathering of the semester. We introduced the new Launch Teams, met the Innovation Teams, and kicked off the building season with pizza and networking.",
      type: "past"
    },
    15: {
      title: "Builder Workshop: React & Vite",
      date: "March 15, 2026",
      time: "5:00 PM - 7:00 PM",
      location: "ISEC 102",
      description: "A hands-on workshop covering the modern frontend stack. Bring your laptop and be ready to code.",
      type: "upcoming"
    },
    22: {
      title: "Mid-Semester Demo Day",
      date: "March 22, 2026",
      time: "6:00 PM - 9:00 PM",
      location: "Curry Student Center",
      description: "Teams will showcase their progress so far. Open to all students, faculty, and partners.",
      type: "upcoming"
    }
  };

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 border-b border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          
          {/* Red Arc SVG Strokes */}
          <svg className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none" viewBox="0 0 600 600" fill="none">
            <circle cx="600" cy="0" r="400" stroke="#dc2626" strokeWidth="1" opacity="0.3"/>
            <circle cx="600" cy="0" r="500" stroke="#dc2626" strokeWidth="0.5" opacity="0.15"/>
          </svg>

          <div className="container relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-secondary text-xs font-mono text-muted uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red"></span>
                Events
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] uppercase">
              BUILDER <br />
              <span className="text-red">GATHERINGS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-medium">
              Workshops, hackathons, and community events where Northeastern's top builders connect and create.
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.1)] relative">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-sm font-mono text-red uppercase tracking-widest mb-4">Schedule</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">UPCOMING EVENTS</h3>
              </div>
            </div>
            
            <div className="bg-secondary border border-[rgba(255,255,255,0.05)] p-8 md:p-12 rounded-xl relative overflow-hidden group hover:border-red transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
              
              <div className="grid grid-cols-7 gap-2 md:gap-4 text-center mb-4">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day} className="font-mono text-xs text-muted uppercase tracking-wider">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2 md:gap-4">
                {/* Empty days for start of month */}
                <div className="aspect-square bg-[rgba(255,255,255,0.02)] rounded-lg"></div>
                <div className="aspect-square bg-[rgba(255,255,255,0.02)] rounded-lg"></div>
                
                {/* Days 1-31 */}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const event = events[day as keyof typeof events];
                  const isEventDay = event?.type === 'upcoming';
                  const isPastEvent = event?.type === 'past';
                  const isSelected = selectedEvent === day;
                  
                  return (
                    <div 
                      key={day} 
                      onClick={() => event && setSelectedEvent(isSelected ? null : day)}
                      className={`aspect-square rounded-lg flex flex-col items-center justify-center relative transition-all duration-300 ${
                        isSelected ? 'bg-white text-black scale-110 z-10 shadow-lg shadow-white/20' :
                        isEventDay ? 'bg-red/10 border border-red/30 hover:bg-red/20 cursor-pointer hover:-translate-y-1' : 
                        isPastEvent ? 'bg-yellow/10 border border-yellow/30 hover:bg-yellow/20 cursor-pointer hover:-translate-y-1' :
                        'bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)]'
                      }`}
                    >
                      <span className={`font-mono text-sm md:text-lg ${
                        isSelected ? 'text-black font-bold' :
                        isEventDay ? 'text-red font-bold' : 
                        isPastEvent ? 'text-yellow font-bold' : 
                        'text-white/70'
                      }`}>
                        {day}
                      </span>
                      {isEventDay && <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-black' : 'bg-red'}`}></div>}
                      {isPastEvent && <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-black' : 'bg-yellow'}`}></div>}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6 justify-center border-t border-[rgba(255,255,255,0.05)] pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red"></div>
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">Upcoming Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow"></div>
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">Past Event</span>
                </div>
              </div>
            </div>

            {/* Event Details Card */}
            {selectedEvent && events[selectedEvent as keyof typeof events] && (
              <div className="mt-8 bg-secondary border border-[rgba(255,255,255,0.08)] p-8 rounded-xl relative animate-in fade-in slide-in-from-top-4 duration-300">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-6 right-6 text-muted hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                    events[selectedEvent as keyof typeof events].type === 'upcoming' 
                      ? 'bg-red/20 text-red border border-red/30' 
                      : 'bg-yellow/20 text-yellow border border-yellow/30'
                  }`}>
                    {events[selectedEvent as keyof typeof events].type}
                  </span>
                  <span className="font-mono text-sm text-muted">{events[selectedEvent as keyof typeof events].date}</span>
                </div>
                
                <h4 className="text-3xl font-bold mb-6 uppercase">{events[selectedEvent as keyof typeof events].title}</h4>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="flex items-center gap-2 text-muted">
                    <Clock size={18} className="text-red" />
                    <span>{events[selectedEvent as keyof typeof events].time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <MapPin size={18} className="text-red" />
                    <span>{events[selectedEvent as keyof typeof events].location}</span>
                  </div>
                </div>
                
                <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                  {events[selectedEvent as keyof typeof events].description}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full border-[1px] border-yellow opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-sm font-mono text-yellow uppercase tracking-widest mb-4">Archive</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">PAST EVENTS</h3>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-2 uppercase">Spring Kickoff</h4>
              <p className="text-muted font-mono text-sm uppercase tracking-wider flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" /> March 2026
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1137_3fb9dc3d.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1140_1c9eddfa.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1143_93a0e972.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1146_e0c7a414.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1147_62e39e69.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1148_fdd7d459.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1149_9f2ef59a.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1150_9c0d98e7.jpg",
                "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/IMG_1162_0f913b73.jpg"
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-secondary border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden group hover:border-red transition-colors duration-300 relative">
                  <img src={src} alt={`Event photo ${i + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
