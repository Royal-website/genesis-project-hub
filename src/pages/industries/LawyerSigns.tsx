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
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Lawyer-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Lawyer Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/law-office-lobby-signs-300x212.jpg"
        imageAlt="Law Office Lobby Signs"
      >
        <p className="mb-4">
          First impressions matter in the legal profession. Royal Signs & Awnings creates sophisticated, professional signs for law offices that convey trust, credibility, and expertise. From elegant lobby signs to prominent exterior displays, we help law firms establish their presence and attract clients.
        </p>
        <p className="mb-4">
          Our lawyer signage solutions are designed to reflect the professionalism and authority that clients expect from their legal representation. We work with solo practitioners, small firms, and large legal practices to create signage that matches their brand identity.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Professional Lobby Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/dimensional-lobby-signs-300x212.jpg"
        imageAlt="Dimensional Lobby Signs"
      >
        <p className="mb-4">
          Your lobby sign is often the first thing clients see when they enter your office. Make a strong impression with dimensional letters, metal logos, or illuminated displays that showcase your firm's name and credentials in the most professional light.
        </p>
        <p>
          We offer a variety of materials including brushed aluminum, brass, acrylic, and wood to match your office décor and brand aesthetic. Our expert installation ensures a flawless finish that reflects the quality of your legal services.
        </p>
      </ContentSection>

      <ContentSection
        title="ADA Compliant Office Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/ada-office-signs-300x212.jpg"
        imageAlt="ADA Compliant Office Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Ensure your law office meets all accessibility requirements with ADA-compliant signage. We create professional room identification signs, directory signs, and wayfinding signs that meet federal requirements while maintaining your firm's sophisticated image.
        </p>
        <p>
          Our team is knowledgeable about ADA signage requirements and can help you select signs that are both compliant and aesthetically consistent with your office design.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
