import { Link } from "react-router-dom";

const services = [
  {
    title: "Indoor Signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/indoor-lobby.jpg",
    path: "/indoor-signs",
    alt: "Royal Signs & Awnings Indoor Signs",
  },
  {
    title: "Outdoor Signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/outdoor-signs-segment.jpg",
    path: "/outdoor-signs",
    alt: "Royal Signs & Awnings Outdoor Signs",
  },
  {
    title: "Awnings",
    image: "https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/building-signs.jpg",
    path: "/awning-signs",
    alt: "Royal Signs & Awnings Awnings",
  },
  {
    title: "Custom Signs",
    image: "https://cdn.markmywordsmedia.com/sign-images/segments/custom-signs.jpg",
    path: "/custom-signs",
    alt: "Royal Signs & Awnings Custom Signs",
  },
];

export function ServiceCards() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-4 text-center">
                <h3 className="font-bold text-foreground text-sm md:text-lg mb-3">
                  {service.title}
                </h3>
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <button className="mt-3 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm font-medium rounded transition-colors">
                  Learn More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}