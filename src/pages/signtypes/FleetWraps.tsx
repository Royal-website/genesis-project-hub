import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function FleetWraps() {
  return (
    <UniversalPageTemplate
      title="Fleet Wraps"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/fleet-wraps-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Fleet Wraps", path: "/fleet-wraps" },
      ]}
    >
      <ContentSection
        title="Houston Fleet Wraps"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-fleet-wrap-300x225.jpg"
        imageAlt="custom fleet wrap"
      >
        <p className="mb-4">
          Fleet wraps transform your company vehicles into mobile billboards, advertising your business wherever they go. This cost-effective marketing strategy ensures maximum exposure for your brand across the city.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we specialize in designing and installing high-quality fleet wraps that create a cohesive, professional look across all your vehicles. Whether you have two vehicles or two hundred, we can create consistent branding that makes an impact.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Consistent Brand Identity"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/fleet-branding-300x225.jpg"
        imageAlt="fleet branding"
        imagePosition="left"
      >
        <p className="mb-4">
          A well-designed fleet wrap program ensures that all your vehicles present a unified brand image. This consistency reinforces your brand identity and creates a professional impression wherever your fleet travels.
        </p>
        <p>
          Our design team works closely with you to develop fleet graphics that accurately represent your brand and make a lasting impression on potential customers.
        </p>
      </ContentSection>

      <ContentSection
        title="Cost-Effective Advertising"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/fleet-vehicle-advertising-300x225.jpg"
        imageAlt="fleet vehicle advertising"
      >
        <p className="mb-4">
          Compared to other forms of advertising, fleet wraps offer an exceptional return on investment. Your wrapped vehicles generate thousands of impressions daily as they travel through the city, reaching potential customers in various neighborhoods.
        </p>
        <p>
          With a one-time investment, your fleet wraps continue to work for you 24/7, providing ongoing brand exposure without recurring costs.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Fleet Wraps Consultation"
      >
        <p className="mb-4">
          Ready to turn your fleet into a powerful marketing tool? Royal Signs & Awnings is here to help you create stunning fleet wraps that maximize your brand exposure and attract new customers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Fleet Wraps Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
