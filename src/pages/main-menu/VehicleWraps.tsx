import { Layout } from "@/components/layout/Layout";
import { PageSidebarWithMobileForm } from "@/components/layout/PageSidebarWithMobileForm";
import { Link } from "react-router-dom";
import vehicleWrapsHero from "@/assets/images/vehicle-wraps-hero.jpg";
import vehicleWrapFull from "@/assets/images/vehicle-wrap-full.jpg";
import vehicleWrapPartial from "@/assets/images/vehicle-wrap-partial.jpg";
import vehicleVinylLettering from "@/assets/images/vehicle-vinyl-lettering.jpg";
import vehicleMagnet from "@/assets/images/vehicle-magnet.jpg";
import vehicleWindowFilm from "@/assets/images/vehicle-window-film.jpg";
import vehicleFoodTruck from "@/assets/images/vehicle-food-truck.jpg";
import vehicleFleet from "@/assets/images/vehicle-fleet.jpg";
import vehicleCarWrap from "@/assets/images/vehicle-car-wrap.jpg";
import vehicleBoatWrap from "@/assets/images/vehicle-boat-wrap.jpg";
import vehicleWrapInstallation from "@/assets/images/vehicle-wrap-installation.jpg";

const vehicleWrapTypes = [
  { name: "Car Wraps", path: "/car-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/car-wraps.jpg" },
  { name: "Truck Wraps", path: "/truck-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/truck-wraps.jpg" },
  { name: "Van Wraps", path: "/van-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/van-wraps.jpg" },
  { name: "Fleet Wraps", path: "/fleet-wraps", image: "https://cdn.markmywordsmedia.com/sign-images/services/fleet-wraps.jpg" },
];

