import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function LaundromatSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Laundromat Signs", path: "/laundromat-signs" }];
  return (
    <UniversalPageTemplate title="Laundromat Signs" heroImage="/images/industries/laundromat-signs/06-outdoor-custom-channel-cabinet-storefront-laundrymat-signage-1024x647.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Laundromat Signs" image="/images/industries/laundromat-signs/04-full-service-sign-company-graphic-design-and-installation-for-your-business-300x200.jpg" imageAlt="Laundromat Signs">
        <p className="mb-4">The coin laundry industry has been around for about 70 years here in the US. Stiff competition means your laundromat must do more to stand out from the crowd.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Illuminated Signs for your Laundromat" image="/images/industries/laundromat-signs/07-outdoor-custom-channel-cabinet-storefront-laundrymat-signage-300x190.jpg" imageAlt="Illuminated Laundromat Signs">
        <p>Laundromats usually have customers coming in throughout the day, which is why many of them are open 24/7. Illuminated signs by Royal Signs & Awnings come in so many shapes and sizes.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
