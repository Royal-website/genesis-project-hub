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
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/01/outdoor-channel-letters-1.jpg" 
                    alt="Custom outdoor channel letters sign for pharmacy"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <p>
                  Our company houses experienced workers, graphic design specialists, as well as installation experts. They take charge of the whole process; every aspect of the job is thoroughly and professionally handled. Shall any complications arise, the team will have everything figured out. We have a custom signage shop where we perform all the work. We make use of raw materials and eco-friendly methods. We are dedicated to giving you the best outdoor signs that will help in growing your business.
                </p>

                <p>
                  Your business signs give an impression of what the brand is all about towards the customers. Through the signs, you let them know what your company offers, the kind of services they can avail from you, and your company's personality. Signs are essential tools for communicating messages effectively and efficiently.
                </p>

                <p className="font-bold">
                  Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with an Outdoor Signs Expert!
                </p>
              </div>

              {/* Exterior Signage Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Exterior Signage
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Exterior signage is a valuable tool in promoting and advertising. Signs play a significant role in attracting customers and clients. Your signs must have the right content for it to deliver an effective and persuasive message. They must be big enough for people to notice and visually attractive to capture attention.
                  </p>
                  <p>
                    Royal Signs & Awnings can provide you with any type of commercial signage you need. From simple banners to lighted channel letter signs, we can do it all. We have the capacity and the resources to bring your custom signage ideas to life. Below are some of the outdoor sign products we can create for you.
                  </p>
                </div>
              </div>

              {/* Sign Types Grid */}
              <div className="mt-8">
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
                  Full-Service Outdoor Sign Company
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    If you're looking for professional, experienced outdoor sign experts, Royal Signs & Awnings is the company for you. We provide comprehensive sign services including design, fabrication, and installation. Our team will work closely with you throughout every step of the process, starting from conceptualization to the final installation.
                  </p>
                  <p>
                    Royal Signs & Awnings is among the best custom sign companies in Houston, Texas. Whether you need outdoor signage for your storefronts, vehicles, events, or offices, we can deliver what you need. If you want to have consistent branding from the exterior of your building to the interior, we can help. We offer all types of signs—both indoor and outdoor.
                  </p>
                </div>
              </div>

              {/* Free Quote CTA */}
              <div className="mt-10 bg-primary rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                  Free Outdoor Signs Consultation
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Royal Signs & Awnings is your premier outdoor sign provider for all of Houston, TX and surrounding areas.
                </p>
                <a
                  href="tel:2816459935"
                  className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Call (281) 645-9935
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* We Accept */}
              <div className="bg-primary rounded-lg p-4">
                <h3 className="text-lg font-bold text-primary-foreground text-center mb-3">
                  We Accept:
                </h3>
                <div className="flex justify-center gap-2">
                  <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/visa.png" alt="Visa" className="h-6" />
                  <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/discover.png" alt="Discover" className="h-6" />
                  <img src="https://cdn.markmywordsmedia.com/wp-content/uploads/2023/01/amex.png" alt="American Express" className="h-6" />
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
