import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ClassesSection from "@/components/classes-section";
import JoinSection from "@/components/join-section";
import SuggestionsSection from "@/components/suggestions-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-primary text-slate-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ClassesSection />
      <JoinSection />
      <SuggestionsSection />
      <Footer />
    </div>
  );
}
