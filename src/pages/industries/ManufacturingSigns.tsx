import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ManufacturingSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Manufacturing Signs", path: "/manufacturing-signs" }];
  return (
    <UniversalPageTemplate title="Manufacturing Signs" heroImage="/images/industries/manufacturing-signs/08-indoor-manufacturing-motivational-signage-1024x768.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Manufacturing Signs" image="/images/industries/manufacturing-signs/04-sign-installation-300x208.jpg" imageAlt="Manufacturing Signs">
        <p className="mb-4">Workplace safety is a vital part of running a business, and especially so if you're in the manufacturing industry. Royal Signs & Awnings is a trusted local signage provider and we specialize in affordable and effective industrial signs.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Make Your Manufacturing Signage Visible" image="/images/industries/manufacturing-signs/06-indoor-manufacturing-barcode-identification-signage-e1551285179606-300x173.jpg" imageAlt="High-visibility Manufacturing Signs">
        <p>Your manufacturing sign's professional design and material quality wouldn't be of much use if your workers and visitors can't see the sign itself.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
