import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function BladeSigns() {
  return (
    <UniversalPageTemplate
      title="Blade Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/09/blade-sign-bracket.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Blade Signs", path: "/blade-signs" },
      ]}
    >
      <ContentSection
        title="Houston Blade Signs"
        content={`Increase your customer traffic with attractive hanging signs custom-made by Royal Signs & Awnings!

Blade signs are a type of sign that can be mounted to your building or storefront pole, or attached perpendicular to the surface of your building facade. These signs are an effective means of attracting foot traffic to your facility.

As a full-service signage provider, we handle every aspect of the sign process, including design, fabrication, and installation of your blade sign. Our knowledgeable sign experts will discuss your location, budget, ideas, and timeframe to ensure that you are getting the right solution for your business, with a focus on longevity and durability.`}
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/09/blade-sign-bracket.jpg"
        imageAlt="Custom blade sign"
      />

      <ContentSection
        title="Blade Signs for Every Business"
        content={`Blade signs come in a variety of different application options, styles, and materials. They can be mounted on a storefront pole or building or attached to your storefront to hang perpendicular to your building, and are available as an illuminated or non-illuminated option. Blade signs are an attractive way to encourage your potential customers to look up from their devices and take notice of your building.

During your free consultation, our experts will discuss your location, signage regulations, and competition. This will allow our experts to recommend the right type of materials, style, and lighting options to best fit your unique brand, business, budget, and timeframe.`}
        imagePosition="right"
      />

      <ContentSection
        title="Illuminated Blade Signs"
        content={`Illuminated blade signs are an excellent option for any business who stays open late, or cannot be easily seen from the street. These signs not only generate a greater amount of interest but are also a fantastic way to separate your business from your competition and neighboring businesses.

Royal Signs & Awnings creates illuminated signs in a wide variety of different materials and styles including:
• Aluminum Frame
• Rustic Metals
• Decorative Metal Frames
• Acrylic Push Through Letters
• And more!

We have the skills, tools, and resources needed to create beautiful lighted signs in any style, material, or size.`}
      />

      <ContentSection
        title="Non-Illuminated Blade Signs"
        content={`Non-illuminated blade signs are typically bracket mounted and placed perpendicular to your building, creating a high-visibility sign for both motorists and pedestrians alike. This type of sign is a budget-friendly option that allows you to personalize your building with your logo, brand, and business name.

All of our blade signs are custom fabricated, tailored to your specific brand, business, and needs, and budget. With so many materials, color, style, and size options, it can be difficult to know what type of blade sign will best fit your particular need.`}
      />

      <ContentSection
        title="Full-Service Sign Company"
        content={`As a full-service sign shop, we not only fabricate the solutions your business needs, we also provide design and installation services. This makes it easy for you to work with one company for all of your signage needs. All of our signage projects are managed in our local signage shop, allowing us to ensure that your project is accurate and in line with your approved proof.

We provide the signage solutions you need to grow your business, and we accomplish this by utilizing environmentally sustainable materials and efficient manufacturing and business practices, that save you both time and money.`}
      />

      <ContentSection
        title="Free Blade Sign Consultation"
        content={`We are here for you, from initial design through professional installation, creating the professional blade signs you need to increase your customer traffic and reach new market success. Whatever your business goals may be, Royal Signs & Awnings creates the perfect solutions for your business!

Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Blade Sign Expert!`}
      />
    </UniversalPageTemplate>
  );
}
