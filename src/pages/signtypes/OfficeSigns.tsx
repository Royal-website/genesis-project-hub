import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";
import { ContentSection } from "@/components/sections/ContentSection";
import { ImageGrid } from "@/components/sections/ImageGrid";

export default function OfficeSigns() {
  const galleryImages = [
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/Merch-I-1-150x150.jpg", alt: "Custom Wall Mural", label: "Wall Mural" },
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/wayfinding-4-150x150.jpg", alt: "Custom Office Directory", label: "Office Directory" },
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/ada-1-150x150.jpg", alt: "Custom ADA Room Identification Signs", label: "ADA Signs" },
    { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/lobby-5-150x150.jpg", alt: "Attractive Custom Lobby Sign", label: "Lobby Sign" },
  ];

  return (
    <UniversalPageTemplate
      title="Office Signs"
      subtitle="Design | Production | Installation"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Office Signs", path: "/office-signs" },
      ]}
    >
      <ContentSection
        title="Houston Office Signs"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/lobby-1-300x200.jpg"
        imageAlt="Custom Lobby Signs"
      >
        <p className="mb-4">
          Royal Signs & Awnings creates the attractive, cohesive office signs you need for brand development, wayfinding, accessibility, and more!
        </p>
        <p className="mb-4">
          Office signage typically consists of individual yet complementary signage elements. Cohesive with your branding guidelines and with your other indoor and outdoor signs, we understand the importance of creating signage elements that work together to further your business goals and build your brand awareness. Royal Signs & Awnings is your dedicated local signage partner for all of your office sign needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with an Office Signs Expert!
        </p>
      </ContentSection>

      <ContentSection
        title="What Signs Does My Office Need?"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/09/Merch-I-1-300x155.jpg"
        imageAlt="Custom Wall Mural"
        imagePosition="left"
      >
        <p className="mb-4">
          There is a wide variety of office signage. Not every business needs every type of indoor sign for their office. The right blend for you will depend on your business type, specific facilities, and brand guidelines.
        </p>
        <p className="mb-4">Common office signs include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Lobby logo sign</li>
          <li>ADA signs</li>
          <li>Directory signs</li>
          <li>Room identification signs</li>
          <li>Door signs</li>
          <li>Floor graphics</li>
          <li>Wall murals</li>
          <li>Wayfinding signs</li>
          <li>& More</li>
        </ul>
        <p>
          Business office signs can perform a variety of purposes and functions throughout your business. They can reinforce your brand identity and help visitors navigate your facility, as well as tell the story of your brand with impactful wall murals, allow you to reallocate staff by providing frequently requested information, and improve the client perception of your business. Some signage may even be legally required for accessibility, so working with a knowledgeable sign company is a must.
        </p>
      </ContentSection>

      <ImageGrid images={galleryImages} columns={4} />

      <ContentSection
        title="Creating Impactful Office Signage"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/floor-vinyl-300x219.jpg"
        imageAlt="Custom Lobby Floor Vinyl Graphics"
      >
        <p className="mb-4">
          Getting the right signage all starts with the consultation. We provide on-site evaluations, allowing us to understand your space, current signage, and brand personality. Once we know more about you, how customers use your facilities, and the services you provide, we will discuss with you the different areas where your business can benefit from additional signage.
        </p>
        <p>
          From new offices to well-established facilities, Royal Signs & Awnings works with businesses in all phases of growth to ensure that they are getting the maximum impact from their signage.
        </p>
      </ContentSection>

      <ContentSection
        title="For All Types of Offices"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/Lobby-Decal-wall-mural-300x181.jpg"
        imageAlt="Custom Lobby Wall Mural"
        imagePosition="left"
      >
        <p className="mb-4">
          We understand that there are many different types of offices and that each office will have their own unique needs. Whether you are a school office, a corporate office, company head office, satellite office, or professional services or healthcare provider, such as a doctor's office or dentist office, Royal Signs & Awnings will create the right signage collection for your needs and branding.
        </p>
        <p>
          Need to outfit multiple offices with cohesive signage? No problem! We can create everything you need in-house, and will work with you to determine the best, most cost-efficient solution for distributing the signage to your individual locations.
        </p>
      </ContentSection>

      <ContentSection
        title="Local Full-Service Signage Provider"
        image="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/Copy-of-Chiropractic-Office-Window-Decals-300x200.jpg"
        imageAlt="Chiropractic Office Door Vinyl"
      >
        <p className="mb-4">
          Royal Signs & Awnings is your complete, local provider for all of the signs your office needs. Whether you are looking for an individual element or an entire office signage package, we provide the support, assistance, and expertise you need from initial consultation through installation.
        </p>
        <p>
          Whether you need assistance with identifying and designing the right signs for you, or already have a print-ready file, we deliver the high-quality signage products you need to give your business a professional, polished look.
        </p>
      </ContentSection>

      <ContentSection
        title="Free Office Sign Consultation"
      >
        <p className="mb-4">
          Royal Signs & Awnings is your local provider for attractive, cohesive office signs. Our dedicated and experienced staff provide 5-star service, support, and products, so you can be confident you are getting the best possible signage products for your needs.
        </p>
        <p className="font-bold">
          Call Royal Signs & Awnings today at (281) 645-9935 for a Free Consultation with an Office Signs Expert!
        </p>
      </ContentSection>
    </UniversalPageTemplate>
  );
}
