import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";

const awningTypes = [
  {
    name: "Storefront Awnings",
    path: "/awning-signs/storefront-awnings",
    image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg",
    description: "Custom branded awnings for retail storefronts",
  },
  {
    name: "Canopy Signs",
    path: "/awning-signs/canopy-signs",
    image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg",
    description: "Overhead canopy signage and graphics",
  },
  {
    name: "Fabric Awnings",
    path: "/awning-signs/fabric-awnings",
    image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg",
    description: "Classic fabric awnings in custom colors",
  },
  {
    name: "Metal Awnings",
    path: "/awning-signs/metal-awnings",
    image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg",
    description: "Durable aluminum and steel awning structures",
  },
];

const AwningSigns = () => {
  return (
    <CategoryPageTemplate
      title="Awning Signs"
      description="Custom awnings that provide shade and showcase your brand"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg"
      intro="Combine functionality with branding through our custom awning signs. Royal Signs & Awnings designs and installs quality awnings that protect your customers from the elements while prominently displaying your business name and logo."
      categories={awningTypes}
      breadcrumbs={[{ name: "Awning Signs", path: "/awning-signs" }]}
    />
  );
};

export default AwningSigns;