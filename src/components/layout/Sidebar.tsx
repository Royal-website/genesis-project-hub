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
];

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Sign Types Section */}
      <div>
        <div className="bg-primary py-3 px-4 rounded-t-lg">
          <h3 className="text-lg font-bold text-primary-foreground text-center">
            Sign Types
          </h3>
        </div>
        <div className="border border-t-0 border-border rounded-b-lg bg-card">
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

      {/* Industries Section */}
      <div>
        <div className="bg-primary py-3 px-4 rounded-t-lg">
          <h3 className="text-lg font-bold text-primary-foreground text-center">
            Industries
          </h3>
        </div>
        <div className="border border-t-0 border-border rounded-b-lg bg-card">
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

      {/* Sticky Quote Form Widget */}
      <div className="sticky top-4">
        <div className="bg-primary rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary-foreground text-center mb-4">
            GET A FREE QUOTE
          </h3>
          <QuoteForm variant="sidebar" className="space-y-3" />
          
          {/* Rating */}
          <div className="mt-4 text-center">
            <p className="text-primary-foreground font-bold text-sm mb-1">RATED 5.0 STARS</p>
            <div className="flex justify-center gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/80 text-xs">
              (Based on 54 Client Reviews)
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
