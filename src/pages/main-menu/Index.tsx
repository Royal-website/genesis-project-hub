import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { Sidebar } from "@/components/layout/Sidebar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="text-lg text-muted-foreground mb-6">
                Want to acquire fantastic exposure for your brand? Using attractive, targeted commercial signage by Houston sign company, Royal Signs & Awnings, you can achieve your branding goals!
              </p>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Your leading local custom signage manufacturers, we handle each and every aspect of your signage project here in our local full-service signage facility. We focus on giving you remarkable service, eco-friendly sign and graphic products, and durable materials, which makes us the clear and obvious choice for all of your custom sign needs.
                </p>
                
                <p>
                  An outstanding way to tell promising consumers about what your business has to offer, your professional signs and graphics are a good asset for brand building purposes and shopper support. With irresistible <Link to="/outdoor-signs" className="text-accent hover:underline">outdoor signage</Link>, <Link to="/indoor-signs" className="text-accent hover:underline">complementary indoor signs</Link>, and <Link to="/custom-signs" className="text-accent hover:underline">beneficial promotional signs</Link>, our experts see to it that your company won't be overlooked. Our experienced local sign company produces sound solutions for your specific brand and business promotion needs.
                </p>
                
                <p className="font-bold">
                  Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Signs & Graphics expert!
                </p>
              </div>

              {/* Signs That Work For You Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Signs That Work For You
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Ready to boost your average ticket, increase your traffic flow, or improve your team's productivity? Royal Signs & Awnings delivers the <Link to="/business-signs" className="text-accent hover:underline">high-visibility signage</Link> you must have to do precisely that. From the initial free signage consultation to final sign install, we see to it we are manufacturing the appropriate signs for your unique location, desires, and brand.
                  </p>
                  <p>
                    Our specialists make an effort to comprehend your unique promotional goals, which allows us to deliver practical sign and graphic alternatives that will perform for your organization. <Link to="/awning-signs" className="text-accent hover:underline">Branded signs</Link>, graphics, and images get your brand found, allow you to clearly display what you have to offer, and provide passive assistance to your guests.
                  </p>
                </div>
              </div>

              {/* Outdoor Signs Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  <Link to="/outdoor-signs" className="hover:text-accent transition-colors">
                    Outdoor & Exterior Signs
                  </Link>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Improve visibility for your business and brand with high-visibility and high-impact outdoor signs and graphics produced by Royal Signs & Awnings! Delivering impressive pole signs to attention-getting storefront signs, portable signs, post and panel signs, temporary signs, and many more, we design, build, and install all of the signs, graphics, and images your unique business needs for far better awareness.
                  </p>
                </div>

                {/* Outdoor Sign Types Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { name: "Awning Signs", path: "/awning-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/awning-signs.jpg" },
                    { name: "Blade Signs", path: "/blade-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/blade-signs.jpg" },
                    { name: "Cabinet Signs", path: "/cabinet-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/cabinet-signs.jpg" },
                    { name: "Channel Letters", path: "/channel-letters", image: "https://cdn.markmywordsmedia.com/sign-images/services/channel-letters.jpg" },
                    { name: "Dimensional Letters", path: "/dimensional-letters", image: "https://cdn.markmywordsmedia.com/sign-images/services/dimensional-letters.jpg" },
                    { name: "Hanging Signs", path: "/hanging-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/hanging-signs.jpg" },
                    { name: "Monument Signs", path: "/monument-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/monument-signs.png" },
                    { name: "Pole Signs", path: "/pole-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/pole-signs.jpg" },
                  ].map((sign) => (
                    <Link
                      key={sign.path}
                      to={sign.path}
                      className="group text-center"
                    >
                      <img
                        src={sign.image}
                        alt={sign.name}
                        className="w-24 h-24 mx-auto rounded-lg object-cover border-2 border-transparent group-hover:border-accent transition-colors"
                        loading="lazy"
                      />
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {sign.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Indoor Signs Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  <Link to="/indoor-signs" className="hover:text-accent transition-colors">
                    Indoor & Interior Signs
                  </Link>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Provide your clients and staff with helpful indoor signs and graphics by Royal Signs & Awnings! From attractive lobby signs, to directional signs, ADA signs, menu boards, and trade show graphics, our experts develop and fabricate the ideal interior sign solutions for the goals of your brand.
                  </p>
                </div>

                {/* Indoor Sign Types Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { name: "ADA Signs", path: "/ada-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/ada-signs.jpg" },
                    { name: "Lobby Signs", path: "/lobby-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/lobby-signs.jpg" },
                    { name: "Wall Graphics", path: "/wall-graphics", image: "https://cdn.markmywordsmedia.com/sign-images/services/wall-graphics.jpg" },
                    { name: "Floor Signs", path: "/floor-signs", image: "https://cdn.markmywordsmedia.com/sign-images/services/floor-signs.jpg" },
                  ].map((sign) => (
                    <Link
                      key={sign.path}
                      to={sign.path}
                      className="group text-center"
                    >
                      <img
                        src={sign.image}
                        alt={sign.name}
                        className="w-24 h-24 mx-auto rounded-lg object-cover border-2 border-transparent group-hover:border-accent transition-colors"
                        loading="lazy"
                      />
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {sign.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vehicle Wraps Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  <Link to="/vehicle-wraps" className="hover:text-accent transition-colors">
                    Vehicle Wraps & Graphics
                  </Link>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Want to convert your car, truck, van, or entire fleet into a mobile advertising machine? The skilled sign professionals at Royal Signs & Awnings design and install eye-catching vehicle wraps and graphics that transform your vehicles into attention-getting brand ambassadors.
                  </p>
                </div>

                {/* Vehicle Types Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { name: "Car Wraps", path: "/car-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/car-wraps.jpg" },
                    { name: "Truck Wraps", path: "/truck-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/truck-wraps.jpg" },
                    { name: "Fleet Wraps", path: "/fleet-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/fleet-wraps.jpg" },
                    { name: "Van Wraps", path: "/van-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/van-wraps.jpg" },
                  ].map((vehicle, index) => (
                    <Link
                      key={index}
                      to={vehicle.path}
                      className="group text-center"
                    >
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-24 h-24 mx-auto rounded-lg object-cover border-2 border-transparent group-hover:border-accent transition-colors"
                        loading="lazy"
                      />
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {vehicle.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Free Consultation CTA */}
              <div className="mt-10 bg-primary rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                  Free Sign Consultation
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  From design to installation, we handle it all. Call us today for your free consultation!
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
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
