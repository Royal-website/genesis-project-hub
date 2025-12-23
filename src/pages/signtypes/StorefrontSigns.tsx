import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function StorefrontSigns() {
  return (
    <UniversalPageTemplate
      title="Storefront Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/storefront-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Storefront Signs", path: "/storefront-signs" },
      ]}
    >
      <ContentSection
        title="Houston Storefront Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-storefront-sign-300x225.jpg"
        imageAlt="custom storefront sign"
      >
        <p className="mb-4">
          Your storefront sign is often the first thing customers notice about your business. A well-designed storefront sign attracts attention, communicates your brand identity, and invites customers inside.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create stunning storefront signs that make a powerful first impression and help your business stand out from the competition.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Channel Letter Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/channel-letter-storefront-300x225.jpg"
        imageAlt="channel letter storefront"
        imagePosition="left"
      >
        <p className="mb-4">
          Channel letters are one of the most popular storefront sign options. These dimensional letters can be illuminated or non-illuminated and are mounted directly to your building's facade.
        </p>
        <p>
          We offer front-lit, back-lit, and combination channel letters in various sizes, fonts, and colors.
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Storefront Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/illuminated-storefront-sign-300x225.jpg"
        imageAlt="illuminated storefront sign"
      >
        <p className="mb-4">
          Illuminated signs ensure your business is visible 24/7. Whether you choose LED channel letters, cabinet signs, or backlit awnings, lighted signage attracts customers day and night.
        </p>
        <p>
          Our illuminated signs are energy-efficient and designed for years of reliable operation.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Storefront Signs Consultation"
      >
        <p className="mb-4">
          Ready to make a great first impression with stunning storefront signage? Royal Signs & Awnings is here to help you create signs that attract customers and build your brand.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Storefront Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
