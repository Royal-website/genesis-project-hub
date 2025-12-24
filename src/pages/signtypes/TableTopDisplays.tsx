import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TableTopDisplays() {
  return (
    <UniversalPageTemplate
      title="Table Top Displays"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/tabletop-displays-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Table Top Displays", path: "/table-top-displays" },
      ]}
    >
      <ContentSection
        title="Houston Table Top Displays"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-tabletop-display-300x225.jpg"
        imageAlt="custom tabletop display"
      >
        <p className="mb-4">
          Table top displays are compact, portable marketing tools perfect for trade shows, retail counters, and reception areas. They maximize limited space while delivering your brand message effectively.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create professional table top displays that make an impact without taking up much room.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Trade Show Displays"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/trade-show-tabletop-300x225.jpg"
        imageAlt="trade show tabletop"
        imagePosition="left"
      >
        <p className="mb-4">
          Compact table top displays are ideal for smaller trade show booths or tabletop exhibits. They're easy to transport, quick to set up, and create a professional presence.
        </p>
        <p>
          We offer pop-up displays, retractable banners, and custom configurations to meet your needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Counter & POS Displays"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/counter-display-300x225.jpg"
        imageAlt="counter display"
      >
        <p className="mb-4">
          Capture customer attention at the point of sale with attractive counter displays. Perfect for promoting impulse purchases, loyalty programs, and special offers.
        </p>
        <p>
          Our displays are designed to maximize visibility while fitting seamlessly into your retail environment.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Table Top Displays Consultation"
      >
        <p className="mb-4">
          Ready to enhance your marketing with compact, powerful displays? Royal Signs & Awnings is here to help you create effective table top solutions.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
