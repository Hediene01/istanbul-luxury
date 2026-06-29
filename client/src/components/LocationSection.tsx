/* ============================================================
   LOCATION SECTION — Bosphorus & Co.
   Design: Istanbul-inspired, split layout with map placeholder
   Animation: Scroll-triggered reveal
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Ortaköy Mahallesi, Bosphorus Caddesi No. 14\nBeşiktaş, Istanbul 34347",
  },
  {
    icon: Phone,
    label: "Reservations",
    value: "+90 212 XXX XX XX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@bosphorusco.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Lunch: 12:00 — 15:00\nDinner: 19:00 — 23:00\nCoffee Lounge: 10:00 — 24:00",
  },
];

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-36 bg-[oklch(0.14_0.04_35)] overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[oklch(0.72_0.12_75/60%)]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
                Find Us
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[oklch(0.97_0.02_80)] leading-tight mb-4">
              In the heart of
              <br />
              <span className="italic text-[oklch(0.72_0.12_75)]">Istanbul</span>
            </h2>

            <div className="gold-divider w-24 mb-8" />

            <p className="font-body text-sm text-[oklch(0.92_0.04_80/0.65)] leading-relaxed mb-10 max-w-sm">
              Nestled in the historic Ortaköy neighbourhood, steps from the iconic Bosphorus Bridge. Accessible by car, ferry, and metro — a destination worth the journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 border border-[oklch(0.72_0.12_75/30%)] flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={14} className="text-[oklch(0.72_0.12_75)]" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75/60%)] mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-sm text-[oklch(0.92_0.04_80/0.75)] leading-relaxed whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#reservation");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold"
              >
                Reserve a Table
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Map / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Decorative map placeholder with Istanbul silhouette */}
            <div className="relative bg-[oklch(0.18_0.04_35)] border border-[oklch(0.72_0.12_75/20%)] overflow-hidden" style={{ aspectRatio: "4/3" }}>

              {/* Grid lines suggesting a map */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="oklch(0.72 0.12 75)" strokeWidth="0.5"/>
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke="oklch(0.72 0.12 75)" strokeWidth="0.5"/>
                ))}
              </svg>

              {/* Istanbul silhouette */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                {/* Bosphorus water */}
                <path d="M160 0 Q180 50 170 100 Q165 150 175 200 Q180 250 170 300 L210 300 Q220 250 215 200 Q205 150 210 100 Q220 50 200 0 Z" fill="oklch(0.25 0.06 220)" opacity="0.4"/>

                {/* Mosque silhouettes */}
                <g opacity="0.3" fill="oklch(0.72 0.12 75)">
                  {/* Hagia Sophia */}
                  <rect x="60" y="140" width="60" height="40"/>
                  <ellipse cx="90" cy="140" rx="30" ry="20"/>
                  <rect x="55" y="100" width="6" height="45"/>
                  <rect x="119" y="100" width="6" height="45"/>
                  {/* Blue Mosque */}
                  <rect x="250" y="145" width="70" height="35"/>
                  <ellipse cx="285" cy="145" rx="35" ry="22"/>
                  <rect x="244" y="95" width="5" height="55"/>
                  <rect x="265" y="88" width="5" height="62"/>
                  <rect x="310" y="88" width="5" height="62"/>
                  <rect x="331" y="95" width="5" height="55"/>
                </g>

                {/* Location pin */}
                <g transform="translate(185, 120)">
                  <circle cx="0" cy="0" r="12" fill="oklch(0.72 0.12 75)" opacity="0.9"/>
                  <circle cx="0" cy="0" r="5" fill="oklch(0.14 0.04 35)"/>
                  <path d="M0 12 L-6 24 L0 20 L6 24 Z" fill="oklch(0.72 0.12 75)" opacity="0.9"/>
                  {/* Pulse rings */}
                  <circle cx="0" cy="0" r="20" stroke="oklch(0.72 0.12 75)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="12;28;12" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>

                {/* Label */}
                <text x="205" y="118" fontSize="9" fill="oklch(0.72 0.12 75)" fontFamily="serif" textAnchor="middle" opacity="0.8">
                  Bosphorus &amp; Co.
                </text>
              </svg>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[oklch(0.72_0.12_75/50%)]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[oklch(0.72_0.12_75/50%)]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[oklch(0.72_0.12_75/50%)]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[oklch(0.72_0.12_75/50%)]" />

              {/* Overlay label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[oklch(0.14_0.04_35/0.9)] border border-[oklch(0.72_0.12_75/30%)] px-4 py-2 text-center">
                <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">Ortaköy, Istanbul</div>
                <div className="font-body text-[10px] text-[oklch(0.92_0.04_80/0.5)]">Bosphorus Waterfront</div>
              </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-[oklch(0.72_0.12_75/5%)] blur-2xl rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
