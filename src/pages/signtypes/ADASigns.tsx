import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function ADASigns() {
  return (
    <UniversalPageTemplate
      title="ADA Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/ADA-2-300x194.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "ADA Signs", path: "/ada-signs" },
      ]}
    >
      <ContentSection
        title="Houston ADA Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/ADA-2-300x194.jpg"
        imageAlt="ADA Compliant Signage"
      >
        <p className="mb-4">Experienced with creating ADA signs compliant with the Americans with Disabilities Act of 1990 (ADA) Standards for Accessible Design, Royal Signs & Awnings is a trusted manufacturer, supplier, and installer of high-quality ADA signs that meet the needs of your business as well as the requirements of the law.</p>
        <p className="mb-4">Whether you need signs with visual characters, tactile characters, and/or braille, you can count on our team of signage experts to help your establishment comply with the set regulations.</p>
        <p>The US Census Bureau states that as of the end of 2017, 13.3% of the American population has some form of disability. We at Royal Signs & Awnings understand the huge positive impact that ADA signs make in the community, and we will partner with you to make life a lot easier for your customers with disabilities.</p>
      </ContentSection>

      <ContentSection
        title="Visually Impaired Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/acrylic-indoor-lobby-wayfinding-300x198.jpg"
        imageAlt="Custom acrylic wayfinding sign"
        imagePosition="left"
      >
        <p className="mb-4">Because it's required to have high-quality indoor signs that conform to the standards set by the ADA, Royal Signs & Awnings makes sure that you are equipped with ADA-compliant wayfinding signs and room identification signs. This helps customers and visitors with disabilities navigate through your building safely and comfortably.</p>
        <p className="mb-4">Since more than 2.5 million Americans are struggling with some form of visual impairment, we make signs that are visible and easy to read. One way is by utilizing high contrast ADA signage. By offering a wide variety of colors, materials, fonts, and design elements to choose from, we also help you keep your brand identity cohesive.</p>
        <p>It is our goal to help you give your customers a safe, convenient, and pleasant experience as they do business with you.</p>
      </ContentSection>

      <ContentSection
        title="Legally Compliant Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/Ada-accessibility-indoor-signs-1-300x225.jpg"
        imageAlt="Custom ADA room ID signage"
      >
        <p className="mb-4">In some states, a violation of accessibility requirements is a civil rights violation and can result in thousands of dollars in fines. If your business signs are noncompliant, you could fail inspections and be refused a certificate of occupancy. Here at Royal Signs & Awnings, we protect our clients from the long arm of the law with legally compliant business signage.</p>
        <p className="mb-4">The ADA Standards for Accessible Design does not just cover the size, design, and tactile copy of signs…it also covers font usage, character size, color contrast, location, mounting height, etc.</p>
        <p>ADA signs are quite a challenge and not all sign providers are up for it. But we are. As experts in the ADA sign-making industry, Royal Signs & Awnings assures you that we can deliver ADA signage that complies with the highly specific standards set by the government.</p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-sign-install-fabrication-300x169.jpg"
        imageAlt="Custom Sign Production"
        imagePosition="left"
      >
        <p className="mb-4">Here at Royal Signs & Awnings, we don't just produce ADA signs for you, we also guide you through every step of the sign-making process. We make sure that we share our signage expertise with you from design to choice of materials, production, placement, and installation.</p>
        <p>Royal Signs & Awnings is fully aware that for Americans with disabilities, signs that are meticulously designed, crafted, and installed can make a huge difference. We want to partner with you in making that difference.</p>
      </ContentSection>

      <ContentSection title="Free ADA Signs Consultation">
        <p className="mb-4">When it comes to matters as serious as ADA compliance, you shouldn't settle for generic, run-of-the-mill business signs. It's important to choose a sign provider that knows the ins and outs of ADA sign standards and requirements. Royal Signs & Awnings is exactly that. Let's talk about your business signage needs and the many solutions we can offer you.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free ADA Signs Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
