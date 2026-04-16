import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Cloud,
  ShieldCheck,
  Network,
  Settings,
  Database,
  Bot,
  Wrench,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import myLogo from "@/assets/RideNext_NOBG.png";
import { useLocation } from "wouter";
/* ---------- TYPES ---------- */
type MegaSection = {
  title: string;
  icon: React.ElementType;
  links: { label: string; href: string }[];
};

type NavItem =
  | { label: string; href: string }
  | { label: string; mega: MegaSection[] };

/* ---------- MENU DATA ---------- */
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us",
     mega: [
      
      {
        title: "About Us",
        icon: Cpu,
        links: [
          { label: "Overview", href: "/about" },
          { label: "Management", href: "/about/management" },
          { label: "Core Team", href: "/about/core-team" },
          { label: "Team Members", href: "/about/team-members" },
          { label: "Clients & Partners", href: "/about/clients-partners" },
        ],
  },],},
  {
    label: "Services",
    mega: [
      
      {
        title: "About Us",
        icon: Cpu,
        links: [
          { label: "Overview", href: "/about" },
          { label: "Management", href: "/about/management" },
          { label: "Core Team", href: "/about/core-team" },
          { label: "Team Members", href: "/about/team-members" },
          { label: "Clients & Partners", href: "/about/clients-partners" },
        ],
      },{
        title: "Product Engineering Services",
        icon: Cpu,
        links: [
          { label: "Custom Software Development", href: "/services/software" },
          { label: "Messaging & Telephony", href: "/services/telephony" },
          { label: "DevOps Practices", href: "/services/devops" },
          { label: "Technology Consulting & Architecture", href: "/services/architecture" },
        ],
      },
      {
        title: "Digital Transformation Services",
        icon: Cloud,
        links: [
          { label: "Cloud Platforms", href: "/services/cloud" },
          { label: "Salesforce", href: "/services/salesforce" },
          { label: "ServiceNow", href: "/services/servicenow" },
          { label: "Adobe Experience Manager", href: "/services/aem" },
        ],
      },
      {
        title: "Managed Services",
        icon: Settings,
        links: [
          { label: "Managed Cloud", href: "/services/managed-cloud" },
          { label: "Managed SOC", href: "/services/soc" },
          { label: "Managed NOC", href: "/services/noc" },
          { label: "Managed Data Center", href: "/services/datacenter" },
        ],
      },
      {
        title: "Platforms & Embedded",
        icon: Layers,
        links: [
          { label: "Device Driver Development", href: "/services/drivers" },
          { label: "IoT", href: "/services/iot" },
          { label: "Android Middleware", href: "/services/android" },
          { label: "eMobility", href: "/services/emobility" },
        ],
      },
      {
        title: "AI & ML",
        icon: Bot,
        links: [
          { label: "Generative AI", href: "/services/gen-ai" },
          { label: "AIOps", href: "/services/aiops" },
          { label: "Data Engineering", href: "/services/data-eng" },
          { label: "Actionable Insights", href: "/services/insights" },
        ],
      },
      {
        title: "Quality Engineering",
        icon: Wrench,
        links: [
          { label: "Quality Assurance", href: "/services/qa" },
          { label: "Test Automation Services", href: "/services/test-automation" },
        ],
      },
      {
        title: "Wireless & Network Engineering",
        icon: Network,
        links: [
          { label: "5G", href: "/services/5g" },
          { label: "Terrestrial & NTN", href: "/services/ntn" },
          { label: "SDN", href: "/services/sdn" },
          { label: "SD-WAN Implementation", href: "/services/sdwan" },
        ],
      },
      {
        title: "Secure by Design (SbD)",
        icon: ShieldCheck,
        links: [
          { label: "Device Security", href: "/services/device-security" },
          { label: "Application Security", href: "/services/app-security" },
          { label: "Cloud Security", href: "/services/cloud-security" },
          { label: "Network Security", href: "/services/network-security" },
        ],
      },
      {
        title: "Sustenance Engineering",
        icon: Database,
        links: [
          { label: "Test Automation & Optimization", href: "/services/test-opt" },
          { label: "Extended Support & Maintenance", href: "/services/support" },
          { label: "Product Lifecycle Management", href: "/services/plm" },
        ],
      },
    ],
  },

  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ---------- COMPONENT ---------- */
export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <img src={myLogo} className="h-14" alt="RideNext" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if ("mega" in item) {
                return (
                  <div key={item.label} className="group">
                    <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-slate-700 hover:text-[#f97316]">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </div>

                    {/* MEGA MENU */}
                    <div className="absolute left-0 right-0 top-full bg-[#f8fafc] border-t shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="container mx-auto px-6 py-10">
                        <div className="grid grid-cols-3 gap-6">
                          {item.mega.map((section) => {
                            const Icon = section.icon;
                            return (
                              <div
                                key={section.title}
                                className="bg-white border rounded-lg p-5"
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <Icon className="h-5 w-5 text-[#f97316]" />
                                  <h4 className="text-sm font-semibold text-[#f97316]">
                                    {section.title}
                                  </h4>
                                </div>

                                <ul className="space-y-2">
                                  {section.links.map((link) => (
                                    <li key={link.href}>
                                      <Link href={link.href}>
                                        <span className="text-sm text-slate-700 hover:text-[#f97316] cursor-pointer">
                                          • {link.label}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.label} href={item.href}>
                  <span
                    className={cn(
                      "text-sm font-medium cursor-pointer",
                      location === item.href
                        ? "text-[#f97316]"
                        : "text-slate-700 hover:text-[#f97316]"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white">
              Contact Us
            </Button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
