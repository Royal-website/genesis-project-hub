import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

export function FloatingQuoteWidget() {
  return (
    <div className="hidden lg:block fixed right-4 top-28 z-50 w-72">
      <div className="bg-primary rounded-lg overflow-hidden shadow-2xl shadow-black/30">
        {/* Header */}
        <div className="py-3 px-4">
          <h3 className="text-lg font-bold text-primary-foreground text-center tracking-wide uppercase">
            Get A Free Quote
          </h3>
        </div>
        
        {/* Form */}
        <div className="bg-white p-4">
          <QuoteForm variant="sidebar" compact />
        </div>
        
        {/* Rating Footer */}
        <div className="py-3 px-4 text-center">
          <p className="text-primary-foreground font-bold text-xs mb-1 tracking-wide">
            RATED 5.0 STARS
          </p>
          <div className="flex justify-center gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <Link 
            to="/reviews" 
            className="text-primary-foreground/80 hover:text-primary-foreground text-xs underline transition-colors"
          >
            (Based on 54 Client Reviews)
          </Link>
        </div>
      </div>
    </div>
  );
}
