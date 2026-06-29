/* ============================================================
   3D EXPERIENCE SECTION — Bosphorus & Co.
   Design: Immersive full-screen section with floating 3D elements
   Animation: CSS 3D transforms + Framer Motion floating effects
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-40 bg-[oklch(0.20_0.05_35)] overflow-hidden">
      {/* Ottoman pattern */}
      <div className="absolute inset-0 ottoman-pattern opacity-60" />

      {/* Decorative large circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[oklch(0.72_0.12_75/8%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[oklch(0.72_0.12_75/12%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: 3D Coffee Cup Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* 3D Scene Container */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96" style={{ perspective: "1000px" }}>

              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[oklch(0.72_0.12_75/20%)]"
                style={{ transformStyle: "preserve-3d", rotateX: "60deg" }}
              />

              {/* Floating coffee beans */}
              {[
                { top: "10%", left: "15%", delay: 0 },
                { top: "20%", right: "10%", delay: 0.5 },
                { bottom: "15%", left: "20%", delay: 1 },
                { bottom: "25%", right: "15%", delay: 1.5 },
                { top: "50%", left: "5%", delay: 0.8 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={pos as React.CSSProperties}
                  animate={{ y: [-6, 6, -6], rotate: [0, 15, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
                >
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <ellipse cx="8" cy="5" rx="7" ry="4" fill="oklch(0.45 0.08 40)" />
                    <path d="M8 1 C8 1, 6 5, 8 9" stroke="oklch(0.35 0.06 40)" strokeWidth="0.8" fill="none"/>
                  </svg>
                </motion.div>
              ))}

              {/* Central coffee cup - 3D floating */}
              <motion.div
                animate={{ y: [-12, 12, -12], rotateY: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Cup SVG */}
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Saucer */}
                  <ellipse cx="80" cy="130" rx="55" ry="12" fill="oklch(0.25 0.05 35)" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5"/>
                  <ellipse cx="80" cy="128" rx="42" ry="8" fill="oklch(0.30 0.05 35)"/>

                  {/* Cup body */}
                  <path d="M45 75 Q42 115 55 122 Q80 128 105 122 Q118 115 115 75 Z" fill="oklch(0.22 0.04 35)" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5"/>

                  {/* Cup rim */}
                  <ellipse cx="80" cy="75" rx="35" ry="8" fill="oklch(0.28 0.05 35)" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5"/>

                  {/* Coffee surface */}
                  <ellipse cx="80" cy="75" rx="30" ry="6" fill="oklch(0.35 0.08 40)"/>

                  {/* Gold rim decoration */}
                  <path d="M45 75 Q80 68 115 75" stroke="oklch(0.72 0.12 75)" strokeWidth="2" fill="none" opacity="0.6"/>

                  {/* Handle */}
                  <path d="M115 85 Q135 85 135 100 Q135 115 115 115" stroke="oklch(0.72 0.12 75)" strokeWidth="3" fill="none" strokeLinecap="round"/>

                  {/* Ottoman pattern on cup */}
                  <text x="62" y="102" fontSize="18" fill="oklch(0.72 0.12 75)" opacity="0.3" fontFamily="serif">✦</text>

                  {/* Gold spoon */}
                  <path d="M55 128 L35 145" stroke="oklch(0.72 0.12 75)" strokeWidth="2" strokeLinecap="round"/>
                  <ellipse cx="33" cy="147" rx="5" ry="3" fill="oklch(0.72 0.12 75)" transform="rotate(-45 33 147)"/>
                </svg>

                {/* Steam wisps */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <motion.div
                    animate={{ y: [0, -30], opacity: [0.5, 0], scaleX: [1, 1.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="w-0.5 h-8 rounded-full"
                    style={{ background: "linear-gradient(to top, oklch(0.92 0.04 80 / 40%), transparent)" }}
                  />
                  <motion.div
                    animate={{ y: [0, -25], opacity: [0.4, 0], scaleX: [1, 1.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                    className="w-0.5 h-6 rounded-full"
                    style={{ background: "linear-gradient(to top, oklch(0.92 0.04 80 / 30%), transparent)" }}
                  />
                  <motion.div
                    animate={{ y: [0, -35], opacity: [0.5, 0], scaleX: [1, 1.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                    className="w-0.5 h-10 rounded-full"
                    style={{ background: "linear-gradient(to top, oklch(0.92 0.04 80 / 40%), transparent)" }}
                  />
                </div>
              </motion.div>

              {/* Floating golden spoon */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-8 right-8"
              >
                <div className="w-2 h-12 bg-gradient-to-b from-[oklch(0.72_0.12_75)] to-[oklch(0.60_0.10_72)] rounded-full opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[oklch(0.72_0.12_75/60%)]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)]">
                The Experience
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[oklch(0.97_0.02_80)] leading-tight mb-6">
              A ritual of
              <br />
              <span className="italic text-[oklch(0.72_0.12_75)]">timeless pleasure</span>
            </h2>

            <div className="gold-divider w-24 mb-8" />

            <div className="space-y-6">
              {[
                {
                  icon: "◈",
                  title: "The Ceremony",
                  text: "Every coffee service begins with a ritual — the grinding of beans, the slow pour, the moment of stillness before the first sip.",
                },
                {
                  icon: "◈",
                  title: "The Ambience",
                  text: "Warm amber light, the gentle sound of the Bosphorus, and the scent of cardamom create an atmosphere unlike any other in Istanbul.",
                },
                {
                  icon: "◈",
                  title: "The Craft",
                  text: "Our baristas are trained in both ancient Turkish coffee traditions and modern specialty techniques — masters of their art.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
                  className="flex gap-4"
                >
                  <span className="text-[oklch(0.72_0.12_75)] text-lg mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-display text-base text-[oklch(0.92_0.04_80)] mb-1">{item.title}</div>
                    <p className="font-body text-sm text-[oklch(0.92_0.04_80/0.55)] leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#reservation");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold"
              >
                Reserve your evening
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
