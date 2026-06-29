/* ============================================================
   FOOTER — Bosphorus & Co.
   Design: Dark espresso, gold accents, elegant layout
   ============================================================ */
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "Facebook", href: "#", icon: "FB" },
  { name: "TripAdvisor", href: "#", icon: "TA" },
  { name: "Google", href: "#", icon: "G" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Coffee", href: "#coffee" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[oklch(0.11_0.03_35)] border-t border-[oklch(0.72_0.12_75/15%)] overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-30" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/50%)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-12 py-16 lg:py-20">

          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="19" stroke="oklch(0.72 0.12 75)" strokeWidth="0.8" opacity="0.6"/>
                  <path d="M12 12 C12 12, 14 10, 17 12 C20 14, 20 18, 20 20 C20 22, 20 26, 17 28 C14 30, 12 28, 12 28 L12 12Z" fill="oklch(0.72 0.12 75)" opacity="0.9"/>
                  <path d="M20 20 C20 20, 22 18, 25 18 C28 18, 29 20, 29 22 C29 24, 27 26, 24 26 C21 26, 20 24, 20 24 L20 20Z" fill="oklch(0.72 0.12 75)" opacity="0.7"/>
                  <path d="M8 20 Q20 16 32 20" stroke="oklch(0.72 0.12 75)" strokeWidth="0.5" opacity="0.4" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-semibold tracking-widest text-[oklch(0.72_0.12_75)] leading-none">BOSPHORUS</div>
                <div className="font-body text-[10px] tracking-[0.3em] text-[oklch(0.92_0.04_80/0.5)] uppercase leading-none mt-0.5">&amp; Co.</div>
              </div>
            </div>
            <p className="font-body text-sm text-[oklch(0.92_0.04_80/0.55)] leading-relaxed mb-6 max-w-xs">
              A sanctuary of Ottoman elegance and modern luxury, perched above the shimmering Bosphorus in Istanbul.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 border border-[oklch(0.72_0.12_75/25%)] flex items-center justify-center font-body text-[10px] text-[oklch(0.72_0.12_75/60%)] hover:text-[oklch(0.72_0.12_75)] hover:border-[oklch(0.72_0.12_75/60%)] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75/60%)] mb-6">
              Navigation
            </div>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block font-body text-sm text-[oklch(0.92_0.04_80/0.55)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hours & Contact */}
          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75/60%)] mb-6">
              Opening Hours
            </div>
            <div className="space-y-3 mb-8">
              {[
                { day: "Monday — Friday", hours: "12:00 — 23:00" },
                { day: "Saturday", hours: "11:00 — 24:00" },
                { day: "Sunday", hours: "11:00 — 22:00" },
                { day: "Coffee Lounge", hours: "Daily 10:00 — 24:00" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between gap-4">
                  <span className="font-body text-xs text-[oklch(0.92_0.04_80/0.45)]">{item.day}</span>
                  <span className="font-body text-xs text-[oklch(0.72_0.12_75/70%)]">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-body text-xs text-[oklch(0.92_0.04_80/0.45)]">+90 212 XXX XX XX</div>
              <div className="font-body text-xs text-[oklch(0.92_0.04_80/0.45)]">hello@bosphorusco.com</div>
              <div className="font-body text-xs text-[oklch(0.92_0.04_80/0.35)] leading-relaxed">
                Ortaköy Mahallesi, Beşiktaş<br />Istanbul, Turkey
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-[oklch(0.92_0.04_80/0.3)] tracking-wider">
            © 2024 Bosphorus &amp; Co. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-[oklch(0.92_0.04_80/0.25)] tracking-wider">
            Luxury Dining &amp; Specialty Coffee · Istanbul
          </p>
        </div>
      </div>
    </footer>
  );
}
