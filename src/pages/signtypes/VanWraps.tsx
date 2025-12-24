import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function VanWraps() {
  return (
    <UniversalPageTemplate title="Van Wraps" subtitle="Design | Production | Installation" heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/van-wraps-header.jpg" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Van Wraps", path: "/van-wraps" }]}>
      <ContentSection title="Houston Van Wraps" image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/custom-van-wrap-300x225.jpg" imageAlt="custom van wrap">
        <p className="mb-4">Van wraps maximize the advertising potential of your service vehicles. With large flat surfaces, vans provide excellent visibility for your brand message.</p>
        <p className="font-bold">Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
