import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function MetalSigns() {
  return (
    <UniversalPageTemplate
      title="Metal Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/metal-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Metal Signs", path: "/metal-signs" },
      ]}
    >
      <ContentSection
        title="Houston Metal Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-storefront-wood-dimensional-metal-letters-outdoor-300x250.jpg"
        imageAlt="Custom storefront sign"
      >
        <p className="mb-4">
          Metal signs have been a must-use advertising sign for many businesses for centuries because they are very durable and stylish to use. Even at present, metal signs are still used for many purposes, such as street signs, roadside warnings, important brand information, and many others.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we are committed to helping you get high-quality metal signs that will help you attract potential customers. We can deliver these signs on time and represent the brand well. The signs we will create are also reliable and provide the right impressions and satisfaction to anyone who sees it.
        </p>
        <p className="mb-4">
          If you need something durable, economical and flexible, we can use steel to create your ideal metal signages. If you want something light and weather-resistant, we can use aluminum to create the signs. Our Houston team can also do customized signs based on your brand, deadline, and budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Metal Storefront Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/dimensional-letters-storefront-custom-outdoor-300x169.jpg"
        imageAlt="Metal dimensional letter storefront sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings is committed to helping clients look good for anyone, and an excellent way to help them is by creating high-quality metal signs that will be displayed in their storefront.
        </p>
        <p className="mb-4">
          Whether you are on a budget or not, we can create the appropriate metal signs for your storefront. Your budget will be taken into account, as well as the image you want to portray through your signs.
        </p>
        <p>
          Need something customized for your signage? We can create professional and personalized signs that will match your business. We can even add lighting and dimensions for them so that they have a different feel to it, unlike other storefront signs for your competitors.
        </p>
      </ContentSection>

      <ContentSection
        title="Custom Outdoor Metal Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-parking-outdoor-metal-traffic-sign-safety-wayfinding-256x300.jpg"
        imageAlt="Custom safety metal signs"
      >
        <p className="mb-4">
          Outdoor metal signs must be able to catch the attention of the people passing by and stay functional even under the elements. At Royal Signs & Awnings, we understand the importance of these outdoor signs and will make sure they are understandable for a long time.
        </p>
        <p className="mb-4">
          With our talented and experienced signage specialists, we can customize your metal signs and make sure that it will fit your preferences. We will also make sure that they are installed in key areas and secured in place.
        </p>
        <p>
          We will use the best high-quality materials and the latest techniques to make these signs last for a long time. Our Houston team will also make sure they look good through time and be visible even in harsh conditions.
        </p>
      </ContentSection>

      <ContentSection
        title="Metal Lobby Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-lobby-indoor-sign-300x169.jpg"
        imageAlt="Custom metal lobby sign"
        imagePosition="left"
      >
        <p className="mb-4">
          It is our company's goal to make your businesses look good inside and out. To help you achieve this, we will create the signs that will tell your customers more about your brand by just looking at the sign.
        </p>
        <p className="mb-4">
          We are very proud of our versatile service as one of the best metal signs providers in Houston, TX. We will let you choose the material for your signs – whether you want a combination of one or two materials to make the signs you want. We will also combine them based on the business that you are running.
        </p>
        <p>
          Our team can also create indoor metal signs that are customized based on your preferred design, size, and finish. You can use these signs in your office's lobby, conference halls, and other key areas to make them look professional, classy, and modern.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Metal Signs Consultation"
      >
        <p className="mb-4">
          If you want to give your customers a clear impression of your brand, you need the best sign that will display it. With the help of Royal Signs & Awnings, you can speak with sign experts who can make your dream signs become a reality through metal signs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Metal Signs Expert in Houston!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
