import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function FoamcoreSigns() {
  return (
    <UniversalPageTemplate
      title="Foamcore Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/foamcore-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Foamcore Signs", path: "/foamcore-signs" },
      ]}
    >
      <ContentSection
        title="Houston Foamcore Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-foamcore-sign-300x225.jpg"
        imageAlt="custom foamcore sign"
      >
        <p className="mb-4">
          Foamcore signs are lightweight, affordable, and versatile, making them an excellent choice for temporary displays, presentations, and indoor signage. The smooth surface provides an ideal canvas for high-quality graphics.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create professional foamcore signs for trade shows, presentations, retail displays, and more. Our foamcore products combine quality printing with durable materials for impressive results.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Trade Show & Event Displays"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/foamcore-trade-show-display-300x225.jpg"
        imageAlt="foamcore trade show display"
        imagePosition="left"
      >
        <p className="mb-4">
          Foamcore signs are a popular choice for trade shows and events because they're easy to transport, set up, and display. Their lightweight construction makes them ideal for temporary installations.
        </p>
        <p>
          We can create foamcore displays in various sizes, from small tabletop signs to large presentation boards, all with stunning full-color graphics.
        </p>
      </ContentSection>

      <ContentSection
        title="Retail Point-of-Purchase Displays"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/foamcore-pop-display-300x225.jpg"
        imageAlt="foamcore pop display"
      >
        <p className="mb-4">
          In retail environments, foamcore signs are perfect for point-of-purchase displays, promotional signage, and informational graphics. They can be easily changed out as promotions change.
        </p>
        <p>
          Royal Signs & Awnings can help you create eye-catching foamcore displays that attract customer attention and drive sales.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Foamcore Signs Consultation"
      >
        <p className="mb-4">
          Ready to create affordable, professional signage for your next event or display? Royal Signs & Awnings is here to help you design and produce high-quality foamcore signs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Foamcore Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
