import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ConvenienceStoreSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Convenience Store Signs", path: "/convenience-store-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Convenience Store Signs"
      heroImage="/images/industries/convenience-store-signs/05-full-service-sign-company-graphic-design-and-installation-for-your-business.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Convenience Store Signs"
        image="/images/industries/convenience-store-signs/06-indoor-convenience-digital-signage-and-displays-300x205.jpg"
        imageAlt="Digital Convenience Store Signage"
      >
        <p className="mb-4">
          Creating effective convenience store signs require a lot of work. One reason is that the people who go there are those who are likely in a hurry and do not have much time to look at the signs you post there. Space is also limited inside most stores so you don't have the freedom to put up large eye-catching signs.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has been in the business of producing effective signage for convenience stores for a long time, so we knew how to design, produce, and install signs in the most strategic, impactful way possible. From attractive exterior sign, to helpful directional signs, to informational indoor signs, and even to durable and affordable temporary signs, Royal Signs & Awnings has what your store needs.
        </p>
        <p className="mb-4">
          As a full-service signs provider, we not only print out signs for you. Our talented team of sign specialists work very closely with you and/or your marketing staff to ensure that we deliver convenience store signage that are custom-crafted for your brand, objectives, and budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Outdoor Signage for Convenience Stores"
        image="/images/industries/convenience-store-signs/04-full-service-sign-company-graphic-design-and-installation-for-your-business-300x200.jpg"
        imageAlt="Illuminated Storefront Signage"
      >
        <p className="mb-4">
          Give customers the convenience they look for even before they step inside your stores. Having lighted or illuminated exterior signs gave your business the ability to inform potential customers, in one glance, that your store exists, that you are open, and that you're ready to provide products and services that they need.
        </p>
        <p className="mb-4">
          Illuminated outdoor signs are perfect for convenience stores that are open 24/7. Not only do they serve as advertising tools the whole day round, they also make your business stand out in the dark. When designed, fabricated, and installed properly, your lighted exterior sign attract potential customers and convince them to step inside your store.
        </p>
        <p>
          Royal Signs & Awnings is an expert in producing and setting up high quality lighted signs for convenience stores and we are excited to do the same for you! Whether you need illuminated dimensional letters, lighted sign boxes, LED neon signs, lighted pole signs, or illuminated fascia signs, our team of designers, fabricators, installers, project managers, and marketing specialists is ready to deliver it to you on time and on budget.
        </p>
      </ContentSection>

      <ContentSection
        title="Get Informed and Organized with Indoor Signage"
        image="/images/industries/convenience-store-signs/08-indoor-convenience-dimensional-lettering-signage-300x188.jpeg"
        imageAlt="Attractive Dimensional Indoor Lettering"
        imagePosition="left"
      >
        <p className="mb-4">
          Many convenience stores have to work with limited space inside them, so they need to get extra creative and extra resourceful with organizing their shelves, products, equipment, and stock storage. The last thing business owners want is for customers to be confused, lost, and annoyed inside their stores. This is exactly why high-quality indoor signs are important.
        </p>
        <p className="mb-4">
          Indoor signs are very effective tools in organizing spaces. They label specific areas, give specific directions, and display important directions in order to help your customers know where to get what product, how much it costs, and where they can go next. Royal Signs & Awnings produces various types of indoor signs so you can choose ones that best suit your brand and your budget.
        </p>
        <p>
          Depending on your desired sign type and budget, Royal Signs & Awnings delivers signs made from vinyl, aluminum, metal, wood, coroplast, acrylic, alumalite, and many more. We also customize them to the size, shape, design that most effectively catches your customers' attention, is most easily understood by them, and most clearly conveys your message.
        </p>
      </ContentSection>

      <ContentSection
        title="Affordable Sign Options"
        image="/images/industries/convenience-store-signs/07-indoor-convenience-digital-signage-and-displays.jpg"
        imageAlt="Storefront Signage For Your Business"
      >
        <p className="mb-4">
          We at Royal Signs & Awnings, are confident that our high-quality, affordable signage will not only help build brand awareness, but also help you achieve your goals of attracting, retaining, and converting potential clients for your business. Having been in the sign-making industry for a long time, Royal Signs & Awnings specializes in studying convenience store brands and analyzing what signage solutions they would need.
        </p>
        <p>
          As a trusted local sign provider, we are committed to giving our clients the best signs and services for the best price. Convenience store signs made of vinyl are particularly popular among our clientele because of their versatility, durability, and affordability.
        </p>
      </ContentSection>

      <ContentSection title="Free Convenience Store Signs Consultation">
        <p className="mb-4">
          Your convenience store is sure to need attractive and eye-catching outdoor signs as well as informative and utilitarian indoor signs. You need all of these to do the job (and do it well), to stick to branding, and to drive holes in your pockets. And that's exactly what Royal Signs & Awnings intends to give you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
