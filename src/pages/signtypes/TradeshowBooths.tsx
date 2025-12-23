import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TradeshowBooths() {
  return (
    <UniversalPageTemplate title="Tradeshow Booths" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/tradeshow-booths-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Tradeshow Booths", path: "/tradeshow-booths" }]}>
      <ContentSection title="Houston Tradeshow Booths" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-tradeshow-booth-300x225.jpg" imageAlt="custom tradeshow booth">
        <p className="mb-4">Create a memorable presence at your next trade show with custom booth designs. We offer complete solutions from portable displays to elaborate custom exhibits.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
