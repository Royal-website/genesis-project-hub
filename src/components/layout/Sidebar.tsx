import { Link } from "react-router-dom";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Star } from "lucide-react";

const signTypes = [
  { name: "ADA Signs", path: "/ada-signs" },
  { name: "Acrylic Signs", path: "/acrylic-signs" },
  { name: "Awning Signs", path: "/awning-signs" },
  { name: "Blade Signs", path: "/blade-signs" },
  { name: "Building Signs", path: "/building-signs" },
  { name: "Cabinet Signs", path: "/cabinet-signs" },
  { name: "Canopy Tents", path: "/canopy-tents" },
  { name: "Car Wraps", path: "/vehicle-wraps" },
  { name: "Channel Letters", path: "/channel-letters" },
  { name: "Channel Letters Signs", path: "/channel-letters-signs" },
  { name: "Coronavirus Signage", path: "/coronavirus-signage" },
  { name: "Corrugated Signs", path: "/corrugated-signs" },
  { name: "Custom Tablecovers", path: "/custom-tablecovers" },
  { name: "Dibond Signs", path: "/dibond-signs" },
  { name: "Digital Signs", path: "/digital-signs" },
  { name: "Dimensional Letters", path: "/dimensional-letters" },
  { name: "Door Signs", path: "/door-signs" },
  { name: "Electronic Signs", path: "/electronic-signs" },
  { name: "Fleet Wraps", path: "/fleet-wraps" },
  { name: "Floor Signs", path: "/floor-signs" },
  { name: "Foamcore Signs", path: "/foamcore-signs" },
  { name: "Hanging Signs", path: "/hanging-signs" },
  { name: "High Rise Signs", path: "/high-rise-signs" },
  { name: "Informational Signs", path: "/informational-signs" },
  { name: "LED Signs", path: "/led-signs" },
  { name: "Large Banners", path: "/large-banners" },
  { name: "Lighted Signs", path: "/lighted-signs" },
  { name: "Lobby Signs", path: "/lobby-signs" },
  { name: "Menu Boards", path: "/menu-boards" },
  { name: "Metal Signs", path: "/metal-signs" },
  { name: "Monument Signs", path: "/monument-signs" },
  { name: "Office Signs", path: "/office-signs" },
  { name: "POP Signs", path: "/pop-signs" },
  { name: "Pole Signs", path: "/pole-signs" },
  { name: "Portable Signs", path: "/portable-signs" },
  { name: "Post & Panel Signs", path: "/post-panel-signs" },
  { name: "Printed Backdrops", path: "/printed-backdrops" },
  { name: "Promotional Signs", path: "/promotional-signs" },
  { name: "Pylon Signs", path: "/pylon-signs" },
  { name: "Room ID Signs", path: "/room-id-signs" },
  { name: "Safety Signs", path: "/safety-signs" },
  { name: "Sandblasted Signs", path: "/sandblasted-signs" },
  { name: "Sign Repairs", path: "/sign-repairs" },
  { name: "Storefront Signs", path: "/storefront-signs" },
  { name: "Table Top Displays", path: "/table-top-displays" },
  { name: "Temporary Signs", path: "/temporary-signs" },
  { name: "Tenant Signs", path: "/tenant-signs" },
  { name: "Trade Show Displays", path: "/trade-show-displays" },
  { name: "Tradeshow Booths", path: "/tradeshow-booths" },
  { name: "Tradeshow Exhibits", path: "/tradeshow-exhibits" },
  { name: "Truck Wraps", path: "/truck-wraps" },
  { name: "Van Wraps", path: "/van-wraps" },
  { name: "Wall Signs", path: "/wall-signs" },
  { name: "Wayfinding Signs", path: "/wayfinding-signs" },
  { name: "Window Graphics", path: "/window-graphics" },
  { name: "Window Signs", path: "/window-signs" },
];

const industries = [
  { name: "Automotive Signs", path: "/automotive-signs" },
  { name: "Bank Signs", path: "/bank-signs" },
  { name: "Bar Signs", path: "/bar-signs" },
  { name: "Barber Signs", path: "/barber-signs" },
  { name: "Church Signs", path: "/church-signs" },
  { name: "City Signs", path: "/city-signs" },
  { name: "College Signs", path: "/college-signs" },
  { name: "Construction Signs", path: "/construction-signs" },
  { name: "Convenience Store Signs", path: "/convenience-store-signs" },
  { name: "Corporate Signs", path: "/corporate-signs" },
  { name: "Dealership Signs", path: "/dealership-signs" },
  { name: "Dentist Signs", path: "/dentist-signs" },
  { name: "Doctor Signs", path: "/doctor-signs" },
  { name: "Gas Station Signs", path: "/gas-station-signs" },
  { name: "Hospital Signs", path: "/hospital-signs" },
  { name: "Hospitality Signs", path: "/hospitality-signs" },
  { name: "Hotel Signs", path: "/hotel-signs" },
  { name: "Laundromat Signs", path: "/laundromat-signs" },
  { name: "Lawyer Signs", path: "/lawyer-signs" },
  { name: "Mall Signs", path: "/mall-signs" },
  { name: "Manufacturing Signs", path: "/manufacturing-signs" },
  { name: "New Business Signs", path: "/new-business-signs" },
  { name: "Nursery Signs", path: "/nursery-signs" },
  { name: "Political Signs", path: "/political-signs" },
  { name: "Property Management Signs", path: "/property-management-signs" },
  { name: "Real Estate Signs", path: "/real-estate-signs" },
  { name: "Restaurant Signs", path: "/restaurant-signs" },
  { name: "Retail Signs", path: "/retail-signs" },
  { name: "Salon Signs", path: "/salon-signs" },
  { name: "School Signs", path: "/school-signs" },
  { name: "Small Business Signs", path: "/small-business-signs" },
  { name: "Warehouse Signs", path: "/warehouse-signs" },
];

