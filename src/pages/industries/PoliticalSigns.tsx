import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function PoliticalSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Political Signs", path: "/political-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Political Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Political-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Political Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/political-yard-signs-300x212.jpg"
        imageAlt="Political Yard Signs"
      >
        <p className="mb-4">
          Political campaigns require fast, affordable, and impactful signage to build name recognition and communicate your message to voters. Royal Signs & Awnings produces high-quality political signs with quick turnaround times to support your campaign at every level—from local elections to statewide races.
        </p>
        <p className="mb-4">
          We understand that timing is critical in political campaigns. Our efficient production process ensures you get the signs you need when you need them, without sacrificing quality or breaking your campaign budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Quote!
        </p>
      </ContentSection>

      <ContentSection
        title="Yard Signs & Banners"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/campaign-yard-signs-300x212.jpg"
        imageAlt="Campaign Yard Signs"
      >
        <p className="mb-4">
          Yard signs are the backbone of political campaigns. Our corrugated plastic yard signs are affordable, durable, and available in a variety of sizes. We also provide wire stakes and can print single or double-sided for maximum visibility.
        </p>
        <p>
          Large banners are perfect for campaign headquarters, rallies, and events. We offer quick production and competitive bulk pricing to meet your campaign's needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Vehicle & Event Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/campaign-vehicle-wraps-300x212.jpg"
        imageAlt="Campaign Vehicle Wraps"
        imagePosition="left"
      >
        <p className="mb-4">
          Turn your campaign vehicles into mobile billboards with vehicle magnets, wraps, and decals. Perfect for canvassing neighborhoods and attending community events, vehicle signage extends your reach wherever you go.
        </p>
        <p>
          We also create event signage including rally signs, podium signs, and step-and-repeat backdrops for press events and photo opportunities.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
