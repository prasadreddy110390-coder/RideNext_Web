import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import myLogo from "@assets/RideNext_NOBG.png";
type NavItem = {
  label: string;
  href?: string;
  submenu?: NavItem[];
};
const NAVY = "text-[#0a1f44]";

const links: NavItem[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    label: "About Us",
    submenu: [
      { href: "/about", label: "Who We Are" },
      { href: "/about/whyus", label: "Why Us" },
      { href: "/about/management", label: "Leadership Message" },
      { href: "/about/Corecompetencies", label: "Core Competencies" },
    ],
  },
  {
    label: "Products",
    submenu: [
      {
        href: "/product/5gems",
        label: "5G Element Management System (EMS)",
        submenu: [
          { href: "/product/5gems#configuration", label: "Configuration Module" },
          { href: "/product/5gems#connect", label: "Connect Module" },
          { href: "/product/5gems#fault", label: "Fault Management" },
          { href: "/product/5gems#security", label: "Security Management" },
          { href: "/product/5gems#software", label: "Software Management" },
          { href: "/product/5gems#performance", label: "Performance Module" },
        ],
      },
      { href: "/product/bluefox", label: "BLUEFOX – Advanced Wireless Test Simulator" },
      { href: "/product/asndecoder", label: "ASN (Abstract Syntax Notation) Encoder Decoder" },
      { href: "/product/nearrtric", label: "NEAR RT RIC/KUBERNETES" },
    ],
  },
  {
    label: "Services",
    submenu: [
      { href: "/services/qualityengineering", label: "Quality Engineering" },
      { href: "/services/wireless", label: "Wireless & Network Engineering" },
      { href: "/services/virtualization", label: "Virtualisation & Containersation" },
      { href: "/services/webdevolpment", label: "Web Development" },
      { href: "/services/database", label: "Database Engineering" },
      { href: "/services/kubernetes", label: "Powering Cloud-Native Platforms with Kubernetes Expertise" },
      { href: "/services/ranintegration", label: "RAN Integration" },
    ],
  },
  {
    label: "People & Culture",
    submenu: [
      { href: "/product", label: "HR Value Statement" },
      { href: "/product/asn-decoder", label: "What we do" },
      { href: "/product/simulator", label: "HR Strategy" },
    ],
  },
  {
    label: "Life @ RideNext",
    submenu: [
      { href: "/services", label: "Onboarding Experience" },
      { href: "/wireless", label: "Team Photos" },
      { href: "/iot", label: "Events" },
      { href: "/services/web-development", label: "Hackathons" },
      { href: "/services/database", label: "CSR Activities" },
      { href: "/services/virtualization", label: "Festival & Diversity Celebrations" },
      { href: "/services/testing", label: "Career Page / Growth Stories" },
    ],
  },
  {
    label: "Careers",
    submenu: [
      { href: "/careers", label: "Join Us" },
      { href: "/resources/events", label: "Current Openings" },
      { href: "/resources/working-at-ridenext", label: "Resume Database @ RideNext" },
    ],
  },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-border/50 py-3"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src={myLogo}
              alt="RideNext Logo"
              className="h-14 md:h-20 lg:h-24 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const hasSubmenu = link.submenu && link.submenu.length > 0;

              // 🔹 Simple Link (Home)
              if (!hasSubmenu) {
                return (
                  <Link key={link.href} href={link.href!}>
                    <div
                      className={cn(
                        "text-lg font-medium cursor-pointer py-1 transition-colors",
                        NAVY,
                        "hover:opacity-80"
                      )}
                    >
                      {link.label}
                    </div>
                  </Link>
                );
              }

              // 🔹 Dropdown Menu
              return (
                <div key={link.label} className="relative group">
                  <div
                    className={cn(
                      "text-lg font-medium cursor-pointer flex items-center gap-1 py-1 transition-colors",
                      NAVY,
                      "hover:opacity-80"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </div>

                  <div className="absolute left-0 mt-2 w-60 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    {link.submenu.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className="px-4 py-2 text-sm font-medium hover:bg-slate-50 cursor-pointer">
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <Link href="/contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white text-sm font-medium"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn("md:hidden p-2", NAVY)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((link) => {
              const hasSubmenu = link.submenu && link.submenu.length > 0;

              if (!hasSubmenu) {
                return (
                  <Link key={link.href} href={link.href!}>
                    <div
                      className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </div>
                  </Link>
                );
              }

              return (
                <div key={link.label}>
                  <div
                    className="flex justify-between items-center px-4 py-2 text-sm font-medium cursor-pointer hover:bg-slate-100 rounded-lg"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openMobileDropdown === link.label && "rotate-180"
                      )}
                    />
                  </div>

                  {openMobileDropdown === link.label && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.submenu.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div
                            className="px-4 py-2 text-sm rounded-md hover:bg-slate-100 cursor-pointer"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/contact">
              <div
                className="mt-2 bg-primary text-white text-center py-2 rounded-lg text-sm font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
