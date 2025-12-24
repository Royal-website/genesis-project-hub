import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function FleetWraps() {
  return (
    <UniversalPageTemplate
      title="Commercial Fleet Wraps & Graphics"
      subtitle="Design | Production | Installation"
      heroImage="/images/signtypes/fleet-wraps/fleet-wrap.png"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Fleet Wraps", path: "/fleet-wraps" },
      ]}
    >
      <ContentSection
        title="Houston Commercial Fleet Wraps & Graphics"
        image="/images/signtypes/fleet-wraps/fleet-wrap.png"
        imageAlt="Custom Fleet Vehicle Wraps"
      >
        <p className="mb-4">
          Get your brand noticed with commercial vehicle graphics and fleet wraps by Royal Signs & Awnings!
        </p>
        <p className="mb-4">
          Providing attractive, cohesive <Link to="/vehicle-wraps" className="text-primary hover:underline">vehicle wraps</Link> that showcase your brand provide you with increased visibility and improved customer perception of your business. With custom design, production, and installation for all of your vehicle types, we ensure brand consistency.
        </p>
        <p className="mb-4">
          Delivery trucks, work trucks, trailers, vans, buses, semis, corporate cars, boats, and even lawnmowers, ATVs, and golf carts can all be utilized for brand promotion. All you need are the right graphics, the right placement, and the right company to get the job done.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is your local fleet wrap provider, handling every aspect of your project. We can't wait to work with you!
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-primary hover:underline">(281) 645-9935</a> for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Commercial Wraps For All Vehicle Types"
        image="/images/signtypes/fleet-wraps/fleet-vehicles.jpg"
        imageAlt="custom commercial fleet vehicle graphics"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings provides a variety of levels of wrap services for all of your vehicle types. From magnets for contractors to full wraps for food trucks, we ensure that your message is properly displayed for the specific vehicle type and use.
        </p>
        <p className="mb-4">
          You may only desire graphics or a logo for some vehicles, while other vehicles may require full, marine-grade wraps. Royal Signs & Awnings works with you to determine the right material, placement, and marketing elements for each of your fleet vehicles, ensuring consistency and precision through all marketing channels.
        </p>
        <p>
          Whether you prefer an identical design for all vehicles, cohesive custom designs for each, or need help determining how to best present your brand and marketing message on your corporate vehicles, Royal Signs & Awnings is with you every mile of the journey.
        </p>
      </ContentSection>

      <ContentSection
        title="Custom Crafted For Your Business"
        image="/images/signtypes/fleet-wraps/custom-design.jpg"
        imageAlt="custom design and manufacturing"
      >
        <p className="mb-4">
          Fleet vehicle graphics by Royal Signs & Awnings are all custom crafted for your business and brand, utilizing your brand messaging, marketing elements, logos, and design ideas.
        </p>
        <p className="mb-4">
          Whether you are a construction company, a landscaper, contractor, delivery service, trucking company, or even just a local business that provides company vehicles, cohesive wraps are a great way to get your business noticed and remembered.
        </p>
        <p className="mb-4">
          With a full wrap design team, we can take your brand elements and design attractive custom wraps that perfectly complement both your message and the vehicle itself. Once we have agreed upon a final wrap design, our in-house production team ensures everything is precisely as you desire, and preps all of the elements for final installation on your commercial vehicles.
        </p>
        <p>
          We are dedicated to delivering high-quality, attractive sign, wrap, and graphic products that deliver for your business. Let's discuss how we can put your vehicles to work for you today!
        </p>
      </ContentSection>

      <ContentSection
        title="Free Fleet Wraps Consultation"
      >
        <p className="mb-4">
          If your business has multiple vehicles on the road, transporting goods or people from location to location, then fleet wraps are a must. There is no better solution for improving your brand visibility within your local market than the consistent, repetitive exposure commercial vehicle wraps provide. Your local wrap & graphics provider, Royal Signs & Awnings is committed to outstanding service and a final product that is sure to impress.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-primary hover:underline">(281) 645-9935</a> for your Free Consultation with a Fleet Wraps Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
