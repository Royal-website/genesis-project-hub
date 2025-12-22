import { QuoteForm } from "@/components/forms/QuoteForm";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: "url('https://www.houstonsignsandawnings.com/wp-content/uploads/2013/09/verizon-custom-sign.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Headline */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
              Custom Signs & Awnings
            </h1>
            <p className="text-2xl md:text-3xl font-light mt-4 text-shadow">
              Design | Production | Installation
            </p>
          </div>
          
          {/* Right: Quote Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}