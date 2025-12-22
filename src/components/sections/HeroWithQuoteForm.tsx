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
      className="relative bg-cover bg-center min-h-[500px] md:min-h-[550px]"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px] md:min-h-[550px]">
          {/* Left side - Title */}
          <div className="text-center lg:text-left py-12">
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight">
              {title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 text-shadow">
              {subtitle}
            </p>
          </div>
          
          {/* Right side - Quote Form Card (Floating) */}
          <div className="relative lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[380px] xl:w-[420px]">
            <div className="bg-primary rounded-t-lg overflow-hidden shadow-2xl">
              <div className="bg-primary py-5 px-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground text-center tracking-wide">
                  GET A FREE QUOTE
                </h3>
              </div>
              <div className="bg-white p-6 md:p-8">
                <QuoteForm variant="hero" />
              </div>
              <div className="bg-primary py-5 px-6 text-center">
                <p className="text-sm font-bold text-primary-foreground mb-2 tracking-wide">
                  RATED 5.0 STARS
                </p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground text-sm underline">
                  (Based on 54 Client Reviews)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
