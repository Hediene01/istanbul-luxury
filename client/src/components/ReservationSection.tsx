/* ============================================================
   RESERVATION SECTION — Bosphorus & Co.
   Design: Centered luxury form on dark marble-inspired background
   Animation: Form field stagger reveal
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Reservation request received", {
      description: "We will confirm your table within 24 hours. Thank you.",
      style: {
        background: "oklch(0.20 0.05 35)",
        border: "1px solid oklch(0.72 0.12 75 / 30%)",
        color: "oklch(0.92 0.04 80)",
      },
    });
    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  };

  const inputClass =
    "w-full bg-[oklch(0.18_0.04_35)] border border-[oklch(0.72_0.12_75/20%)] text-[oklch(0.92_0.04_80)] placeholder-[oklch(0.92_0.04_80/0.3)] px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75/60%)] transition-colors duration-300";

  const timeSlots = ["12:00", "12:30", "13:00", "13:30", "14:00", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

  return (
    <section id="reservation" ref={ref} className="relative py-24 lg:py-36 bg-[oklch(0.20_0.05_35)] overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-50" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_75/40%)] to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[oklch(0.72_0.12_75)]">
              Reservations
            </span>
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75/60%)]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-[oklch(0.97_0.02_80)] leading-tight mb-4">
            Reserve your
            <br />
            <span className="italic text-[oklch(0.72_0.12_75)]">evening</span>
          </h2>
          <p className="font-body text-sm text-[oklch(0.92_0.04_80/0.55)] leading-relaxed">
            Secure your table at Bosphorus &amp; Co. and begin an evening you will not forget.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[oklch(0.14_0.04_35/0.8)] border border-[oklch(0.72_0.12_75/15%)] p-8 lg:p-12 space-y-6 backdrop-blur-sm"
        >
          {/* Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+90 ..."
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
          </div>

          {/* Date + Time + Guests */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className={inputClass}
                style={{ colorScheme: "dark" }}
              />
            </div>
            <div>
              <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
                Time *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>Select time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
                Guests *
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>Guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
                <option value="9+">9+ Guests</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="font-body text-[10px] tracking-[0.25em] uppercase text-[oklch(0.72_0.12_75/70%)] block mb-2">
              Special Requests
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dietary requirements, special occasions, seating preferences..."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Gold divider */}
          <div className="gold-divider" />

          {/* Submit */}
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={submitting}
              className="btn-gold px-12 py-4 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full"
                  />
                  Sending...
                </span>
              ) : (
                "Confirm Reservation"
              )}
            </motion.button>
            <p className="font-body text-[10px] text-[oklch(0.92_0.04_80/0.35)] mt-4 tracking-wider">
              We will confirm your reservation within 24 hours
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
