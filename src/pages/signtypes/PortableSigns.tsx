import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PortableSigns() {
  return (
    <UniversalPageTemplate
      title="Portable Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/portable-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Portable Signs", path: "/portable-signs" },
      ]}
    >
      <ContentSection
        title="Houston Portable Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-portable-sign-300x225.jpg"
        imageAlt="custom portable sign"
      >
        <p className="mb-4">
          Portable signs offer flexibility and convenience for businesses that need to move their signage frequently. From A-frames to retractable banners, portable signs are perfect for events, promotions, and temporary locations.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create durable portable signs that are easy to transport and set up while maintaining a professional appearance.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="A-Frame & Sidewalk Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/a-frame-sidewalk-sign-300x225.jpg"
        imageAlt="A-frame sidewalk sign"
        imagePosition="left"
      >
        <p className="mb-4">
          A-frame signs are perfect for sidewalk advertising, directing foot traffic to your business. They can be easily moved and stored, and many feature changeable inserts for updating your message.
        </p>
        <p>
          We offer a variety of A-frame styles and sizes to suit your needs and budget.
        </p>
      </ContentSection>

      <ContentSection
        title="Retractable Banners"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/retractable-banner-stand-300x225.jpg"
        imageAlt="retractable banner stand"
      >
        <p className="mb-4">
          Retractable banner stands are the ultimate in portable signage convenience. They set up in seconds and retract into a compact base for easy transport and storage.
        </p>
        <p>
          Perfect for trade shows, presentations, and retail displays, retractable banners deliver high impact with minimal hassle.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Portable Signs Consultation"
      >
        <p className="mb-4">
          Ready to invest in versatile portable signage? Royal Signs & Awnings is here to help you create flexible displays that go wherever your business takes you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
