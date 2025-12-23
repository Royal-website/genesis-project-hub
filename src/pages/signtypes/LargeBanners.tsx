import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function LargeBanners() {
  return (
    <UniversalPageTemplate
      title="Large Banners"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/large-banners-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Large Banners", path: "/large-banners" },
      ]}
    >
      <ContentSection
        title="Houston Large Banners"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/banner10-300x225.jpg"
        imageAlt="Large Format Indoor Banners"
      >
        <p className="mb-4">
          Large banners are amazingly versatile signs—they are excellent at grabbing attention for your business, event, or promotion, hiding unsightly messes, or simply making your business more engaging & exciting.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is a local sign provider that specializes in large-format printing. Among our most popular orders are large banners printed with an appealing promotional design. They are often used to cover up a messy or boring exterior while promoting the client's brand, event, or campaign at the same time.
        </p>
        <p className="mb-4">
          Large format printing isn't just for outdoor purposes, they are also very useful inside establishments as promotional and branding tools. Signs as versatile and multi-purpose as large banners provide a great advertising opportunity, however, for them to be effective, they must be high-quality. This is where a trusted signage company like Royal Signs & Awnings can help you out.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Large Banner Expert!
        </p>
      </ContentSection>

      <ContentSection
        title="Get Your Brand Noticed"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/banner-outdoor-promotional-vinyl-300x232.jpg"
        imageAlt="Outdoor promotional banner"
        imagePosition="left"
      >
        <p className="mb-4">
          There's no denying that large banners have the power to catch the attention of motorists or pedestrians and to direct it to your brand. But your sign's goal here isn't just to make an impression; it also needs to make an impact. And for it to make an impact, it needs effective design and effective placement.
        </p>
        <p className="mb-4">
          Large banner orders handled by Royal Signs & Awnings undergo careful study and analysis of the business as well as its objectives…this allows our team of graphic designers to come up with impactful design and allows our signage specialists to execute strategic sign placement.
        </p>
        <p>
          At Royal Signs & Awnings, we don't settle for getting your business noticed…we make sure that your large banners create influence and produce results.
        </p>
      </ContentSection>

      <ContentSection
        title="Built With a Focus on Durability"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/banner10-300x225.jpg"
        imageAlt="Promotional Sale Banner"
      >
        <p className="mb-4">
          Whatever your intended use for your grand format banner, we ensure that it meets our high standards of quality and durability. We want your banners to not only be functional, but attractive for the life of their use. We have many options available for creating the right banners for you and begin each of our projects with a discussion on your needs, goals, and desires.
        </p>
        <p className="mb-2">
          In order to determine the correct sign material to use, our team of project managers gather pertinent details about the order and ask relevant questions like:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Will the sign be used indoors or outdoors?</li>
          <li>How long will the banner be in place?</li>
          <li>How will the banner be attached?</li>
        </ul>
        <p>
          With the necessary information, we can then help you determine if vinyl, cloth, mesh, any other banner material would be best. And with our fade-resistant UV ink, you can be assured that your large format banner will stay effective for a long time.
        </p>
      </ContentSection>

      <ContentSection
        title="Attractive Signs, Done On Time"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/banner-outdoor-promotional-vinyl-300x232.jpg"
        imageAlt="Custom outdoor coming soon banner"
        imagePosition="left"
      >
        <p className="mb-4">
          One apprehension that customers have when considering large signs is the turnaround time. Large sign types normally take longer to make for obvious reasons. However, wide-format banners by Royal Signs & Awnings can often be produced in a matter of days!
        </p>
        <p>
          With our state-of-the-art large format printers, we can get your banners printed, laminated, and cut in no time. Royal Signs & Awnings is confident that our technical know-how, skills, technology, and years of experience can deliver your large banner orders on time and on budget.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/banner10-300x225.jpg"
        imageAlt="Custom Large Format Banner for Bleachers"
      >
        <p className="mb-4">
          Royal Signs & Awnings makes it a point to give all of our clients our very best. This includes guiding them through the entire sign-making process. When our clients need it, we provide them with the insight and assistance that they need at every step.
        </p>
        <p>
          As a full-service sign company, we can handle every phase of the sign-making process, from analysis to design, printing, cutting, installation, and even maintenance. Royal Signs & Awnings is passionate about giving you signs and banners that speak to your brand personality and give your business a boost.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Expert Banner Consultation"
      >
        <p className="mb-4">
          If you're looking for impactful and long-lasting signs that fit your budget and your deadline, then Royal Signs & Awnings is the provider for you. We look forward to creating the attractive, high-value large banners your business needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Large Banner Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
