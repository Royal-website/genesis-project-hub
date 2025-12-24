import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function NewBusinessSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "New Business Signs", path: "/new-business-signs" }];
  return (
    <UniversalPageTemplate title="New Business Signs" heroImage="/images/industries/new-business-signs/07-cabinet-3.jpg" breadcrumbs={breadcrumbs}>
      <ContentSection title="New Business Signs" image="/images/industries/new-business-signs/04-window-vinyl-300x262.jpg" imageAlt="New Business Signs">
        <p className="mb-4">According to the Small Business Association (SBA), more than 627,000 new businesses spring up all over the US every year. In order for your new business to stay in the game for a long time, you'll need to have a strong start.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!</p>
      </ContentSection>
      <ContentSection title="Vinyl Promotional Signs for Special Announcements" image="/images/industries/new-business-signs/06-cabinet-3-300x225.jpg" imageAlt="Vinyl Window Signs">
        <p>Your new business is open and people need to know it! Make that awesome announcement with stunning promotional signs by Royal Signs & Awnings.</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
