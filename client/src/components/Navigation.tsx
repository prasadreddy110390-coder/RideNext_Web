import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { 
    label: "About Us",
    submenu: [
      { href: "/about", label: "Overview" },
      { href: "/about/management", label: "Management" },
      { href: "/about/core-team", label: "Core Team" },
      { href: "/about/team-members", label: "Team Members" },
      { href: "/about/clients-partners", label: "Clients & Partners" },
    ]
  },
  {
    label: "Product",
    submenu: [
      { href: "/product", label: "Overview" },
      { href: "/product/asn-decoder", label: "ASN Decoder" },
      { href: "/product/simulator", label: "Simulator" },
    ]
  },
  {
    label: "Services",
    submenu: [
      { href: "/services", label: "Overview" },
      { href: "/wireless", label: "Wireless" },
      { href: "/iot", label: "IoT" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/database", label: "Database" },
      { href: "/services/virtualization", label: "Virtualization" },
      { href: "/services/testing", label: "Testing" },
    ]
  },
  {
    label: "Resources",
    submenu: [
      { href: "/resources", label: "Overview" },
      { href: "/resources/wireshark", label: "Wireshark" },
      { href: "/resources/events", label: "Events" },
      { href: "/resources/working-at-ridenext", label: "Working@RideNext" },
    ]
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-border/50 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              Ride<span className="text-primary">Next</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, idx) => {
              const hasSubmenu = "submenu" in link;
              const isActive = !hasSubmenu && location === link.href;
              
              if (hasSubmenu) {
                const prefix = link.label.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={prefix} className="relative group">
                    <div className={cn(
                      "text-sm font-medium transition-colors cursor-pointer relative py-1 flex items-center gap-1",
                      link.submenu?.some(item => location.startsWith(item.href.split('/').slice(0, -1).join('/'))) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                    )}>
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                      {link.submenu?.some(item => location.startsWith(item.href.split('/').slice(0, -1).join('/'))) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                      )}
                    </div>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                      {link.submenu?.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div className={cn(
                            "px-4 py-3 text-sm font-medium border-b border-slate-100 last:border-b-0 transition-colors cursor-pointer",
                            location === item.href 
                              ? "bg-primary/10 text-primary" 
                              : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                          )}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1",
                      isActive ? "text-primary font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </div>
                </Link>
              );
            })}
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium shadow-md shadow-primary/20">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl animate-accordion-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
