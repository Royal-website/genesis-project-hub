import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function DealershipSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Dealership Signs", path: "/dealership-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Dealership Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/royal-signs-fallback.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Dealership Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-dimensional-letter-banner-flag-dealership-signs-300x212.jpg"
        imageAlt="Attractive Outdoor Dealership Signs"
      >
        <p className="mb-4">
          In the highly competitive automotive dealership industry, standing out from the crowd is essential. Your dealership signs are often the first impression potential customers have of your business, and they play a crucial role in attracting foot traffic and building brand recognition.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings specializes in creating impactful dealership signage that captures attention and drives customers to your showroom. From towering pole signs visible from the highway to elegant showroom displays, we provide comprehensive signage solutions tailored to your dealership's unique needs.
        </p>
        <p className="mb-4">
          Our team understands the automotive industry's specific requirements and works closely with dealership owners to create signage that reflects their brand identity while maximizing visibility and customer engagement.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="High-Visibility Outdoor Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/custom-lighted-led-pole-pylon-sign-300x225-300x225.jpg"
        imageAlt="Custom LED Pole Sign"
      >
        <p className="mb-4">
          Your dealership needs to be visible from a distance to attract customers driving by. Our illuminated pole signs, pylon signs, and monument signs are designed for maximum visibility day and night. These high-impact signs help establish your dealership as a landmark in the community.
        </p>
        <p className="mb-4">
          We use the latest LED technology to create energy-efficient signs that provide brilliant illumination while reducing operating costs. Our signs are built to withstand harsh weather conditions and provide years of reliable service.
        </p>
        <p>
          Whether you're a new or used car dealership, motorcycle dealer, or RV center, Royal Signs & Awnings has the expertise to create outdoor signage that drives traffic to your business.
        </p>
      </ContentSection>

      <ContentSection
        title="Showroom and Interior Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-car-dealership-lighted-custom-signs-300x212.jpg"
        imageAlt="Indoor Dealership Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Once customers enter your showroom, your interior signage continues the sales process. From directional signs that guide customers to different departments to promotional displays highlighting current offers, every sign contributes to the customer experience.
        </p>
        <p className="mb-4">
          We create custom showroom signage including brand logos, department signs, pricing displays, and promotional banners that reinforce your dealership's professionalism and help close sales.
        </p>
        <p>
          Our interior signs are designed to complement your dealership's décor while effectively communicating important information to your customers.
        </p>
      </ContentSection>

      <ContentSection title="Free Dealership Signs Consultation">
        <p className="mb-4">
          Your dealership deserves signage that matches the quality of the vehicles you sell. Royal Signs & Awnings is committed to delivering premium dealership signs that enhance your brand image and drive sales.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation with a Dealership Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
