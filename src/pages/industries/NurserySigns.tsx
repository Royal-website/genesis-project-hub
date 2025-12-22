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
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-attractive-storefront-nursery-sign-300x213.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Nursery Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-attractive-storefront-nursery-sign-300x213.jpg"
        imageAlt="Nursery Signs"
      >
        <p className="mb-4">
          Represent your beautiful flowers and plants well with colorful and vibrant nursery signs by Royal Signs & Awnings. Nursery owners and managers like you shouldn't have to settle for generic, store-bought signs for your businesses. A strong and cohesive brand identity is essential in marketing your business to your target market.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is an established expert when it comes to nursery signage. We specialize in studying our client's brand, needs, desired marketing approach, etc. and coming up with high-quality signage for their flower and plant nursery business…signs that not only look attractive, but are also a perfect fit for their brand and budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Highly Customizable Outdoor Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-monument-attorney-at-law-signage-1.jpg"
        imageAlt="Outdoor Nursery Signs"
      >
        <p className="mb-4">
          Outdoor signs can come in all shapes, sizes, colors, and substrates, which is great! But sometimes business owners can get a bit confused as to which one would be best for their nursery. Well this is exactly why Royal Signs & Awnings exists.
        </p>
        <p>
          As a trusted sign company, our services include giving you the guidance and the insight that you need in order to make the best choices for your nursery's outdoor signs. And once you've done that, we can custom-craft your sign for you. We'll make sure that every detail contributes to your brand identity, particularly the sign type, substrate, shape, colors, text, and overall design.
        </p>
      </ContentSection>

      <ContentSection
        title="Informational Signs, Directory Signs, and Wayfinding Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/hanging-3-300x200.jpg"
        imageAlt="Wayfinding Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          On certain occasions, nurseries can get quite crowded with many different people looking for many different things. And because nobody wants to ever feel lost or confused inside a business, it's important for you to keep your customers informed of where they are, where they can go next, and how they can get there.
        </p>
        <p>
          This is a huge boost to customer satisfaction and positive experience. Informational signs, directories, and wayfinders are excellent tools for this!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
