import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Sign Company", path: "/" },
  { name: "Indoor Signs", path: "/indoor-signs" },
  { name: "Outdoor Signs", path: "/outdoor-signs" },
  { name: "Awning Signs", path: "/awning-signs" },
  { name: "Vehicle Wraps", path: "/vehicle-wraps" },
  { name: "Custom Signs", path: "/custom-signs" },
  { name: "Business Signs", path: "/business-signs" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact Us", path: "/contact-us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-4">
          <a 
            href="tel:2816459935" 
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(281) 645-9935</span>
          </a>
          <span className="text-xs opacity-80">Open 24 Hours</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center">
              <svg viewBox="0 0 60 50" className="h-12 w-12 md:h-14 md:w-14">
                <path 
                  d="M30 5 L10 20 L10 45 L50 45 L50 20 Z" 
                  fill="hsl(37, 100%, 50%)" 
                  stroke="hsl(181, 100%, 10%)" 
                  strokeWidth="2"
                />
                <circle cx="30" cy="15" r="5" fill="hsl(37, 100%, 50%)" />
                <path d="M25 10 L30 3 L35 10" fill="hsl(37, 100%, 50%)" />
              </svg>
              <div className="ml-2">
                <div className="text-lg md:text-xl font-bold text-primary leading-tight">
                  ROYAL
                </div>
                <div className="text-lg md:text-xl font-bold text-primary leading-tight">
                  SIGNS
                </div>
                <div className="text-[8px] md:text-[10px] text-muted-foreground tracking-wider">
                  & Awnings
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors rounded",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t">
              <a href="tel:2816459935" className="flex-1">
                <Button className="w-full bg-primary hover:bg-secondary">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact-us" className="flex-1">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}