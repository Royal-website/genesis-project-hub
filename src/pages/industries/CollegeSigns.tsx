import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function CollegeSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "College Signs", path: "/college-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="College Signs"
      heroImage="/images/industries/college-signs/08-outdoor-collage-campus-wayfinding-signage-1024x361.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="College Signs"
        image="/images/industries/college-signs/04-sign-installation-300x208.jpg"
        imageAlt="College Signs"
      >
        <p className="mb-4">
          Colleges and universities have unique signage needs that go beyond those of most other organizations. From welcoming prospective students and their families during campus tours to helping current students navigate large campuses, effective signage is essential to the educational experience.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has extensive experience creating signage for educational institutions at all levels. We understand the importance of creating a cohesive visual identity that reflects your institution's values, history, and aspirations while meeting the practical needs of students, faculty, staff, and visitors.
        </p>
        <p className="mb-4">
          Whether you need entrance signs that make a powerful first impression, building identification that helps people find their way, or athletic facility signage that showcases school spirit, we have the expertise and capabilities to deliver exceptional results.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Campus Wayfinding Systems"
        image="/images/industries/college-signs/06-indoor-ada-signage-300x165.jpg"
        imageAlt="Campus Wayfinding Signs"
      >
        <p className="mb-4">
          Large college campuses can be confusing to navigate, especially for new students and visitors. A comprehensive wayfinding system helps people find buildings, parking, and facilities while reinforcing your institution's brand identity.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings designs integrated wayfinding systems that include vehicular directional signs, pedestrian wayfinding signs, building identification, and campus maps. We work with campus planners to develop signage programs that are consistent with your institution's master plan and visual identity guidelines.
        </p>
        <p>
          Our wayfinding solutions are designed for durability and long-term use, with materials and construction methods that withstand heavy use and varying weather conditions.
        </p>
      </ContentSection>

      <ContentSection
        title="Building Identification and Entrance Signs"
        image="/images/industries/college-signs/05-sign-installation.jpg"
        imageAlt="College Building Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Every building on campus needs clear identification that helps students, faculty, and visitors find their destination. From academic buildings to residence halls, from athletic facilities to administrative offices, Royal Signs & Awnings creates building identification signs that are both functional and attractive.
        </p>
        <p className="mb-4">
          Monument signs at campus entrances create a welcoming first impression for visitors and prospective students. These signs often incorporate the institution's logo, colors, and architectural elements to reinforce brand identity.
        </p>
        <p>
          We offer a wide range of materials and styles to match your campus architecture, from traditional brick and stone to modern metal and acrylic designs.
        </p>
      </ContentSection>

      <ContentSection
        title="Athletic Facility Signage"
        image="/images/industries/college-signs/07-indoor-ada-signage.jpg"
        imageAlt="College Athletic Signs"
      >
        <p className="mb-4">
          College athletics play an important role in campus life and community engagement. Stadium signs, scoreboard displays, and facility identification help create an exciting atmosphere for games and events while reinforcing school spirit.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings creates signage for athletic facilities including stadiums, arenas, practice facilities, and recreational centers. Our signs are designed to withstand outdoor conditions while maintaining a professional appearance.
        </p>
        <p>
          From donor recognition walls to championship banners, from locker room graphics to field-level signage, we provide comprehensive solutions for college athletic programs.
        </p>
      </ContentSection>

      <ContentSection title="Interior Signage for Educational Facilities">
        <p className="mb-4">
          Inside campus buildings, effective signage helps students and visitors find classrooms, offices, restrooms, and other facilities. ADA-compliant room identification, floor directories, and directional signs all contribute to an accessible and welcoming environment.
        </p>
        <p>
          Royal Signs & Awnings ensures that all interior signage meets ADA requirements while maintaining consistency with your institution's visual identity. We work with facility managers and designers to create signage programs that enhance the educational environment.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
