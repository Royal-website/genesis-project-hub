import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function NewBusinessSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "New Business Signs", path: "/new-business-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="New Business Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/New-Business-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="New Business Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/new-business-storefront-signs-300x212.jpg"
        imageAlt="New Business Storefront Signs"
      >
        <p className="mb-4">
          Congratulations on your new business! Your signage is one of the most important investments you'll make in building your brand and attracting customers. Royal Signs & Awnings helps new businesses make a strong first impression with professional, eye-catching signs that set you apart from the competition.
        </p>
        <p className="mb-4">
          We understand the unique challenges of starting a new business, including budget constraints and tight timelines. Our team works with you to create effective signage solutions that maximize your visibility without breaking the bank.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Essential Storefront Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/storefront-channel-letters-300x212.jpg"
        imageAlt="Storefront Channel Letters"
      >
        <p className="mb-4">
          Your storefront sign is your most important marketing tool—it works for you 24/7, attracting customers and building brand recognition. Whether you choose channel letters, cabinet signs, or dimensional letters, we'll create a storefront sign that makes your new business impossible to miss.
        </p>
        <p>
          We also help navigate sign permits and landlord requirements, taking the stress out of getting your business opened and ready for customers.
        </p>
      </ContentSection>

      <ContentSection
        title="Grand Opening Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/grand-opening-banners-300x212.jpg"
        imageAlt="Grand Opening Banners"
        imagePosition="left"
      >
        <p className="mb-4">
          Make your grand opening a success with attention-grabbing promotional signage. Banners, flags, A-frame signs, and window graphics create excitement and draw customers to your new location.
        </p>
        <p>
          Our quick turnaround times ensure you have the promotional materials you need when opening day arrives. Let us help you make a splash with your grand opening!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
