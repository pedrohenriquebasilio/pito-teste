import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Takeaway", href: "#takeaway" },
    { name: "Sobre", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-4 md:px-6 overflow-x-hidden",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4 sm:py-6 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <Link href="/">
          <a className={cn(
            "text-lg sm:text-xl md:text-2xl font-display font-black tracking-tighter uppercase hover:opacity-80 transition-all duration-500 whitespace-nowrap",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}>
            PITO DO BAIRRO
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:opacity-70",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#reservations")}
            className={cn(
              "font-bold uppercase tracking-widest transition-all duration-500",
              isScrolled 
                ? "bg-primary text-primary-foreground" 
                : "bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground border-2 border-primary-foreground"
            )}
          >
            Reservar Mesa
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors duration-500",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-lg font-bold uppercase tracking-widest py-2"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#reservations")}
            className="w-full font-bold uppercase tracking-widest mt-2"
          >
            Reservar Mesa
          </Button>
        </div>
      )}
    </nav>
  );
}
