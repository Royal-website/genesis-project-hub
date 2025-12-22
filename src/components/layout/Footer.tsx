import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { name: "Indoor Signs", path: "/indoor-signs" },
  { name: "Outdoor Signs", path: "/outdoor-signs" },
  { name: "Awning Signs", path: "/awning-signs" },
  { name: "Vehicle Wraps", path: "/vehicle-wraps" },
  { name: "Custom Signs", path: "/custom-signs" },
  { name: "Business Signs", path: "/business-signs" },
];

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Free Quote", path: "/contact-us" },
];

const paymentMethods = [
  "Visa", "Mastercard", "American Express", "Discover", "PayPal"
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 60 50" className="h-10 w-10">
                <path 
                  d="M30 5 L10 20 L10 45 L50 45 L50 20 Z" 
                  fill="hsl(37, 100%, 50%)" 
                  stroke="hsl(0, 0%, 100%)" 
                  strokeWidth="2"
                />
                <circle cx="30" cy="15" r="5" fill="hsl(37, 100%, 50%)" />
                <path d="M25 10 L30 3 L35 10" fill="hsl(37, 100%, 50%)" />
              </svg>
              <div>
                <div className="font-bold text-lg">ROYAL SIGNS</div>
                <div className="text-xs opacity-80">& Awnings</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Houston's premier custom sign company. Design, production, and installation of high-quality signage for businesses.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:2816459935" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                (281) 645-9935
              </a>
              <a href="mailto:info@royalsigns.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@royalsigns.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Houston, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Open 24 Hours
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-bold text-lg mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <div 
                  key={method}
                  className="bg-primary-foreground/10 px-3 py-1 rounded text-xs"
                >
                  {method}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Client Reviews</h4>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm opacity-80 mt-1">Rated 5.0 Stars (54 Reviews)</p>
            </div>
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