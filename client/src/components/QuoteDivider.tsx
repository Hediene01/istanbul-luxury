/* ============================================================
   QUOTE DIVIDER — Bosphorus & Co.
   Design: Full-width cinematic quote section with parallax
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface QuoteDividerProps {
  quote: string;
  author?: string;
  bgImage?: string;
}

export default function QuoteDivider({ quote, author, bgImage }: QuoteDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      } : {}}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[oklch(0.14_0.04_35/0.88)]" />
      <div className="absolute inset-0 ottoman-pattern opacity-40" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Opening quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-8xl text-[oklch(0.72_0.12_75/30%)] leading-none mb-4 select-none"
          aria-hidden
        >
          "
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-2xl lg:text-4xl italic text-[oklch(0.97_0.02_80)] leading-relaxed mb-6"
        >
          {quote}
        </motion.blockquote>

        {author && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75/50%)]" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75/70%)]">
              {author}
            </span>
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75/50%)]" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
