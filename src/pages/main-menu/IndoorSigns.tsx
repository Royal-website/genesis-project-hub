import { Layout } from "@/components/layout/Layout";
import { PageSidebarWithMobileForm } from "@/components/layout/PageSidebarWithMobileForm";
import { Link } from "react-router-dom";
import indoorSignsHero from "@/assets/images/indoor-signs-hero.jpg";

const indoorSignTypes = [
  { name: "Channel Letters", path: "/channel-letters", image: "https://cdn.markmywordsmedia.com/sign-images/services/channel-letters.jpg" },
  { name: "Floor Signs", path: "/floor-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/floor-signs.jpg" },
  { name: "Lobby Signs", path: "/lobby-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/lobby-signs.jpg" },
  { name: "Office Signs", path: "/office-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/office-signs.jpg" },
  { name: "POP Signs", path: "/pop-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/point-of-purchase-signs.jpg" },
  { name: "Room ID Signs", path: "/room-id-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/room-id-signs.jpg" },
  { name: "Wall Signs", path: "/wall-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/wall-signs.jpg" },
  { name: "Wayfinding Signs", path: "/wayfinding-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/wayfinding-signs.jpg" },
];

const IndoorSigns = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] md:min-h-[450px] flex items-center"
        style={{
          backgroundImage: `url('${indoorSignsHero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="lg:w-2/3 text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
              Indoor Signs
            </h1>
            <p className="text-2xl md:text-3xl font-light mt-4 text-shadow">
              Design | Production | Installation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2 lg:pr-8">
              <h2 className="text-3xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                Houston Indoor Signs
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Durable, brand-building, and supportive indoor sign and graphic elements supply a whole lot of value to your business or organization. When you need to assist with promoting instinctive wayfinding or keeping staff safe in work areas, your custom indoor signs keep operations running smoothly.
                </p>

                <div className="float-right ml-4 mb-4 w-48 lg:w-56">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2015/03/Photo-Mar-16-4-37-20-PM-300x225.jpg" 
                    alt="Attractive Custom Lobby Signs"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <p>
                  Trusting a qualified specialist makes it easy to get the right indoor signage. Several factors need to be considered, for example, your company sign objectives, how your customers utilize and navigate your space, relevant local signage legal guidelines, and even your sign placement can all have an impact on the type, style, and the number of interior signs you need to deliver a comfortable, safe, and inviting place to shop and work.
                </p>

                <p>
                  Royal Signs & Awnings not only delivers signs and graphics, we understand how appropriate signage can support customer flow, remind staff of safe work routines, and make sure your brand is remembered. By constructing engaging and attractive sign and graphic elements that are created specifically for your location, brand, and specifications, our Houston indoor sign products take your business to new heights.
                </p>

                <p>
                  If you are expanding or moving your operations or you aren't certain which signs will help you accomplish your business goals, we also provide local on-site signage evaluations. This permits us to make the right signage suggestions so customers and team members can navigate your physical facilities and effortlessly find the locations that they are seeking with hardly any instruction.
                </p>

                <p className="font-bold">
                  Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with an Indoor Signs Expert!
                </p>
              </div>

              {/* Interior Signage For Office Buildings Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Interior Signage For Office Buildings
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/03/elements_massage_int-300x225.jpg" 
                    alt="Attractive Indoor Lobby Sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Office complexes may have many departments or many unique organizations and businesses. Regardless of the complexity, number of units, and size of your office, office facilities are often complicated to maneuver through, making it the responsibility of your staff to support almost every customer or guest.
                  </p>
                  <p>
                    With impactful and effective indoor sign and graphic elements, customers and guests can quite easily navigate your office space without the help of your front desk staff. From building directories to ADA and <Link to="/room-id-signs" className="text-accent hover:underline">room identification signs and graphics</Link>, indoor signage elements are vital for assisting with intuitive wayfinding within office buildings or complexes.
                  </p>
                  <p>
                    Your brand impacts your office signs and graphics, as well. Impactful and effective wall murals, dimensional graphics, promotional signs, and floor signs can be employed to share brand insights, share corporate culture, and the services you have to offer. Many business types invest in several different sign and graphic elements to promote their unique brand and message throughout their location.
                  </p>
                </div>
              </div>

              {/* Retail & Restaurant Indoor Signs Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Retail & Restaurant Indoor Signs
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2015/03/promotional-sign-3-300x178.jpg" 
                    alt="Promotional Sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Indoor signs and graphics for retail companies and restaurants are usually more targeted at merchandise sales as opposed to brand reinforcement. That doesn't mean that your branding can't serve a substantial part in your wayfinding and promotional signs and graphics!
                  </p>
                  <p>
                    Royal Signs & Awnings manufactures effective floor vinyl, department signage, <Link to="/pop-signs" className="text-accent hover:underline">point of purchase signage</Link>, hanging banners, product displays, and more that highlights your products and implements your fonts, logos, and colors for brand reinforcement throughout. Our experts make it very simple for customers to get around your space, and find the products, departments, and areas that they need to do business with you. We focus on intuitive signs and graphics. Our experiences means we have an understanding of guest routines and their signage expectations, allowing our experts to ensure that your signage exceeds those expectations.
                  </p>
                </div>
              </div>

              {/* Signs for Warehouses & Manufacturing Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Signs for Warehouses & Manufacturing
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/10/floor-vinyl-300x219.jpg" 
                    alt="Custom Lobby Floor Vinyl Graphics"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Industrial facilities, warehouses, manufacturers, distribution centers, and factories and other types of businesses not customarily accessible to consumers also want effective and impactful signage. If you want to increase personnel morale, tell them about potential risks and safety procedures, or show the story of your brand through vinyl wall graphics, murals, and displays, Royal Signs & Awnings produces the ideal indoor signage combination for your physical facilities and needs.
                  </p>
                  <p>
                    Wayfinding signage, <Link to="/safety-signs" className="text-accent hover:underline">safety signs</Link>, and indoor banners can all help support your business goals and objectives, shrinking the accident risk and making an environment that your workforce looks forward to working at. Royal Signs & Awnings is your trusted partner for high-quality and attractive commercial and industrial signage, giving you support, assistance, and guidance.
                  </p>
                </div>
              </div>

              {/* Cohesive Interior Signs Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Cohesive Interior Signs for Business
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Professionally building your brand necessitates coherence throughout your messaging and signage elements. Using solid brand guidelines, and making use of these elements in all of your promotions and advertising, you show a complete, thorough image of what your company is all about. We produce brand-cohesive indoor banners, department signage, and lobby signs to nicely match your brand and existing signs and graphics.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2 mt-4">
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/IMG_4105-e1515612894545-150x150.jpg" alt="Custom door vinyl film" className="rounded-lg w-full" loading="lazy" />
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/IMG_4122-e1515612906851-150x150.jpg" alt="Custom vinyl wall mural" className="rounded-lg w-full" loading="lazy" />
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/IMG_4117-150x150.jpg" alt="custom vinyl film" className="rounded-lg w-full" loading="lazy" />
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/IMG_4107-150x150.jpg" alt="custom hanging indoor banner" className="rounded-lg w-full" loading="lazy" />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground mt-4">
                  <p>
                    If you will need layout and design services, our expert signage designers are ready to visualize the best possible indoor sign and graphic package for your facility and goals.
                  </p>
                </div>
              </div>

              {/* Every Indoor Sign Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Every Indoor Sign Your Business Needs!
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/02/Trade-Show-set-up-300x225.jpg" 
                    alt="Custom Tradeshow Display"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    You can always rely on Royal Signs & Awnings to deliver impactful, enticing interior signs, and graphics.
                  </p>
                  <p>
                    From floor signs to ADA signs, our professionals know the specific preferences of different niches and different businesses. We consider your corporate goals, physical facilities, and brand personality and guidelines so we can craft the perfect signs.
                  </p>
                  <p>
                    If you need just one particular wall sign or a cohesive combination of brand building and promotional signage, Royal Signs & Awnings will create it for your business.
                  </p>
                  <p>
                    We do whatever it takes to make sure that your signs are durable, engaging, and manufactured using earth-conscious methods and resources wherever feasible.
                  </p>
                </div>
              </div>

              {/* Sign Types Grid */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-6">Our indoor sign services include:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {indoorSignTypes.map((sign) => (
                    <Link
                      key={sign.path}
                      to={sign.path}
                      className="group text-center"
                    >
                      <img
                        src={sign.image}
                        alt={sign.name}
                        className="w-28 h-28 mx-auto rounded-lg object-cover border-2 border-transparent group-hover:border-accent transition-colors"
                        loading="lazy"
                      />
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {sign.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Do you need cohesive exterior building signage elements also? We will create those elements as well for a consistent impression anywhere your brand messaging is seen!
                </p>
              </div>

              {/* Full-Service Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Full-Service Interior Sign Manufacturers
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/vinyl-wall-mural-indoor-install-225x300.jpg" 
                    alt="vinyl mural installation"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    As your dedicated local sign partner, we handle every single aspect of the sign acquisition and fulfillment process.
                  </p>
                  <p>
                    From the first consultation to layout and design, manufacturing, and professional installation, our team of specialists provides assistance throughout the sign creation process. We deliver the best signs, graphics, and wraps, in the right size and shape, with the proper message, in the correct spot, every time.
                  </p>
                  <p>
                    As your professional Houston custom sign consultants, we provide on-site recommendations for your custom business sign and graphic requirements, providing appropriate suggestions regarding precisely what sign and graphic elements will be most effective and functional for you. As skillful sign developers, we emphasize practical signage that is instantly seen, comprehended, and taken into consideration.
                  </p>
                  <p>
                    Our signage manufacturing specialists see to it that all aspects of your signs and graphics are produced to your specifications and that all signage components work together as expected. We are rigid with our quality control for your complete approval and continued satisfaction. Our skillful sign installers are speedy and efficient, completing the job promptly and skillfully.
                  </p>
                  <p>
                    When you need, desire, or require custom interior signs and graphics that are attractive, supportive, cohesive, and affordable, your local indoor signage specialists at Royal Signs & Awnings will provide the signage that's right for your goals.
                  </p>
                </div>
              </div>

              {/* Free Quote CTA */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Free Expert Indoor Sign Consultation
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/royal-signs-logo-300x108.png" 
                    alt="Royal Signs logo"
                    className="w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Royal Signs & Awnings looks forward to marking a positive impression on you with our dedicated client and customer support, talented sign designers, and fantastic sign manufacturing. Our reliable, experienced Houston indoor signage staff is well prepared to conceptualize and deliver the branded, high-quality indoor signs necessary to effectively improve customer service, brand identification, product and service promotion, or navigation.
                  </p>
                  <p className="font-bold">
                    Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with an Indoor Signs Specialist!
                  </p>
                </div>
              </div>
            </div>

            <PageSidebarWithMobileForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndoorSigns;
