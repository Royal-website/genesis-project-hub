import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function DoctorSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Doctor Signs", path: "/doctor-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Doctor Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/AdobeStock_490657613_Editorial_Use_Only-scaled-e1679348123381.webp"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Doctor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-dimensional-letter-storefront-doctors-office-signage-300x229.jpg"
        imageAlt="Attractive Dimensional Letters"
      >
        <p className="mb-4">
          If you're wondering what you can do better to get your practice noticed and to get more patients in your clinic, you can actually start with the quality and effectiveness of the doctor signs that you currently have. To be honest, in the highly competitive world that we live in today, your "The Doctor Is In" sign just won't do the trick anymore. Your patients need more information than that.
        </p>
        <p className="mb-4">
          By partnering with an established sign provider, you can spend less time worrying about getting patients in, and spend more time on patient care. Royal Signs & Awnings has been in the sign-making industry for many years and specializes in doctor signs. We know just how big a difference an effective signage system can make on your practice.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has a wide array of signage choices to ensure that you get the signs you need, whether it's door signs, window decals, navigation signs, wayfinders, building signs, etc. We also have a strong team of graphic artists, project managers, signage experts, marketing specialists, and sign installers who can work closely with you.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Outdoors Signs That Get Your Practice Noticed"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/outdoor-monument-family-medicine-pediatrics-sign-300x225.jpg"
        imageAlt="Attractive Outdoor Monument Sign for Your Practice"
      >
        <p className="mb-4">
          Unlike retail shops, restaurants, and other businesses, your practice doesn't need to convince every passing pedestrian and driver to step inside your building. Those who need to go to your clinic will most likely go there, but only if they know it exists, it's open, and it offers the services that they're looking for.
        </p>
        <p className="mb-4">
          Attractive and informative signs are great tools to help get your practice noticed. They make important information—such as clinic hours or insurance acceptance or specializations—easily available to passersby who happen to be looking for a clinic like yours.
        </p>
        <p>
          Our signs are also built to stand against the outdoor elements so you won't have to worry about getting them fixed or replaced over and over. Our network of suppliers also provide the best quality sign materials to ensure your doctor signs look stunning and stay stunning for years to come.
        </p>
      </ContentSection>

      <ContentSection
        title="Patient-centered Sign System"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-doctors-office-wayfinding-directory-sign-300x300.jpg"
        imageAlt="Attractive Directory Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          Delivering the ideal patient experience is vital as soon as your patients step inside your establishment. We understand that one of your goals as a doctor is to give them the attention, care, and convenience that they deserve as they spend their time in your clinic. And Royal Signs & Awnings can help you give this to your patients (and even employees).
        </p>
        <p className="mb-4">
          Patient-centered care is well supported by a patient-centered signage system. Royal Signs & Awnings is a trusted expert when it comes to producing intuitive and effective signage that is designed with your brand in mind.
        </p>
        <p>
          Our doctor signs do a great job in keeping your patients' stress levels low by eliminating many sign-related instances that inconvenience them. These inconveniences include not knowing where a particular room or area is, not knowing where to go or what to do next, and not knowing what they should or should not do.
        </p>
      </ContentSection>

      <ContentSection
        title="Digital Signs That Inform and Entertain"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/02/indoor-waiting-digital-gochiro-sign-300x196.jpg"
        imageAlt="Indoor Lobby With Digital Monitor"
      >
        <p className="mb-4">
          Over the years, electronic signs have proven to be a hugely helpful technology for healthcare providers. Usually placed in waiting rooms and lobbies, digital signs offer an easy and dynamic way of informing and entertaining patients who are waiting for their turn or results.
        </p>
        <p className="mb-4">
          About their informative function, digital signs can easily disseminate important information such as priority numbers, announcements, and instructions to the patients or staff in your practice. They can even be set up to an automated system so you don't have to spend a lot of time overlooking your digital signage.
        </p>
        <p>
          As for their entertainment function, electronic signs help make lessen the stress and inconvenience of waiting in line by allowing you to play relaxing, lighthearted, or even informative videos in particular areas of your building.
        </p>
      </ContentSection>

      <ContentSection title="Free Doctor Signs Consultation">
        <p className="mb-4">
          With the knowledge, technology, techniques, and experience that we have gained over the years, Royal Signs & Awnings is confident that it can give you the service that you are looking for in a signage company. We don't just take your design and print it out for you. Royal Signs & Awnings is fully capable of handling all aspects in a sign project.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
