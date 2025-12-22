import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function MallSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Mall Signs", path: "/mall-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Mall Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/Mall-Signs.png"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Mall Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/mall-signs-300x212.jpg"
        imageAlt="Mall Signs"
      >
        <p className="mb-4">
          The retail landscape here in the US has gone through quite significant changes in the past years, with retail stores closing and opening every now and then. Despite these challenges and the fact that they rely a lot on retail businesses, many malls continue to grow and thrive. How is this possible? Well, they've adapted to the changes by using their space to increase foot traffic. And mall signs play a key role in making all that happen.
        </p>
        <p className="mb-4">
          Mall signs are highly effective tools in attracting customers, informing them, and encouraging them to make purchases. However, they do need to be designed, produced, and installed properly for you to maximize their impact…and that's exactly what trusted signage providers such as Royal Signs & Awnings do.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Wide Selection of Mall Sign Options"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/mall-storefront-signs-300x212.jpg"
        imageAlt="Mall Storefront Signs"
      >
        <p className="mb-4">
          One tricky part with mall signs is knowing exactly which type, which design, which placement gives your business the most impact and the best results. Here at Royal Signs & Awnings, we do our very best to make this part as easy and hassle-free as possible by having an extensive selection of sign options, talented artists who can customize any sign according to your brand, and top-of-the-line equipment for the creation of your personalized sign.
        </p>
        <p>
          Whether you need subtle but impactful acrylic signs, modern and chic dimensional letters, or bold and attractive electronic signs, Royal Signs & Awnings has the right one for your business.
        </p>
      </ContentSection>

      <ContentSection
        title="Quick and Clean Installation by Sign Specialists"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/mall-channel-letters-300x212.jpg"
        imageAlt="Mall Channel Letters"
        imagePosition="left"
      >
        <p className="mb-4">
          Mall signs are confined to certain standards, requirements, and building regulations, among which are the times that you can work on your signage. Because you're likely going to be allowed to work on your mall sign only when the mall is closed, you'll need to set it up real quick.
        </p>
        <p>
          As an established company, Royal Signs & Awnings takes pride in the fact that we do sign installations in professional time and with a professional finish. With our efficient sign-production process and our team of skilled specialists, we have successfully installed mall signs for numerous clients with no time wasted and no quality compromised.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
