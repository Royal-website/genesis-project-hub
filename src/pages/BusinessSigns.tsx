import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Sidebar } from "@/components/layout/Sidebar";
import { Link } from "react-router-dom";
import { Star, DollarSign, CreditCard, BadgeDollarSign } from "lucide-react";

const businessSignTypes = [
  { name: "ADA Signs", path: "/ada-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/ada-signs.jpg" },
  { name: "Building Signs", path: "/building-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/building-signs.jpg" },
  { name: "Door Signs", path: "/door-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/door-signs.jpg" },
  { name: "Informational Signs", path: "/informational-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/informational-signs.jpg" },
  { name: "Menu Boards", path: "/menu-boards", image: "https://cdn.markmywordsmedia.com/sign-images/services/menu-boards.jpg" },
  { name: "Portable Signs", path: "/portable-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/portable-signs.jpg" },
  { name: "Promotional Signs", path: "/promotional-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/promotional-signs.jpg" },
  { name: "Safety Signs", path: "/safety-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/safety-signs.jpg" },
  { name: "Temporary Signs", path: "/temporary-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/temporary-signs.jpg" },
  { name: "Tenant Signs", path: "/tenant-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/tenant-signs.jpg" },
  { name: "Window Graphics", path: "/window-graphics", image: "https://cdn.markmywordsmedia.com/sign-images/services/window-graphics.jpg" },
  { name: "Window Signs", path: "/window-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/window-signs.jpg" },
];

const galleryImages = [
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/collection-coming-soon-banner-150x150.jpg", alt: "custom outdoor coming soon banner" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/monument-sign-outdoor-150x150.jpg", alt: "custom monument sign lighted" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/window-door-outdoor-sign-vinyl-cling-150x150.jpg", alt: "attractive vinyl door signs" },
  { src: "https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/channel-letters-banner-outdoor-storefront-building-illuminated-backlit-sign-150x150.jpg", alt: "cohesive storefront signage collection" },
];

