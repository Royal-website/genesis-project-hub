import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function InformationalSigns() {
  return (
    <UniversalPageTemplate
      title="Informational Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/informational-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Informational Signs", path: "/informational-signs" },
      ]}
    >
      <ContentSection
        title="Houston Informational Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-informational-sign-300x225.jpg"
        imageAlt="custom informational sign"
      >
        <p className="mb-4">
          Informational signs are essential for communicating important messages to your customers, visitors, and employees. From hours of operation to safety guidelines, these signs keep everyone informed.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create clear, professional informational signs that effectively convey your message while maintaining your brand identity.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Clear Communication"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/information-display-sign-300x225.jpg"
        imageAlt="information display sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Effective informational signs are designed for quick comprehension. We use clear typography, appropriate sizing, and strategic color choices to ensure your message is easily understood.
        </p>
        <p>
          Whether you need directory signs, policy notices, or instructional graphics, our team creates signs that communicate effectively.
        </p>
      </ContentSection>

      <ContentSection
        title="Versatile Applications"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/informational-signage-collection-300x225.jpg"
        imageAlt="informational signage collection"
      >
        <p className="mb-4">
          Informational signs serve many purposes including directories, maps, rules and regulations, hours of operation, and more. We can create signs for any informational need.
        </p>
        <p>
          Our signs are available in various materials and finishes to suit both indoor and outdoor applications.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Informational Signs Consultation"
      >
        <p className="mb-4">
          Ready to improve communication at your facility? Royal Signs & Awnings is here to help you create effective informational signage.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
