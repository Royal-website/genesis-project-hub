import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function AcrylicSigns() {
  return (
    <UniversalPageTemplate
      title="Acrylic Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/lighted-indoor-lobby-sign-300x225.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Acrylic Signs", path: "/acrylic-signs" },
      ]}
    >
      <ContentSection
        title="Houston Acrylic Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/lighted-indoor-lobby-sign-300x225.jpg"
        imageAlt="Lighted indoor lobby sign"
      >
        <p className="mb-4">Acrylic signs are ideal for businesses that want to exude a sophisticated and modern appeal. Made of colorless, transparent, and durable polymer, an acrylic sign can also serve as a lighter, cheaper alternative to traditional glass signs.</p>
        <p className="mb-4">With acrylic signs custom-designed and professionally made by Royal Signs & Awnings, you can give your establishment the fresh, sleek look that speaks your brand. We have acrylic signs that can meet countless business sign needs. You can have acrylic menu boards, room IDs, wayfinding signs, product displays, directional signs, POP signs, hanging signs, lobby signs, and many more!</p>
        <p>Versatility is one of an acrylic sign's best features, but it could also mean you'd have a hard time looking for the type of sign to best suit your exact needs. As a full-service sign company that specializes in high-quality acrylic signs, Royal Signs & Awnings is here to help.</p>
      </ContentSection>

      <ContentSection
        title="Variety of Acrylic Sign Options"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/lobby-dimensional-indoor-logo-300x225.jpg"
        imageAlt="Indoor lobby signs"
        imagePosition="left"
      >
        <p className="mb-4">Not all acrylic signs are created equal. Though they serve a variety of purposes and can be fabricated for different types of uses, it's important to get them made in a way that enhances its effectivity and increases its lifespan.</p>
        <p className="mb-4">Standard surface printing means Royal Signs & Awnings prints your design on the front side of the acrylic. This gives your sign a matte finish and a thicker feel. If you aren't exactly fond of having transparent signs and would prefer to have the design cover up the space on the sign, then standard surface acrylic signs would be a good option for you.</p>
        <p>Subsurface printing means we print your design on the back side of the clear piece of acrylic. Royal Signs & Awnings prints the design in reverse so that it can be seen through the front. Subsurface acrylic signs have a glossy finish and a feel of depth.</p>
      </ContentSection>

      <ContentSection
        title="Clear and Frosted Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/acrylic-indoor-lobby-wayfinding-300x198.jpg"
        imageAlt="Custom frosted acrylic signs"
      >
        <p className="mb-4">Having been in the sign-making industry for a long time, we understand that an acrylic sign's opacity has a huge effect on its appeal. And because we want to give you a sign that perfectly captures your brand identity, Royal Signs & Awnings offers clear and frosted style options that you can choose from.</p>
        <p className="mb-4">Our clear acrylic signs give your business a smooth and modern corporate look with its clean glass-like appearance, perfect transparency, and rich high-gloss finish. You can even give your sign a three-dimensional feel by applying a background color on the back side of the clear acrylic.</p>
        <p>Our frosted acrylic signs are not entirely transparent, but instead offer some translucency to your sign. With their matte finish, frosted signs by Royal Signs & Awnings are great for diffusing harsh light, reducing glare, as well as delivering a certain level of privacy.</p>
      </ContentSection>

      <ContentSection
        title="Indoor or Outdoor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/backlit-acrylic-dimensional-letters-storefront-building-sign-300x258.jpg"
        imageAlt="Custom acrylic dimensional letters"
        imagePosition="left"
      >
        <p className="mb-4">Acrylic signs are more versatile than we think! While this affordable and highly durable sign option is quite popular for their indoor sign functions, it can also be effectively used outdoors. Royal Signs & Awnings is committed to producing them in the highest quality possible so that we can provide you with the acrylic sign that's perfect wherever you want it.</p>
        <p className="mb-4">Acrylic signs and its options to come in various shapes and sizes are great for signs found in office lobbies, on hospital and clinic walls, on doors, on restaurant counters, along supermarket aisles, and many more places. They are especially durable and perfect for long-term indoor use.</p>
        <p>Royal Signs & Awnings's acrylic signs are also a practical option to go for when choosing exterior signs.</p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/VinylCutOnFrosted-lobby-sign-300x225.jpg"
        imageAlt="Custom indoor acrylic signs"
      >
        <p className="mb-4">We at Royal Signs & Awnings are proud of our years of experience in the sign-making business. We are a trusted custom acrylic signs provider and have been producing them with the most effective processes, best materials, and most meticulous eye for detail.</p>
        <p>Our products are made of the best shatter-resistant polymer, printed with premium UV ink, as well as handled and installed by the most qualified signage specialists in the area. Royal Signs & Awnings even has a strong team of graphic artists who can help you out with your sign designs if you don't have one yet.</p>
      </ContentSection>

      <ContentSection title="Free Acrylic Signs Consultation">
        <p className="mb-4">When it comes to looking for the perfect acrylic sign that suits your brand message, what you need is a tried-and-tested signage provider that can identify your needs and provide answers to your questions. And Royal Signs & Awnings is exactly that.</p>
        <p className="mb-4">With our knowledge and experience in sign-making, our top-of-the-line equipment, and our passion to give you the best, Royal Signs & Awnings would be more than happy to create attractive custom signage that meets your business needs as well as your budget.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with an Acrylic Signs Expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
