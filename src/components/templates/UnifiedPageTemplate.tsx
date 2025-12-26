import { ReactNode, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { HeroWithSidebar } from "@/components/sections/HeroWithSidebar";
import { FreeQuoteBanner } from "@/components/sections/FreeQuoteBanner";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { StickyQuoteCard } from "@/components/forms/StickyQuoteCard";
import { MessageSquare, X, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { QuoteForm } from "@/components/forms/QuoteForm";

interface Breadcrumb {
  name: string;
  path: string;
}

interface UnifiedPageTemplateProps {
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

export function UnifiedPageTemplate({
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
}: UnifiedPageTemplateProps) {
  const [isMobileFormExpanded, setIsMobileFormExpanded] = useState(false);

  return (
    <Layout>
      {/* Hero Section - Title Only */}
      <HeroWithSidebar
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

            {/* Sidebar with Sticky Quote Card */}
            <div className="hidden lg:block lg:col-span-1">
              {/* Sticky Quote Card - stays fixed while scrolling */}
              <StickyQuoteCard />
              
              {/* Other sidebar sections below (will scroll normally) */}
              <div className="mt-6">
                <Sidebar {...sidebarProps} showQuoteForm={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: Collapsible floating button + expanded form */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        {/* Collapsed Button */}
        {!isMobileFormExpanded && (
          <button
            onClick={() => setIsMobileFormExpanded(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-2xl shadow-black/40 transition-all duration-300 animate-pulse hover:animate-none"
            aria-label="Get a free quote"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}

        {/* Expanded Form */}
        {isMobileFormExpanded && (
          <div className="bg-primary rounded-lg overflow-hidden shadow-2xl shadow-black/40 w-[calc(100vw-2rem)] max-w-sm animate-scale-in">
            <div className="py-3 px-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary-foreground tracking-wide uppercase">
                Get A Free Quote
              </h3>
              <button
                onClick={() => setIsMobileFormExpanded(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="bg-white p-4">
              <QuoteForm variant="sidebar" compact />
            </div>
            
            <div className="py-3 px-4 text-center">
              <p className="text-primary-foreground font-bold text-xs mb-1 tracking-wide">
                RATED 5.0 STARS
              </p>
              <div className="flex justify-center gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Link 
                to="/reviews" 
                className="text-primary-foreground/80 hover:text-primary-foreground text-xs underline transition-colors"
              >
                (Based on 54 Client Reviews)
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
