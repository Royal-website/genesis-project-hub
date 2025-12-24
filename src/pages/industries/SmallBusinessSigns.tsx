import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";

export default function SmallBusinessSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "#" }, { name: "Small Business Signs", path: "/small-business-signs" }];
  return (
    <UniversalPageTemplate title="Small Business Signs" subtitle="Design | Production | Installation" heroImage="/images/industries/small-business-signs/04-partial-car-wrap-vehicle-graphics-lettering-vinyl-1024x768.jpg" breadcrumbs={breadcrumbs}>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-6">Small Business Signs</h1>
        <div className="mb-8">
          <img src="/images/industries/small-business-signs/05-partial-car-wrap-vehicle-graphics-lettering-vinyl-300x225.jpg" alt="Custom storefront sign panel" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">Trusted sign providers like Royal Signs & Awnings can offer you excellent signage options that are affordable and get the job done.</p>
          <p className="font-semibold text-foreground">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!</p>
        </div>
        <div className="clear-both" />
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Storefront Signs That Speak Your Personality</h2>
        <div className="mb-8">
          <img src="/images/industries/small-business-signs/08-barden-projection-building-outdoor-storefront-sign-300x203.jpg" alt="Attractive Blade Sign" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">Because of the limitations in size, funding, publicity, small businesses often need to put a lot of effort in being visible to its market.</p>
        </div>
      </article>
    </UniversalPageTemplate>
  );
}
