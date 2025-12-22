import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Ready to get started? Reach out for a free consultation!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Request a Free Quote
              </h2>
              <div className="bg-primary rounded-lg p-6">
                <QuoteForm variant="hero" />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a 
                      href="tel:2816459935" 
                      className="text-lg text-accent hover:underline"
                    >
                      (281) 645-9935
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Call us anytime for immediate assistance
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:info@royalsigns.com" 
                      className="text-lg text-accent hover:underline"
                    >
                      info@royalsigns.com
                    </a>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-lg text-foreground">
                      Houston, Texas
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Serving the greater Houston area
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-lg text-foreground">
                      Open 24 Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available for quotes and consultations anytime
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-muted rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Serving the Greater Houston Area
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We come to you for consultations and installations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;