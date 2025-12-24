import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function BuildingSigns() {
  return (
    <UniversalPageTemplate
      title="Building Signs"
      subtitle="Design | Production | Installation"
      heroImage="/images/signtypes/building-signs/channel-letters.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Building Signs", path: "/building-signs" },
      ]}
    >
      <ContentSection
        title="Houston Building Signs"
        image="/images/signtypes/building-signs/storefront-applebees.jpg"
        imageAlt="Storefront building sign"
      >
        <p className="mb-4">Your building facade or storefront is the first impression many potential customers and clients have of your business.</p>
        <p className="mb-4">At Royal Signs & Awnings, we make sure that impression is an outstanding one!</p>
        <p className="mb-4">High-quality, attractive building signs set you apart from the businesses around you, allowing you to capture more eyeballs, interest, and ultimately dollars. Whether you are looking to attract more visitors with promotional signs, or build your brand with a logo sign, we can design, manufacture, and install the perfect building signs for you!</p>
        <p className="font-semibold">Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Building Signs Expert!</p>
      </ContentSection>

      <ContentSection 
        title="The Right Sign For Your Building" 
        image="/images/signtypes/building-signs/chop-suey-building.jpg"
        imageAlt="Building Sign"
        imagePosition="left"
      >
        <p className="mb-4">Different businesses have different requirements for their building sign. Your brand personality, location, competition, budget, and target audience will all impact the decisions you make regarding your building signage.</p>
        <p>Our expert building sign consultants will perform an on-site evaluation to assess your building, measure your space, and recommend the products, processes, and signage elements will be best for you. We handle every aspect of custom sign making, from your initial consultation through installation, including design, manufacturing, repairs, maintenance, and can even assist with permitting for your new signage, if needed.</p>
      </ContentSection>

      <ContentSection 
        title="Types of Building Signs"
        image="/images/signtypes/building-signs/wall-sign.jpg"
        imageAlt="Wall Sign"
      >
        <p className="mb-4">There are a few common sign types that our consultants are most likely to recommend. Depending on your location and business type, we may recommend signage that is complementary with the surrounding signage, or that is contrasting to help you stand out from the crowd. Either way, we ensure your sign will be the right sign for you, your business, and your location.</p>
        <p>All of our signs are completely custom crafted. This means that even if you are using the same signage type as businesses around you, such as a channel letter sign, your signage will still look completely unique and different, while still providing a cohesive touch.</p>
      </ContentSection>

      <ContentSection 
        title="Channel Letters & Dimensional Letters"
        image="/images/signtypes/building-signs/channel-letters.jpg"
        imageAlt="Custom Channel Letter Building Sign"
        imagePosition="left"
      >
        <p className="mb-4">Our most popular choice, channel letters dimensional signs, are extremely versatile, with a variety of options for color, font, and style. Channel letters and dimensional letters can include individual letters and numbers, even shapes and logos. These are an extremely popular choice for many different business types, from retail stores to manufacturing facilities because of their durable design and level of customization.</p>
        <p>Channel letters allow light to be housed within them as they typically have a transparent face, while dimensional letters are typically cut from a single sheet of metal or acrylic, and can be backlit to attract more attention.</p>
      </ContentSection>

      <ContentSection 
        title="Lighted Signs"
        image="/images/signtypes/building-signs/lighted-sign.jpg"
        imageAlt="Lighted Sign"
      >
        <p className="mb-4">Lighted building signs allow your business to be easily spotted day or night. Many different sign types lend themselves to lighting or backlighting. Channel letter signs are commonly backlit, and cabinet signs almost always include a lighted element inside.</p>
        <p>Ideal for places that are open late, such as retail stores, bars, gas stations, convenience stores, and theaters, lighted signs truly help your business increase your visibility in the best possible way.</p>
      </ContentSection>

      <ContentSection 
        title="Projecting Signs, Hanging Signs & Blade Signs"
        image="/images/signtypes/building-signs/blade-sign.jpg"
        imageAlt="Projecting Sign, Hanging Sign"
        imagePosition="left"
      >
        <p className="mb-4">Whatever you call it, a projecting, hanging, or blade sign is one that is perpendicular to your building, rather than attaching flat against your facade. These signs can be backlit cabinet signs, or may be made of custom materials such as High Density Urethane Foam, wood, or metal.</p>
        <p>These are great for stopping foot traffic, and are often used in conjunction with storefront signage, or as a directional sign for a business that may be located within the building but without a storefront, such as a private investigators office located above a bookstore.</p>
      </ContentSection>

      <ContentSection 
        title="Canopy & Awning Signs"
        image="/images/signtypes/building-signs/awning-sign.jpg"
        imageAlt="Custom Building Sign & Awning Sign"
      >
        <p className="mb-4">Awning signs serve double duty, as both a business identifier and a storefront protector. Awning signs are most commonly constructed of a stretched canvas material, however they can be constructed of any type of fabric or metal, depending on your desires and specifications.</p>
        <p>We recommend products that are resistant to weathering, allowing you maximum lifespan for your building signage. Awning signs are fantastic for places that want to provide a boutique-like feel, or have a necessity to provide a canopy, such as a hotel or open-air restaurant.</p>
      </ContentSection>

      <ContentSection title="Free Building Sign Consultation">
        <p className="mb-4">Royal Signs & Awnings is excited about the opportunity to create the perfect sign for your building and business. We know the importance of having the right building sign for branding and customer attraction, and are ready to get to work for you.</p>
        <p className="font-semibold">Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Building Signs Expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
