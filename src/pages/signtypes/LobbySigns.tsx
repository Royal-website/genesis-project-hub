import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { ImageGrid } from "@/components/sections/ImageGrid";
import lobbySignsHero from "@/assets/images/lobby-signs-hero.jpg";
import lobbySignDimensional from "@/assets/images/lobby-sign-dimensional.jpg";
import lobbySignCustom from "@/assets/images/lobby-sign-custom.jpg";
import lobbySignAcrylic from "@/assets/images/lobby-sign-acrylic.jpg";
import lobbySignMetal from "@/assets/images/lobby-sign-metal.jpg";
import lobbySignAttractive from "@/assets/images/lobby-sign-attractive.jpg";

export default function LobbySigns() {
  const galleryImages = [
    { src: lobbySignDimensional, alt: "Custom dimensional letter lobby sign", label: "Dimensional Letters" },
    { src: lobbySignCustom, alt: "Attractive Custom Lobby Signs", label: "Custom Lobby Sign" },
    { src: lobbySignAcrylic, alt: "Houston Lobby Signs acrylic sign", label: "Acrylic Lobby Sign" },
    { src: lobbySignMetal, alt: "Custom Lobby Signs", label: "Metal Lobby Sign" },
  ];

  return (
    <UniversalPageTemplate
      title="Lobby Signs"
      subtitle="Design | Production | Installation"
      heroImage={lobbySignsHero}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Lobby Signs", path: "/lobby-signs" },
      ]}
    >
      <ContentSection
        title="Houston Lobby Signs"
      >
        <p className="mb-4">
          A customer's first impression of your business is created before they ever enter your doors. If you have a great storefront sign and exterior signage that sets the mood for your business, then your lobby has to deliver on that promise.
        </p>
        <p className="mb-4"><strong>We offer a complete selection of lobby signage, including:</strong></p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Metal Lobby Signs-</strong> Aluminum, Brass, Bronze, Copper, Stainless Steel, or Cor-Ten Steel in brushed or polished finish.</li>
          <li><strong>Acrylic Lobby Signs-</strong> Frosted etched glass look, either clear or colored acrylic.</li>
          <li><strong>Backlit Lobby Signs-</strong> Energy efficient, LED backlighting</li>
          <li><strong>Cut Vinyl Lobby Signs-</strong> Most economical option, full-color graphics available.</li>
          <li><strong>Wood Lobby Signs-</strong> Plain, beveled, or live edge with metal, acrylic, or vinyl lettering</li>
          <li><strong>Foam Lobby Signs-</strong> Faced with acrylic or metal for a 3-dimensional effect</li>
        </ul>
        <p className="mb-4">
          In addition to sign creation, we also handle sign installation and will provide all of the hardware needed to ensure your sign is properly secured.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 today for a Free Consultation with a Lobby Sign Specialist!
        </p>
      </ContentSection>

      <ImageGrid images={galleryImages} columns={4} />

      <ContentSection
        title="Lobby Logo Signs"
        image={lobbySignCustom}
        imageAlt="Houston Lobby Signs interior block"
        imagePosition="left"
      >
        <p>
          Branding is an important part of building your business identity. Having a strong brand message that is reinforced throughout your marketing and signage helps customers get a sense of who you are as an organization, and keeps you top of mind. Logo Lobby Signs are an excellent way to give your lobby a professional look sure to impress your clients and guests. We have many options for lobby logo signs and can create the perfect custom lobby sign for your business.
        </p>
      </ContentSection>

      <ContentSection
        title="Cohesive Business Signage Collection"
        image={lobbySignAttractive}
        imageAlt="Attractive Custom Lobby Sign"
      >
        <p>
          In addition to logo signs, we can create you a full collection of cohesive business signs, including storefront signs, vehicle wraps, window graphics and displays, wayfinding signs, ADA signs, and more. Our design staff can create the perfect cohesive signage collection for your business, including your brand's fonts, colors, logo, and style. Attractive, matching signage shows your visitors that you are professional, polished, and attentive to details, which is often important to them when choosing who they will do business with.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Lobby Sign Consultation"
      >
        <p className="mb-4">
          At Royal Signs & Awnings, we are dedicated to providing outstanding customer service and support to all of our clients. Our goal is to be your long-term signage partner.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 today for a Free Consultation with a Lobby Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
