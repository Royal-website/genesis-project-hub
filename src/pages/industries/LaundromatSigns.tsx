import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function LaundromatSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Laundromat Signs", path: "/laundromat-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Laundromat Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Laundromat-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Laundromat Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/laundromat-lighted-signs-300x212.jpg"
        imageAlt="Laundromat Lighted Signs"
      >
        <p className="mb-4">
          Your laundromat serves an essential need in the community—make sure your signs reflect that. At Royal Signs & Awnings, we create eye-catching, durable laundromat signs that attract customers and build your brand. Whether you need outdoor storefront signs, interior wayfinding, or promotional displays, we deliver high-quality signage solutions.
        </p>
        <p className="mb-4">
          From bright, visible channel letters to illuminated cabinet signs that work 24/7, our laundromat signage options help your business stand out on busy streets. We understand that laundromats often operate extended hours, so visibility at night is crucial for attracting customers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Laundromat Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/channel-letter-laundromat-signs-300x212.jpg"
        imageAlt="Channel Letter Laundromat Signs"
      >
        <p className="mb-4">
          Laundromats often operate during early morning and late evening hours. Having illuminated signs ensures your business is visible to customers at all times. LED channel letters, backlit cabinet signs, and illuminated window graphics are all excellent options for 24/7 visibility.
        </p>
        <p>
          Royal Signs & Awnings specializes in energy-efficient LED signage that reduces your operating costs while maximizing visibility. Our illuminated signs are designed to withstand the elements and provide years of reliable service.
        </p>
      </ContentSection>

      <ContentSection
        title="Interior Laundromat Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/laundromat-interior-signs-300x212.jpg"
        imageAlt="Interior Laundromat Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Create a positive customer experience with professional interior signage. From machine instructions and pricing displays to safety signs and promotional materials, well-designed interior signs improve customer satisfaction and reduce questions.
        </p>
        <p>
          We create ADA-compliant restroom signs, clear wayfinding signage, and attractive promotional displays that help your laundromat run smoothly and look professional.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
