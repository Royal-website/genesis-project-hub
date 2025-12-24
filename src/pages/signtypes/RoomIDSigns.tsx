import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function RoomIDSigns() {
  return (
    <UniversalPageTemplate
      title="Room ID Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/room-id-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Room ID Signs", path: "/room-id-signs" },
      ]}
    >
      <ContentSection
        title="Houston Room ID Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-room-id-sign-300x225.jpg"
        imageAlt="custom room id sign"
      >
        <p className="mb-4">
          Room ID signs are essential for identifying spaces within your facility. From office numbers to conference room names, clear room identification improves navigation and creates a professional environment.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create custom room ID signs that match your décor while meeting ADA compliance requirements when needed.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="ADA-Compliant Room Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/ada-room-id-sign-300x225.jpg"
        imageAlt="ADA room id sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Many facilities require ADA-compliant room identification signs. Our ADA room signs feature tactile lettering, Grade 2 Braille, and proper contrast to assist visually impaired individuals.
        </p>
        <p>
          We ensure your room signs meet all federal and local accessibility requirements while maintaining an attractive appearance.
        </p>
      </ContentSection>

      <ContentSection
        title="Modular Signage Systems"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/modular-room-sign-300x225.jpg"
        imageAlt="modular room sign"
      >
        <p className="mb-4">
          For facilities that experience frequent changes, we offer modular room ID systems with changeable inserts. This allows you to update room assignments without replacing entire signs.
        </p>
        <p>
          Our modular systems maintain a consistent, professional appearance throughout your facility.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Room ID Signs Consultation"
      >
        <p className="mb-4">
          Ready to upgrade your facility with professional room ID signage? Royal Signs & Awnings is here to help you create a clear, cohesive wayfinding system.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
