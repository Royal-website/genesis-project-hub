import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function PropertyManagementSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Property Management Signs", path: "/property-management-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Property Management Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Property-Management-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Property Management Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/apartment-complex-signs-300x212.jpg"
        imageAlt="Apartment Complex Signs"
      >
        <p className="mb-4">
          Property management companies need signage that works hard—attracting tenants, directing visitors, and maintaining property value. Royal Signs & Awnings provides comprehensive signage solutions for apartment complexes, commercial properties, and HOA communities that enhance your properties and simplify management.
        </p>
        <p className="mb-4">
          We work with property managers across the Houston area to create consistent, professional signage that reflects well on your properties and makes a positive impression on current and prospective tenants.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Property Entrance Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/property-monument-signs-300x212.jpg"
        imageAlt="Property Monument Signs"
      >
        <p className="mb-4">
          Create a strong first impression with professional entrance and monument signs. Our property entrance signs are designed to attract quality tenants and convey the value of your property from the moment visitors arrive.
        </p>
        <p>
          We offer a range of styles from traditional monument signs to modern architectural displays, and we can match your property's aesthetic and branding.
        </p>
      </ContentSection>

      <ContentSection
        title="Leasing & Wayfinding Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/leasing-office-signs-300x212.jpg"
        imageAlt="Leasing Office Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Help prospective tenants find your leasing office and navigate your property with professional wayfinding signage. Clear directional signs, building identification, and amenity signage improve the tenant experience and reduce calls to your office.
        </p>
        <p>
          We also create "Now Leasing" banners, promotional displays, and window graphics to support your leasing efforts.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
