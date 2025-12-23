import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function LightedSigns() {
  return (
    <UniversalPageTemplate
      title="Lighted Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/lighted-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Lighted Signs", path: "/lighted-signs" },
      ]}
    >
      <ContentSection
        title="Houston Lighted Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-lighted-sign-300x225.jpg"
        imageAlt="custom lighted sign"
      >
        <p className="mb-4">
          Lighted signs ensure your business is visible 24/7, attracting customers day and night. Whether you choose LED, neon, or backlit options, illuminated signage makes a powerful statement.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create stunning lighted signs that enhance your visibility and reinforce your brand identity even after dark.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="LED & Neon Options"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/led-neon-sign-300x225.jpg"
        imageAlt="LED neon sign"
        imagePosition="left"
      >
        <p className="mb-4">
          We offer both LED and neon lighting options for your signs. LED provides energy-efficient, long-lasting illumination, while neon offers that classic, eye-catching glow.
        </p>
        <p>
          Our team can help you choose the right lighting solution based on your aesthetic preferences, energy requirements, and budget.
        </p>
      </ContentSection>

      <ContentSection
        title="Backlit & Halo-Lit Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/backlit-halo-sign-300x225.jpg"
        imageAlt="backlit halo sign"
      >
        <p className="mb-4">
          Backlit signs create a dramatic effect by illuminating the face of the sign, while halo-lit signs produce a soft glow around the letters for a sophisticated look.
        </p>
        <p>
          Both options create stunning visual effects that make your business stand out from the competition.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Lighted Signs Consultation"
      >
        <p className="mb-4">
          Ready to light up your business? Royal Signs & Awnings is here to help you create brilliant illuminated signage that shines day and night.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Lighted Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
