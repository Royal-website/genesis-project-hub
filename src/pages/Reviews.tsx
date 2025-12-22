import { Layout } from "@/components/layout/Layout";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    date: "2024-01-15",
    text: "Royal Signs did an amazing job on our storefront signage. The channel letters look incredible and really make our business stand out. Highly recommended!",
    service: "Channel Letters",
  },
  {
    name: "Maria Garcia",
    rating: 5,
    date: "2024-02-20",
    text: "We needed vehicle wraps for our fleet of 5 trucks. The team was professional, on time, and the quality exceeded our expectations. Great value for the price.",
    service: "Vehicle Wraps",
  },
  {
    name: "David Johnson",
    rating: 5,
    date: "2024-03-05",
    text: "The monument sign they created for our office complex is beautiful. From design to installation, the entire process was smooth and hassle-free.",
    service: "Monument Signs",
  },
  {
    name: "Sarah Williams",
    rating: 5,
    date: "2024-03-18",
    text: "Outstanding customer service! They helped us design the perfect lobby sign for our law firm. Very professional and elegant result.",
    service: "Lobby Signs",
  },
  {
    name: "Michael Brown",
    rating: 5,
    date: "2024-04-02",
    text: "Quick turnaround on our banner order. The quality was excellent and the colors were vibrant. Will definitely use them again!",
    service: "Banners",
  },
  {
    name: "Jennifer Davis",
    rating: 5,
    date: "2024-04-15",
    text: "Royal Signs transformed our restaurant's exterior with a beautiful awning and window graphics. We've seen increased foot traffic since installation!",
    service: "Awning Signs",
  },
];

const Reviews = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Customer Reviews
          </h1>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-8 w-8 text-accent fill-accent" />
            ))}
          </div>
          <p className="text-xl text-primary-foreground/90">
            Rated 5.0 Stars Based on 54 Client Reviews
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-md p-6 relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.service} • {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Sign Project?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Join our satisfied customers and get your free quote today!
          </p>
          <a 
            href="tel:2816459935"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Call (281) 645-9935
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;