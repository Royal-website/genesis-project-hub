import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CanopyTents() {
  return (
    <UniversalPageTemplate
      title="Canopy Tents"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/09/canopy-tent-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Canopy Tents", path: "/canopy-tents" },
      ]}
    >
      <ContentSection
        title="Houston Canopy Tents"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/09/tradeshow-display-booth-exhibit-banner-tent-canopy-300x234.jpg"
        imageAlt="Custom event tent"
      >
        <p className="mb-4">If you've ever tried going to a science exhibit, a circus show, or an outdoor concert, you've probably seen a lot of portable tents spread around the whole area. Canopy tents are such a common sight in these situations for a good reason–they do the job of promoting a business and providing temporary shelter extremely well.</p>
        <p className="mb-4">Canopy tents are notably high-standing structures. And when the graphics that they display are properly designed, they will be extremely effective promotional tools for any kind of business, gimmick, or cause settled in a high-traffic event.</p>
        <p className="mb-4">On top of that, canopy tents are the only promotional tool of their kind. They provide shelter as well as an area for activity, all while effectively promoting your business. Other signs and graphics can't be up to par with this level of functionality.</p>
        <p className="mb-4">Are you looking for a trusted company to get Houston, TX canopy tents? Royal Signs & Awnings is here for you. With years of experience in the business, we have all the resources, equipment, and expertise necessary to design, build, and install canopy tents of all sizes, customizations, and materials. Just tell us all about your event, activity, budget, creative preferences, and other important information, and we'll be here to show you what we can offer.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Houston Canopy Tent expert!</p>
      </ContentSection>

      <ContentSection 
        title="Functional & Attractive" 
        imagePosition="left"
      >
        <p className="mb-4">Canopy tents have two main purposes, which, when optimized, can definitely impact your business in a powerful way.</p>
        <p className="mb-4">First, they can provide a strong and dependable shade to the area they cover. No other publicity tool can do this the way canopy tents do. They are tall enough to create a space for activities that is comfortable, appealing, and reliable against strong sunlight or precipitation.</p>
        <p className="mb-4">Because they are tall and easily seen from far distances, canopy tents can impactfully display graphics portraying a business brand. They also serve as wayfinding tools because their presence and height make them look a lot like landmarks that people can use as a location reference.</p>
        <p>If you get your Houston canopy tents from Royal Signs & Awnings, rest assured that they would achieve these two functions effectively. They will be able to promote your business, cause, or any activity powerful as well as provide a nice and comfortable space where your visitors and customers can spend time in.</p>
      </ContentSection>

      <ContentSection title="Pop-Up Canopy Tents">
        <p className="mb-4">Do you only need a small, temporary tent for a short exhibit or a one-day fair? You will appreciate our pop-up canopy tents. This is the smaller and more temporary version of canopy tents that would be highly recommended for those who run a stall in a market or those who only need a small area for a public event.</p>
        <p className="mb-4">This product is collapsible–easily installed on any terrain and taken down when needed. They are also lightweight, making them easy to carry around and transport. They give you amazing promotional capacity, nice shade, and space for activity without being high-maintenance and difficult to move around.</p>
        <p className="mb-4">You may think that pop-up canopy tents, being temporary-use and lightweight tools, are also not very durable. But with Royal Signs & Awnings, rest assured that you would get tough and long-lasting pop-up tents, whether they are made of steel, stainless steel, or aluminum.</p>
        <p>The polyester fabric we use, along with the main material for poles, is only obtained from the best suppliers in the market and quality-controlled to perfection by our experts.</p>
      </ContentSection>

      <ContentSection title="Full-Service Sign Company">
        <p className="mb-4">Royal Signs & Awnings is a well-trusted company that provides graphic products and services mainly for business promotion.</p>
        <p className="mb-4">Our clients have trusted us throughout our years in the industry because we are experts in providing more than just our top-notch Houston canopy tents. We also provide every signage product available in the market as well as the services needed to bring them to our client's business location.</p>
        <p>The excellent services we provide are managed by our highly trained experts. We have graphic designers that take care of every visual design concept that we put on signage. We have installation and manufacturing specialists as well as engineers that ensure the technical quality of our products. We also have the best project managers that help customers have a comfortable time dealing with the entire process.</p>
      </ContentSection>

      <ContentSection title="Free Canopy Tent Consultation">
        <p className="mb-4">We are confident to say that we are your best option if you need a company that can get you excellent-quality Houston canopy tents. We can design, produce, and install these highly effective structures without going beyond your budget or the deadline.</p>
        <p className="mb-4">Just give us a call as soon as you can. We are more than ready to answer all your inquiries and show you all the things that we can help you with.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Houston Canopy Tent expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
