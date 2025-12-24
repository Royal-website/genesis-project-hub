import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function BarSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Bar Signs", path: "/bar-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Bar Signs"
      heroImage="/images/industries/bar-signs/06-lighted-1-1024x683.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Bar Signs"
        image="/images/industries/bar-signs/04-custom-indoor-lettering-restaurant-300x204.jpg"
        imageAlt="Bar Signs"
      >
        <p className="mb-4">
          In the competitive nightlife and hospitality industry, having the right signage can make all the difference between a packed house and an empty bar. Eye-catching bar signs not only help customers find your establishment but also set the mood and atmosphere before they even walk through the door.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings specializes in creating custom bar signs that capture the unique personality of your establishment. Whether you're running a cozy neighborhood pub, a trendy cocktail lounge, or a high-energy sports bar, we have the expertise to design and fabricate signs that perfectly represent your brand.
        </p>
        <p className="mb-4">
          From neon-style LED signs to classic wooden signs, from illuminated marquees to subtle dimensional letters, we offer a wide range of options to suit every style and budget. Our team works closely with you to understand your vision and bring it to life in a way that attracts customers and enhances your establishment's appeal.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Bar Signs"
        image="/images/industries/bar-signs/07-lighted-1-300x200.jpg"
        imageAlt="Illuminated Bar Signs"
      >
        <p className="mb-4">
          Nothing says "open for business" quite like a glowing sign on a dark street. Illuminated signage is essential for bars and nightclubs that primarily operate during evening hours. These signs ensure your establishment remains visible and inviting throughout the night.
        </p>
        <p className="mb-4">
          LED technology has revolutionized the world of illuminated signs, offering energy-efficient options that can replicate the classic look of neon while being more durable and cost-effective to operate. Channel letters, backlit signs, and edge-lit displays are all popular choices for bar exteriors.
        </p>
        <p>
          Royal Signs & Awnings offers a full range of illuminated signage solutions designed specifically for the hospitality industry. We can create custom LED signs that match your brand colors and create the perfect ambiance for your establishment.
        </p>
      </ContentSection>

      <ContentSection
        title="Interior Bar Signage and Displays"
        image="/images/industries/bar-signs/05-custom-indoor-lettering-restaurant.jpg"
        imageAlt="Interior Bar Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          The interior of your bar is just as important as the exterior when it comes to creating the right atmosphere. Menu boards, promotional signs, and decorative elements all contribute to the overall customer experience.
        </p>
        <p className="mb-4">
          Chalkboard-style menu boards, backlit drink displays, and wall graphics can help showcase your offerings while adding to the aesthetic appeal of your space. Digital menu boards offer flexibility for bars that frequently update their offerings or run special promotions.
        </p>
        <p>
          From behind-the-bar displays to bathroom signage, Royal Signs & Awnings can help you create a cohesive look throughout your establishment that reinforces your brand and enhances the customer experience.
        </p>
      </ContentSection>

      <ContentSection title="Promotional and Event Signage">
        <p className="mb-4">
          Happy hours, live music nights, trivia competitions, and seasonal specials all benefit from effective promotional signage. A-frame signs, banners, and window graphics are excellent ways to communicate with potential customers and drive traffic to your events.
        </p>
        <p>
          Royal Signs & Awnings can produce both permanent and temporary signage solutions to support your marketing efforts. Our high-quality materials ensure that even temporary signs look professional and represent your establishment well.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
