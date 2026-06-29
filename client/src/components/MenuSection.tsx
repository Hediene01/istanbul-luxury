/* ============================================================
   MENU SECTION — Bosphorus & Co.
   Design: 2x2 luxury food cards, hover depth effect, gold accents
   Animation: Staggered scroll-triggered card reveal
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dishes = [
  {
    id: 1,
    image: "/manus-storage/dish1_886c0fda.jpg",
    name: "Ottoman Lamb Rack",
    description: "Slow-roasted rack of lamb with saffron jus, pomegranate reduction, and edible gold leaf. A tribute to the imperial kitchens of Topkapi.",
    price: "₺1380",
    category: "Signature Main",
  },
  {
    id: 2,
    image: "/manus-storage/dish2_a67ad00d.jpg",
    name: "Bosphorus Sea Bass",
    description: "Line-caught sea bass from the Bosphorus strait, served with lemon caviar, truffle foam, and Aegean herbs on white marble.",
    price: "₺1590",
    category: "Seafood",
  },
  {
    id: 3,
    image: "/manus-storage/dish3_7ae3363f.jpg",
    name: "Imperial Baklava",
    description: "Forty layers of hand-stretched filo, Antep pistachios, rose-infused honey, and pistachio ice cream. A dessert of legend.",
    price: "₺820",
    category: "Dessert",
  },
  {
    id: 4,
    image: "/manus-storage/dish4_3bd700e8.jpg",
    name: "Wagyu Tenderloin",
    description: "A5 Wagyu beef with Ottoman spice crust, truffle jus, roasted heritage vegetables, and gold leaf — the pinnacle of luxury.",
    price: "₺2100",
    category: "Premium Cut",
  },
];

export default function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" ref={ref} className="relative py-24 lg:py-36 bg-[oklch(0.20_0.05_35)] overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 ottoman-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_75)]">
              Signature Dishes
            </span>
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-[oklch(0.97_0.02_80)] leading-tight mb-4">
            Each plate tells a
            <br />
            <span className="italic text-[oklch(0.72_0.12_75)]">century of flavour</span>
          </h2>
          <p className="font-body text-[oklch(0.92_0.04_80/0.6)] max-w-lg mx-auto text-sm leading-relaxed">
            Our chefs draw from five centuries of Ottoman culinary tradition, reimagined for the contemporary palate.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="luxury-card group relative overflow-hidden bg-[oklch(0.14_0.04_35)] border border-[oklch(0.72_0.12_75/15%)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.04_35/0.8)] via-transparent to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-[oklch(0.14_0.04_35/0.8)] border border-[oklch(0.72_0.12_75/30%)] px-3 py-1">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75)]">
                    {dish.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl text-[oklch(0.97_0.02_80)] leading-tight group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="font-display text-xl text-[oklch(0.72_0.12_75)] font-semibold shrink-0">
                    {dish.price}
                  </span>
                </div>
                <div className="gold-divider w-full mb-3" />
                <p className="font-body text-sm text-[oklch(0.92_0.04_80/0.6)] leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Gold corner accent on hover */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[oklch(0.72_0.12_75/0%)] group-hover:border-r-[oklch(0.72_0.12_75/20%)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-gold">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
