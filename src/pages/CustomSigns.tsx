import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";

const customSignTypes = [
  {
    name: "3D Signs",
    path: "/custom-signs/3d-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Dimensional signs that stand out",
  },
  {
    name: "Neon Signs",
    path: "/custom-signs/neon-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Classic neon and LED neon alternatives",
  },
  {
    name: "Acrylic Signs",
    path: "/custom-signs/acrylic-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Modern acrylic and plexiglass signs",
  },
  {
    name: "Metal Signs",
    path: "/custom-signs/metal-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Durable aluminum and steel signage",
  },
  {
    name: "Wooden Signs",
    path: "/custom-signs/wooden-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Rustic and carved wood signs",
  },
  {
    name: "Backlit Signs",
    path: "/custom-signs/backlit-signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    description: "Illuminated signs for 24/7 visibility",
  },
];

const CustomSigns = () => {
  return (
    <CategoryPageTemplate
      title="Custom Signs"
      description="Unique signage designed specifically for your brand"
      heroImage="https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg"
      intro="At Royal Signs & Awnings, we specialize in creating one-of-a-kind custom signs that perfectly represent your brand. From concept to installation, our team works with you to design and build signage that sets your business apart."
      categories={customSignTypes}
      breadcrumbs={[{ name: "Custom Signs", path: "/custom-signs" }]}
    />
  );
};

export default CustomSigns;