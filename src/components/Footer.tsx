import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">Candles</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An upscale yet welcoming dining experience in the heart of Awka. Fine cuisine, handcrafted cocktails, and unforgettable ambiance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: "/menu", label: "Our Menu" },
                { to: "/reservations", label: "Reserve a Table" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Rt. Hon. Uche Okafor Street, Awka 420112, Anambra</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:08124959185" className="hover:text-primary transition-colors">0812 495 9185</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>6:00 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tue – Sun</span>
                <span>7:00 AM – 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Candles Restaurant & Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
