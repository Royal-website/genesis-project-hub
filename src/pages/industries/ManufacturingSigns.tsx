import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ManufacturingSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Manufacturing Signs", path: "/manufacturing-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Manufacturing Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Manufacturing-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Manufacturing Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/manufacturing-building-signs-300x212.jpg"
        imageAlt="Manufacturing Building Signs"
      >
        <p className="mb-4">
          Manufacturing facilities have unique signage requirements that go beyond simple branding. Royal Signs & Awnings provides comprehensive signage solutions for manufacturing plants, warehouses, and industrial facilities that address safety, wayfinding, and corporate identity needs.
        </p>
        <p className="mb-4">
          From exterior building identification to interior safety signage, we create durable, code-compliant signs that withstand the demanding conditions of industrial environments while effectively communicating your message.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Safety & Compliance Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/osha-safety-signs-300x212.jpg"
        imageAlt="OSHA Safety Signs"
      >
        <p className="mb-4">
          Workplace safety is paramount in manufacturing environments. We provide OSHA-compliant safety signs, hazard warnings, PPE requirement signs, and emergency exit signage that keep your workers safe and your facility compliant with federal regulations.
        </p>
        <p>
          Our safety signs are made from durable materials that withstand industrial conditions and remain clearly visible throughout their service life.
        </p>
      </ContentSection>

      <ContentSection
        title="Warehouse Organization Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/warehouse-aisle-signs-300x212.jpg"
        imageAlt="Warehouse Aisle Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Improve efficiency in your warehouse with clear organizational signage. Aisle markers, zone identifiers, rack labels, and loading dock signs help workers navigate your facility quickly and accurately.
        </p>
        <p>
          We create comprehensive warehouse signage systems that improve productivity and reduce errors in your logistics operations.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
