import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PostPanelSigns() {
  return (
    <UniversalPageTemplate
      title="Post & Panel Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/post-panel-signs-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Post & Panel Signs", path: "/post-panel-signs" },
      ]}
    >
      <ContentSection
        title="Houston Post & Panel Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-storefront-wood-dimensional-metal-letters-outdoor-300x250.jpg"
        imageAlt="Custom branded wayfinding post and panel sign"
      >
        <p className="mb-4">
          Known for being versatile and cost-effective, post and panel signs are many industries' choice for communicating with potential and existing customers. Your business can't go wrong with them, especially when they're made by a reputable sign company like Royal Signs & Awnings.
        </p>
        <p className="mb-4">
          We specialize in post and panel signs and our goal is to give you signs that meet the exact needs of your business. The signs that we create are made to order and we customize them according to your preferred size, shape, and materials. This ensures that your post and panel signs do their job of capturing the attention of passersby and building brand visibility.
        </p>
        <p className="mb-4">
          Another way we cater to your business's needs is that while we deliver you the entire post and panel sign system, we also replace panels or elements on existing signage. Whether you need a sign post, panel signs, post bases, or even a replacement post finials, Royal Signs & Awnings keeps your signage looking great.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Effective Wayfinding and Directional Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/dimensional-letters-storefront-custom-outdoor-300x169.jpg"
        imageAlt="Attractive Campus Wayfinding Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Wayfinding and directional signs assist people who are in unfamiliar surroundings by telling them where they are and by guiding them in the right direction when they're looking for something. Post and panel signs are perfect for this.
        </p>
        <p>
          Built to be visible, post and panel signs by Royal Signs & Awnings are the easiest, most affordable way to inform your customers and potential customers where your facility is located and how they can get there. With our years of signage experience, we know the basics of wayfinding design by heart. We use strategic sizes, typefaces, and color contrast to build you effective wayfinding and directional signs. You can count on us to point customers right in your direction.
        </p>
      </ContentSection>

      <ContentSection
        title="Signs That Showcase Your Brand"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-storefront-wood-dimensional-metal-letters-outdoor-300x250.jpg"
        imageAlt="Custom Post Panel Sign"
      >
        <p className="mb-4">
          Tell potential customers that they came to the right place. A lot more affordable than a monument sign but giving the same effect, post and panel signs are a viable option for site identifiers.
        </p>
        <p className="mb-4">
          With their size, visibility, attractiveness, and durability, post and panel signs help you catch customers' attention and speak your brand at the same time. Royal Signs & Awnings also customizes the signs in order to effectively convey your business's message. You can choose from a host of post and panel sign designs such as carved or sandblasted wood signs, aluminum and curved metal panels, PVC, LED message boards, and many more.
        </p>
        <p>
          Royal Signs & Awnings also knows that property signs are usually intended as permanent structures, this is why our products are highly durable and the perfect choice for your outdoor post and panel sign needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Low-Cost Outdoor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/dimensional-letters-storefront-custom-outdoor-300x169.jpg"
        imageAlt="Custom post and panel outdoor sign"
        imagePosition="left"
      >
        <p className="mb-4">
          For those desiring temporary outdoor signs, post and panel signs could still be the answer for you. Royal Signs & Awnings offers more cost-effective alternatives such as a PVC signage with digitally printed graphics. They don't cost as much as their metal counterparts but they do the job and can stand against the weather a lot better than ordinary post signs.
        </p>
        <p>
          Post and panel signs are a popular choice for real estate signs, site signs, construction signs, and others that get changed, updated, or discarded more frequently.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-storefront-wood-dimensional-metal-letters-outdoor-300x250.jpg"
        imageAlt="Custom promotional post panel sign"
      >
        <p className="mb-4">
          Royal Signs & Awnings aims to cater to every business's signage needs. This is why the services we offer can be tailored according to your preferred market, timeline, brand identity, and budget.
        </p>
        <p>
          With a reliable team of signage specialists, Royal Signs & Awnings is ready to walk with you through the entire process. We work with you on your signage from conceptualization to design, production, placement, and expert installation, including sign repair & maintenance. Royal Signs & Awnings would be more than happy to drive those signs right through the ground for you.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Post and Panel Signs Consultation"
      >
        <p className="mb-4">
          Interested in visually communicating with customers and potential customers? A post and panel sign is a great place to start, and Royal Signs & Awnings is here to help you out with that. Speak with one of our experienced signage experts to learn how to maximize your signs' visibility and effectiveness today.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Post and Panel Signs Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
