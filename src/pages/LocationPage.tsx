import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Star } from "lucide-react";

// Location data with -tx suffix matching original site URLs
const locations: Record<string, { name: string; fullName: string; slug: string }> = {
  "alief-tx": { name: "Alief", fullName: "Alief, TX", slug: "alief-tx" },
  "houston-tx": { name: "Houston", fullName: "Houston, TX", slug: "houston-tx" },
  "missouri-city-tx": { name: "Missouri City", fullName: "Missouri City, TX", slug: "missouri-city-tx" },
  "richmond-tx": { name: "Richmond", fullName: "Richmond, TX", slug: "richmond-tx" },
  "rosenberg-tx": { name: "Rosenberg", fullName: "Rosenberg, TX", slug: "rosenberg-tx" },
  "sugar-land-tx": { name: "Sugar Land", fullName: "Sugar Land, TX", slug: "sugar-land-tx" },
  "thompsons-tx": { name: "Thompsons", fullName: "Thompsons, TX", slug: "thompsons-tx" },
};

// Service data with content for each service type
const services: Record<string, { 
  name: string; 
  description: string; 
  heroImage: string;
  intro: string;
  benefits: string[];
  ctaText: string;
}> = {
  "sign-company": {
    name: "Sign Company",
    description: "Your local full-service sign company providing custom signage solutions for businesses.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg",
    intro: "Looking for a reliable sign company? Royal Signs & Awnings is your trusted local partner for all signage needs. We design, manufacture, and install high-quality signs that help businesses stand out and attract customers.",
    benefits: [
      "Full-service sign company: design, fabrication, and installation",
      "Custom signage solutions tailored to your brand",
      "Expert consultation and free quotes",
      "Fast turnaround times",
      "Quality materials and craftsmanship",
      "Competitive pricing"
    ],
    ctaText: "Get Your Free Sign Consultation"
  },
  "indoor-signs": {
    name: "Indoor Signs",
    description: "Professional indoor signage including lobby signs, directional signs, ADA signs, and more.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg",
    intro: "Indoor signs play a crucial role in guiding visitors, reinforcing your brand, and creating a professional atmosphere. From lobby signs to wayfinding signage, we create interior signs that make an impact.",
    benefits: [
      "Lobby and reception signs that make a great first impression",
      "ADA-compliant wayfinding and directional signs",
      "Office and room identification signs",
      "Safety and informational signage",
      "Custom dimensional letters and logos",
      "Menu boards and promotional displays"
    ],
    ctaText: "Get Your Free Indoor Sign Quote"
  },
  "outdoor-signs": {
    name: "Outdoor Signs",
    description: "High-impact outdoor signage to attract customers and build brand visibility.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg",
    intro: "Outdoor signs are often the first thing customers see. We create eye-catching exterior signage that draws attention, builds brand recognition, and drives foot traffic to your business.",
    benefits: [
      "Channel letters and illuminated signs",
      "Monument and pylon signs",
      "Building and storefront signs",
      "Pole signs for maximum visibility",
      "Durable materials built to last",
      "LED and neon options available"
    ],
    ctaText: "Get Your Free Outdoor Sign Quote"
  },
  "awning-signs": {
    name: "Awning Signs",
    description: "Custom awning signs that provide shade and promote your brand simultaneously.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg",
    intro: "Awning signs and canopy signs serve a dual purpose - they provide shade and weather protection while advertising your business. Our custom awnings are designed to enhance your storefront's appearance while maximizing brand visibility.",
    benefits: [
      "Increase brand visibility with custom graphics",
      "Protect customers from sun and rain",
      "Save on cooling costs with shade",
      "Enhance storefront curb appeal",
      "Durable fabrics and frames",
      "Illuminated options available"
    ],
    ctaText: "Get Your Free Awning Sign Quote"
  },
  "custom-signs": {
    name: "Custom Signs",
    description: "Unique custom signage designed specifically for your brand and business needs.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg",
    intro: "Every business is unique, and your signage should reflect that. We create custom signs tailored to your specific requirements, brand identity, and budget. From concept to installation, we bring your vision to life.",
    benefits: [
      "Completely custom designs",
      "Wide variety of materials and finishes",
      "Expert design consultation",
      "3D renderings before production",
      "Quality craftsmanship guaranteed",
      "Installation and maintenance services"
    ],
    ctaText: "Get Your Free Custom Sign Quote"
  },
  "business-signs": {
    name: "Business Signs",
    description: "Professional business signage to establish your brand presence and attract customers.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg",
    intro: "Professional business signs are essential for attracting customers and establishing your brand. We help businesses of all sizes create impactful signage that communicates their message and builds credibility.",
    benefits: [
      "Storefront and building signs",
      "Reception and lobby signage",
      "Directional and wayfinding signs",
      "Vehicle graphics and wraps",
      "Trade show and event signage",
      "Complete branding solutions"
    ],
    ctaText: "Get Your Free Business Sign Quote"
  },
  "metal-signs": {
    name: "Metal Signs",
    description: "Durable metal signage built to last and make a strong impression.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/dimensional-letters.jpg",
    intro: "Metal signs offer durability, sophistication, and timeless appeal. Whether you need aluminum, stainless steel, or bronze signage, we create metal signs that stand the test of time and make a powerful statement.",
    benefits: [
      "Aluminum signs for lightweight durability",
      "Stainless steel for modern elegance",
      "Bronze and brass for classic look",
      "Weather-resistant finishes",
      "Cut letters and dimensional logos",
      "Interior and exterior applications"
    ],
    ctaText: "Get Your Free Metal Sign Quote"
  },
  "pole-signs": {
    name: "Pole Signs",
    description: "High-visibility pole signs to attract attention from the road and increase foot traffic.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/pole-signs.jpg",
    intro: "Pole signs provide maximum visibility from the road, making them ideal for businesses along highways and busy streets. We design and install pole signs that grab attention and guide customers to your location.",
    benefits: [
      "High visibility from the road",
      "Illuminated options for night visibility",
      "Single or multi-tenant configurations",
      "Durable construction",
      "Digital display options",
      "Permit assistance included"
    ],
    ctaText: "Get Your Free Pole Sign Quote"
  },
  "canopy-tents": {
    name: "Canopy Tents",
    description: "Custom branded canopy tents for events, trade shows, and outdoor promotions.",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg",
    intro: "Custom canopy tents are perfect for outdoor events, trade shows, farmers markets, and promotional activities. We create branded canopies that protect from the elements while showcasing your business.",
    benefits: [
      "Full-color custom printing",
      "Durable frames and fabrics",
      "Easy setup and takedown",
      "Various sizes available",
      "Sidewalls and accessories",
      "Perfect for events and promotions"
    ],
    ctaText: "Get Your Free Canopy Tent Quote"
  },
  "monument-signs": {
    name: "Monument Signs",
    description: "Professional monument signs that create a lasting first impression for your business.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/monument-signs.png",
    intro: "Monument signs create a professional, permanent presence for your business. These ground-level signs are ideal for office buildings, retail centers, churches, schools, and corporate campuses.",
    benefits: [
      "Create a distinguished entrance",
      "Variety of materials and styles",
      "Illuminated options available",
      "Multi-tenant configurations",
      "Landscaping integration",
      "ADA-compliant designs"
    ],
    ctaText: "Get Your Free Monument Sign Quote"
  },
  "sign-repair": {
    name: "Sign Repair & Maintenance",
    description: "Expert sign repair and maintenance services to keep your signage looking its best.",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg",
    intro: "Keep your signs looking their best with our professional repair and maintenance services. From burned-out lights to storm damage, we fix all types of signage quickly and efficiently.",
    benefits: [
      "Fast response times",
      "All sign types serviced",
      "LED retrofits and upgrades",
      "Storm damage repair",
      "Preventive maintenance plans",
      "Face and cabinet repairs"
    ],
    ctaText: "Get Your Free Sign Repair Quote"
  },
};

