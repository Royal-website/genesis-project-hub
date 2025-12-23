import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function DoorSigns() {
  return (
    <UniversalPageTemplate
      title="Door Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/door-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Door Signs", path: "/door-signs" },
      ]}
    >
      <ContentSection
        title="Houston Door Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-door-signage-300x225.jpg"
        imageAlt="custom door signage"
      >
        <p className="mb-4">
          Door signs are essential for any business or office environment. They help identify rooms, offices, and departments while providing important information to visitors and employees alike.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create professional door signs that are both functional and attractive. From simple name plates to ADA-compliant room identification signs, we offer a wide range of options to suit your needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Professional Office Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/office-door-sign-300x225.jpg"
        imageAlt="office door sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Our door signs are designed to complement your office décor while providing clear identification and wayfinding assistance. Whether you need signs for individual offices, conference rooms, or restrooms, we have the perfect solution.
        </p>
        <p>
          We offer a variety of materials including acrylic, metal, and wood to match your aesthetic preferences. Each sign can be customized with your company colors, logo, and specific text requirements.
        </p>
      </ContentSection>

      <ContentSection
        title="ADA-Compliant Door Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/ada-door-sign-300x225.jpg"
        imageAlt="ADA door sign"
      >
        <p className="mb-4">
          For businesses that need to comply with ADA regulations, Royal Signs & Awnings offers a full range of ADA-compliant door signs. These signs feature tactile lettering, Braille, and proper contrast to assist visually impaired individuals.
        </p>
        <p>
          Our ADA signs meet all federal and local requirements while still maintaining a professional and attractive appearance that matches your brand identity.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Door Signs Consultation"
      >
        <p className="mb-4">
          Ready to upgrade your office or facility with professional door signs? Royal Signs & Awnings is here to help you create functional and attractive signage that enhances your space.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Door Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
