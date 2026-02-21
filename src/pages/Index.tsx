// Superteam Ukraine Landing Page
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CommunitySection from "@/components/CommunitySection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <WhatWeDoSection />
        <CommunitySection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
