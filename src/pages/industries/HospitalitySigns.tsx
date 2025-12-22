import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function HospitalitySigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Hospitality Signs", path: "/hospitality-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Hospitality Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/hospitality-signs.webp"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Hospitality Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-lobby-hotel-concierge-signage.jpg"
        imageAlt="Beautiful Dimensional Letters for Your Lobby"
      >
        <p className="mb-4">
          The hospitality industry is a multibillion-dollar industry and is currently the largest one in the world. It relies on the consumers' disposable income, and because customers are paying for the experience that they get, customer satisfaction is a key defining feature in the hospitality industry.
        </p>
        <p className="mb-4">
          As a businessperson in this industry, you'd want to get as much help as you can in making sure that your customers are happy, satisfied, and taken care of. Professionally designed, fabricated, and installed hospitality signs are excellent tools for that. Royal Signs & Awnings is a trusted signs provider and specializes in providing tasteful, professional, and highly effective hospitality signage.
        </p>
        <p className="mb-4">
          Here at Royal Signs & Awnings, we make sure that the signs we deliver not only look good, but are custom-crafted to suit your business's branding identity, objectives, target market, and budget. We also produce our products with quality materials and equipment so you can be sure that your signage stay attractive and effective for a long, long time.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Outdoor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-illuminated-cabinet-monument-hospitality-holiday-inn-signage-300x199.jpg"
        imageAlt="Attractive Illuminated Cabinet Sign"
      >
        <p className="mb-4">
          Being in such a highly competitive industry means giving it everything you've got and making the most of whatever you have. And making the most of your business's exterior signs is a great way to start. Many of us think our outdoor sign's job is limited to catching the attention of customers and convincing them to step inside your establishment. However, your exterior signage is also an excellent tool for brand awareness!
        </p>
        <p className="mb-4">
          By getting illuminated outdoor signage such as dimensional letters, pole signs, sign boxes, and monument signs, you get to promote your brand and business 24/7. This is perfect for hotels, restaurants, travel agencies that are always in operation and want people to notice that their services are available.
        </p>
        <p>
          Royal Signs & Awnings is a full-service sign company that fabricates all signs in house so we are fully equipped and experienced to produce high quality lighted signs for your business. From design all the way to expert installation, Royal Signs & Awnings has got you covered.
        </p>
      </ContentSection>

      <ContentSection
        title="Highly Customizable Business Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-custom-hospitality-monument-wayfinding-signage-300x250.jpg"
        imageAlt="Attractive Custom Wayfinding Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Making your business stand out using signage is a lot trickier than you may think. It involves more than just printing out signs and sticking them on to your walls. The process, most importantly, involves having signage that very clearly convey your brand message to your audience. Your business signs must be your potential customers' source for information about what your business is, what you offer, and how your services benefit them.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is an expert at custom-crafting signs, and our secret to this is working very closely with you or your marketing team in order to align your vision with the products we deliver you. We study and analyze your brand, we create designs that complement it, we source out the best materials to use, we fabricate your signs, and give them a professional finish.
        </p>
        <p>
          We've handled sign projects for numerous clients in the area, and we're excited to show your business what we can do. Whether you run a boutique business including hotels, resorts, specialty cuisine restaurants, or travel agencies, our ability to customize signs for you help you get noticed by the highly specific market you're after.
        </p>
      </ContentSection>

      <ContentSection
        title="Quality Informational Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/indoor-digital-hospitality-informational-business-signage-300x200.jpg"
        imageAlt="Indoor Digital Signage"
      >
        <p className="mb-4">
          With customer satisfaction, a key defining feature in the hospitality industry, you cannot afford to make your customers feel confused, lost, and frustrated while they are inside your establishment. This is exactly why informational signs are so important!
        </p>
        <p className="mb-4">
          Informational signs are those that contain directions, instructions, rules, regulations, and other such information. They are clearly printed and strategically placed around your facility in order to provide the said information when and where they are most needed.
        </p>
        <p>
          Royal Signs & Awnings produces a wide variety of informational signs that are widely used in the hospitality industry; these include ADA signs, wayfinders, directory signs, restaurant menu boards, traffic signs, warning and safety signs, door ID signs, and many more.
        </p>
      </ContentSection>

      <ContentSection title="Free Hospitality Signs Consultation">
        <p className="mb-4">
          Royal Signs & Awnings has been in the sign-making business for a long time, and our experience has taught us just how important it is for hospitality businesses to be able to speak their brand message, promote their services, and deliver positive customer experience. And this is why we make sure our selection of hospitality signs are fully capable of meeting those needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
