import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function DigitalSigns() {
  return (
    <UniversalPageTemplate
      title="Digital Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/digital-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Digital Signs", path: "/digital-signs" },
      ]}
    >
      <ContentSection
        title="Houston Digital Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-digital-signage-300x225.jpg"
        imageAlt="custom digital signage"
      >
        <p className="mb-4">
          Digital signs offer a dynamic and engaging way to communicate with your customers. Unlike traditional static signs, digital signage allows you to display changing content, including images, videos, and real-time information.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we provide comprehensive digital signage solutions that help businesses capture attention and deliver their message effectively. From menu boards to promotional displays, we have the expertise to create the perfect digital signage system for your needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Dynamic Content Display"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/digital-menu-board-300x225.jpg"
        imageAlt="digital menu board"
        imagePosition="left"
      >
        <p className="mb-4">
          One of the biggest advantages of digital signs is the ability to update content quickly and easily. You can change your message in real-time, display time-sensitive promotions, or rotate through multiple advertisements throughout the day.
        </p>
        <p>
          This flexibility makes digital signage ideal for restaurants, retail stores, hotels, and other businesses that need to communicate changing information to their customers.
        </p>
      </ContentSection>

      <ContentSection
        title="Indoor & Outdoor Solutions"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/outdoor-digital-display-300x225.jpg"
        imageAlt="outdoor digital display"
      >
        <p className="mb-4">
          Royal Signs & Awnings offers both indoor and outdoor digital signage solutions. Our outdoor displays are designed to be weather-resistant and highly visible, even in bright sunlight. Indoor digital signs can be customized to fit any space and aesthetic.
        </p>
        <p>
          Whether you need a single screen or a network of displays, we can design and install a digital signage system that meets your specific requirements.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Digital Signs Consultation"
      >
        <p className="mb-4">
          Ready to take your business communication to the next level with digital signage? Royal Signs & Awnings is here to help you create engaging, dynamic displays that capture attention and drive results.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Digital Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
