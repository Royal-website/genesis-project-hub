import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection, ImageGrid, FreeQuoteBanner, ProcessIcons } from "@/components/sections";
import { Link } from "react-router-dom";

const businessSignTypes = [
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/ADA-signs-room-ID-door-reception-300x225.jpg", alt: "ADA Signs", label: "ADA Signs", path: "/ada-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/outdoor-lighted-awning-channel-letters-gas-station-vinyl-300x225.jpg", alt: "Building Signs", label: "Building Signs", path: "/building-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/window-door-outdoor-sign-vinyl-cling-150x150.jpg", alt: "Door Signs", label: "Door Signs", path: "/door-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/collection-indoor-lobby-sign-e1530545883101-300x207.jpg", alt: "Informational Signs", label: "Informational Signs", path: "/informational-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/menu-boards-indoor-custom-300x200.jpg", alt: "Menu Boards", label: "Menu Boards", path: "/menu-boards" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/A-frame-portable-outdoor-sign-300x200.jpg", alt: "Portable Signs", label: "Portable Signs", path: "/portable-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/promotional-signs-indoor-outdoor-300x200.jpg", alt: "Promotional Signs", label: "Promotional Signs", path: "/promotional-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/safety-signs-indoor-outdoor-300x200.jpg", alt: "Safety Signs", label: "Safety Signs", path: "/safety-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/temporary-signs-outdoor-300x200.jpg", alt: "Temporary Signs", label: "Temporary Signs", path: "/temporary-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/tenant-signs-outdoor-multi-300x200.jpg", alt: "Tenant Signs", label: "Tenant Signs", path: "/tenant-signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/window-graphics-indoor-outdoor-300x200.jpg", alt: "Window Graphics", label: "Window Graphics", path: "/window-graphics" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/window-signs-indoor-outdoor-300x200.jpg", alt: "Window Signs", label: "Window Signs", path: "/window-signs" },
];

const BusinessSigns = () => {
  return (
    <UniversalPageTemplate
      title="Business Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/business-signs.jpg"
      breadcrumbs={[{ name: "Business Signs", path: "/business-signs" }]}
      showFreeQuoteBanner={true}
      showCommitmentSection={true}
    >
      {/* Houston Business Signs Section */}
      <ContentSection 
        title="Houston Business Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/outdoor-lighted-awning-channel-letters-gas-station-vinyl-300x225.jpg"
        imageAlt="outdoor storefront commercial signage"
      >
        <p className="mb-4">
          Expand your brand and services and strengthen your bottom line with engaging, attractive business signs and graphics!
        </p>
        <p className="mb-4">
          An expert Houston business sign company, Royal Signs & Awnings is a local partner for generating enticing sign and graphic elements that gets your business noticed. No matter what your specific marketing goals or company size, we will conceptualize, construct, and place your branded commercial signage.
        </p>
        <p className="mb-4">
          For any sign from pop-up tradeshow banners and displays to impressive tenant, pylon, and pole signs, wayfinding signs, our specialists are ready to provide solitary signs or graphics for business marketing or an entire cohesive sign and graphics collection that features your brand and gets you seen.
        </p>
        <p className="mb-4">
          Our specialized team of knowledgeable sign and graphic providers perceive your distinct and specific business preferences, and we are completely ready to expertly manufacture your signage project, supplying impactful signs and graphics that meet your schedule, expectations, and marketing budget.
        </p>
        <p className="font-semibold text-foreground">
          Call Royal Signs & Awnings at <a href="tel:2812048120" className="text-accent hover:underline">(281) 204-8120</a> for your Free Consultation with a Business Signs Expert!
        </p>
      </ContentSection>

      {/* Cohesive Commercial Signs Section */}
      <ContentSection 
        title="Cohesive Commercial Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/collection-indoor-lobby-sign-e1530545883101-300x207.jpg"
        imageAlt="attractive custom lobby signage"
      >
        <p className="mb-4">
          If you want to be noticeable in your local market, you need well-crafted commercial signs and graphics. In addition to displaying your business name and logo, custom business signage provides information about your business that prospective customers need, such as operating hours, ADA and accessibility information, and current special promotions.
        </p>
        <p className="mb-4">
          Differentiate your company from the other businesses around you, your competitors, and the many disruptions in your customer's busy lives with professional, durable custom commercial signage products! Royal Signs & Awnings is your manufacturer of high-impact business signs and graphics that support your corporate development by delivering an exciting and appealing environment to do business in.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings uses your vision to create useful signs and graphics that promote your brand and services. Our creative designers are skilled at interpreting your unique plans and crafting a physical sign design. We create everything from custom facade signs to branded <Link to="/vehicle-wraps" className="text-accent hover:underline">car graphics</Link>, lobby and <Link to="/indoor-signs" className="text-accent hover:underline">office signs</Link>, and personalized <Link to="/custom-signs" className="text-accent hover:underline">promotional signs and graphics</Link> for your desired placement and utilization.
        </p>
      </ContentSection>

      {/* Free Quote Banner */}
      <FreeQuoteBanner className="my-6" />

      {/* Complete Business Signage Section */}
      <ContentSection 
        title="Complete Business Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/product-displays-300x176.jpg"
        imageAlt="Custom product displays"
      >
        <p className="mb-4">
          Branded business signage elements assist with setting your brand apart from similar local businesses while establishing your organization as professionals for your market. Personalized, branded specialty signs also help manage potential customer's professional opinion of your shop.
        </p>
        <p className="mb-4">
          When using professional business signs and graphics that complement the rest of your brand identification and promotion endeavors, you reinforce both your local brand awareness as well as the expertise that your customers can expect from you.
        </p>
        <p className="mb-4">
          Dedicated to providing knowledgeable support for your commercial signs and graphics, Royal Signs & Awnings is a local partner you can trust for effective signs, graphics, and images.
        </p>
        <p>
          Whether you are a recently opened or newly acquired business venture or a well-known local favorite, Royal Signs & Awnings delivers expert solutions that support your branded business signage desires.
        </p>
      </ContentSection>

      {/* Our business sign services */}
      <div className="border-l-4 border-accent pl-4 mb-6 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Our Business Sign Services Include:
        </h2>
      </div>

      <ImageGrid images={businessSignTypes} columns={4} className="mb-10" />

      {/* Process Icons */}
      <ProcessIcons className="my-8" />

      {/* Free Business Signs Consultation Section */}
      <ContentSection 
        title="Free Business Signs Consultation"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/royal-signs-logo-300x108.png"
        imageAlt="Royal Signs & Awnings logo"
      >
        <p className="mb-4">
          At Royal Signs & Awnings, we provide the experienced support and expertise required to deliver specialty signs and graphics that effectively highlight the very best aspects of your brand, business, and products. Regardless of whether you already have a working design, or if you need design and planning assistance, our team will support you completely.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is dedicated to becoming your local manufacturer of impactful, brand-cohesive custom signs that deliver increases in both new business visitors and exposure for your brand.
        </p>
        <p className="font-semibold text-foreground">
          Call Royal Signs & Awnings at <a href="tel:2812048120" className="text-accent hover:underline">(281) 204-8120</a> for your Free Consultation with a Business Signage Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
};

export default BusinessSigns;
