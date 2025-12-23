import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function OfficeSigns() {
  return (
    <UniversalPageTemplate
      title="Office Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/office-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Office Signs", path: "/office-signs" },
      ]}
    >
      <ContentSection
        title="Houston Office Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-office-sign-300x225.jpg"
        imageAlt="custom office sign"
      >
        <p className="mb-4">
          Office signs are essential for creating a professional environment and helping visitors navigate your space. From lobby displays to wayfinding systems, the right signage enhances your office's functionality and appearance.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create comprehensive office signage solutions that reinforce your brand identity and improve the visitor experience.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Wayfinding & Directories"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/office-directory-sign-300x225.jpg"
        imageAlt="office directory sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Help visitors find their way with clear wayfinding signs and directories. We create integrated signage systems that guide people through your facility efficiently.
        </p>
        <p>
          Our directory signs can be easily updated to accommodate tenant changes and organizational restructuring.
        </p>
      </ContentSection>

      <ContentSection
        title="ADA-Compliant Office Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/ada-office-sign-300x225.jpg"
        imageAlt="ADA office sign"
      >
        <p className="mb-4">
          Ensure your office meets accessibility requirements with ADA-compliant signage. We create room identification signs, restroom signs, and other required signage that meets all federal and local regulations.
        </p>
        <p>
          Our ADA signs feature tactile lettering and Braille while maintaining an attractive appearance.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Office Signs Consultation"
      >
        <p className="mb-4">
          Ready to upgrade your office environment with professional signage? Royal Signs & Awnings is here to help you create a cohesive signage program.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with an Office Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
