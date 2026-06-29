/* ============================================================
   GALLERY SECTION — Bosphorus & Co.
   Design: Asymmetric masonry grid, dark overlay on hover, zoom
   Animation: Staggered scroll reveal
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const galleryItems = [
  {
    id: 1,
    image: "/manus-storage/hero_restaurant_68d24ae3.jpg",
    title: "The Dining Room",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 2,
    image: "/manus-storage/dish1_886c0fda.jpg",
    title: "Ottoman Lamb Rack",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    image: "/manus-storage/coffee1_86c198af.jpg",
    title: "Turkish Coffee",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    image: "/manus-storage/dish3_7ae3363f.jpg",
    title: "Imperial Baklava",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 5,
    image: "/manus-storage/coffee2_69ed8553.jpg",
    title: "Pistachio Latte",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 6,
    image: "/manus-storage/dish2_a67ad00d.jpg",
    title: "Bosphorus Sea Bass",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 7,
    image: "/manus-storage/coffee_hero_923a92a8.jpg",
    title: "Coffee Ceremony",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 8,
    image: "/manus-storage/dish4_3bd700e8.jpg",
    title: "Wagyu Tenderloin",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 9,
    image: "/manus-storage/coffee4_21447087.jpg",
    title: "Rose Garden Latte",
    colSpan: 1,
    rowSpan: 1,
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="relative py-24 lg:py-36 bg-[oklch(0.14_0.04_35)] overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_75)]">
              Gallery
            </span>
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-[oklch(0.97_0.02_80)] leading-tight">
            Moments of
            <span className="italic text-[oklch(0.72_0.12_75)]"> pure luxury</span>
          </h2>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ gridAutoRows: '220px' }}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              style={{ gridColumn: `span ${item.colSpan}`, gridRow: `span ${item.rowSpan}` }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-[oklch(0.14_0.04_35/0)] group-hover:bg-[oklch(0.14_0.04_35/0.65)] transition-all duration-400" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[oklch(0.72_0.12_75/30%)] transition-all duration-400" />

              {/* Title reveal on hover */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div>
                  <div className="gold-divider w-8 mb-2" />
                  <span className="font-display text-sm text-[oklch(0.97_0.02_80)]">{item.title}</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[oklch(0.72_0.12_75/0%)] group-hover:border-[oklch(0.72_0.12_75/60%)] transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