const substrates = [
  { name: "Acrylic Signs", path: "/acrylic-signs" },
  { name: "Corrugated Signs", path: "/corrugated-signs" },
  { name: "Dibond Signs", path: "/dibond-signs" },
  { name: "Foamcore Signs", path: "/foamcore-signs" },
  { name: "Metal Signs", path: "/metal-signs" },
];

// Credit card icons
const CardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md overflow-hidden shadow-lg shadow-black/30">
    {children}
  </div>
);

const VisaIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 48 32" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#1A1A1A"/>
      <circle cx="18" cy="16" r="9" fill="#EB001B"/>
      <circle cx="30" cy="16" r="9" fill="#F79E1B"/>
      <path d="M24 9.2C25.8 10.7 27 12.7 27 16C27 19.3 25.8 21.3 24 22.8C22.2 21.3 21 19.3 21 16C21 12.7 22.2 10.7 24 9.2Z" fill="#FF5F00"/>
    </svg>
  </CardWrapper>
);

const DiscoverIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#232323"/>
      <path d="M0 0H48V16C36 24 24 28 0 20V0Z" fill="#F47216"/>
      <circle cx="30" cy="16" r="6" fill="#F47216"/>
      <text x="12" y="18" fontFamily="Arial" fontSize="7" fontWeight="bold" fill="white">DISCOVER</text>
    </svg>
  </CardWrapper>
);

const AmexIcon = () => (
  <CardWrapper>
    <svg viewBox="0 0 48 32" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" fill="#006FCF"/>
      <text x="24" y="13" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">AMERICAN</text>
      <text x="24" y="21" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">EXPRESS</text>
    </svg>
  </CardWrapper>
);

interface ClientReview {
  title: string;
  stars: number;
  excerpt: string;
  author: string;
}

interface SidebarProps {
  showWeAccept?: boolean;
  showClientReview?: boolean;
  showSignTypes?: boolean;
  showIndustries?: boolean;
  showSubstrates?: boolean;
  showQuoteForm?: boolean;
  clientReview?: ClientReview;
}

export function Sidebar({
  showWeAccept = true,
  showClientReview = true,
  showSignTypes = true,
  showIndustries = true,
  showSubstrates = false,
  showQuoteForm = true,
  clientReview = {
    title: "Highly recommend Royal signs for all your business signage and building banners.",
    stars: 5,
    excerpt: "Royal signs & awnings continue to impress us with their workmanship and customer service. We have been using them for over 5 years with three of our businesses and they have de...",
    author: "Yami",
  },
}: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* We Accept Section */}
      {showWeAccept && (
        <div className="bg-primary rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-primary-foreground mb-3">
            We Accept:
          </h3>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <VisaIcon />
            <MastercardIcon />
            <DiscoverIcon />
            <AmexIcon />
          </div>
        </div>
      )}

      {/* Client Review Section */}
      {showClientReview && (
        <div>
          <div className="bg-primary py-3 px-4 rounded-t-lg">
            <h3 className="text-lg font-bold text-primary-foreground text-center">
              Client Review
            </h3>
          </div>
          <div className="border border-t-0 border-border rounded-b-lg bg-card p-4">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-3 justify-end">
              {[...Array(clientReview.stars)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            
            {/* Title */}
            <h4 className="font-bold text-foreground mb-3 leading-snug">
              {clientReview.title}
            </h4>
            
            {/* Review excerpt */}
            <p className="text-sm text-muted-foreground mb-2 border-l-2 border-muted pl-3">
              {clientReview.excerpt}{" "}
              <Link to="/reviews" className="text-accent hover:underline">
                read more
              </Link>
            </p>
            
            {/* Author */}
            <p className="text-sm text-muted-foreground text-right">
              - {clientReview.author}
            </p>
          </div>
        </div>
      )}

      {/* Sign Types Section */}
      {showSignTypes && (
        <div>
          <div className="bg-primary py-3 px-4 rounded-t-lg">
            <h3 className="text-lg font-bold text-primary-foreground text-center">
              Sign Types
            </h3>
          </div>
          <div className="border border-t-0 border-border rounded-b-lg bg-card max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-muted/20">
            <ul className="divide-y divide-border">
              {signTypes.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted/50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Industries Section */}
      {showIndustries && (
        <div>
          <div className="bg-primary py-3 px-4 rounded-t-lg">
            <h3 className="text-lg font-bold text-primary-foreground text-center">
              Industries
            </h3>
          </div>
          <div className="border border-t-0 border-border rounded-b-lg bg-card max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-muted/20">
            <ul className="divide-y divide-border">
              {industries.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted/50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Substrates Section */}
      {showSubstrates && (
        <div>
          <div className="bg-primary py-3 px-4 rounded-t-lg">
            <h3 className="text-lg font-bold text-primary-foreground text-center">
              Substrates
            </h3>
          </div>
          <div className="border border-t-0 border-border rounded-b-lg bg-card">
            <ul className="divide-y divide-border">
              {substrates.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted/50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Sticky Quote Form Widget */}
      {showQuoteForm && (
        <div className="sticky top-4">
          <div className="bg-primary rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <h3 className="text-xl font-bold text-primary-foreground text-center">
                GET A FREE QUOTE
              </h3>
            </div>
            <div className="bg-white p-4">
              <QuoteForm variant="sidebar" className="space-y-3" />
            </div>
            
            {/* Rating */}
            <div className="py-4 px-6 text-center">
              <p className="text-primary-foreground font-bold text-sm mb-1">RATED 5.0 STARS</p>
              <div className="flex justify-center gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground text-xs underline">
                (Based on 54 Client Reviews)
              </Link>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
