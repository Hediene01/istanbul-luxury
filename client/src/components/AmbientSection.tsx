/* ============================================================
   AMBIENT SECTION — Bosphorus & Co.
   Design: Full-width ambient section with key brand numbers
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { value: "5", unit: "★", label: "Michelin Recognition" },
  { value: "48", unit: "+", label: "Signature Dishes" },
  { value: "12", unit: "", label: "Single-Origin Coffees" },
  { value: "500", unit: "m²", label: "Bosphorus Terrace" },
];

export default function AmbientSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 bg-[oklch(0.11_0.03_35)] overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="text-center group"
            >
              <div className="font-display text-5xl lg:text-6xl text-[oklch(0.72_0.12_75)] font-light leading-none mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.value}
                <span className="text-3xl">{item.unit}</span>
              </div>
              <div className="gold-divider w-12 mx-auto mb-3" />
              <div className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.92_0.04_80/0.5)]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
