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
        title="Houston Restaurant Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/restaurant-signs-300x212.jpg"
        imageAlt="Restaurant Signs"
      >
        <p className="mb-4">
          A good sign catches people's attention; a great sign actually gets these people to step into your restaurant and try your food. Here at Royal Signs & Awnings, we don't settle for just good restaurant signs…we design and deliver GREAT ones.
        </p>
        <p className="mb-4">
          Effective signage for restaurants starts outside your building and carries through your facilities, providing an attractive, cohesive, and professional feel. We want potential customers to experience the quality of service that you offer from the moment they set their eyes on your sign.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="High-Visibility Outdoor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/restaurant-outdoor-signs-300x212.jpg"
        imageAlt="Restaurant Outdoor Signs"
      >
        <p className="mb-4">
          When a potential customer passes by your restaurant, those precious few seconds they spend looking at your signage will make all the difference. We believe in the power of outdoor signs that are stylishly made and strategically placed…and that's exactly what we intend to create for you.
        </p>
        <p>
          It's important for each business to have storefront signs that are easy to see and lovely to look at, especially if your restaurant is located in a place where there's a lot of traffic and tourists. Our local signage experts can help you choose the sign type that best suits your brand and budget, whether it's a backlit sign, illuminated sign, pylon sign, channel letters, 3D letters, etc.
        </p>
      </ContentSection>

      <ContentSection
        title="Indoor Signs that Impress and Inform"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/restaurant-menu-boards-300x212.jpg"
        imageAlt="Restaurant Menu Boards"
        imagePosition="left"
      >
        <p className="mb-4">
          We don't stop at making your restaurant look good on the outside. Our years of experience have taught us that customers pay for the overall dining experience. And this means your establishment has to look good on the inside, too.
        </p>
        <p>
          With artfully designed and carefully crafted indoor signs, Royal Signs & Awnings helps your business achieve that polished, stylish look. We create custom wall murals, standard or digital menu boards, wayfinding signs, and ADA signs that speak volumes about your service.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
