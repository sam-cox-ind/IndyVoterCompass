import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustCards from "@/components/TrustCards";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-950">
      <Navbar />
      <HeroSection />
      <TrustCards />
      <ExploreSection />
      <Footer />
    </main>
  );
}