const VehicleWraps = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] md:min-h-[450px] flex items-center"
        style={{
          backgroundImage: `url('${vehicleWrapsHero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="lg:w-2/3 text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
              Vehicle Wraps & Graphics
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
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                Houston Vehicle Wraps & Graphics
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Boost your business and give it a professional look with an investment in vehicle wraps and graphics for your whole fleet – even if that means just one truck. Royal Signs & Awnings is your top source for vehicle wraps, business car wraps, boat wraps, truck wraps, van wraps and more for Houston businesses who want to capture the attention of local customers.
                </p>

                <div className="float-right ml-6 mb-4 w-72">
                  <img 
                    src="https://www.houstonsignsandawnings.com/wp-content/uploads/2018/06/custom-vehicle-vinyl-car-wrap-graphics-300x169.jpg" 
                    alt="custom full vehicle wrap"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <p>
                  Whether you have a food truck or a whole fleet of commercial trucks and vans, Royal Signs & Awnings will create the perfect vinyl wraps for your needs. We offer custom design attuned to your vehicle type and your business goals. All our wraps are manufactured right here in our shop, and we offer full-service vehicle wrap installation to make sure your wrap looks and performs perfectly.
                </p>

                <p>
                  No matter how large – or small – your fleet is, we are your top source for Houston truck wraps, van wraps, boat wraps, trailer wraps, vehicle graphics, and car vinyl graphics. Our professional vehicle wraps team at Royal Signs & Awnings are ready to help you!
                </p>

                <p className="font-bold">
                  Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation with a Commercial Vehicle Wrap Expert!
                </p>
              </div>

              {/* Vinyl Graphics Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Vinyl Graphics, Partial Wraps, & Magnets
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    What type of vehicle wrap will serve you best? It depends on a lot of factors: Your goals, your vehicle size and shape, your budget. No matter what your needs, we have the best auto wrap options for your needs from full and partial vehicle wraps to vinyl graphics and car door magnets. We have you covered.
                  </p>
                </div>
              </div>

              {/* Full Vehicle Wraps Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Full Vehicle Wraps
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleWrapFull}
                    alt="custom full vehicle wrap"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Turn your vehicle into a rolling billboard advertisement with a complete vehicle wrap with seamless coverage for your car, truck, van, bus, or trailer. The colorful, attractive vinyl graphics are customized to your company's message, brand, and style. If you are looking to maximize your company's visibility in the exact neighborhoods you want to serve, a full vehicle wrap is the best choice!
                  </p>
                  <p>
                    Not only will your vehicle look great and grab attention, our top-quality, heavy-duty vinyl wraps also offer a layer of protection from the elements for cars, trucks and boats.
                  </p>
                </div>
              </div>

              {/* Partial Car Wraps Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Partial Car Wraps
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleWrapPartial}
                    alt="partial vehicle graphics"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Partial car wraps can give your a great professional finish over just a part of your car or truck, giving you an attractive advertisement for your business without investing in full coverage. Our trained professionals at Royal Signs & Awnings can help you pick what part of your car or truck you want to wrap, whether its the doors, side panels, the hood, the bumpers, your tailgate or some combination.
                  </p>
                  <p>
                    Our vehicle wrap installers will work with the lines and joints of your car or truck to make sure your partial vehicle wrap looks great with a seamless finish.
                  </p>
                </div>
              </div>

              {/* Vinyl Graphics Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Vinyl Graphics
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleVinylLettering}
                    alt="custom vinyl vehicle lettering"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Vinyl graphics can work well for fleets of service trucks and vehicles, serving not only to advertise the business, but also to identify the truck and your employees to clients. Truck and car vinyl graphics are cut into the shape of the image you want and adhered to the vehicle, so while they look professional they are not entirely flush with the side of the vehicle.
                  </p>
                  <p>
                    Usually a cut piece of vinyl allows for flexibility in design and makes it easier to move or update the design with changes in your phone number, logo, or business name.
                  </p>
                  <p>
                    If you prefer a simple logo and phone number on your business vehicle or fleet, often a vinyl graphic is the best option.
                  </p>
                </div>
              </div>

              {/* Vehicle Magnets Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Vehicle Magnets
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleMagnet}
                    alt="car magnet"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Do you use your personal vehicle for work? Maybe you don't always want your business info on the side of your car when you are out for an elegant night on the town.
                  </p>
                  <p>
                    Vehicle magnets are easily removable and replaceable. Real estate sales professionals and others who travel for business using their personal car or truck can use a car magnet to identify themselves while meeting clients, while at the same time attracting the attention of potential new clients.
                  </p>
                  <p>
                    When the work day is done, or when you change to a different vehicle, simply peel off the car magnet. Whether you live in a restricted neighborhood, switch vehicles often, or simply would like to keep your personal time separate from your business time, a vehicle magnet is a perfect option for you.
                  </p>
                  <p>
                    A custom vehicle magnet from Royal Signs & Awnings offers a variety of sizes, shapes, colors, and styles perfect for any business.
                  </p>
                </div>
              </div>

              {/* Perforated Window Film Section */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Perforated Window Film
                </h3>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleWindowFilm}
                    alt="custom perforated window film"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Complement your full or partial vehicle wraps with perforated window film. Our window film will be printed with the same messaging on your wraps – or continue the design – without impeding the site lines for the driver and passengers.
                  </p>
                  <p>
                    Our perforated vehicle wraps are the perfect finishing touch to a full wrap or partial wrap on your company vehicle, adding extra flare to your attention-grabbing design.
                  </p>
                  <p>
                    Let the design pros at Royal Signs & Awnings help you find the perfect vehicle wraps and graphics options for your <Link to="/car-wraps" className="text-accent hover:underline">business car</Link> or <Link to="/truck-wraps" className="text-accent hover:underline">truck fleet</Link>. We can't wait to get started!
                  </p>
                </div>
              </div>

              {/* Professionals Wraps Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Professionals Wraps For All Vehicle Types
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleFoodTruck}
                    alt="custom vinyl food truck wrap"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Whether it's your food truck, your personal car or your fleet of service trucks, Royal Signs & Awnings is fully equipped with the tools, design experience and installation know-how to create the perfect wraps and graphics for you.
                  </p>
                  <p>
                    We want to hear from you. What is your vision, your goals, your budget? Royal Signs & Awnings's pros will help you make the best decisions to serve your needs with custom vehicle wraps and graphics done in our shop from start to finish, from design to manufacturing to installation.
                  </p>
                </div>
              </div>

              {/* Sign Types Grid */}
              <div className="mt-10 clear-both">
                <h3 className="text-xl font-bold text-foreground mb-6">Our vehicle wrap services include:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {vehicleWrapTypes.map((wrap) => (
                    <Link
                      key={wrap.path}
                      to={wrap.path}
                      className="group text-center"
                    >
                      <img
                        src={wrap.image}
                        alt={wrap.name}
                        className="w-28 h-28 mx-auto rounded-lg object-cover border-2 border-transparent group-hover:border-accent transition-colors"
                        loading="lazy"
                      />
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {wrap.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Attractive Wraps Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Attractive Wraps for Your Entire Fleet
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleFleet}
                    alt="Custom Fleet Vehicle Wraps"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Wrapping your fleet serves a dual purpose: It gets your name and message out on the streets right where potential customers can see it, but it also identifies you to your current customers and gives them confidence in your professionalism.
                  </p>
                  <p>
                    If your business offers service in a clients' home or business, pulling up in a clearly marked vehicle will let them know who you are and that you are ready for work.
                  </p>
                  <p>
                    A client home alone feels comfortable opening the door and welcoming you into their home, which is vital for home service businesses like electricians, exterminators, and cable installation services.
                  </p>
                  <p>
                    At the same time, while your vehicle is parked in the driveway on a service call, all the neighbors will see your name and phone number and recognize that yours is a local business that their neighbor uses and trusts. Your professional-looking vinyl wrap or graphics from Royal Signs & Awnings is as good as a word-of-mouth recommendation.
                  </p>
                </div>
              </div>

              {/* Promotional Car Wraps Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Promotional Car Wraps
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleCarWrap}
                    alt="custom car wrap"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Any business can benefit from promotional car wraps. Attract attention simply driving around town doing your daily business. Wraps from Royal Signs & Awnings protect your car's paint job, stay in place no matter what the weather conditions, and market your business or product for a perfect investment in your business.
                  </p>
                  <p>
                    Vehicle wraps are great for all businesses, but work especially well for those without a retail location. If you work in a shared space, work from home, or travel to clients' locations, car and truck graphics serve as a storefront sign for your business, spreading awareness wherever you go.
                  </p>
                  <p>
                    Transform your car or truck into a marketing machine with full or partial wrap, or with vehicle graphics.
                  </p>
                </div>
              </div>

              {/* Custom Boat Wraps Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Custom Boat Wraps
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleBoatWrap}
                    alt="custom boat wrap design"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    If you have a water-based business, or just want to attract customers while they are on the water, Royal Signs & Awnings offers marine-grade vinyl boat wraps and trailer wraps. Marine-grade wraps won't wear off in salt or fresh water, and are durable no matter what conditions they face.
                  </p>
                  <p>
                    Get your business messaging out on the water, or at water side, with a striking and protective marine-grade boat wrap from Royal Signs & Awnings.
                  </p>
                  <h4 className="text-lg font-bold mt-4">Boat Identification Numbers</h4>
                  <p>
                    Our marine-grade vinyl is perfect for required identification numbers for your boats and other maritime vehicles because it stands up to the harshest conditions of water and weather. We'll print ID numbers, licenses, and even your boat's name in the proper size and install it in the proper place to keep your boat legal.
                  </p>
                </div>
              </div>

              {/* Full-Service Section */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Full-Service Vehicle Wrapping
                </h2>
                
                <div className="float-right ml-6 mb-4 w-64">
                  <img 
                    src={vehicleWrapInstallation}
                    alt="custom vehicle wrap installation"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Our professional, detail-oriented team is here to serve you throughout the process of getting your vehicle wraps and graphics, whether it's for a single car or an entire fleet. Start with a free consultation where we listen to your needs and offer you options that will serve them best based on the vehicles you have, the designs you have in mind, the goals you've set, and your budget constraints.
                  </p>
                  <p>
                    Our designers create mock ups of your designs so you can visualize the finished look, and we'll make whatever modifications you need.
                  </p>
                  <p>
                    Then we'll manufacture the wraps in our local print shop and hand them to our crack installation team to seamlessly install your new vehicle wraps or graphics.
                  </p>
                  <p>
                    If at some point down the road, you need to update or remove your wrap, we are here to help with that as well.
                  </p>
                </div>
              </div>

              {/* Free Quote CTA */}
              <div className="mt-10 clear-both">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4 mb-6">
                  Free Vehicle Wrap Consultation
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
                    Whether your fleet is a single car or a large array of trucks and vans, the team at Royal Signs & Awnings stands ready to create attractive, attention-grabbing, and durable vehicle wraps that will suit your business brand and goals perfectly.
                  </p>
                  <p>
                    From our free consultation, through the design, manufacturing and installation of your vehicle wraps and graphics, we offer stress-free, attentive service to match our top-quality vinyl wraps that suit any business and budget.
                  </p>
                  <p className="font-bold">
                    Call Royal Signs & Awnings at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation with a Vehicle Wrap Specialist!
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

export default VehicleWraps;
