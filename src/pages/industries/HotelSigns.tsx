import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function HotelSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Hotel Signs", path: "/hotel-signs" }];
  return (
    <UniversalPageTemplate title="Hotel Signs" heroImage="/images/industries/hotel-signs/06-hotel-signs-1024x498.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Hotel Signs" image="/images/industries/hotel-signs/04-sign-installation-300x208.jpg" imageAlt="Hotel Lobby Signage">
        <p className="mb-4">In the hospitality industry, first impressions are everything. Your hotel signs are often the first interaction guests have with your property, setting the tone for their entire stay.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Exterior and Monument Signs" image="/images/industries/hotel-signs/07-hotel-signs-300x146.jpg" imageAlt="Hotel Monument Sign">
        <p className="mb-4">Your hotel's exterior signage serves multiple purposes: it helps travelers find your property, communicates your brand identity, and creates a welcoming first impression.</p>
      </ContentSection>
      <ContentSection title="Lobby and Interior Signage" image="/images/industries/hotel-signs/08-hotel-signs-768x374.jpg" imageAlt="Hotel Lobby Sign" imagePosition="left">
        <p className="mb-4">The lobby is the heart of your hotel, and your lobby signage should reflect the quality and character of your property.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
