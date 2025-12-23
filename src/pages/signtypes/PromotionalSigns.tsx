import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PromotionalSigns() {
  return (
    <UniversalPageTemplate
      title="Promotional Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/promotional-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Promotional Signs", path: "/promotional-signs" },
      ]}
    >
      <ContentSection
        title="Houston Promotional Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-sign-300x178.jpg"
        imageAlt="Custom hanging promotional sign"
      >
        <p className="mb-4">
          Send your brand messages loud and clear through stunning and strategic promotional signs. Promotional signs are one of the oldest forms of marketing, but have remained a wildly popular advertising tool in practically all businesses. The reason behind this is simple- it's because they work!
        </p>
        <p className="mb-4">
          Royal Signs & Awnings and its wide array of sign and graphics options allow you to choose only the best promotional signage that best suits your brand's personality, your audience, and even your budget. We not only give you signs that catch attention, our products do so much more than that. Our promotional signs effectively help convert passersby to paying customers, and impressions to income.
        </p>
        <p className="mb-4">
          With years of experience in the sign-making business, Royal Signs & Awnings fully understands a quality promotional sign's power of persuasion and the potential profit it could bring in. This is why our team strives to plan out, design, print, manufacture, and install premium promotional signage that prompt impactful interaction with your potential customers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Business Signs For Your Brand"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg"
        imageAlt="Custom window vinyl wrap"
        imagePosition="left"
      >
        <p className="mb-4">
          Royal Signs & Awnings understands how important it is to present customers and potential customers with a cohesive brand experience. As tried-and-tested signage provider, Royal Signs & Awnings not only manufactures great signs, we also help you out with other critical promotional factors that you may overlook. These include project management, design, placement, and installation.
        </p>
        <p className="mb-4">
          One thing that Royal Signs & Awnings is proud of is the fact that we do our best to give you the exact sign that your business needs to advertise itself. We do wall or fascia signs, awnings, pylon signs, monument signs, dimensional letters, illuminated signs, feather banners, hanging signs, floor signs, and even window decals.
        </p>
        <p>
          Our clients deserve only the best, and this means that we won't settle with giving you just any sign. Royal Signs & Awnings provides you with the promotional signage that is right for you, your needs, your market, and your budget.
        </p>
      </ContentSection>

      <ContentSection
        title="Expand Your Market with Portable Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-sign-300x178.jpg"
        imageAlt="Custom yard signs"
      >
        <p className="mb-4">
          Get your business noticed wherever you go by using any of Royal Signs & Awnings's lightweight, easy-transport promotional signs. Whether you need them for trade shows, festivals, conventions, concerts, or other promotional events, Royal Signs & Awnings can provide you with powerful advertising signs and banners that are sure to convey what your brand wants to say.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is more than capable of delivering impressive and durable promotional signs that make an impact wherever you decide to place them. You can choose from flag signs, vinyl banners, teardrop banners, roll-up banners, tents, A-frame signs, wearable signs, and many more.
        </p>
        <p>
          We want your signage to look stunning and stay stunning for a long time. Royal Signs & Awnings products are all made from the finest materials and digitally printed with high-quality ink to make sure that they stand against indoor storage, constant transport, and outdoor elements.
        </p>
      </ContentSection>

      <ContentSection
        title="24/7 Promotion with Electronic Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg"
        imageAlt="Custom digital monument sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Digital signage has caused a revolutionary shift in the world of advertising. In a fast-paced world, electronic signs give businesses like yours an undeniable edge in competing for the market's time and interest.
        </p>
        <p className="mb-4">
          Attractive, affordable, and highly customizable, electronic signage gives you to ability to update promotional content regularly and even on real time. In minutes, you can showcase your brand logo, your special offers, and your business information all on one screen… and you can make them stay there 24/7.
        </p>
        <p>
          Royal Signs & Awnings offers an impressive selection of the latest technology in electronic signs. You can choose from fluorescent signs, high-intensity displays (HID), incandescent signs, LED signs, neon signs, and many more options to see which one best suits your business needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-sign-300x178.jpg"
        imageAlt="Custom flag feather sign"
      >
        <p className="mb-4">
          When we say "full service," we meant it. Royal Signs & Awnings has the knowledge, manpower, and network of suppliers needed to give you what you want. This, of course, means that our team of local signage experts are fully equipped to assist you in making strategic decisions in design, sign type choice, material selection, layout, installation, and even regular maintenance.
        </p>
        <p>
          Our expert sign designers, fabricators, and installers are with you every step of the way. We ensure that you get the perfect signs for your business, brand, and needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Promotional Signs Consultation"
      >
        <p className="mb-4">
          With our team's solid experience, marketing competence, and technical know-how, we are your best choice for promotional signs. We're excited to share our signage knowledge with you and answer any questions that you might have about boosting your profit through signs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Promotional Signs Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
