import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function WayfindingSigns() {
  return (
    <UniversalPageTemplate title="Wayfinding Signs" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/wayfinding-signs-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Wayfinding Signs", path: "/wayfinding-signs" }]}>
      <ContentSection title="Houston Wayfinding Signs" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-wayfinding-sign-300x225.jpg" imageAlt="custom wayfinding sign">
        <p className="mb-4">Wayfinding signs help visitors navigate your facility with ease. From directories to directional signs, we create intuitive wayfinding systems that enhance the visitor experience.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
