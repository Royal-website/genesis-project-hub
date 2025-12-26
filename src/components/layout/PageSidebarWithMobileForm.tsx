import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Star } from "lucide-react";

interface PageSidebarWithMobileFormProps {
  children?: ReactNode;
  showWeAccept?: boolean;
  showClientReview?: boolean;
}

export function PageSidebarWithMobileForm({
  children,
  showWeAccept = true,
  showClientReview = true,
}: PageSidebarWithMobileFormProps) {
  return (
    <>
      {/* Desktop Sidebar - No floating form */}
      <div className="hidden lg:block lg:col-span-1">
        <div className="space-y-6">
          {showWeAccept && (
            <div className="bg-primary rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary-foreground text-center mb-3">
                We Accept:
              </h3>
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="bg-card px-2 py-1 rounded text-xs">Visa</div>
                <div className="bg-card px-2 py-1 rounded text-xs">Mastercard</div>
                <div className="bg-card px-2 py-1 rounded text-xs">Discover</div>
                <div className="bg-card px-2 py-1 rounded text-xs">Amex</div>
              </div>
            </div>
          )}

          {showClientReview && (
            <div className="bg-primary rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-foreground text-center mb-4">
                Client Review
              </h3>
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">They were great!</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  We used them for our sign in front of our building and they were great!... <span className="text-accent cursor-pointer">read more</span>
                </p>
                <p className="text-sm font-semibold text-foreground text-right">- Blake Nichols</p>
              </div>
            </div>
          )}

          {children}

          <Sidebar showQuoteForm={false} />
        </div>
      </div>
    </>
  );
}
