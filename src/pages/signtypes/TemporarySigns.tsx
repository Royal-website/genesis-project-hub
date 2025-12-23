import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TemporarySigns() {
  return (
    <UniversalPageTemplate
      title="Temporary Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/temporary-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Temporary Signs", path: "/temporary-signs" },
      ]}
    >
      <ContentSection
        title="Houston Temporary Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-temporary-sign-300x225.jpg"
        imageAlt="custom temporary sign"
      >
        <p className="mb-4">
          Temporary signs are perfect for short-term promotions, events, construction sites, and seasonal displays. They provide flexibility and cost-effectiveness for time-limited signage needs.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create high-quality temporary signs that look professional even when they're not meant to last forever.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Event & Promotional Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/event-temporary-sign-300x225.jpg"
        imageAlt="event temporary sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Promote sales, grand openings, and special events with temporary signage. Banners, yard signs, and window graphics are popular options for short-term promotions.
        </p>
        <p>
          We offer quick turnaround times to help you capitalize on time-sensitive opportunities.
        </p>
      </ContentSection>

      <ContentSection
        title="Construction Site Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/construction-temporary-sign-300x225.jpg"
        imageAlt="construction temporary sign"
      >
        <p className="mb-4">
          Construction sites require temporary signage for safety, branding, and information purposes. We create durable signs that withstand jobsite conditions while promoting your project.
        </p>
        <p>
          From coming soon signs to safety notices, we cover all your construction signage needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Temporary Signs Consultation"
      >
        <p className="mb-4">
          Need signage for a limited time? Royal Signs & Awnings is here to help you create effective temporary signs that deliver results.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
