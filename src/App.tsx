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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;