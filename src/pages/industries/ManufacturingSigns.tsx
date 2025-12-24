import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function ManufacturingSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Manufacturing Signs", path: "/manufacturing-signs" }
  ];

  return (
    <UniversalPageTemplate
      title="Manufacturing Signs"
      heroImage="/images/industries/manufacturing-signs/08-indoor-manufacturing-motivational-signage-1024x768.jpg"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Manufacturing Signs"
        image="/images/industries/manufacturing-signs/05-sign-installation.jpg"
        imageAlt="Manufacturing Signs Installation"
      >
        <p className="mb-4">
          Workplace safety is a vital part of running a business, and especially so if you're in the manufacturing industry. With all the process, machinery, and chemicals that go around in your building, safety is not something you can compromise. One way of keeping your establishment safe and secure is by having clearly marked manufacturing signage in place all throughout your facility.
        </p>
        <p className="mb-4">
          When designed, fabricated, and placed correctly, manufacturing signs are an effective way to tell your employees and visitors what they should and should not do in order to keep your facility safe and operations efficient.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings is a trusted local signage provider and we specialize in affordable and effective industrial signs. We are a full-service sign company so we do more than just print out your signs—we have the expertise and equipment to design, fabricate, customize, and install them for you! Our staff is also knowledgeable in American National Standards Institute (ANSI) and Occupational Safety and Health Administration (OSHA) guidelines for safety signages.
        </p>
        <p className="mb-4">
          Whether your facility does assembly, clothing and textile, chemicals, food production, metals, wood, plastics, leather, or paper, Royal Signs & Awnings is sure to have the highest quality signs to suit your brand, purpose, and budget.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Make Your Manufacturing Signage Visible"
        image="/images/industries/manufacturing-signs/07-indoor-manufacturing-barcode-identification-signage-e1551285179606.jpg"
        imageAlt="High-visibility Manufacturing Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Your manufacturing sign's professional design and material quality wouldn't be of much use if your workers and visitors can't see the sign itself. When it comes to manufacturing and safety signs, visibility may just be the most important factor to consider.
        </p>
        <p className="mb-4">
          As an established signs provider for many years now, Royal Signs & Awnings understands this and we know sign visibility is something that we make sure we do right—from the design phase, all the way to installation.
        </p>
        <p className="mb-4">
          One of the ways we ensure sign visibility is through professional and smart designs. By carefully choosing the right size, color, font style, font size, luminance, and contrast for your industrial sign, we can make it more eye-catching and its message more easily conveyed.
        </p>
        <p>
          Installation is another phase we carefully execute in order to make your sign highly visible. Your sign's angle and location are taken into account. We make sure that your sign is within the viewers' line of sight, and is free of obstructions.
        </p>
      </ContentSection>

      <ContentSection
        title="Signs That Comply With Legal Guidelines"
        image="/images/industries/manufacturing-signs/04-sign-installation-300x208.jpg"
        imageAlt="ANSI and OSHA Compliant Signs"
      >
        <p className="mb-4">
          The American National Standards Institute (ANSI) and Occupational Safety and Health Administration (OSHA) have made producing safety signs so much easier for business owners everywhere. They have highly specific standards and guidelines set to help guarantee that they are most effective and most practical in communicating warnings, instructions, and safety reminders.
        </p>
        <p>
          Not all signage providers are qualified or willing to take on the challenge of designing, producing, and installing signage that complies with the strict requirements of the law…but Royal Signs & Awnings is. All of our manufacturing sign projects undergo strict reviews by our team of sign experts. This stage of our process ensures that the signs' headers, signal words, symbols, pictograms, and legend are up to standard in order to avoid injuries in the workplace.
        </p>
      </ContentSection>

      <ContentSection
        title="Durable Manufacturing Signs"
        image="/images/industries/manufacturing-signs/06-indoor-manufacturing-barcode-identification-signage-e1551285179606-300x173.jpg"
        imageAlt="Durable Industrial Signs"
        imagePosition="left"
      >
        <p className="mb-4">
          Let's be honest, not a lot of business owners want to spend a huge amount of money on safety signs. We totally understand this! Royal Signs & Awnings has been in the manufacturing signage business for a long time and if there's anything business owners look for, it's value for their money. This is why we are committed to providing you with signs that last a long time, for the best price.
        </p>
        <p>
          Royal Signs & Awnings has a wide network of suppliers and this helps us choose the best sign materials for our projects and get them at a reasonable price. Whether you want us to use aluminum, vinyl, coroplast, alumalite, or other materials, we can custom-craft your manufacturing signage and aim for the perfect balance of durability and affordability.
        </p>
      </ContentSection>

      <ContentSection
        title="Full-Service Sign Company"
        image="/images/industries/manufacturing-signs/05-sign-installation.jpg"
        imageAlt="Full-Service Manufacturing Sign Company"
      >
        <p className="mb-4">
          As a trusted signage provider in the area, we at Royal Signs & Awnings do our best to give our clients very little to worry about. This is why we are fully capable and experienced to handle every aspect of the sign-making process. From designing to outsourcing materials, fabricating, customizing, installing, and even until maintenance and repair.
        </p>
        <p>
          Our strong team of graphic designers, project managers, signage experts, installation crew, and marketing experts are ready to work with you and study exactly what you are looking for in a manufacturing sign. Royal Signs & Awnings doesn't settle with giving you what you ask for, we make sure that you make informed decisions by giving you our expert opinion and insight.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Manufacturing Signs Consultation"
        image="/images/industries/manufacturing-signs/08-indoor-manufacturing-motivational-signage-1024x768.jpg"
        imageAlt="Manufacturing Signs Consultation"
        imagePosition="left"
      >
        <p className="mb-4">
          Choosing the right manufacturing signage may seem like a simple task, but the standards and technicalities that surround it can be overwhelming…which is why Royal Signs & Awnings exists. We want to help business owners like you make the best decisions about your signs by offering you the knowledge and techniques that we have gathered through years of training and experience.
        </p>
        <p className="mb-4">
          Interested in getting your industrial signs done by the most reputable signage provider in town? Just give us a call and we'll have one of our experienced signage specialists discuss things with you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for your Free Consultation with a Manufacturing Signs Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
