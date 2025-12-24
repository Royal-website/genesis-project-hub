import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";

export default function WarehouseSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "#" }, { name: "Warehouse Signs", path: "/warehouse-signs" }];
  return (
    <UniversalPageTemplate title="Warehouse Signs" subtitle="Design | Production | Installation" heroImage="/images/industries/warehouse-signs/01-sign-company-01.jpg" breadcrumbs={breadcrumbs}>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-6">Warehouse Signs</h1>
        <div className="mb-8">
          <img src="/images/industries/warehouse-signs/04-sign-company-04.jpg" alt="Custom warehouse signs" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">When it comes to warehouse management and efficiency, signs and labels aren't just for aesthetics. They play a vital role in a warehouse's signage and labeling system.</p>
          <p className="font-semibold text-foreground">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!</p>
        </div>
        <div className="clear-both" />
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Organization, Safety, & Efficiency</h2>
        <div className="mb-8">
          <img src="/images/industries/warehouse-signs/05-sign-company-05.jpg" alt="Custom safety floor graphics" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">An organized warehouse is a safe and efficient one. By having precise and readable warehouse signage in conspicuous areas of your building, you are setting up helpful tools.</p>
        </div>
      </article>
    </UniversalPageTemplate>
  );
}
