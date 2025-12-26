import { Link } from "react-router-dom";
import { Star, ChevronRight } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

interface Breadcrumb {
  name: string;
  path: string;
}

interface HeroWithQuoteFormProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs?: Breadcrumb[];
}

export function HeroWithQuoteForm({
  title,
  subtitle = "Design | Production | Installation",
  backgroundImage,
  breadcrumbs = [],
}: HeroWithQuoteFormProps) {
  return (
    <section 
      className="relative bg-cover bg-center py-12 md:py-16"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Title */}
          <div className="text-center lg:text-left">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="mb-6">
                <ol className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/80">
                  <li>
                    <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                  </li>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.path} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      {index === breadcrumbs.length - 1 ? (
                        <span className="text-white">{crumb.name}</span>
                      ) : (
                        <Link to={crumb.path} className="hover:text-accent transition-colors">{crumb.name}</Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-lg leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-shadow">
              {subtitle}
            </p>
          </div>
          
          {/* Right side - Quote Form Card (Embedded) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-primary py-4 px-6">
                <h3 className="text-lg md:text-xl font-bold text-primary-foreground text-center tracking-wide">
                  GET A FREE QUOTE
                </h3>
              </div>
              <div className="p-5 md:p-6">
                <QuoteForm variant="hero" compact />
              </div>
              <div className="bg-primary py-3 px-6 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground text-xs underline">
                  Rated 5.0 Stars (54 Reviews)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
