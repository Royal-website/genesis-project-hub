import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Sidebar } from "@/components/layout/Sidebar";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const outdoorSignTypes = [
  { name: "Awning Signs", path: "/awning-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/awning-signs.jpg" },
  { name: "Blade Signs", path: "/blade-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/blade-signs.jpg" },
  { name: "Cabinet Signs", path: "/cabinet-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/cabinet-signs.jpg" },
  { name: "Channel Letters", path: "/channel-letters", image: "https://cdn.markmywordsmedia.com/sign-images/services/channel-letters.jpg" },
  { name: "Dimensional Letters", path: "/dimensional-letters", image: "https://cdn.markmywordsmedia.com/sign-images/services/dimensional-letters.jpg" },
  { name: "Hanging Signs", path: "/hanging-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/hanging-signs.jpg" },
  { name: "Lighted Signs", path: "/lighted-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/hanging-signs.jpg" },
  { name: "Monument Signs", path: "/monument-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/monument-signs.png" },
  { name: "Pole Signs", path: "/pole-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/pole-signs.jpg" },
  { name: "Post & Panel Signs", path: "/post-panel-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/post-panel-signs.jpg" },
  { name: "Pylon Signs", path: "/pylon-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/pylon-signs.jpg" },
  { name: "Storefront Signs", path: "/storefront-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg" },
  { name: "Sign Repairs", path: "/sign-repairs", image: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg" },
  { name: "High Rise Signs", path: "/high-rise-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/storefront-signs.jpg" },
];

const OutdoorSigns = () => {
  return (
    <Layout>
      {/* Hero Section with Quote Form */}
      <section 
        className="relative min-h-[450px] flex items-center"
        style={{
          backgroundImage: "url('https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/exterior-outdoor-sign-service.jpg')",
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
                Outdoor Signs
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
                Houston Outdoor Signs
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Royal Signs & Awnings is a trusted designer and manufacturer of outdoor signs in Houston, Texas. Your local sign company can provide you with the best promotional outdoor signs that can build your brand and introduce it to potential consumers. Outdoor signs work by catching the attention of masses as it is visible, effective, and aesthetically pleasing.
                </p>

                <div className="float-right ml-6 mb-4 w-72">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2020/05/awnings-8-300x225.jpg" 
                    alt="lighted awning sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <p>
                  Our company houses experienced workers, graphic design specialists, as well as installation experts. They take charge of the whole process; every aspect of the job is thoroughly and professionally handled. Shall any complications arise, the team will have everything figured out. We have a custom signage shop where we perform all the work. We make use of raw materials and eco-friendly methods. We are dedicated to giving you the best outdoor signs that will help in growing your business.
                </p>

                <p>
                  Your business signs give an impression of what the brand is all about towards the customers. Through the signs, you let them know what value you can offer to them through your products and services. You can include a tagline that explains why you are worthy of their choice. We are here to help you deliver a big impact on your target audience. We offer signage of all sizes and price points that can be installed both indoors and outdoors. We are committed to making your brand recognized through smart signage solutions. Our Houston outdoor signs company is dedicated to your satisfaction.
                </p>

                <p className="font-bold">
                  Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!
                </p>
              </div>

              {/* Storefront & Building Signs Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Storefront & Building Signs
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/awning-outdoor-canopy-storefront-building-lightbox-sign-298x300.jpg" 
                    alt="custom outdoor building signs"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Storefronts and buildings often have installed signs in order to provide ease for customers who are trying to find the place and lead potential clients in. In choosing the right and appropriate signs, what do you need to consider?
                  </p>
                  <p>
                    Exterior sign options come in different sizes, colors, designs, styles, and many other factors. But you do not have to worry about picking the right choice. We got your back! As we begin with the consultation that we offer free of charge just for you, you can discuss your peg with us—everything that you need, everything that you want. We will then discuss with you the pros and cons of your desired result. After that, we will give the best recommendation that will work best for your business, and we will let you decide.
                  </p>
                  <p>
                    Royal Signs & Awnings ensures that we know your business goals, brand identity, products, services, and all the essential details concerning your business marketing. The commercial signage that we manufacture is durable, resilient, and attractive. These allow you to make a difference in the area of business that you are in. Your customers will have a unique and pleasing perception of your business in general.
                  </p>
                </div>
              </div>

              {/* Channel Letters Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Channel Letters & Dimensional Letters
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/channel-letter-storefront-outdoor-building-e1590775795316-300x235.jpg" 
                    alt="Custom Channel Letter Building Sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    The highlight of channel and <Link to="/dimensional-letters" className="text-accent hover:underline">dimensional letters</Link> is their interesting and inviting finish. What is more, they are customizable. You can make requests for your preferred look and features. It will not appear as though it is a separate facet of the store. We make sure that it perfectly blends with your storefront. You can add details and attributes for the channel letters or dimensional letters such as your business logo, contact number, tagline or letters, symbols, etc.
                  </p>
                  <p>
                    Cannot figure out what you want? No problem! We will send the best options that you can choose from. We will recommend only those that are fit for your business, so you will definitely save time, effort, and money.
                  </p>
                </div>
              </div>

              {/* Lighted Signs Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Lighted Signs
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/channel-letters-illuminated-building-outdoor-sign-300x225.jpg" 
                    alt="custom lighted storefront"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    If your business operates not only during the day but also at night, then you need lighted signs. By using lighted signs, you stay visible to consumers until the morning, through the night! Light is also a plus factor for your storefront because attractive lights always pull everybody's attention. This is a great choice for you!
                  </p>
                  <p>
                    Stop the search, Royal Signs & Awnings is the reputable local sign provider that you have been looking for. We provide a wide variety of lighted sign options, including backlit dimensional letters, digital displays, illuminated channel letters, cabinet signs, and message boards. The lighting solutions that we offer for your storefront sign are durable, stable, and of course, affordable. <Link to="/led-signs" className="text-accent hover:underline">LED signs</Link> are far more environmentally friendly than traditional lighting methods as they consume less power and emit less carbon footprint.
                  </p>
                </div>
              </div>

              {/* Custom Sign Panels Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Custom Sign Panels
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/storefront-vinyl-window-graphics-display-outdoor-e1533154402601-300x232.jpg" 
                    alt="custom storefront sign panel"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Sign panels are flat boards that can be made up of different kinds of material. For your marketing application, sign panels may contain your business information, name, logo, and other important details that you want to announce to the public. These solid boards are affixed to your storefront, made visible to your clients, patrons, and prospective consumers.
                  </p>
                  <p>
                    Royal Signs & Awnings offers custom-made sign panels that can be designed with full-color graphics and even creative images. They are flexible for varying purposes and can be produced in a low-cost budget. As a matter of fact, the pleasing attributes of a sign panel makes it a popular pick for a lot of businesses in the industry today.
                  </p>
                </div>
              </div>

              {/* Canopy & Awning Signs Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Canopy & Awning Signs
                </h3>
                
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
                    Installing new canopy or making use of your pre-existing awning will give you desirable results that you have never imagined. Canopy is a sun-shading device or overhang that is mostly designed to give protection to people from the sun. An awning can be in the form of a roof or window. In a way, awning also controls the amount of sunlight that streams in, but it also prevents rainwater from splashing in.
                  </p>
                  <p>
                    These are the remarkable attributes of canopy and awning architecture-wise, but did you know that you can also use it for the benefit of your business? Definitely yes! Getting canopy or awning signs for your business allows you to post your brand like a billboard that can be visible even to taller buildings.
                  </p>
                </div>
              </div>

              {/* Monument Signs Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Monument Signs
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2017/11/Monument-Foam-300x183.jpg" 
                    alt="custom foam monument sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    <Link to="/monument-signs" className="text-accent hover:underline">Monument signs</Link> are totally monumental! These are huge, jaw-dropping promotional elements that can be placed in the entrance area of your building. Monument signs are enormous, durable, and permanent structures. These can be made through sculpting, etching, and other creative methods. Also, they can be made from different materials such as glass, marble, wood, metal, and others.
                  </p>
                  <p>
                    Moreover, monument signs may also have lighting or digital message boards. Royal Signs & Awnings designs and manufactures monument signs that are appropriate for your brand personality, location, and needs.
                  </p>
                </div>
              </div>

              {/* Pole Signs Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Pole Signs & Pylon Signs
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/03/custom-lighted-led-pole-pylon-sign-300x225.jpg" 
                    alt="custom digital pole sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    If your main concern is to flaunt your business in large and tall structures, you are looking for pole and pylon signs! This outdoor signage is inevitably visible to everybody, even those that are from a significant distance. Pole signs, pylon signs, as well as tenant signs, are people's choices with regard to fortifying your brand and growing your customer reach.
                  </p>
                  <p>
                    Literally, these commercial signs are towering and huge, designed to make an impression on a wide scope of marketing audience that may be interested in your business.
                  </p>
                </div>
              </div>

              {/* Complete Exterior Signage Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Complete Exterior Signage Provider
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-cabinet-outdoor-building-300x225.jpg" 
                    alt="storefront channel letter signs and cabinet logo sign"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    The promotional signage that we create is meant to escalate your customer traffic and make your business known to the public. Royal Signs & Awnings fabricates outdoor signs that are appropriately tailored to your needs and desires. These are highly visible and impressive. We provide free consultation for the design and develop the most accurate concept for your commercial signs and graphic solutions.
                  </p>
                  <p>
                    Our vinyl signs, blade signs, and graphics are effective advertising tools. Plus, the channel letters, tradeshow displays, decals, and monument signs that we manufacture are perfect for increasing the traffic flow of your consumers. Our main goal is to make your brand memorable and spectacular!
                  </p>
                </div>
              </div>

              {/* Sign Types Grid */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-6">Our other exterior signs include:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {outdoorSignTypes.map((sign) => (
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

              {/* Full-Service Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Full-Service Exterior Sign Company
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/channel-letter-install-fab-300x225.jpg" 
                    alt="channel letter install"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    As mentioned, Royal Signs & Awnings can provide you with a plethora of options so that you can pick the one that really suits your needs. In addition to that, you are always involved in every aspect of the signage creation. You can observe, monitor, and assess the work that is being done so that you can easily request for any changes that have to be made or revisions that you want to bring up.
                  </p>
                  <p>
                    Meanwhile, if you already have a concept, idea, or a pre-made design that you want to incorporate with the final output, you can do so! We will carefully review it and discuss with you how we can work on using it, providing additional suggestions that may help you with your decision-making. We offer full and comprehensive design services. We will never hand over a half-done work.
                  </p>
                </div>
              </div>

              {/* Free Quote CTA */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Free Outdoor Sign Consultation
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
                    Royal Signs & Awnings designs and manufactures fascinating and riveting Houston outdoor signage that your business can benefit from. These promote your business, brand personality, and assist in attaining your marketing goals. We aim to give you the best, attractive, highly visible, and premier commercial signage that will draw more customers in, offering satisfaction to them.
                  </p>
                  <p>
                    Whenever you are ready, feel free to contact us and discuss your signage needs. We are more than excited to provide you with the assistance that you necessitate, helping you select the best choice for your business.
                  </p>
                  <p className="font-bold">
                    Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation with an Exterior Sign Specialist!
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

export default OutdoorSigns;
