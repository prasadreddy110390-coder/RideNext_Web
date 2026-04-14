import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import myLogo from "@assets/RideNext_NOBG.png";
import { useLocation } from "wouter";

const NAVY = "text-[#0a1f44]";

type NavItem = {
  href?: string;
  label: string;
  submenu?: NavItem[];
};

const links: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    submenu: [
      { href: "/about", label: "Who We Are" },
      { href: "/about/whyus", label: "Why Us" },
      { href: "/about/management", label: "Leadership Message" },
      { href: "/about/Corecompetencies", label: "Core Competencies" },
      { href: "/about/industry", label: "Industry & Govt. Forums" },
      { href: "/about/csractivity", label: "CSR Activity" },
    ],
  },
  {
    label: "Products",
    submenu: [
      {
        href: "/product/5gems",
        label: "5G Element Management System (EMS)",
        submenu: [
          { href: "/product/5gems", label: "Overview" },
          { href: "/product/5gems#configuration", label: "Configuration Module" },
          { href: "/product/5gems#connect", label: "Connect Module" },
          { href: "/product/5gems#fault", label: "Fault Management" },
          { href: "/product/5gems#security", label: "Security Management" },
          { href: "/product/5gems#software", label: "Software Management" },
          { href: "/product/5gems#performance", label: "Performance Module" },
        ],
      },
      { href: "/product/bluefox", label: "BLUEFOX – Advanced Wireless Test Simulator" },
      { href: "/product/asndecoder", label: "ASN Encoder Decoder" },
      { href: "/product/nearrtric", label: "NEAR RT RIC" },
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
  { href: "/peopleandculture", label: "People & Culture" },
  { href: "/lifeatridenext", label: "Life@RideNext" },
  { href: "/careers", label: "Careers" },
  { href: "/videolibrary", label: "Video Gallery" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [location] = useLocation();

  // ✅ Close function
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  // ✅ Close on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

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
          <Link href="/" className="flex items-center gap-2 cursor-pointer" onClick={closeMobileMenu}>
            <img src={myLogo} alt="RideNext Logo" className="h-14 md:h-20 lg:h-24 w-auto" />
          </Link>

          {/* Desktop Menu (UNCHANGED) */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const hasSubmenu = link.submenu && link.submenu.length > 0;

              if (!hasSubmenu) {
                return (
                  <Link key={link.href} href={link.href!}>
                    <div className={cn("text-lg font-medium cursor-pointer py-1", NAVY)}>
                      {link.label}
                    </div>
                  </Link>
                );
              }

              return (
                <div key={link.label} className="relative group">
                  <div className={cn("flex items-center gap-1 text-lg font-medium cursor-pointer", NAVY)}>
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
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
                      onClick={closeMobileMenu}
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
                      {link.submenu?.map((item) => {
                        const hasNested = item.submenu && item.submenu.length > 0;

                        if (!hasNested) {
                          return (
                            <Link key={item.href} href={item.href!}>
                              <div
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 cursor-pointer"
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </div>
                            </Link>
                          );
                        }

                        return (
                          <div key={item.label} className="px-4 py-2">
                            <Link href={item.href!}>
                              <div
                                className="text-sm font-semibold text-[#0a1f44] cursor-pointer"
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </div>
                            </Link>

                            <div className="ml-3 mt-2 flex flex-col">
                              {item.submenu?.map((sub) => (
                                <Link key={sub.href} href={sub.href!}>
                                  <div
                                    className="py-1 text-sm text-gray-600 hover:text-[#0a1f44] cursor-pointer"
                                    onClick={closeMobileMenu}
                                  >
                                    {sub.label}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/contact">
              <div
                className="mt-2 bg-primary text-white text-center py-2 rounded-lg text-sm font-medium cursor-pointer"
                onClick={closeMobileMenu}
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