// Parse location and service from URL path like "/awning-signs-alief-tx"
function parseServiceLocation(pathname: string): { location: string | null; service: string | null } {
  const path = pathname.replace(/^\//, ''); // Remove leading slash
  
  // Try to match service-location patterns
  for (const loc of Object.keys(locations)) {
    if (path.endsWith(`-${loc}`)) {
      const serviceKey = path.replace(`-${loc}`, '');
      if (services[serviceKey]) {
        return { location: loc, service: serviceKey };
      }
    }
  }
  
  return { location: null, service: null };
}

export function LocationPage() {
  const routerLocation = useLocation();
  const { location, service } = parseServiceLocation(routerLocation.pathname);
  
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
      {/* Hero Section with Quote Form */}
      <section 
        className="relative py-12 md:py-20"
        style={{
          backgroundImage: `url('${serviceData.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                {pageTitle}
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-4">
                Design | Production | Installation
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-foreground font-medium">Rated 5.0 stars</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-accent underline text-sm">
                  (Based on 54 reviews)
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <article>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 border-l-4 border-accent pl-4">
                  {pageTitle}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {serviceData.intro}
                </p>
                
                <p className="text-muted-foreground mb-6">
                  At Royal Signs & Awnings, we are proud to serve businesses in {locationData.fullName} with professional {serviceData.name.toLowerCase()} services. Our team brings years of experience and a commitment to quality that shows in every project we complete.
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-4 mb-8">
                  <p className="font-medium text-foreground">
                    Call Royal Signs & Awnings today at{" "}
                    <a href="tel:2816459935" className="text-accent hover:underline font-bold">
                      (281) 645-9935
                    </a>{" "}
                    for your Free Consultation!
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-4">
                  Why Choose Us for {serviceData.name} in {locationData.name}?
                </h2>
                
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-4">
                  Professional {serviceData.name} Services
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  {serviceData.description} We work with businesses of all sizes in {locationData.name}, from small local shops to large corporate facilities. Our comprehensive approach ensures that every sign we create reflects your brand identity and meets your specific requirements.
                </p>

                <p className="text-muted-foreground mb-8">
                  As a full-service sign company serving {locationData.fullName}, we handle everything from initial design concepts to final installation. Our experienced team works closely with you throughout the process to ensure your complete satisfaction.
                </p>

                {/* CTA Box */}
                <div className="bg-primary text-primary-foreground p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    {serviceData.ctaText} in {locationData.name}
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
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {serviceData.name} in Other Locations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(locations)
                      .filter(([key]) => key !== location)
                      .map(([key, loc]) => (
                        <Link
                          key={key}
                          to={`/${service}-${key}`}
                          className="text-accent hover:underline text-sm bg-muted px-3 py-1 rounded"
                        >
                          {loc.name} {serviceData.name}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Other Services in This Location */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Other Services in {locationData.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(services)
                      .filter(([key]) => key !== service)
                      .map(([key, svc]) => (
                        <Link
                          key={key}
                          to={`/${key}-${location}`}
                          className="text-accent hover:underline text-sm bg-muted px-3 py-1 rounded"
                        >
                          {locationData.name} {svc.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
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
