import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function NewBusinessSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "New Business Signs", path: "/new-business-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="New Business Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-custom-aframe-storefront-dental-signage-300x188.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="New Business Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-custom-aframe-storefront-dental-signage-300x188.jpg"
        imageAlt="New Business Signs"
      >
        <p className="mb-4">
          According to the Small Business Association (SBA), more than 627,000 new businesses spring up all over the US every year. However, the SBA estimates that only around 51% of small businesses will last past five years. In order for your new business to stay in the game for a long time, you'll need to have a strong start.
        </p>
        <p className="mb-4">
          Some advice that successful entrepreneurs offer us is to find a way to get good leads, convert these leads into sales, and ensure repeat sales from customers. This is where high-quality new business signage comes in. Royal Signs & Awnings is an established local signs provider and we specialize in new business signs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Vinyl Promotional Signs for Special Announcements"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/03/window-vinyl-300x262.jpg"
        imageAlt="Vinyl Window Signs"
      >
        <p className="mb-4">
          Your new business is open and people need to know it! Make that awesome announcement with stunning promotional signs by Royal Signs & Awnings. Promotional signs come in so many forms such as vinyl banners, yard signs, flag signs, window stickers, marquis signs, pull-up signs, and even LED message boards, and Royal Signs & Awnings delivers them all.
        </p>
        <p>
          Vinyl is an excellent choice of material and among the most popular in the sign industry. Because of its reasonable cost, fast-and-easy production, durability, and high versatility, vinyl is one of business owners' go-to substrates for temporary and even permanent signages.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable Outdoor Signage for New Businesses"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/01/dimensional-letters-mall-storefront-exterior-building-retail-300x169.jpg"
        imageAlt="Outdoor Business Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          For signs that serve a more permanent function and are expected to last at least a few years, Royal Signs & Awnings offers durable, long-lasting substrates. Exterior signage like pole signs, fascia signs, monument signs, backlit sign boxes, channel letters, electronic signs, pylon signs, and more are great for establishing a sense of permanence and stability for your new business.
        </p>
        <p>
          If you want to utilize the glass windows on your building, window and glass decals are also very useful. They are affordable, highly customizable, easy to apply, easy to remove, and easy to replace, making them perfect for temporary announcements such as being finally open for business or a grand opening sale.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
