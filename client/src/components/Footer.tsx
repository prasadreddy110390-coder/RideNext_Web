import { Link } from "wouter";
import { Cpu, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import myLogo from "@assets/RideNext_NOBG.png";
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div>
              <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                <img src={myLogo} alt="RideNext Logo" className="h-12 md:h-16 lg:h-20 w-auto" />
              </Link>
            </div>
          </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering wireless innovation and IoT smart solutions for a connected future.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/peopleandculture" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">People & Culture</Link></li>
              <li><Link href="/lifeatridenext" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Life@RideNext</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">RideNext Software Solutions Pvt Ltd
                  174/A, 19th Main, HSR Layout Sector-4, Bengaluru 560102</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">(080) - 48513169</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">service@ridenext.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} RideNext. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
