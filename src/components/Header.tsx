import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/categories", label: "Categories" },
    { to: "/ascii-converter", label: "ASCII Converter" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">😊</span>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BruteFaces
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={isActive(link.to) ? "default" : "ghost"}
                  className="nav-link"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive(link.to) ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
