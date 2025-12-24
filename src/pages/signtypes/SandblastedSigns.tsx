import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function SandblastedSigns() {
  return (
    <UniversalPageTemplate
      title="Sandblasted Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/sandblasted-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sandblasted Signs", path: "/sandblasted-signs" },
      ]}
    >
      <ContentSection
        title="Houston Sandblasted Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-sandblasted-sign-300x225.jpg"
        imageAlt="custom sandblasted sign"
      >
        <p className="mb-4">
          Sandblasted signs offer a classic, elegant appearance with a three-dimensional carved effect. This traditional sign-making technique creates beautiful, durable signs that stand out with their handcrafted quality.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create stunning sandblasted signs using high-density urethane (HDU) and other materials that capture the timeless beauty of carved wood without the maintenance concerns.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Dimensional Carved Look"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/carved-sandblasted-sign-300x225.jpg"
        imageAlt="carved sandblasted sign"
        imagePosition="left"
      >
        <p className="mb-4">
          The sandblasting process creates raised letters and graphics with a textured background, giving your sign depth and dimension. This distinctive look is perfect for businesses seeking a traditional, upscale appearance.
        </p>
        <p>
          Our skilled craftsmen can create intricate designs, logos, and images that bring your vision to life.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable & Weather-Resistant"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/outdoor-sandblasted-sign-300x225.jpg"
        imageAlt="outdoor sandblasted sign"
      >
        <p className="mb-4">
          Our sandblasted signs are crafted from materials that resist rot, insects, and weathering. With proper finishing, they maintain their beauty for years with minimal maintenance.
        </p>
        <p>
          Perfect for storefronts, historic districts, residential communities, and businesses seeking a distinctive, premium appearance.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Sandblasted Signs Consultation"
      >
        <p className="mb-4">
          Ready to add classic elegance to your signage? Royal Signs & Awnings is here to help you create beautiful sandblasted signs that make a lasting impression.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
