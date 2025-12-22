import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { Link } from "react-router-dom";

export default function DentistSigns() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Dentist Signs", path: "/dentist-signs" },
  ];

  return (
    <UniversalPageTemplate
      title="Dentist Signs"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/AdobeStock_349073821_Editorial_Use_Only-scaled-e1679346143733.webp"
      breadcrumbs={breadcrumbs}
    >
      <ContentSection
        title="Dentist Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-custom-aframe-storefront-dental-signage-300x188.jpg"
        imageAlt="Attractive Outdoor Signage"
      >
        <p className="mb-4">
          Dental appointments aren't exactly the most relaxing and stress-free of meetings, which is why dentists are doing their best to make every patient's visit as calming and hassle-free as possible. One inexpensive way to help in this effort is by setting up dentist signs that are not only aesthetically pleasing, but also convey important information to your patients.
        </p>
        <p className="mb-4">
          Whether you need outdoor signs, indoor signs, wayfinders, or promotional materials for your clinic, dentist signs that are professionally designed, fabricated, and installed prove to be very effective in giving your clinic a more relaxed vibe and providing a more positive patient experience.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings has been in the sign-making business for a long time now, and we're passionate about giving dental clinics the aesthetic, marketing, and informational tools they need to bring more patients in and to give those patients the best service possible.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Increase Patient Footfall With Effective Door Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/outdoor-vinyl-window-dental-graphic-door-signs-300x169.jpg"
        imageAlt="Attractive Storefront Signage"
      >
        <p className="mb-4">
          When it comes to increasing patient footfall in your dental practice, the challenge isn't really in convincing people to step in your clinic. However, if a person is looking for a dentist to address their concern, they are highly likely to step inside your clinic if they know that you're offering the services that they need.
        </p>
        <p className="mb-4">
          By partnering with an established signage provider like Royal Signs & Awnings, you can have door signage that's uniquely designed, professionally fabricated, and custom-crafted to clearly convey important information about your practice (opening hours, services offered, specializations, contact details, etc.) while sticking to your branding.
        </p>
        <p>
          Here at Royal Signs & Awnings our team is trained and experienced to create door signage that attract attention, hold attention, and inform.
        </p>
      </ContentSection>

      <ContentSection
        title="Impressive and Impactful Indoor Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/indoor-dimensional-letters-dental-signage-300x200.jpg"
        imageAlt="Attractive Custom Indoor Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          As a dentist, your top priority is delivering the best dental care to your patients. Giving them the best patient experience while inside your clinic is important, too. Unfortunately, you can't always take care of both things at the same time. The good news though is that Royal Signs & Awnings can definitely help you out with patient experience through high-quality interior signs.
        </p>
        <p className="mb-4">
          With interior signage by Royal Signs & Awnings, you can give your patients a great first impression the moment they step inside your clinic. We have lobby signs that can be customized to display your clinic name or your logo.
        </p>
        <p>
          We also have room IDs, directional signs, door signs, and wayfinding signs that can be fabricated to suit your branding identity.
        </p>
      </ContentSection>

      <ContentSection
        title="Versatile Digital Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2019/03/indoor-custom-dental-digital-dimensional-signage-300x228.jpg"
        imageAlt="Indoor Digital Signage"
      >
        <p className="mb-4">
          One challenge in running a dental clinic is dealing with patients' impatience. Especially when they are in pain or uncomfortable, your patients can get quite fussy while waiting for their turn. And because you are going to be preoccupied with another patient, you will need something to help you out. This is where digital signage by Royal Signs & Awnings comes in.
        </p>
        <p className="mb-4">
          The opportunities that digital signs can bring into your clinic are endless. Electronic signs are capable of entertaining and informing your patients at the same time. You can hook them up to your clinic's automation system and have one portion of the screen display priority numbers, while another section of the screen displays announcements.
        </p>
        <p>
          With electronic signage, your clinic can have an entertainment, information, and paging system that can definitely decrease stress levels and at the same time give your practice a more modern appeal.
        </p>
      </ContentSection>

      <ContentSection title="Free Dentist Signs Consultation">
        <p className="mb-4">
          At Royal Signs & Awnings, we create all of our signs in-house, which is why we are confident of the quality of our work. Our graphic artists do the designs for maximum impact, our sign specialists source out the materials and craft the signs for the best quality, and our sign installers put up the signs for maximum visibility.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at <Link to="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</Link> for a Free Consultation!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
