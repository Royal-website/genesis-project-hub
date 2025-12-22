import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";

const vehicleWrapTypes = [
  {
    name: "Full Vehicle Wraps",
    path: "/vehicle-wraps/full-wraps",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Complete vehicle coverage for maximum impact",
  },
  {
    name: "Partial Wraps",
    path: "/vehicle-wraps/partial-wraps",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Cost-effective partial vehicle graphics",
  },
  {
    name: "Fleet Graphics",
    path: "/vehicle-wraps/fleet-graphics",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Consistent branding across your vehicle fleet",
  },
  {
    name: "Car Wraps",
    path: "/vehicle-wraps/car-wraps",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Custom graphics for cars and sedans",
  },
  {
    name: "Truck Wraps",
    path: "/vehicle-wraps/truck-wraps",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Professional truck and van wraps",
  },
  {
    name: "Trailer Wraps",
    path: "/vehicle-wraps/trailer-wraps",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Mobile advertising on trailers",
  },
];

const VehicleWraps = () => {
  return (
    <CategoryPageTemplate
      title="Vehicle Wraps"
      description="Turn your vehicles into mobile billboards"
      heroImage="https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg"
      intro="Transform your company vehicles into powerful marketing tools with custom vehicle wraps from Royal Signs & Awnings. Our high-quality wraps protect your vehicle's paint while advertising your business 24/7 throughout Houston."
      categories={vehicleWrapTypes}
      breadcrumbs={[{ name: "Vehicle Wraps", path: "/vehicle-wraps" }]}
    />
  );
};

export default VehicleWraps;