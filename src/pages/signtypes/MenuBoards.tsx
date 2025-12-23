import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function MenuBoards() {
  return (
    <UniversalPageTemplate
      title="Menu Boards"
      subtitle="Design | Production | Installation"
      heroImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Menu Boards", path: "/menu-boards" },
      ]}
    >
      <ContentSection
        title="Houston Menu Boards"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/01/menu-board-window-vinyl-graphics-286x300.jpg"
        imageAlt="custom menu boards"
      >
        <p className="mb-4">
          Menu boards may be more useful and more important to your business than you realize. Not only do they tell your customers what food or service you can offer them, menu boards also have the potential to convey your brand message and to convince customers to purchase more from you.
        </p>
        <p className="mb-4">
          Menu boards, at their full potential, have the power to motivate your customers into making quick and confident purchasing decisions. That means impressive customer experience, satisfied customers, and additional income for your business. In order for this to happen, though, it's important that your menu boards are created by a provider that knows the science and strategy behind such signs. And Royal Signs & Awnings is exactly that.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is the perfect partner for businesses like you that want menu signs with tasteful designs and maximum impact. We ensure that every client is beyond happy with the product that they receive, and we do this with careful attention to quality and detail. Royal Signs & Awnings doesn't just manufacture run-of-the-mill signs, we make sure your menu boards are tailored to your business's needs, market, brand identity, and budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Updatable Menu Boards"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2015/03/menu-sign-1-300x200.jpg"
        imageAlt="Menu Sign"
        imagePosition="left"
      >
        <p className="mb-4">
          At Royal Signs & Awnings, we provide write-on menu boards made of various materials so you'll definitely find something to match your establishment's personality here. You can choose from chalkboard, whiteboard, ceramic, glass, dry erase boards, and many other options. Royal Signs & Awnings can create write-on menu boards suitable for table tops, hanging from the ceiling, fastened to your walls, and even on A-frames outside your establishment.
        </p>
        <p>
          Enjoy your creative freedom while adding to your business's appeal with beautifully crafted write-on menu boards from Royal Signs & Awnings.
        </p>
      </ContentSection>

      <ContentSection
        title="Cost-Efficient Menu Board Options"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/menu-board-hanging-sign-300x225.jpg"
        imageAlt="custom hanging menu board"
      >
        <p className="mb-4">
          Royal Signs & Awnings is a full-service signage provider so you if you are interested in a more economical way to display your products and services, we can help you out with a variety of other sign types!
        </p>
        <p className="mb-4">
          Vinyl, coroplast (or corrugated plastics), acrylic, and aluminum are among Royal Signs & Awnings's go-to materials for low-cost advertising tools. They are very widely used and highly versatile sign materials. Why? It's simple…because they're reliable.
        </p>
        <p>
          You can choose from full-color vinyl prints, transparent boards, hanging signs, backlit menu boards, illuminated boxes, and many more. Royal Signs & Awnings can definitely give you menu board options durable enough to last years even outdoors, but affordable enough to be replaced regularly for menu updates and changes.
        </p>
      </ContentSection>

      <ContentSection
        title="Dynamic Digital Menu Boards"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-digital-menu-boards-1-300x225.jpg"
        imageAlt="custom digital menu board"
        imagePosition="left"
      >
        <p className="mb-4">
          Electronic signs have become the most exciting way for businesses to showcase their brands, products, and promotions.
        </p>
        <p className="mb-4">
          Traditional menu signs are static, and constantly changing them might put a dent in your budget. However, Royal Signs & Awnings is fully convinced that electronic menu boards can engage your customers. Our digital signs allow you to fully customize your menu board content and even add photos or videos to it, allowing your customers to have the dynamic experience they deserve.
        </p>
        <p>
          Royal Signs & Awnings produces a wide selection of high-quality digital menu boards ranging from monochrome, colored, indoor, outdoor, single-line, multiple-line displays, LCD, LED, and projection signs. With digital menu boards from Royal Signs & Awnings, you get to display your products and services in a personalized, impactful, versatile, and dynamic way!
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/custom-menu-board-restaurant-indoor-224x300.jpg"
        imageAlt="custom menu board sign"
      >
        <p className="mb-4">
          Royal Signs & Awnings is a trusted name in the sign-making industry and has been doing quality signs for many years now. We specialize in providing businesses like you with menu boards that are not just of the highest quality, but ones that best suit your brand message, target market, and allocated budget.
        </p>
        <p>
          Having been in the industry for many years, we have a solid system for projects as well as meticulous quality checks for our products. Royal Signs & Awnings is a menu signs provider that can walk you through the entire process, and we have an entire team of engineers, graphic designers, project managers, and signage specialists who are ready to partner with you.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Menu Boards Consultation"
      >
        <p className="mb-4">
          Looking for a local signs provider that specializes in menu boards? Royal Signs & Awnings is here for you. Our team is a great mix of artists and technical experts, and we'd love to share our knowledge and insight with you as you explore all of the menu board options that we can offer.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Menu Boards Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
