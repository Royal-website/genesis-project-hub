import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function HighRiseSigns() {
  return (
    <UniversalPageTemplate
      title="High Rise Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/high-rise-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "High Rise Signs", path: "/high-rise-signs" },
      ]}
    >
      <ContentSection
        title="Houston High Rise Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-high-rise-sign-300x225.jpg"
        imageAlt="custom high rise sign"
      >
        <p className="mb-4">
          High rise signs are essential for businesses located in tall buildings or skyscrapers. These large-scale signs ensure your brand is visible from great distances, making a powerful statement in the city skyline.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we specialize in designing, fabricating, and installing high rise signage that meets all safety requirements while delivering maximum visual impact. Our experienced team handles projects of all sizes.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Maximum Visibility"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/illuminated-high-rise-sign-300x225.jpg"
        imageAlt="illuminated high rise sign"
        imagePosition="left"
      >
        <p className="mb-4">
          High rise signs provide unparalleled visibility for your business. Whether illuminated or non-illuminated, these signs can be seen from miles away, ensuring your brand stands out in competitive urban environments.
        </p>
        <p>
          Our high rise signs are designed to withstand extreme weather conditions and are built with durable materials that maintain their appearance for years.
        </p>
      </ContentSection>

      <ContentSection
        title="Professional Installation"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/high-rise-sign-installation-300x225.jpg"
        imageAlt="high rise sign installation"
      >
        <p className="mb-4">
          Installing signs on high rise buildings requires specialized equipment and expertise. Royal Signs & Awnings has the experience and equipment necessary to safely install signs at any height.
        </p>
        <p>
          We handle all aspects of the installation process, including permits, structural engineering, and coordination with building management.
        </p>
      </ContentSection>

      <ContentSection
        title="Free High Rise Signs Consultation"
      >
        <p className="mb-4">
          Ready to make your business visible from across the city? Royal Signs & Awnings is here to help you create stunning high rise signage that elevates your brand.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a High Rise Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
