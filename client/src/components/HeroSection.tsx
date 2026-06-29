/* ============================================================
   HERO SECTION — Bosphorus & Co.
   Design: Cinematic full-screen, parallax, animated text reveal
   Image: Istanbul restaurant with Bosphorus view at golden hour
   ============================================================ */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "/manus-storage/hero_restaurant_68d24ae3.jpg";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToNext = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: imageY }}
      >
        <img
          src={HERO_IMAGE}
          alt="Bosphorus & Co. luxury restaurant interior"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_35/0.5)] via-[oklch(0.14_0.04_35/0.3)] to-[oklch(0.14_0.04_35/0.85)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.04_35/0.6)] via-transparent to-[oklch(0.14_0.04_35/0.3)]" />
      </motion.div>

      {/* Ottoman geometric pattern overlay */}
      <div className="absolute inset-0 ottoman-pattern pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
          <span className="font-body text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_75)]">
            Istanbul · Est. 2019
          </span>
          <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-[oklch(0.97_0.02_80)] leading-[0.9] tracking-tight mb-2"
        >
          Luxury Dining
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light italic text-[oklch(0.72_0.12_75)] leading-[0.9] tracking-tight mb-6"
        >
          &amp; Specialty Coffee
        </motion.h1>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="font-body text-sm tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)] mb-4"
        >
          in Istanbul
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="font-body text-base sm:text-lg text-[oklch(0.92_0.04_80/0.75)] max-w-xl leading-relaxed mb-10"
        >
          Where Istanbul elegance meets unforgettable taste.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => {
              const el = document.querySelector("#reservation");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold px-8 py-4 text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Reserve a Table
          </motion.button>
          <motion.button
            onClick={() => {
              const el = document.querySelector("#menu");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.92_0.04_80/0.8)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 px-8 py-4 border border-[oklch(0.92_0.04_80/20%)] hover:border-[oklch(0.72_0.12_75/40%)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Menu
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[oklch(0.72_0.12_75/60%)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.14_0.04_35)] to-transparent pointer-events-none" />
    </section>
  );
}
