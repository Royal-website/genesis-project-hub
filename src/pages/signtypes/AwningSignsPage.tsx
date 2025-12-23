import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function AwningSignsPage() {
  return (
    <UniversalPageTemplate
      title="Awning Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-7-300x225.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Awning Signs", path: "/awning-signs" },
      ]}
    >
      <ContentSection
        title="Houston Awning Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-7-300x225.jpg"
        imageAlt="Custom awnings and canopy sign"
      >
        <p className="mb-4">Awning signs and canopy signs are common in businesses. These commercial signs are designed to adorn any storefront, but they offer other benefits as well. Effective signage helps promote your business or beautify your shop.</p>
        <p className="mb-4">The best thing is that, with the Houston awning signage professionals at Royal Signs & Awnings, you are able to save the money allotted for advertising or renovation. We create striking and captivating awning and canopy signs that can catch the attention of new consumers, increase the traffic flow of customers, and enhance the professionalism of your shop!</p>
        <p>Our sign-making business has been in the industry for many years now; we have earned significant experiences in the field and honed various skills. We recommend awning signs because we believe that they are a significant investment for any type of business.</p>
      </ContentSection>

      <ContentSection
        title="Increase Brand Visibility"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-8-300x225.jpg"
        imageAlt="Lighted awning sign"
        imagePosition="left"
      >
        <p className="mb-4">Being known by consumers might be one of the biggest challenges in managing a business. One strategy that's proven to work is to increase your brand visibility. Prepare publicity materials and post them all as much as you can. Online, in newspapers, flyers, etc. But of course, all of this won't make sense without commercial signage at your storefront.</p>
        <p className="mb-4">An awning sign or canopy sign can give a lot of exposure to your business all day, every day. Everyone who passes by your store gets an idea about your existence. Should their interest be piqued, they will surely enter your shop and make a purchase.</p>
        <p>An awning is naturally intended to provide shade against the sun and shield from the rainwater. But creatively speaking, an awning can be a billboard where you can post a work of art. It can be a powerful advertising tool!</p>
      </ContentSection>

      <ContentSection title="Storefront Signs with a Sense of Shelter">
        <p className="mb-4">In business, remember that everything you place or install in your store may contribute to the customer experience. Good or bad, it can be. So, think clearly about what to include in the design and theme.</p>
        <p className="mb-4">As mentioned above, an awning sign at the storefront can serve as shade and protection to customers. At the same time, it can be a waiting shed. If you place a bench beneath, clients will find a place for resting or waiting—giving them a feeling of comfort and home.</p>
        <p>Royal Signs & Awnings accommodates requests for customization. In fact, we really want to design it according to your necessity. If you want your awning sign to appear both appealing and utilitarian, we can do it for you.</p>
      </ContentSection>

      <ContentSection title="Save Money on Utilities">
        <p className="mb-4">The use of awning itself as a shed and awning as a commercial sign totally saves you money, especially on utilities. It builds the visibility of your business and keeps your store from heating up. The American Society of Heating and Air Conditioner Engineers say that those stores that have installed awnings may save up to 25% in their electricity bills.</p>
        <p>Royal Signs & Awnings fabricates awning signs that are practical to use under different weather conditions. Our awning signs are made retractable. They do not only protect your building during the summer, but it can obtain solar gain and withstand the winter as well.</p>
      </ContentSection>

      <ContentSection title="Full-Service Sign Company">
        <p className="mb-4">Royal Signs & Awnings is a full-service Houston, TX signage company that offers all types of commercial signages as well as services. Our skilled and talented team of engineers, graphic designers, marketing specialists, installation experts, and maintenance crew put together all their hard work and brainchild to provide you with the top-of-the-line awning sign at an affordable cost.</p>
        <p>Certainly, you will have a professional who is committed to guiding you through the different aspects of signage production and aftercare: conceptualization, design, manufacturing, installation, maintenance, and even repair.</p>
      </ContentSection>

      <ContentSection title="Free Awning Signs Consultation">
        <p className="mb-4">Awning signs and canopy signs serve multiple purposes for the building and the entirety of the business that you have. They are capable of cutting bill costs, providing shed and shelter to customers, giving a sophisticated and professional look to the building, and so much more. Ultimately, they are a practical and great addition to your storefront! Our Houston awnings experts are here to assist you.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with an Awning Signs Expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
