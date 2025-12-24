import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";

export default function CoronavirusSignage() {
  return (
    <UniversalPageTemplate
      title="Coronavirus Signage"
      subtitle="Design | Production | Installation"
      heroImage="/images/signtypes/coronavirus/storefront-signage.jpg"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Coronavirus Signage", path: "/coronavirus-signage" },
      ]}
    >
      <ContentSection
        title="Houston Coronavirus Signage"
        image="/images/signtypes/coronavirus/storefront-signage.jpg"
        imageAlt="Cohesive storefront signage collection"
      >
        <p className="mb-4">For every company type, your signage combination will drastically impact your brand recognition, profitability, and client satisfaction, especially during these challenging times. From helping patrons and guests with instinctive wayfinding to encouraging team safety, your sign and graphic blend support smooth business operations. Royal Signs & Awnings provides Houston coronavirus signage to support you.</p>
        <p className="mb-4">Employing a professional makes getting the best indoor sign elements simple. There are many individual and varying components that need to be considered, such as your business and brand promotion objectives, how your customers and guests navigate and interact with your facilities, relevant local sign and graphic regulations, and even your commercial signage placement all have an impact on the specific number and type of branded, commercial signs you select for your space.</p>
        <p className="mb-4">Royal Signs & Awnings not only creates signage, we understand how impactful signage can support the flow of traffic through a business, remind your staff of safe work routines, and reinforces your brand and business. By providing attractive, informative signage components that are designed for your facilities, business, and desires, our professionals raise your business or organization to another rung.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!</p>
      </ContentSection>

      <ContentSection
        title="Wayfinding & Safety Hospital Signs"
        image="/images/signtypes/coronavirus/hospital-wayfinding.jpg"
        imageAlt="Attractive Hospital Wayfinding Signage"
        imagePosition="left"
      >
        <p className="mb-4">When hospitals are faced with a health-related emergency situation such as the coronavirus, specifically Covid-19, it is crucial that new patients and healthcare providers understand how to properly navigate and interact with your hospital. Precise navigational assistance, necessary information, and health and safety warnings should start prior to the patient ever stepping into the hospital.</p>
        <p className="mb-4">This means hospital signage and intuitive wayfinding signs are crucial. The most effective signage can assist with faster and more streamlined service, operate as a reminder to embrace healthier habits, and help reduce the possibility of spreading infection by cutting back on person to person contact.</p>
        <p className="mb-4">Plainly identify proper vehicle parking spots and facilitate new traffic by providing assistive support through the implementation of helpful hospital signs and wayfinders by Royal Signs & Awnings. To increase your coronavirus sign and graphic visibility for new patient arrivals at all hours, we also offer reflective signs and graphics.</p>
        <p>Indoor hospital signs and graphics can comprise of increased hand washing signs, reminders of enhanced safety practices, protocols, and procedures, and increased wayfinding and navigational assistance sign and graphic elements in order to lessen in-person support.</p>
      </ContentSection>

      <ContentSection
        title="Assisted Living & Nursing Home Signage"
        image="/images/signtypes/coronavirus/floor-graphics.jpg"
        imageAlt="Custom safety floor graphics"
      >
        <p className="mb-4">During a medical crisis such as Covid-19, it is essential that both new residents and healthcare providers all completely understand how to best navigate your space. Precise navigational directions, instructions, and warnings ideally should start before your patient ever steps into the medical center.</p>
        <p className="mb-4">This is why nursing home signage and wayfinders are essential. Productive signage can assist with streamlined patient service, work as an important reminder to conform to healthier hygiene practices, and lower the individual risk of spreading the virus by decreasing physical interactions.</p>
        <p>Supportive and effective interior nursing home signs and graphics can be as quick as increased hand washing signs, important reminders of increased security and safety procedures, and increased navigation assistance signs to help decrease interpersonal communication. Useful signage elements can help you with reducing risks for you, your committed staff of medical specialists, and your patients who trust you to provide care.</p>
      </ContentSection>

      <ContentSection
        title="Business Update Signage"
        image="/images/signtypes/coronavirus/hours-sign.jpg"
        imageAlt="Hours of Operation Sign"
        imagePosition="left"
      >
        <p className="mb-4">Are you dealing with changes to your business hours or your business practices or processes as a way to help decrease the spread of Covid-19? Well-crafted, practical signs, graphics, and displays help your potential customers understand how to still take advantage of your service and product blend for the duration of the personal interaction limitations we are all experiencing.</p>
        <p className="mb-4">In order to redirect your new and returning customers and clients to the drive-thru, provide important information with regards to restricted hours of operation, or supply an alternative or temporary contact method, Royal Signs & Awnings provides impactful commercial signs and graphics to assist your organization.</p>
        <p>Our experts produce reduced exposure to new signage products. This gives us the ability to create your targeted new signage products, even including high-quality installation on-site, without face-to-face interaction with you. As recommendations can change fairly quickly as a response to coronavirus, we are still able to offer prompt production on simple assistive sign elements.</p>
      </ContentSection>

      <ContentSection 
        title="Every Sign Your Business Needs!"
        image="/images/signtypes/coronavirus/wall-mural.jpg"
        imageAlt="Custom vinyl wall mural install"
      >
        <p className="mb-4">Royal Signs & Awnings produces cohesive, eye-catching wayfinding, safety, and hospital signage. Whether you need temporary or adjusted signage to keep customers aware of changes to your hours, contact details, or other vital business information that may require changes as a result of Covid-19, or are making use of this downtime to plan for engaging new indoor, ADA, or wayfinding sign and graphics to be in position once you reopen your doors, Royal Signs & Awnings manufactures effective business signs and graphics designed to assist you during these uncertain days.</p>
        <p>From floor signs to product displays, our professionals fully understand the unique and specific needs of assorted business verticals. Our specialists contemplate your brand guidelines, facilities, and organizational goals to manufacture the most effective signs and graphics for your business. If you want just one particular wall sign or an entire collection of promotional and branded signage, Royal Signs & Awnings will produce it.</p>
      </ContentSection>

      <ContentSection title="Free Expert Signage Consultation">
        <p className="mb-4">Royal Signs & Awnings is fully committed to providing the wayfinding, safety, and customer support signage you need as we go through this difficult time. Our dedicated, dependable team is ready to produce the branded commercial signs necessary to effectively improve product and service promotion, brand reinforcement, customer service, or wayfinding.</p>
        <p className="font-semibold">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Signage Expert!</p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
