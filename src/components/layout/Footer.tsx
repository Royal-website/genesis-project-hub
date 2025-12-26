import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Star, ChevronUp, ChevronDown, CreditCard } from "lucide-react";
import { useState } from "react";

// Location slugs with -tx suffix matching original site URLs
const locations = ["alief-tx", "houston-tx", "missouri-city-tx", "richmond-tx", "rosenberg-tx", "sugar-land-tx", "thompsons-tx"];
const locationNames: Record<string, string> = {
  "alief-tx": "Alief",
  "houston-tx": "Houston", 
  "missouri-city-tx": "Missouri City",
  "richmond-tx": "Richmond",
  "rosenberg-tx": "Rosenberg",
  "sugar-land-tx": "Sugar Land",
  "thompsons-tx": "Thompsons"
};

const quickLinks = [
  { name: "Houston Sign Company", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Contact Us", path: "/contact-us" },
];

// Service groups for footer layout (service-location-tx format)
const locationServices = [
  { title: "Sign Company", service: "sign-company" },
  { title: "Indoor Signs", service: "indoor-signs" },
  { title: "Outdoor Signs", service: "outdoor-signs" },
  { title: "Awning Signs", service: "awning-signs" },
];

const locationServices2 = [
  { title: "Custom Signs", service: "custom-signs" },
  { title: "Business Signs", service: "business-signs" },
  { title: "Metal Signs", service: "metal-signs" },
  { title: "Pole Signs", service: "pole-signs" },
];

const locationServices3 = [
  { title: "Canopy Tents", service: "canopy-tents" },
  { title: "Monument Signs", service: "monument-signs" },
  { title: "Sign Repair", service: "sign-repair" },
];

// Credit card icon component with dark theme styling
const CardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md overflow-hidden shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-shadow">
    {children}
  </div>
);

const VisaIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#1A1F71"/>
      <path d="M19.5 21H17L19 11H21.5L19.5 21Z" fill="white"/>
      <path d="M28.5 11.2C28 11 27 10.8 26 10.8C23 10.8 21 12.3 21 14.4C21 16 22.5 16.9 23.5 17.4C24.5 17.9 25 18.3 25 18.8C25 19.6 24 19.9 23 19.9C21.8 19.9 21 19.7 20 19.2L19.5 19L19 22C20 22.4 21.5 22.8 23 22.8C26.2 22.8 28 21.3 28 19C28 17.8 27.3 16.8 25.8 16C25 15.5 24.5 15.2 24.5 14.7C24.5 14.2 25 13.7 26 13.7C26.8 13.7 27.5 13.9 28 14.1L28.3 14.2L28.5 11.2Z" fill="white"/>
      <path d="M33.5 11H31.5C31 11 30.5 11.2 30.3 11.8L26 21H29.2L29.8 19.3H33.5L33.9 21H36.7L34.5 11H33.5ZM30.5 17C30.8 16.2 31.5 14.2 31.5 14.2C31.5 14.2 31.7 13.7 31.8 13.3L32 14.1C32 14.1 32.5 16.2 32.6 17H30.5Z" fill="white"/>
      <path d="M14.5 11L11.5 17.8L11.2 16.3C10.7 14.5 9 12.5 7 11.5L9.8 21H13L17.5 11H14.5Z" fill="white"/>
      <path d="M9.5 11H5L5 11.2C8.5 12 11 14.3 11.7 16.3L10.9 11.8C10.8 11.2 10.3 11 9.5 11Z" fill="#F7B600"/>
    </svg>
  </CardWrapper>
);

const MastercardIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#1A1A1A"/>
      <circle cx="18" cy="16" r="9" fill="#EB001B"/>
      <circle cx="30" cy="16" r="9" fill="#F79E1B"/>
      <path d="M24 9.2C25.8 10.7 27 12.7 27 16C27 19.3 25.8 21.3 24 22.8C22.2 21.3 21 19.3 21 16C21 12.7 22.2 10.7 24 9.2Z" fill="#FF5F00"/>
    </svg>
  </CardWrapper>
);

const DiscoverIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#232323"/>
      <path d="M0 0H48V16C36 24 24 28 0 20V0Z" fill="#F47216"/>
      <circle cx="30" cy="16" r="6" fill="#F47216"/>
      <text x="12" y="18" fontFamily="Arial" fontSize="7" fontWeight="bold" fill="white">DISCOVER</text>
    </svg>
  </CardWrapper>
);

const AmexIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#006FCF"/>
      <text x="24" y="13" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">AMERICAN</text>
      <text x="24" y="21" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">EXPRESS</text>
    </svg>
  </CardWrapper>
);

export function Footer() {
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top Footer - Company Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/royal-signs-logo-white.png" 
                alt="Royal Signs & Awnings" 
                className="h-16 w-auto"
              />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>777 Post Oak Blvd Ste 255<br/>Houston, TX 77056</span>
              </div>
              <a href="tel:2812048307" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                (281) 204-8307
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Open 24 Hours
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="text-sm cursor-pointer hover:text-accent transition-colors flex items-center gap-1"
                >
                  Locations Served {locationsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </li>
            </ul>
          </div>

          {/* Ratings */}
          <div>
            <h3 className="font-bold text-lg mb-4">RATED 5.0 STARS</h3>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-sm mb-4">(Based on 54 Client Reviews)</p>
            <div className="flex flex-wrap gap-2 items-center">
              <VisaIcon />
              <MastercardIcon />
              <DiscoverIcon />
              <AmexIcon />
            </div>
          </div>

          {/* Quote Form Placeholder */}
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-center">GET A FREE QUOTE</h3>
            <div className="space-y-2">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-3 py-2 rounded bg-card text-foreground text-sm"
              />
              <input 
                type="tel" 
                placeholder="Best Phone" 
                className="w-full px-3 py-2 rounded bg-card text-foreground text-sm"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-3 py-2 rounded bg-card text-foreground text-sm"
              />
              <textarea 
                placeholder="What type and size of signage do you need?" 
                rows={2}
                className="w-full px-3 py-2 rounded bg-card text-foreground text-sm resize-none"
              />
              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-2 rounded transition-colors text-sm">
                REQUEST MY QUOTE 👆
              </button>
            </div>
            <div className="text-center mt-3">
              <p className="text-xs font-bold">RATED 5.0 STARS</p>
              <div className="flex justify-center gap-0.5 my-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xs">(Based on 54 Client Reviews)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Links Section - Collapsible */}
      {locationsOpen && (
        <div className="border-t border-primary-foreground/20 animate-fade-in">
          <div className="container mx-auto px-4 py-8">
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {locationServices.map((svc, index) => (
                <div key={index}>
                  <ul className="space-y-1">
                    {locations.map((loc) => (
                      <li key={`${svc.service}-${loc}`}>
                        <Link 
                          to={`/${svc.service}-${loc}`}
                          className="text-sm hover:text-accent transition-colors"
                        >
                          {locationNames[loc]} {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {locationServices2.map((svc, index) => (
                <div key={index}>
                  <ul className="space-y-1">
                    {locations.map((loc) => (
                      <li key={`${svc.service}-${loc}`}>
                        <Link 
                          to={`/${svc.service}-${loc}`}
                          className="text-sm hover:text-accent transition-colors"
                        >
                          {locationNames[loc]} {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {locationServices3.map((svc, index) => (
                <div key={index}>
                  <ul className="space-y-1">
                    {locations.map((loc) => (
                      <li key={`${svc.service}-${loc}`}>
                        <Link 
                          to={`/${svc.service}-${loc}`}
                          className="text-sm hover:text-accent transition-colors"
                        >
                          {locationNames[loc]} {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© {new Date().getFullYear()} Royal Signs & Awnings. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
