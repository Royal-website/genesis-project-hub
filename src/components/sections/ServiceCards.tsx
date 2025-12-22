import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCard {
  title: string;
  image: string;
  path: string;
}

interface ServiceCardsProps {
  cards: ServiceCard[];
  className?: string;
}

export function ServiceCards({ cards, className = "" }: ServiceCardsProps) {
  return (
    <section className={`py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div 
              key={card.path} 
              className="bg-card border border-border rounded-sm overflow-hidden flex flex-col"
            >
              {/* Title at top */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-foreground">
                  {card.title}
                </h3>
              </div>
              
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Learn More button */}
              <div className="p-4 flex justify-center">
                <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                  <Link to={card.path}>LEARN MORE</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
