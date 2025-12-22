import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  content: ReactNode;
  relatedServices?: Array<{ name: string; path: string; image?: string }>;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export function ServicePageTemplate({
  title,
  description,
  heroImage,
  content,
  relatedServices = [],
  breadcrumbs = [],
}: ServicePageTemplateProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <li>
                  <Link to="/" className="hover:text-accent">Home</Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.path} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-primary-foreground">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.path} className="hover:text-accent">{crumb.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            {description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {content}
              </div>
              
              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Related Services</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="group bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow"
                      >
                        {service.image && (
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full aspect-video object-cover rounded mb-3"
                            loading="lazy"
                          />
                        )}
                        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {service.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quote Form */}
              <div className="bg-primary rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-foreground text-center mb-4">
                  Get a Free Quote
                </h3>
                <QuoteForm variant="sidebar" className="space-y-3" />
              </div>

              {/* Reviews Widget */}
              <div className="bg-primary rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-foreground text-center mb-4">
                  Client Reviews
                </h3>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm text-center">
                  Rated 5.0 Stars (54 Reviews)
                </p>
              </div>

              {/* Phone CTA */}
              <a href="tel:2816459935">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  (281) 645-9935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}