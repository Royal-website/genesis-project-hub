import { UniversalPageTemplate } from "@/components/templates/UniversalPageTemplate";

export default function SchoolSigns() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "#" }, { name: "School Signs", path: "/school-signs" }];
  return (
    <UniversalPageTemplate title="School Signs" subtitle="Design | Production | Installation" heroImage="/images/industries/school-signs/05-high-schools-1.jpg" breadcrumbs={breadcrumbs}>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-6">School Signs</h1>
        <div className="mb-8">
          <img src="/images/industries/school-signs/04-high-schools-1-300x158.jpg" alt="Dimensional Letters for School Entry" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[300px]" />
          <p className="text-muted-foreground mb-4">School signs can do a lot more for your school than you think. Not only do they bridge communication gaps, encourage involvement, and promote safety, they also have a huge impact on your branding.</p>
          <p className="font-semibold text-foreground">Call Royal Signs & Awnings today at <a href="tel:2816459935" className="text-accent hover:underline">(281) 645-9935</a> for a Free Consultation!</p>
        </div>
        <div className="clear-both" />
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Indoor School Signs</h2>
        <div className="mb-8">
          <img src="/images/industries/school-signs/06-custom-vinyl-wall-graphics-mural-indoor-225x300.jpg" alt="Custom indoor wall mural" className="float-right ml-6 mb-4 rounded-lg shadow-md w-[225px]" />
          <p className="text-muted-foreground mb-4">Your school's signage needs vary depending on many factors. Royal Signs & Awnings has a wide selection of sign designs, types, materials, and production methods.</p>
        </div>
      </article>
    </UniversalPageTemplate>
  );
}
