import { Link } from "react-router-dom";

interface ImageItem {
  src: string;
  alt: string;
  label: string;
  path?: string;
}

interface ImageGridProps {
  images: ImageItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ImageGrid({ 
  images, 
  columns = 4,
  className = "" 
}: ImageGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {images.map((image, index) => {
        const ImageContent = (
          <div className="relative aspect-square overflow-hidden group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Label overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary py-2 px-3">
              <p className="text-white text-sm font-semibold text-center truncate">
                {image.label}
              </p>
            </div>
          </div>
        );

        if (image.path) {
          return (
            <Link 
              key={index} 
              to={image.path}
              className="block hover:opacity-95 transition-opacity"
            >
              {ImageContent}
            </Link>
          );
        }

        return <div key={index}>{ImageContent}</div>;
      })}
    </div>
  );
}
