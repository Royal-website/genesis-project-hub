import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function LobbySigns() {
  return (
    <UniversalPageTemplate
      title="Lobby Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/lobby-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Lobby Signs", path: "/lobby-signs" },
      ]}
    >
      <ContentSection
        title="Houston Lobby Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-lobby-sign-300x225.jpg"
        imageAlt="custom lobby sign"
      >
        <p className="mb-4">
          Lobby signs are often the first thing visitors see when they enter your facility. A well-designed lobby sign creates a strong first impression and reinforces your brand identity.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create custom lobby signs that reflect the professionalism and personality of your business. From dimensional letters to illuminated displays, we have the perfect solution.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Dimensional Lobby Letters"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/dimensional-lobby-letters-300x225.jpg"
        imageAlt="dimensional lobby letters"
        imagePosition="left"
      >
        <p className="mb-4">
          Dimensional letters add depth and sophistication to your lobby. Available in metal, acrylic, foam, and other materials, they can be customized to match your brand colors and style.
        </p>
        <p>
          We can add backlighting or halo lighting for extra impact, ensuring your lobby sign makes a lasting impression.
        </p>
      </ContentSection>

      <ContentSection
        title="Reception Area Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/reception-lobby-sign-300x225.jpg"
        imageAlt="reception lobby sign"
      >
        <p className="mb-4">
          Beyond your main lobby sign, we can create complementary signage for your entire reception area, including directories, wayfinding signs, and digital displays.
        </p>
        <p>
          A cohesive signage program enhances your professional image and improves the visitor experience.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Lobby Signs Consultation"
      >
        <p className="mb-4">
          Ready to make a great first impression with stunning lobby signage? Royal Signs & Awnings is here to help you create the perfect welcome for your visitors.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Lobby Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
