import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function POPSigns() {
  return (
    <UniversalPageTemplate
      title="POP Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/pop-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "POP Signs", path: "/pop-signs" },
      ]}
    >
      <ContentSection
        title="Houston POP Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-pop-display-300x225.jpg"
        imageAlt="custom pop display"
      >
        <p className="mb-4">
          Point-of-Purchase (POP) signs are powerful marketing tools that influence buying decisions right where customers make them. Strategically placed POP displays can significantly boost sales and brand awareness.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create eye-catching POP signage and displays that grab attention and drive impulse purchases.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Retail Display Solutions"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/retail-pop-display-300x225.jpg"
        imageAlt="retail pop display"
        imagePosition="left"
      >
        <p className="mb-4">
          Our POP displays are designed to maximize visibility and engagement in retail environments. From countertop displays to floor-standing units, we create solutions that fit your space and marketing objectives.
        </p>
        <p>
          Custom shapes, colors, and materials allow you to create displays that perfectly match your brand identity.
        </p>
      </ContentSection>

      <ContentSection
        title="Promotional Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/promotional-pop-sign-300x225.jpg"
        imageAlt="promotional pop sign"
      >
        <p className="mb-4">
          POP signs are perfect for highlighting special offers, new products, and seasonal promotions. Their temporary nature makes them ideal for time-limited campaigns.
        </p>
        <p>
          We offer quick turnaround times to help you capitalize on marketing opportunities as they arise.
        </p>
      </ContentSection>

      <ContentSection
        title="Free POP Signs Consultation"
      >
        <p className="mb-4">
          Ready to boost your retail sales with effective POP signage? Royal Signs & Awnings is here to help you create displays that convert browsers into buyers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a POP Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
