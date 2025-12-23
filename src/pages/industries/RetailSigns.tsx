import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function RetailSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "#" },
    { name: "Retail Signs", path: "/retail-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Retail Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/dimensional-letters-mall-storefront-exterior-building-retail-e1679423611283.webp"
      breadcrumbs={breadcrumbs}
    >
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-6">Houston Retail Signs</h1>
        
        <div className="mb-8">
          <img 
            src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/storefront-1-300x200.jpg" 
            alt="Custom storefront sign"
            className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]"
          />
          <p className="text-muted-foreground mb-4">
            Retail signs can make or break your business. According to a 2012 survey by Ketchum Global Research and Analytics, signs are a major factor in driving purchases and affecting consumer decisions.
          </p>
          <p className="text-muted-foreground mb-4">
            76% of consumers admit having chosen to step inside a store for the first time based purely on the store's sign. 68% also admit having made purchases after a sign caught their attention. It's interesting to know that an everyday item like retail signage can hold so much influence and power to drive your business.
          </p>
          <p className="text-muted-foreground mb-4">
            And while high-quality signage boosts sales and drives customers in your store, badly made ones do the opposite and drive potential customers away. The key is to make sure that your retail signs are attractive, strategic, and professionally made. And Royal Signs & Awnings can do exactly that.
          </p>
          <p className="text-muted-foreground mb-4">
            Royal Signs & Awnings is a proven signs provider that specializes in the design, production, installation, and maintenance of retail signs. With its wide array of sign, material, and design options allow your business to select the exact sign type and visual appeal that best suits your brand personality, business need, and allocated budget.
          </p>
          <p className="font-semibold text-foreground">
            Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation!
          </p>
        </div>

        <div className="clear-both" />
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Get Your Brand Noticed</h2>
        <div className="mb-8">
          <img 
            src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/banner-outdoor-promotional-vinyl-300x232.jpg" 
            alt="Outdoor promotional banner"
            className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]"
          />
          <p className="text-muted-foreground mb-4">
            Catch the attention of potential customers from far away with stunning outdoor retail signage by Royal Signs & Awnings. Whether you need large banners, pylon signs, outdoor LED signs, teardrop banners, monument signs, or feather signs, we're sure to have the sign that can advertise your brand to drivers, onlookers, and pedestrians.
          </p>
          <p className="text-muted-foreground mb-4">
            Our expertise in the field of retail signage makes it easier for your potential customers to notice your brand as well as know how to get to your establishment. Royal Signs & Awnings also has a strong team of graphic artists who can help provide aesthetic and strategic sign design and layout, drawing in more customers and also advertising your brand 24/7.
          </p>
        </div>

        <div className="clear-both" />

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Outdoor Signs that Speak Your Message</h2>
        <div className="mb-8">
          <img 
            src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-window-vinyl-300x240.jpg" 
            alt="Custom promotional window vinyl"
            className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]"
          />
          <p className="text-muted-foreground mb-4">
            Royal Signs & Awnings's outdoor retail signs can help tell potential customers that they're at the right place and that you have what they're looking for. With options such as illuminated building signs, blade signs, awnings, dimensional letters, window decals, A-frames, and many more, we can help give your business an impressive introduction to potential customers.
          </p>
          <p className="text-muted-foreground mb-4">
            Professionally designed and custom-crafted by no less than the most reliable local sign experts, your signs are sure to not only bring in more footfall for your store, but also help convert curious passersby into paying customers.
          </p>
          <p className="text-muted-foreground mb-4">
            Royal Signs & Awnings has been successfully providing personalized, made-to-order projects to our clients, and we take pride in the fact that our workmanship has helped businesses grow and flourish. We can't wait to deliver the same quality for you!
          </p>
        </div>

        <div className="clear-both" />

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Indoor Signage for Impact and Influence</h2>
        <div className="mb-8">
          <img 
            src="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-wall-mural-custom-signs-retail-300x225.jpg" 
            alt="Indoor promotional signage"
            className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]"
          />
          <p className="text-muted-foreground mb-4">
            So your outdoor retail signs have done their jobs and have brought potential customers in through your doors…now what? Your next challenge is to convince your guests to buy what you're selling. Well, Royal Signs & Awnings has got you covered with our marketing know-how and high-quality indoor signs.
          </p>
          <p className="text-muted-foreground mb-4">
            Indoor signs have the power to increase profit as you increase footfall. They can influence people into making quick and confident purchasing decisions as they spend their time inside your establishment.
          </p>
        </div>

        <div className="clear-both" />

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Free Retail Signs Consultation</h2>
        <p className="text-muted-foreground mb-4">
          Royal Signs & Awnings has catered to the signage needs of quite a number of retail establishments in the area, and we can't wait to cater to yours. From creative initial design all the way to strategic installation, we're ready to give your business the retail signs that get you noticed and get people in through your doors.
        </p>
        <p className="font-semibold text-foreground">
          Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Retail Signs Expert!
        </p>
      </article>
    </UniversalPageTemplate>
  );
}
