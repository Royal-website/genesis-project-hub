import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Sidebar } from "@/components/layout/Sidebar";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import awningSignsHero from "@/assets/images/awning-signs-hero.jpg";

const AwningSigns = () => {
  return (
    <Layout>
      {/* Hero Section with Quote Form */}
      <section 
        className="relative min-h-[450px] flex items-center"
        style={{
          backgroundImage: `url('${awningSignsHero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Headline */}
            <div className="text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Awning Signs
              </h1>
              <p className="text-2xl font-light mt-2">
                Design | Production | Installation
              </p>
            </div>
            
            {/* Right: Quote Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <QuoteForm variant="hero" />
              </div>
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
              <h2 className="text-3xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                Houston Awning Signs
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Awning signs and canopy signs are common in businesses. These commercial signs are designed to adorn any storefront, but they offer other benefits as well. Effective signage helps promote your business or beautify your shop.
                </p>

                <div className="float-right ml-6 mb-4 w-72">
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
                
                <div className="float-right ml-6 mb-4 w-64">
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
                
                <div className="float-right ml-6 mb-4 w-64">
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
                
                <div className="float-right ml-6 mb-4 w-64">
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
                
                <div className="float-right ml-6 mb-4 w-64">
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
                
                <div className="float-right ml-6 mb-4 w-64">
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

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* We Accept */}
              <div className="bg-primary rounded-lg p-4">
                <h3 className="text-lg font-bold text-primary-foreground text-center mb-3">
                  We Accept:
                </h3>
                <div className="flex justify-center gap-2 flex-wrap">
                  <div className="bg-card px-2 py-1 rounded text-xs">Visa</div>
                  <div className="bg-card px-2 py-1 rounded text-xs">Mastercard</div>
                  <div className="bg-card px-2 py-1 rounded text-xs">Discover</div>
                  <div className="bg-card px-2 py-1 rounded text-xs">Amex</div>
                </div>
              </div>

              {/* Client Review */}
              <div className="bg-primary rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary-foreground text-center mb-4">
                  Client Review
                </h3>
                <div className="bg-card rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">They were great!</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    We used them for our sign in front of our building and they were great!... <span className="text-accent cursor-pointer">read more</span>
                  </p>
                  <p className="text-sm font-semibold text-foreground text-right">- Blake Nichols</p>
                </div>
              </div>

              {/* Sidebar with Sign Types & Industries */}
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AwningSigns;
