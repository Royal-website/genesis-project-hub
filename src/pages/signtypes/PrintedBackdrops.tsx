import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PrintedBackdrops() {
  return (
    <UniversalPageTemplate
      title="Printed Backdrops"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/printed-backdrops-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Printed Backdrops", path: "/printed-backdrops" },
      ]}
    >
      <ContentSection
        title="Houston Printed Backdrops"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-sign-300x178.jpg"
        imageAlt="Custom printed backdrop"
      >
        <p className="mb-4">
          Technology has been a godsend for the sign industry. Over the years, ideas and innovation have taken sign design, sign substrates, printing processes, installation techniques to a whole new level. And each breakthrough brings business owners closer to bigger signs with better quality and faster turnaround times.
        </p>
        <p className="mb-4">
          One example for this is the fact that businesses that need backdrops for photo studios, events, and concerts no longer need to worry about having to commission painters. All they have to do is tap a reliable local sign company who can print them the exact backdrops they want instead.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings specializes in custom printed backdrops and has state-of-the-art large format printers, fade-resistant eco-solvent ink, as well as a wide selection of banner substrates. If you need a stunning and effective backdrop custom-made to speak your business's message, Royal Signs & Awnings is here for you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="A Versatile Solution"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/pop-promotional-indoor-retail-custom-display-e1530210560522-300x276.jpg"
        imageAlt="Custom tradeshow display"
        imagePosition="left"
      >
        <p className="mb-4">
          While printed backdrops by Royal Signs & Awnings are a lot quicker to produce than the more traditional hand-painted backdrops, we definitely don't offer a one-size-fits-all solution. The best thing about our backdrops is that they're custom-made to fit your unique brand, event, target market, and objectives.
        </p>
        <p className="mb-4">
          The sign materials that we use are carefully chosen among our wide selection of substrates to ensure that your backdrops are most effective and most durable.
        </p>
        <p className="mb-4">
          If you're looking at backdrops for an indoor event, a fabric substrate is a great choice. The thicker ones such as heavy knit fabrics and cotton canvas are good options if your backdrop is meant to be front-lit. Translucent and medium-weight substrates, on the other hand, go well with backlighting.
        </p>
        <p>
          If yours is an outdoor event, vinyl would be the ideal material as it is durable and can stand against outdoor elements. Royal Signs & Awnings offers vinyl mesh perfect for windy occasions, or the regular matte vinyl prints. Paired with premium, fade-resistant eco-solvent ink, we're confident that your outdoor backdrops will look good for a long time.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable & Long-Lasting"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-sign-300x178.jpg"
        imageAlt="Custom trade show backdrop"
      >
        <p className="mb-4">
          Our printed backdrops, especially the vinyl ones, are built and designed with outdoor use in mind, so they are fade-resistant, water-resistant, wind-resistant, easy to maintain, and can last for years. They are also reinforced with premium nylon to ensure extra strength along the hems and the grommets.
        </p>
        <p>
          We are committed to making your backdrop banners look crisp and clean for a long time. Custom printed backdrops by Royal Signs & Awnings are perfect for events, concerts, and trade shows that involve traveling to different places with different weather conditions.
        </p>
      </ContentSection>

      <ContentSection
        title="Lightweight & Portable"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/pop-promotional-indoor-retail-custom-display-e1530210560522-300x276.jpg"
        imageAlt="Custom backdrop"
        imagePosition="left"
      >
        <p className="mb-4">
          Technology not only makes work faster, it also makes work a lot easier! This is especially true for backdrops. Painted backdrops can be heavy and quite tricky to clean, and these meant that they were difficult to transport. With the advent of large format printing and PVC banner substrates, you won't have to deal with all that hassle.
        </p>
        <p>
          Custom printed backdrops by Royal Signs & Awnings are relatively lighter and easier to handle compared to painted counterparts. When it comes to transporting, they are simply rolled, shipped, and then unrolled—no need for steaming or ironing before setup. Installation is hassle-free as well. Our printed backdrops are equipped with strong hems and can have eyelets/grommets or pole pockets, depending on your preference.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/promotional-sign-300x178.jpg"
        imageAlt="Custom trade show backdrop"
      >
        <p className="mb-4">
          Royal Signs & Awnings has been a trusted signage provider in the area for a long time, and we're proud to say that we've successfully handled printed backdrop projects for numerous clients. We've walked with them through the entire sign-making process, and we're excited to do the same for you.
        </p>
        <p>
          We know how stressful it is to cover all aspects of the project by yourself. This is why we have a strong team of project managers who can guide you through each phase and let you know what to expect. Our graphic artists can also help you figure out which design suits your brand as well as your object. Whether you need a printed backdrop or any other sign type, Royal Signs & Awnings is here for you from start to finish.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Printed Backdrops Consultation"
      >
        <p className="mb-4">
          Printed backdrops can be a tricky project to handle. They are large prints and are likely going to be exposed to your market's scrutiny up close. This is why it's so important to work with tried-and-tested sign companies that produce durable banners, with high-resolution prints, stunning design, and excellent customer support.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is the provider you're looking for.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Printed Backdrops Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
