import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function HospitalSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Hospital Signs", path: "/hospital-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Hospital Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Hospital-Signs.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Hospital Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/channel-letters-banner-outdoor-storefront-building-illuminated-backlit-sign-300x225.jpg"
        imageAlt="cohesive storefront signage collection"
      >
        <p className="mb-4">
          In the healthcare industry, time is of the essence. This especially applies in the often chaotic and urgent environment of hospitals, where pressure can come from all sides and every second matters. Because there are still quite a lot of things that need to be taken care of manually in US healthcare delivery, hospitals need all the help they can get to provide patients with timely health care...and this is where hospital signs come in.
        </p>
        <p className="mb-4">
          Hospital signs are easy to overlook because we see them practically everywhere inside a medical facility, but those that are effectively designed, fabricated, and installed are very rarely ignored. They catch people's attention, clearly convey the information, and provide the necessary instructions in a matter of moments so that no time is wasted.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is a trusted local signage company that specializes in designing, producing, and installing effective and guidelines-compliant hospital signs. We are trained and experienced in creating signs that help inform, direct, warn, and instruct patients and hospital staff in medical facilities.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Outdoor Hospital Signs and Wayfinders"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-hopsital-wayfinding-emergency-main-lobby-signage-300x200.jpg"
        imageAlt="Attractive Hospital Wayfinding Signage"
      >
        <p className="mb-4">
          During a medical emergency, it's vital that patients and hospital staff know exactly the right room they should go to and the right directions to get there. Proper directions, instructions, and warnings should start even before the patients steps inside the hospital...this is why outdoor hospital signs and wayfinders are among Royal Signs & Awnings's best selling products.
        </p>
        <p className="mb-4">
          Clearly mark hospital zones and provide incoming traffic with helpful directions using outdoor hospital signs and wayfinders by Royal Signs & Awnings. You can keep spaces open and available for emergency vehicles by placing no-parking signs on poles or on walls. To enhance visibility especially in low light, we also offer reflective signs.
        </p>
        <p>
          Here at Royal Signs & Awnings, we make sure that the signs we deliver are durable. Made using engineer grade aluminum, our signs are strong enough to withstand harsh outdoor elements and stay effective for a long time.
        </p>
      </ContentSection>

      <ContentSection
        title="Digital and Electronic Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-waiting-digital-gochiro-sign-300x196.jpg"
        imageAlt="Indoor Lobby With Digital Monitor"
        imagePosition="left"
      >
        <p className="mb-4">
          Electronic signs have been widely used in hospitals for quite some time now, and for good reason too! Usually placed in waiting rooms, halls, and lobbies, digital signs have greatly improved communication, information, and even entertainment to patients or visitors who are waiting for their families, results, paperwork, or their turn.
        </p>
        <p className="mb-4">
          Digital signage by Royal Signs & Awnings can be hooked to your hospital's system and can display important information such as queuing instructions and announcements addressed to the patients, visitors, hospital staff, and healthcare providers.
        </p>
        <p>
          Our electronic signage can also help lower stress levels and give patients and visitors a more positive experience inside your facility. Royal Signs & Awnings's digital signs allow you to play relaxing and informative videos is specific areas of the hospital.
        </p>
      </ContentSection>

      <ContentSection
        title="ADA and Bilingual Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-lobby-bilingual-wayfinding-signage-256x300.jpg"
        imageAlt="Bilingual Wayfinding Signage"
      >
        <p className="mb-4">
          Because time is of the essence, it is ideal that everyone who has access to your hospital signs should be able to process and understand the information in a matter of seconds. But the problem is that there are a lot of people who aren't able to read signs and it would take a bit of time to translate them. Royal Signs & Awnings's solution for this is providing ADA sign and bilingual signs.
        </p>
        <p className="mb-4">
          By making signs that comply to the guidelines set by the American Disabilities Acts (ADA) Standards for Accessible Design, Royal Signs & Awnings helps people with disabilities have access to important and urgent information.
        </p>
        <p>
          So whether your signs need visual characters, tactile characters, and/or braille, Royal Signs & Awnings is fully capable of designing, printing, fabricating, and installing hospital signs that comply with the set guidelines. Royal Signs & Awnings also produces bilingual signs that cater to persons who cannot understand signs in English.
        </p>
      </ContentSection>

      <ContentSection title="Free Hospital Signs Consultation">
        <p className="mb-4">
          We understand just how important time and urgency is in the healthcare industry, and Royal Signs & Awnings is prepared to help give your hospital out in that aspect. Our hospital signs are attractive, effective, durable, and legally compliant, and we're confident they can bring a positive impact to your facility.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
