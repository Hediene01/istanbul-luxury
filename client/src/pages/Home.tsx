/* ============================================================
   HOME PAGE — Bosphorus & Co.
   Design: Ottoman Noir Doré — Cinematic Luxury
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CoffeeSection from "@/components/CoffeeSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import AmbientSection from "@/components/AmbientSection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import QuoteDivider from "@/components/QuoteDivider";

const HERO_IMAGE = "/manus-storage/hero_restaurant_68d24ae3.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0.04_35)] text-[oklch(0.92_0.04_80)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AmbientSection />
      <MenuSection />
      <QuoteDivider
        quote="To dine here is to step into a living poem — where every flavour carries the memory of a thousand years."
        author="Istanbul Gourmet Magazine"
        bgImage={HERO_IMAGE}
      />
      <CoffeeSection />
      <ExperienceSection />
      <GallerySection />
      <ReservationSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
