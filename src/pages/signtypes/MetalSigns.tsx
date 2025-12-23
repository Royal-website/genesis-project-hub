import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function MetalSigns() {
  return (
    <UniversalPageTemplate
      title="Metal Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/metal-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Metal Signs", path: "/metal-signs" },
      ]}
    >
      <ContentSection
        title="Houston Metal Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-metal-sign-300x225.jpg"
        imageAlt="custom metal sign"
      >
        <p className="mb-4">
          Metal signs offer a premium, professional appearance that stands the test of time. Their durability makes them ideal for both indoor and outdoor applications where longevity is important.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we fabricate custom metal signs from aluminum, stainless steel, brass, copper, and other metals to create signage that reflects the quality of your business.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Aluminum Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/aluminum-sign-300x225.jpg"
        imageAlt="aluminum sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Aluminum is the most popular choice for metal signs due to its lightweight, rust-resistant properties and excellent durability. It can be painted, anodized, or finished in various ways.
        </p>
        <p>
          We offer both flat aluminum signs and dimensional aluminum letters for a variety of applications.
        </p>
      </ContentSection>

      <ContentSection
        title="Stainless Steel & Brass"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/stainless-steel-sign-300x225.jpg"
        imageAlt="stainless steel sign"
      >
        <p className="mb-4">
          For a more upscale appearance, stainless steel and brass signs convey sophistication and permanence. These materials are often used for lobby signs, building directories, and professional nameplates.
        </p>
        <p>
          Royal Signs & Awnings can create custom metal signs in virtually any finish to match your branding.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Metal Signs Consultation"
      >
        <p className="mb-4">
          Ready to invest in durable, professional metal signage? Royal Signs & Awnings is here to help you create high-quality metal signs that last.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Metal Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
