import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function SignRepairs() {
  return (
    <UniversalPageTemplate
      title="Sign Repairs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/sign-repairs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sign Repairs", path: "/sign-repairs" },
      ]}
    >
      <ContentSection
        title="Houston Sign Repairs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/sign-repair-service-300x225.jpg"
        imageAlt="sign repair service"
      >
        <p className="mb-4">
          Damaged or malfunctioning signs can hurt your business image and visibility. Our sign repair services restore your signage to like-new condition, ensuring your brand continues to make a positive impression.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we repair all types of signs including illuminated, non-illuminated, electronic, and more. Our experienced technicians diagnose and fix problems quickly and efficiently.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Lighting Repairs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/sign-lighting-repair-300x225.jpg"
        imageAlt="sign lighting repair"
        imagePosition="left"
      >
        <p className="mb-4">
          Burnt-out bulbs, faulty transformers, and wiring issues can leave your illuminated sign dark. We repair LED, neon, and fluorescent lighting systems to restore your sign's visibility.
        </p>
        <p>
          Our technicians carry common replacement parts to complete many repairs on the first visit.
        </p>
      </ContentSection>

      <ContentSection
        title="Storm & Vandalism Damage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/sign-damage-repair-300x225.jpg"
        imageAlt="sign damage repair"
      >
        <p className="mb-4">
          When storms or vandalism damage your signs, we provide prompt repair services to minimize business disruption. We work with insurance companies to streamline the claims process.
        </p>
        <p>
          From panel replacements to structural repairs, we handle all aspects of sign restoration.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Sign Repair Consultation"
      >
        <p className="mb-4">
          Is your sign in need of repair? Royal Signs & Awnings is here to help you restore your signage to optimal condition quickly and affordably.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Sign Repair Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
