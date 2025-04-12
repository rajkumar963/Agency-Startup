
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UnlockSuccessSection from "@/components/UnlockSuccessSection";
import TreasureVaultSection from "@/components/TreasureVaultSection";
import BusinessFlowchart from "@/components/BusinessFlowchart";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <UnlockSuccessSection />
      <TreasureVaultSection />
      <BusinessFlowchart />
    </div>
  );
};

export default Index;
