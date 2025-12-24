import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";

export default function RetailSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "#" }, { name: "Retail Signs", path: "/retail-signs" }];
  return (
    <UniversalPageTemplate title="Retail Signs" subtitle="Design | Production | Installation" heroImage="/images/industries/retail-signs/01-sign-company-01.jpg" breadcrumbs={breadcrumbs}>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-6">Houston Retail Signs</h1>
        <div className="mb-8">
          <img src="/images/industries/retail-signs/04-sign-company-04.jpg" alt="Custom storefront sign" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">Retail signs can make or break your business. 76% of consumers admit having chosen to step inside a store for the first time based purely on the store's sign.</p>
          <p className="font-semibold text-foreground">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for your Free Consultation!</p>
        </div>
        <div className="clear-both" />
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Get Your Brand Noticed</h2>
        <div className="mb-8">
          <img src="/images/industries/retail-signs/05-sign-company-05.jpg" alt="Outdoor promotional banner" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">Catch the attention of potential customers from far away with stunning outdoor retail signage by Royal Signs & Awnings.</p>
        </div>
      </article>
    </UniversalPageTemplate>
  );
}
