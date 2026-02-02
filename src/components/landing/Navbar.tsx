import { useState, forwardRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.whyUs"), href: "#why-us" },
    { name: t("nav.samples"), href: "#samples" },
    { name: t("nav.aiShortFilms"), href: "#ai-short-films" },
    { name: t("nav.howItWorks"), href: "#how-it-works" },
    { name: t("nav.blog"), href: "/blog" },
  ];

  return (
    <header ref={ref} role="banner">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong" aria-label="Main navigation">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="font-display text-xl md:text-2xl font-bold text-gradient" aria-label="edgeaihub - Home">
              edgeaihub
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6" role="menubar">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  role="menuitem"
                >
                  {link.name}
                </a>
              ))}
              <LanguageSelector />
              <ThemeToggle />
              <a href="tel:+917207926206" aria-label="Call to get your AI video ad">
                <Button variant="hero" size="sm">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +91 7207926206
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSelector variant="compact" />
              <button
                className="p-2 text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div id="mobile-menu" className="md:hidden pb-6 border-t border-border/50 mt-2 pt-4" role="menu">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center justify-between gap-4">
                  <ThemeToggle />
                  <a href="tel:+917207926206" aria-label="Call us" className="flex-1">
                    <Button variant="hero" className="w-full">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      {t("common.call")}: +91 7207926206
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
});

Navbar.displayName = "Navbar";

export default memo(Navbar);
