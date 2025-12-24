import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function LightedSigns() {
  return (
    <UniversalPageTemplate
      title="Lighted Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/lighted-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Lighted Signs", path: "/lighted-signs" },
      ]}
    >
      <ContentSection
        title="Houston Lighted Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/02/channel-letters-banner-outdoor-storefront-building-illuminated-backlit-sign-300x225.jpg"
        imageAlt="Custom illuminated channel letters"
      >
        <p className="mb-4">
          Want your business to truly outshine all the distractions around it? There is no better way to do this than with a custom lighted sign.
        </p>
        <p className="mb-4">
          There are a variety of types, shapes, and styles of lighted signs. Many different sign types are used throughout a business, and most businesses could benefit from some type of lighted or backlit sign. While some lighted signs, such as emergency exit signs, are common for every business, others are more suited to specific business types. At Royal Signs & Awnings, we create custom illuminated storefront signs, logo lobby signs, and other lighted signs specific to your business, your needs, and your budget. We strive to become your only sign provider for all of your business promotion and identification needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Lighted Sign Specialist!
        </p>
      </ContentSection>

      <ContentSection
        title="Traditional Neon Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/02/lighted-1-300x200.jpg"
        imageAlt="Custom neon sign"
        imagePosition="left"
      >
        <p>
          Although the look and feel of a traditional neon sign is still appealing to many, they often find that the maintenance and repair costs do not make this a worthwhile investment. Modern technology introduces LED lighted signs with the appearance of a neon sign, but with a longer lifespan and much less expensive maintenance costs. If you want the classic feel of a neon sign, but aren't excited about the expense, we are the right partner. Give us a call, tell us what you want, and we will make it happen for you!
        </p>
      </ContentSection>

      <ContentSection
        title="Lighted LED Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/02/channel-letters-banner-outdoor-storefront-building-illuminated-backlit-sign-300x225.jpg"
        imageAlt="Cafe Icon Lighted Storefront Sign Channel Letters"
      >
        <p className="mb-4">
          The neon look can now be accomplished through low-energy, high-efficiency LED bulbs. These LED signs create the same retro vibe, but with a much more environmentally friendly footprint.
        </p>
        <p>
          LED lighting has many different signage applications, beyond the look of classic neon. Channel letters and cabinet signs can both benefit from backlighting. Lighted signs will light up your business in the dark, and are especially useful for late-night businesses, such as convenience stores, gas stations, nightclubs, restaurants, hotels, and theaters. Our LED signs are custom made to fit your desires, and are available in a wide variety of color, style, and animation options.
        </p>
      </ContentSection>

      <ContentSection
        title="Indoor Lighted Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/02/lighted-1-300x200.jpg"
        imageAlt="Royal Cyber - Indoor Backlit Lobby Sign"
        imagePosition="left"
      >
        <p>
          Aside from storefronts, neon and LED signs are also great for indoor use, such as in the form of a lighted OPEN sign. Beyond that, there are many ways you can use them to promote any aspect of your business. For example, a restaurant may want to provide a smooth customer flow, and may choose to highlight order and pickup stations using lighted signs. These signs can be completely custom created to suit your needs and imagination. Our staff of skilled sign designers are ready to turn your ideas into reality.
        </p>
      </ContentSection>

      <ContentSection
        title="Programmable Digital Message Centers"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/0092_Dairy_Queen_Bendsen_Sign__Graphics_W_19mm_80x176_Bloomington_IL_101718-1-300x225.jpg"
        imageAlt="Dairy Queen Pylon Sign"
      >
        <p>
          For the business who wants to go high-tech, we also create custom, programmable LED Message Center Signs. These impressive signs can be used alone, or as part of another sign, such as on your storefront. LED Message Centers have numerous advantages over standard neon signs. You can add custom messaging that can easily be updated at any time, and can include a variety of color options. Some models even provide you with eye-catching full-color graphics.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service LED Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/02/channel-letters-banner-outdoor-storefront-building-illuminated-backlit-sign-300x225.jpg"
        imageAlt="Houston Lighted Signs illuminated cabinet channel letters outdoor install"
        imagePosition="left"
      >
        <p>
          We are ready to help you with every aspect of the neon sign and LED sign production process, from design to installation and repairs. If you have your custom sign created by us, you can be confident that you are getting both a quality sign and a quality sign partner. As a complete sign shop, we are ready with the equipment and ability to create all the business signage you need, including exterior signs, interior signs, lobby signs, ADA signage, trade show displays, commercial vehicle wraps, and more.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Lighted Signs Consultation"
      >
        <p className="mb-4">
          Outshine your competition with custom lighted signs by Royal Signs & Awnings!
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Lighted Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
