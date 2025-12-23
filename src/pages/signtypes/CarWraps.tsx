import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CarWraps() {
  return (
    <UniversalPageTemplate
      title="Car Wraps"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/03/Mango-vehicle-car-Wrap-300x200.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Car Wraps", path: "/car-wraps" },
      ]}
    >
      <ContentSection
        title="Houston Car Wraps"
        content={`Maximize your marketing opportunity with custom car wraps and graphics by Royal Signs & Awnings!

Many companies utilize cars for deliveries to customers, or as a perk for their corporate employees. With a branded car wrap, you can provide potential customers with marketing messages, contact information, and your logo everywhere your cars go.

As you travel to and from work, you have the opportunity to promote your business and capitalize on those missed opportunities bringing your brand message to anyone who sees your vehicle. One vehicle can reach hundreds of people without changing your day to day activities.`}
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/03/Mango-vehicle-car-Wrap-300x200.jpg"
        imageAlt="Custom car wrap"
      />

      <ContentSection
        title="High-Visibility Brand Marketing Tool"
        content={`Whether you drive in a big city or along the quiet rural roads, you are just another vehicle passing by, blending in with other vehicles in your non-descript car. As people go about their business, you're hardly noticed.

Now imagine that you're driving around in a custom car wrap by Royal Signs & Awnings. As you drive your same route, more people are recognizing your business and that's when the calls start coming in. Before your investment, you may have received calls from those who lived close by, but now you're receiving calls from people all over!

Car wraps provide wider visibility for your business, allowing you to reach markets that were only available through more expensive marketing methods.`}
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/partial-car-wrap-vehicle-graphics-lettering-vinyl-300x225.jpg"
        imageAlt="Impactful car graphics"
        imagePosition="right"
      />

      <ContentSection
        title="Completely Customized to Your Needs"
        content={`We understand that every company is unique with its own unique marketing message. A car wrap needs to reflect that. Professional and impactful elements that are easily visible from a distance make your brand stand out.

Royal Signs & Awnings's car wrap specialists design magnets, wraps, and graphics that perfectly complement the shape of your vehicle. Working with your needs, our designers will help you find the right product that works for you.

We design, manufacture, and install wraps for all vehicle types and coverage levels, including:
• Car Wraps
• Truck Wraps
• Van Wraps
• Fleet Wraps`}
      />

      <ContentSection
        title="Protect Your Vehicle Investment"
        content={`Royal Signs & Awnings uses durable vinyl film to manufacture wraps designed to not only look beautiful but also to protect your vehicle's factory paint job, shielding it from road wear and weathering. Since a car is a substantial, long-term investment, we want to make sure you get the most out of your vehicle by creating not only an impactful branding tool, but also one that protects the lifespan, longevity, and value of your car.

Our professional team of installers handle the entire process from prep to finish, ensuring that the finished product is one that meets your standards and ours as well. Royal Signs & Awnings knows that only a properly installed car wrap is worthy of your name and ours!`}
      />

      <ContentSection
        title="Complete Wrap Manufacturer"
        content={`Car wraps are a passion of ours. Our dedicated staff will assist you through every step of the car wrap process, from consultation through installation, maintenance, and wrap removal. We listen to your ideas and consider them through every aspect of design, manufacture and installation of your attractive, professional, long-lasting car wrap.

If you need assistance with wrap repair, removal, or replacement of elements, our experienced staff is dedicated to getting your message back on the road.`}
      />

      <ContentSection
        title="Free Car Wrap Consultation"
        content={`Royal Signs & Awnings is here to help increase your brand visibility, protect your investment, and attract new and potential customers with your custom, high-quality car wrap! When you need attractive, cohesive vehicle graphics, wraps, or other signage, we are your long-term local sign company, dedicated to helping you reach all of your business and marketing goals!

Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with a Car Wrap Expert!`}
      />
    </UniversalPageTemplate>
  );
}
