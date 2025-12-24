import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function NurserySigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Nursery Signs", path: "/nursery-signs" }];
  return (
    <UniversalPageTemplate title="Nursery Signs" heroImage="/images/industries/nursery-signs/08-indoor-tradeshow-nursery-retractable-banners-803x1024.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Nursery Signs" image="/images/industries/nursery-signs/04-vinyl-wall-mural-indoor-install-225x300.jpg" imageAlt="Nursery Signs">
        <p className="mb-4">Represent your beautiful flowers and plants well with colorful and vibrant nursery signs by Royal Signs & Awnings.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Highly Customizable Outdoor Signage" image="/images/industries/nursery-signs/06-indoor-tradeshow-nursery-retractable-banners-235x300.jpg" imageAlt="Outdoor Nursery Signs">
        <p>As a trusted sign company, our services include giving you the guidance and the insight that you need in order to make the best choices for your nursery's outdoor signs.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
