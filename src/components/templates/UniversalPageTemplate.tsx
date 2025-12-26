import { ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { HeroWithQuoteForm } from "@/components/sections/HeroWithQuoteForm";
import { FreeQuoteBanner } from "@/components/sections/FreeQuoteBanner";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { StickyQuoteWidget } from "@/components/forms/StickyQuoteWidget";

interface Breadcrumb {
  name: string;
  path: string;
}

interface UniversalPageTemplateProps {
  // Hero Section
  title: string;
  subtitle?: string;
  heroImage: string;
  breadcrumbs?: Breadcrumb[];
  
  // Main Content
  children: ReactNode;
  
  // Optional sections
  showFreeQuoteBanner?: boolean;
  showCommitmentSection?: boolean;
  commitmentContent?: string;
  commitmentTitle?: string;
  
  // Sidebar options
  sidebarProps?: {
    showWeAccept?: boolean;
    showClientReview?: boolean;
    showSignTypes?: boolean;
    showIndustries?: boolean;
    showSubstrates?: boolean;
    showQuoteForm?: boolean;
  };
}

export function UniversalPageTemplate({
  title,
  subtitle,
  heroImage,
  breadcrumbs = [],
  children,
  showFreeQuoteBanner = true,
  showCommitmentSection = true,
  commitmentContent = "We deliver the professional signs, wraps, graphics, and displays you need to attract and retain more customers and clients. Our experienced professionals are dedicated to delivering the right products and support throughout custom sign design, expert production, installation, and beyond for all of your signage products. Anytime you need effective and functional signs, produced to your specifications, that fits your budget, and completed according to your time guidelines, trust Royal Signs & Awnings. We are the professional Houston sign company you can count on for your business signage needs.",
  commitmentTitle = "Our Commitment To You",
  sidebarProps = {},
}: UniversalPageTemplateProps) {
  return (
    <Layout>
      {/* Hero Section with Quote Form */}
      <HeroWithQuoteForm
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <div className="lg:col-span-2">
              {/* Main Content passed as children */}
              {children}
              
              {/* Free Quote Banner */}
              {showFreeQuoteBanner && <FreeQuoteBanner className="my-8" />}
              
              {/* Commitment Section */}
              {showCommitmentSection && (
                <CommitmentSection
                  title={commitmentTitle}
                  content={commitmentContent}
                />
              )}
            </div>

            {/* Sidebar with Sticky Quote Form */}
            <div className="lg:col-span-1">
              {/* Sticky Quote Widget at top */}
              <StickyQuoteWidget />
              
              {/* Other sidebar sections */}
              <div className="mt-6">
                <Sidebar {...sidebarProps} showQuoteForm={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
