import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import InteractiveBanner from "@/components/landing/InteractiveBanner";
import ExploreSection from "@/components/landing/ExploreSection";
import StepsSection from "@/components/landing/StepsSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DifferentiatorSection from "@/components/landing/DifferentiatorSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import TeamSection from "@/components/landing/TeamSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InteractiveBanner />
        {/* <ExploreSection /> */}
        <StepsSection />
        <StatsSection />
        <FeaturesSection />
        <DifferentiatorSection />
        <IntegrationsSection />
        <WorkflowSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;