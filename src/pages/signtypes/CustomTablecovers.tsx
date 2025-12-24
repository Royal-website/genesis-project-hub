import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CustomTablecovers() {
  return (
    <UniversalPageTemplate
      title="Custom Tablecovers"
      subtitle="Design | Production | Installation"
      heroImage="/images/signtypes/tablecovers/tradeshow-display.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Custom Tablecovers", path: "/custom-tablecovers" },
      ]}
    >
      <ContentSection
        title="Houston Custom Tablecovers"
        image="/images/signtypes/tablecovers/tradeshow-display.jpg"
        imageAlt="custom printed tablecloth"
      >
        <p className="mb-4">
          Custom tablecovers are a fantastic way to make your booth or table stand out at trade shows, events, and exhibitions. They provide a professional appearance while effectively displaying your brand, logo, and message.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create high-quality custom tablecovers that are durable, vibrant, and designed to make a lasting impression. Whether you need a fitted tablecloth, a draped cover, or a stretch fabric option, we have the perfect solution for your needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Professional Trade Show Displays"
        image="/images/signtypes/tablecovers/trade-show-table.jpg"
        imageAlt="trade show table display"
        imagePosition="left"
      >
        <p className="mb-4">
          A well-designed tablecover can transform an ordinary table into an eye-catching display that attracts potential customers and clients. Custom tablecovers are essential for creating a cohesive and professional look at trade shows, conferences, and promotional events.
        </p>
        <p>
          Royal Signs & Awnings offers full-color printing options that allow you to showcase your brand in vibrant detail. Our tablecovers are made from high-quality materials that are easy to clean and maintain.
        </p>
      </ContentSection>

      <ContentSection
        title="Versatile Design Options"
        image="/images/signtypes/tablecovers/holtkamp-graphics.jpg"
        imageAlt="custom table throw"
      >
        <p className="mb-4">
          We offer a variety of tablecover styles to suit your specific needs, including fitted covers, draped throws, and stretch fabric options. Each style provides a different look and feel, allowing you to choose the perfect option for your event.
        </p>
        <p>
          Our design team works closely with you to create a tablecover that perfectly represents your brand and meets your specifications. From simple logo prints to full graphic designs, we can bring your vision to life.
        </p>
      </ContentSection>

      <ContentSection
        title="Complete Trade Show Solutions"
        image="/images/signtypes/tablecovers/tradeshow-banner.jpg"
        imageAlt="tradeshow banner and display"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings provides complete trade show solutions beyond tablecovers. We can create matching banners, backdrops, and displays to ensure your booth has a cohesive and professional appearance.
        </p>
        <p>
          Our team understands the importance of making a strong impression at trade shows and events. We work with you to create a complete signage package that effectively communicates your brand message.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Custom Tablecover Consultation"
      >
        <p className="mb-4">
          Ready to elevate your trade show presence with custom tablecovers? Royal Signs & Awnings is here to help you create stunning displays that capture attention and communicate your brand message effectively.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Custom Tablecover Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
