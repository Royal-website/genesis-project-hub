import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CorrugatedSigns() {
  return (
    <UniversalPageTemplate
      title="Corrugated Signs"
      subtitle="Design | Production | Installation"
      heroImage="/images/signtypes/corrugated-signs/corrugated-stop-signs.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Corrugated Signs", path: "/corrugated-signs" },
      ]}
    >
      <ContentSection
        title="Corrugated Signs"
        image="/images/signtypes/corrugated-signs/corrugated-stop-signs.jpg"
        imageAlt="custom corrugated stop signs"
      >
        <p className="mb-4">
          If you're looking for lightweight, flexible, personalized signs that can get your business noticed and remembered, corrugated signs are what you need. And the best part? They're super affordable!
        </p>
        <p className="mb-4">
          Corrugated plastic signs (also known as Coroplast signs) are used to create a multitude of useful things, but are especially popular in the sign industry for being durable, versatile, affordable, and highly customizable. They are typically 4 millimeters thick and have a hollow-fluted interior, which practically makes them a plastic, waterproof, and more temperature-tolerant version of cardboard.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has been a trusted local signage provider for a long time, and over the years we have learned that signs not only have to look nice; they also have to stay that way for a long time.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Long-Lasting Indoor Signs"
        image="/images/signtypes/corrugated-signs/indoor-hanging-banner.jpg"
        imageAlt="custom indoor hanging promotional banner"
        imagePosition="left"
      >
        <p className="mb-4">
          Corrugated signs do amazingly well indoors and are quite popular because of the durability they offer for such a low price. They are resilient against cold, heat, and moisture. They are pliable, lightweight, and are resistant to color-fading.
        </p>
        <p>
          Corrugated plastic signs by Royal Signs & Awnings are quite popular among a variety of business types, including retail stores, clinics, restaurants, cafes, travel agencies, and many more. Durable, affordable, and highly customizable, our corrugated signs are a must-have for your business.
        </p>
      </ContentSection>

      <ContentSection
        title="Affordable Outdoor Signs"
        image="/images/signtypes/corrugated-signs/corrugated-yard-sign.jpg"
        imageAlt="custom corrugated yard sign"
      >
        <p className="mb-4">
          While corrugated signs can last for years and years indoors, they have a shorter lifespan outdoors as they tend to warp when left in direct sunlight or high heat. This isn't a bad thing, though. Sometimes, you just need outdoor signs for short-term use.
        </p>
        <p>
          Here at Royal Signs & Awnings, we make sure that our corrugated signs effectively promote your brand during the entire time they're being used, which could last between a few days to over a year. We make excellent outdoor signs for seasonal purposes that are easy to install, remove, and replace.
        </p>
      </ContentSection>

      <ContentSection
        title="Customizable Promotional Signage"
        image="/images/signtypes/corrugated-signs/a-frame-sign.jpg"
        imageAlt="portable A-frame Corrugated Coroplast insert"
        imagePosition="left"
      >
        <p className="mb-4">
          Corrugated signs are known to be extremely versatile, making them a popular option for custom signage. If you're looking for vibrant and effective promotional signage at an affordable price, corrugated signs may just be the perfect solution for you.
        </p>
        <p>
          Royal Signs & Awnings's team of graphic designers are here to help establish a fully personalized design and concept for your corrugated plastic signage. With our state-of-the-art UV printers, we print your designs on corrugated plastic in full color.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Signage Consultation"
      >
        <p className="mb-4">
          Corrugated signs can offer so much potential for such an affordable price. We want to help you achieve it for your business. Here at Royal Signs & Awnings, our goal is for your business to have eye-catching, high-impact, and brand-cohesive signs that ultimately increase your bottom-line.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings at (281) 645-9935 for your Free Consultation with a Corrugated Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
