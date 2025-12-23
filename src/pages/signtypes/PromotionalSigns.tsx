import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PromotionalSigns() {
  return (
    <UniversalPageTemplate
      title="Promotional Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/promotional-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Promotional Signs", path: "/promotional-signs" },
      ]}
    >
      <ContentSection
        title="Houston Promotional Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-promotional-sign-300x225.jpg"
        imageAlt="custom promotional sign"
      >
        <p className="mb-4">
          Promotional signs are essential marketing tools that help you advertise sales, special offers, and events. Eye-catching promotional signage can significantly increase customer engagement and sales.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create impactful promotional signs that grab attention and drive action, helping you maximize your marketing investment.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Sale & Event Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/sale-event-sign-300x225.jpg"
        imageAlt="sale event sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Promote your sales, grand openings, and special events with bold, attention-grabbing signage. We offer quick turnaround times to help you capitalize on time-sensitive opportunities.
        </p>
        <p>
          From banners to window graphics to yard signs, we have the right promotional product for every occasion.
        </p>
      </ContentSection>

      <ContentSection
        title="Seasonal Promotions"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/seasonal-promotional-sign-300x225.jpg"
        imageAlt="seasonal promotional sign"
      >
        <p className="mb-4">
          Keep your marketing fresh with seasonal promotional signage. Whether it's holiday sales, back-to-school promotions, or summer specials, we help you stay relevant throughout the year.
        </p>
        <p>
          Our promotional signs are designed for easy installation and removal, making campaign changes simple.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Promotional Signs Consultation"
      >
        <p className="mb-4">
          Ready to boost your marketing with effective promotional signage? Royal Signs & Awnings is here to help you create signs that sell.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
