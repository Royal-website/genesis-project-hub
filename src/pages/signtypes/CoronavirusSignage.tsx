import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CoronavirusSignage() {
  return (
    <UniversalPageTemplate
      title="Coronavirus Signage"
      subtitle="Design | Production | Installation"
      heroImage="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/04/coronavirus-signage-header.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Coronavirus Signage", path: "/coronavirus-signage" },
      ]}
    >
      <ContentSection
        title="Houston Coronavirus Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/05/cohesive-storefront-signage-collection-300x225.jpg"
        imageAlt="cohesive storefront signage collection"
      >
        <p className="mb-4">
          For every company type, your signage combination will drastically impact your brand recognition, profitability, and client satisfaction, especially during these challenging times. From helping patrons and guests with instinctive wayfinding to encouraging team safety, your sign and graphic blend support smooth business operations. Royal Signs & Awnings provides Houston coronavirus signage to support you.
        </p>
        <p className="mb-4">
          Employing a professional makes getting the best indoor sign elements simple. There are many individual and varying components that need to be considered, such as your business and brand promotion objectives, how your customers and guests navigate and interact with your facilities, relevant local sign and graphic regulations, and even your commercial signage placement all have an impact on the specific number and type of branded, commercial signs you select for your space.
        </p>
        <p className="mb-4">
          Royal Signs & Awnings not only creates signage, we understand how impactful signage can support the flow of traffic through a business, remind your staff of safe work routines, and reinforces your brand and business.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation!
        </p>
      </ContentSection>

      <ContentSection
        title="Wayfinding & Safety Hospital Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/04/Attractive-Hospital-Wayfinding-Signage-300x200.jpg"
        imageAlt="Attractive Hospital Wayfinding Signage"
        imagePosition="left"
      >
        <p className="mb-4">
          When hospitals are faced with a health-related emergency situation such as the coronavirus, specifically Covid-19, it is crucial that new patients and healthcare providers understand how to properly navigate and interact with your hospital. Precise navigational assistance, necessary information, and health and safety warnings should start prior to the patient ever stepping into the hospital.
        </p>
        <p className="mb-4">
          This means hospital signage and intuitive wayfinding signs are crucial. The most effective signage can assist with faster and more streamlined service, operate as a reminder to embrace healthier habits, and help reduce the possibility of spreading infection by cutting back on person to person contact.
        </p>
        <p>
          Plainly identify proper vehicle parking spots and facilitate new traffic by providing assistive support through the implementation of helpful hospital signs and wayfinders by Royal Signs & Awnings.
        </p>
      </ContentSection>

      <ContentSection
        title="Assisted Living & Nursing Home Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/04/Custom-safety-floor-graphics-300x220.jpg"
        imageAlt="Custom safety floor graphics"
      >
        <p className="mb-4">
          During a medical crisis such as Covid-19, it is essential that both new residents and healthcare providers all completely understand how to best navigate your space. Precise navigational directions, instructions, and warnings ideally should start before your patient ever steps into the medical center.
        </p>
        <p className="mb-4">
          This is why nursing home signage and wayfinders are essential. Productive signage can assist with streamlined patient service, work as an important reminder to conform to healthier hygiene practices, and lower the individual risk of spreading the virus by decreasing physical interactions.
        </p>
        <p>
          Supportive and effective interior nursing home signs and graphics can be as quick as increased hand washing signs, important reminders of increased security and safety procedures, and increased navigation assistance signs to help decrease interpersonal communication.
        </p>
      </ContentSection>

      <ContentSection
        title="Business Update Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/04/Hours-of-Operation-Sign-300x187.jpg"
        imageAlt="Hours of Operation Sign"
        imagePosition="left"
      >
        <p className="mb-4">
          Are you dealing with changes to your business hours or your business practices or processes as a way to help decrease the spread of Covid-19? Well-crafted, practical signs, graphics, and displays help your potential customers understand how to still take advantage of your service and product blend for the duration of the personal interaction limitations we are all experiencing.
        </p>
        <p>
          In order to redirect your new and returning customers and clients to the drive-thru, provide important information with regards to restricted hours of operation, or supply an alternative or temporary contact method, Royal Signs & Awnings provides impactful commercial signs and graphics to assist your organization.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Expert Signage Consultation"
      >
        <p className="mb-4">
          Royal Signs & Awnings is fully committed to providing the wayfinding, safety, and customer support signage you need as we go through this difficult time. Our dedicated, dependable team is ready to produce the branded commercial signs necessary to effectively improve product and service promotion, brand reinforcement, customer service, or wayfinding.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for your Free Consultation with a Signage Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
