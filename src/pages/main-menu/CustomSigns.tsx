import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Sidebar } from "@/components/layout/Sidebar";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import customSignsHero from "@/assets/images/custom-signs-hero.jpg";

const customSignTypes = [
  { name: "Acrylic Signs", path: "/acrylic-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/acrylic-signs.jpg" },
  { name: "Digital Signs", path: "/digital-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/digital-signs.jpg" },
  { name: "Electronic Signs", path: "/electronic-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/electronic-signs.jpg" },
  { name: "LED Signs", path: "/led-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/led-signs.jpg" },
  { name: "Lighted Signs", path: "/lighted-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/lighted-signs.jpg" },
  { name: "Metal Signs", path: "/metal-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/metal-signs.jpg" },
  { name: "Sandblasted Signs", path: "/sandblasted-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/sandblasted-signs.jpg" },
  { name: "Trade Show Displays", path: "/trade-show-displays", image: "https://cdn.markmywordsmedia.com/sign-images/services/trade-show-displays.jpg" },
];

const CustomSigns = () => {
  return (
    <Layout>
      {/* Hero Section with Quote Form */}
      <section 
        className="relative min-h-[450px] flex items-center"
        style={{
          backgroundImage: `url('${customSignsHero}')`,
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
                Custom Signs & Graphics
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
                Houston Custom Signs & Graphics
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Absolutely nothing features your special brand personality, promotes your latest and hottest products and services, and effectively supports your guests, shoppers, and team members like quality, eye-catching, and unique custom signs by Royal Signs & Awnings!
                </p>

                <div className="float-right ml-6 mb-4 w-72">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/custom-building-storefront-outdoor-sign-300x300.jpg" 
                    alt="custom outdoor building signs"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <p>
                  Our local Houston custom signage team delivers specialty sign and graphic components in accordance with your branding parameters or based on your specific signage thoughts. We can produce promotional signs, window graphics, pole signs, and product displays for your commercial facility, club, or government building, and we especially find enjoyment in delivering impactful custom signs and graphics that have a positive impact on a business's profitability.
                </p>

                <p>
                  Professional sign construction is one of the highest return business investments. Custom signage makes it possible for you to appropriately and clearly show your business personality, effectively grabbing the awareness of promising new purchasers and pulling them do business with your organization.
                </p>

                <p className="font-bold">
                  Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Custom Sign Expert!
                </p>
              </div>

              {/* Stand Out Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Stand Out With Unique Signage
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Set your organization apart from the other businesses around you, your competitors, and the many diversions in your clients' lives with engaging, impactful custom signs and graphics! Royal Signs & Awnings is your Houston, TX provider of long-lasting personalized signs that support your business growth by delivering an exciting and dynamic environment.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2 mt-4">
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/11/IMG_4243-e1510592895752-150x150.jpg" alt="Custom dimensional letter lobby sign" className="rounded-lg w-full" loading="lazy" />
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/11/IMG_4243-e1510592895752-150x150.jpg" alt="Custom lobby signage" className="rounded-lg w-full" loading="lazy" />
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/11/IMG_4243-e1510592895752-150x150.jpg" alt="attractive acrylic lobby sign" className="rounded-lg w-full" loading="lazy" />
                  <img src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/11/IMG_4243-e1510592895752-150x150.jpg" alt="custom lobby signage" className="rounded-lg w-full" loading="lazy" />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground mt-4">
                  <p>
                    Royal Signs & Awnings relies on your one-of-a-kind branding and vision to deliver functional signs and graphics for brand promotion. Our talented sign designers are adept at interpreting your unique plans and ideas and manufacturing a finished product. Regardless of your specific sign and graphic needs, we provide the right signs for you, including <Link to="/storefront-signs" className="text-accent hover:underline">custom business storefront signs</Link> to <Link to="/vehicle-wraps" className="text-accent hover:underline">commercial vehicle graphics</Link>, office and <Link to="/lobby-signs" className="text-accent hover:underline">lobby signs</Link>, and <Link to="/promotional-signs" className="text-accent hover:underline">customized promotional signs and graphics</Link> for specific to your requested placement and utilization. If you have custom signage plans or ideas, select the Houston custom sign experts at Royal Signs & Awnings to turn them into reality!
                  </p>
                </div>
              </div>

              {/* Designed For Your Brand Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Designed For Your Brand & Business
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/attractive-custom-lobby-signage-300x168.jpg" 
                    alt="attractive custom lobby signage"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Custom signs and graphics assists differentiating your business and brand from your competition while positioning your organization as the specialists in your market sector. Personalized and branded signs and graphics also help you manage potential buyer's perception of your brand and business. By incorporating branded sign design that effectively enhances the rest of your business marketing and identification campaigns, you boost both your local brand presence and also the level of expertise that your customers can expect to receive from you. For your own unique custom signs and graphics or requested customization level, Royal Signs & Awnings is your trusted local provider of high-value, one-of-a-kind sign and graphic elements.
                  </p>
                  <p>
                    If you're a recently opened or newly acquired business or a well-known local favorite, Royal Signs & Awnings provides personalized solutions for your commercial branded signage specifications. We offer virtually endless options for how branded signage can be used to support your business development goals. Our specialists recommend sign and graphic elements, materials, and positioning that will provide a positive and lasting impression on existing and potential customers.
                  </p>
                </div>
              </div>

              {/* Sign Types Grid */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-6">Our custom specialty signs include:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {customSignTypes.map((sign) => (
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
                  All of our interior sign and outdoor signs are custom crafted, specific to the desires, budget, timeframe, and technical specs of our client and their business. We have the working experience, insight, and expertise to create the most suitable signage for your business. Professional custom signage is a perfect method for quickly displaying what you have to offer your local community. We help you get the irresistible, attractive signage you need to get maximum attention.
                </p>
              </div>

              {/* Custom Sign Process Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Our Custom Sign Process
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/custom-banner-production-300x169.jpg" 
                    alt="custom banner production"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Custom specialty signage, wraps, graphics, and lettering show your local community who you are and inform them of the one-of-a-kind goods and services you have to offer. Our custom sign design specialists are ready to help you get the most out of your signs. Our signage consultants will talk to you about your business goals and objectives and plans, make practical ideas, and start creating a mental image of what your final sign will look like, as well as individual signage elements. We will then provide a digital signage sample to consider.
                  </p>
                  <p>
                    Once your custom sign design is the way you would like, our talented and experienced sign craftspeople will create and prep all signage elements required for installation. Custom signage installation should always be done by a professional, mainly for technical, aesthetic, and safety factors.
                  </p>
                  <p>
                    Your Houston custom signs and graphics supplier, our experts are dedicated to delivering durable, goal-focused signs and graphics that will best suit your business.
                  </p>
                </div>
              </div>

              {/* Free Quote CTA */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Free Custom Signs Consultation
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
                    At Royal Signs & Awnings, we provide the dedicated service and technical skills needed to provide commercial specialty signs and graphics that showcase how special your business and brand is. No matter if you already have a complete design or if you need design and planning assistance, our Houston custom signage team is here for you. Royal Signs & Awnings is eager to be your local supplier of high-quality, goal-focused custom signs.
                  </p>
                  <p className="font-bold">
                    Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Custom Sign Specialist!
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

export default CustomSigns;
