import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CarWraps() {
  return (
    <UniversalPageTemplate
      title="Car Wraps"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/car-wrap-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Car Wraps", path: "/car-wraps" },
      ]}
    >
      <ContentSection
        title="Houston Car Wraps"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/03/Mango-vehicle-car-Wrap-300x200.jpg"
        imageAlt="Custom car wrap"
      >
        <p className="mb-4">Maximize your marketing opportunity with custom car wraps and graphics by Royal Signs & Awnings!</p>
        <p className="mb-4">Many companies utilize cars for deliveries to customers, or as a perk for their corporate employees. With a branded car wrap, you can provide potential customers with marketing messages, contact information, and your logo everywhere your cars go.</p>
        <p className="mb-4">As you travel to and from work, you have the opportunity to promote your business and capitalize on those missed opportunities bringing your brand message to anyone who sees your vehicle. One vehicle can reach hundreds of people without changing your day to day activities.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!</p>
      </ContentSection>

      <ContentSection
        title="High-Visibility Brand Marketing Tool"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/partial-car-wrap-vehicle-graphics-lettering-vinyl-300x225.jpg"
        imageAlt="Impactful car graphics"
        imagePosition="left"
      >
        <p className="mb-4">Whether you drive in a big city or along the quiet rural roads, you are just another vehicle passing by, blending in with other vehicles in your non-descript car. As people go about their business, you're hardly noticed.</p>
        <p className="mb-4">Now imagine that you're driving around in a custom car wrap by Royal Signs & Awnings. As you drive your same route, more people are recognizing your business and that's when the calls start coming in. Before your investment, you may have received calls from those who lived close by, but now you're receiving calls from people all over!</p>
        <p className="mb-4">Car wraps provide wider visibility for your business, allowing you to reach markets that were only available through more expensive marketing methods. With the majority of potential customers traveling along the same routes you do, you will now start reaching more local customers who will benefit from the services and products you provide!</p>
        <p>Many people going about their daily errands, often remember the guy spinning the sign about a limited time sale, your car can provide that same recognition. This attracts attention and reinforces your brand message each time your car is seen with eye-catching car wraps!</p>
      </ContentSection>

      <ContentSection 
        title="Completely Customized to Your Needs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/full-car-wrap-vehicle-graphics-vinyl-300x225.jpg"
        imageAlt="Custom full car wrap"
      >
        <p className="mb-4">We understand that every company is unique with its own unique marketing message. A car wrap needs to reflect that. Professional and impactful elements that are easily visible from a distance make your brand stand out.</p>
        <p className="mb-4">Royal Signs & Awnings's car wrap specialists design magnets, wraps, and graphics that perfectly complement the shape of your vehicle. Working with your needs, our designers will help you find the right product that works for you.</p>
        <p className="mb-4">We design, manufacture, and install wraps for all vehicle types and coverage levels, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><a href="/car-wraps" className="text-accent hover:underline">Car Wraps</a></li>
          <li><a href="/truck-wraps" className="text-accent hover:underline">Truck Wraps</a></li>
          <li><a href="/van-wraps" className="text-accent hover:underline">Van Wraps</a></li>
          <li><a href="/fleet-wraps" className="text-accent hover:underline">Fleet Wraps</a></li>
        </ul>
        <p>Do you need to utilize a different type of vehicle for work? Royal Signs & Awnings creates wraps for just about anything, from ATVs to RVs, we create the designs that increase your market awareness.</p>
      </ContentSection>

      <ContentSection 
        title="Protect Your Vehicle Investment"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/car-wrap-vinyl-graphics-vehicle-300x172.jpg"
        imageAlt="Custom full car wrap"
        imagePosition="left"
      >
        <p className="mb-4">Royal Signs & Awnings uses durable vinyl film to manufacture wraps designed to not only look beautiful but also to protect your vehicle's factory paint job, shielding it from road wear and weathering. Since a car is a substantial, long-term investment, we want to make sure you get the most out of your vehicle by creating not only an impactful branding tool, but also one that protects the lifespan, longevity, and value of your car.</p>
        <p>Our professional team of installers handle the entire process from prep to finish, ensuring that the finished product is one that meets your standards and ours as well. Royal Signs & Awnings knows that only a properly installed car wrap is worthy of your name and ours!</p>
      </ContentSection>

      <ContentSection 
        title="Complete Wrap Manufacturer"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/vehicle-wrap-install-vinyl-graphics-300x221.jpg"
        imageAlt="Custom vehicle graphic installation"
      >
        <p className="mb-4">Car wraps are a passion of ours. Our dedicated staff will assist you through every step of the car wrap process, from consultation through installation, maintenance, and wrap removal. We listen to your ideas and consider them through every aspect of design, manufacture and installation of your attractive, professional, long-lasting car wrap. Our custom vehicle graphics increase the life of your vehicle while adding a whole new layer of visibility to your business and brand.</p>
        <p>If you need assistance with wrap repair, removal, or replacement of elements, our experienced staff is dedicated to getting your message back on the road.</p>
      </ContentSection>

      <ContentSection title="Free Car Wrap Consultation">
        <p className="mb-4">Royal Signs & Awnings is here to help increase your brand visibility, protect your investment, and attract new and potential customers with your custom, high-quality car wrap! When you need attractive, cohesive vehicle graphics, wraps, or other signage, we are your long-term local sign company, dedicated to helping you reach all of your business and marketing goals!</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation with a Car Wrap Expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
