import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function MallSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Mall Signs", path: "/mall-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Mall Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Mall-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Mall Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/mall-directory-signs-300x212.jpg"
        imageAlt="Mall Directory Signs"
      >
        <p className="mb-4">
          Shopping malls and retail centers require comprehensive signage systems that guide customers, promote retailers, and create an engaging shopping experience. Royal Signs & Awnings provides complete mall signage solutions from exterior pylons to interior directories and individual store signs.
        </p>
        <p className="mb-4">
          Whether you're a mall property manager, retail tenant, or shopping center developer, we have the expertise and capabilities to deliver signage that meets your needs and exceeds expectations.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Tenant & Storefront Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/mall-storefront-signs-300x212.jpg"
        imageAlt="Mall Storefront Signs"
      >
        <p className="mb-4">
          Individual retailers within a mall need signage that attracts shoppers while meeting landlord specifications. We work with tenants and property managers to create storefront signs that stand out while maintaining consistency with the mall's design standards.
        </p>
        <p>
          From channel letters to illuminated cabinet signs, we help retail tenants make a strong impression on the shoppers walking by their storefronts.
        </p>
      </ContentSection>

      <ContentSection
        title="Wayfinding & Directory Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/wayfinding-signs-300x212.jpg"
        imageAlt="Wayfinding Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Help shoppers navigate your mall with professional wayfinding and directory signage. Clear, attractive directories and directional signs improve the customer experience and help shoppers find the stores and services they're looking for.
        </p>
        <p>
          We create comprehensive wayfinding systems including mall directories, department markers, restroom signs, and parking garage signage that work together to guide visitors throughout your property.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
