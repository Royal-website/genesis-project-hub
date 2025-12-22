import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";

const indoorSignTypes = [
  {
    name: "Lobby Signs",
    path: "/indoor-signs/lobby-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    description: "Make a lasting first impression with custom lobby signage",
  },
  {
    name: "Office Signs",
    path: "/indoor-signs/office-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    description: "Professional office door and wall signs",
  },
  {
    name: "ADA Signs",
    path: "/indoor-signs/ada-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    description: "ADA compliant braille and tactile signs",
  },
  {
    name: "Wayfinding Signs",
    path: "/indoor-signs/wayfinding-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    description: "Directional signage for easy navigation",
  },
  {
    name: "Wall Graphics",
    path: "/indoor-signs/wall-graphics",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    description: "Custom wall murals and branded graphics",
  },
  {
    name: "Window Graphics",
    path: "/indoor-signs/window-graphics",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    description: "Privacy films and decorative window graphics",
  },
];

const IndoorSigns = () => {
  return (
    <CategoryPageTemplate
      title="Indoor Signs"
      description="Professional indoor signage solutions for your Houston business"
      heroImage="https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg"
      intro="Royal Signs & Awnings creates stunning indoor signs that reinforce your brand and guide your customers. From elegant lobby signs to ADA compliant wayfinding, we deliver professional interior signage that makes an impact."
      categories={indoorSignTypes}
      breadcrumbs={[{ name: "Indoor Signs", path: "/indoor-signs" }]}
    />
  );
};

export default IndoorSigns;