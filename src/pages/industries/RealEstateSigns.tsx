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
        title="Houston Real Estate Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/real-estate-signs-300x212.jpg"
        imageAlt="Real Estate Signs"
      >
        <p className="mb-4">
          Are you looking for an attractive, impactful way to advertise a home, business, or land for sale? Royal Signs & Awnings will craft the perfect real estate signs to help you attract more buyers and sellers.
        </p>
        <p className="mb-4">
          Very few businesses deal with the fierce competition that the real estate business does. With the constant changes to the real estate landscape, staying competitive is more difficult than ever. It is even more important to appeal to prospective customers, whether they are in the market for a house, business, or land.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Custom Real Estate Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/custom-real-estate-signs-300x212.jpg"
        imageAlt="Custom Real Estate Signs"
      >
        <p className="mb-4">
          The most common signage solution utilized by real estate agents is a yard sign. These signs provide prospective clients with the information they need regarding the listing agent, their contact information and often a desirable feature. Like any business, the signage you choose has a significant impact on a customer's first impression.
        </p>
        <p>
          A custom made sign by Royal Signs & Awnings creates the impact you want to make the sales you need. We custom fabricate all of our signage solutions to match your needs and goals. A custom, professionally made sign tells your customers about who you are as a person and about the property you are selling.
        </p>
      </ContentSection>

      <ContentSection
        title="Real Estate Brochure Holders"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/real-estate-brochure-holders-300x212.jpg"
        imageAlt="Real Estate Brochure Holders"
        imagePosition="left"
      >
        <p className="mb-4">
          Have you driven through a neighborhood looking for homes for sale, and wanted to know more about a home, but didn't look forward to calling the listing agent for fear of an over-aggressive sales pitch? This is a typical experience among many prospective clients.
        </p>
        <p>
          That's where brochure holders come into play. Having a brochure available to browsing homebuyers not only offers them the opportunity to gather information about the home in question but also the chance that when they're ready, they can reach out to you to inquire further.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
