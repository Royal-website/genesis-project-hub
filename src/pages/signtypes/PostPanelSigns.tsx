import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PostPanelSigns() {
  return (
    <UniversalPageTemplate
      title="Post & Panel Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/post-panel-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Post & Panel Signs", path: "/post-panel-signs" },
      ]}
    >
      <ContentSection
        title="Houston Post & Panel Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-post-panel-sign-300x225.jpg"
        imageAlt="custom post panel sign"
      >
        <p className="mb-4">
          Post and panel signs are a classic and versatile outdoor signage option. Consisting of a sign panel mounted between one or more posts, they provide a professional appearance at an affordable price point.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we create custom post and panel signs for real estate, construction sites, business entrances, and more.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Versatile Design Options"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/post-panel-design-300x225.jpg"
        imageAlt="post panel design"
        imagePosition="left"
      >
        <p className="mb-4">
          Post and panel signs can be customized with various post styles, panel materials, and decorative elements. From simple utilitarian designs to ornate decorative options, we can create the perfect look for your needs.
        </p>
        <p>
          Add-ons like dimensional letters, logo panels, and illumination can enhance your sign's impact.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable Outdoor Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/outdoor-post-panel-sign-300x225.jpg"
        imageAlt="outdoor post panel sign"
      >
        <p className="mb-4">
          Our post and panel signs are built to withstand the elements. Using weather-resistant materials and finishes, we ensure your sign looks great for years to come.
        </p>
        <p>
          We handle complete installation, including setting posts in concrete foundations for lasting stability.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Post & Panel Signs Consultation"
      >
        <p className="mb-4">
          Ready for professional outdoor signage? Royal Signs & Awnings is here to help you create custom post and panel signs that make an impression.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
