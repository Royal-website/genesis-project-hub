import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

// Location data
const locations: Record<string, { name: string; fullName: string }> = {
  "alief": { name: "Alief", fullName: "Alief, TX" },
  "houston": { name: "Houston", fullName: "Houston, TX" },
  "missouri-city": { name: "Missouri City", fullName: "Missouri City, TX" },
  "richmond": { name: "Richmond", fullName: "Richmond, TX" },
  "rosenberg": { name: "Rosenberg", fullName: "Rosenberg, TX" },
  "sugar-land": { name: "Sugar Land", fullName: "Sugar Land, TX" },
  "thompsons": { name: "Thompsons", fullName: "Thompsons, TX" },
};

// Service data
const services: Record<string, { name: string; description: string; heroImage: string }> = {
  "sign-company": {
    name: "Sign Company",
    description: "Your local full-service sign company providing custom signage solutions for businesses.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg"
  },
  "indoor-signs": {
    name: "Indoor Signs",
    description: "Professional indoor signage including lobby signs, directional signs, ADA signs, and more.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg"
  },
  "outdoor-signs": {
    name: "Outdoor Signs",
    description: "High-impact outdoor signage to attract customers and build brand visibility.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg"
  },
  "awning-signs": {
    name: "Awning Signs",
    description: "Custom awning signs that provide shade and promote your brand simultaneously.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg"
  },
  "custom-signs": {
    name: "Custom Signs",
    description: "Unique custom signage designed specifically for your brand and business needs.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg"
  },
  "business-signs": {
    name: "Business Signs",
    description: "Professional business signage to establish your brand presence and attract customers.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg"
  },
  "metal-signs": {
    name: "Metal Signs",
    description: "Durable metal signage built to last and make a strong impression.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/dimensional-letters.jpg"
  },
  "pole-signs": {
    name: "Pole Signs",
    description: "High-visibility pole signs to attract attention from the road and increase foot traffic.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/pole-signs.jpg"
  },
  "canopy-tents": {
    name: "Canopy Tents",
    description: "Custom branded canopy tents for events, trade shows, and outdoor promotions.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg"
  },
  "monument-signs": {
    name: "Monument Signs",
    description: "Professional monument signs that create a lasting first impression for your business.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/monument-signs.png"
  },
  "sign-repair": {
    name: "Sign Repair & Maintenance Service",
    description: "Expert sign repair and maintenance services to keep your signage looking its best.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg"
  },
};

// Parse location and service from URL path like "/alief-sign-company"
function parseLocationService(pathname: string): { location: string | null; service: string | null } {
  const path = pathname.replace(/^\//, ''); // Remove leading slash
  
  // Try to match location patterns
  for (const loc of Object.keys(locations)) {
    if (path.startsWith(`${loc}-`)) {
      const serviceKey = path.replace(`${loc}-`, '');
      if (services[serviceKey]) {
        return { location: loc, service: serviceKey };
      }
    }
  }
  
  return { location: null, service: null };
}

export function LocationPage() {
  const routerLocation = useLocation();
  const { location, service } = parseLocationService(routerLocation.pathname);
  
  const locationData = location ? locations[location] : null;
  const serviceData = service ? services[service] : null;
  
  if (!locationData || !serviceData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="text-accent hover:underline">Return to Home</Link>
        </div>
      </Layout>
    );
  }

  const pageTitle = `${locationData.name} ${serviceData.name}`;
  
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: `url('${serviceData.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {pageTitle}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Professional {serviceData.name.toLowerCase()} in {locationData.fullName}
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg mb-6">
                  Looking for professional {serviceData.name.toLowerCase()} in {locationData.name}? Royal Signs & Awnings is your trusted local sign company serving {locationData.fullName} and surrounding areas.
                </p>
                
                <p>
                  {serviceData.description} We provide comprehensive signage solutions tailored to the unique needs of businesses in {locationData.name}.
                </p>

                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mt-8 mb-4">
                  Why Choose Royal Signs & Awnings in {locationData.name}?
                </h2>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Local expertise serving {locationData.name} businesses for years</li>
                  <li>Full-service sign company: design, production, and installation</li>
                  <li>High-quality materials and craftsmanship</li>
                  <li>Competitive pricing and free consultations</li>
                  <li>Fast turnaround times to meet your deadlines</li>
                  <li>Excellent customer service and satisfaction guarantee</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mt-8 mb-4">
                  Our {serviceData.name} Services in {locationData.name}
                </h2>
                
                <p>
                  At Royal Signs & Awnings, we specialize in creating custom {serviceData.name.toLowerCase()} that help {locationData.name} businesses stand out. Whether you need signage for a new location, rebranding, or promotional purposes, our expert team delivers exceptional results.
                </p>

                <p>
                  We work with businesses of all sizes in {locationData.name}, from small local shops to large corporate facilities. Our comprehensive approach ensures that every sign we create reflects your brand identity and meets your specific requirements.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Contact Us Today for {serviceData.name} in {locationData.name}
                  </h3>
                  <p className="mb-4">
                    Ready to get started with your {serviceData.name.toLowerCase()} project in {locationData.name}? Contact Royal Signs & Awnings today for a free consultation and quote.
                  </p>
                  <a
                    href="tel:2816459935"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call (281) 645-9935
                  </a>
                </div>

                {/* Other Locations */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {serviceData.name} in Other Locations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(locations)
                      .filter(([key]) => key !== location)
                      .map(([key, loc]) => (
                        <Link
                          key={key}
                          to={`/${key}-${service}`}
                          className="text-accent hover:underline text-sm"
                        >
                          {loc.name} {serviceData.name}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Other Services in This Location */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Other Services in {locationData.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(services)
                      .filter(([key]) => key !== service)
                      .map(([key, svc]) => (
                        <Link
                          key={key}
                          to={`/${location}-${key}`}
                          className="text-accent hover:underline text-sm"
                        >
                          {locationData.name} {svc.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
