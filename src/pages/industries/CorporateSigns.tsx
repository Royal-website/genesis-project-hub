import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function CorporateSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Corporate Signs", path: "/corporate-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Corporate Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/corporate-signs.webp"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Corporate Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/Roderick-Projecting-storefront-outdoor-Sign-300x169.jpeg"
        imageAlt="custom blade sign"
      >
        <p className="mb-4">
          Corporate signs hold a huge responsibility in your business and you may not even know it. When executed properly, corporate signs are all about your identity as an institution. They are silent frontliners of your business, designed to introduce your brand message—who you are, what you are about, and what you can offer—in just one glance.
        </p>
        <p className="mb-4">
          Corporate signs also come in so many forms: from the large illuminated pole sign that you can see from quite a distance away, to the small room ID telling you you're at the ladies' restroom. Corporate signage impacts your audience from far away, and can be scrutinized up close at the same time.
        </p>
        <p className="mb-4">
          And because of the gravity of a corporate sign's influence, getting them done without the expertise of professionals can be a big risk. This is where Royal Signs & Awnings comes in. We at Royal Signs & Awnings have been in the sign-making industry for a long time, and we specialize in corporate signs. We are a full-service signage provider that handles every aspect of your signage needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Cohesive Corporate Signs for the Indoors"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/01/lobby-lighted-office-wall-indoor-backlit-300x286.jpg"
        imageAlt="Indoor Lighted Lobby Sign"
      >
        <p className="mb-4">
          When it comes to interior signs, you may not realize it, but every single factor contributes to your image and personality as a business—the font style, sign colors, size, images, shape, etc. This is exactly why the level of detail in a sign designer's eye is so important when forming and presenting your brand's persona through corporate signs.
        </p>
        <p className="mb-4">
          Here at Royal Signs & Awnings, we have a whole team of experienced graphic artists who can help you show your corporate identity from within your office, store, or restaurant. We also have a strong team of marketing experts who can sit down with you, give you insight, and help bring your brand identity into your signs.
        </p>
        <p>
          From stunning lobby signs, to wall decals, to hanging signs, to room ID signs, to menu boards, and even to the seemingly simple wayfinders, Royal Signs & Awnings has got you covered.
        </p>
      </ContentSection>

      <ContentSection
        title="Outdoor Signages that Get Customers In"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/custom-lighted-led-pole-pylon-sign-300x225-300x225.jpg"
        imageAlt="Custom Lighted LED Pole Sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Simply put, the defining moment of your corporate sign when people look at it and immediately associate it with the brand message of your business. With one look, they would recall your products or services and the quality of work that you do, and in that split-second they are drawn to you.
        </p>
        <p className="mb-4">
          High quality outdoor corporate signs are capable of delivering this to your business. They attract customers, they get them in through your doors, they increase foot traffic for your business, and ultimately give your bottom line a boost.
        </p>
        <p>
          Royal Signs & Awnings offers a vast selection of outdoor signage options including fascia signs, pole signs, A-frames, pylon signs, monument signs, awnings, channel letters, storefront signs, vinyl banners, and many more.
        </p>
      </ContentSection>

      <ContentSection
        title="Take Your Brand With You Wherever You Go"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/08/vehicle-vinyl-graphics-wrap-300x300.jpg"
        imageAlt="Custom Vinyl Lettering For Your Car"
      >
        <p className="mb-4">
          Corporate signs don't have to be limited to your establishment's premises and you don't have to wait for people to pass by your building in order to get noticed. There are so many ways for your brand to get noticed and Royal Signs & Awnings offers the sign types to get that done.
        </p>
        <p className="mb-4">
          Vehicle wraps and decals, for example, are creative and highly economical advertising solutions. With impactful designs and flawless professional installation, Royal Signs & Awnings can make your otherwise boring company car into a 24/7 mobile billboard displaying your corporate identity wherever it goes.
        </p>
        <p>
          Another venue for effectively promoting your brand would be outdoor events such as trade shows, conventions, and concerts. We at Royal Signs & Awnings provide numerous sign types perfect for those events: pop-up signs, standees, vinyl banners, flag signs, teardrop banners, A-frames, product displays, and so many more.
        </p>
      </ContentSection>

      <ContentSection title="Free Corporate Signs Consultation">
        <p className="mb-4">
          The world of corporate signs is such a vast place and, at first, you might find it confusing. But we've been in this industry long enough to know that you can't get high-quality signs by just picking randomly off the shelves. Choosing the most suitable and most effective corporate signage for your business takes a good balance of art, technical know-how, and experience. And Royal Signs & Awnings can share that with you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
