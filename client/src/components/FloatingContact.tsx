import { Mail, Linkedin, Instagram, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact Box */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-secondary border border-[rgba(255,255,255,0.08)] p-6 w-72 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-white uppercase tracking-wider">Get in Touch</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:NU-launchlabs@northeastern.edu"
              className="flex items-center gap-3 p-3 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.05)] hover:border-red transition-colors group"
            >
              <Mail size={20} className="text-red flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-muted uppercase">Email</p>
                <p className="text-sm font-bold text-white truncate group-hover:text-red transition-colors">
                  NU-launchlabs@northeastern.edu
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/nulaunchlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.05)] hover:border-red transition-colors group"
            >
              <Linkedin size={20} className="text-white group-hover:text-red transition-colors flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-muted uppercase">LinkedIn</p>
                <p className="text-sm font-bold text-white truncate group-hover:text-red transition-colors">
                  /company/nulaunchlabs
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/nulaunchlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.05)] hover:border-red transition-colors group"
            >
              <Instagram size={20} className="text-white group-hover:text-red transition-colors flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-muted uppercase">Instagram</p>
                <p className="text-sm font-bold text-white truncate group-hover:text-red transition-colors">
                  @nulaunchlabs
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red hover:bg-red-dark text-white p-4 transition-all duration-200 flex items-center justify-center h-14 w-14 hover:-translate-y-1"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Mail size={24} />
        )}
      </button>
    </div>
  );
}
