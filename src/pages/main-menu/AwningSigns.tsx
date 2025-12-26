import { Layout } from "@/components/layout/Layout";
import { PageSidebarWithMobileForm } from "@/components/layout/PageSidebarWithMobileForm";
import { HeroWithForm } from "@/components/sections/HeroWithForm";
import { Link } from "react-router-dom";
import awningSignsHero from "@/assets/images/awning-signs-hero.jpg";

const AwningSigns = () => {
  return (
    <Layout>
      {/* Hero Section with Form */}
      <HeroWithForm 
        title="Awning Signs"
        backgroundImage={awningSignsHero}
      />

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2 lg:pr-8">
              <h2 className="text-3xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                Houston Awning Signs
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Awning signs and canopy signs are common in businesses. These commercial signs are designed to adorn any storefront, but they offer other benefits as well. Effective signage helps promote your business or beautify your shop.
                </p>

                <div className="float-right ml-4 mb-4 w-48 lg:w-56">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-7-300x225.jpg" 
                    alt="custom awnings and canopy sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <p>
                  The best thing is that, with the Houston awning signage professionals at Royal Signs & Awnings, you are able to save the money allotted for advertising or renovation. We create striking and captivating awning and canopy signs that can catch the attention of new consumers, increase the traffic flow of customers, and enhance the professionalism of your shop!
                </p>

                <p>
                  Our sign-making business has been in the industry for many years now; we have earned significant experiences in the field and honed various skills. We recommend awning signs because we believe that they are a significant investment for any type of business. Royal Signs & Awnings provides cost-efficient awning and canopy signs. With the client increment, you will easily re-earn the money you invested in your signage from all the incoming profits.
                </p>

                <p className="font-bold">
                  Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation!
                </p>
              </div>

              {/* Increase Brand Visibility Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Increase Brand Visibility
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-8-300x225.jpg" 
                    alt="lighted awning sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Being known by consumers might be one of the biggest challenges in managing a business. One strategy that's proven to work is to increase your brand visibility. Prepare publicity materials and post them all as much as you can. Online, in newspapers, flyers, etc. But of course, all of this won't make sense without commercial signage at your storefront.
                  </p>
                  <p>
                    An awning sign or canopy sign can give a lot of exposure to your business all day, every day. Everyone who passes by your store gets an idea about your existence. Should their interest be piqued, they will surely enter your shop and make a purchase. You see, it's all about having attractive and compelling signage. Royal Signs & Awnings designs, crafts, and installs all types of commercial signages, even awning and canopy signs.
                  </p>
                  <p>
                    An awning is naturally intended to provide shade against the sun and shield from the rainwater. But creatively speaking, you an awning can be a billboard where you can post a work of art. It can be a powerful advertising tool! Royal Signs & Awnings ensures that the awning signs we create are perfect for your overall business needs and desires.
                  </p>
                </div>
              </div>

              {/* Storefront Signs Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  <Link to="/storefront-signs" className="hover:text-accent">Storefront Signs</Link> with a Sense of Shelter
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-6-300x225.jpg" 
                    alt="hotel awning to protect patrons"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    In business, remember that everything you place or install in your store may contribute to the customer experience. Good or bad, it can be. So, think clearly about what to include in the design and theme.
                  </p>
                  <p>
                    As mentioned above, an awning sign at the storefront can serve as shade and protection to customers. At the same time, it can be a waiting shed. If you place a bench beneath, clients will find a place for resting or waiting—giving them a feeling of comfort and home. In this way, you can also draw other people nearby.
                  </p>
                  <p>
                    Royal Signs & Awnings accommodates requests for customization. In fact, we really want to design it according to your necessity. If you want your awning sign to appear both appealing and utilitarian, we can do it for you. For example, it can also have backlights on it so as to provide illumination to the storefront area during the night.
                  </p>
                </div>
              </div>

              {/* Save Money on Utilities Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Save Money on Utilities
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-canopy-sign-300x225.jpg" 
                    alt="custom shade awning for storefront"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    The use of awning itself as a shed and awning as a commercial sign totally saves you money, especially on utilities. It builds the visibility of your business and keeps your store from heating up. The American Society of Heating and Air Conditioner Engineers say that those stores that have installed awnings may save up to 25% in their electricity bills. This is due to the less work your air conditioning has to do all throughout the day to keep the building cool.
                  </p>
                  <p>
                    Royal Signs & Awnings fabricates awning signs that are practical to use under different weather conditions. Our awning signs are made retractable. They do not only protect your building during the summer, but it can obtain solar gain and withstand the winter as well. We have a team of Houston awning signage manufacturing experts who can create durable and multi-purpose awning signs that can still be used in varying seasons.
                  </p>
                </div>
              </div>

              {/* Full-Service Sign Company Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Full-Service Sign Company
                </h2>
                
                <div className="float-right ml-4 mb-4 w-44 lg:w-52">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-5-300x225.jpg" 
                    alt="structural awning sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Royal Signs & Awnings is a full-service Houston, TX signage company that offers <Link to="/business-signs" className="text-accent hover:underline">all types of commercial signages</Link> as well as services. Our skilled and talented team of engineers, graphic designers, marketing specialists, installation experts, and maintenance crew put together all their hard work and brainchild to provide you with the top-of-the-line awning sign at an affordable cost.
                  </p>
                  <p>
                    Certainly, you will have a professional who is committed to guiding you through the different aspects of signage production and aftercare: conceptualization, design, manufacturing, installation, <Link to="/sign-repairs" className="text-accent hover:underline">maintenance, and even repair</Link>.
                  </p>
                </div>
              </div>

              {/* Free Quote CTA */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Free Awning Signs Consultation
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
                    Awning signs and canopy signs serve multiple purposes for the building and the entirety of the business that you have. They are capable of cutting bill costs, providing shed and shelter to customers, giving a sophisticated and professional look to the building, and so much more. Ultimately, they are a practical and great addition to your storefront! Our Houston awnings experts are here to assist you.
                  </p>
                  <p className="font-bold">
                    Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with an Awning Signs Expert!
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

export default AwningSigns;
