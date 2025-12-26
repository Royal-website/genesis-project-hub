import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { StickyQuoteCard } from "@/components/forms/StickyQuoteCard";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Star, MessageSquare, X } from "lucide-react";

interface PageSidebarWithMobileFormProps {
  children?: ReactNode;
  showWeAccept?: boolean;
  showClientReview?: boolean;
}

export function PageSidebarWithMobileForm({
  children,
  showWeAccept = true,
  showClientReview = true,
}: PageSidebarWithMobileFormProps) {
  const [isMobileFormExpanded, setIsMobileFormExpanded] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:col-span-1">
        <StickyQuoteCard />
        <div className="mt-6 space-y-6">
          {showWeAccept && (
            <div className="bg-primary rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary-foreground text-center mb-3">
                We Accept:
              </h3>
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="bg-card px-2 py-1 rounded text-xs">Visa</div>
                <div className="bg-card px-2 py-1 rounded text-xs">Mastercard</div>
                <div className="bg-card px-2 py-1 rounded text-xs">Discover</div>
                <div className="bg-card px-2 py-1 rounded text-xs">Amex</div>
              </div>
            </div>
          )}

          {showClientReview && (
            <div className="bg-primary rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-foreground text-center mb-4">
                Client Review
              </h3>
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">They were great!</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  We used them for our sign in front of our building and they were great!... <span className="text-accent cursor-pointer">read more</span>
                </p>
                <p className="text-sm font-semibold text-foreground text-right">- Blake Nichols</p>
              </div>
            </div>
          )}

          {children}

          <Sidebar showQuoteForm={false} />
        </div>
      </div>

      {/* Mobile: Collapsible floating button + expanded form */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        {!isMobileFormExpanded && (
          <button
            onClick={() => setIsMobileFormExpanded(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-2xl shadow-black/40 transition-all duration-300 animate-pulse hover:animate-none"
            aria-label="Get a free quote"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}

        {isMobileFormExpanded && (
          <div className="bg-primary rounded-lg overflow-hidden shadow-2xl shadow-black/40 w-[calc(100vw-2rem)] max-w-sm animate-scale-in">
            <div className="py-3 px-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary-foreground tracking-wide uppercase">
                Get A Free Quote
              </h3>
              <button
                onClick={() => setIsMobileFormExpanded(false)}
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
