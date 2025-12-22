import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function RealEstateSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Real Estate Signs", path: "/real-estate-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Real Estate Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Real-Estate-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Real Estate Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/real-estate-yard-signs-300x212.jpg"
        imageAlt="Real Estate Yard Signs"
      >
        <p className="mb-4">
          In the competitive Houston real estate market, professional signage helps you stand out and sell properties faster. Royal Signs & Awnings creates high-quality real estate signs for agents, brokers, and developers that build your brand and attract buyers and sellers.
        </p>
        <p className="mb-4">
          From yard signs to commercial property displays, we provide durable, attractive signage that withstands the Texas elements while making your listings impossible to miss.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Quote!
        </p>
      </ContentSection>

      <ContentSection
        title="For Sale & Open House Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/for-sale-signs-300x212.jpg"
        imageAlt="For Sale Signs"
      >
        <p className="mb-4">
          Professional For Sale signs and Open House directionals are essential tools for real estate professionals. We offer a variety of styles including post-and-panel signs, A-frames, and directional arrows to help buyers find your listings.
        </p>
        <p>
          Our signs are printed on durable materials with weather-resistant inks, ensuring they look professional listing after listing.
        </p>
      </ContentSection>

      <ContentSection
        title="Commercial & Development Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/commercial-property-signs-300x212.jpg"
        imageAlt="Commercial Property Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Commercial properties and new developments require larger, more impactful signage. We create property marketing signs, development announcements, and leasing displays that attract attention from street traffic.
        </p>
        <p>
          From temporary construction banners to permanent monument signs, we support commercial real estate professionals at every stage of the project.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
