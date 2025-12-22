import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";

const businessSignTypes = [
  {
    name: "Restaurant Signs",
    path: "/business-signs/restaurant-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Appetizing signage for restaurants and cafes",
  },
  {
    name: "Retail Signs",
    path: "/business-signs/retail-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Eye-catching signs for retail stores",
  },
  {
    name: "Medical Signs",
    path: "/business-signs/medical-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Professional healthcare facility signage",
  },
  {
    name: "Real Estate Signs",
    path: "/business-signs/real-estate-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Property and real estate signage solutions",
  },
  {
    name: "Church Signs",
    path: "/business-signs/church-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Welcoming signs for houses of worship",
  },
  {
    name: "School Signs",
    path: "/business-signs/school-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    description: "Educational facility signage",
  },
];

const BusinessSigns = () => {
  return (
    <CategoryPageTemplate
      title="Business Signs"
      description="Professional signage solutions for every industry"
      heroImage="https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg"
      intro="Royal Signs & Awnings provides specialized business signage for all types of Houston businesses. We understand the unique needs of different industries and create signs that effectively communicate your message to customers."
      categories={businessSignTypes}
      breadcrumbs={[{ name: "Business Signs", path: "/business-signs" }]}
    />
  );
};

export default BusinessSigns;