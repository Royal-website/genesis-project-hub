import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function RealEstateSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Real Estate Signs", path: "/real-estate-signs" }];
  return (
    <UniversalPageTemplate title="Real Estate Signs" heroImage="/images/industries/real-estate-signs/08-real-estate-outdoor-yard-sign.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Houston Real Estate Signs" image="/images/industries/real-estate-signs/04-custom-outdoor-real-estate-banner-300x217.jpg" imageAlt="Real Estate Signs">
        <p className="mb-4">Are you looking for an attractive, impactful way to advertise a home, business, or land for sale? Royal Signs & Awnings will craft the perfect real estate signs to help you attract more buyers and sellers.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Custom Real Estate Signage" image="/images/industries/real-estate-signs/05-custom-outdoor-real-estate-banner.jpg" imageAlt="Custom Real Estate Signs">
        <p>The most common signage solution utilized by real estate agents is a yard sign. A custom made sign by Royal Signs & Awnings creates the impact you want.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
