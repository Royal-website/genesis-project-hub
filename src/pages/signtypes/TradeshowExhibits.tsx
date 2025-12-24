import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TradeshowExhibits() {
  return (
    <UniversalPageTemplate title="Tradeshow Exhibits" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/tradeshow-exhibits-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Tradeshow Exhibits", path: "/tradeshow-exhibits" }]}>
      <ContentSection title="Houston Tradeshow Exhibits" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-tradeshow-exhibit-300x225.jpg" imageAlt="custom tradeshow exhibit">
        <p className="mb-4">Stand out at trade shows with professional exhibit designs. From modular systems to custom builds, we create exhibits that attract attention and generate leads.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
