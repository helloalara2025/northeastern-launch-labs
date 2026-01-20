import { Mail, Linkedin, Instagram, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact Box */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 p-6 w-72 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-foreground">Get in Touch</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:NU-launchlabs@northeastern.edu"
              className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors group"
            >
              <Mail size={20} className="text-red-900 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-600">Email</p>
                <p className="text-sm font-bold text-foreground truncate group-hover:text-red-900">
                  NU-launchlabs@northeastern.edu
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/nulaunchlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
            >
              <Linkedin size={20} className="text-blue-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-600">LinkedIn</p>
                <p className="text-sm font-bold text-foreground truncate group-hover:text-blue-600">
                  www.linkedin.com/company/nulaunchlabs
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/nulaunchlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors group"
            >
              <Instagram size={20} className="text-pink-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-600">Instagram</p>
                <p className="text-sm font-bold text-foreground truncate group-hover:text-pink-600">
                  @ nulaunchlabs
                </p>
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/EVSEDPDv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors group"
            >
              <MessageCircle size={20} className="text-indigo-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-600">Discord</p>
                <p className="text-sm font-bold text-foreground truncate group-hover:text-indigo-600">
                  https://discord.gg/EVSEDPDv
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-900 hover:bg-red-950 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center h-14 w-14"
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
