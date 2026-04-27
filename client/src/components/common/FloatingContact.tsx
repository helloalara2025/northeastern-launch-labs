import { X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const EBOARD_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRnvxsGPbkl7Nuo4WX77wV6sB8twjy5v5W1SP7oqjrjZ6CAw/viewform";

export default function FloatingContact() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="bg-white border border-red/20 shadow-lg p-4 pr-10 relative">
        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-foreground/30 hover:text-foreground transition-colors"
        >
          <X size={14} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 bg-red animate-pulse" />
          <span className="font-mono text-[10px] text-red/80 uppercase tracking-[0.15em]">
            Now Recruiting
          </span>
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed mb-3">
          E-Board applications are open for Fall 2026.
        </p>

        <a
          href={EBOARD_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red font-mono text-[11px] uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-200"
        >
          Apply Now <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  );
}
