import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function LawyerSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Lawyer Signs", path: "/lawyer-signs" }];
  return (
    <UniversalPageTemplate title="Lawyer Signs" heroImage="/images/industries/lawyer-signs/08-indoo-acrylic-lobby-dimensional-lanzone-signs-300x225.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Lawyer Signs" image="/images/industries/lawyer-signs/04-frosted-privacy-film-window-graphics-300x225.jpg" imageAlt="Lawyer Signs">
        <p className="mb-4">Lawyer signs work very differently from many business or commercial signs. Royal Signs & Awnings is a full-service signs provider that specializes in lawyer signs.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Attractive and Informative Outdoor Signs" image="/images/industries/lawyer-signs/05-frosted-privacy-film-window-graphics.jpg" imageAlt="Law Firm Outdoor Signs">
        <p>Royal Signs & Awnings designs, fabricates, customizes, and installs all sorts of exterior signs for your law firm including pole signs, monument signs, and pylon signs.</p>
      </ContentSection>
      <ContentSection title="Privacy Film for Your Windows and Glass Walls" image="/images/industries/lawyer-signs/06-vinyl-wall-mural-indoor-install-225x300.jpg" imageAlt="Law Office Privacy Film" imagePosition="left">
        <p>Royal Signs & Awnings has successfully worked with many law firms to provide privacy solutions for their offices.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
