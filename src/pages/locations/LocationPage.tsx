import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Star } from "lucide-react";

// Location data with -tx suffix matching original site URLs
const locations: Record<string, { name: string; fullName: string; slug: string }> = {
  "alief-tx": { name: "Alief", fullName: "Alief, TX", slug: "alief-tx" },
  "houston-tx": { name: "Houston", fullName: "Houston, TX", slug: "houston-tx" },
  "missouri-city-tx": { name: "Missouri City", fullName: "Missouri City, TX", slug: "missouri-city-tx" },
  "richmond-tx": { name: "Richmond", fullName: "Richmond, TX", slug: "richmond-tx" },
  "rosenberg-tx": { name: "Rosenberg", fullName: "Rosenberg, TX", slug: "rosenberg-tx" },
  "sugar-land-tx": { name: "Sugar Land", fullName: "Sugar Land, TX", slug: "sugar-land-tx" },
  "thompsons-tx": { name: "Thompsons", fullName: "Thompsons, TX", slug: "thompsons-tx" },
};

// General location page content (Sign Company pages like /thompsons-tx)
function getLocationPageContent(locationName: string) {
  return {
    heroTitle: `${locationName} Sign Company`,
    heroSubtitle: "Design | Production | Installation",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg",
    sections: [
      {
        title: `${locationName} Sign Company`,
        paragraphs: [
          `Want to acquire fantastic exposure for your brand? Using attractive, targeted commercial signage by ${locationName} sign company, Royal Signs & Awnings, you can achieve your branding goals!`,
          `Your leading local custom signage manufacturers, we handle each and every aspect of your signage project here in our local full-service signage facility. We focus on giving you remarkable service, eco-friendly sign and graphic products, and durable materials, which makes us the clear and obvious choice for all of your custom sign needs.`,
          `An outstanding way to tell promising consumers about what your business has to offer, your professional signs and graphics are a good asset for brand building purposes and shopper support. With irresistible outdoor signage, complementary indoor signs, and beneficial promotional signs, our experts see to it that your company won't be overlooked. Our experienced local sign company produces sound solutions for your specific brand and business promotion needs.`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters-300x225.jpg"
      },
      {
        title: "Signs That Work For You",
        paragraphs: [
          `Ready to boost your average ticket, increase your traffic flow, or improve your team's productivity? Royal Signs & Awnings delivers the high-visibility signage you must have to do precisely that. From the initial free signage consultation to final sign install, we see to it we are manufacturing the appropriate signs for your unique location, desires, and brand.`,
          `Our specialists make an effort to comprehend your unique promotional goals, which allows us to deliver practical sign and graphic alternatives that will perform for your organization. Branded signs, graphics, and images get your brand found, allow you to clearly display what you have to offer, and provide passive assistance to your guests.`,
          `From attention-getting vinyl signs to promotional office signs, banners, menu boards, a-frames, and even more, our talented specialists will deliver the brand-building sign and graphic elements to improve awareness and revenue.`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg"
      },
      {
        title: "Outdoor & Exterior Signs",
        paragraphs: [
          `Improve visibility for your business and brand with high-visibility and high-impact outdoor signs and graphics produced Royal Signs & Awnings! Delivering impressive pole signs to attention-getting storefront signs, portable signs, post and panel signs, temporary signs, and many more, we design, build, and install all of the signs, graphics, and images your unique business needs for far better awareness.`,
          `Enticing, converting, and retaining clients is the main function of a strong business facade. This is generally the primary introduction a new buyer has to your business, so the data it gives must be effective, insightful, and attractive. A good number of businesses need a custom branded storefront sign, such as dimensional letters, hanging signs, or blade signs to announce the existence of their business.`,
          `It only takes the correct high-quality exterior sign and graphic elements to entice more customers and clients, and Royal Signs & Awnings delivers the right blend of custom signage products for you.`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-7-300x225.jpg",
        signTypes: [
          { name: "Awning Signs", link: "/awning-signs" },
          { name: "Blade Signs", link: "/outdoor-signs" },
          { name: "Cabinet Signs", link: "/outdoor-signs" },
          { name: "Channel Letters", link: "/outdoor-signs" },
          { name: "Dimensional Letters", link: "/outdoor-signs" },
          { name: "Hanging Signs", link: "/outdoor-signs" },
          { name: "Lighted Signs", link: "/outdoor-signs" },
          { name: "Monument Signs", link: "/outdoor-signs" },
          { name: "Pole Signs", link: "/outdoor-signs" },
          { name: "Post & Panel Signs", link: "/outdoor-signs" },
          { name: "Pylon Signs", link: "/outdoor-signs" },
          { name: "Storefront Signs", link: "/outdoor-signs" },
          { name: "Sign Repairs", link: "/custom-signs" },
          { name: "High Rise Signs", link: "/outdoor-signs" },
        ]
      },
      {
        title: "Indoor & Interior Signs",
        paragraphs: [
          `Support wayfinding in your facility, boost your general ticket, and escalate staff member productiveness with the help of engaging and attractive indoor signs by Royal Signs & Awnings. No matter what your company objectives are, our professionals produce the specialty interior signs and graphics your business needs to reach them.`,
          `The most appropriate indoor signage is driven by your facility design and style, specific brand needs, and local sign requirements. From temporary promotional signs to useful wayfinding signage, and staff motivating large format wall graphics, we help you choose the best possible elements for your business.`,
          `Royal Signs & Awnings gives you on-location signage evaluations to decide what sign and graphic products will perfectly satisfy your facilities and business goals. We are excited to help you create an effective and productive place to work, shop, and do business!`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg",
        signTypes: [
          { name: "Floor Signs", link: "/indoor-signs" },
          { name: "Lobby Signs", link: "/indoor-signs" },
          { name: "Office Signs", link: "/indoor-signs" },
          { name: "POP Signs", link: "/indoor-signs" },
          { name: "Room ID Signs", link: "/indoor-signs" },
          { name: "Wall Signs", link: "/indoor-signs" },
          { name: "Wayfinding Signs", link: "/indoor-signs" },
        ]
      },
      {
        title: "Vinyl Signs & Graphics",
        paragraphs: [
          `Branded vinyl wraps, signs, and graphics supply you with enhanced exposure for any type of corporation of any size. When you are wanting a strategy to bring visibility to your business, facilitating customers when they are trying to find a specific department, product, or area, or wish to get more exposure from your trade show or convention attendance, our vinyl signage pros provide outstanding vinyl signs and graphics for your business.`,
          `We are your all-inclusive custom signs and graphics provider, and our pros offer high-quality signs and graphics products and services, including graphic design, environmentally-friendly fabrication, and skilled installation. This means we are able to easily custom craft any of the high-visibility and brand promoting signs and graphics you need.`,
          `Whether it's exciting window graphics, wraps, banners, floor graphics, lettering, vinyl clings, decals, or any other signage element you are considering, our vinyl signage specialists deliver your custom signage quickly, skillfully, and with great attention to detail.`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-8-300x225.jpg"
      },
      {
        title: "Custom Signs",
        paragraphs: [
          `Royal Signs & Awnings believes that if you desire commercial signs and graphics that really display your distinct business and brand, specialty signs are the ideal possibility for creating a lasting impression. Your custom signage should be cohesive with your business budget, location, goals, needs, and timeframe.`,
          `Our custom signage specialists consider your specifications when advising you on the most impactful custom signs for your needs. Whether you need a branded, custom lobby sign, or have a completely unique sign or graphic need, Royal Signs & Awnings will create the ideal signs and graphics for you.`,
          `Specialty signs, wraps, and graphics mean that you get something brand cohesive and unique. From adding lighting signage elements to engraving, sandblasting, etching, or embossing nearly all sign materials, we make certain that your commercial signage is impactful and enticing.`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg"
      },
      {
        title: "Complete Commercial Signage Company",
        paragraphs: [
          `Very few ${locationName}, TX signage companies provide assistance throughout each and every aspect of your new signage project. As a comprehensive signage shop, Royal Signs & Awnings offers a total collection of sign choices so you won't have to to go from one supplier to another to support custom signage design and layout, local production, along with installation. Everything you desire is readily available, with our dedicated team also delivering maintenance and repair.`,
          `Our first goal is to make sure that we understand your custom signage needs and goals. Getting this insight early enables our experts to make smart recommendations to effectively satisfy your preferences, including the best sign types, sign elements, and component placement to best match your schedule, business facilities, and budget.`,
          `Our signage consultants discuss the information they learn with our creative sign design team to ensure your ideas, desires, and vision are represented in the final layout and design. You will retain editing control and final approval over your design, and we work to incorporate your vision before presenting the initial design to you.`
        ],
        image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters-300x225.jpg"
      },
      {
        title: "Our Commitment To You",
        paragraphs: [
          `We deliver the professional signs, wraps, graphics, and displays you need to attract and retain more customers and clients.`,
          `Our experienced professionals are dedicated to delivering the right products and support throughout custom sign design, expert production, installation, and beyond for all of your signage products. Anytime you need effective and functional signs, produced to your specifications, that fits your budget, and completed according to your time guidelines, trust Royal Signs & Awnings.`,
          `We are the professional ${locationName} sign company you can count on for your business signage needs.`
        ]
      }
    ]
  };
}

// Service data with full content matching original site
const services: Record<string, { 
  name: string; 
  heroImage: string;
  content: (locationName: string) => {
    intro: string;
    sections: Array<{ title: string; paragraphs: string[]; image?: string }>;
  };
}> = {
  "sign-company": {
    name: "Sign Company",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg",
    content: (loc) => ({
      intro: `Looking for a reliable sign company in ${loc}? Royal Signs & Awnings is your trusted local partner for all signage needs. We design, manufacture, and install high-quality signs that help businesses stand out and attract customers.`,
      sections: [
        {
          title: "Full-Service Sign Company",
          paragraphs: [
            `The best thing is that, with the ${loc} signage professionals at Royal Signs & Awnings, you are able to get complete sign solutions from design to installation. We create striking and captivating commercial signs that can catch the attention of new consumers, increase the traffic flow of customers, and enhance the professionalism of your business!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in the field and honed various skills. Royal Signs & Awnings provides cost-efficient signage solutions. With the client increment, you will easily re-earn the money you invested in your signage from all the incoming profits.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg"
        },
        {
          title: "Complete Signage Solutions",
          paragraphs: [
            `At Royal Signs & Awnings, we offer comprehensive signage services for businesses in ${loc}. From initial consultation and design to fabrication and installation, we handle every aspect of your signage project.`,
            `Whether you need indoor signs, outdoor signs, vehicle wraps, or custom displays, our team has the expertise to deliver exceptional results that exceed your expectations.`
          ]
        },
        {
          title: "Why Choose Royal Signs & Awnings?",
          paragraphs: [
            `We understand that your business signage is an investment in your company's future. That's why we use only the highest quality materials and latest technology to create signs that are built to last.`,
            `Our team of experienced designers and installers work closely with you to understand your brand, your goals, and your budget. We then create custom signage solutions that help you achieve your business objectives.`
          ]
        }
      ]
    })
  },
  "indoor-signs": {
    name: "Indoor Signs",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg",
    content: (loc) => ({
      intro: `Indoor signs play a crucial role in guiding visitors, reinforcing your brand, and creating a professional atmosphere. From lobby signs to wayfinding signage, we create interior signs that make an impact for ${loc} businesses.`,
      sections: [
        {
          title: "Professional Indoor Signage",
          paragraphs: [
            `The best thing is that, with the ${loc} indoor signage professionals at Royal Signs & Awnings, you are able to create a cohesive interior environment that impresses visitors and reinforces your brand identity.`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in creating indoor signs for offices, retail stores, restaurants, and corporate facilities.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/promotional-window-vinyl-300x240.jpg"
        },
        {
          title: "Types of Indoor Signs",
          paragraphs: [
            `We offer a wide variety of indoor signage options including lobby signs, reception signs, directional signs, ADA-compliant signs, room identification signs, and custom wall graphics.`,
            `Whether you need dimensional letters for your reception area or wayfinding signs for a large facility, Royal Signs & Awnings has the expertise to deliver high-quality indoor signage.`
          ]
        },
        {
          title: "Enhance Your Interior Space",
          paragraphs: [
            `Indoor signs are more than just functional – they're an extension of your brand. Our design team works with you to create signage that complements your interior design while effectively communicating your message.`,
            `From modern acrylic signs to traditional metal letters, we offer a range of materials and finishes to match your aesthetic preferences.`
          ]
        }
      ]
    })
  },
  "outdoor-signs": {
    name: "Outdoor Signs",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg",
    content: (loc) => ({
      intro: `Outdoor signs are often the first thing customers see. We create eye-catching exterior signage that draws attention, builds brand recognition, and drives foot traffic to your ${loc} business.`,
      sections: [
        {
          title: "High-Impact Outdoor Signage",
          paragraphs: [
            `The best thing is that, with the ${loc} outdoor signage professionals at Royal Signs & Awnings, you are able to maximize your visibility and attract more customers. We create striking and captivating outdoor signs that can catch the attention of passersby and enhance the professionalism of your storefront!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in creating durable, weather-resistant outdoor signs that stand the test of time.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg"
        },
        {
          title: "Channel Letters & Illuminated Signs",
          paragraphs: [
            `Channel letters are one of the most popular outdoor signage options for businesses. These three-dimensional letters can be illuminated with LED lights to ensure visibility day and night.`,
            `We offer front-lit, back-lit (halo-lit), and combination channel letters in a variety of colors and finishes to match your brand identity.`
          ]
        },
        {
          title: "Monument & Pole Signs",
          paragraphs: [
            `For maximum visibility from the road, monument signs and pole signs are excellent options. These freestanding signs create a professional presence and help customers find your location easily.`,
            `Royal Signs & Awnings designs and installs custom monument and pole signs that complement your building architecture and reinforce your brand.`
          ]
        }
      ]
    })
  },
  "awning-signs": {
    name: "Awning Signs",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg",
    content: (loc) => ({
      intro: `Awning signs and canopy signs are common in businesses. These commercial signs are designed to adorn any storefront, but they offer other benefits as well. Effective signage helps promote your business or beautify your shop.`,
      sections: [
        {
          title: `${loc} Awning Signs`,
          paragraphs: [
            `The best thing is that, with the ${loc} awning signage professionals at Royal Signs & Awnings, you are able to save the money allotted for advertising or renovation. We create striking and captivating awning and canopy signs that can catch the attention of new consumers, increase the traffic flow of customers, and enhance the professionalism of your shop!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in the field and honed various skills. We recommend awning signs because we believe that they are a significant investment for any type of business. Royal Signs & Awnings provides cost-efficient awning and canopy signs. With the client increment, you will easily re-earn the money you invested in your signage from all the incoming profits.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-7-300x225.jpg"
        },
        {
          title: "Increase Brand Visibility",
          paragraphs: [
            `Being known by consumers might be one of the biggest challenges in managing a business. One strategy that's proven to work is to increase your brand visibility. Prepare publicity materials and post them all as much as you can. Online, in newspapers, flyers, etc. But of course, all of this won't make sense without commercial signage at your storefront.`,
            `An awning sign or canopy sign can give a lot of exposure to your business all day, every day. Everyone who passes by your store gets an idea about your existence. Should their interest be piqued, they will surely enter your shop and make a purchase. You see, it's all about having attractive and compelling signage. Royal Signs & Awnings designs, crafts, and installs all types of commercial signages, even awning and canopy signs.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-8-300x225.jpg"
        },
        {
          title: "Save Money on Utilities",
          paragraphs: [
            `An awning is naturally intended to provide shade against the heat of the sun. Awnings allow you to add value to your building without a costly remodel. If you get an awning installed in front of your door or window, you might be able to save a huge amount on cooling expenses.`,
            `The scorching heat of the sun does not only harm the people that pass by; the harsh summer rays could also damage your furniture and other displayed products near the window. With the protective shield that an awning can provide, you can save your materials from being damaged while also offering shade for your clients walking inside your store.`
          ]
        },
        {
          title: "Full-Service Sign Company",
          paragraphs: [
            `Royal Signs & Awnings is a full-service ${loc} sign company. We don't just create awning signs; we also specialize in all types of commercial signage including channel letters, monument signs, vehicle wraps, and more.`,
            `Our team handles everything from design to installation, ensuring a seamless experience for our clients. Contact us today to discuss your awning sign project!`
          ]
        }
      ]
    })
  },
  "custom-signs": {
    name: "Custom Signs",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg",
    content: (loc) => ({
      intro: `Every business is unique, and your signage should reflect that. We create custom signs tailored to your specific requirements, brand identity, and budget for ${loc} businesses.`,
      sections: [
        {
          title: "Unique Custom Signage",
          paragraphs: [
            `The best thing is that, with the ${loc} custom signage professionals at Royal Signs & Awnings, you are able to get signage that is truly one-of-a-kind. We create striking and captivating custom signs that can catch the attention of new consumers and enhance the professionalism of your business!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in creating custom signs for a wide variety of industries and applications.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg"
        },
        {
          title: "Design to Installation",
          paragraphs: [
            `From concept to completion, our team works closely with you to bring your vision to life. We start with a consultation to understand your needs, then create design mockups for your approval.`,
            `Once the design is finalized, our skilled craftsmen fabricate your sign using premium materials. Finally, our professional installation team ensures your sign is properly mounted and ready to impress.`
          ]
        },
        {
          title: "Materials & Options",
          paragraphs: [
            `We work with a wide variety of materials including aluminum, acrylic, wood, foam, metal, and more. Each material offers unique characteristics that may be ideal for your specific application.`,
            `Our custom signs can include illumination, dimensional elements, digital displays, and other special features to make your signage truly stand out.`
          ]
        }
      ]
    })
  },
  "business-signs": {
    name: "Business Signs",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg",
    content: (loc) => ({
      intro: `Professional business signs are essential for attracting customers and establishing your brand. We help ${loc} businesses of all sizes create impactful signage that communicates their message and builds credibility.`,
      sections: [
        {
          title: "Professional Business Signage",
          paragraphs: [
            `The best thing is that, with the ${loc} business signage professionals at Royal Signs & Awnings, you are able to establish a strong brand presence in your community. We create striking and captivating business signs that can catch the attention of new consumers and enhance the professionalism of your establishment!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in creating effective business signs for retail stores, restaurants, offices, and commercial facilities.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters.jpg"
        },
        {
          title: "Complete Business Signage Solutions",
          paragraphs: [
            `Your business signage needs may include exterior storefront signs, interior lobby signs, wayfinding signs, vehicle graphics, and promotional displays. Royal Signs & Awnings can handle all of these needs and more.`,
            `We work with you to create a cohesive signage package that reinforces your brand identity across all touchpoints.`
          ]
        },
        {
          title: "Stand Out From the Competition",
          paragraphs: [
            `In today's competitive marketplace, having professional signage is more important than ever. Your signs are often the first impression potential customers have of your business.`,
            `Let Royal Signs & Awnings help you make that first impression count with high-quality business signs that reflect the professionalism of your company.`
          ]
        }
      ]
    })
  },
  "metal-signs": {
    name: "Metal Signs",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/dimensional-letters.jpg",
    content: (loc) => ({
      intro: `Metal signs offer durability, sophistication, and timeless appeal. Whether you need aluminum, stainless steel, or bronze signage, we create metal signs that stand the test of time for ${loc} businesses.`,
      sections: [
        {
          title: "Durable Metal Signage",
          paragraphs: [
            `The best thing is that, with the ${loc} metal signage professionals at Royal Signs & Awnings, you are able to get signage that will last for years while maintaining its appearance. We create striking and captivating metal signs that can catch the attention of new consumers and enhance the professionalism of your business!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in working with various metals to create high-quality signage.`
          ],
          image: "https://cdn.markmywordsmedia.com/sign-images/services/dimensional-letters.jpg"
        },
        {
          title: "Metal Options",
          paragraphs: [
            `We work with aluminum, stainless steel, bronze, brass, copper, and other metals to create signs that match your desired aesthetic and budget.`,
            `Each metal offers unique characteristics – aluminum is lightweight and affordable, stainless steel provides a modern look, and bronze offers a classic, prestigious appearance.`
          ]
        },
        {
          title: "Applications",
          paragraphs: [
            `Metal signs are ideal for both interior and exterior applications. They can be used for dimensional letters, plaques, directional signs, and architectural signage.`,
            `With proper finishing, metal signs are resistant to weather, UV rays, and wear, making them an excellent long-term investment.`
          ]
        }
      ]
    })
  },
  "pole-signs": {
    name: "Pole Signs",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/pole-signs.jpg",
    content: (loc) => ({
      intro: `Pole signs provide maximum visibility from the road, making them ideal for businesses along highways and busy streets in ${loc}. We design and install pole signs that grab attention and guide customers to your location.`,
      sections: [
        {
          title: "High-Visibility Pole Signs",
          paragraphs: [
            `The best thing is that, with the ${loc} pole sign professionals at Royal Signs & Awnings, you are able to maximize your visibility from the road. We create striking and captivating pole signs that can catch the attention of passing motorists and help them find your business!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in designing and installing pole signs for various businesses.`
          ],
          image: "https://cdn.markmywordsmedia.com/sign-images/services/pole-signs.jpg"
        },
        {
          title: "Pole Sign Options",
          paragraphs: [
            `We offer single-pole and double-pole configurations, as well as multi-tenant pole signs for shopping centers. Pole signs can be illuminated for nighttime visibility.`,
            `Our pole signs are engineered to withstand wind loads and other environmental factors, ensuring long-lasting performance.`
          ]
        },
        {
          title: "Permit Assistance",
          paragraphs: [
            `Installing a pole sign often requires permits from local authorities. Royal Signs & Awnings can assist with the permitting process to ensure your sign meets all local codes and regulations.`,
            `We handle the paperwork and coordination with inspectors so you can focus on running your business.`
          ]
        }
      ]
    })
  },
  "canopy-tents": {
    name: "Canopy Tents",
    heroImage: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg",
    content: (loc) => ({
      intro: `Custom canopy tents are perfect for outdoor events, trade shows, farmers markets, and promotional activities in ${loc}. We create branded canopies that protect from the elements while showcasing your business.`,
      sections: [
        {
          title: "Custom Branded Canopies",
          paragraphs: [
            `The best thing is that, with the ${loc} canopy tent professionals at Royal Signs & Awnings, you are able to make a strong impression at any outdoor event. We create striking and captivating canopy tents that can catch the attention of event attendees and enhance the professionalism of your brand!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in creating custom canopy tents for businesses of all sizes.`
          ],
          image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign.jpg"
        },
        {
          title: "Features & Options",
          paragraphs: [
            `Our canopy tents feature full-color custom printing, durable frames, and weather-resistant fabrics. We offer various sizes to accommodate your needs.`,
            `Accessories such as sidewalls, half-walls, and carrying bags are available to complete your setup.`
          ]
        },
        {
          title: "Perfect for Events",
          paragraphs: [
            `Whether you're participating in a trade show, farmers market, sporting event, or community festival, a custom canopy tent helps you stand out from the crowd.`,
            `Our canopy tents are easy to set up and take down, making them convenient for frequent use.`
          ]
        }
      ]
    })
  },
  "monument-signs": {
    name: "Monument Signs",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/monument-signs.png",
    content: (loc) => ({
      intro: `Monument signs create a professional, permanent presence for your ${loc} business. These ground-level signs are ideal for office buildings, retail centers, churches, schools, and corporate campuses.`,
      sections: [
        {
          title: "Distinguished Entrance Signs",
          paragraphs: [
            `The best thing is that, with the ${loc} monument sign professionals at Royal Signs & Awnings, you are able to create a distinguished entrance that impresses visitors. We create striking and captivating monument signs that can enhance the professionalism of your property!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in designing and installing monument signs for various properties.`
          ],
          image: "https://cdn.markmywordsmedia.com/sign-images/services/monument-signs.png"
        },
        {
          title: "Design Options",
          paragraphs: [
            `Monument signs can be constructed from a variety of materials including brick, stone, stucco, aluminum, and foam. We can match your building's architecture for a cohesive look.`,
            `Illumination options include LED lighting, spotlights, and internally-lit elements for visibility at night.`
          ]
        },
        {
          title: "Multi-Tenant Options",
          paragraphs: [
            `For properties with multiple tenants, we offer monument signs with interchangeable panels. This allows for easy updates when tenants change.`,
            `We also design directory-style monument signs for shopping centers and office complexes.`
          ]
        }
      ]
    })
  },
  "sign-repair": {
    name: "Sign Repair & Maintenance",
    heroImage: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg",
    content: (loc) => ({
      intro: `Keep your signs looking their best with our professional repair and maintenance services in ${loc}. From burned-out lights to storm damage, we fix all types of signage quickly and efficiently.`,
      sections: [
        {
          title: "Professional Sign Repair",
          paragraphs: [
            `The best thing is that, with the ${loc} sign repair professionals at Royal Signs & Awnings, you are able to keep your signage in top condition. We provide fast and reliable repair services to ensure your signs continue to effectively promote your business!`,
            `Our sign-making business has been in the industry for many years now; we have earned significant experiences in repairing all types of commercial signs.`
          ],
          image: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg"
        },
        {
          title: "Common Repairs",
          paragraphs: [
            `We handle all types of sign repairs including LED retrofits, electrical repairs, face replacements, structural repairs, and storm damage restoration.`,
            `Our technicians are experienced with channel letters, cabinet signs, neon signs, pole signs, monument signs, and more.`
          ]
        },
        {
          title: "Preventive Maintenance",
          paragraphs: [
            `Regular maintenance can extend the life of your signage and prevent costly repairs. We offer maintenance plans to keep your signs in optimal condition.`,
            `Maintenance services include cleaning, inspection, bulb replacement, electrical testing, and minor repairs.`
          ]
        }
      ]
    })
  },
};

// Parse location and service from URL path
function parsePathname(pathname: string): { location: string | null; service: string | null; isGeneralLocation: boolean } {
  const path = pathname.replace(/^\//, ''); // Remove leading slash
  
  // Check if it's a general location page (e.g., /thompsons-tx)
  if (locations[path]) {
    return { location: path, service: null, isGeneralLocation: true };
  }
  
  // Try to match service-location patterns (e.g., /awning-signs-thompsons-tx)
  for (const loc of Object.keys(locations)) {
    if (path.endsWith(`-${loc}`)) {
      const serviceKey = path.replace(`-${loc}`, '');
      if (services[serviceKey]) {
        return { location: loc, service: serviceKey, isGeneralLocation: false };
      }
    }
  }
  
  return { location: null, service: null, isGeneralLocation: false };
}

// General Location Page Component (for pages like /thompsons-tx)
function GeneralLocationPage({ locationData }: { locationData: { name: string; fullName: string; slug: string } }) {
  const content = getLocationPageContent(locationData.name);
  
  return (
    <Layout>
      {/* Hero Section with Quote Form */}
      <section 
        className="relative py-12 md:py-20"
        style={{
          backgroundImage: `url('${content.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                {content.heroTitle}
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-4">
                {content.heroSubtitle}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-foreground font-medium">Rated 5.0 stars</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-accent underline text-sm">
                  (Based on 54 reviews)
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <article>
                {/* Content Sections */}
                {content.sections.map((section, index) => (
                  <div key={index} className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-4">
                      {section.title}
                    </h2>
                    {section.image && (
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="float-right ml-6 mb-4 w-full max-w-[300px] rounded-lg shadow-md"
                        loading="lazy"
                      />
                    )}
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground mb-4 text-justify">
                        {paragraph}
                      </p>
                    ))}
                    
                    {/* CTA after first section */}
                    {index === 0 && (
                      <div className="bg-accent/10 border-l-4 border-accent p-4 my-6 clear-both">
                        <p className="font-medium text-foreground">
                          Call Royal Signs & Awnings today at{" "}
                          <a href="tel:2816459935" className="text-accent hover:underline font-bold">
                            (281) 645-9935
                          </a>{" "}
                          for your Free Consultation with a Signs & Graphics expert!
                        </p>
                      </div>
                    )}
                    
                    {/* Sign type grid if available */}
                    {section.signTypes && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 clear-both">
                        {section.signTypes.map((signType, stIndex) => (
                          <Link
                            key={stIndex}
                            to={signType.link}
                            className="bg-muted hover:bg-muted/80 p-3 rounded-lg text-center text-sm font-medium text-foreground hover:text-accent transition-colors"
                          >
                            {signType.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    <div className="clear-both"></div>
                  </div>
                ))}

                {/* CTA Box */}
                <div className="bg-primary text-primary-foreground p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Free Expert Sign Consultation in {locationData.name}
                  </h3>
                  <p className="mb-4">
                    Contact Royal Signs & Awnings today at{" "}
                    <a href="tel:2816459935" className="text-accent hover:underline font-bold">
                      (281) 645-9935
                    </a>{" "}
                    for your Free Consultation with a Signs & Graphics expert!
                  </p>
                  <a
                    href="tel:2816459935"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call (281) 645-9935
                  </a>
                </div>

                {/* Other Locations */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Sign Company in Other Locations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(locations)
                      .filter(([key]) => key !== locationData.slug)
                      .map(([key, loc]) => (
                        <Link
                          key={key}
                          to={`/${key}`}
                          className="text-accent hover:underline text-sm bg-muted px-3 py-1 rounded"
                        >
                          {loc.name} Sign Company
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Service-Location Page Component (for pages like /awning-signs-thompsons-tx)
function ServiceLocationPage({ 
  locationData, 
  serviceData, 
  service 
}: { 
  locationData: { name: string; fullName: string; slug: string };
  serviceData: typeof services[string];
  service: string;
}) {
  const pageTitle = `${locationData.name} ${serviceData.name}`;
  const content = serviceData.content(locationData.name);
  
  return (
    <Layout>
      {/* Hero Section with Quote Form */}
      <section 
        className="relative py-12 md:py-20"
        style={{
          backgroundImage: `url('${serviceData.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                {pageTitle}
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-4">
                Design | Production | Installation
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-foreground font-medium">Rated 5.0 stars</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-accent underline text-sm">
                  (Based on 54 reviews)
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <article>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {pageTitle}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {content.intro}
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-4 mb-8">
                  <p className="font-medium text-foreground">
                    Call Royal Signs & Awnings today at{" "}
                    <a href="tel:2816459935" className="text-accent hover:underline font-bold">
                      (281) 645-9935
                    </a>{" "}
                    for your Free Consultation!
                  </p>
                </div>

                {/* Content Sections */}
                {content.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-4">
                      {section.title}
                    </h2>
                    {section.image && (
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="float-right ml-6 mb-4 w-full max-w-[300px] rounded-lg shadow-md"
                        loading="lazy"
                      />
                    )}
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground mb-4 text-justify">
                        {paragraph}
                      </p>
                    ))}
                    <div className="clear-both"></div>
                  </div>
                ))}

                {/* CTA Box */}
                <div className="bg-primary text-primary-foreground p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Free Expert {serviceData.name} Consultation in {locationData.name}
                  </h3>
                  <p className="mb-4">
                    Ready to get started with your {serviceData.name.toLowerCase()} project in {locationData.name}? Contact Royal Signs & Awnings today for a free consultation and quote.
                  </p>
                  <a
                    href="tel:2816459935"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call (281) 645-9935
                  </a>
                </div>

                {/* Other Locations */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {serviceData.name} in Other Locations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(locations)
                      .filter(([key]) => key !== locationData.slug)
                      .map(([key, loc]) => (
                        <Link
                          key={key}
                          to={`/${service}-${key}`}
                          className="text-accent hover:underline text-sm bg-muted px-3 py-1 rounded"
                        >
                          {loc.name} {serviceData.name}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Other Services in This Location */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Other Services in {locationData.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(services)
                      .filter(([key]) => key !== service)
                      .map(([key, svc]) => (
                        <Link
                          key={key}
                          to={`/${key}-${locationData.slug}`}
                          className="text-accent hover:underline text-sm bg-muted px-3 py-1 rounded"
                        >
                          {locationData.name} {svc.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function LocationPage() {
  const routerLocation = useLocation();
  const { location, service, isGeneralLocation } = parsePathname(routerLocation.pathname);
  
  const locationData = location ? locations[location] : null;
  const serviceData = service ? services[service] : null;
  
  // 404 for invalid paths
  if (!locationData || (!isGeneralLocation && !serviceData)) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="text-accent hover:underline">Return to Home</Link>
        </div>
      </Layout>
    );
  }

  // Render general location page (e.g., /thompsons-tx)
  if (isGeneralLocation) {
    return <GeneralLocationPage locationData={locationData} />;
  }

  // Render service-location page (e.g., /awning-signs-thompsons-tx)
  return (
    <ServiceLocationPage 
      locationData={locationData} 
      serviceData={serviceData!}
      service={service!}
    />
  );
}
