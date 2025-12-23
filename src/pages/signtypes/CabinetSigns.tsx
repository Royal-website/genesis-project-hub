import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CabinetSigns() {
  return (
    <UniversalPageTemplate
      title="Cabinet Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/custom-lighted-led-outdoor-pole-sign-300x225.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Cabinet Signs", path: "/cabinet-signs" },
      ]}
    >
      <ContentSection
        title="Houston Cabinet Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/custom-lighted-led-outdoor-pole-sign-300x225.jpg"
        imageAlt="Custom lighted digital message board pole sign"
      >
        <p className="mb-4">Looking for an eye-catching business sign that can promote your brand, products, or unique marketing message? One of the most reliable and accessible storefront signs in the business is the cabinet sign. Cabinet signs, also called wall signs and box signs, are box-like signs that enclose certain functional elements of the design, whether electrical or dimensional components.</p>
        <p className="mb-4">With acrylic illuminated panels, you can update your message as desired and make sure that it is never missed. Custom cut, printed, and formed to your specifications, these signs are a great choice for those looking to add impact to their storefront or interior at an affordable price and in a highly-customizable way.</p>
        <p>Royal Signs & Awnings is a full-service signs provider that specializes in cabinet signs. Whether your establishment is a retail store, church, restaurant, hospital, clinic, school, or service center, we design and create cabinet signs that perfectly suit your brand and budget.</p>
      </ContentSection>

      <ContentSection
        title="Make Your Message Clear"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/0092_Dairy_Queen_Bendsen_Sign__Graphics_W_19mm_80x176_Bloomington_IL_101718-1-300x225.jpg"
        imageAlt="Dairy Queen Pylon Sign"
        imagePosition="left"
      >
        <p className="mb-4">Cabinet signs frequently consist of a large rectangular metal frame with an acrylic face. Custom printed or cut vinyl is then applied to the face to create your specific message. This allows you to truly express your creativity and brand personality.</p>
        <p>With the entire sign as your canvas, you have the option to include a lot of information about your services and products on the sign. This way, potential customers will know what you can offer and what they can get from your business. Another option would be to keep your sign bold and modern with a minimalist design and layout. We help you determine the right design and layout for your desired message and goals.</p>
      </ContentSection>

      <ContentSection title="Highly-Customizable Storefront Signs">
        <p className="mb-4">At Royal Signs & Awnings, our box signs are customizable to virtually any design, shape, and size that you want. We have an entire team of signage experts including graphic designers and electrical engineers. If you need your signage made with very specific requirements, we're the perfect provider for you.</p>
        <p>If you're looking for signs that give maximum impact, Royal Signs & Awnings can fabricate illuminated signs for you or couple them with channel letters for an even more dynamic display. We can even custom craft your business logo into an illuminated cabinet sign for display on your storefront or lobby walls. With Royal Signs & Awnings, you have the freedom to choose the best cabinet sign for your facility.</p>
      </ContentSection>

      <ContentSection title="Durable and Affordable Signs">
        <p className="mb-4">Effective signs don't have to be expensive. If you are on a tight budget, you can still get attractive and informative wall signs on your building. By ordering cabinet signs that are not illuminated, you save up on both production and electrical costs by a large fraction. Cabinet signs can often be upgraded at a later time, so they make a great starter sign for those looking to increase their visibility as their business grows.</p>
        <p>Royal Signs & Awnings also ensures that outdoor signs such as cabinet signs can stand against the elements. The wall signs that we fabricate are made with quality materials so they can stay effective for years. Cabinet signs are also low maintenance, so you don't have to worry about it after it's installed by our team.</p>
      </ContentSection>

      <ContentSection title="Free Cabinet Signs Consultation">
        <p className="mb-4">We are proud of our years of experience with cabinet signs and we can't wait to help boost your sales with our expertise. Our business goal is to help you reach your business goals through our signage services. Interested? Give us a call and we can have one of our tenured signage specialists discuss things with you.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Cabinet Signs Expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
