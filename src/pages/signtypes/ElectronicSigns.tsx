import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function ElectronicSigns() {
  return (
    <UniversalPageTemplate
      title="Electronic Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/electronic-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Electronic Signs", path: "/electronic-signs" },
      ]}
    >
      <ContentSection
        title="Houston Electronic Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-electronic-sign-300x225.jpg"
        imageAlt="custom electronic sign"
      >
        <p className="mb-4">
          Electronic signs are a powerful way to capture attention and communicate your message in real-time. These dynamic displays can showcase text, graphics, and animations that change according to your needs.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we specialize in electronic signage solutions that help businesses stand out and engage their audience effectively. Whether you need a simple scrolling message board or a full-color LED display, we have the expertise to deliver.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="LED Message Centers"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/led-message-center-300x225.jpg"
        imageAlt="LED message center"
        imagePosition="left"
      >
        <p className="mb-4">
          LED message centers allow you to display custom messages that can be easily updated from a computer or mobile device. Perfect for announcing promotions, events, or important information, these signs ensure your message is always current.
        </p>
        <p>
          Our LED message centers are available in various sizes and can be integrated into monument signs, pylon signs, or standalone displays.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Color Electronic Displays"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/full-color-electronic-display-300x225.jpg"
        imageAlt="full-color electronic display"
      >
        <p className="mb-4">
          For maximum visual impact, full-color electronic displays offer stunning graphics and video capabilities. These high-resolution screens can display vivid images, videos, and animations that capture attention day and night.
        </p>
        <p>
          Royal Signs & Awnings can help you choose the right display technology and create compelling content that engages your audience and drives results.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Electronic Signs Consultation"
      >
        <p className="mb-4">
          Ready to upgrade to electronic signage? Royal Signs & Awnings is here to help you create dynamic displays that capture attention and communicate your message effectively.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with an Electronic Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
