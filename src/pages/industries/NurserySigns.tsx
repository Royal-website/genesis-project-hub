import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function NurserySigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Nursery Signs", path: "/nursery-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Nursery Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Nursery-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Nursery Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/garden-center-signs-300x212.jpg"
        imageAlt="Garden Center Signs"
      >
        <p className="mb-4">
          Garden centers and plant nurseries need signage that's as vibrant and welcoming as the plants they sell. Royal Signs & Awnings creates beautiful, weather-resistant signs for nurseries that attract customers and guide them through your outdoor shopping experience.
        </p>
        <p className="mb-4">
          From eye-catching roadside signs to department markers and plant identification tags, we provide complete signage solutions for garden centers of all sizes. Our signs are built to withstand outdoor conditions while maintaining their visual appeal.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Outdoor Nursery Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-nursery-signs-300x212.jpg"
        imageAlt="Outdoor Nursery Signs"
      >
        <p className="mb-4">
          Attract drive-by traffic with prominent outdoor signage that's visible from the road. Monument signs, post-and-panel signs, and large format banners help customers find your nursery and draw them in to shop.
        </p>
        <p>
          Our outdoor signs are made with UV-resistant materials that won't fade in the Texas sun, ensuring your nursery looks great year-round.
        </p>
      </ContentSection>

      <ContentSection
        title="Department & Wayfinding Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/nursery-department-signs-300x212.jpg"
        imageAlt="Nursery Department Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Help customers navigate your nursery with clear department markers and wayfinding signs. Identify different plant sections, gardening supplies, and checkout areas to improve the shopping experience.
        </p>
        <p>
          We create durable outdoor-rated signs that withstand sun, rain, and daily use while maintaining their professional appearance.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
