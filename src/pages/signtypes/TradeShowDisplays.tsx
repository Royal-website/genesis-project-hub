import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TradeShowDisplays() {
  return (
    <UniversalPageTemplate
      title="Trade Show Displays"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/trade-show-displays-header.jpg"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Trade Show Displays", path: "/trade-show-displays" }]}
    >
      <ContentSection title="Houston Trade Show Displays" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-trade-show-display-300x225.jpg" imageAlt="custom trade show display">
        <p className="mb-4">Trade show displays help your booth stand out and attract attendees. From banners to backdrops to complete booth systems, we create professional displays that make an impact.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
