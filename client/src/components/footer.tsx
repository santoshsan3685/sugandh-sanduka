import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "919890991136";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Fresh Collection", href: "/shop?category=fresh" },
    { label: "Floral Collection", href: "/shop?category=floral" },
    { label: "Premium Collection", href: "/shop?category=premium" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Shop", href: "/shop" },
  ],
};

const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    "Hi, I would like to know more about your car fresheners."
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

export function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl font-bold">Sugandh Sanduka</span>
            </Link>
            <p className="text-muted-foreground mt-4 mb-6 max-w-sm">
              Premium car fresheners crafted with passion. Transform every drive
              into an aromatic journey.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover-elevate text-white"
                aria-label="WhatsApp"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-foreground transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <SiWhatsapp className="h-4 w-4 flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Message on WhatsApp
                </button>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Sugandh Sanduka. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with care in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
