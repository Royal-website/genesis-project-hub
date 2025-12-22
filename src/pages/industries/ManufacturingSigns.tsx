import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ManufacturingSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Manufacturing Signs", path: "/manufacturing-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Manufacturing Signs"
      heroImage="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Manufacturing Signs"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/pole-pylon-signs.jpg"
        imageAlt="Manufacturing Signs"
      >
        <p className="mb-4">
          Workplace safety is a vital part of running a business, and especially so if you're in the manufacturing industry. With all the process, machinery, and chemicals that go around in your building, safety is not something you can compromise. One way of keeping your establishment safe and secure is by having clearly marked manufacturing signage in place all throughout your facility.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is a trusted local signage provider and we specialize in affordable and effective industrial signs. We are a full-service sign company so we do more than just print out your signs—we have the expertise and equipment to design, fabricate, customize, and install them for you! Our staff is also knowledgeable in ANSI and OSHA guidelines for safety signages.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Make Your Manufacturing Signage Visible"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/banner-sign-large-format-outdoor-300x169.jpg"
        imageAlt="Safety Manufacturing Signs"
      >
        <p className="mb-4">
          Your manufacturing sign's professional design and material quality wouldn't be of much use if your workers and visitors can't see the sign itself. When it comes to manufacturing and safety signs, visibility may just be the most important factor to consider. As an established signs provider for many years now, Royal Signs & Awnings understands this and we make sure sign visibility is something that we do right—from the design phase, all the way to installation.
        </p>
        <p>
          One of the ways we ensure sign visibility is through professional and smart designs. By carefully choosing the right size, color, font style, font size, luminance, and contrast for your industrial sign, we can make it more eye-catching and its message more easily conveyed.
        </p>
      </ContentSection>

      <ContentSection
        title="Signs That Comply With Legal Guidelines"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/product-displays-300x176.jpg"
        imageAlt="OSHA Compliant Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          The American National Standards Institute (ANSI) and Occupational Safety and Health Administration (OSHA) have made producing safety signs so much easier for business owners everywhere. They have highly specific standards and guidelines set to help guarantee that they are most effective and most practical in communicating warnings, instructions, and safety reminders.
        </p>
        <p>
          Royal Signs & Awnings is well-versed in these requirements and can produce compliant safety signage for your manufacturing facility that meets all regulatory standards.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
