import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import RiskProfiles from "@/components/RiskProfiles";
import Features from "@/components/Features";
import ImpactGallery from "@/components/ImpactGallery";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <RiskProfiles />
      <Features />
      <ImpactGallery />
      <Vision />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
