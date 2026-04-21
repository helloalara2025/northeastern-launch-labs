import { X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663293706215/2bVaappDG4coBuhzggSTVT/rocket-logo-refined-KekPcTzQgZVxnSAAhUhFvw.webp";

const EBOARD_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRnvxsGPbkl7Nuo4WX77wV6sB8twjy5v5W1SP7oqjrjZ6CAw/viewform";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popup Card */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-secondary border border-[rgba(255,255,255,0.08)] p-6 w-80 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono text-[11px] text-red uppercase tracking-[0.15em]">
              Now Open
            </h3>
            <button
              onClick={() => {
                setIsOpen(false);
                setDismissed(true);
              }}
              className="text-white/30 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-3">
            E-Board Applications
          </h4>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            Interested in helping lead Launch Labs? Apply for an executive board
            position.
          </p>

          <a
            href={EBOARD_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-red text-white font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-red/90 transition-colors duration-200"
          >
            Apply Now <ArrowUpRight size={14} />
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red hover:bg-red/90 text-white p-4 transition-all duration-200 flex items-center justify-center h-14 w-14 hover:-translate-y-1"
      >
        {isOpen ? <X size={24} /> : <img src={LOGO_URL} alt="" className="w-7 h-7 object-contain" />}
      </button>
    </div>
  );
}
