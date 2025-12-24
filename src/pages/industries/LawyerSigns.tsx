import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function LawyerSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Lawyer Signs", path: "/lawyer-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Lawyer Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-custom-metal-attorney-at-law-building-sign-300x162.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Lawyer Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-custom-metal-attorney-at-law-building-sign-300x162.jpg"
        imageAlt="Lawyer Signs"
      >
        <p className="mb-4">
          Contrary to what people may believe, lawyer signs work very differently from many business or commercial signs. While most business signs aim to catch the attention of passing pedestrians/drivers and convince them to purchase or use a particular brand, product, or service, lawyer signs reach out to a more specialized market. That market typically already needs legal services, they just need to know that your legal services is what they're looking for.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is a full-service signs provider that specializes in lawyer signs. By letting us take care of your firm's signage needs, you'll have more time and energy to spend on handling client cases and running your office. We are equipped with the knowledge, expertise, and technology to deliver the signs that meet your needs, suit your brand, and fit your budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Attractive and Informative Outdoor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-monument-attorney-at-law-signage-1.jpg"
        imageAlt="Law Firm Outdoor Signs"
      >
        <p className="mb-4">
          Your law office's goal isn't to convince people to step inside and take a look at what they can buy. Your target market is primarily the people who are looking for legal services and would contact your law firm if they knew that it exists, it's open, and it can cater to their legal needs. And sometimes, a small door sign just won't do the job.
        </p>
        <p>
          Royal Signs & Awnings designs, fabricates, customizes, and installs all sorts of exterior signs for your law firm. If you're looking to have a more permanent appeal, we have pole signs, monument signs, and pylon signs for you. We also do hanging signs, fascia signs, dimensional signs, and channel letters that are customized to your branding.
        </p>
      </ContentSection>

      <ContentSection
        title="Privacy Film for Your Windows and Glass Walls"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/01/dimensional-letters-mall-storefront-exterior-building-retail-300x169.jpg"
        imageAlt="Law Office Privacy Film"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings has successfully worked with many law firms to provide privacy solutions for their offices. Privacy film is an excellent way to maintain confidentiality while still allowing natural light into your space.
        </p>
        <p>
          We offer a variety of privacy film options including frosted, etched glass, and decorative patterns that can incorporate your firm's branding while providing the privacy your clients expect.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
