import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { ImageGrid } from "@/components/sections/ImageGrid";

export default function LobbySigns() {
  const galleryImages = [
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2015/03/IMG_4252-150x150.jpg", alt: "Custom dimensional letter lobby sign", label: "Dimensional Letters" },
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2015/03/Photo-Mar-16-4-37-20-PM-150x150.jpg", alt: "Attractive Custom Lobby Signs", label: "Custom Lobby Sign" },
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2015/03/Godwin-Lobby-sign-150x150.jpg", alt: "Houston Lobby Signs Godwin Lobby sign", label: "Godwin Lobby" },
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/lobby-1-150x150.jpg", alt: "Custom Lobby Signs", label: "Lobby Signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Lobby Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
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
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/interior-block-300x176.jpg"
        imageAlt="Houston Lobby Signs interior block"
        imagePosition="left"
      >
        <p>
          Branding is an important part of building your business identity. Having a strong brand message that is reinforced throughout your marketing and signage helps customers get a sense of who you are as an organization, and keeps you top of mind. Logo Lobby Signs are an excellent way to give your lobby a professional look sure to impress your clients and guests. We have many options for lobby logo signs and can create the perfect custom lobby sign for your business.
        </p>
      </ContentSection>

      <ContentSection
        title="Cohesive Business Signage Collection"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/lobby-5-300x140.jpg"
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
