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

// Industry pages
import {
  AutomotiveSigns,
  BankSigns,
  BarSigns,
  BarberSigns,
  ChurchSigns,
  CitySigns,
  CollegeSigns,
  ConstructionSigns,
  ConvenienceStoreSigns,
  CorporateSigns,
  DealershipSigns,
  DentistSigns,
  DoctorSigns,
  GasStationSigns,
  HospitalSigns,
  HospitalitySigns,
  HotelSigns,
  LaundromatSigns,
  LawyerSigns,
  MallSigns,
  ManufacturingSigns,
  NewBusinessSigns,
  NurserySigns,
  PoliticalSigns,
  PropertyManagementSigns,
  RealEstateSigns,
  RestaurantSigns,
  RetailSigns,
  SalonSigns,
  SchoolSigns,
  SmallBusinessSigns,
  WarehouseSigns,
} from "./pages/industries";

// Sign type pages
import {
  ADASigns,
  AcrylicSigns,
  AwningSignsPage,
  BladeSigns,
  BuildingSigns,
  CabinetSigns,
  CanopyTents,
  CarWraps,
  ChannelLetters,
} from "./pages/signtypes";

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
          
          {/* Industry pages */}
          <Route path="/automotive-signs" element={<AutomotiveSigns />} />
          <Route path="/bank-signs" element={<BankSigns />} />
          <Route path="/bar-signs" element={<BarSigns />} />
          <Route path="/barber-signs" element={<BarberSigns />} />
          <Route path="/church-signs" element={<ChurchSigns />} />
          <Route path="/city-signs" element={<CitySigns />} />
          <Route path="/college-signs" element={<CollegeSigns />} />
          <Route path="/construction-signs" element={<ConstructionSigns />} />
          <Route path="/convenience-store-signs" element={<ConvenienceStoreSigns />} />
          <Route path="/corporate-signs" element={<CorporateSigns />} />
          <Route path="/dealership-signs" element={<DealershipSigns />} />
          <Route path="/dentist-signs" element={<DentistSigns />} />
          <Route path="/doctor-signs" element={<DoctorSigns />} />
          <Route path="/gas-station-signs" element={<GasStationSigns />} />
          <Route path="/hospital-signs" element={<HospitalSigns />} />
          <Route path="/hospitality-signs" element={<HospitalitySigns />} />
          <Route path="/hotel-signs" element={<HotelSigns />} />
          <Route path="/laundromat-signs" element={<LaundromatSigns />} />
          <Route path="/lawyer-signs" element={<LawyerSigns />} />
          <Route path="/mall-signs" element={<MallSigns />} />
          <Route path="/manufacturing-signs" element={<ManufacturingSigns />} />
          <Route path="/new-business-signs" element={<NewBusinessSigns />} />
          <Route path="/nursery-signs" element={<NurserySigns />} />
          <Route path="/political-signs" element={<PoliticalSigns />} />
          <Route path="/property-management-signs" element={<PropertyManagementSigns />} />
          <Route path="/real-estate-signs" element={<RealEstateSigns />} />
          <Route path="/restaurant-signs" element={<RestaurantSigns />} />
          <Route path="/retail-signs" element={<RetailSigns />} />
          <Route path="/salon-signs" element={<SalonSigns />} />
          <Route path="/school-signs" element={<SchoolSigns />} />
          <Route path="/small-business-signs" element={<SmallBusinessSigns />} />
          <Route path="/warehouse-signs" element={<WarehouseSigns />} />
          
          {/* Sign type pages */}
          <Route path="/ada-signs" element={<ADASigns />} />
          <Route path="/acrylic-signs" element={<AcrylicSigns />} />
          <Route path="/blade-signs" element={<BladeSigns />} />
          <Route path="/building-signs" element={<BuildingSigns />} />
          <Route path="/cabinet-signs" element={<CabinetSigns />} />
          <Route path="/canopy-tents" element={<CanopyTents />} />
          <Route path="/car-wraps" element={<CarWraps />} />
          <Route path="/channel-letters" element={<ChannelLetters />} />
          
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
