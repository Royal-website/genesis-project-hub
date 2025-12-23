import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PoleSigns() {
  return (
    <UniversalPageTemplate
      title="Pole Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/pole-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pole Signs", path: "/pole-signs" },
      ]}
    >
      <ContentSection
        title="Houston Pole Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-pole-sign-300x225.jpg"
        imageAlt="custom pole sign"
      >
        <p className="mb-4">
          Pole signs provide maximum visibility for businesses located along busy roads and highways. Elevated above ground level, these signs can be seen from great distances, attracting passing motorists.
        </p>
        <p className="mb-4">
          At Royal Signs & Awnings, we design and install custom pole signs that help businesses stand out and attract customers.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="High Visibility Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/illuminated-pole-sign-300x225.jpg"
        imageAlt="illuminated pole sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Pole signs are ideal for businesses that need to be seen above obstacles like trees, buildings, and other structures. Their height ensures your message reaches a wider audience.
        </p>
        <p>
          We offer both single and double-sided options, as well as illuminated versions for 24/7 visibility.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable Construction"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/pole-sign-installation-300x225.jpg"
        imageAlt="pole sign installation"
      >
        <p className="mb-4">
          Our pole signs are engineered to withstand high winds and harsh weather conditions. Built with durable materials and secure foundations, they provide years of reliable service.
        </p>
        <p>
          Royal Signs & Awnings handles all aspects of pole sign installation, including permits and structural engineering.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Pole Signs Consultation"
      >
        <p className="mb-4">
          Ready to elevate your business visibility with a custom pole sign? Royal Signs & Awnings is here to help you create signage that gets noticed.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Pole Signs Specialist!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
