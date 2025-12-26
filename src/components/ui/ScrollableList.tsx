import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollableListProps {
  children: React.ReactNode;
  className?: string;
  maxHeight?: string;
}

export function ScrollableList({ 
  children, 
  className,
  maxHeight = "400px" 
}: ScrollableListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsAtBottom(isBottom);
      setShowScrollIndicator(!isBottom);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      checkScrollPosition();
      element.addEventListener("scroll", checkScrollPosition);
      return () => element.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={cn(
          "overflow-y-scroll scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-muted/20",
          className
        )}
        style={{ maxHeight }}
      >
        {children}
      </div>
      
      {/* Fade gradient overlay */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none transition-opacity duration-300",
          isAtBottom ? "opacity-0" : "opacity-100"
        )}
      />
      
      {/* Scroll down button */}
      <button
        onClick={scrollDown}
        className={cn(
          "absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-1 text-xs font-medium",
          isAtBottom ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100 translate-y-0"
        )}
        aria-label="Scroll down for more"
      >
        <ChevronDown className="h-4 w-4 animate-bounce" />
        <span className="pr-1">More</span>
      </button>
    </div>
  );
}
