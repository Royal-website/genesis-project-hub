import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function WindowSigns() {
  return (
    <UniversalPageTemplate title="Window Signs" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/window-signs-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Window Signs", path: "/window-signs" }]}>
      <ContentSection title="Houston Window Signs" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-window-sign-300x225.jpg" imageAlt="custom window sign">
        <p className="mb-4">Window signs are an affordable and effective way to advertise your business. From vinyl lettering to neon signs to perforated window film, we offer many window signage options.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
