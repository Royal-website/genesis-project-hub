import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TruckWraps() {
  return (
    <UniversalPageTemplate title="Truck Wraps" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/truck-wraps-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Truck Wraps", path: "/truck-wraps" }]}>
      <ContentSection title="Houston Truck Wraps" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-truck-wrap-300x225.jpg" imageAlt="custom truck wrap">
        <p className="mb-4">Transform your trucks into mobile billboards with custom truck wraps. Full or partial wraps turn every mile driven into a marketing opportunity.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
