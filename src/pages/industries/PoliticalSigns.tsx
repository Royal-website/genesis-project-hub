import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function PoliticalSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Political Signs", path: "/political-signs" }];
  return (
    <UniversalPageTemplate title="Political Signs" heroImage="/images/industries/political-signs/06-outdoor-attractive-kim-stewart-yard-sign-1024x682.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="Political Signs" image="/images/industries/political-signs/04-full-service-sign-company-graphic-designer-300x214.jpg" imageAlt="Political Signs">
        <p className="mb-4">Political signs are the subject of debates during campaign season. If you want your signs to be impactful and effective, the best idea would be to trust with an established sign provider like Royal Signs & Awnings.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Affordable Campaign Signage" image="/images/industries/political-signs/07-outdoor-attractive-kim-stewart-yard-sign-300x200.jpg" imageAlt="Campaign Yard Signs">
        <p>Yard signs, also known as coroplast or bandit signs, are one of the most common forms of signage used to garner or display support for a political candidate.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
