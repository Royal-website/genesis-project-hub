import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";

export default function SalonSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "#" }, { name: "Salon Signs", path: "/salon-signs" }];
  return (
    <UniversalPageTemplate title="Salon Signs" subtitle="Design | Production | Installation" heroImage="/images/industries/salon-signs/08-outdoor-storefront-window-vinyl-graphics-custom-1024x732.jpg" breadcrumbs={breadcrumbs}>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-6">Salon Signs</h1>
        <div className="mb-8">
          <img src="/images/industries/salon-signs/04-sign-installation-300x208.jpg" alt="Attractive Storefront Signage" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">Every salon has a unique personality and a unique set of services to offer. You need custom-crafted salon signs to accurately capture your uniqueness and showcase it to your target market.</p>
          <p className="font-semibold text-foreground">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!</p>
        </div>
        <div className="clear-both" />
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">LED Signs for that Neon-Sign Look</h2>
        <div className="mb-8">
          <img src="/images/industries/salon-signs/06-flag-1-174x300.jpg" alt="Attractive LED signs" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[174px]" />
          <p className="text-muted-foreground mb-4">LED signs by Royal Signs & Awnings can be customized to have the colors that you want. They are made from flame-retardant, flexible, highly durable materials.</p>
        </div>
      </article>
    </UniversalPageTemplate>
  );
}
