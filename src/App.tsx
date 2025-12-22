import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndoorSigns from "./pages/IndoorSigns";
import OutdoorSigns from "./pages/OutdoorSigns";
import AwningSigns from "./pages/AwningSigns";
import VehicleWraps from "./pages/VehicleWraps";
import CustomSigns from "./pages/CustomSigns";
import BusinessSigns from "./pages/BusinessSigns";
import Reviews from "./pages/Reviews";
import ContactUs from "./pages/ContactUs";
import { LocationPage } from "./pages/LocationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Location slugs matching the original site (with -tx suffix)
const locations = ["alief-tx", "houston-tx", "missouri-city-tx", "richmond-tx", "rosenberg-tx", "sugar-land-tx", "thompsons-tx"];

// Services that have location-specific pages
const services = [
  "sign-company",
  "indoor-signs", 
  "outdoor-signs", 
  "awning-signs", 
  "custom-signs", 
  "business-signs", 
  "metal-signs", 
  "pole-signs", 
  "canopy-tents", 
  "monument-signs", 
  "sign-repair"
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/indoor-signs" element={<IndoorSigns />} />
          <Route path="/outdoor-signs" element={<OutdoorSigns />} />
          <Route path="/awning-signs" element={<AwningSigns />} />
          <Route path="/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="/custom-signs" element={<CustomSigns />} />
          <Route path="/business-signs" element={<BusinessSigns />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* General location pages: /location-tx format (e.g., /thompsons-tx) */}
          {locations.map(location => (
            <Route 
              key={location}
              path={`/${location}`} 
              element={<LocationPage />} 
            />
          ))}
          
          {/* Service-location pages: /service-location-tx format (e.g., /awning-signs-alief-tx) */}
          {services.map(service => 
            locations.map(location => (
              <Route 
                key={`${service}-${location}`}
                path={`/${service}-${location}`} 
                element={<LocationPage />} 
              />
            ))
          )}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
