import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function HospitalitySigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Hospitality Signs", path: "/hospitality-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Hospitality Signs"
      heroImage="/images/industries/hospitality-signs/06-indoor-lobby-hotel-concierge-signage.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Hospitality Signs"
        image="/images/industries/hospitality-signs/04-sign-installation-300x208.jpg"
        imageAlt="Beautiful Dimensional Letters for Your Lobby"
      >
        <p className="mb-4">The hospitality industry is a multibillion-dollar industry and is currently the largest one in the world. It relies on the consumers' disposable income, and because customers are paying for the experience that they get, customer satisfaction is a key defining feature in the hospitality industry.</p>
        <p className="mb-4">As a businessperson in this industry, you'd want to get as much help as you can in making sure that your customers are happy, satisfied, and taken care of. Professionally designed, fabricated, and installed hospitality signs are excellent tools for that.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Illuminated Outdoor Signs" image="/images/industries/hospitality-signs/07-indoor-digital-hospitality-informational-business-signage-300x200.jpg" imageAlt="Attractive Illuminated Cabinet Sign">
        <p className="mb-4">Being in such a highly competitive industry means giving it everything you've got and making the most of whatever you have. By getting illuminated outdoor signage such as dimensional letters, pole signs, sign boxes, and monument signs, you get to promote your brand and business 24/7.</p>
        <p>Royal Signs & Awnings is a full-service sign company that fabricates all signs in house so we are fully equipped and experienced to produce high quality lighted signs for your business.</p>
      </ContentSection>
      <ContentSection title="Highly Customizable Business Signs" image="/images/industries/hospitality-signs/08-indoor-digital-hospitality-informational-business-signage-768x512.jpg" imageAlt="Attractive Custom Wayfinding Signage" imagePosition="left">
        <p className="mb-4">Making your business stand out using signage is a lot trickier than you may think. Your business signs must be your potential customers' source for information about what your business is, what you offer, and how your services benefit them.</p>
        <p>Royal Signs & Awnings is an expert at custom-crafting signs, and our secret to this is working very closely with you or your marketing team in order to align your vision with the products we deliver you.</p>
      </ContentSection>
      <ContentSection title="Free Hospitality Signs Consultation">
        <p className="mb-4">Royal Signs & Awnings has been in the sign-making business for a long time, and our experience has taught us just how important it is for hospitality businesses to be able to speak their brand message.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
