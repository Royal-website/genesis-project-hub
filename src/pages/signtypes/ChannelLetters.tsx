import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function ChannelLetters() {
  return (
    <UniversalPageTemplate
      title="Channel Letters"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/channel-letters-sign.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Channel Letters", path: "/channel-letters" },
      ]}
    >
      <ContentSection
        title="Houston Channel Letters"
        content={`Channel letters and dimensional letters are an extremely popular choice for building signage across all industries and business types.

The flexibility and versatility of a channel letter sign allows them to be customized to meet any brand guidelines or personal design choices. Whether you would like an illuminated sign, flat dimensional letters, or a completely custom sign, we can create the perfect sign for you.

Royal Signs & Awnings is your local provider of professional business signs, with fast service and quality fabrication within your budget.`}
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/channel-letters-sign.jpg"
        imageAlt="Custom Channel Letter Building Sign"
      />

      <ContentSection
        title="Storefront Channel Letters"
        content={`Our most frequent storefront sign request is for a channel letter sign. Channel letters are 3-dimensional signs, created through forming individual cut metal elements, such as letters, numbers, symbols, or images, that are perfectly aligned and secured to a backing frame, such as a raceway sign, or can even be flush-mounted directly to your building.

The channel itself is covered with a durable acrylic top, available in any color or transparency level for a completely customized look. You can spell out your name, slogan, and even include your logo in this type of sign. We have a wide variety of color, size, font, and style options, making this an easy to customize sign for any business.

Channel Letter Signs are most popular for retail stores, office buildings, grocery stores, malls, shopping centers, manufacturing facilities, schools, churches, and other organizations.`}
        imagePosition="right"
      />

      <ContentSection
        title="Dimensional Letters"
        content={`Dimensional letter signs are similar to channel letter signs in that they both consist of individually created elements. Where channel letters have an empty channel inside allowing for illumination, dimensional letters are cut from solid sheets of acrylic, metal, or other material.

There are many different options for sizes, styles, and fonts, as well as variances in material thickness, so you can control how dimensional your sign looks, from almost flat to several inches deep.

Royal Signs & Awnings creates attractive dimensional letter signs that match your brand and promote your brand in a high-quality, durable way.

These signs are ideal for restaurants, retail stores, offices, malls, manufacturing, and are even a great option for indoor signs or lobby signs.`}
      />

      <ContentSection
        title="Backlit & Illuminated Channel Signs"
        content={`Channel letter signs can really make you stand out with the addition of LED backlighting. This allows the sign to easily be seen at night and in poor weather, attracting new customers regardless of the time or conditions. We handle all aspects of this process, including securing the sign, safe installation of electrical elements, and even clean up.

If you have a business that is open during the evening or night hours, a backlit channel letter sign can make a big difference in your ability to attract new customers.

Lighted signs are ideal for nightclubs, theaters, restaurants, bars, coffee shops, comedy clubs, convenience stores, and gas stations, but can work well for any business that wants to set themselves apart.`}
      />

      <ContentSection
        title="Free Channel Letter Sign Consultation"
        content={`We are dedicated to providing you with fast turn times, quality products, and a dedicated, experienced team to guide and assist you throughout your project. If you are looking for a long-term signage partner, who will be there for you throughout the life of your business, Royal Signs & Awnings is the right local sign company for you.

Call Royal Signs & Awnings today at (281) 645-9935 for a Free Channel Letter Sign Consultation!`}
      />
    </UniversalPageTemplate>
  );
}
