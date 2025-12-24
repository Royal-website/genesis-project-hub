import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function DimensionalLetters() {
  return (
    <UniversalPageTemplate
      title="Dimensional Letters"
      subtitle="Design | Production | Installation"
      heroImage="/images/signtypes/dimensional-letters/backlit-storefront.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Dimensional Letters", path: "/dimensional-letters" },
      ]}
    >
      <ContentSection
        title="Houston Dimensional Letters"
        image="/images/signtypes/dimensional-letters/backlit-storefront.jpg"
        imageAlt="custom acrylic backlit storefront sign"
      >
        <p className="mb-4">
          If you're looking to put your brand's best face forward in a creative way, dimensional letters are a great alternative to traditional signage.
        </p>
        <p className="mb-4">
          Dimensional letters, often called 3D letters or raised letters, are unlit lettering or designs applied to surfaces in order to create raised images. They are cast, molded, fabricated, or cut from solid material to achieve this effect.
        </p>
        <p className="mb-4">
          Dimensional letters offer what many business owners are looking for: visibility, durability, and a smart, professional look. Royal Signs & Awnings can attest that dimensional lettering is a smart choice for any business.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Appealing Storefront Signage"
        image="/images/signtypes/dimensional-letters/restaurant-sign.jpg"
        imageAlt="custom outdoor restaurant signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Given dimensional letters' eye-catching appeal, they make the perfect choice for your building's storefront sign. They give your building more texture and depth, while exuding a more sophisticated feel.
        </p>
        <p className="mb-4">
          The versatility of dimensional letters is also a huge plus. They are usually installed directly to your building's facade, but they can also be incorporated into monument signs, post and panel signs, and reader boards.
        </p>
        <p>
          Even though 3D letters are non-illuminated, Royal Signs & Awnings can include spotlights, halo lights, or backlighting during sign installation, so your dimensional letters are visible even during the evening.
        </p>
      </ContentSection>

      <ContentSection
        title="Attractive Indoor Lettering"
        image="/images/signtypes/dimensional-letters/lobby-sign.jpg"
        imageAlt="Custom dimensional letter lobby sign"
      >
        <p className="mb-4">
          Dimensional letters aren't just for the outdoors; they also give your business a professional ambiance as interior signs. Have them installed close to your reception area and your brand will be the first thing your customers notice as soon as they step inside your facility.
        </p>
        <p>
          3D letters, contrary to the name, aren't limited to letters either! You can have letters, numbers, images, logos, or a mix of all that installed on your walls. Royal Signs & Awnings's team of experienced designers can help build interior signs customized to your business's specific personality and character.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable Dimensional Letters"
        image="/images/signtypes/dimensional-letters/indoor-lobby.jpg"
        imageAlt="indoor lobby dimensional signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings produces dimensional letters from many different materials to best suit your brand and business. You have the option to choose between metal, wood, plastic, and light foam as material for your dimensional letters.
        </p>
        <p>
          Plastic is known for its versatility and includes acrylic, PVC, vinyl, and plaques. Metal is a good choice for interior letters because of its classy appeal. Light foam is a popular option for large, colorful letters.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Dimensional Letters Consultation"
      >
        <p className="mb-4">
          Royal Signs & Awnings is highly meticulous when it comes to sign choices and sign quality. We would be more than happy to give you some tips and advice about the perfect dimensional letters for your business.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Dimensional Letters Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
