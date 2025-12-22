import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function HotelSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Hotel Signs", path: "/hotel-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Hotel Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/royal-signs-fallback.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Hotel Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-lobby-hotel-concierge-signage.jpg"
        imageAlt="Hotel Lobby Signage"
      >
        <p className="mb-4">
          In the hospitality industry, first impressions are everything. Your hotel signs are often the first interaction guests have with your property, setting the tone for their entire stay. From the moment they see your exterior signage to the wayfinding signs that guide them through your property, every sign contributes to the guest experience.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings specializes in creating comprehensive hotel signage packages that reflect your brand's personality while providing essential information to guests. Whether you operate a boutique hotel, a major chain property, or a resort, we have the expertise to meet your unique signage needs.
        </p>
        <p className="mb-4">
          Our hotel signs are designed with both aesthetics and functionality in mind. We understand that your signage must complement your property's décor while effectively guiding guests and promoting your amenities.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Exterior and Monument Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-illuminated-cabinet-monument-hospitality-holiday-inn-signage-300x199.jpg"
        imageAlt="Hotel Monument Sign"
      >
        <p className="mb-4">
          Your hotel's exterior signage serves multiple purposes: it helps travelers find your property, communicates your brand identity, and creates a welcoming first impression. Royal Signs & Awnings creates stunning exterior signs that make your hotel stand out, whether you're located on a busy highway or in a quiet downtown area.
        </p>
        <p className="mb-4">
          Our monument signs and building signs are designed for maximum visibility and durability. We use premium materials and the latest illumination technology to ensure your signs look great day and night, in all weather conditions.
        </p>
        <p>
          For chain hotels, we ensure all signage meets brand standards while maximizing local appeal. For independent properties, we help develop unique signage that sets you apart from the competition.
        </p>
      </ContentSection>

      <ContentSection
        title="Lobby and Interior Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/01/lobby-lighted-office-wall-indoor-backlit-300x286.jpg"
        imageAlt="Hotel Lobby Sign"
        imagePosition="left"
      >
        <p className="mb-4">
          The lobby is the heart of your hotel, and your lobby signage should reflect the quality and character of your property. Royal Signs & Awnings creates elegant lobby signs that make a lasting impression on guests from the moment they arrive.
        </p>
        <p className="mb-4">
          Our interior signage solutions include directory signs, room number signs, ADA-compliant signage, and wayfinding systems that help guests navigate your property with ease. We also create custom signage for restaurants, spas, fitness centers, and other amenities.
        </p>
        <p>
          All our interior signs are designed to complement your property's décor while meeting all applicable codes and regulations, including ADA requirements.
        </p>
      </ContentSection>

      <ContentSection
        title="Digital and Directory Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/indoor-digital-hospitality-informational-business-signage-300x200.jpg"
        imageAlt="Digital Hotel Signage"
      >
        <p className="mb-4">
          Modern hotels increasingly rely on digital signage to communicate with guests and promote amenities. Royal Signs & Awnings provides digital signage solutions that can display everything from welcome messages to event schedules to restaurant menus.
        </p>
        <p className="mb-4">
          Our digital signs can be integrated with your property management system to display real-time information, making them an invaluable tool for guest communication. They can also be used to promote on-site amenities, special offers, and local attractions.
        </p>
        <p>
          We also provide traditional directory signage for lobbies, elevators, and hallways, ensuring guests can easily find their way around your property.
        </p>
      </ContentSection>

      <ContentSection title="Free Hotel Signs Consultation">
        <p className="mb-4">
          Your hotel deserves signage that matches the quality of service you provide. Royal Signs & Awnings is committed to delivering premium hotel signs that enhance the guest experience and reinforce your brand identity.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation with a Hotel Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
