import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function BankSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Bank Signs", path: "/bank-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Bank Signs"
      heroImage="/images/industries/bank-signs/05-sign-installation.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Bank Signs"
        image="/images/industries/bank-signs/08-outdoor-chase-bank-monument-sign-300x165.jpg"
        imageAlt="Attractive Monument Signs"
      >
        <p className="mb-4">
          If there's anything that banks and other financial institutions would want to showcase about themselves, it's their credibility and integrity in the industry...and what better way to showcase these than with eye-catching and impactful bank signs.
        </p>
        <p className="mb-4">
          Bank signage comes in a variety of forms ideal for a variety of purposes. Royal Signs & Awnings, a trusted local bank signs provider, offers outdoor signs to display your bank's brand, indoor signs to help clients navigate your bank easily, and even digital signs that keep clients informed. Royal Signs & Awnings is not just committed to giving your financial institution a good image, we're also committed to giving your clients excellent customer experience through bank signs custom-crafted to cater to your needs.
        </p>
        <p className="mb-4">
          The best thing about partnering with a full-service sign company like Royal Signs & Awnings is the fact that we not only have the expertise and equipment to fabricate your signs for you, we also have a strong team of graphic designers, marketing experts, and sign specialists who are ready to work closely with your bank's marketing staff. We do this because we want to make sure that your signs are designed, fabricated, and installed with your brand identity in mind.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Outdoor Signs To Make Your Bank Visible"
        image="/images/industries/bank-signs/06-outdoor-bank-digital-informational-signage-300x127.png"
        imageAlt="Attractive Wayfinding Bank Signage"
      >
        <p className="mb-4">
          Just like other businesses, banks need to make themselves visible in order to catch the attention of their target market. Online marketing, social media content, and print marketing, for example, are great ways to stay visible. One tried-and-tested way of doing this, though, is with outdoor signage. Having been around for hundreds of years already, exterior signs prove to be excellent tools in getting one's business noticed.
        </p>
        <p className="mb-4">
          With today's technology and tough competition, you're going to need an exterior sign that does more than just make you visible, you need one that makes you visually appealing as well. And you can get this output if you work with professionals who specialize in making effective outdoor signage for banks.
        </p>
        <p>
          Here at Royal Signs & Awnings, you can choose from a wide selection of exterior signage options such as dimensional letters, pole signs, pylon signs, illuminated sign boxes, monument signs, channel letters, and many more.
        </p>
      </ContentSection>

      <ContentSection
        title="Portable and Affordable Temporary Signage"
        image="/images/industries/bank-signs/04-sign-installation-300x208.jpg"
        imageAlt="Attractive Outdoor Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Banks often have special promotions, new services, or important announcements that need to be communicated to customers quickly and effectively. Temporary signage provides the perfect solution for these needs without requiring a permanent installation.
        </p>
        <p className="mb-4">
          A-frame signs, banners, and pop-up displays are perfect for promoting limited-time offers, new account openings, or special rates. These portable signs can be easily moved and updated as your promotions change.
        </p>
        <p>
          Royal Signs & Awnings offers a variety of temporary signage solutions that are both professional and affordable. Our temporary signs are made with high-quality materials that can withstand outdoor conditions while maintaining a polished appearance that reflects well on your financial institution.
        </p>
      </ContentSection>

      <ContentSection title="Interior Bank Signage">
        <p className="mb-4">
          The interior of your bank should be just as well-branded as the exterior. Lobby signs, wayfinding signs, and informational displays help create a cohesive brand experience for your customers while making it easy for them to navigate your facility.
        </p>
        <p>
          From elegant dimensional letters in your lobby to clear directional signage throughout your building, Royal Signs & Awnings can help you create an interior environment that reinforces your brand identity and enhances customer experience.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
