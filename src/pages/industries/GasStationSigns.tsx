import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function GasStationSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Gas Station Signs", path: "/gas-station-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Gas Station Signs"
      heroImage="/images/industries/gas-station-signs/01-sign-company-01.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Gas Station Signs"
        image="/images/industries/gas-station-signs/04-sign-company-04.jpg"
        imageAlt="Illuminated Gas Station Signage"
      >
        <p className="mb-4">
          In the competitive petroleum retail industry, effective signage is crucial for attracting customers and communicating your brand identity. Gas station signs need to be visible from a distance, clearly display pricing information, and create a welcoming atmosphere that encourages customers to stop.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings specializes in creating high-impact gas station signage that meets all industry requirements while maximizing your brand visibility. From towering price signs to convenience store signage, we provide comprehensive solutions for all your signage needs.
        </p>
        <p className="mb-4">
          Our signs are built to withstand harsh outdoor conditions and provide years of reliable service. We use premium materials and the latest LED technology to create energy-efficient signs that look great day and night.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="High-Visibility Price Signs"
        image="/images/industries/gas-station-signs/05-sign-company-05.jpg"
        imageAlt="LED Price Sign"
      >
        <p className="mb-4">
          Your price sign is often the first thing customers notice about your gas station. A clear, well-lit price display can make the difference between a customer choosing your station or driving to a competitor. Royal Signs & Awnings creates high-visibility price signs that are easy to read from a distance and easy to update as prices change.
        </p>
        <p className="mb-4">
          We offer both manual and electronic price displays to suit your needs and budget. Our LED price signs provide brilliant illumination while reducing energy costs, and can be easily updated to reflect current prices.
        </p>
        <p>
          All our price signs are designed to meet local regulations and industry standards, ensuring compliance while maximizing visibility and impact.
        </p>
      </ContentSection>

      <ContentSection
        title="Brand Identity Signage"
        image="/images/industries/gas-station-signs/06-sign-company-06.jpg"
        imageAlt="Brand Canopy Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Whether you're an independent station or part of a major brand, your signage needs to clearly communicate your identity to customers. Royal Signs & Awnings works with gas station owners to create cohesive branding packages that include canopy signs, building signs, and directional signage.
        </p>
        <p className="mb-4">
          For branded stations, we ensure all signage meets corporate standards while maximizing local visibility. For independent stations, we help develop unique branding that sets you apart from the competition.
        </p>
        <p>
          Our canopy and fascia signs are designed to withstand high winds and severe weather, providing lasting brand visibility for your station.
        </p>
      </ContentSection>

      <ContentSection title="Convenience Store and Interior Signage">
        <p className="mb-4">
          Most modern gas stations include convenience stores that represent a significant portion of revenue. Effective interior signage helps customers find what they need quickly and promotes impulse purchases. Royal Signs & Awnings creates custom interior signage including department signs, promotional displays, and directional signs.
        </p>
        <p className="mb-4">
          We also provide digital menu boards and promotional displays that can be easily updated to reflect current promotions and specials.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation with a Gas Station Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