const BusinessSigns = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-12 md:py-20"
        style={{ backgroundImage: "url('https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/business-signs.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Title */}
            <div className="text-center lg:text-left pt-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Business Signs
              </h2>
              <p className="text-xl md:text-2xl text-white/90">Design | Production | Installation</p>
            </div>
            
            {/* Right side - Quote Form Card */}
            <div className="bg-primary rounded-lg overflow-hidden shadow-xl">
              <div className="bg-primary p-4">
                <h3 className="text-xl font-bold text-primary-foreground text-center">GET A FREE QUOTE</h3>
              </div>
              <div className="bg-white p-6">
                <QuoteForm variant="hero" />
              </div>
              <div className="bg-primary p-4 text-center">
                <p className="text-sm font-bold text-primary-foreground mb-2">RATED 5.0 STARS</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground text-sm underline">
                  (Based on 54 Client Reviews)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Houston Business Signs
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Expand your brand and services and strengthen your bottom line with engaging, attractive business signs and graphics!
                </p>

                <div className="float-right ml-6 mb-4">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/outdoor-lighted-awning-channel-letters-gas-station-vinyl-300x225.jpg" 
                    alt="outdoor storefront commercial signage" 
                    className="rounded-lg shadow-md w-[300px] h-auto"
                  />
                </div>

                <p className="text-muted-foreground mb-4">
                  An expert Houston business sign company, Royal Signs & Awnings is a local partner for generating enticing sign and graphic elements that gets your business noticed. No matter what your specific marketing goals or company size, we will conceptualize, construct, and place your branded commercial signage.
                </p>

                <p className="text-muted-foreground mb-4">
                  For any sign from pop-up tradeshow banners and displays to impressive tenant, pylon, and pole signs, wayfinding signs, our specialists are ready to provide solitary signs or graphics for business marketing or an entire cohesive sign and graphics collection that features your brand and gets you seen.
                </p>

                <p className="text-muted-foreground mb-4">
                  Our specialized team of knowledgeable sign and graphic providers perceive your distinct and specific business preferences, and we are completely ready to expertly manufacture your signage project, supplying impactful signs and graphics that meet your schedule, expectations, and marketing budget.
                </p>

                <p className="text-lg font-semibold text-foreground mb-8">
                  Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Business Signs Expert!
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 clear-both">Cohesive Commercial Signs</h2>
                
                <div className="float-right ml-6 mb-4">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/07/collection-indoor-lobby-sign-e1530545883101-300x207.jpg" 
                    alt="attractive custom lobby signage" 
                    className="rounded-lg shadow-md w-[300px] h-auto"
                  />
                </div>

                <p className="text-muted-foreground mb-4">
                  If you want to be noticeable in your local market, you need well-crafted commercial signs and graphics. In addition to displaying your business name and logo, custom business signage provides information about your business that prospective customers need, such as operating hours, ADA and accessibility information, and current special promotions.
                </p>

                <p className="text-muted-foreground mb-6">
                  Differentiate your company from the other businesses around you, your competitors, and the many disruptions in your customer's busy lives with professional, durable custom commercial signage products! Royal Signs & Awnings is your manufacturer of high-impact business signs and graphics that support your corporate development by delivering an exciting and appealing environment to do business in.
                </p>

                {/* Gallery */}
                <div className="grid grid-cols-4 gap-2 my-6 clear-both">
                  {galleryImages.map((img, index) => (
                    <img 
                      key={index}
                      src={img.src} 
                      alt={img.alt}
                      className="w-full h-24 object-cover rounded"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6">
                  Royal Signs & Awnings uses your vision to create useful signs and graphics that promote your brand and services. Our creative designers are skilled at interpreting your unique plans and crafting a physical sign design. We create everything from custom facade signs to branded <Link to="/car-wraps" className="text-accent hover:underline">car graphics</Link>, lobby and <Link to="/office-signs" className="text-accent hover:underline">office signs</Link>, and personalized <Link to="/promotional-signs" className="text-accent hover:underline">promotional signs and graphics</Link> for your desired placement and utilization. No matter what your commercial sign and graphic concepts, try letting Royal Signs & Awnings turn them into reality!
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Complete Business Signage</h2>
                
                <div className="float-right ml-6 mb-4">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/product-displays-300x176.jpg" 
                    alt="Custom product displays" 
                    className="rounded-lg shadow-md w-[300px] h-auto"
                  />
                </div>

                <p className="text-muted-foreground mb-4">
                  Branded business signage elements assist with setting your brand apart from similar local businesses while establishing your organization as professionals for your market. Personalized, branded specialty signs also help manage potential customer's professional opinion of your shop. When using professional business signs and graphics that complement the rest of your brand identification and promotion endeavors, you reinforce both your local brand awareness as well as the expertise that your customers can expect from you.
                </p>

                <p className="text-muted-foreground mb-4">
                  Dedicated to providing knowledgeable support for your commercial signs and graphics, Royal Signs & Awnings is a local partner you can trust for effective signs, graphics, and images.
                </p>

                <p className="text-muted-foreground mb-6">
                  Whether you are a recently opened or newly acquired business venture or a well-known local favorite, Royal Signs & Awnings delivers expert solutions that support your branded business signage desires. We will provide almost limitless choices for how signs and graphics can be used to support your business growth and development. Our team of experts suggests specific placement, products, designs, and materials that will deliver maximum influence on your existing and new customers.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-4 clear-both">Our business sign services include:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {businessSignTypes.map((type) => (
                    <Link 
                      key={type.path}
                      to={type.path}
                      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow text-center"
                    >
                      <img src={type.image} alt={type.name} className="w-full h-24 object-cover" />
                      <div className="p-3">
                        <span className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">{type.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6">
                  Our talented team of Houston commercial signage experts has the knowledge, skills, and tools and equipment to create professional custom signs and graphics that deliver for you. Professional, branded signage is an outstanding way to truly showcase the personality of your brand.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Free Business Signs Consultation</h2>
                
                <div className="float-right ml-6 mb-4">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/royal-signs-logo-300x108.png" 
                    alt="Royal Signs & Awnings logo" 
                    className="w-[300px] h-auto"
                  />
                </div>

                <p className="text-muted-foreground mb-4">
                  At Royal Signs & Awnings, we provide the experienced support and expertise required to deliver specialty signs and graphics that effectively highlight the very best aspects of your brand, business, and products. Regardless of whether you already have a working design, or if you need design and planning assistance, our team will support you completely.
                </p>
                <p className="text-muted-foreground mb-4">
                  Royal Signs & Awnings is dedicated to becoming your local manufacturer of impactful, brand-cohesive custom signs that deliver increases in both new business visitors and exposure for your brand.
                </p>
                <p className="text-lg font-semibold text-foreground clear-both">
                  Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Business Signage Specialist!
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* We Accept Card */}
                <div className="bg-primary rounded-lg p-6 text-center">
                  <h3 className="font-bold text-lg text-primary-foreground mb-4">We Accept:</h3>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <DollarSign className="h-8 w-8 text-primary-foreground" />
                    <BadgeDollarSign className="h-8 w-8 text-primary-foreground" />
                    <CreditCard className="h-8 w-8 text-primary-foreground" />
                    <span className="text-primary-foreground font-bold text-sm">VISA</span>
                    <span className="text-primary-foreground font-bold text-sm">MC</span>
                    <span className="text-primary-foreground font-bold text-sm">DISC</span>
                    <span className="text-primary-foreground font-bold text-sm">AMEX</span>
                  </div>
                </div>

                {/* Client Review Card */}
                <div className="bg-primary rounded-lg overflow-hidden">
                  <div className="bg-primary p-4 text-center">
                    <h3 className="font-bold text-lg text-primary-foreground">Client Review</h3>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">Highly recommend Royal signs for all your business signage and building banners.</span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      Royal signs & awnings continue to impress us with their workmanship and customer service. We have been using them for over 5 years with three of our businesses and they have de... <Link to="/reviews" className="text-accent hover:underline">read more</Link>
                    </p>
                    <p className="text-right text-foreground font-semibold text-sm">- Yaman Subei</p>
                  </div>
                </div>

                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessSigns;
