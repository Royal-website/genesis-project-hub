import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Star } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top Footer - Company Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 80 70" className="h-16 w-16">
                <rect x="10" y="30" width="60" height="35" fill="none" stroke="hsl(37, 100%, 50%)" strokeWidth="2"/>
                <text x="40" y="45" textAnchor="middle" fill="hsl(37, 100%, 50%)" fontSize="10" fontWeight="bold">ROYAL</text>
                <text x="40" y="58" textAnchor="middle" fill="hsl(37, 100%, 50%)" fontSize="10" fontWeight="bold">SIGNS</text>
                <path d="M25 30 L40 15 L55 30" fill="none" stroke="hsl(37, 100%, 50%)" strokeWidth="2"/>
                <circle cx="40" cy="10" r="4" fill="hsl(37, 100%, 50%)"/>
                <circle cx="30" cy="22" r="2" fill="hsl(37, 100%, 50%)"/>
                <circle cx="50" cy="22" r="2" fill="hsl(37, 100%, 50%)"/>
              </svg>
              <div>
                <div className="font-bold text-xl">ROYAL SIGNS & AWNINGS</div>
              </div>
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
                <span className="text-sm cursor-pointer hover:text-accent transition-colors">
                  Locations Served ▲
                </span>
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
            <div className="flex flex-wrap gap-2">
              <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/visa.png" alt="Visa" className="h-6" />
              <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/discover.png" alt="Discover" className="h-6" />
              <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/amex.png" alt="American Express" className="h-6" />
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

      {/* Location Links Section - Using service-location-tx format */}
      <div className="border-t border-primary-foreground/20">
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
