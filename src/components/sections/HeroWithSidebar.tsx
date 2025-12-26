import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  name: string;
  path: string;
}

interface HeroWithSidebarProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs?: Breadcrumb[];
}

export function HeroWithSidebar({
  title,
  subtitle = "Design | Production | Installation",
  backgroundImage,
  breadcrumbs = [],
}: HeroWithSidebarProps) {
  return (
    <section 
      className="relative bg-cover bg-center min-h-[400px] md:min-h-[450px]"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center min-h-[400px] md:min-h-[450px]">
        <div className="container mx-auto px-4">
          {/* Title area - takes full width on mobile, 2/3 on desktop */}
          <div className="lg:w-2/3 text-center lg:text-left py-12">
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
        </div>
      </div>
    </section>
  );
}
