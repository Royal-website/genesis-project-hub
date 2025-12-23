import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function LargeBanners() {
  return (
    <UniversalPageTemplate
      title="Large Banners"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/large-banners-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Large Banners", path: "/large-banners" },
      ]}
    >
      <ContentSection
        title="Houston Large Banners"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-large-banner-300x225.jpg"
        imageAlt="custom large banner"
      >
        <p className="mb-4">
          Large banners are perfect for making a big impression at events, grand openings, and promotional campaigns. Their size ensures your message is seen from a distance.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create high-quality large format banners that are durable, vibrant, and designed to capture attention.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Indoor & Outdoor Banners"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/outdoor-large-banner-300x225.jpg"
        imageAlt="outdoor large banner"
        imagePosition="left"
      >
        <p className="mb-4">
          We offer large banners suitable for both indoor and outdoor use. Our outdoor banners are printed on weather-resistant materials with UV-resistant inks to maintain their appearance.
        </p>
        <p>
          Indoor banners can be created on a variety of materials to match your event or promotional needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Custom Sizes & Designs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/large-format-banner-300x225.jpg"
        imageAlt="large format banner"
      >
        <p className="mb-4">
          Whether you need a banner for a building facade, a trade show backdrop, or a street-spanning display, we can create banners in virtually any size to meet your requirements.
        </p>
        <p>
          Our design team will work with you to create eye-catching graphics that effectively communicate your message.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Large Banners Consultation"
      >
        <p className="mb-4">
          Ready to make a big impact with large format banners? Royal Signs & Awnings is here to help you create stunning displays that get noticed.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
