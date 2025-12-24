import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ConstructionSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Construction Signs", path: "/construction-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Houston Construction Signs"
      heroImage="/images/industries/construction-signs/08-panel-wall-indoor-elevator-safety-1024x650.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Houston Construction Signs"
        image="/images/industries/construction-signs/06-safety-outdoor-aluminum-e1533669881919-300x190.jpg"
        imageAlt="custom aluminum safety sign"
      >
        <p className="mb-4">
          Do you need high-visibility signage to alert people of an on-going construction site? Royal Signs & Awnings fabricates the signage you need to keep your employees and others safe around the construction site!
        </p>
        <p className="mb-4">
          Most people who pass by a construction site know that danger can be found just about everywhere onsite, but sometimes it is hard to know what type of danger to be aware of or when a construction site is active. The signs you use have a significant impact on keeping everyone safe while on or near a construction zone.
        </p>
        <p className="mb-4">
          Construction signs can range from the high-visibility orange vinyl signs that alert you to ongoing construction, to the caution blasting zone signs you see in larger construction zones. A poorly crafted or low-visibility signage is as dangerous as the construction zone itself. Royal Signs & Awnings crafts the signage you need to ensure that everyone is informed of possible dangers, ultimately reducing the chances of an accident occurring.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation with a Construction Sign Specialist!
        </p>
      </ContentSection>

      <ContentSection
        title="High-Visibility Safety Signs"
        image="/images/industries/construction-signs/04-safety-floor-vinyl-graphics-300x220.jpg"
        imageAlt="Custom safety floor graphics"
      >
        <p className="mb-4">
          Personal protective equipment is important and required while in any construction zone, whether that is a high-visibility hard hat or vest. The signage you use to inform everyone of a construction zone equally as important. Whether you are operating a construction zone on a highway or in a quiet part of town, high-visibility signs grab the attention of even the most distracted driver, letting them know that caution needs to be exercised.
        </p>
        <p>
          Royal Signs & Awnings creates signs to alert and inform whether that is a mowing zone, building repair or construction, new development, or road repair. When it comes to keeping people safe, make sure that the signs you use are informative, impactful and eye-catching.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Signage Shop"
        image="/images/industries/construction-signs/05-safety-floor-vinyl-graphics.jpg"
        imageAlt="custom safety sign for elevator"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings is your full-service construction sign provider, handling every aspect of safety sign design, production, and installation. Our local sign and graphic experts will help you understand what signs can best be utilized to support your safety goals, and can help to ensure you are legally protected by providing sufficiently visible signage.
        </p>
        <p>
          Whether you only need one aspect of our assistance, or need help across the board, we are here to support you in getting the signage you need to protect your employees, contractors, inspectors, and any other site visitors.
        </p>
      </ContentSection>

      <ContentSection title="Free Construction Signs Consultation">
        <p className="mb-4">
          Royal Signs & Awnings can help you determine exactly what signs your construction business needs to keep employees and visitors safe and operations running smoothly. Whether you only need construction sign installation, production, or need help throughout the process, we are excited for the opportunity to create impactful, functional signage for you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation with a Construction Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
