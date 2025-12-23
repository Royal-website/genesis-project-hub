import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function DibondSigns() {
  return (
    <UniversalPageTemplate
      title="Dibond Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/dibond-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Dibond Signs", path: "/dibond-signs" },
      ]}
    >
      <ContentSection
        title="Houston Dibond Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-dibond-sign-300x225.jpg"
        imageAlt="custom dibond sign"
      >
        <p className="mb-4">
          Dibond signs are made from a composite material consisting of two thin aluminum sheets bonded to a solid polyethylene core. This unique construction makes Dibond signs incredibly durable, lightweight, and resistant to weather conditions.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we specialize in creating high-quality Dibond signs that are perfect for both indoor and outdoor applications. Whether you need signage for your storefront, trade show booth, or office interior, Dibond offers a sleek, professional appearance.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Durable & Weather-Resistant"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/outdoor-dibond-signage-300x225.jpg"
        imageAlt="outdoor dibond signage"
        imagePosition="left"
      >
        <p className="mb-4">
          One of the main advantages of Dibond signs is their exceptional durability. The aluminum exterior provides excellent resistance to corrosion, UV rays, and extreme weather conditions, making them ideal for outdoor use.
        </p>
        <p>
          Despite their strength, Dibond signs are surprisingly lightweight, making them easy to install and transport. This combination of durability and portability makes Dibond a popular choice for businesses looking for long-lasting signage solutions.
        </p>
      </ContentSection>

      <ContentSection
        title="Versatile Applications"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/dibond-interior-sign-300x225.jpg"
        imageAlt="dibond interior sign"
      >
        <p className="mb-4">
          Dibond signs can be used for a wide variety of applications, including building signs, directional signs, real estate signs, point-of-purchase displays, and more. Their flat, rigid surface provides an excellent canvas for high-quality graphics and text.
        </p>
        <p>
          Royal Signs & Awnings can customize your Dibond signs with full-color printing, cut lettering, or dimensional elements to create a truly unique and eye-catching display for your business.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Dibond Signs Consultation"
      >
        <p className="mb-4">
          Ready to invest in high-quality Dibond signage for your business? Royal Signs & Awnings is here to help you create durable, professional signs that make a lasting impression.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Dibond Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
