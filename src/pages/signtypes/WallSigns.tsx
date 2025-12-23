import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function WallSigns() {
  return (
    <UniversalPageTemplate title="Wall Signs" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/wall-signs-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Wall Signs", path: "/wall-signs" }]}>
      <ContentSection title="Houston Wall Signs" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-wall-sign-300x225.jpg" imageAlt="custom wall sign">
        <p className="mb-4">Wall signs transform blank walls into branding opportunities. From vinyl graphics to dimensional letters to murals, we create impactful wall signage for indoor and outdoor applications.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
