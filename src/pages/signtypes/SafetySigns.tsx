import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function SafetySigns() {
  return (
    <UniversalPageTemplate
      title="Safety Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/safety-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Safety Signs", path: "/safety-signs" },
      ]}
    >
      <ContentSection
        title="Houston Safety Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-safety-sign-300x225.jpg"
        imageAlt="custom safety sign"
      >
        <p className="mb-4">
          Safety signs are critical for protecting employees, customers, and visitors. Clear, visible safety signage helps prevent accidents and ensures compliance with OSHA and other regulatory requirements.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create comprehensive safety signage solutions that meet all applicable standards while effectively communicating important safety information.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="OSHA-Compliant Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/osha-safety-sign-300x225.jpg"
        imageAlt="OSHA safety sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Our safety signs comply with OSHA requirements and ANSI standards. We use proper colors, symbols, and wording to ensure your signs meet regulatory requirements.
        </p>
        <p>
          From danger and warning signs to caution and notice signs, we cover all safety sign categories.
        </p>
      </ContentSection>

      <ContentSection
        title="Custom Safety Solutions"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-safety-signage-300x225.jpg"
        imageAlt="custom safety signage"
      >
        <p className="mb-4">
          Beyond standard safety signs, we create custom safety signage tailored to your specific workplace hazards and requirements. This includes bilingual signs, pictogram-based signs, and industry-specific signage.
        </p>
        <p>
          We can also create floor markings, pipe labels, and other safety identification products.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Safety Signs Consultation"
      >
        <p className="mb-4">
          Ready to improve workplace safety with effective signage? Royal Signs & Awnings is here to help you protect your people and maintain compliance.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Safety Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
