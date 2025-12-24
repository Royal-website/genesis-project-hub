interface CommitmentSectionProps {
  title?: string;
  content: string;
  ctaText?: string;
  logoSrc?: string;
}

export function CommitmentSection({
  title = "Our Commitment To You",
  content,
  ctaText = "Contact Royal Signs & Awnings today at (281) 204-8120 for your Free Consultation with a Signs & Graphics expert!",
  logoSrc = "/royal-signs-logo.png",
}: CommitmentSectionProps) {
  return (
    <div className="mb-10">
      {/* Section Title with left border accent */}
      <div className="border-l-4 border-accent pl-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h2>
      </div>

      {/* Content with logo */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Text content */}
        <div className="flex-1 text-muted-foreground leading-relaxed text-justify">
          <p className="mb-4">{content}</p>
          <p className="font-bold text-foreground">{ctaText}</p>
        </div>

        {/* Logo */}
        <div className="w-full md:w-[200px] lg:w-[250px] flex-shrink-0">
          <img
            src={logoSrc}
            alt="Royal Signs & Awnings Logo"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
