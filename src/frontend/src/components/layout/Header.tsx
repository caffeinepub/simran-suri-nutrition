import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally close menu when path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300",
        scrolled
          ? "shadow-sm border-b border-sage/20"
          : "border-b border-border/40",
      )}
    >
      <div className="container-wide px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3 leading-none"
            data-ocid="header.link"
          >
            <img
              src="/assets/uploads/Simran-Suri-Letterhead.pdf-2-1.png"
              alt="Simran Suri Nutrition logo"
              className="h-10 md:h-12 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-xl font-semibold text-foreground tracking-tight">
                Simran Suri
              </span>
              <span className="text-[11px] font-body text-muted-foreground tracking-wide uppercase font-medium">
                Clinical Dietitian & Nutrition Consultant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="header.link"
                className={cn(
                  "px-4 py-2 text-sm font-body font-medium rounded-md transition-colors duration-200",
                  currentPath === link.to
                    ? "text-sage bg-sage-light/50"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                size="sm"
                className="ml-2 bg-primary text-primary-foreground hover:opacity-90 font-body font-medium"
              >
                Book a Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav
            className="flex flex-col py-3 px-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="header.link"
                className={cn(
                  "py-3 px-2 text-sm font-body font-medium border-b border-border/40 last:border-0 transition-colors",
                  currentPath === link.to
                    ? "text-sage"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/contact">
                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 font-body">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
