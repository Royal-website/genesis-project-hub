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
  CoronavirusSignage,
  CorrugatedSigns,
  CustomTablecovers,
  DibondSigns,
  DigitalSigns,
  DimensionalLetters,
  DoorSigns,
  ElectronicSigns,
  FleetWraps,
  FloorSigns,
  FoamcoreSigns,
  HangingSigns,
  HighRiseSigns,
  InformationalSigns,
  LEDSigns,
  LargeBanners,
  LightedSigns,
  LobbySigns,
  MenuBoards,
  MetalSigns,
  MonumentSigns,
  OfficeSigns,
  POPSigns,
  PoleSigns,
  PortableSigns,
  PostPanelSigns,
  PrintedBackdrops,
  PromotionalSigns,
  PylonSigns,
  RoomIDSigns,
  SafetySigns,
  SandblastedSigns,
  SignRepairs,
  StorefrontSigns,
  TableTopDisplays,
  TemporarySigns,
  TenantSigns,
  TradeShowDisplays,
  TradeshowBooths,
  TradeshowExhibits,
  TruckWraps,
  VanWraps,
  WallSigns,
  WayfindingSigns,
  WindowGraphics,
  WindowSigns,
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
          <Route path="/coronavirus-signage" element={<CoronavirusSignage />} />
          <Route path="/corrugated-signs" element={<CorrugatedSigns />} />
          <Route path="/custom-tablecovers" element={<CustomTablecovers />} />
          <Route path="/dibond-signs" element={<DibondSigns />} />
          <Route path="/digital-signs" element={<DigitalSigns />} />
          <Route path="/dimensional-letters" element={<DimensionalLetters />} />
          <Route path="/door-signs" element={<DoorSigns />} />
          <Route path="/electronic-signs" element={<ElectronicSigns />} />
          <Route path="/fleet-wraps" element={<FleetWraps />} />
          <Route path="/floor-signs" element={<FloorSigns />} />
          <Route path="/foamcore-signs" element={<FoamcoreSigns />} />
          <Route path="/hanging-signs" element={<HangingSigns />} />
          <Route path="/high-rise-signs" element={<HighRiseSigns />} />
          <Route path="/informational-signs" element={<InformationalSigns />} />
          <Route path="/led-signs" element={<LEDSigns />} />
          <Route path="/large-banners" element={<LargeBanners />} />
          <Route path="/lighted-signs" element={<LightedSigns />} />
          <Route path="/lobby-signs" element={<LobbySigns />} />
          <Route path="/menu-boards" element={<MenuBoards />} />
          <Route path="/metal-signs" element={<MetalSigns />} />
          <Route path="/monument-signs" element={<MonumentSigns />} />
          <Route path="/office-signs" element={<OfficeSigns />} />
          <Route path="/pop-signs" element={<POPSigns />} />
          <Route path="/pole-signs" element={<PoleSigns />} />
          <Route path="/portable-signs" element={<PortableSigns />} />
          <Route path="/post-panel-signs" element={<PostPanelSigns />} />
          <Route path="/printed-backdrops" element={<PrintedBackdrops />} />
          <Route path="/promotional-signs" element={<PromotionalSigns />} />
          <Route path="/pylon-signs" element={<PylonSigns />} />
          <Route path="/room-id-signs" element={<RoomIDSigns />} />
          <Route path="/safety-signs" element={<SafetySigns />} />
          <Route path="/sandblasted-signs" element={<SandblastedSigns />} />
          <Route path="/sign-repairs" element={<SignRepairs />} />
          <Route path="/storefront-signs" element={<StorefrontSigns />} />
          <Route path="/table-top-displays" element={<TableTopDisplays />} />
          <Route path="/temporary-signs" element={<TemporarySigns />} />
          <Route path="/tenant-signs" element={<TenantSigns />} />
          <Route path="/trade-show-displays" element={<TradeShowDisplays />} />
          <Route path="/tradeshow-booths" element={<TradeshowBooths />} />
          <Route path="/tradeshow-exhibits" element={<TradeshowExhibits />} />
          <Route path="/truck-wraps" element={<TruckWraps />} />
          <Route path="/van-wraps" element={<VanWraps />} />
          <Route path="/wall-signs" element={<WallSigns />} />
          <Route path="/wayfinding-signs" element={<WayfindingSigns />} />
          <Route path="/window-graphics" element={<WindowGraphics />} />
          <Route path="/window-signs" element={<WindowSigns />} />
          
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
