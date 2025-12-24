import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function DoorSigns() {
  return (
    <UniversalPageTemplate
      title="Door Signs"
      subtitle="Design | Production | Installation"
      heroImage="/images/door-signs/vinyl-door-film.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Door Signs", path: "/door-signs" },
      ]}
    >
      <ContentSection
        title="Houston Door Signs"
        image="/images/door-signs/vinyl-door-film.jpg"
        imageAlt="vinyl door film"
      >
        <p className="mb-4">
          Royal Signs & Awnings boosts your business visibility with custom door signs tastefully and strategically designed, manufactured, and installed by local sign and graphic experts.
        </p>
        <p className="mb-4">
          We make sure that your customers and visitors witness the quality and professionalism of your work even before they step inside your business.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has been in the sign-making industry for many years and we've learned that effective door signage comes from a good mix of art and function. Not only must they catch one's attention, door signs should also be able to inform, guide, and direct.
        </p>
        <p className="mb-4">
          With a variety of materials to choose from, you can get attractive door sign that suit your taste and budget—whether it's perforated film, die-cut vinyl, laminated vinyl, aluminum nameplates, or sliders.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings looks forward to supporting your brand professionalism with branded door signs and graphics!
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-primary hover:underline">(281) 645-9935</a> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Attract Potential Customers"
        image="/images/door-signs/vinyl-door-graphics.jpg"
        imageAlt="custom vinyl door graphics"
        imagePosition="left"
      >
        <p className="mb-4">
          Give your business the best first impression. A door sign that's customized to fit your business's unique style and brand can do just that.
        </p>
        <p className="mb-4">
          By effectively showcasing your business name and logo, professionally done door signs make your business easy to find and hard to forget. Exterior signage is the #1 attractant of new customers. Providing them with easy access to the information they need right on the front door of your business makes it easy for them to understand how to best utilize your services.
        </p>
        <p>
          From adding your logo to providing important customer assistance information, the doors of your building tell potential customers provide a lot. Not only do they impart information, they also showcase your professionalism and level of attention to detail, which are both important to any consumer choosing a new provider.
        </p>
      </ContentSection>

      <ContentSection
        title="Hours of Operation Signs"
        image="/images/door-signs/hours-sign.jpg"
        imageAlt="custom hours of operation signs"
      >
        <p className="mb-4">
          Give your customers the convenience they deserve by making sure they know your up to date business hours with attractive, professional produced vinyl hours of operation signs by Royal Signs & Awnings!
        </p>
        <p className="mb-4">
          Your hours of operation is one of the most frequently looked for things as clients and potential clients pass by your business. Having this information clear and ready on a door sign makes it a whole lot easier for them to either step right in or schedule a future appointment.
        </p>
        <p>
          If you have holiday closures or special holiday hours, these can easily be added using temporary vinyl lettering or graphics for a cohesive, polished look. Your hours of operation can be integrated into your other door and <Link to="/window-signs" className="text-primary hover:underline">window signage</Link> for the total business package.
        </p>
      </ContentSection>

      <ContentSection
        title="ADA-Compliant Signage"
        image="/images/door-signs/ada-sign.jpg"
        imageAlt="ADA Compliant Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings is closely familiar with the Americans with Disabilities Act of 1990 (ADA) Standards for Accessible Design. Whether you need door signs with visual characters, tactile characters, and/or braille, we can customize them to meet the highly specific requirements of the law.
        </p>
        <p>
          Our signage expertise doesn't stop at designing and producing ADA-compliant door signs either! We see to it that your signs are positioned and installed according to ADA standards so you can better serve customers and visitors. We provide compliant <Link to="/ada-signs" className="text-primary hover:underline">ADA signage</Link> for throughout your entire facility, allowing you to present a cohesive, branded experience.
        </p>
      </ContentSection>

      <ContentSection
        title="Licensing/Business Information Signs"
        image="/images/door-signs/business-door-signs.jpg"
        imageAlt="custom business door signs and graphics"
      >
        <p className="mb-4">
          Does your office/store/shop have free Wi-Fi? Are you licensed to serve alcohol? Does your business offer something others might not? Show potential customers what you've got by displaying features, licensing, and business information right at your doorstep…and we'll help you get creative at it, too!
        </p>
        <p>
          You can use wood, aluminum, brass, plastic, and other materials for your door signs and graphics. Royal Signs & Awnings helps you let passersby know that you have what they're looking for. Our signage specialists can help you pick the size, font, color, and design that would best advertise what your business has in store.
        </p>
      </ContentSection>

      <ContentSection
        title="Room Identification Signage"
        image="/images/door-signs/room-id-signs.jpg"
        imageAlt="room identification signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Door signage can be used throughout your facilities for room identification and wayfinding. Make it easy for your visitors, guests, clients, customers, and staff to easily locate the areas of your facility they need the most.
        </p>
        <p>
          Effective <Link to="/room-id-signs" className="text-primary hover:underline">room identification signage</Link>, <Link to="/safety-signs" className="text-primary hover:underline">safety signage</Link>, and room authorization signage lets everyone know where they should and shouldn't be, and what they can expect to find on the other side of a particular door. This can be ideal for keeping customers from staff areas, or for highly-compartmentalized facilities like hospitals, schools, and office buildings.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Door Signs Consultation"
      >
        <p className="mb-4">
          Get more customers in the door with effective door signs and graphics! Royal Signs & Awnings is here for you, providing the cohesive business signs you need to attract and assist your customers, support your employees, and stay on the right side of the law.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-primary hover:underline">(281) 645-9935</a> for a Free Consultation with a signage expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
