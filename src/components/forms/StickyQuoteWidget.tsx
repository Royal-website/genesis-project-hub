import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { useEffect, useState, useRef } from "react";

export function StickyQuoteWidget() {
  const [isSticky, setIsSticky] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (widgetRef.current) {
        const rect = widgetRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 96); // 96px = top-24 (6rem)
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={widgetRef}
      className="sticky top-24 z-40"
    >
      <div 
        className={`
          bg-primary rounded-lg overflow-hidden 
          transition-all duration-300 ease-out
          ${isSticky 
            ? "shadow-2xl shadow-black/40 scale-[1.02]" 
            : "shadow-xl"
          }
        `}
      >
        {/* Header */}
        <div className="py-4 px-6">
          <h3 className="text-xl font-bold text-primary-foreground text-center tracking-wide uppercase">
            Get A Free Quote
          </h3>
        </div>
        
        {/* Form */}
        <div className="bg-white p-5">
          <QuoteForm variant="sidebar" />
        </div>
        
        {/* Rating Footer */}
        <div className="py-4 px-6 text-center">
          <p className="text-primary-foreground font-bold text-sm mb-1 tracking-wide">
            RATED 5.0 STARS
          </p>
          <div className="flex justify-center gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
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
