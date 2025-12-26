import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MessageSquare, X } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

export function FloatingQuoteWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop: Always visible floating form */}
      <div className="hidden lg:block fixed right-4 top-28 z-50 w-72">
        <div className="bg-primary rounded-lg overflow-hidden shadow-2xl shadow-black/30">
          <div className="py-3 px-4">
            <h3 className="text-lg font-bold text-primary-foreground text-center tracking-wide uppercase">
              Get A Free Quote
            </h3>
          </div>
          
          <div className="bg-white p-4">
            <QuoteForm variant="sidebar" compact />
          </div>
          
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

      {/* Mobile: Collapsible button + expanded form */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        {/* Collapsed Button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-2xl shadow-black/40 transition-all duration-300 animate-pulse hover:animate-none"
            aria-label="Get a free quote"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}

        {/* Expanded Form */}
        {isExpanded && (
          <div className="bg-primary rounded-lg overflow-hidden shadow-2xl shadow-black/40 w-[calc(100vw-2rem)] max-w-sm animate-scale-in">
            {/* Header with close button */}
            <div className="py-3 px-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary-foreground tracking-wide uppercase">
                Get A Free Quote
              </h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="bg-white p-4">
              <QuoteForm variant="sidebar" compact />
            </div>
            
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
        )}
      </div>
    </>
  );
}
