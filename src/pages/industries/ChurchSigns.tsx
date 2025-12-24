import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ChurchSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Church Signs", path: "/church-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Church Signs"
      heroImage="/images/industries/church-signs/06-custom-monument-outdoor-message-board.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Church Signs"
        image="/images/industries/church-signs/05-custom-monument-outdoor-message-board-300x300.jpg"
        imageAlt="Church Signs"
      >
        <p className="mb-4">
          Churches and religious organizations play a vital role in their communities, and effective signage helps them connect with current members while reaching out to those seeking a spiritual home. The right church sign communicates your message, reflects your values, and welcomes visitors with warmth and hospitality.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has extensive experience creating signage for churches and religious organizations of all denominations. We understand the unique needs of faith-based organizations and work respectfully with your leadership to create signs that honor your traditions while effectively communicating with your community.
        </p>
        <p className="mb-4">
          From traditional monument signs to modern LED message boards, from wayfinding signs to interior sanctuary elements, we offer a complete range of signage solutions for churches of all sizes. Our team works closely with you to understand your needs and create signs that reflect the spirit of your congregation.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Monument Signs for Churches"
        image="/images/industries/church-signs/04-custom-monument-outdoor-message-board-150x150.jpg"
        imageAlt="Church Monument Signs"
      >
        <p className="mb-4">
          Monument signs are a popular choice for churches because they convey permanence, stability, and dignity. These ground-level signs can be designed in a variety of styles to match your church's architecture and aesthetic preferences.
        </p>
        <p className="mb-4">
          Whether you prefer a classic stone or brick monument, a modern illuminated design, or something in between, Royal Signs & Awnings can create a monument sign that makes a powerful first impression and helps visitors find your church.
        </p>
        <p>
          Our monument signs are built to last, using high-quality materials that withstand the elements while maintaining their appearance for years to come.
        </p>
      </ContentSection>

      <ContentSection
        title="LED Message Boards"
        image="/images/industries/church-signs/07-custom-wall-vinyl-step-repeat-mural-300x225.jpg"
        imageAlt="Church LED Message Boards"
        imagePosition="left"
      >
        <p className="mb-4">
          Electronic message boards allow churches to share service times, upcoming events, inspirational messages, and community announcements with passersby. These versatile signs can be updated easily and frequently, making them an excellent communication tool.
        </p>
        <p className="mb-4">
          Modern LED message boards are energy-efficient, highly visible, and available in a range of sizes and resolutions to suit your needs and budget. They can be integrated into existing monument signs or installed as standalone displays.
        </p>
        <p>
          Royal Signs & Awnings can help you select the right electronic message board for your church and provide training on how to use it effectively. We also offer ongoing support and maintenance services to keep your sign running smoothly.
        </p>
      </ContentSection>

      <ContentSection title="Interior Church Signage">
        <p className="mb-4">
          The interior of your church should be welcoming and easy to navigate for both regular members and first-time visitors. Wayfinding signs help people find classrooms, restrooms, offices, and other facilities, while directional signs guide them to parking areas and entrances.
        </p>
        <p className="mb-4">
          Sanctuary elements such as wall lettering, crosses, and other religious symbols can enhance your worship space and create a meaningful environment for spiritual reflection. These elements can be designed to complement your church's architecture and interior design.
        </p>
        <p>
          Royal Signs & Awnings offers a full range of interior signage solutions for churches, from practical wayfinding signs to decorative sanctuary elements. We work with you to create a cohesive look that reflects your church's identity and values.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
