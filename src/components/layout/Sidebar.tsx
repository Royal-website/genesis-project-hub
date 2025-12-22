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
            <img 
              src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/09/payment-icon.png" 
              alt="Payment methods accepted" 
              className="h-8"
            />
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
          <div className="border border-t-0 border-border rounded-b-lg bg-card max-h-[400px] overflow-y-auto">
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
          <div className="border border-t-0 border-border rounded-b-lg bg-card max-h-[400px] overflow-y-auto">
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
