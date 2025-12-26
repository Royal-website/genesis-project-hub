import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

interface StickyQuoteCardProps {
  compact?: boolean;
}

export function StickyQuoteCard({ compact = false }: StickyQuoteCardProps) {
  return (
    <div className="sticky top-24 z-40">
      <div className="bg-primary rounded-lg overflow-hidden shadow-2xl shadow-black/30">
        {/* Header */}
        <div className={compact ? "py-3 px-4" : "py-5 px-6"}>
          <h3 className={`font-bold text-primary-foreground text-center tracking-wide uppercase ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>
            Get A Free Quote
          </h3>
        </div>
        
        {/* Form */}
        <div className={compact ? "bg-white p-4" : "bg-white p-6 md:p-8"}>
          <QuoteForm variant="sidebar" compact={compact} />
        </div>
        
        {/* Rating Footer */}
        <div className={`text-center ${compact ? "py-3 px-4" : "py-5 px-6"}`}>
          <p className={`text-primary-foreground font-bold tracking-wide mb-2 ${compact ? "text-xs mb-1" : "text-sm"}`}>
            RATED 5.0 STARS
          </p>
          <div className="flex justify-center gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className={`text-yellow-400 fill-yellow-400 ${compact ? "h-4 w-4" : "h-5 w-5"}`} />
            ))}
          </div>
          <Link 
            to="/reviews" 
            className={`text-primary-foreground/80 hover:text-primary-foreground underline transition-colors ${compact ? "text-xs" : "text-sm"}`}
          >
            (Based on 54 Client Reviews)
          </Link>
        </div>
      </div>
    </div>
  );
}
