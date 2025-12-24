import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export function ContentSection({
  title,
  children,
  image,
  imageAlt = "",
  imagePosition = "right",
  className = "",
}: ContentSectionProps) {
  return (
    <div className={`mb-10 ${className}`}>
      {/* Section Title with left border accent */}
      <div className="border-l-4 border-accent pl-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h2>
      </div>

      {/* Content with optional image */}
      <div className={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-6`}>
        {/* Text content */}
        <div className={`flex-1 text-muted-foreground leading-relaxed text-justify ${image ? "" : "w-full"}`}>
          {children}
        </div>

        {/* Optional Image */}
        {image && (
          <div className="w-full md:w-[300px] lg:w-[350px] flex-shrink-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
