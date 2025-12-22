import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function RestaurantSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Restaurant Signs", path: "/restaurant-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Restaurant Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Restaurant-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Restaurant Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/restaurant-storefront-signs-300x212.jpg"
        imageAlt="Restaurant Storefront Signs"
      >
        <p className="mb-4">
          Great food deserves great signage! Royal Signs & Awnings creates eye-catching restaurant signs that attract hungry customers and build your brand. From fast-casual to fine dining, we provide signage solutions that reflect your restaurant's unique personality and cuisine.
        </p>
        <p className="mb-4">
          We understand that restaurant signage needs to work hard day and night, attracting drive-by traffic and guiding customers once they arrive. Our illuminated signs, menu boards, and interior displays help you create a complete dining experience.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Restaurant Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/restaurant-channel-letters-300x212.jpg"
        imageAlt="Restaurant Channel Letters"
      >
        <p className="mb-4">
          Make your restaurant visible day and night with illuminated signage. LED channel letters, backlit cabinet signs, and neon-style displays attract attention and create an inviting atmosphere for diners.
        </p>
        <p>
          Our energy-efficient LED options provide brilliant illumination while reducing your energy costs—a win for your bottom line and the environment.
        </p>
      </ContentSection>

      <ContentSection
        title="Menu Boards & Interior Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/menu-board-signs-300x212.jpg"
        imageAlt="Menu Board Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Clear, attractive menu boards are essential for quick-service restaurants and cafes. We create custom menu boards, digital displays, and promotional signage that help customers make decisions and enhance the ordering experience.
        </p>
        <p>
          Interior signage including wall graphics, table tents, and promotional displays complete your restaurant's branding and encourage upselling and repeat visits.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
