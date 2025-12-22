import { Link } from "react-router-dom";
import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Houston Sign Company
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Want to acquire fantastic exposure for your brand? Using attractive, targeted commercial signage by Houston sign company, Royal Signs & Awnings, you can achieve your branding goals!
              </p>
              
              <div className="float-right ml-6 mb-4 w-full md:w-72">
                <img
                  src="https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/storefront-building-channel-letters-300x225.jpg"
                  alt="Custom outdoor storefront signage"
                  className="rounded-lg shadow-md w-full"
                  loading="lazy"
                />
              </div>
              
              <p className="mb-4">
                Your leading local custom signage manufacturers, we handle each and every aspect of your signage project here in our local full-service signage facility. We focus on giving you remarkable service, eco-friendly sign and graphic products, and durable materials, which makes us the clear and obvious choice for all of your custom sign needs.
              </p>
              
              <p className="mb-4">
                An outstanding way to tell promising consumers about what your business has to offer, your professional signs and graphics are a good asset for brand building purposes and shopper support. With irresistible{" "}
                <Link to="/outdoor-signs" className="text-primary hover:text-accent font-medium">
                  outdoor signage
                </Link>
                ,{" "}
                <Link to="/indoor-signs" className="text-primary hover:text-accent font-medium">
                  complementary indoor signs
                </Link>
                , and{" "}
                <Link to="/promotional-signs" className="text-primary hover:text-accent font-medium">
                  beneficial promotional signs
                </Link>
                , our experts see to it that your company won't be overlooked.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg my-6">
                <p className="text-foreground font-semibold">
                  Call Royal Signs & Awnings today at{" "}
                  <a href="tel:2816459935" className="text-accent hover:underline">
                    (281) 645-9935
                  </a>{" "}
                  for your Free Consultation with a Signs & Graphics expert!
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Signs That Work For You
              </h2>
              
              <p className="mb-4">
                Ready to boost your average ticket, increase your traffic flow, or improve your team's productivity? Royal Signs & Awnings delivers the high-visibility signage you must have to do precisely that. From the initial free signage consultation to final sign install, we see to it we are manufacturing the appropriate signs for your unique location, desires, and brand.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 text-center">
              <Link to="/contact-us">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg">
                  Get Your Free Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* We Accept */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-center mb-4">We Accept:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Visa", "MC", "Amex", "Discover", "PayPal"].map((method) => (
                  <div key={method} className="bg-primary-foreground/20 px-3 py-1 rounded text-sm">
                    {method}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Client Review */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">Client Review</h3>
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-accent fill-accent" />
                ))}
              </div>
              <blockquote className="text-sm italic text-center mb-3">
                "Highly recommended! They did an amazing job on our storefront signs. Professional, quick, and affordable."
              </blockquote>
              <p className="text-center text-accent font-medium">- Happy Customer</p>
            </div>
            
            {/* Phone CTA */}
            <div className="mt-6 text-center">
              <a href="tel:2816459935">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  (281) 645-9935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}