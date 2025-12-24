import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function MonumentSigns() {
  return (
    <UniversalPageTemplate
      title="Monument Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/monument-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Monument Signs", path: "/monument-signs" },
      ]}
    >
      <ContentSection
        title="Houston Monument Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-foam-monument-sign-300x183.jpg"
        imageAlt="custom foam monument sign"
      >
        <p className="mb-4">
          Monument signs are the most common type of signs you will see in the entrance of schools, churches, and other public facilities because they create a good impression on anyone who sees it.
        </p>
        <p className="mb-4">
          Monument signs are free-standing and usually made from stone, brick, marble, or metal. It also lists down all the information you need to know about the facility, as well as other key information you want to include.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Houston Monument Sign Specialist!
        </p>
      </ContentSection>

      <ContentSection
        title="An Impressive Entrance"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-monument-sign-300x224.jpg"
        imageAlt="custom monument sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Many businesses will benefit from monument signs, especially those who want to give a lasting impression to anyone who sees the sign. The sign also provides a sense of permanence for your business.
        </p>
        <p>
          These signs are often located at the entrance of the business space, and they are easy to read. It also does not require any other structures to support it because it is designed to stand on its own.
        </p>
      </ContentSection>

      <ContentSection
        title="Multi-Tenant Monument Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/Tenant-Monument-Sign-300x214.jpg"
        imageAlt="Tenant Monument Sign"
      >
        <p className="mb-4">
          Monument signs are often used for business parks, shopping centers, and multi-building facilities. The signs can be customized to feature all the different businesses and companies located in the center.
        </p>
        <p>
          We can put the information you want to display for people to see, creating a directory for visitors to easily find their destination.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Monument Sign Consultation"
      >
        <p className="mb-4">
          When it comes to signage of all shapes and sizes, you can not go wrong with Royal Signs & Awnings. Our Houston sign company can design the perfect signs for your business.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Houston Monument Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
