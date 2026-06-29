/* ============================================================
   COFFEE SECTION — Bosphorus & Co.
   Design: Dark luxury coffee lounge aesthetic, steam animations
   Animation: Horizontal stagger reveal
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const coffees = [
  {
    id: 1,
    image: "/manus-storage/coffee1_86c198af.jpg",
    name: "Ottoman Turkish Coffee",
    description: "Prepared in a traditional copper cezve, our signature blend is roasted to perfection with cardamom and served with lokum.",
    price: "₺120",
    origin: "Yemeni Blend",
  },
  {
    id: 2,
    image: "/manus-storage/coffee2_69ed8553.jpg",
    name: "Signature Pistachio Latte",
    description: "House-made pistachio cream, single-origin espresso, and oat milk over ice. A taste of Istanbul in every sip.",
    price: "₺180",
    origin: "Ethiopia Yirgacheffe",
  },
  {
    id: 3,
    image: "/manus-storage/coffee3_0e39907e.jpg",
    name: "Bosphorus V60",
    description: "A slow pour-over ritual with single-origin beans, revealing floral and citrus notes that evoke the Aegean coast.",
    price: "₺160",
    origin: "Kenya AA",
  },
  {
    id: 4,
    image: "/manus-storage/coffee4_21447087.jpg",
    name: "Rose Garden Latte",
    description: "Velvety espresso with rose water, dried petals, and silky steamed milk. A floral ode to Ottoman gardens.",
    price: "₺150",
    origin: "Colombia Huila",
  },
];

export default function CoffeeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coffee" ref={ref} className="relative py-24 lg:py-36 bg-[oklch(0.14_0.04_35)] overflow-hidden">
      {/* Ottoman pattern */}
      <div className="absolute inset-0 ottoman-pattern opacity-50" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75/60%)]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_75)]">
              Specialty Coffee Lounge
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl lg:text-6xl text-[oklch(0.97_0.02_80)] leading-tight">
              The art of the
              <br />
              <span className="italic text-[oklch(0.72_0.12_75)]">perfect cup</span>
            </h2>
            <p className="font-body text-sm text-[oklch(0.92_0.04_80/0.6)] max-w-xs leading-relaxed lg:text-right">
              From ancient Turkish traditions to contemporary specialty craft — each cup is a ceremony.
            </p>
          </div>
        </motion.div>

        {/* Coffee Cards — Horizontal scroll on mobile, grid on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coffees.map((coffee, i) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="luxury-card group bg-[oklch(0.20_0.05_35)] border border-[oklch(0.72_0.12_75/15%)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.04_35/0.7)] to-transparent" />

                {/* Steam animation overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-0.5 h-6 bg-white/20 rounded-full steam-1" />
                  <div className="w-0.5 h-8 bg-white/15 rounded-full steam-2" />
                  <div className="w-0.5 h-5 bg-white/20 rounded-full steam-3" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-[oklch(0.97_0.02_80)] leading-tight group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300">
                    {coffee.name}
                  </h3>
                  <span className="font-display text-lg text-[oklch(0.72_0.12_75)] font-semibold shrink-0">
                    {coffee.price}
                  </span>
                </div>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75/60%)] mb-3">
                  {coffee.origin}
                </div>
                <div className="gold-divider w-full mb-3" />
                <p className="font-body text-xs text-[oklch(0.92_0.04_80/0.55)] leading-relaxed">
                  {coffee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="font-body text-xs text-[oklch(0.92_0.04_80/0.4)] tracking-[0.2em] uppercase">
            All coffees available hot or iced · Seasonal specials change monthly
          </p>
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />
    </section>
  );
}
