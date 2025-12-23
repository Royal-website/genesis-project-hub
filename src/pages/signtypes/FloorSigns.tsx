import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function FloorSigns() {
  return (
    <UniversalPageTemplate
      title="Floor Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/floor-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Floor Signs", path: "/floor-signs" },
      ]}
    >
      <ContentSection
        title="Houston Floor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-floor-graphics-300x225.jpg"
        imageAlt="custom floor graphics"
      >
        <p className="mb-4">
          Floor signs and graphics are an often-overlooked marketing opportunity that can make a significant impact on your customers. From directional wayfinding to promotional messaging, floor graphics capture attention in unexpected ways.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create durable floor signs and graphics that withstand heavy foot traffic while delivering your message effectively. Our floor graphics are slip-resistant and easy to apply and remove.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Wayfinding & Directional Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/floor-directional-graphics-300x225.jpg"
        imageAlt="floor directional graphics"
        imagePosition="left"
      >
        <p className="mb-4">
          Floor graphics are an excellent solution for directing customers through your space. Whether you need to guide visitors to specific departments, create queue lines, or mark safety zones, floor signs provide clear, visible guidance.
        </p>
        <p>
          Our floor wayfinding solutions are particularly popular in retail stores, hospitals, airports, and large facilities where clear navigation is essential.
        </p>
      </ContentSection>

      <ContentSection
        title="Promotional Floor Graphics"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/promotional-floor-decal-300x225.jpg"
        imageAlt="promotional floor decal"
      >
        <p className="mb-4">
          Use floor graphics to promote special offers, new products, or brand messaging. Placed strategically in high-traffic areas, promotional floor signs capture attention and drive customer engagement.
        </p>
        <p>
          Our promotional floor graphics are fully customizable and can be designed to match your brand identity and marketing objectives.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Floor Signs Consultation"
      >
        <p className="mb-4">
          Ready to utilize your floor space for marketing and wayfinding? Royal Signs & Awnings is here to help you create impactful floor graphics that enhance your customer experience.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Floor Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
