/* ============================================================
   NAVBAR — Bosphorus & Co.
   Design: Transparent on hero → espresso semi-opaque on scroll
   Framer Motion: fade + slide-down entrance
   ============================================================ */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Coffee", href: "#coffee" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.14_0.04_35/0.95)] backdrop-blur-xl border-b border-[oklch(0.72_0.12_75/15%)] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Monogram SVG Logo */}
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="19" stroke="oklch(0.72 0.12 75)" strokeWidth="0.8" opacity="0.6"/>
                  <path d="M12 12 C12 12, 14 10, 17 12 C20 14, 20 18, 20 20 C20 22, 20 26, 17 28 C14 30, 12 28, 12 28 L12 12Z" fill="oklch(0.72 0.12 75)" opacity="0.9"/>
                  <path d="M20 20 C20 20, 22 18, 25 18 C28 18, 29 20, 29 22 C29 24, 27 26, 24 26 C21 26, 20 24, 20 24 L20 20Z" fill="oklch(0.72 0.12 75)" opacity="0.7"/>
                  <path d="M8 20 Q20 16 32 20" stroke="oklch(0.72 0.12 75)" strokeWidth="0.5" opacity="0.4" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-semibold tracking-widest text-[oklch(0.72_0.12_75)] leading-none">
                  BOSPHORUS
                </div>
                <div className="font-body text-[10px] tracking-[0.3em] text-[oklch(0.92_0.04_80/0.6)] uppercase leading-none mt-0.5">
                  &amp; Co.
                </div>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.92_0.04_80/0.7)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.72_0.12_75)] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.button
                onClick={() => handleNavClick("#reservation")}
                className="btn-gold ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Reserve
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[oklch(0.72_0.12_75)] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-[oklch(0.14_0.04_35/0.98)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 ottoman-pattern"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-display text-3xl text-[oklch(0.92_0.04_80)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => handleNavClick("#reservation")}
              className="btn-gold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Reserve a Table
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
