import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function CitySigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "City Signs", path: "/city-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="City Signs"
      heroImage="/images/industries/city-signs/08-outdoor-city-brick-monument-sign-1024x768.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="City Signs"
        image="/images/industries/city-signs/06-full-service-sign-company-graphic-designer-300x214.jpg"
        imageAlt="City Signs"
      >
        <p className="mb-4">
          Municipal signage plays a crucial role in helping cities function effectively and serve their residents. From wayfinding signs that help people navigate city streets to informational displays at public facilities, city signs are essential components of modern urban infrastructure.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has extensive experience working with municipal governments and public agencies to create signage that meets the unique needs of public sector organizations. We understand the importance of ADA compliance, durability, and clear communication in municipal signage projects.
        </p>
        <p className="mb-4">
          Whether you need signs for city parks, public buildings, community centers, or transportation facilities, we have the expertise and capabilities to deliver high-quality signage that serves your community well. Our team works within budget constraints and procurement requirements to ensure a smooth process from concept to installation.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Wayfinding and Directional Signs"
        image="/images/industries/city-signs/04-vinyl-wall-mural-indoor-install-225x300.jpg"
        imageAlt="City Wayfinding Signs"
      >
        <p className="mb-4">
          Effective wayfinding signage helps residents and visitors navigate your city with ease. Directional signs for downtown areas, parks, public facilities, and tourist attractions contribute to a positive experience for everyone who visits your community.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings can design comprehensive wayfinding systems that are both functional and attractive. We consider factors such as visibility, readability, and consistency to create signage that guides people efficiently while enhancing your city's visual identity.
        </p>
        <p>
          Our wayfinding solutions include vehicle-oriented directional signs, pedestrian-oriented signs, map kiosks, and trail markers. We work with city planners and officials to develop signage programs that meet the specific needs of your community.
        </p>
      </ContentSection>

      <ContentSection
        title="Park and Recreation Signs"
        image="/images/industries/city-signs/05-vinyl-wall-mural-indoor-install.jpg"
        imageAlt="Park Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          City parks and recreational facilities require a variety of signage, from entrance signs that welcome visitors to informational signs that explain rules and regulations. Trail markers, interpretive signs, and facility identifiers all contribute to the park experience.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings creates durable outdoor signage designed to withstand the elements while maintaining an attractive appearance. Our park signs are made from materials chosen for their longevity and resistance to vandalism.
        </p>
        <p>
          We can create signs that complement the natural beauty of your parks while providing essential information to visitors. From rustic wooden signs to modern metal designs, we offer options to suit any park setting.
        </p>
      </ContentSection>

      <ContentSection title="Public Building Signage">
        <p className="mb-4">
          City halls, libraries, community centers, and other public buildings need signage that is both functional and representative of the community they serve. Exterior building identification, interior wayfinding, ADA-compliant signs, and room identification all contribute to an accessible and welcoming environment.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings ensures that all public building signage meets ADA requirements while maintaining a professional appearance that reflects well on your municipality. We work with city officials and architects to create signage programs that are consistent with building design and municipal branding guidelines.
        </p>
        <p>
          From monument signs at building entrances to directional signs in hallways, we provide comprehensive signage solutions for public facilities of all types.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
