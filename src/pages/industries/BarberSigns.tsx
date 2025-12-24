import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function BarberSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Barber Signs", path: "/barber-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Barber Signs"
      heroImage="/images/industries/barber-signs/08-indoor-lighted-barbershop-custom-signage.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Barber Signs"
        image="/images/industries/barber-signs/04-full-service-sign-company-graphic-designer-300x214.jpg"
        imageAlt="Barber Signs"
      >
        <p className="mb-4">
          A great barber shop is more than just a place to get a haircut—it's a community gathering spot, a place to relax, and for many, a weekly tradition. The right signage helps establish your barber shop's identity and attracts the right clientele to your business.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings understands the unique character of barber shops and the importance of signage that reflects your shop's personality. Whether you're going for a classic, vintage look or a modern, trendy vibe, we can create custom signs that perfectly capture your brand.
        </p>
        <p className="mb-4">
          From traditional barber poles to modern LED signs, from window graphics to dimensional letters, we offer a complete range of signage solutions for barber shops of all styles and sizes. Our experienced team works with you to understand your vision and create signs that will attract customers and set your shop apart from the competition.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Classic Barber Shop Signage"
        image="/images/industries/barber-signs/07-indoor-lighted-barbershop-custom-signage-300x300.jpg"
        imageAlt="Classic Barber Shop Signs"
      >
        <p className="mb-4">
          The iconic barber pole has been a symbol of the barbering profession for centuries, and it remains one of the most recognizable business signs in the world. Royal Signs & Awnings offers both traditional and modern interpretations of this classic symbol.
        </p>
        <p className="mb-4">
          Beyond the barber pole, classic storefront signs with vintage typography and design elements can help establish your shop as a traditional establishment that values the time-honored art of barbering. Dimensional letters, painted signs, and illuminated marquees all contribute to a classic aesthetic.
        </p>
        <p>
          Our design team can help you create a cohesive look that incorporates classic elements while still feeling fresh and relevant to today's customers.
        </p>
      </ContentSection>

      <ContentSection
        title="Modern Barber Shop Signs"
        image="/images/industries/barber-signs/05-full-service-sign-company-graphic-designer.jpg"
        imageAlt="Modern Barber Shop Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          For barber shops targeting a younger, more fashion-conscious clientele, modern signage with clean lines, bold typography, and contemporary materials can help establish your brand as cutting-edge and trendy.
        </p>
        <p className="mb-4">
          LED channel letters, backlit signs, and minimalist designs are popular choices for modern barber shops. These signs convey professionalism and style while ensuring your business stands out in a crowded marketplace.
        </p>
        <p>
          Royal Signs & Awnings stays up-to-date with the latest design trends and technologies to offer our clients the most current options for their signage needs.
        </p>
      </ContentSection>

      <ContentSection title="Interior Signage for Barber Shops">
        <p className="mb-4">
          The interior of your barber shop should be just as well-branded as the exterior. Service menus, pricing displays, and decorative elements all contribute to the customer experience and help reinforce your brand identity.
        </p>
        <p className="mb-4">
          Wall graphics, acrylic signs, and custom artwork can transform your space and create a memorable atmosphere for your customers. These elements also make great backdrops for the social media photos that many customers like to share after a fresh cut.
        </p>
        <p>
          Royal Signs & Awnings can help you design and install interior signage that complements your exterior signs and creates a cohesive brand experience from the moment a customer walks in the door.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
