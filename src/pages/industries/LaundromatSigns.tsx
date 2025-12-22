import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function LaundromatSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Laundromat Signs", path: "/laundromat-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Laundromat Signs"
      heroImage="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/business-signs.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Laundromat Signs"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/channel-letter-storefront-outdoor-building-e1590775795316-300x235.jpg"
        imageAlt="Laundromat Signs"
      >
        <p className="mb-4">
          The coin laundry industry has been around for about 70 years here in the US. It has gone through the country's highs and lows and has survived them so far with over 29,000 laundromats situated all over the country. With the population growth and rental housing expansion, the customer base for laundromats has increased and competition has become stiffer.
        </p>
        <p className="mb-4">
          Stiff competition means your laundromat must do more to stand out from the crowd, and this is where laundromat signs by Royal Signs & Awnings comes in to help. When you partner with a trusted local laundromat sign provider, you get business signage that attracts more customers, converts them into purchasing clients, and ultimately boost your bottom line.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Illuminated Signs for your Laundromat"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/channel-letter-install-fab-300x225.jpg"
        imageAlt="Laundromat Channel Letters"
      >
        <p className="mb-4">
          Laundromats usually have customers coming in throughout the day, which is why many of them are open 24/7. Evenings makes it harder for people to scout for laundromats in the area, so the most practical way to get your coin laundry business noticed is by getting yourself some lighted or illuminated signage. When used as outdoor signage, you're also getting yourself 24/7 advertising tools!
        </p>
        <p>
          Illuminated signs by Royal Signs & Awnings come in so many shapes and sizes that you're sure to be able to choose one that's perfect for your laundromat. We have channel letters that help make your brand and business visible, as well as giving it a clean and modern look. We have LED signs that are customizable, require practically no maintenance, and are cost-effective.
        </p>
      </ContentSection>

      <ContentSection
        title="Vinyl Informational Signage"
        image="https://raw.githubusercontent.com/Royal-Signs/royal/main/www.houstonsignsandawnings.com/wp-content/uploads/2013/09/banner-sign-large-format-outdoor-300x169.jpg"
        imageAlt="Laundromat Vinyl Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Your coin laundry business's indoor signs are just as important as your outdoor ones. Indoor signs help avoid customer confusion, frustration, and dissatisfaction by addressing concerns and conveying the necessary information.
        </p>
        <p>
          With vinyl signs in your establishment, you have an affordable means of posting prices of your services and products, instructions on how to go about doing coin laundry, directions to various areas of your facility, and reminders on what they should or should not do.
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
