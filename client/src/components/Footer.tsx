import { Link } from "wouter";
import { Cpu, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center text-white">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Ride<span className="text-primary">Next</span>
              </span>
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
              <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Our Services</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Our Expertise</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">Wireless Solutions</li>
              <li className="text-slate-400">IoT Implementation</li>
              <li className="text-slate-400">Embedded Systems</li>
              <li className="text-slate-400">Cloud Integration</li>
              <li className="text-slate-400">Testing Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">(080) - 48513169</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">info@ridenext.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} RideNext. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
