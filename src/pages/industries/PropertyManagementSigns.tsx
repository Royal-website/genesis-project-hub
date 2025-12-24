import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function PropertyManagementSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Property Management Signs", path: "/property-management-signs" }];
  return (
    <UniversalPageTemplate title="Property Management Signs" heroImage="/images/industries/property-management-signs/06-lobby-5-1024x478.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Property Management Signs" image="/images/industries/property-management-signs/04-sign-installation-300x208.jpg" imageAlt="Property Management Signs">
        <p className="mb-4">Property management, with its broad scope and numerous activities, is a lot of work. Property management signs can help you with a whole lot of things and can even boost your bottom line.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Property Signs and Real Estate Signs" image="/images/industries/property-management-signs/07-lobby-5-300x140.jpg" imageAlt="Property Real Estate Signs">
        <p>Here at Royal Signs & Awnings, our business is all about helping your business grow by providing you with effective signage.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
