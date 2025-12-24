import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function LEDSigns() {
  return (
    <UniversalPageTemplate
      title="LED Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/led-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "LED Signs", path: "/led-signs" },
      ]}
    >
      <ContentSection
        title="Houston LED Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/illuminated-channel-letters-backlit-building-outdoor-300x225.jpg"
        imageAlt="custom lighted storefront sign"
      >
        <p className="mb-4">
          Looking for a traditional neon sign that gives off that retro vibe for your business without the expensive initial cost and maintenance costs? LED signs are a fantastic, cost-efficient modern option!
        </p>
        <p className="mb-4">
          With high-efficiency, low-energy LED bulbs, Royal Signs & Awnings mimics the neon look at a much lower price point. The popular retro look is not compromised, just with a more environmentally friendly footprint.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Indoor LED Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/backlit111-300x225.jpg"
        imageAlt="backlit lobby sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Beyond storefronts, LED signs are also frequently used indoors, most commonly in the form of an illuminated OPEN sign for business. You can use lighted signs to advertise any component of your business.
        </p>
        <p>
          These signs can be made with the use of standard lettering and fonts or can be completely custom created to suit your specific business needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Programmable LED Message Centers"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/custom-lighted-led-pole-pylon-sign-300x225.jpg"
        imageAlt="custom lighted led pole pylon sign"
      >
        <p className="mb-4">
          Looking for an updatable, custom message board to inform customers or staff? Royal Signs & Awnings provides custom, programmable LED Message Center Signs that are standalone or a part of your storefront, pole, or monument sign.
        </p>
        <p>
          Our LED Message Centers offer many benefits over standard neon or LED signs, including easy customization allowing you to update your display at any time.
        </p>
      </ContentSection>

      <ContentSection
        title="Free LED Sign Consultation"
      >
        <p className="mb-4">
          Attract customers like moths to a flame with our custom LED signs!
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Neon Sign Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
