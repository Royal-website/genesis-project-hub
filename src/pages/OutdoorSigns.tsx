import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";

const outdoorSignTypes = [
  {
    name: "Channel Letters",
    path: "/outdoor-signs/channel-letters",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Illuminated 3D letter signs for storefronts",
  },
  {
    name: "Monument Signs",
    path: "/outdoor-signs/monument-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Freestanding ground-level business signs",
  },
  {
    name: "Pole Signs",
    path: "/outdoor-signs/pole-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "High-visibility elevated business signs",
  },
  {
    name: "LED Signs",
    path: "/outdoor-signs/led-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Digital message boards and LED displays",
  },
  {
    name: "Building Signs",
    path: "/outdoor-signs/building-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Large-format building-mounted signage",
  },
  {
    name: "Vinyl Signs",
    path: "/outdoor-signs/vinyl-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Durable vinyl banners and graphics",
  },
];

const OutdoorSigns = () => {
  return (
    <CategoryPageTemplate
      title="Outdoor Signs"
      description="High-impact outdoor signage that gets your business noticed"
      heroImage="https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg"
      intro="Maximize your visibility with custom outdoor signs from Royal Signs & Awnings. We design, manufacture, and install eye-catching exterior signage that attracts customers and builds brand recognition in the Houston area."
      categories={outdoorSignTypes}
      breadcrumbs={[{ name: "Outdoor Signs", path: "/outdoor-signs" }]}
    />
  );
};

export default OutdoorSigns;