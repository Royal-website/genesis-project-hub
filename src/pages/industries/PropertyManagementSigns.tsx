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
      heroImage="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Property Management Signs"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/monument-signs-1.webp"
        imageAlt="Property Management Signs"
      >
        <p className="mb-4">
          Property management, with its broad scope and numerous activities, is a lot of work. From seeking clients, maintaining the property's appeal, and keeping your clients happy, you're going to need all the help you can get. The good news is that property management signs can help you with a whole lot of things and can even boost your bottom line…especially if they are designed and produced by a signage provider as accomplished as Royal Signs & Awnings.
        </p>
        <p className="mb-4">
          Looking for tenants or clients? We've got promotional signs, exterior signage, building signs, fascia signs, flag signs, and so many more tools that can help you promote your brand and attract your market. Want to maintain your property's sophisticated and organized appeal? Our informational, indoor, and directional signs come in a vast selection of sign materials.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Property Signs and Real Estate Signs"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/banner-sign-large-format-outdoor-300x169.jpg"
        imageAlt="Property Real Estate Signs"
      >
        <p className="mb-4">
          Here at Royal Signs & Awnings, our business is all about helping your business grow…we do that by providing you with effective signage to help you get more clients and more tenants. Whether you're displaying your real estate, advertising available spaces in your building, or announcing renovations, we are here to give you the tools you need.
        </p>
        <p>
          Royal Signs & Awnings has been in the sign industry for a long time and over the years, we've gathered the knowledge, experience, and technology to come up with property signs and real estate signs that are highly visible and highly effective to your target market.
        </p>
      </ContentSection>

      <ContentSection
        title="Maintaining Your Property's Organized Appeal"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/product-displays-300x176.jpg"
        imageAlt="Property Directional Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          One of the facets of property management is to maintain the overall appeal of the real estate and property. This includes keeping the entire area organized and at the same time consistent to branding.
        </p>
        <p>
          Royal Signs & Awnings can help you with this aspect of your business as well. We offer comprehensive wayfinding systems, ADA-compliant signage, and informational displays that keep your property looking professional and well-maintained.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
