import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function MallSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Mall Signs", path: "/mall-signs" }];
  return (
    <UniversalPageTemplate title="Mall Signs" heroImage="/images/industries/mall-signs/08-custom-design-manufacturing-installation.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Mall Signs" image="/images/industries/mall-signs/04-sign-installation-300x208.jpg" imageAlt="Mall Signs">
        <p className="mb-4">Mall signs are highly effective tools in attracting customers, informing them, and encouraging them to make purchases.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Wide Selection of Mall Sign Options" image="/images/industries/mall-signs/06-custom-design-manufacturing-installation-300x225.jpg" imageAlt="Mall Wayfinding Signs">
        <p>Whether you need subtle but impactful acrylic signs, modern and chic dimensional letters, or bold and attractive electronic signs, Royal Signs & Awnings has the right one for your business.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
