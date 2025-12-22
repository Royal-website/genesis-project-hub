import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function PoliticalSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Political Signs", path: "/political-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Political Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-political-yard-web-allen-multi-campaign-signage-300x160.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Political Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-political-yard-web-allen-multi-campaign-signage-300x160.jpg"
        imageAlt="Political Signs"
      >
        <p className="mb-4">
          Political signs are the subject of debates during campaign season. Some say political signage like yard signs simply don't work and don't contribute much to a campaign. However, many argue that political signs positively affect the behavior of individual voters and can actually win the candidates new supporters.
        </p>
        <p className="mb-4">
          Despite the debates, political signs have almost always been used in campaigns. If you want your signs to be impactful and effective, the best idea would be to trust with an established sign provider like Royal Signs & Awnings with all your political signage needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Affordable Campaign Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-bulk-yard-vote-for-political-candidate-signs-300x225.jpg"
        imageAlt="Campaign Yard Signs"
      >
        <p className="mb-4">
          While campaigns and elections are often fought on the digital battleground, there is no doubt that the traditional forms of media continue to play a significant role in winning an election. Yard signs, also known as coroplast or bandit signs, are one of the most common forms of signage used to garner or display support for a political candidate.
        </p>
        <p>
          Affordable and incredibly versatile, these signs are not only used to show support for your favorite candidate, but also bring awareness to key issues that a candidate is running on. Whether you need signage for your front yard or vehicle, campaign headquarters or for your entire district, Royal Signs & Awnings can help.
        </p>
      </ContentSection>

      <ContentSection
        title="Smart and Strategic Sign Design"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/01/dimensional-letters-mall-storefront-exterior-building-retail-300x169.jpg"
        imageAlt="Strategic Sign Design"
        imagePosition="left"
      >
        <p className="mb-4">
          Attractive political signs are not always effective political signs, but you wouldn't really notice the difference unless you specialize in designing and custom-crafting them. Royal Signs & Awnings has a very keen eye for details such as this.
        </p>
        <p>
          Having been in the business for a long time, we know just how important it is for your sign design to be in line with your campaign's brand…and we can deliver that to you.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
