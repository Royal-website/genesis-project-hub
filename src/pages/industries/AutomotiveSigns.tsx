import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function AutomotiveSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Automotive Signs", path: "/automotive-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Automotive Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Automotive-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Automotive Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-dimensional-letter-banner-flag-dealership-signs-300x212.jpg"
        imageAlt="Attractive Outdoor Signs"
      >
        <p className="mb-4">
          In the United States, the automotive industry is huge and highly competitive. In terms of production and sales, the US is actually considered to be one of the largest automobile markets in the world. So to stand out from competition and stay on top of the market, your business is going to need as much help as you can.
        </p>
        <p className="mb-4">
          Getting yourself impressive and impactful automotive signs is a great move for business owners like you. When done right, automotive signs help you get noticed by your target audience, they enhance positive customer experience, and reinforce your brand identity...and all these ultimately help boost your business.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is a trusted local signage provider that specializes in catering to the needs of the automotive business. Automotive signs come in different shapes, sizes, substrates, and signage types, and we are equipped with the technical know-how, technology, and talent to deliver the exact signs that you need. Whether you're looking for outdoor signs, indoor signs, pole signs, LED signs, vinyl banners, flags or other signs, we're here for you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Lighted and Illuminated Automotive Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/custom-lighted-led-pole-pylon-sign-300x225-300x225.jpg"
        imageAlt="Custom lighted LED pole pylon sign"
      >
        <p className="mb-4">
          Catching your market's attention is very important in standing out among the competition. With lighted and illuminated outdoor signage, you have the opportunity to advertise your brand day and night. And by introducing your brand to the people who are most likely to avail themselves of the services and products you offer, you make it easier for your business to attract customers in through your doors.
        </p>
        <p className="mb-4">
          But illuminated signs' benefits aren't just limited to the outdoors, having them inside your establishment elevates your business's appeal. Backlit lobby signs, lighted informational signs, and lightbox signs add both illumination and sophistication to your business, and these contribute to giving your customers a positive customer experience.
        </p>
        <p>
          Royal Signs & Awnings has a vast selection of lighted signs, illuminated signs, and even LED signs for businesses in the automotive industry. From pole signs, to building or fascia signs, to dimensional letters, to wall signs, to message boards, and even to lighted exit signs, Royal Signs & Awnings has you covered.
        </p>
      </ContentSection>

      <ContentSection
        title="Versatile Vinyl Signs For All Occasions"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-car-dealership-lighted-custom-signs-300x212.jpg"
        imageAlt="Attractive Indoor Dealership Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          In the automotive industry, promotions and announcements are always around...there could be a season sale, a new arrival, a year-end promo, an exhibit, a new financing opportunity. And wherever there's a promotion, there's always space for high-quality promotional signage.
        </p>
        <p className="mb-4">
          Vinyl is among the most popular materials of choice for promotional signs in automotive businesses. Affordable, durable, and easy to produce, vinyl can be used to make promotional banners, flag signs, retractable banners, mesh banners, glass and window stickers, vehicle wraps, and even signboards. You simply can't go wrong with professionally made vinyl signs.
        </p>
        <p>
          Royal Signs & Awnings is also equipped with state-of-the-art large-scale printers and we can help you by bringing your designs to life in full-color digital prints. If you don't have designs yet, don't worry about it! We are full-service sign company and we have a team of talented graphic artists who specialize in strategic sign design. Royal Signs & Awnings can walk with you through the entire sign-making process...from design all the way to maintenance and repair!
        </p>
      </ContentSection>

      <ContentSection title="Car Wraps and Vehicle Decals">
        <p className="mb-4">
          If you have a fleet of company vehicles, whether cars, trucks, or vans, you have the unique opportunity to use them as moving billboards! Vehicle wraps and car decals are excellent marketing tools that get your business noticed wherever you go. They're cost-effective, durable, and can be customized to fit your brand perfectly.
        </p>
        <p>
          Royal Signs & Awnings specializes in designing and installing high-quality vehicle wraps that turn your fleet into a powerful advertising medium. Our wraps are made from premium vinyl materials that protect your vehicle's original paint while showcasing your brand in vivid, eye-catching colors.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
