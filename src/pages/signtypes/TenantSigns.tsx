import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function TenantSigns() {
  return (
    <UniversalPageTemplate
      title="Tenant Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/tenant-signs-header.jpg"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Tenant Signs", path: "/tenant-signs" }]}
    >
      <ContentSection title="Houston Tenant Signs" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-tenant-sign-300x225.jpg" imageAlt="custom tenant sign">
        <p className="mb-4">Tenant signs help identify multiple businesses within shopping centers, office buildings, and business parks. Professional tenant signage creates a cohesive look while giving each business visibility.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Free Tenant Signs Consultation">
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
