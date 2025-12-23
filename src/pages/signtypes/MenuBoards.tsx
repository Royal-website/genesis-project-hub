import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function MenuBoards() {
  return (
    <UniversalPageTemplate
      title="Menu Boards"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/menu-boards-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Menu Boards", path: "/menu-boards" },
      ]}
    >
      <ContentSection
        title="Houston Menu Boards"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-menu-board-300x225.jpg"
        imageAlt="custom menu board"
      >
        <p className="mb-4">
          Menu boards are essential for restaurants, cafes, and food service businesses. A well-designed menu board not only displays your offerings but also influences purchasing decisions and enhances the customer experience.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create custom menu boards that are both functional and visually appealing, helping your business communicate effectively with customers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Digital Menu Boards"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/digital-menu-board-300x225.jpg"
        imageAlt="digital menu board"
        imagePosition="left"
      >
        <p className="mb-4">
          Digital menu boards allow you to easily update prices, add new items, and display promotional content. They're perfect for businesses with frequently changing menus or those wanting to showcase dynamic content.
        </p>
        <p>
          We provide complete digital menu solutions including hardware, software, and content management systems.
        </p>
      </ContentSection>

      <ContentSection
        title="Static & Illuminated Menus"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/illuminated-menu-board-300x225.jpg"
        imageAlt="illuminated menu board"
      >
        <p className="mb-4">
          Traditional static menu boards remain popular for their reliability and classic appeal. We offer both illuminated and non-illuminated options to suit your needs.
        </p>
        <p>
          Our static menu boards can be designed with changeable elements for easy price updates and menu modifications.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Menu Boards Consultation"
      >
        <p className="mb-4">
          Ready to upgrade your restaurant's menu display? Royal Signs & Awnings is here to help you create menu boards that drive sales and enhance your customer experience.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Menu Board Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
