/* ============================================================
   ABOUT SECTION — Bosphorus & Co.
   Design: Asymmetric layout, Istanbul storytelling, gold accents
   Animation: Scroll-triggered reveal with stagger
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const COFFEE_IMAGE = "/manus-storage/coffee_hero_923a92a8.jpg";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "5★", label: "Rating" },
  { value: "48", label: "Signature Dishes" },
  { value: "∞", label: "Memories Made" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-36 bg-[oklch(0.14_0.04_35)] overflow-hidden">
      {/* Ottoman pattern background */}
      <div className="absolute inset-0 ottoman-pattern opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src={COFFEE_IMAGE}
                alt="Turkish coffee with Bosphorus view"
                className="w-full h-full object-cover object-center"
              />
              {/* Gold border frame */}
              <div className="absolute inset-0 border border-[oklch(0.72_0.12_75/20%)]" />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[oklch(0.72_0.12_75/60%)]" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[oklch(0.72_0.12_75/60%)]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[oklch(0.72_0.12_75/60%)]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[oklch(0.72_0.12_75/60%)]" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-[oklch(0.20_0.05_35)] border border-[oklch(0.72_0.12_75/20%)] p-6 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl text-[oklch(0.72_0.12_75)] font-semibold">{stat.value}</div>
                    <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[oklch(0.92_0.04_80/0.5)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:pl-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-[oklch(0.72_0.12_75/60%)]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
                Our Story
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl text-[oklch(0.97_0.02_80)] leading-tight mb-6"
            >
              Where the Bosphorus
              <br />
              <span className="italic text-[oklch(0.72_0.12_75)]">meets your table</span>
            </motion.h2>

            {/* Gold divider */}
            <div className="gold-divider w-24 mb-8" />

            {/* Story paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="space-y-5"
            >
              <p className="font-body text-[oklch(0.92_0.04_80/0.75)] leading-relaxed text-base">
                Perched above the shimmering straits of the Bosphorus, <strong className="text-[oklch(0.92_0.04_80)]">Bosphorus &amp; Co.</strong> was born from a singular vision: to honour the rich culinary legacy of the Ottoman Empire while embracing the bold spirit of modern Istanbul.
              </p>
              <p className="font-body text-[oklch(0.92_0.04_80/0.65)] leading-relaxed text-base">
                Every dish is a dialogue between centuries — hand-selected spices from the Grand Bazaar, produce sourced from the fertile Aegean coast, and techniques refined across generations of master chefs. Our specialty coffee lounge pays homage to the ancient tradition of Turkish coffee, elevated with single-origin beans and artisanal craft.
              </p>
              <p className="font-body text-[oklch(0.92_0.04_80/0.65)] leading-relaxed text-base">
                Here, the warm amber light of a thousand lanterns, the whisper of the Bosphorus breeze, and the scent of cardamom and rose water conspire to create something rare — a dining experience that lingers long after the last sip.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex items-center gap-6"
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#menu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold"
              >
                Discover the Menu
              </button>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#gallery");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75/70%)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 flex items-center gap-2"
              >
                View Gallery
                <span className="text-base">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
