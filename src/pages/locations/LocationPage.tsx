import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Star } from "lucide-react";
import { useLocationContent, getSectionImage, getDefaultImage } from "@/hooks/useLocationContent";

// Location data mapping
const locations: Record<string, { name: string; fullName: string }> = {
  "alief-tx": { name: "Alief", fullName: "Alief, TX" },
  "baytown-tx": { name: "Baytown", fullName: "Baytown, TX" },
  "cy-fair-tx": { name: "Cy-Fair", fullName: "Cy-Fair, TX" },
  "houston-tx": { name: "Houston", fullName: "Houston, TX" },
  "katy-tx": { name: "Katy", fullName: "Katy, TX" },
  "missouri-city-tx": { name: "Missouri City", fullName: "Missouri City, TX" },
  "richmond-tx": { name: "Richmond", fullName: "Richmond, TX" },
  "rosenberg-tx": { name: "Rosenberg", fullName: "Rosenberg, TX" },
  "spring-tx": { name: "Spring", fullName: "Spring, TX" },
  "sugar-land-tx": { name: "Sugar Land", fullName: "Sugar Land, TX" },
  "thompsons-tx": { name: "Thompsons", fullName: "Thompsons, TX" },
};

// Sign type to route mapping
const signTypeRoutes: Record<string, string> = {
  "Awning Signs": "/awning-signs",
  "Blade Signs": "/outdoor-signs",
  "Cabinet Signs": "/outdoor-signs",
  "Channel Letters": "/outdoor-signs",
  "Dimensional Letters": "/outdoor-signs",
  "Hanging Signs": "/outdoor-signs",
  "Lighted Signs": "/outdoor-signs",
  "Monument Signs": "/outdoor-signs",
  "Pole Signs": "/outdoor-signs",
  "Post & Panel Signs": "/outdoor-signs",
  "Pylon Signs": "/outdoor-signs",
  "Storefront Signs": "/outdoor-signs",
  "Sign Repairs": "/custom-signs",
  "High Rise Signs": "/outdoor-signs",
  "Floor Signs": "/indoor-signs",
  "Lobby Signs": "/indoor-signs",
  "Office Signs": "/indoor-signs",
  "POP Signs": "/indoor-signs",
  "Room ID Signs": "/indoor-signs",
  "Wall Signs": "/indoor-signs",
  "Wayfinding Signs": "/indoor-signs",
};

export function LocationPage() {
  const location = useLocation();
  const path = location.pathname.replace(/^\//, "");
  
  // Determine if this is a general location page or service-location page
  const isGeneralLocation = Object.keys(locations).includes(path);
  const slug = path;
  
  const { heroTitle, heroImage, sections, loading, error } = useLocationContent(slug);
  
  const locationData = isGeneralLocation ? locations[path] : null;
  const locationName = locationData?.name || extractLocationName(path);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-red-500">Page not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Design | Production | Installation
              </p>
              <a 
                href="tel:2816459935"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                (281) 645-9935
              </a>
            </div>
            
            <div className="hidden lg:block">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quote Form */}
      <section className="lg:hidden bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <QuoteForm variant="sidebar" />
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="text-gray-700 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                    
                    {idx < 6 && (
                      <div className="order-first md:order-last">
                        <img
                          src={getSectionImage(slug, idx)}
                          alt={section.title}
                          className="w-full rounded-lg shadow-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getDefaultImage();
                          }}
                        />
                      </div>
                    )}
                  </div>
                  
                  {section.signTypes && section.signTypes.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {section.signTypes.map((signType, stIdx) => (
                        <Link
                          key={stIdx}
                          to={signTypeRoutes[signType] || "/custom-signs"}
                          className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          {signType}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Contact us for a free consultation and quote
          </p>
          <a
            href="tel:2816459935"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call (281) 645-9935
          </a>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/main-menu/logo.png" 
              alt="Royal Signs & Awnings" 
              className="h-16"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We deliver the professional signs, wraps, graphics, and displays you need 
            to attract and retain more customers and clients. Trust Royal Signs & Awnings 
            for all your {locationName} signage needs.
          </p>
        </div>
      </section>
    </Layout>
  );
}

function extractLocationName(path: string): string {
  // Extract location from service-location format (e.g., "indoor-signs-sugar-land-tx")
  const parts = path.split("-");
  const txIndex = parts.lastIndexOf("tx");
  if (txIndex > 0) {
    const locationParts = parts.slice(parts.indexOf("signs") + 1, txIndex);
    return locationParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
  }
  return "Houston";
}

export default LocationPage;
