import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PylonSigns() {
  return (
    <UniversalPageTemplate
      title="Pylon Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/pylon-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pylon Signs", path: "/pylon-signs" },
      ]}
    >
      <ContentSection
        title="Houston Pylon Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/pylon-tenant-pole-outdoor-sign-e1532100213941-236x300.jpg"
        imageAlt="custom tenant pylon sign"
      >
        <p className="mb-4">
          Each business knows the value of great visibility, and what better way to get noticed by potential customers than with a good pylon sign right outside your doorstep? According to a study, pylon signs were deemed to have high visibility and increased sales by 15%.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we know the importance of investing in visibility. We specialize in delivering high-quality pylon signs tailored to suit your business identity and your budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Sign Boxes"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/Yardbird-Pylon-e1532099973129-225x300.jpg"
        imageAlt="pylon illuminated sign boxes"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings is out to take your brand visibility to a whole new level. We can help you get 24/7 exposure with illuminated road sign boxes.
        </p>
        <p>
          We can customize steel cabinets to your preferred shape and size. You can also choose either interchangeable sign faces or the more permanent channel letters.
        </p>
      </ContentSection>

      <ContentSection
        title="Affordable Tenant Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/custom-tenant-sign-300x225.jpg"
        imageAlt="custom tenant sign"
      >
        <p className="mb-4">
          If you don't need your pylon sign to light up in the evenings, you can actually save some money by getting yourself a non-illuminated pylon sign.
        </p>
        <p>
          Royal Signs & Awnings creates non-illuminated road signs that have steel frames with aluminum sides, and a custom-designed face mounted on one or multiple steel poles.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Pylon Signs Consultation"
      >
        <p className="mb-4">
          Regardless of which industry you're in, Royal Signs & Awnings is the perfect pylon sign provider for you. We've catered to the business needs of gas stations, hotels, restaurants, retail stores, malls, and many others.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Pylon Signs Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
