import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function HangingSigns() {
  return (
    <UniversalPageTemplate
      title="Hanging Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/hanging-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Hanging Signs", path: "/hanging-signs" },
      ]}
    >
      <ContentSection
        title="Houston Hanging Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-hanging-sign-300x225.jpg"
        imageAlt="custom hanging sign"
      >
        <p className="mb-4">
          Hanging signs are a classic and effective way to capture attention and direct customers. Whether suspended from the ceiling, mounted on a bracket, or hung from a chain, these signs provide excellent visibility from a distance.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create custom hanging signs for retail stores, restaurants, offices, and more. Our hanging signs are designed to be both functional and attractive, enhancing your space while delivering your message.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Retail & Wayfinding Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/hanging-wayfinding-sign-300x225.jpg"
        imageAlt="hanging wayfinding sign"
        imagePosition="left"
      >
        <p className="mb-4">
          In retail environments, hanging signs help customers navigate and find what they're looking for. Department identifiers, promotional signs, and directional markers all benefit from being elevated above the floor.
        </p>
        <p>
          Our hanging signs can be customized to match your store's décor and branding, creating a cohesive shopping experience for your customers.
        </p>
      </ContentSection>

      <ContentSection
        title="Double-Sided & Illuminated Options"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/double-sided-hanging-sign-300x225.jpg"
        imageAlt="double-sided hanging sign"
      >
        <p className="mb-4">
          Hanging signs can be designed as single or double-sided, ensuring visibility from multiple directions. For added impact, we also offer illuminated hanging signs that stand out in any lighting condition.
        </p>
        <p>
          Royal Signs & Awnings can help you choose the right style and materials for your hanging sign project.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Hanging Signs Consultation"
      >
        <p className="mb-4">
          Ready to elevate your signage with custom hanging signs? Royal Signs & Awnings is here to help you create impactful displays that capture attention and guide your customers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Hanging Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
