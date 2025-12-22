import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { ChevronRight } from "lucide-react";

interface CategoryItem {
  name: string;
  path: string;
  image: string;
  description?: string;
}

interface CategoryPageTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  intro: string;
  categories: CategoryItem[];
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export function CategoryPageTemplate({
  title,
  description,
  heroImage,
  intro,
  categories,
  breadcrumbs = [],
}: CategoryPageTemplateProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <li>
                  <Link to="/" className="hover:text-accent">Home</Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.path} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-primary-foreground">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.path} className="hover:text-accent">{crumb.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            {description}
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground mb-8">{intro}</p>
              
              {/* Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="group bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      )}
                      <span className="inline-block mt-3 text-accent font-medium text-sm">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}