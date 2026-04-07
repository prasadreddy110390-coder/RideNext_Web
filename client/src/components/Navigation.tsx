import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import myLogo from "@assets/RideNext_NOBG.png";

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
      {
        href: "/product/bluefox",
        label: "BLUEFOX – Advanced Wireless Test Simulator",
      },
      {
        href: "/product/asndecoder",
        label: "ASN Encoder Decoder",
      },
      {
        href: "/product/nearrtric",
        label: "NEAR RT RIC",
      },
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

function RenderMenu({ items }: { items: NavItem[] }) {
  return (
    <>
      {items.map((item) => {
        const hasSub = item.submenu && item.submenu.length > 0;

        if (!hasSub) {
          return (
            <Link key={item.href} href={item.href!}>
              <div className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-black cursor-pointer whitespace-nowrap">
                {item.label}
              </div>
            </Link>
          );
        }

        return (
          <div key={item.label} className="relative group/sub">
            <div className="flex justify-between items-center px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-black cursor-pointer whitespace-nowrap">
              {item.label}
              <ChevronRight className="w-3 h-3" />
            </div>

            <div className="absolute left-full top-0 ml-1 min-w-[260px] bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
              <RenderMenu items={item.submenu!} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const sections = [
      "configuration",
      "connect",
      "fault",
      "security",
      "software",
      "performance",
    ];

    const handleScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

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
            <img src={myLogo} alt="RideNext Logo" className="h-14 md:h-20 lg:h-24 w-auto" />
          </Link>

          {/* Desktop Menu */}
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

                  <div className="absolute left-0 mt-2 w-60 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    {link.submenu?.map((item) => {
                      const hasNested = item.submenu && item.submenu.length > 0;

                      if (!hasNested) {
                        return (
                          <Link key={item.href} href={item.href!}>
                            <div
                              className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0a1f44] border-l-2 border-transparent hover:border-[#0a1f44] cursor-pointer transition-all duration-200"
                              onClick={(e) => {
                                const hash = item.href?.split("#")[1];

                                if (hash) {
                                  const el = document.getElementById(hash);
                                  if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({
                                      behavior: "smooth",
                                      block: "start",
                                    });
                                    window.history.replaceState(null, "", item.href);
                                  }
                                }
                              }}
                            >
                              {item.label}
                            </div>
                          </Link>
                        );
                      }

                      return (
                        <div key={item.label} className="relative group/ems">

                          <div
                            // className="px-4 py-2 text-sm font-medium hover:bg-slate-50 cursor-pointer flex justify-between items-center">
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0a1f44] border-l-2 border-transparent hover:border-[#0a1f44] cursor-pointer transition-all duration-200 flex justify-between items-center">
                            {item.label}
                            <ChevronRight className="w-3 h-3" />
                          </div>

                          <div className="absolute left-full top-0 ml-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover/ems:opacity-100 group-hover/ems:visible transition-all duration-200 z-50">

                            {item.submenu?.map((sub) => (
                              <Link key={sub.href} href={sub.href!}>
                                <div
                                  className={cn(
                                    "px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 border-l-2",
                                    activeSection === sub.href?.split("#")[1]
                                      ? "bg-blue-100 text-[#0a1f44] border-[#0a1f44]"
                                      : "text-slate-700 border-transparent hover:bg-blue-50 hover:text-[#0a1f44] hover:border-[#0a1f44]"
                                  )}
                                  onClick={(e) => {
                                    const hash = sub.href?.split("#")[1];

                                    if (hash) {
                                      const el = document.getElementById(hash);

                                      if (el) {
                                        e.preventDefault();

                                        el.scrollIntoView({
                                          behavior: "smooth",
                                          block: "start",
                                        });

                                        window.history.replaceState(null, "", sub.href);
                                      }
                                    } else {
                                      window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                      });
                                    }
                                  }}
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
                </div>
              );
            })}

            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium">
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
                      {link.submenu?.map((item) => {
                        const hasNested = item.submenu && item.submenu.length > 0;

                        if (!hasNested) {
                          return (
                            <Link key={item.href} href={item.href!}>
                              <div className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0a1f44] border-l-2 border-transparent hover:border-[#0a1f44] cursor-pointer transition-all duration-200">
                                {item.label}
                              </div>
                            </Link>
                          );
                        }

                        return (
                          <div key={item.label} className="px-4 py-2">
                            <Link href={item.href!}>
                              <div className="text-sm font-semibold text-[#0a1f44] cursor-pointer">
                                {item.label}
                              </div>
                            </Link>

                            <div className="ml-3 mt-2 flex flex-col">
                              {item.submenu?.map((sub) => (
                                <Link key={sub.href} href={sub.href!}>
                                  <div className="py-1 text-sm text-gray-600 hover:text-[#0a1f44] cursor-pointer">
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
