import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PrintedBackdrops() {
  return (
    <UniversalPageTemplate
      title="Printed Backdrops"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/printed-backdrops-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Printed Backdrops", path: "/printed-backdrops" },
      ]}
    >
      <ContentSection
        title="Houston Printed Backdrops"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-printed-backdrop-300x225.jpg"
        imageAlt="custom printed backdrop"
      >
        <p className="mb-4">
          Printed backdrops create stunning visual environments for events, photo opportunities, trade shows, and presentations. They transform any space into a branded experience.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create high-quality printed backdrops that make a lasting impression on attendees and create memorable photo opportunities.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Event & Trade Show Backdrops"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/trade-show-backdrop-300x225.jpg"
        imageAlt="trade show backdrop"
        imagePosition="left"
      >
        <p className="mb-4">
          Make your trade show booth or event stand out with a custom printed backdrop. Our backdrops are designed to attract attention and communicate your brand message effectively.
        </p>
        <p>
          Available in various sizes and configurations, including pop-up displays, tension fabric systems, and pipe-and-drape solutions.
        </p>
      </ContentSection>

      <ContentSection
        title="Step & Repeat Banners"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/step-repeat-backdrop-300x225.jpg"
        imageAlt="step repeat backdrop"
      >
        <p className="mb-4">
          Step and repeat banners feature your logo or brand pattern repeated across the backdrop, creating a professional photo opportunity backdrop. Perfect for red carpet events, press conferences, and corporate gatherings.
        </p>
        <p>
          We offer complete systems including frames, banners, and carrying cases for easy transport.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Printed Backdrops Consultation"
      >
        <p className="mb-4">
          Ready to create an impressive backdrop for your next event? Royal Signs & Awnings is here to help you make a statement.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
