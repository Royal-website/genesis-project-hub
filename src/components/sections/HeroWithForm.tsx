import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

interface HeroWithFormProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function HeroWithForm({
  title,
  subtitle = "Design | Production | Installation",
  backgroundImage,
}: HeroWithFormProps) {
  return (
    <section 
      className="relative bg-cover bg-center py-8 md:py-10"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left: Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-shadow-lg leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-shadow">
                {subtitle}
              </p>
            </div>
            
            {/* Right: Compact Quote Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="bg-primary py-2 px-4">
                  <h3 className="text-sm font-bold text-primary-foreground text-center tracking-wide">
                    GET A FREE QUOTE
                  </h3>
                </div>
                <div className="p-3">
                  <QuoteForm variant="hero" compact />
                </div>
                <div className="bg-primary py-2 px-4 text-center">
                  <div className="flex items-center justify-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground text-xs underline">
                    5.0 Stars (54 Reviews)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
