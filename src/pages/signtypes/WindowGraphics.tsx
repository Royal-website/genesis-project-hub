import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function WindowGraphics() {
  return (
    <UniversalPageTemplate title="Window Graphics" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/window-graphics-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Window Graphics", path: "/window-graphics" }]}>
      <ContentSection title="Houston Window Graphics" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-window-graphics-300x225.jpg" imageAlt="custom window graphics">
        <p className="mb-4">Window graphics transform your storefront windows into powerful marketing tools. From simple lettering to full-coverage graphics, we help you maximize your window space.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
