import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Steel Bars", href: "/category/steel-bars" },
    { name: "Mabati Roofing", href: "/category/mabati-roofing" },
    { name: "Security Products", href: "/category/security-products" },
    { name: "BRC Mesh", href: "/category/brc-mesh" },
    { name: "Construction Materials", href: "/category/construction-materials" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Devki Steel Mills Mabati" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-lg font-bold text-primary">Devki Steel Mills Mabati</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive(item.href) ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              +254755335197
            </Button>
            <Button variant="industrial" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quote
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-xs">
              <Phone className="h-3 w-3 mr-1" />
              +254755335197
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <WhatsAppButton 
                phoneNumber="+254755335197"
                variant="inline"
                className="w-full justify-center"
              />
              <Button variant="industrial" size="sm" className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;